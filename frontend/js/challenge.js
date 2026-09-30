(function () {
  const dailyGrid = document.getElementById('daily-grid');
  const weeklyGrid = document.getElementById('weekly-grid');

  function cardHtml(c) {
    const pct = Math.min(100, Math.round((c.value / c.target) * 100));
    let actionHtml = '';
    if (c.alreadyClaimed) {
      actionHtml = `<span class="badge badge-success">✓ Reward diklaim</span>`;
    } else if (c.done) {
      actionHtml = `<button class="btn btn-primary btn-block claim-btn" data-period="${c.periodId}" data-reward="${c.reward}">Klaim +${c.reward} XP</button>`;
    } else {
      actionHtml = `<span class="badge">${c.value}/${c.target} selesai</span>`;
    }

    return `
      <div class="card challenge-card ${c.alreadyClaimed ? 'completed' : ''}">
        <div class="flex-between">
          <span class="badge badge-primary">${c.type === 'daily' ? 'Harian' : 'Mingguan'}</span>
          <span class="challenge-reward">+${c.reward} XP</span>
        </div>
        <h3 style="margin:0;">${c.title}</h3>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        ${actionHtml}
      </div>
    `;
  }

  function render() {
    const statuses = PancaState.getChallengeStatus();
    dailyGrid.innerHTML = statuses.filter((c) => c.type === 'daily').map(cardHtml).join('');
    weeklyGrid.innerHTML = statuses.filter((c) => c.type === 'weekly').map(cardHtml).join('');

    document.querySelectorAll('.claim-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const periodId = btn.getAttribute('data-period');
        const reward = parseInt(btn.getAttribute('data-reward'), 10);
        const result = PancaState.claimChallenge(periodId, reward);
        if (result.awarded) {
          showToast(`+${result.xp} XP — Challenge selesai!`, 'success');
          refreshXpPill();
        }
        render();
      });
    });
  }

  render();
})();
