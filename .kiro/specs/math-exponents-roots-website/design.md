# Design Document — Math Exponents & Roots Website

## Overview

Website ini adalah aplikasi web statis dua halaman yang menyajikan materi matematika eksponen dan akar dalam estetika retro bergaya tahun 1980–1990an. Dibangun sepenuhnya dengan HTML, CSS, dan JavaScript vanilla tanpa framework eksternal.

**Halaman-halaman:**
- `index.html` — Halaman utama edukatif: navbar, landing, sejarah, materi (eksponen + akar), contoh soal, credit.
- `latihan.html` — Halaman latihan interaktif: navbar, 5 soal pilihan ganda, 5 soal esai, sistem penilaian otomatis, credit.

**Prinsip desain utama:**
- Warna primer kuning (#FFD700) pada elemen aksen, heading, tombol, dan border.
- Latar belakang gelap (#0a0a0a atau #111111) untuk kontras tinggi.
- Font monospace/pixel (misalnya `'Courier New'`, `'Press Start 2P'` dari Google Fonts, atau fallback system monospace).
- Border tebal (≥ 2px) bergaya solid pada semua kartu, tombol, dan blok rumus.
- Fully responsive dari 320px hingga 1440px+.

---

## Architecture

Karena ini adalah website statis tanpa server-side rendering, arsitekturnya sederhana:

```
nabRepBelajar/
└── Project/
    ├── index.html          # Halaman utama (konten edukatif)
    ├── latihan.html        # Halaman latihan interaktif
    ├── css/
    │   └── style.css       # Stylesheet tunggal yang digunakan kedua halaman
    └── js/
        └── latihan.js      # Logic soal dan penilaian untuk latihan.html
```

> `index.html` tidak memerlukan JavaScript tambahan kecuali untuk smooth scroll (opsional inline).  
> `latihan.js` berisi: definisi soal, kunci jawaban, validasi input, kalkulasi skor, dan reset.

**Aliran data:**
```
Pengguna → Browser → HTML (DOM) → CSS (tampilan) → JS (interaksi)
                                                    ↓
                                          Kunci jawaban (hardcoded array)
                                          + Jawaban pengguna (DOM state)
                                          → Skor dihitung di sisi klien
```

Tidak ada penyimpanan persisten (localStorage/sessionStorage) karena skor hanya bersifat sesi tunggal.

---

## Components and Interfaces

### 1. Navbar (digunakan di kedua halaman)

**HTML Structure:**
```html
<nav class="navbar">
  <span class="navbar-brand">Eksponen</span>
  <ul class="nav-links">
    <li><a href="index.html" class="nav-link [active]">Beranda</a></li>
    <li><a href="latihan.html" class="nav-link [active]">Latihan Soal</a></li>
  </ul>
</nav>
```

**Behavior:**
- Tautan aktif dibedakan dengan class `active` yang memberikan latar berbeda atau underline tebal.
- Di viewport < 480px: `nav-links` berubah menjadi susunan vertikal (`flex-direction: column`) sehingga tidak overflow.

**CSS Variables yang relevan:**
```css
--color-primary: #0F3051;
--color-bg: #0f0f0f;
--color-surface: #1a1a1a;
--color-text: #f0f0f0;
--border-width: 3px;
--font-main: 'Courier New', 'Lucida Console', monospace;
```

---

### 2. Landing Section (index.html)

**HTML Structure:**
```html
<section id="landing" class="landing-section">
  <div class="decorative-border"><!-- elemen dekoratif geometris --></div>
  <h1 class="landing-title">Eksponen &amp; Akar</h1>
  <p class="landing-desc">...</p>
  <a href="#materi" class="btn-primary">Mulai Belajar ▶</a>
</section>
```

**Komponen dekoratif:** Baris karakter `═══` atau border bergaris ganda menggunakan CSS `border-style: double` sebagai pemisah visual.

---

### 3. Sejarah Section (index.html)

**HTML Structure:**
```html
<section id="sejarah" class="section-box">
  <h2 class="section-title">Sejarah Eksponen &amp; Akar</h2>
  <div class="history-card">
    <p><!-- Narasi sejarah eksponen dengan tokoh/peradaban --></p>
    <p><!-- Narasi sejarah akar dan asal-usul simbol √ --></p>
  </div>
</section>
```

**Styling:** Kartu dengan `border: 3px solid var(--color-primary)` dan `background: var(--color-surface)`.

---

### 4. Materi Section (index.html)

Dibagi menjadi dua subseksi: eksponen dan akar.

**HTML Structure:**
```html
<section id="materi" class="section-box">
  <h2 class="section-title">Materi</h2>

  <!-- Sub-seksi Eksponen -->
  <div id="eksponen" class="subsection">
    <h3 class="subsection-title">Eksponen (Pangkat)</h3>
    <p class="definition">...</p>
    <div class="formula-block">aⁿ = a × a × … × a (n kali)</div>
    <ul class="property-list">
      <li class="formula-block">aᵐ × aⁿ = aᵐ⁺ⁿ</li>
      <!-- 4 sifat lainnya -->
    </ul>
  </div>

  <!-- Sub-seksi Akar -->
  <div id="akar" class="subsection">
    <h3 class="subsection-title">Akar (Radix)</h3>
    <p class="definition">...</p>
    <div class="formula-block">√a = b jika b² = a</div>
    <div class="formula-block">ⁿ√a = a^(1/n)</div>
    <!-- sifat-sifat akar -->
  </div>
</section>
```

**`.formula-block`:** `border: 2px solid var(--color-primary)`, `background: var(--color-surface)`, `padding: 0.75rem 1rem`, `font-family: var(--font-main)`.

---

### 5. Contoh Soal Section (index.html)

```html
<section id="contoh" class="section-box">
  <h2 class="section-title">Contoh Soal</h2>

  <div class="example-group">
    <h3 class="example-label">Contoh Soal — Eksponen</h3>
    <div class="example-card">
      <p class="problem">Soal: ...</p>
      <div class="solution">
        <p>Langkah 1: ...</p>
        <p>Langkah 2: ...</p>
      </div>
    </div>
    <!-- 2 kartu lainnya -->
  </div>

  <div class="example-group">
    <h3 class="example-label">Contoh Soal — Akar</h3>
    <!-- 3 kartu akar -->
  </div>

  <a href="latihan.html" class="btn-primary">Coba Latihan Soal ▶</a>
</section>
```

---

### 6. Credit Section (digunakan di kedua halaman)

```html
<footer class="credit-section">
  <p>Dibuat oleh <strong>[Nama Pembuat]</strong> &copy; [YYYY]</p>
</footer>
```

**Styling:** `border-top: 3px solid var(--color-primary)`, `font-family: var(--font-main)`.

---

### 7. Halaman Latihan — Soal Pilihan Ganda

```html
<div class="question-card" id="q1">
  <p class="question-number">1.</p>
  <p class="question-text">...</p>
  <div class="options">
    <label><input type="radio" name="q1" value="A"> A. ...</label>
    <label><input type="radio" name="q1" value="B"> B. ...</label>
    <label><input type="radio" name="q1" value="C"> C. ...</label>
    <label><input type="radio" name="q1" value="D"> D. ...</label>
  </div>
  <div class="feedback" aria-live="polite"></div>
</div>
```

---

### 8. Halaman Latihan — Soal Esai

```html
<div class="question-card" id="q6">
  <p class="question-number">6.</p>
  <p class="question-text">...</p>
  <input
    type="text"
    id="essay-6"
    class="essay-input"
    maxlength="15"
    placeholder="Ketik jawaban..."
    inputmode="decimal"
    autocomplete="off"
  >
  <div class="feedback" aria-live="polite"></div>
</div>
```

**Validasi karakter (JS):**
```javascript
input.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9.\-]/g, '');
});
```

---

### 9. Submit & Scoring Interface

```html
<div class="action-bar">
  <button id="btn-submit" class="btn-primary">Kumpulkan</button>
  <div id="score-display" class="score-box" hidden>
    <p>Skor Anda: <span id="score-value">0</span> / 10</p>
  </div>
  <button id="btn-reset" class="btn-secondary" hidden>Coba Lagi</button>
</div>
<div id="warning-msg" class="warning" hidden>
  ⚠ Semua soal harus dilengkapi sebelum mengumpulkan!
</div>
```

---

## Data Models

### Definisi Soal (JavaScript, `latihan.js`)

```javascript
const QUESTIONS = [
  // Pilihan Ganda (index 0–4, nomor soal 1–5)
  {
    id: 'q1',
    type: 'multiple-choice',
    text: 'Berapakah nilai dari 2⁵?',
    options: { A: '16', B: '32', C: '64', D: '8' },
    answer: 'B'   // kunci jawaban
  },
  // ... 4 soal pilihan ganda lainnya
  
  // Esai (index 5–9, nomor soal 6–10)
  {
    id: 'q6',
    type: 'essay',
    text: 'Berapakah nilai dari √144?',
    answer: '12'  // kunci jawaban (string untuk perbandingan numerik)
  },
  // ... 4 soal esai lainnya
];
```

### State Jawaban Pengguna (in-memory, tidak persisten)

```javascript
// Tidak disimpan sebagai objek terpisah — jawaban dibaca langsung dari DOM
// saat tombol submit ditekan.
function getUserAnswers() {
  const answers = {};
  QUESTIONS.forEach(q => {
    if (q.type === 'multiple-choice') {
      const selected = document.querySelector(`input[name="${q.id}"]:checked`);
      answers[q.id] = selected ? selected.value : null;
    } else {
      const input = document.getElementById(`essay-${q.id.slice(1)}`);
      answers[q.id] = input.value.trim() || null;
    }
  });
  return answers;
}
```

### Scoring Logic

```javascript
function calculateScore(userAnswers) {
  let correct = 0;
  QUESTIONS.forEach(q => {
    const ua = userAnswers[q.id];
    if (ua === null) return; // belum dijawab
    if (q.type === 'multiple-choice') {
      if (ua === q.answer) correct++;
    } else {
      // Perbandingan numerik: parseFloat untuk toleransi format
      if (parseFloat(ua) === parseFloat(q.answer)) correct++;
    }
  });
  return correct;
}
```

### CSS Custom Properties (Design Tokens)

```css
:root {
  --color-primary:   #FFD700;   /* Warna primer kuning */
  --color-primary-dark: #cc9f00; /* Untuk hover state */
  --color-bg:        #0f0f0f;   /* Latar belakang halaman */
  --color-surface:   #1a1a1a;   /* Kartu / panel */
  --color-surface-2: #252525;   /* Nested surface */
  --color-text:      #f0f0f0;   /* Teks utama */
  --color-text-muted:#a0a0a0;   /* Teks sekunder */
  --color-correct:   #39ff14;   /* Indikator jawaban benar */
  --color-wrong:     #ff3333;   /* Indikator jawaban salah */
  --border-width:    3px;
  --border-style:    solid;
  --font-main:       'Courier New', 'Lucida Console', monospace;
  --radius:          0px;       /* No border-radius = gaya retro kotak */
  --max-width:       900px;
  --spacing-sm:      0.5rem;
  --spacing-md:      1rem;
  --spacing-lg:      2rem;
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Berdasarkan analisis prework, fitur ini memiliki logika murni (pure functions) yang cocok untuk property-based testing: fungsi `filterNumeric` dan `calculateScore` tidak bergantung pada state eksternal dan perilakunya bervariasi bermakna terhadap input. Setelah refleksi untuk menghilangkan redundansi, diperoleh 5 property yang saling tidak tumpang tindih.

---

### Property 1: Input Filter Invariant

*For any* string yang diketikkan pada field input soal esai, setelah fungsi filter numerik diterapkan, string hasil hanya boleh berisi karakter dari himpunan `{0–9, '.', '-'}` dan panjangnya tidak boleh melebihi 15 karakter.

Reasoning: Property 1 (karakter valid) dan Property 2 (batas panjang) dari prework menguji aspek yang berbeda dari fungsi `filterNumeric` yang sama, sehingga digabungkan menjadi satu invariant komprehensif. Input variation (semua kombinasi karakter Unicode) sangat luas; 100 iterasi akan menemukan kasus tepi yang tidak terpikirkan secara manual.

**Validates: Requirements 9.3, 9.6**

---

### Property 2: Akurasi Kalkulasi Skor

*For any* set jawaban lengkap dari pengguna di mana tepat N jawaban sesuai dengan kunci (N ∈ [0, 10]), `calculateScore()` SHALL mengembalikan nilai N, dan string yang ditampilkan SHALL sama dengan `"Skor Anda: N / 10"`.

Reasoning: Property skor-dalam-rentang (P3 dari prework) disubsumsi oleh property ini karena jika skor = N-jawaban-benar dan N ∈ [0,10] secara definisi, rentang valid otomatis terjamin. Property format tampilan (P5) juga digabungkan di sini karena keduanya bergantung pada output `calculateScore()` yang sama.

**Validates: Requirements 10.2, 10.3**

---

### Property 3: Incomplete Submission Guard

*For any* state pengisian di mana minimal satu soal belum dijawab (radio button tidak terpilih atau input esai kosong), setelah tombol submit ditekan, sistem SHALL menampilkan pesan peringatan dan SHALL NOT menampilkan atau menghitung skor.

Reasoning: Input variation (berbagai kombinasi soal mana yang belum dijawab) bermakna — ada banyak subset dari 10 soal yang mungkin belum dijawab. Pengujian manual hanya bisa memeriksa beberapa kasus; PBT bisa menghasilkan semua subset valid.

**Validates: Requirements 10.5**

---

### Property 4: Post-Submit Feedback Completeness

*For any* set jawaban lengkap yang berhasil disubmit, setiap dari 10 kartu soal SHALL memiliki elemen feedback visual (class CSS atau elemen DOM yang terbedakan) yang menunjukkan apakah jawaban benar atau salah.

Reasoning: Untuk setiap kombinasi jawaban yang mungkin, feedback harus muncul di semua soal. Input variation (kombinasi benar/salah pada 10 soal) bervariasi; PBT memastikan tidak ada soal yang "terlewat" tanpa feedback dalam kondisi apapun.

**Validates: Requirements 10.4**

---

### Property 5: Reset Round-Trip

*For any* state setelah submit (termasuk dengan skor, indikator benar/salah, dan warning yang mungkin tampil), setelah tombol "Coba Lagi" diklik, state halaman SHALL identik dengan state awal pemuatan: semua radio button tidak terpilih, semua field input esai kosong, elemen skor tersembunyi, tombol "Coba Lagi" tersembunyi, dan semua elemen feedback dihapus dari DOM.

Reasoning: Ini adalah round-trip property klasik — submit lalu reset seharusnya mengembalikan ke kondisi awal persis. Input variation (berbagai kombinasi jawaban sebelum reset) memastikan reset bekerja di semua kondisi, bukan hanya contoh tertentu.

**Validates: Requirements 10.6**

---

## Error Handling

### Input Validation (latihan.html)

| Kondisi | Penanganan |
|---|---|
| Karakter non-numerik diketikkan pada soal esai | Karakter langsung distrip via event listener `input`; field tidak pernah menampilkan karakter ilegal |
| Input esai melebihi 15 karakter | Atribut `maxlength="15"` mencegah input lebih lanjut di sisi browser |
| Submit dengan soal belum dijawab | Pesan peringatan ditampilkan, skor tidak dihitung, eksekusi dihentikan |
| Jawaban esai `NaN` setelah `parseFloat` | Dianggap salah (NaN !== angka kunci manapun) |

### Navigation Errors

| Kondisi | Penanganan |
|---|---|
| File `latihan.html` tidak ditemukan (link mati) | Ini adalah tanggung jawab deployment; file harus ditempatkan di direktori yang sama |
| Anchor link `#materi` tidak ada di `index.html` | Anchor link harus sesuai dengan atribut `id` elemen target |

### Responsiveness Edge Cases

| Kondisi | Penanganan |
|---|---|
| Viewport < 320px | Tidak dijamin; 320px adalah batas minimum requirement |
| Konten matematik overflow pada mobile | Gunakan `overflow-x: auto` pada blok formula |
| Font fallback jika Google Fonts tidak tersedia | Stack font fallback: `'Courier New', 'Lucida Console', monospace` |

---

## Testing Strategy

### Unit Testing (Manual / Browser DevTools)

Karena ini adalah website statis tanpa build toolchain, pengujian unit dilakukan secara manual atau dengan runner ringan seperti **Jasmine** (CDN) atau **QUnit** (CDN).

**Area yang diuji:**
1. `calculateScore(answers)` — Uji dengan jawaban sepenuhnya benar, sepenuhnya salah, dan campuran.
2. `getUserAnswers()` — Uji bahwa fungsi membaca DOM state dengan benar.
3. Validasi input karakter — Uji bahwa string dengan karakter ilegal menghasilkan output bersih.
4. Reset state — Uji bahwa setelah reset, semua elemen kembali ke kondisi awal.

**Contoh unit test cases:**

```javascript
// calculateScore: semua benar
assert(calculateScore({ q1:'B', q2:'A', q3:'C', q4:'D', q5:'B',
                         q6:'12', q7:'8', q8:'3', q9:'1000', q10:'4' }) === 10);

// calculateScore: semua salah
assert(calculateScore({ q1:'A', q2:'B', q3:'A', q4:'A', q5:'A',
                         q6:'99', q7:'99', q8:'99', q9:'99', q10:'99' }) === 0);

// Input filter: hanya digit dan tanda
assert(filterNumeric('12.5abc') === '12.5');
assert(filterNumeric('-7hello') === '-7');

// Esai: ekuivalensi numerik
assert(parseFloat('12') === parseFloat('12.0')); // true
```

### Property-Based Testing

Karena fitur ini mencakup logika kalkulasi skor dan validasi input yang bersifat murni (pure functions), **property-based testing** dapat diterapkan untuk fungsi-fungsi JavaScript inti.

**Library yang direkomendasikan:** [fast-check](https://github.com/dubzzz/fast-check) (dapat digunakan via CDN atau npm)

**Konfigurasi:** Minimum 100 iterasi per property test.

**Property Tests:**

```javascript
// Feature: math-exponents-roots-website, Property 1: Input Filter Invariant
// For any string, filterNumeric produces only [0-9,.,−] chars and length ≤ 15
fc.assert(fc.property(fc.string(), (s) => {
  const result = filterNumeric(s);
  return /^[0-9.\-]*$/.test(result) && result.length <= 15;
}), { numRuns: 100 });

// Feature: math-exponents-roots-website, Property 2: Akurasi Kalkulasi Skor
// For any N correct answers, calculateScore returns N and display shows "Skor Anda: N / 10"
fc.assert(fc.property(fc.integer({ min: 0, max: 10 }), (n) => {
  const answers = buildAnswersWithNCorrect(n); // helper: kunci benar untuk N soal, salah sisanya
  const score = calculateScore(answers);
  const displayText = formatScore(score);
  return score === n && displayText === `Skor Anda: ${n} / 10`;
}), { numRuns: 100 });

// Feature: math-exponents-roots-website, Property 3: Incomplete Submission Guard
// For any incomplete answer set, submit shows warning and does NOT show score
fc.assert(fc.property(
  fc.integer({ min: 1, max: 9 }).chain(numAnswered =>
    fc.record({ answered: fc.constant(numAnswered) })
  ),
  ({ answered }) => {
    setupPartialAnswers(answered); // jawab hanya 'answered' dari 10 soal
    triggerSubmit();
    return warningVisible() && !scoreVisible();
  }
), { numRuns: 100 });

// Feature: math-exponents-roots-website, Property 4: Post-Submit Feedback Completeness
// For any complete answer set, all 10 question cards have feedback indicators
fc.assert(fc.property(
  fc.record({
    mc: fc.array(fc.constantFrom('A','B','C','D'), { minLength: 5, maxLength: 5 }),
    essay: fc.array(fc.string({ maxLength: 10 }), { minLength: 5, maxLength: 5 })
  }),
  ({ mc, essay }) => {
    setupCompleteAnswers(mc, essay);
    triggerSubmit();
    return allQuestionCardsHaveFeedback(); // check all 10 .question-card have .correct or .wrong class
  }
), { numRuns: 100 });

// Feature: math-exponents-roots-website, Property 5: Reset Round-Trip
// For any submitted state, clicking reset produces initial page state
fc.assert(fc.property(
  fc.record({
    mc: fc.array(fc.constantFrom('A','B','C','D'), { minLength: 5, maxLength: 5 }),
    essay: fc.array(fc.string({ maxLength: 10 }), { minLength: 5, maxLength: 5 })
  }),
  ({ mc, essay }) => {
    setupCompleteAnswers(mc, essay);
    triggerSubmit();
    triggerReset();
    return (
      allRadiosUnchecked() &&
      allEssayInputsEmpty() &&
      scoreHidden() &&
      resetButtonHidden() &&
      allFeedbackCleared()
    );
  }
), { numRuns: 100 });
```

### Integration Testing (Manual)

Pengujian manual di browser mencakup:

1. **Navigasi:** Klik semua tautan navbar di kedua halaman → verifikasi halaman yang dibuka.
2. **Anchor link:** Klik tombol "Mulai Belajar" → verifikasi scroll ke `#materi`.
3. **Submit lengkap:** Jawab semua soal → klik Kumpulkan → verifikasi skor dan indikator benar/salah.
4. **Submit tidak lengkap:** Biarkan satu soal kosong → klik Kumpulkan → verifikasi pesan peringatan.
5. **Reset:** Setelah submit, klik Coba Lagi → verifikasi semua state kembali ke awal.
6. **Responsiveness:** Uji di Chrome DevTools pada viewport 320px, 480px, 768px, 1024px, 1440px.
7. **Input validation:** Ketik `abc`, `1.2.3`, `-5` pada soal esai → verifikasi filter karakter.

### Accessibility Checks

- Semua `<input>` memiliki label yang berasosiasi (via `<label for="...">` atau wrapping `<label>`).
- Indikator feedback menggunakan `aria-live="polite"` agar screen reader mengumumkan perubahan.
- Rasio kontras: #0F3051 pada #0f0f0f = ~14:1 (melampaui WCAG AA 4.5:1).
- Tombol memiliki teks yang deskriptif (bukan hanya ikon).
