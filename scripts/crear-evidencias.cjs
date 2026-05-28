const fs = require('fs');
const path = require('path');

const dirs = [
  'evidencias/antes',
  'evidencias/despues',
  'evidencias/consola',
  'evidencias/json-server',
  'evidencias/responsive',
  'evidencias/coevaluacion',
  'evidencias/plan-mejora',
];

for (const dir of dirs) {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
}

console.log('Carpetas de evidencias verificadas o creadas correctamente.');
