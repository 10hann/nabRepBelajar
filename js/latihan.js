/* =============================================================
   latihan.js — Logic untuk latihan.html
   Math Exponents & Roots Website
   Req 8.x: Soal Pilihan Ganda
   Req 9.x: Soal Esai + Validasi Input
   Req 10.x: Pengiriman dan Penilaian
   ============================================================= */

/* =============================================================
   SECTION 1: DATA SOAL
   Array QUESTIONS mendefinisikan semua soal beserta kunci
   jawaban. id sesuai dengan id div di latihan.html (q1–q10).
   ============================================================= */

const QUESTIONS = [
  // --- Soal Pilihan Ganda (q1–q5) ---
  // Req 8.1: 5 soal pilihan ganda, bernomor 1–5
  // Req 8.2: 4 opsi (A/B/C/D) per soal

  {
    id: 'q1',
    type: 'multiple-choice',
    text: 'Berapakah nilai dari 2⁵?',
    options: { A: '16', B: '32', C: '64', D: '8' },
    answer: 'B'
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    text: 'Sederhanakan: 3⁴ × 3² =',
    options: { A: '3²', B: '3⁶', C: '3⁸', D: '9⁶' },
    answer: 'B'
  },
  {
    id: 'q3',
    type: 'multiple-choice',
    text: 'Berapakah nilai dari (2³)²?',
    options: { A: '36', B: '48', C: '64', D: '12' },
    answer: 'C'
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    text: 'Jika a⁰ = 1 (a ≠ 0), berapakah nilai dari 99⁰?',
    options: { A: '99', B: '0', C: '1', D: '-1' },
    answer: 'C'
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    text: 'Berapakah nilai dari 2⁻³?',
    options: { A: '-8', B: '-6', C: '8', D: '1/8' },
    answer: 'D'
  },

  // --- Soal Esai (q6–q10) ---
  // Req 9.1: 5 soal esai, bernomor 6–10
  // Input id convention: essay-{nomor soal} → essay-6 .. essay-10

  {
    id: 'q6',
    type: 'essay',
    text: 'Berapakah nilai dari √144?',
    answer: '12'
  },
  {
    id: 'q7',
    type: 'essay',
    text: 'Hitung: ∛8 =',
    answer: '2'
  },
  {
    id: 'q8',
    type: 'essay',
    text: 'Berapakah nilai dari 4^(1/2)?',
    answer: '2'
  },
  {
    id: 'q9',
    type: 'essay',
    text: 'Hitung: 10³ =',
    answer: '1000'
  },
  {
    id: 'q10',
    type: 'essay',
    text: 'Berapakah nilai dari √16?',
    answer: '4'
  }
];

/* =============================================================
   SECTION 2: INPUT VALIDATION
   filterNumeric — Membersihkan karakter non-numerik dari string.

   Req 9.3: Input soal esai hanya menerima karakter numerik,
            tanda minus, dan titik desimal; maks 15 karakter.
   Req 9.6: Karakter yang lolos filter hanya: [0–9, '.', '-'].
   ============================================================= */

/**
 * Menghapus semua karakter selain angka (0–9), titik ('.'),
 * dan tanda minus ('-'), lalu memotong hasil ke 15 karakter.
 *
 * @param {string} str - String input mentah dari pengguna.
 * @returns {string} String yang hanya berisi karakter valid,
 *                   dengan panjang maksimal 15 karakter.
 */
function filterNumeric(str) {
  // Strip semua karakter selain [0-9], titik, dan tanda minus
  // lalu batasi panjang ke 15 karakter
  return str.replace(/[^0-9.\-]/g, '').slice(0, 15);
}

/* =============================================================
   SECTION 3: EVENT LISTENERS — INPUT SOAL ESAI
   Pasang listener 'input' pada setiap .essay-input agar
   filterNumeric dijalankan setiap kali nilai berubah.

   Req 9.3 & 9.6: Karakter non-numerik dicegah tampil di field.
   ============================================================= */

document.querySelectorAll('.essay-input').forEach(function (input) {
  input.addEventListener('input', function (e) {
    e.target.value = filterNumeric(e.target.value);
  });
});

/* =============================================================
   SECTION 4: BACA JAWABAN PENGGUNA
   getUserAnswers — Membaca state DOM dan mengembalikan objek
   yang memetakan setiap id soal ke jawaban pengguna (atau null
   jika belum dijawab).

   Req 10.2: Jawaban dibaca saat submit untuk dihitung.
   ============================================================= */

/**
 * Membaca semua jawaban pengguna dari DOM.
 *
 * Untuk pilihan ganda: membaca radio button yang tercentang
 * (input[name="qN"]:checked). Mengembalikan null jika belum dipilih.
 *
 * Untuk esai: membaca nilai input#essay-N dan trim whitespace.
 * Mengembalikan null jika kosong. id input di HTML mengikuti
 * konvensi 'essay-{nomor}', mis. q6 → essay-6.
 *
 * @returns {{ [questionId: string]: string|null }} Objek jawaban.
 */
function getUserAnswers() {
  const answers = {};

  QUESTIONS.forEach(function (q) {
    if (q.type === 'multiple-choice') {
      // Cari radio button yang sedang tercentang untuk soal ini
      var selected = document.querySelector('input[name="' + q.id + '"]:checked');
      answers[q.id] = selected ? selected.value : null;
    } else {
      // Soal esai: id input = 'essay-' + nomor soal (mis. q6 → essay-6)
      var inputEl = document.getElementById('essay-' + q.id.slice(1));
      answers[q.id] = (inputEl && inputEl.value.trim()) ? inputEl.value.trim() : null;
    }
  });

  return answers;
}

/* =============================================================
   SECTION 5: KALKULASI SKOR
   calculateScore — Membandingkan setiap jawaban pengguna
   dengan kunci jawaban dan mengembalikan jumlah yang benar.

   formatScore — Memformat skor menjadi string tampilan.

   Req 10.2: Skor dihitung berdasarkan kecocokan jawaban.
   Req 10.3: Skor ditampilkan dalam format "Skor Anda: X / 10".
   ============================================================= */

/**
 * Menghitung jumlah jawaban benar dari objek jawaban pengguna.
 *
 * Untuk pilihan ganda: perbandingan string eksak (===).
 * Untuk esai: perbandingan numerik via parseFloat untuk
 * menoleransi perbedaan format (mis. "12" vs "12.0").
 *
 * @param {{ [questionId: string]: string|null }} userAnswers
 * @returns {number} Jumlah jawaban benar (integer 0–10).
 */
function calculateScore(userAnswers) {
  let correct = 0;
  QUESTIONS.forEach(function(q) {
    const ua = userAnswers[q.id];
    if (ua === null) return; // belum dijawab, lewati
    if (q.type === 'multiple-choice') {
      if (ua === q.answer) correct++;
    } else {
      // Esai: bandingkan secara numerik agar "12" dan "12.0" dianggap sama
      if (parseFloat(ua) === parseFloat(q.answer)) correct++;
    }
  });
  return correct;
}

/**
 * Memformat skor menjadi string tampilan standar.
 *
 * @param {number} score - Jumlah jawaban benar (0–10).
 * @returns {string} String dalam format "Skor Anda: X / 10".
 */
function formatScore(score) {
  return `Skor Anda: ${score} / 10`;
}

/* =============================================================
   SECTION 6: SUBMIT HANDLER
   Event listener untuk tombol #btn-submit:
   1. Baca jawaban pengguna via getUserAnswers()
   2. Jika ada null → tampilkan #warning-msg, hentikan
   3. Hitung skor, tampilkan #score-display, sembunyikan warning
   4. Tandai setiap .question-card dengan class .correct/.wrong
      dan isi elemen .feedback dengan teks hasil
   5. Tampilkan tombol #btn-reset

   Req 10.1: Tombol "Kumpulkan" memiliki click handler.
   Req 10.2: Skor dihitung dengan logika yang benar.
   Req 10.3: Skor ditampilkan sebagai "Skor Anda: X / 10".
   Req 10.4: Setiap kartu soal menampilkan indikator benar/salah.
   Req 10.5: Jika ada jawaban null → tampilkan peringatan, jangan hitung skor.
   ============================================================= */

document.addEventListener('DOMContentLoaded', function() {
  var btnSubmit   = document.getElementById('btn-submit');
  var scoreDisplay = document.getElementById('score-display');
  var scoreValue  = document.getElementById('score-value');
  var btnReset    = document.getElementById('btn-reset');
  var warningMsg  = document.getElementById('warning-msg');

  // Guard: elemen mungkin tidak ada jika script dimuat di luar latihan.html
  if (!btnSubmit) return;

  btnSubmit.addEventListener('click', function() {
    var userAnswers = getUserAnswers();

    // Req 10.5: Cek apakah ada soal yang belum dijawab
    var hasUnanswered = QUESTIONS.some(function(q) {
      return userAnswers[q.id] === null;
    });

    if (hasUnanswered) {
      warningMsg.removeAttribute('hidden');
      return; // hentikan — jangan hitung skor
    }

    // Sembunyikan peringatan jika semua soal sudah dijawab
    warningMsg.setAttribute('hidden', '');

    // Req 10.2 & 10.3: Hitung skor dan tampilkan
    var correct = calculateScore(userAnswers);
    scoreValue.textContent = correct;
    scoreDisplay.removeAttribute('hidden');

    // Req 10.4: Tandai setiap kartu soal dengan indikator benar/salah
    QUESTIONS.forEach(function(q) {
      var card       = document.getElementById(q.id);
      var feedbackEl = card.querySelector('.feedback');
      var ua         = userAnswers[q.id];

      var isCorrect;
      if (q.type === 'multiple-choice') {
        isCorrect = (ua === q.answer);
      } else {
        isCorrect = (parseFloat(ua) === parseFloat(q.answer));
      }

      // Reset class sebelumnya sebelum menambah yang baru
      card.classList.remove('correct', 'wrong');
      feedbackEl.classList.remove('correct', 'wrong');

      if (isCorrect) {
        card.classList.add('correct');
        feedbackEl.classList.add('correct');
        feedbackEl.textContent = '✓ Benar!';
      } else {
        card.classList.add('wrong');
        feedbackEl.classList.add('wrong');
        feedbackEl.textContent = '✗ Salah. Jawaban benar: ' + q.answer;
      }
    });

    // Tampilkan tombol reset setelah skor ditampilkan
    btnReset.removeAttribute('hidden');
  });
});
