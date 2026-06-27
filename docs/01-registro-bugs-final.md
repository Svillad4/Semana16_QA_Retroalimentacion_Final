# 01 - Registro de bugs final

Completa esta tabla con los errores encontrados durante la revision QA del proyecto. No escribas solamente "error corregido". Debes explicar que paso, donde paso y como lo corregiste.

| ID | Error encontrado | Area | Prioridad | Evidencia antes | Correccion aplicada | Archivo modificado | Estado |
|---|---|---|---|---|---|---|---|
| BUG-001 | El sistema no validaba bien la ruta de evidencia al registrar un bug. | Validacion | Alta | | Se mejoro la validacion para exigir una ruta de evidencia valida antes de guardar el registro. | src/js/validaciones.js | Corregido |
| BUG-002 | El boton de eliminar borraba un bug sin pedir confirmacion. | Usabilidad | Media | | Se agrego una alerta de confirmacion con SweetAlert2 antes de eliminar. | src/js/qa.js | Corregido |
| BUG-003 | El dashboard no mostraba una metrica clara para bugs en revision. | QA | Media | | Se agrego una nueva metrica y la categoria QA en el formulario para mejorar el seguimiento. | src/js/dashboard.js, src/js/app.js | Corregido |

## Como definir la prioridad

- **Alta:** afecta una funcion principal del proyecto.
- **Media:** afecta usabilidad, documentacion, presentacion o experiencia.
- **Baja:** detalle visual, mejora menor o ajuste no critico.

## Reflexion breve

Escribe que bug fue mas importante y por que:

> El bug mas importante fue el de eliminacion sin confirmacion, porque podia causar perdidas accidentales de informacion y afectar la experiencia del usuario. La mejora hizo el sistema mas seguro y claro.
