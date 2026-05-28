# Semana 16 - QA, retroalimentacion entre pares y plan de mejora

## Guia principal para el estudiante

Bienvenido a la actividad final de la Semana 16. Este ZIP fue creado para que realices una revision completa de calidad sobre tu proyecto web final. La idea no es solamente abrir una pagina y decir que funciona. Tu tarea es actuar como desarrollador y evaluador: debes ejecutar el proyecto, diagnosticar errores, registrar bugs, recibir o realizar retroalimentacion entre pares, aplicar correcciones, comparar el antes y el despues, y justificar un plan de mejora.

Esta actividad cierra el proceso de la Unidad 2: construir, validar, corregir, documentar, presentar, argumentar decisiones tecnicas y mejorar continuamente.

---

## 1. Que vas a lograr

Al terminar esta actividad debes ser capaz de:

1. Ejecutar un proyecto web en VS Code.
2. Usar una base de datos simulada con JSON Server.
3. Diagnosticar errores de funcionalidad, validacion, usabilidad, documentacion y exposicion.
4. Registrar bugs con prioridad alta, media o baja.
5. Aplicar correcciones y documentar que cambiaste.
6. Comparar resultados antes y despues.
7. Realizar o recibir coevaluacion entre pares.
8. Construir un plan de mejora final.
9. Organizar evidencias para Moodle.
10. Preparar una explicacion clara para la exposicion final del proyecto.

---

## 2. Que contiene este ZIP

```text
Semana16_QA_Retroalimentacion_Final/
|
├── README.md                         Guia principal de la actividad
├── package.json                      Configuracion del proyecto y librerias
├── db.json                           Base de datos simulada con JSON Server
├── db.initial.json                   Copia original de la base de datos
|
├── src/
│   ├── css/styles.css                Estilos del proyecto
│   └── js/                           Logica JavaScript modular
│       ├── app.js                    Interfaz principal
│       ├── api.js                    Conexion con JSON Server
│       ├── validaciones.js           Reglas de validacion
│       ├── qa.js                     Funciones de QA, bugs y coevaluacion
│       ├── dashboard.js              Grafico y metricas
│       └── utils.js                  Utilidades generales
|
├── docs/                             Documentos que debes completar
│   ├── 01-registro-bugs-final.md
│   ├── 02-coevaluacion-pares.md
│   ├── 03-comparacion-antes-despues.md
│   ├── 04-plan-mejora-final.md
│   ├── 05-checklist-qa-final.md
│   ├── 06-informe-correcciones.md
│   ├── 07-rubrica.md
│   ├── 08-guia-evidencias.md
│   ├── 09-preguntas-defensa.md
│   └── 10-guia-clase-profunda.md
|
├── evidencias/                       Aqui guardas tus capturas
│   ├── antes/
│   ├── despues/
│   ├── consola/
│   ├── json-server/
│   ├── responsive/
│   ├── coevaluacion/
│   └── plan-mejora/
|
└── scripts/                          Scripts de apoyo
    ├── check-project.js              Verifica archivos minimos
    ├── reset-db.cjs                  Restaura db.json
    └── crear-evidencias.cjs          Crea carpetas de evidencias
```

---

## 3. Librerias que usa el proyecto

Este proyecto usa librerias para simular una experiencia real de entrega profesional.

| Libreria | Para que sirve |
|---|---|
| Vite | Ejecuta el proyecto web de forma local |
| JSON Server | Simula una base de datos local |
| Bootstrap | Permite una interfaz responsive y ordenada |
| Bootstrap Icons | Agrega iconos visuales |
| SweetAlert2 | Muestra alertas claras de exito, error y confirmacion |
| Chart.js | Crea el grafico del dashboard |
| Concurrently | Ejecuta Vite y JSON Server al mismo tiempo |

No debes descargar cada libreria manualmente. Todas se instalan con el comando `npm install`.

---

## 4. Requisitos antes de iniciar

Debes tener instalado:

1. Visual Studio Code.
2. Node.js.
3. Navegador web, preferiblemente Google Chrome.
4. Terminal disponible dentro de VS Code.

Para verificar si tienes Node.js instalado, abre una terminal y escribe:

```bash
node -v
```

Tambien puedes verificar npm:

```bash
npm -v
```

Si esos comandos muestran una version, puedes continuar.

---

## 5. Como instalar el proyecto

1. Descarga y descomprime el ZIP.
2. Abre la carpeta en VS Code.
3. Abre la terminal integrada.
4. Ejecuta:

```bash
npm install
```

Este comando descarga todas las librerias necesarias.

---

## 6. Como ejecutar la web

Cuando termine la instalacion, ejecuta:

```bash
npm run start
```

Este comando abre dos servicios al mismo tiempo:

| Servicio | URL esperada |
|---|---|
| Proyecto web con Vite | http://localhost:5173 |
| Base de datos JSON Server | http://localhost:3001 |

Abre el navegador en:

```text
http://localhost:5173
```

Para revisar la base de datos puedes entrar a:

```text
http://localhost:3001/bugs
http://localhost:3001/mejoras
http://localhost:3001/coevaluaciones
http://localhost:3001/checklist
```

---

## 7. Como debe funcionar la web

La aplicacion debe permitirte:

1. Ver un dashboard con cantidad de bugs, bugs corregidos, pendientes, mejoras y coevaluaciones.
2. Registrar bugs o errores encontrados en el proyecto.
3. Marcar bugs como corregidos.
4. Registrar retroalimentacion de pares.
5. Registrar mejoras futuras.
6. Marcar requisitos del checklist final.
7. Ver un grafico de bugs por prioridad.
8. Usar la informacion generada para completar los documentos de entrega.

---

## 8. Tu mision como estudiante

Tu trabajo no es solamente usar la aplicacion. Debes mejorarla y dejar evidencia de tu proceso.

### Fase 1: Diagnostico

Revisa el proyecto y detecta problemas. Puedes analizar:

- Formularios.
- Validaciones.
- Acciones de botones.
- Consola del navegador.
- Funcionamiento de JSON Server.
- Responsive en celular.
- Claridad del README.
- Evidencias disponibles.
- Preparacion para exposicion.

### Fase 2: Registro de bugs

Registra los errores en la web y tambien en:

```text
docs/01-registro-bugs-final.md
```

Cada bug debe tener:

- ID.
- Descripcion.
- Area.
- Prioridad.
- Evidencia.
- Correccion aplicada.
- Estado.

### Fase 3: Correccion

Aplica correcciones en el codigo o documentacion.

En el proyecto hay comentarios `TODO ESTUDIANTE`. Debes buscarlos y resolver al menos dos.

Puedes buscarlos en VS Code con:

```text
Ctrl + Shift + F
```

Y escribir:

```text
TODO ESTUDIANTE
```

### Fase 4: Comparacion antes/despues

Por cada correccion importante, guarda evidencia:

- Captura antes del error.
- Captura despues de corregir.
- Archivo modificado.
- Explicacion tecnica.

Completa:

```text
docs/03-comparacion-antes-despues.md
```

### Fase 5: Coevaluacion

Revisa el proyecto de un compañero o pide que revisen el tuyo. Registra la retroalimentacion en la web y en:

```text
docs/02-coevaluacion-pares.md
```

### Fase 6: Plan de mejora final

Completa:

```text
docs/04-plan-mejora-final.md
```

No escribas mejoras vagas como "mejorar diseño". Debes explicar que mejoraras, por que es importante y como lo implementarias.

---

## 9. Retos obligatorios del codigo

Debes resolver al menos dos de estos retos:

1. Mejorar la validacion de la evidencia en `src/js/validaciones.js`.
2. Agregar confirmacion con SweetAlert2 antes de eliminar un bug en `src/js/qa.js`.
3. Agregar una nueva categoria de area QA.
4. Mejorar el dashboard con una metrica adicional.
5. Mejorar el diseno responsive de una seccion.
6. Agregar una mejora propia al plan de mejora.

---

## 10. Evidencias que debes guardar

Guarda capturas en estas carpetas:

| Carpeta | Evidencia esperada |
|---|---|
| evidencias/antes | Error antes de corregir |
| evidencias/despues | Resultado despues de corregir |
| evidencias/consola | Consola sin errores criticos |
| evidencias/json-server | JSON Server funcionando |
| evidencias/responsive | Vista movil o responsive |
| evidencias/coevaluacion | Retroalimentacion recibida o realizada |
| evidencias/plan-mejora | Plan o mejoras finales |

---

## 11. Verificacion antes de entregar

Ejecuta:

```bash
npm run check
```

Este comando revisa si existen archivos y carpetas obligatorias. No reemplaza tu revision, pero te ayuda a detectar faltantes.

Si necesitas recrear las carpetas de evidencia:

```bash
npm run evidencias
```

Si necesitas restaurar la base de datos inicial:

```bash
npm run reset-db
```

---

## 12. Que debes entregar en Moodle

Entrega un ZIP o enlace de repositorio que contenga:

1. Proyecto actualizado.
2. `docs/01-registro-bugs-final.md` completo.
3. `docs/02-coevaluacion-pares.md` completo.
4. `docs/03-comparacion-antes-despues.md` completo.
5. `docs/04-plan-mejora-final.md` completo.
6. `docs/05-checklist-qa-final.md` completo.
7. `docs/06-informe-correcciones.md` completo.
8. Evidencias organizadas en carpetas.
9. Captura de consola sin errores criticos.
10. Captura de JSON Server funcionando.

---

## 13. Criterios de evaluacion

| Criterio | Porcentaje |
|---|---:|
| Diagnostico tecnico del proyecto | 20% |
| Registro de bugs priorizado | 20% |
| Correcciones aplicadas | 25% |
| Evidencias antes/despues | 15% |
| Coevaluacion y retroalimentacion | 10% |
| Plan de mejora justificado | 10% |

---

## 14. Consejo final

Un proyecto final no se defiende solamente diciendo que funciona. Se defiende mostrando evidencias, explicando decisiones tecnicas, reconociendo errores, aplicando correcciones y proponiendo mejoras futuras. Ese es el objetivo de esta actividad.
