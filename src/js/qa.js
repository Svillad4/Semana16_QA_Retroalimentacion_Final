import Swal from 'sweetalert2';
import {
  createBug,
  createCoevaluacion,
  createMejora,
  deleteBug,
  getBugs,
  getChecklist,
  getCoevaluaciones,
  getMejoras,
  updateBug,
  updateChecklistItem,
} from './api.js';
import { renderDashboard } from './dashboard.js';
import { validarBug, validarCoevaluacion, validarMejora } from './validaciones.js';
import { formToObject, nextId, showApiError, showErrors, showSuccess } from './utils.js';

let state = {
  bugs: [],
  mejoras: [],
  coevaluaciones: [],
  checklist: [],
};

export async function loadData() {
  try {
    const [bugs, mejoras, coevaluaciones, checklist] = await Promise.all([
      getBugs(),
      getMejoras(),
      getCoevaluaciones(),
      getChecklist(),
    ]);
    state = { bugs, mejoras, coevaluaciones, checklist };
    renderAll();
  } catch (error) {
    showApiError(error);
  }
}

function renderAll() {
  renderBugs();
  renderMejoras();
  renderCoevaluaciones();
  renderChecklist();
  renderDashboard(state.bugs, state.mejoras, state.coevaluaciones);
}

function prioridadBadge(prioridad) {
  return `<span class="badge badge-prioridad-${prioridad}">${prioridad}</span>`;
}

function renderBugs() {
  const tbody = document.getElementById('bugs-tbody');
  tbody.innerHTML = state.bugs
    .map((bug) => `
      <tr>
        <td><strong>${bug.id}</strong></td>
        <td>${bug.titulo}</td>
        <td>${bug.area}</td>
        <td>${prioridadBadge(bug.prioridad)}</td>
        <td class="estado-${bug.estado}">${bug.estado}</td>
        <td><code>${bug.archivo || 'No definido'}</code></td>
        <td class="text-nowrap">
          <button class="btn btn-sm btn-outline-success" data-action="fix" data-id="${bug.id}">
            <i class="bi bi-check2-circle"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" data-action="delete" data-id="${bug.id}">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `)
    .join('');
}

function renderMejoras() {
  const container = document.getElementById('mejoras-list');
  container.innerHTML = state.mejoras
    .map((mejora) => `
      <div class="list-group-item">
        <div class="d-flex justify-content-between gap-3">
          <strong>${mejora.titulo}</strong>
          ${prioridadBadge(mejora.prioridad)}
        </div>
        <p class="mb-1 mt-2"><strong>Justificacion:</strong> ${mejora.justificacion}</p>
        <p class="mb-0"><strong>Implementacion:</strong> ${mejora.implementacion}</p>
      </div>
    `)
    .join('');
}

function renderCoevaluaciones() {
  const container = document.getElementById('coevaluaciones-list');
  container.innerHTML = state.coevaluaciones
    .map((item) => `
      <div class="list-group-item">
        <div class="d-flex justify-content-between gap-3">
          <strong>${item.revisor}</strong>
          <span class="badge text-bg-secondary">${item.listoExposicion}</span>
        </div>
        <p class="mb-1 mt-2"><strong>Proyecto:</strong> ${item.proyectoRevisado}</p>
        <p class="mb-1"><strong>Fortaleza:</strong> ${item.fortaleza}</p>
        <p class="mb-0"><strong>Mejora recomendada:</strong> ${item.mejora}</p>
      </div>
    `)
    .join('');
}

function renderChecklist() {
  const container = document.getElementById('checklist-list');
  container.innerHTML = state.checklist
    .map((item) => `
      <label class="list-group-item d-flex gap-3 align-items-start">
        <input class="form-check-input mt-1" type="checkbox" data-check-id="${item.id}" ${item.cumple ? 'checked' : ''}>
        <span>
          <strong>${item.requisito}</strong><br>
          <small class="text-muted">Evidencia: ${item.evidencia || 'Pendiente por completar en docs/05-checklist-qa-final.md'}</small>
        </span>
      </label>
    `)
    .join('');
}

export function bindEvents() {
  document.getElementById('bug-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = formToObject(event.currentTarget);
    const errores = validarBug(data);
    if (errores.length) return showErrors(errores);

    try {
      await createBug({
        id: nextId('BUG', state.bugs),
        titulo: data.titulo,
        area: data.area,
        prioridad: data.prioridad,
        estado: data.estado,
        evidencia: data.evidencia,
        correccion: data.correccion,
        archivo: data.archivo,
      });
      event.currentTarget.reset();
      await loadData();
      showSuccess('Bug registrado', 'Ahora documenta la evidencia y la correccion en docs/01-registro-bugs-final.md');
    } catch (error) {
      showApiError(error);
    }
  });

  document.getElementById('mejora-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = formToObject(event.currentTarget);
    const errores = validarMejora(data);
    if (errores.length) return showErrors(errores);

    try {
      await createMejora({ id: nextId('MEJ', state.mejoras), ...data });
      event.currentTarget.reset();
      await loadData();
      showSuccess('Mejora agregada', 'Recuerda justificarla en el plan de mejora final.');
    } catch (error) {
      showApiError(error);
    }
  });

  document.getElementById('coevaluacion-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = formToObject(event.currentTarget);
    const errores = validarCoevaluacion(data);
    if (errores.length) return showErrors(errores);

    try {
      await createCoevaluacion({ id: nextId('COE', state.coevaluaciones), ...data });
      event.currentTarget.reset();
      await loadData();
      showSuccess('Coevaluacion guardada', 'Incluye esta retroalimentacion en tu informe final.');
    } catch (error) {
      showApiError(error);
    }
  });

  document.getElementById('bugs-tbody').addEventListener('click', async (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;
    const bug = state.bugs.find((item) => item.id === id);
    if (!bug) return;

    try {
      if (action === 'fix') {
        await updateBug(id, { ...bug, estado: 'Corregido' });
        await loadData();
        showSuccess('Bug marcado como corregido');
      }

      if (action === 'delete') {
        // TODO ESTUDIANTE:
        // Mejora este punto agregando una confirmacion con SweetAlert2 antes de eliminar.
        // Pista: usa Swal.fire({ title: 'Confirmar...', showCancelButton: true })
        await deleteBug(id);
        await loadData();
        showSuccess('Bug eliminado');
      }
    } catch (error) {
      showApiError(error);
    }
  });

  document.getElementById('checklist-list').addEventListener('change', async (event) => {
    const input = event.target.closest('input[data-check-id]');
    if (!input) return;
    const item = state.checklist.find((check) => check.id === input.dataset.checkId);
    if (!item) return;
    try {
      await updateChecklistItem(item.id, { ...item, cumple: input.checked });
      await loadData();
    } catch (error) {
      showApiError(error);
    }
  });
}
