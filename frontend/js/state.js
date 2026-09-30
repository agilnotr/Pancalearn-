/* =========================================================
   PancaLearn — Shared state & gamification engine
   Backed by localStorage. Include this AFTER data.js.
   ========================================================= */

const STORAGE_KEY = 'pancalearn_state_v1';

function todayStr() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function defaultState() {
  return {
    userName: 'Mahasiswa',
    xp: 0,
    completedMaterials: [],       // array of materi ids
    completedCases: [],           // array of studi kasus ids
    quizScores: [],               // array of {score, date}
    challengeProgress: {},        // { challengeId: count }
    completedChallenges: [],      // challenge ids completed (reset daily/weekly externally)
    achievements: [],             // achievement ids unlocked
    streak: { count: 0, lastDate: null },
    theme: 'light',
    dailyLog: {},                 // { 'YYYY-MM-DD': { casesToday, quizzesToday } }
    weeklyLog: {},                // { 'YYYY-WW': { materiThisWeek } }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Merge with defaults to be safe if new fields were added later
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    console.warn('Gagal membaca localStorage, menggunakan state default.', e);
    return defaultState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Gagal menyimpan ke localStorage.', e);
  }
}

const PancaState = {
  get() {
    return loadState();
  },

  set(mutatorFn) {
    const state = loadState();
    mutatorFn(state);
    saveState(state);
    this._updateStreak(state);
    return state;
  },

  // ---------- Streak ----------
  _updateStreak(state) {
    // Called after any learning action to keep streak fresh.
  },

  touchStreak() {
    const state = loadState();
    const today = todayStr();
    if (state.streak.lastDate === today) {
      // already counted today
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (state.streak.lastDate === yesterday) {
        state.streak.count += 1;
      } else {
        state.streak.count = 1;
      }
      state.streak.lastDate = today;
    }
    saveState(state);
    this._checkAchievements(state);
    return state;
  },

  // ---------- XP / Level ----------
  addXp(amount, reasonKey) {
    const state = loadState();
    state.xp += amount;
    saveState(state);
    this._checkAchievements(state);
    return state;
  },

  getLevelInfo(xp) {
    let current = LEVEL_DATA[0];
    let next = LEVEL_DATA[1] || null;
    for (let i = 0; i < LEVEL_DATA.length; i++) {
      if (xp >= LEVEL_DATA[i].minXp) {
        current = LEVEL_DATA[i];
        next = LEVEL_DATA[i + 1] || null;
      }
    }
    const currentMin = current.minXp;
    const nextMin = next ? next.minXp : currentMin + 1000;
    const progressPct = next ? Math.min(100, Math.round(((xp - currentMin) / (nextMin - currentMin)) * 100)) : 100;
    return { current, next, currentMin, nextMin, progressPct };
  },

  // ---------- Materi ----------
  completeMaterial(materiId) {
    const state = loadState();
    if (!state.completedMaterials.includes(materiId)) {
      state.completedMaterials.push(materiId);
      state.xp += XP_REWARDS.materi;

      const week = this._weekKey();
      if (!state.weeklyLog[week]) state.weeklyLog[week] = { materiThisWeek: 0 };
      state.weeklyLog[week].materiThisWeek += 1;

      saveState(state);
      this._checkAchievements(state);
      this.touchStreak();
      return { awarded: true, xp: XP_REWARDS.materi };
    }
    return { awarded: false, xp: 0 };
  },

  // ---------- Studi Kasus ----------
  completeCase(caseId) {
    const state = loadState();
    if (!state.completedCases.includes(caseId)) {
      state.completedCases.push(caseId);
      state.xp += XP_REWARDS.studiKasus;

      const day = todayStr();
      if (!state.dailyLog[day]) state.dailyLog[day] = { casesToday: 0, quizzesToday: 0 };
      state.dailyLog[day].casesToday += 1;

      saveState(state);
      this._checkAchievements(state);
      this.touchStreak();
      return { awarded: true, xp: XP_REWARDS.studiKasus };
    }
    return { awarded: false, xp: 0 };
  },

  // ---------- Quiz ----------
  recordQuizResult(score) {
    const state = loadState();
    state.quizScores.push({ score, date: todayStr() });
    state.xp += XP_REWARDS.quiz;

    const day = todayStr();
    if (!state.dailyLog[day]) state.dailyLog[day] = { casesToday: 0, quizzesToday: 0 };
    state.dailyLog[day].quizzesToday += 1;

    saveState(state);
    this._checkAchievements(state);
    this.touchStreak();
    return XP_REWARDS.quiz;
  },

  // ---------- Challenges ----------
  _weekKey() {
    const d = new Date();
    const firstJan = new Date(d.getFullYear(), 0, 1);
    const week = Math.ceil(((d - firstJan) / 86400000 + firstJan.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${week}`;
  },

  getChallengeStatus() {
    const state = loadState();
    const day = todayStr();
    const week = this._weekKey();
    const dayLog = state.dailyLog[day] || { casesToday: 0, quizzesToday: 0 };
    const weekLog = state.weeklyLog[week] || { materiThisWeek: 0 };

    return getTodayChallenges().map((c) => {
      const progressKey = c.type === 'daily' ? c.metric : c.metric;
      const value = c.type === 'daily' ? (dayLog[c.metric] || 0) : (weekLog[c.metric] || 0);
      const periodId = c.type === 'daily' ? `${c.id}_${day}` : `${c.id}_${week}`;
      const alreadyClaimed = state.completedChallenges.includes(periodId);
      const done = value >= c.target;
      return { ...c, value, done, alreadyClaimed, periodId };
    });
  },

  claimChallenge(periodId, reward) {
    const state = loadState();
    if (!state.completedChallenges.includes(periodId)) {
      state.completedChallenges.push(periodId);
      state.xp += reward;
      saveState(state);
      this._checkAchievements(state);
      return { awarded: true, xp: reward };
    }
    return { awarded: false, xp: 0 };
  },

  // ---------- Achievements ----------
  _checkAchievements(state) {
    const unlocked = new Set(state.achievements);

    if (state.completedMaterials.length + state.completedCases.length >= 1) unlocked.add('first-step');
    if (state.streak.count >= 5) unlocked.add('streak-5');
    if (state.quizScores.some((q) => q.score >= 80)) unlocked.add('quiz-master');
    if (state.completedCases.length >= 5) unlocked.add('case-solver');
    if (state.completedMaterials.length >= MATERI_DATA.length) unlocked.add('pancasila-master');

    const newAch = [...unlocked].filter((id) => !state.achievements.includes(id));
    state.achievements = [...unlocked];
    saveState(state);
    if (newAch.length) {
      newAch.forEach((id) => {
        const ach = ACHIEVEMENT_DATA.find((a) => a.id === id);
        if (ach) showToast(`🏆 Achievement unlocked: ${ach.title}`, 'success');
      });
    }
  },

  // ---------- Theme ----------
  setTheme(theme) {
    const state = loadState();
    state.theme = theme;
    saveState(state);
  },

  // ---------- Reset ----------
  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

// ---------- Toast helper (used across pages) ----------
function showToast(message, type = 'default') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
