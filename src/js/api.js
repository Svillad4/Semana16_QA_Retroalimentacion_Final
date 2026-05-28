export const API_URL = 'http://localhost:3001';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} en ${endpoint}`);
  }

  return response.json();
}

export function getBugs() {
  return request('/bugs');
}

export function createBug(data) {
  return request('/bugs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateBug(id, data) {
  return request(`/bugs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function deleteBug(id) {
  return request(`/bugs/${id}`, {
    method: 'DELETE',
  });
}

export function getCoevaluaciones() {
  return request('/coevaluaciones');
}

export function createCoevaluacion(data) {
  return request('/coevaluaciones', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function getMejoras() {
  return request('/mejoras');
}

export function createMejora(data) {
  return request('/mejoras', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function getChecklist() {
  return request('/checklist');
}

export function updateChecklistItem(id, data) {
  return request(`/checklist/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
