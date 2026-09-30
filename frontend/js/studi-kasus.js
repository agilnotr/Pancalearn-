(function () {
  const wrap = document.getElementById('kasus-wrap');
  let currentIndex = 0;
  let answered = false;

  function render() {
    if (currentIndex >= STUDI_KASUS_DATA.length) {
      wrap.innerHTML = `
        <div class="card kasus-finished">
          <h2>🎉 Semua studi kasus selesai!</h2>
          <p>Kamu telah menyelesaikan seluruh ${STUDI_KASUS_DATA.length} studi kasus Pancasila.</p>
          <a href="quiz.html" class="btn btn-primary">Lanjut ke Quiz</a>
        </div>
      `;
      return;
    }

    answered = false;
    const kasus = STUDI_KASUS_DATA[currentIndex];
    const state = PancaState.get();
    const alreadyDone = state.completedCases.includes(kasus.id);

    wrap.innerHTML = `
      <div class="kasus-progress-label">
        <span>Studi Kasus ${currentIndex + 1} dari ${STUDI_KASUS_DATA.length}</span>
        <span class="badge badge-primary">${kasus.topic}</span>
      </div>
      <div class="progress-track" style="margin-bottom:24px;">
        <div class="progress-fill" style="width:${((currentIndex) / STUDI_KASUS_DATA.length) * 100}%"></div>
      </div>
      <div class="card kasus-card">
        <p class="kasus-question">${kasus.question}</p>
        <div class="kasus-options" id="kasus-options">
          ${kasus.options.map((opt, i) => `<button data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`).join('')}
        </div>
        <div class="kasus-feedback" id="kasus-feedback"></div>
        <div class="kasus-nav">
          <button class="btn btn-ghost" id="prev-btn" ${currentIndex === 0 ? 'disabled' : ''}>← Sebelumnya</button>
          <button class="btn btn-primary hidden" id="next-btn">Lanjut →</button>
        </div>
      </div>
      ${alreadyDone ? '<p class="caption text-center" style="margin-top:12px;">Kamu sudah menjawab kasus ini sebelumnya — XP tidak diberikan dua kali.</p>' : ''}
    `;

    const optionsWrap = document.getElementById('kasus-options');
    const feedback = document.getElementById('kasus-feedback');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    optionsWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || answered) return;
      answered = true;
      const chosen = parseInt(btn.getAttribute('data-index'), 10);
      const correct = kasus.correctIndex;

      [...optionsWrap.children].forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add('correct');
        else if (i === chosen) b.classList.add('wrong');
      });

      feedback.classList.add('show');
      const isCorrect = chosen === correct;
      feedback.className = `kasus-feedback show ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
      feedback.innerHTML = `
        <h4>${isCorrect ? '✅ Tepat sekali!' : '❌ Kurang tepat'}</h4>
        <p style="margin-bottom:8px;">${kasus.explanation}</p>
        <p class="caption">Sila terkait: Sila ke-${kasus.silaTerkait} · Nilai Pancasila: ${kasus.nilaiPancasila}</p>
      `;

      const result = PancaState.completeCase(kasus.id);
      if (result.awarded) showToast(`+${result.xp} XP — Studi kasus selesai!`, 'success');
      refreshXpPill();

      nextBtn.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
      currentIndex += 1;
      render();
    });
    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      render();
    });
  }

  render();
})();
