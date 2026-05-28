import Chart from 'chart.js/auto';

let chart = null;

export function renderDashboard(bugs = [], mejoras = [], coevaluaciones = []) {
  const total = bugs.length;
  const corregidos = bugs.filter((bug) => bug.estado === 'Corregido').length;
  const pendientes = bugs.filter((bug) => bug.estado !== 'Corregido').length;

  document.getElementById('metric-total-bugs').textContent = total;
  document.getElementById('metric-corregidos').textContent = corregidos;
  document.getElementById('metric-pendientes').textContent = pendientes;
  document.getElementById('metric-mejoras').textContent = mejoras.length;
  document.getElementById('metric-coevaluaciones').textContent = coevaluaciones.length;

  const ctx = document.getElementById('bugsChart');
  if (!ctx) return;

  const prioridades = ['Alta', 'Media', 'Baja'];
  const data = prioridades.map((prioridad) => bugs.filter((bug) => bug.prioridad === prioridad).length);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: prioridades,
      datasets: [
        {
          label: 'Bugs por prioridad',
          data,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Priorizacion de bugs encontrados' },
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } },
      },
    },
  });
}
