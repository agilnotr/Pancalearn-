// /api/ai — PancaAI backend route
// Keeps the AI API key server-side only. Never send it to the frontend.

const express = require('express');
const router = express.Router();

const SYSTEM_PROMPT = `Kamu adalah PancaAI, AI Learning Assistant yang dibuat khusus untuk membantu mahasiswa dan pelajar Indonesia memahami Pancasila.

Fokus utama:
- Sejarah Pancasila
- Makna setiap sila
- Nilai-nilai Pancasila
- Penerapan Pancasila dalam kehidupan sehari-hari
- Pancasila di lingkungan kampus
- Pancasila di era digital
- Studi kasus
- Quiz dan latihan

Gunakan bahasa Indonesia yang jelas, sederhana, edukatif, dan mudah dipahami mahasiswa.

Gunakan contoh yang relevan dengan:
- Kampus
- Media sosial
- Teknologi
- Organisasi
- Kehidupan sehari-hari

Jika menganalisis studi kasus, jelaskan:
1. Masalah
2. Nilai Pancasila
3. Sila terkait
4. Tindakan yang sebaiknya dilakukan
5. Alasannya

Jangan terlalu panjang kecuali pengguna meminta penjelasan detail.

Jika pertanyaan tidak berhubungan dengan Pancasila, jelaskan dengan sopan bahwa PancaAI berfokus pada pembelajaran Pancasila dan arahkan kembali ke topik tersebut.`;

// In-memory per-session context is intentionally NOT used here to keep the
// backend stateless and simple. The frontend sends recent history + optional
// material context with every request instead.

router.post('/', async (req, res) => {
  try {
    const { message, history, context } = req.body || {};

    // ---- Input validation ----
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
    }
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Pesan terlalu panjang. Maksimal 4000 karakter.' });
    }

    const apiKey = process.env.AI_API_KEY;

    // Graceful fallback so the app still demos correctly without a real key.
    if (!apiKey || apiKey === 'your_api_key_here') {
      return res.json({
        reply:
          'PancaAI belum terhubung ke AI API (AI_API_KEY belum diatur di backend/.env). ' +
          'Namun secara singkat: pertanyaanmu tentang "' +
          message.slice(0, 120) +
          '" berkaitan dengan nilai-nilai Pancasila — coba jelajahi halaman Materi untuk pembahasan lengkapnya, atau atur AI_API_KEY untuk mengaktifkan jawaban AI penuh.',
      });
    }

    const model = process.env.AI_MODEL || 'claude-sonnet-4-6';

    // Build message list: short history (if provided) + optional material context + new message
    const messages = [];

    if (Array.isArray(history)) {
      history.slice(-10).forEach((turn) => {
        if (turn && (turn.role === 'user' || turn.role === 'assistant') && typeof turn.content === 'string') {
          messages.push({ role: turn.role, content: turn.content.slice(0, 4000) });
        }
      });
    }

    let userContent = message.trim();
    if (context && typeof context === 'string' && context.trim()) {
      userContent = `Konteks materi: ${context.trim()}\n\nPertanyaan: ${userContent}`;
    }
    messages.push({ role: 'user', content: userContent });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      console.error('AI API error:', response.status, errText);
      return res.status(502).json({
        error: 'Maaf, PancaAI sedang mengalami gangguan. Silakan coba lagi beberapa saat.',
      });
    }

    const data = await response.json();
    const reply = (data.content || [])
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim();

    return res.json({ reply: reply || 'Maaf, PancaAI tidak dapat memberikan jawaban saat ini.' });
  } catch (err) {
    console.error('PancaAI route error:', err);
    return res.status(500).json({
      error: 'Maaf, PancaAI sedang mengalami gangguan. Silakan coba lagi beberapa saat.',
    });
  }
});

module.exports = router;
