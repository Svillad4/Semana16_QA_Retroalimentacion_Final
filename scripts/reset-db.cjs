const fs = require('fs');
const path = require('path');

const root = process.cwd();
const initial = path.join(root, 'db.initial.json');
const target = path.join(root, 'db.json');

if (!fs.existsSync(initial)) {
  console.error('No se encontro db.initial.json');
  process.exit(1);
}

fs.copyFileSync(initial, target);
console.log('db.json fue restaurado correctamente desde db.initial.json');
