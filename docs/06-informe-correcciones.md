# 06 - Informe de correcciones aplicadas

Este informe resume las correcciones realizadas despues del diagnostico QA y la coevaluacion.

## 1. Resumen del proyecto

- Nombre del proyecto: Semana 16 - QA, retroalimentacion y plan de mejora.
- Integrantes: Santiago Villada.
- Fecha: 27/06/2026.

## 2. Errores mas importantes detectados

1. La validacion de evidencias era debil y permitia registrar informacion incompleta.
2. El boton de eliminar borraba registros sin confirmacion previa.
3. El dashboard no mostraba una metrica clara para bugs en revision.

## 3. Correcciones aplicadas

| Error | Correccion | Archivo modificado | Evidencia |
|---|---|---|---|
| Validacion debil de evidencias | Se agrego una regla para exigir una ruta de evidencia valida antes de guardar. | src/js/validaciones.js | |
| Eliminacion sin confirmacion | Se agrego una alerta de confirmacion con SweetAlert2. | src/js/qa.js | |
| Falta de seguimiento de bugs en revision | Se agrego una nueva metrica y la categoria QA en el formulario y dashboard. | src/js/dashboard.js, src/js/app.js | |

## 4. Decisiones tecnicas tomadas

Explica por que aplicaste esas soluciones y no otras:

> Elegi estas soluciones porque eran cambios concretos, faciles de probar y que mejoraban directamente la experiencia del usuario sin alterar la estructura original del proyecto.

## 5. Resultado final

Describe el estado final del proyecto despues de las correcciones:

> El proyecto quedo mas completo, con mejores validaciones, menos riesgo de errores al eliminar registros y una mejor organizacion para la entrega final.

## 6. Preparacion para exposicion

Explica como usaras estas correcciones y evidencias durante la exposicion final:

> Voy a explicar cada correccion mostrando el problema, la solucion aplicada y el beneficio para el usuario, para demostrar que hize un proceso real de QA.
