(function () {
  const wrap = document.getElementById('quiz-wrap');
  let currentIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let answered = false;
  let xpAwarded = false;

  function renderQuestion() {
    answered = false;
    const q = QUIZ_DATA[currentIndex];

    wrap.innerHTML = `
      <div class="kasus-progress-label">
        <span>Soal ${currentIndex + 1} dari ${QUIZ_DATA.length}</span>
        <span>Benar: ${correctCount} · Salah: ${wrongCount}</span>
      </div>
      <div class="progress-track" style="margin-bottom:24px;">
        <div class="progress-fill" style="width:${(currentIndex / QUIZ_DATA.length) * 100}%"></div>
      </div>
      <div class="card quiz-card">
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options" id="quiz-options">
          ${q.options.map((opt, i) => `<button data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
        <div class="flex-between" style="margin-top:24px;">
          <span></span>
          <button class="btn btn-primary hidden" id="next-btn">${currentIndex === QUIZ_DATA.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya →'}</button>
        </div>
      </div>
    `;

    const optionsWrap = document.getElementById('quiz-options');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-btn');

    optionsWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || answered) return;
      answered = true;
      const chosen = parseInt(btn.getAttribute('data-index'), 10);
      const isCorrect = chosen === q.correctIndex;
      if (isCorrect) correctCount += 1; else wrongCount += 1;

      [...optionsWrap.children].forEach((b, i) => {
        b.disabled = true;
        if (i === q.correctIndex) b.classList.add('correct');
        else if (i === chosen) b.classList.add('wrong');
      });

      feedback.className = `quiz-feedback show ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
      feedback.textContent = (isCorrect ? '✅ Benar! ' : '❌ Kurang tepat. ') + q.explanation;

      nextBtn.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
      currentIndex += 1;
      if (currentIndex >= QUIZ_DATA.length) {
        renderResult();
      } else {
        renderQuestion();
      }
    });
  }

  function renderResult() {
    const score = Math.round((correctCount / QUIZ_DATA.length) * 100);

    let xp = 0;
    if (!xpAwarded) {
      xp = PancaState.recordQuizResult(score);
      xpAwarded = true;
      refreshXpPill();
    }

    wrap.innerHTML = `
      <div class="card quiz-result">
        <h2>${score >= 70 ? '🎉 Great Job!' : score >= 40 ? '👍 Not Bad!' : '💪 Terus Berlatih!'}</h2>
        <div class="result-score">${score}/100</div>
        <div class="result-stats">
          <div><div class="result-stat-num" style="color:var(--success);">${correctCount}</div><div class="caption">Correct</div></div>
          <div><div class="result-stat-num" style="color:var(--danger);">${wrongCount}</div><div class="caption">Wrong</div></div>
          <div><div class="result-stat-num" style="color:var(--primary);">+${xp} XP</div><div class="caption">XP Earned</div></div>
        </div>
        <div class="result-actions">
          <button class="btn btn-secondary" id="retry-btn">Coba Lagi</button>
          <a href="studi-kasus.html" class="btn btn-primary">Lanjut ke Studi Kasus</a>
        </div>
      </div>
    `;

    document.getElementById('retry-btn').addEventListener('click', () => {
      currentIndex = 0;
      correctCount = 0;
      wrongCount = 0;
      xpAwarded = false;
      renderQuestion();
    });
  }

  renderQuestion();
})();
