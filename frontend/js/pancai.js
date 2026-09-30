(function () {
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const clearBtn = document.getElementById('clear-chat-btn');
  const quickPromptsWrap = document.getElementById('quick-prompts');
  const contextBanner = document.getElementById('context-banner');

  const CHAT_HISTORY_KEY = 'pancalearn_chat_history_v1';
  const QUICK_PROMPTS = [
    'Apa makna sila ke-3?',
    'Jelaskan Pancasila dengan bahasa sederhana.',
    'Berikan contoh penerapan Pancasila.',
    'Buatkan quiz untuk saya.',
    'Analisis studi kasus ini.',
  ];

  const params = new URLSearchParams(window.location.search);
  const materiContext = params.get('context');

  let history = loadHistory();

  function loadHistory() {
    try {
      const raw = sessionStorage.getItem(CHAT_HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveHistory() {
    sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
  }

  function renderQuickPrompts() {
    quickPromptsWrap.innerHTML = QUICK_PROMPTS.map((p) => `<button class="quick-prompt-btn">${p}</button>`).join('');
    quickPromptsWrap.querySelectorAll('.quick-prompt-btn').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        chatInput.value = QUICK_PROMPTS[i];
        chatForm.dispatchEvent(new Event('submit'));
      });
    });
  }

  function renderContextBanner() {
    if (materiContext) {
      contextBanner.textContent = `📘 Konteks aktif: materi "${materiContext}" — pertanyaanmu akan dijawab dengan mempertimbangkan materi ini.`;
      contextBanner.classList.remove('hidden');
    }
  }

  function scrollToBottom() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function addBubble(role, text) {
    const div = document.createElement('div');
    div.className = `chat-bubble ${role}`;
    div.textContent = text;
    chatWindow.appendChild(div);
    scrollToBottom();
    return div;
  }

  function addTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'chat-bubble ai typing';
    div.id = 'typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    chatWindow.appendChild(div);
    scrollToBottom();
    return div;
  }

  function renderHistory() {
    chatWindow.innerHTML = '';
    if (!history.length) {
      addBubble('ai', 'Halo! Saya PancaAI 👋\nSaya siap membantu kamu memahami Pancasila dengan cara yang sederhana dan mudah dipahami.');
      return;
    }
    history.forEach((turn) => addBubble(turn.role === 'assistant' ? 'ai' : 'user', turn.content));
  }

  async function sendMessage(message) {
    addBubble('user', message);
    history.push({ role: 'user', content: message });
    saveHistory();

    chatInput.value = '';
    sendBtn.disabled = true;
    const typingEl = addTypingIndicator();

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: history.slice(-10),
          context: materiContext || undefined,
        }),
      });

      typingEl.remove();

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        addBubble('ai', errData.error || 'Maaf, PancaAI sedang mengalami gangguan. Silakan coba lagi beberapa saat.');
        return;
      }

      const data = await response.json();
      const reply = data.reply || 'Maaf, PancaAI tidak dapat memberikan jawaban saat ini.';
      addBubble('ai', reply);
      history.push({ role: 'assistant', content: reply });
      saveHistory();
    } catch (err) {
      typingEl.remove();
      addBubble('ai', 'Maaf, PancaAI sedang mengalami gangguan koneksi. Silakan periksa jaringanmu dan coba lagi.');
    } finally {
      sendBtn.disabled = false;
      chatInput.focus();
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    sendMessage(message);
  });

  clearBtn.addEventListener('click', () => {
    history = [];
    saveHistory();
    renderHistory();
    showToast('Riwayat chat dibersihkan.', 'default');
  });

  renderQuickPrompts();
  renderContextBanner();
  renderHistory();
  chatInput.focus();
})();
