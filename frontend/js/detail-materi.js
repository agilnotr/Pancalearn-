(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const index = MATERI_DATA.findIndex((m) => m.id === id);
  const materi = index >= 0 ? MATERI_DATA[index] : MATERI_DATA[0];
  const nextMateri = MATERI_DATA[index + 1] || null;

  const state = PancaState.get();
  const alreadyDone = state.completedMaterials.includes(materi.id);

  // Mark as completed as soon as the user opens the material (simple, exploit-resistant since it's a Set/array).
  const result = PancaState.completeMaterial(materi.id);
  if (result.awarded) showToast(`+${result.xp} XP — Materi "${materi.title}" selesai!`, 'success');

  document.title = `${materi.title} — PancaLearn`;

  document.getElementById('detail-header').innerHTML = `
    <a href="materi.html" class="caption">← Kembali ke Materi</a>
    <h1 style="margin-top:14px;">${materi.icon} ${materi.title}</h1>
    <div class="detail-meta">
      <span class="badge">⏱ ${materi.readingTime} menit baca</span>
      <span class="badge badge-success">✓ Materi selesai dipelajari</span>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:100%"></div></div>
  `;

  const relatedCase = STUDI_KASUS_DATA.find((c) => c.id === materi.relatedCaseId);

  document.getElementById('detail-body').innerHTML = `
    <div class="detail-section">
      <h3>Ringkasan</h3>
      <p>${materi.summary}</p>
    </div>

    <div class="detail-section">
      <h3>Poin-Poin Penting</h3>
      <ul class="key-points">
        ${materi.keyPoints.map((p) => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h3>Penjelasan</h3>
      <p>${materi.content}</p>
    </div>

    <div class="detail-section">
      <h3>Contoh Kehidupan Nyata</h3>
      <p>${materi.realLifeExample}</p>
    </div>

    <div class="detail-section">
      <h3>Mini Quiz</h3>
      <div class="card mini-quiz-box">
        <p style="color:var(--text-primary); font-weight:600;">${materi.miniQuiz.question}</p>
        <div class="mini-quiz-options" id="mini-quiz-options">
          ${materi.miniQuiz.options.map((opt, i) => `<button data-index="${i}">${opt}</button>`).join('')}
        </div>
        <div class="mini-quiz-feedback" id="mini-quiz-feedback"></div>
      </div>
    </div>

    ${relatedCase ? `
    <div class="detail-section">
      <h3>Studi Kasus Terkait</h3>
      <div class="card">
        <span class="badge badge-primary">${relatedCase.topic}</span>
        <p style="margin-top:12px; color:var(--text-primary);">${relatedCase.question}</p>
        <a href="studi-kasus.html" class="btn btn-secondary">Coba Studi Kasus Ini</a>
      </div>
    </div>` : ''}

    <div class="detail-section">
      <h3>Butuh Penjelasan Lebih Lanjut?</h3>
      <a class="btn btn-primary" href="pancai.html?context=${encodeURIComponent(materi.title)}">Tanya PancaAI tentang materi ini</a>
    </div>

    <div class="detail-section text-center">
      ${nextMateri
        ? `<p>Materi selanjutnya</p><a href="detail-materi.html?id=${nextMateri.id}" class="btn btn-secondary">${nextMateri.icon} ${nextMateri.title} →</a>`
        : `<p>🎉 Kamu telah mencapai materi terakhir!</p><a href="materi.html" class="btn btn-secondary">Kembali ke Daftar Materi</a>`}
    </div>
  `;

  // ---- Mini quiz interaction ----
  const optionsWrap = document.getElementById('mini-quiz-options');
  const feedback = document.getElementById('mini-quiz-feedback');
  let answered = false;

  optionsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn || answered) return;
    answered = true;
    const chosen = parseInt(btn.getAttribute('data-index'), 10);
    const correct = materi.miniQuiz.correctIndex;

    [...optionsWrap.children].forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (i === chosen) b.classList.add('wrong');
    });

    if (chosen === correct) {
      feedback.className = 'mini-quiz-feedback show feedback-correct';
      feedback.innerHTML = `✅ Benar! ${materi.miniQuiz.explanation}`;
    } else {
      feedback.className = 'mini-quiz-feedback show feedback-wrong';
      feedback.innerHTML = `❌ Kurang tepat. ${materi.miniQuiz.explanation}`;
    }
  });
})();
