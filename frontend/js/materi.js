(function () {
  const grid = document.getElementById('materi-grid');
  const emptyState = document.getElementById('materi-empty');
  const searchInput = document.getElementById('materi-search');
  const filterSelect = document.getElementById('materi-filter');

  function render() {
    const state = PancaState.get();
    const query = searchInput.value.trim().toLowerCase();
    const filter = filterSelect.value;

    let items = MATERI_DATA.filter((m) => {
      const matchesQuery = !query || m.title.toLowerCase().includes(query) || m.description.toLowerCase().includes(query);
      const isDone = state.completedMaterials.includes(m.id);
      const matchesFilter = filter === 'all' || (filter === 'done' && isDone) || (filter === 'todo' && !isDone);
      return matchesQuery && matchesFilter;
    });

    if (!items.length) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    grid.innerHTML = items.map((m) => {
      const isDone = state.completedMaterials.includes(m.id);
      return `
        <div class="card materi-card reveal-on-scroll">
          <div class="feature-icon">${m.icon}</div>
          <h3>${m.title}</h3>
          <p>${m.description}</p>
          <div class="meta">
            <span>⏱ ${m.readingTime} menit</span>
            ${isDone ? '<span class="badge badge-success">Selesai</span>' : '<span class="badge">Belum Dipelajari</span>'}
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${isDone ? 100 : 0}%"></div></div>
          <a href="detail-materi.html?id=${m.id}" class="btn btn-primary btn-block">Pelajari</a>
        </div>
      `;
    }).join('');

    initReveal();
  }

  searchInput.addEventListener('input', render);
  filterSelect.addEventListener('change', render);
  render();
})();
