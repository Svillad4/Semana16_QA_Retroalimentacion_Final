import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const required = [
  'README.md',
  'package.json',
  'db.json',
  'src/js/app.js',
  'src/js/qa.js',
  'src/js/validaciones.js',
  'src/css/styles.css',
  'docs/01-registro-bugs-final.md',
  'docs/02-coevaluacion-pares.md',
  'docs/03-comparacion-antes-despues.md',
  'docs/04-plan-mejora-final.md',
  'docs/05-checklist-qa-final.md',
  'docs/06-informe-correcciones.md',
  'evidencias/antes',
  'evidencias/despues',
  'evidencias/consola',
  'evidencias/json-server',
  'evidencias/responsive',
  'evidencias/coevaluacion',
];

let ok = true;
console.log('\nRevision de archivos minimos para entrega Semana 16 QA:\n');

for (const item of required) {
  const fullPath = path.join(root, item);
  const exists = fs.existsSync(fullPath);
  console.log(`${exists ? 'OK ' : 'FALTA'} - ${item}`);
  if (!exists) ok = false;
}

console.log('\nTareas que aun debes revisar manualmente:');
console.log('- Completar documentos en docs/.');
console.log('- Guardar capturas reales en evidencias/.');
console.log('- Resolver al menos dos TODO ESTUDIANTE del codigo.');
console.log('- Verificar consola sin errores criticos.');
console.log('- Confirmar que JSON Server funciona en http://localhost:3001.');

if (!ok) {
  console.log('\nResultado: hay archivos o carpetas faltantes. Revisa la lista anterior.');
  process.exit(1);
}

console.log('\nResultado: estructura minima encontrada. Continua revisando contenido y evidencias.');
