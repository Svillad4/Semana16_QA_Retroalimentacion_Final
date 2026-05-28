import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import { bindEvents, loadData } from './qa.js';

const app = document.getElementById('app');

app.innerHTML = `
  <header class="hero py-5 mb-4">
    <nav class="navbar navbar-expand-lg navbar-dark container mb-4">
      <a class="navbar-brand fw-bold" href="#inicio"><i class="bi bi-shield-check me-2"></i>QA Final Semana 16</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-label="Abrir menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#dashboard">Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="#bugs">Bugs</a></li>
          <li class="nav-item"><a class="nav-link" href="#coevaluacion">Coevaluacion</a></li>
          <li class="nav-item"><a class="nav-link" href="#mejora">Plan de mejora</a></li>
          <li class="nav-item"><a class="nav-link" href="#entrega">Entrega</a></li>
        </ul>
      </div>
    </nav>

    <section id="inicio" class="container">
      <span class="brand-pill mb-3"><i class="bi bi-code-slash"></i> Proyecto web final + QA + mejora continua</span>
      <div class="row align-items-center g-4">
        <div class="col-lg-8">
          <h1 class="display-5 fw-bold">Revisa, corrige y justifica tu proyecto web final</h1>
          <p class="lead mt-3">Esta aplicacion te ayuda a desarrollar la Actividad 4 de la Semana 16: diagnosticar errores, registrar bugs, recibir retroalimentacion, aplicar correcciones, comparar antes/despues y justificar un plan de mejora.</p>
        </div>
        <div class="col-lg-4">
          <div class="card card-soft text-dark">
            <div class="card-body">
              <h2 class="h5 fw-bold">Ruta de trabajo</h2>
              <ol class="mb-0">
                <li>Ejecuta el proyecto.</li>
                <li>Registra bugs priorizados.</li>
                <li>Realiza coevaluacion.</li>
                <li>Aplica correcciones.</li>
                <li>Guarda evidencias.</li>
                <li>Justifica el plan de mejora.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>

  <main class="container pb-5">
    <section class="todo-box p-4 mb-4">
      <h2 class="h4 fw-bold"><i class="bi bi-exclamation-triangle me-2"></i>Antes de empezar</h2>
      <p class="mb-2">Este proyecto trae datos iniciales y algunos puntos intencionalmente mejorables. Tu tarea es detectarlos, documentarlos, corregirlos y justificar por que tus ajustes mejoran el proyecto final.</p>
      <p class="mb-0"><strong>Recuerda:</strong> no basta con decir que funciona. Debes demostrarlo con capturas, checklist, registro de bugs y explicacion tecnica.</p>
    </section>

    <section id="dashboard" class="mb-5">
      <h2 class="section-title mb-3">1. Dashboard de QA</h2>
      <div class="row g-3 mb-4">
        <div class="col-6 col-lg"><div class="card card-soft"><div class="card-body"><span class="text-muted">Bugs</span><h3 id="metric-total-bugs">0</h3></div></div></div>
        <div class="col-6 col-lg"><div class="card card-soft"><div class="card-body"><span class="text-muted">Corregidos</span><h3 id="metric-corregidos">0</h3></div></div></div>
        <div class="col-6 col-lg"><div class="card card-soft"><div class="card-body"><span class="text-muted">Pendientes</span><h3 id="metric-pendientes">0</h3></div></div></div>
        <div class="col-6 col-lg"><div class="card card-soft"><div class="card-body"><span class="text-muted">Mejoras</span><h3 id="metric-mejoras">0</h3></div></div></div>
        <div class="col-6 col-lg"><div class="card card-soft"><div class="card-body"><span class="text-muted">Coevaluaciones</span><h3 id="metric-coevaluaciones">0</h3></div></div></div>
      </div>
      <div class="card card-soft"><div class="card-body"><canvas id="bugsChart" height="110"></canvas></div></div>
    </section>

    <section id="bugs" class="mb-5">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h2 class="section-title mb-0">2. Registro de bugs priorizado</h2>
        <span class="badge text-bg-primary">Entregable principal</span>
      </div>
      <div class="row g-4">
        <div class="col-lg-5">
          <div class="card card-soft">
            <div class="card-body">
              <h3 class="h5 fw-bold">Registrar bug o mejora aplicada</h3>
              <form id="bug-form" class="vstack gap-3">
                <div>
                  <label class="form-label" for="titulo">Error encontrado</label>
                  <input class="form-control" id="titulo" name="titulo" placeholder="Ej: El formulario permite enviar campos vacios">
                </div>
                <div class="row g-2">
                  <div class="col-md-6">
                    <label class="form-label" for="area">Area</label>
                    <select class="form-select" id="area" name="area">
                      <option value="">Selecciona...</option>
                      <option>Funcionalidad</option>
                      <option>Validacion</option>
                      <option>JSON Server</option>
                      <option>Usabilidad</option>
                      <option>Accesibilidad</option>
                      <option>Documentacion</option>
                      <option>Exposicion</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="prioridad">Prioridad</label>
                    <select class="form-select" id="prioridad" name="prioridad">
                      <option value="">Selecciona...</option>
                      <option>Alta</option>
                      <option>Media</option>
                      <option>Baja</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="form-label" for="estado">Estado</label>
                  <select class="form-select" id="estado" name="estado">
                    <option>Pendiente</option>
                    <option>En revision</option>
                    <option>Corregido</option>
                  </select>
                </div>
                <div>
                  <label class="form-label" for="archivo">Archivo o seccion modificada</label>
                  <input class="form-control" id="archivo" name="archivo" placeholder="Ej: src/js/validaciones.js">
                </div>
                <div>
                  <label class="form-label" for="evidencia">Ruta de evidencia</label>
                  <input class="form-control" id="evidencia" name="evidencia" placeholder="Ej: evidencias/antes/bug-004.png">
                </div>
                <div>
                  <label class="form-label" for="correccion">Correccion aplicada o propuesta</label>
                  <textarea class="form-control" id="correccion" name="correccion" rows="3"></textarea>
                </div>
                <button class="btn btn-success" type="submit"><i class="bi bi-plus-circle me-2"></i>Registrar bug</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card card-soft">
            <div class="card-body">
              <h3 class="h5 fw-bold">Bugs registrados en JSON Server</h3>
              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                  <thead><tr><th>ID</th><th>Error</th><th>Area</th><th>Prioridad</th><th>Estado</th><th>Archivo</th><th>Acciones</th></tr></thead>
                  <tbody id="bugs-tbody"></tbody>
                </table>
              </div>
              <p class="small text-muted mt-3 mb-0">Despues de registrar o corregir bugs, completa tambien docs/01-registro-bugs-final.md y docs/03-comparacion-antes-despues.md.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="coevaluacion" class="mb-5">
      <h2 class="section-title mb-3">3. Coevaluacion y retroalimentacion entre pares</h2>
      <div class="row g-4">
        <div class="col-lg-5">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Registrar retroalimentacion</h3>
            <form id="coevaluacion-form" class="vstack gap-3">
              <input class="form-control" name="revisor" placeholder="Nombre del revisor o equipo">
              <input class="form-control" name="proyectoRevisado" placeholder="Proyecto revisado">
              <textarea class="form-control" name="fortaleza" rows="3" placeholder="Fortaleza del proyecto"></textarea>
              <textarea class="form-control" name="mejora" rows="3" placeholder="Mejora recomendada con argumento tecnico"></textarea>
              <select class="form-select" name="listoExposicion">
                <option>Listo para exposicion</option>
                <option>En revision</option>
                <option>Requiere correcciones</option>
              </select>
              <button class="btn btn-primary" type="submit"><i class="bi bi-chat-square-text me-2"></i>Guardar coevaluacion</button>
            </form>
          </div></div>
        </div>
        <div class="col-lg-7">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Retroalimentaciones guardadas</h3>
            <div id="coevaluaciones-list" class="list-group"></div>
          </div></div>
        </div>
      </div>
    </section>

    <section id="mejora" class="mb-5">
      <h2 class="section-title mb-3">4. Plan de mejora final</h2>
      <div class="row g-4">
        <div class="col-lg-5">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Agregar mejora continua</h3>
            <form id="mejora-form" class="vstack gap-3">
              <input class="form-control" name="titulo" placeholder="Ej: Agregar exportacion CSV">
              <select class="form-select" name="prioridad">
                <option value="">Prioridad...</option>
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
              <textarea class="form-control" name="justificacion" rows="3" placeholder="Por que esta mejora es importante"></textarea>
              <textarea class="form-control" name="implementacion" rows="3" placeholder="Como se podria implementar"></textarea>
              <button class="btn btn-warning" type="submit"><i class="bi bi-lightbulb me-2"></i>Agregar mejora</button>
            </form>
          </div></div>
        </div>
        <div class="col-lg-7">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Mejoras propuestas</h3>
            <div id="mejoras-list" class="list-group"></div>
          </div></div>
        </div>
      </div>
    </section>

    <section id="entrega" class="mb-5">
      <h2 class="section-title mb-3">5. Checklist QA final</h2>
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Verificacion interactiva</h3>
            <div id="checklist-list" class="list-group"></div>
          </div></div>
        </div>
        <div class="col-lg-5">
          <div class="card card-soft"><div class="card-body">
            <h3 class="h5 fw-bold">Modo exposicion final</h3>
            <p>Antes de entregar, prepara una explicacion breve con esta estructura:</p>
            <ol>
              <li>Nombre y objetivo del proyecto.</li>
              <li>Funcionalidad principal.</li>
              <li>Bugs encontrados y priorizados.</li>
              <li>Correcciones aplicadas.</li>
              <li>Comparacion antes/despues.</li>
              <li>Retroalimentacion recibida.</li>
              <li>Plan de mejora final.</li>
            </ol>
            <a class="btn btn-outline-success w-100" href="/docs/06-informe-correcciones.md" target="_blank"><i class="bi bi-file-earmark-text me-2"></i>Revisar informe de correcciones</a>
          </div></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="py-4">
    <div class="container small">
      Semana 16 - QA, retroalimentacion y plan de mejora. Revisa el README.md antes de iniciar.
    </div>
  </footer>
`;

bindEvents();
loadData();
