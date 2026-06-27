const { spawn } = require('node:child_process');
const net = require('node:net');

const root = process.cwd();

async function isJsonServerAvailable(port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/bugs`);
    return response.ok;
  } catch {
    return false;
  }
}

function findAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(error);
      }
    });

    server.once('listening', () => {
      const { port } = server.address();
      server.close((closeError) => {
        if (closeError) {
          reject(closeError);
        } else {
          resolve(port);
        }
      });
    });

    server.listen(startPort, '127.0.0.1');
  });
}

async function main() {
  const apiPort = await findAvailablePort(3001);
  const webPort = await findAvailablePort(5173);

  let dbProcess = null;
  const jsonServerAlreadyRunning = await isJsonServerAvailable(apiPort);
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const shellOption = process.platform === 'win32';

  if (!jsonServerAlreadyRunning) {
    console.log(`Iniciando JSON Server en http://127.0.0.1:${apiPort}`);
    dbProcess = spawn(npmCommand, ['run', 'db', '--', '--port', String(apiPort)], {
      cwd: root,
      stdio: 'inherit',
      shell: shellOption,
    });
  } else {
    console.log(`JSON Server ya activo en http://127.0.0.1:${apiPort}`);
  }

  console.log(`Iniciando Vite en http://localhost:${webPort}`);

  const viteProcess = spawn(npmCommand, ['run', 'dev', '--', '--host', '0.0.0.0', '--port', String(webPort)], {
    cwd: root,
    stdio: 'inherit',
    shell: shellOption,
    env: {
      ...process.env,
      VITE_API_URL: `http://localhost:${apiPort}`,
    },
  });

  const stopAll = () => {
    if (dbProcess) {
      dbProcess.kill('SIGINT');
    }
    viteProcess.kill('SIGINT');
  };

  process.on('SIGINT', stopAll);
  process.on('SIGTERM', stopAll);

  if (dbProcess) {
    dbProcess.on('exit', (code) => {
      if (code && code !== 0) process.exit(code);
    });
  }

  viteProcess.on('exit', (code) => {
    if (code && code !== 0) process.exit(code);
  });
}

main().catch((error) => {
  console.error('No fue posible iniciar la aplicacion:', error);
  process.exit(1);
});
