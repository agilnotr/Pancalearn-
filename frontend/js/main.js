/* =========================================================
   PancaLearn — main.js
   Shared across every page: navbar, footer, theme, XP pill.
   Requires data.js and state.js to be loaded first.
   ========================================================= */

const NAV_LINKS = [
  { href: '/index.html', label: 'Home', match: 'index' },
  { href: '/pages/materi.html', label: 'Materi', match: 'materi' },
  { href: '/pages/studi-kasus.html', label: 'Studi Kasus', match: 'studi-kasus' },
  { href: '/pages/quiz.html', label: 'Quiz', match: 'quiz' },
  { href: '/pages/challenge.html', label: 'Challenge', match: 'challenge' },
  { href: '/pages/progress.html', label: 'Progress', match: 'progress' },
  { href: '/pages/pancai.html', label: 'PancaAI', match: 'pancai' },
];

function currentPageKey() {
  const path = window.location.pathname;
  if (path === '/' || path.endsWith('index.html') || path === '') return 'index';
  const match = path.match(/([a-z-]+)\.html/);
  return match ? match[1] : '';
}

function renderNavbar() {
  const mount = document.getElementById('navbar-mount');
  if (!mount) return;
  const activeKey = currentPageKey();
  const state = PancaState.get();

  const linksHtml = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${l.match === activeKey ? 'active' : ''}">${l.label}</a>`
  ).join('');

  mount.innerHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="/index.html" class="navbar-logo"><span>Panca</span><span class="dot">Learn</span></a>
        <div class="navbar-links">${linksHtml}</div>
        <div class="navbar-actions">
          <div class="xp-pill" title="Total XP kamu">⚡ <span id="navbar-xp">${state.xp}</span> <span class="xp-label">XP</span></div>
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
          <button class="menu-toggle" id="menu-toggle" aria-label="Buka menu">☰</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">${linksHtml}</div>
    </nav>
  `;

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  updateThemeIcon();
}

function renderFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  const navHtml = NAV_LINKS.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const creditHtml = TEAM_DATA.map((t) => `<li>${t.role} — ${t.name}</li>`).join('');

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="navbar-logo"><span>Panca</span><span class="dot">Learn</span></div>
          <p>Belajar Pancasila. Pahami Nilainya. Terapkan dalam Kehidupan.</p>
        </div>
        <div class="footer-col">
          <h4>Navigasi</h4>
          <ul>${navHtml}</ul>
        </div>
        <div class="footer-col">
          <h4>Informasi Project</h4>
          <ul>
            <li>Mata Kuliah: Pancasila</li>
            <li>Program Studi: Teknik Informatika</li>
            <li>Tahun: 2026</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Credit — PancaLearn Team</h4>
          <ul>${creditHtml}</ul>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>© 2026 PancaLearn. All rights reserved.</p>
        <p>Educational Project — Teknik Informatika</p>
        <p>Dibuat untuk memenuhi tugas mata kuliah Pancasila.</p>
      </div>
    </footer>
  `;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  PancaState.setTheme(theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  const state = PancaState.get();
  applyTheme(state.theme || 'light');
}

// ---------- Counter animation ----------
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = Math.floor(progress * target) + (el.getAttribute('data-suffix') || '');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + (el.getAttribute('data-suffix') || '');
    }
    requestAnimationFrame(tick);
  });
}

// ---------- Scroll reveal ----------
function initReveal() {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach((el) => el.classList.add('reveal'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

function refreshXpPill() {
  const el = document.getElementById('navbar-xp');
  if (el) el.textContent = PancaState.get().xp;
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  renderFooter();
  initReveal();
});
