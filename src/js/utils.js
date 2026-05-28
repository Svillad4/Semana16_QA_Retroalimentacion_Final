import Swal from 'sweetalert2';

export function byId(id) {
  return document.getElementById(id);
}

export function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

export function showErrors(errores) {
  return Swal.fire({
    icon: 'warning',
    title: 'Revisa la informacion',
    html: `<ul class="text-start">${errores.map((e) => `<li>${e}</li>`).join('')}</ul>`,
  });
}

export function showSuccess(title, text = '') {
  return Swal.fire({ icon: 'success', title, text, timer: 1800, showConfirmButton: false });
}

export function showApiError(error) {
  return Swal.fire({
    icon: 'error',
    title: 'No se pudo completar la accion',
    text: `${error.message}. Verifica que JSON Server este activo en http://localhost:3001`,
  });
}

export function nextId(prefix, collection) {
  const numbers = collection
    .map((item) => String(item.id || '').replace(prefix, '').replace('-', ''))
    .map((value) => Number.parseInt(value, 10))
    .filter((value) => Number.isFinite(value));
  const next = numbers.length ? Math.max(...numbers) + 1 : 1;
  return `${prefix}-${String(next).padStart(3, '0')}`;
}
