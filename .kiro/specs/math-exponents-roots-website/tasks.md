# Implementation Plan: Math Exponents & Roots Website

## Overview

Implementasi website statis dua halaman tentang eksponen dan akar menggunakan HTML, CSS, dan JavaScript vanilla. Dibangun secara bertahap: mulai dari struktur file dan stylesheet global, kemudian halaman utama (`index.html`) section per section, lalu halaman latihan (`latihan.html`) dengan logika soal dan penilaian, dan terakhir integrasi dan pengujian.

Semua file ditempatkan di `Project/` sesuai arsitektur:
```
Project/
├── index.html
├── latihan.html
├── css/
│   └── style.css
└── js/
    └── latihan.js
```

---

## Tasks

- [x] 1. Set up struktur file dan CSS global (design tokens, reset, komponen dasar)
  - Buat direktori `Project/css/` dan `Project/js/`
  - Buat `Project/css/style.css` dengan CSS custom properties (design tokens: `--color-primary`, `--color-bg`, `--color-surface`, `--color-text`, dll.), CSS reset dasar, dan style global untuk `body`, `a`, dan tipografi
  - Definisikan class utility: `.btn-primary`, `.btn-secondary`, `.section-box`, `.formula-block`, `.subsection`, `.question-card`, `.score-box`, `.warning`, `.feedback`
  - Implementasikan responsive breakpoints (`@media (max-width: 480px)`) untuk layout dasar
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 12.3_

- [x] 2. Implementasikan komponen Navbar dan Credit Section
  - [x] 2.1 Buat markup HTML navbar dan credit section sebagai referensi template
    - Tulis struktur HTML navbar dengan `.navbar`, `.navbar-brand`, `.nav-links`, dan class `active`
    - Tulis struktur HTML credit section dengan `.credit-section`, nama pembuat, dan tahun
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 7.1, 7.2, 7.3, 7.4_

  - [x] 2.2 Tambahkan CSS untuk navbar dan credit section di `style.css`
    - Style `.navbar`: latar gelap, border bawah ≥ 2px `--color-primary`, flexbox, justify-content space-between
    - Style `.navbar-brand`, `.nav-link`, `.nav-link.active`
    - Style `.credit-section`: border-top ≥ 3px solid `--color-primary`, font monospace
    - Media query `< 480px`: `flex-direction: column` pada `.nav-links`
    - _Requirements: 1.4, 1.6, 1.7, 7.4, 12.2, 12.4_

- [x] 3. Buat `index.html` — Landing Section dan Sejarah Section
  - [x] 3.1 Buat file `Project/index.html` dengan boilerplate HTML5, link ke `style.css`, navbar (dengan `active` pada "Beranda"), dan landing section
    - Tulis `<section id="landing">` dengan judul yang menyebut "Eksponen & Akar", deskripsi 1–3 kalimat, tombol CTA anchor ke `#materi`, dan elemen dekoratif visual
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [x] 3.2 Tambahkan Sejarah Section ke `index.html`
    - Tulis `<section id="sejarah">` dengan judul "Sejarah Eksponen & Akar"
    - Isi narasi eksponen yang menyebutkan minimal satu tokoh/peradaban secara eksplisit
    - Isi narasi akar yang menyebutkan asal-usul simbol √ secara eksplisit
    - Bungkus konten dalam `.history-card` dengan border dan latar sesuai Retro_Style
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 4. Buat Materi Section dan Contoh Soal Section di `index.html`
  - [x] 4.1 Tambahkan Materi Section (eksponen + akar) ke `index.html`
    - Tulis `<section id="materi">` dengan dua subseksi: `#eksponen` dan `#akar`
    - Subseksi eksponen: definisi dengan notasi aⁿ, minimal 5 sifat dalam `.formula-block`, judul menggunakan `--color-primary`
    - Subseksi akar: definisi √a = b jika b² = a, relasi ⁿ√a = a^(1/n), minimal 3 sifat, penjelasan akar kuadrat dan akar pangkat tiga dengan notasi + contoh numerik + domain
    - Setiap `.formula-block` memiliki border ≥ 2px, latar `.color-surface`, font monospace
    - Tambahkan `overflow-x: auto` pada `.formula-block` di CSS untuk mencegah overflow mobile
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 4.2 Tambahkan Contoh Soal Section ke `index.html`
    - Tulis `<section id="contoh">` dengan dua kelompok: eksponen (≥ 3 kartu) dan akar (≥ 3 kartu)
    - Setiap `.example-card` memiliki label nomor soal, teks soal, dan langkah penyelesaian (≥ 2 langkah eksplisit)
    - Label `.example-label` membedakan kelompok eksponen dan akar secara visual
    - Tombol/link "Coba Latihan Soal" mengarah ke `latihan.html`
    - Tambahkan Credit Section di bawah
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3_

- [~] 5. Checkpoint — Verifikasi `index.html`
  - Buka `index.html` di browser dan pastikan semua section tampil benar, navbar berfungsi, CTA anchor link scroll ke `#materi`, dan tidak ada overflow horizontal pada viewport ≥ 320px.

- [x] 6. Buat `latihan.html` — Struktur Soal dan Markup
  - [x] 6.1 Buat file `Project/latihan.html` dengan boilerplate HTML5, link ke `style.css` dan `js/latihan.js`, navbar (dengan `active` pada "Latihan Soal"), dan 5 soal pilihan ganda
    - Tulis 5 `.question-card` dengan nomor 1–5, teks soal relevan (eksponen/akar), dan 4 radio button (A–D) per soal
    - Setiap `.feedback` memiliki `aria-live="polite"`
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 6.2 Tambahkan 5 soal esai (nomor 6–10) dan action bar ke `latihan.html`
    - Tulis 5 `.question-card` dengan nomor 6–10, teks soal, dan `<input type="text">` dengan `maxlength="15"`, `inputmode="decimal"`, `autocomplete="off"`, dan `<label>` terasosiasi
    - Tulis `.action-bar` dengan `#btn-submit` ("Kumpulkan"), `#score-display` (hidden), `#btn-reset` (hidden), dan `#warning-msg` (hidden)
    - Tambahkan Credit Section di bawah
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 10.1, 7.1, 7.2, 7.3_

- [ ] 7. Buat `Project/js/latihan.js` — Logika soal, validasi, dan penilaian
  - [x] 7.1 Implementasikan array `QUESTIONS`, fungsi `filterNumeric`, dan fungsi `getUserAnswers`
    - Definisikan `const QUESTIONS` dengan 5 objek `multiple-choice` (kunci A/B/C/D) dan 5 objek `essay` (kunci string numerik)
    - Implementasikan `filterNumeric(str)`: strip karakter selain `[0-9.\-]` dan potong ke 15 karakter — kembalikan string hasil
    - Pasang event listener `input` pada setiap `.essay-input` yang memanggil `filterNumeric` dan mengupdate `e.target.value`
    - Implementasikan `getUserAnswers()`: baca DOM state dan kembalikan objek `{ [q.id]: value | null }`
    - _Requirements: 9.3, 9.6_

  - [-] 7.2 Tulis property test untuk `filterNumeric` (Property 1)
    - **Property 1: Input Filter Invariant**
    - **Validates: Requirements 9.3, 9.6**
    - Gunakan fast-check via CDN: `fc.assert(fc.property(fc.string(), (s) => { const r = filterNumeric(s); return /^[0-9.\-]*$/.test(r) && r.length <= 15; }), { numRuns: 100 })`
    - Jalankan via test runner Jasmine/QUnit CDN atau Node.js

  - [-] 7.3 Implementasikan `calculateScore`, `formatScore`, logika submit, dan tampilan indikator benar/salah
    - Implementasikan `calculateScore(userAnswers)`: iterasi `QUESTIONS`, bandingkan pilihan ganda dengan `===`, dan esai dengan `parseFloat(...) === parseFloat(...)`, kembalikan `correct` (integer)
    - Implementasikan `formatScore(score)`: kembalikan string `"Skor Anda: ${score} / 10"`
    - Pasang event listener pada `#btn-submit`:
      1. Panggil `getUserAnswers()`
      2. Jika ada nilai `null` → tampilkan `#warning-msg`, return
      3. Hitung skor, tampilkan `#score-display` dengan `formatScore`, sembunyikan `#warning-msg`
      4. Untuk setiap soal, tambahkan class `.correct` atau `.wrong` pada `.question-card` dan isi `.feedback`
      5. Tampilkan `#btn-reset`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [~] 7.4 Tulis property test untuk `calculateScore` (Property 2)
    - **Property 2: Akurasi Kalkulasi Skor**
    - **Validates: Requirements 10.2, 10.3**
    - `fc.assert(fc.property(fc.integer({ min: 0, max: 10 }), (n) => { const answers = buildAnswersWithNCorrect(n); const score = calculateScore(answers); return score === n && formatScore(score) === \`Skor Anda: ${n} / 10\`; }), { numRuns: 100 })`

  - [~] 7.5 Tulis property test untuk incomplete submission guard (Property 3)
    - **Property 3: Incomplete Submission Guard**
    - **Validates: Requirements 10.5**
    - Generate subset acak dari 1–9 soal yang dijawab, panggil `triggerSubmit()`, verifikasi `warningVisible() && !scoreVisible()`

  - [~] 7.6 Implementasikan fungsi reset
    - Pasang event listener pada `#btn-reset`:
      1. Reset semua radio button ke tidak terpilih (`checked = false`)
      2. Kosongkan semua `.essay-input` (`value = ''`)
      3. Sembunyikan `#score-display` dan `#btn-reset`
      4. Hapus class `.correct` dan `.wrong` dari semua `.question-card`
      5. Kosongkan semua elemen `.feedback`
      6. Sembunyikan `#warning-msg`
    - _Requirements: 10.6_

  - [~] 7.7 Tulis property test untuk Post-Submit Feedback Completeness (Property 4)
    - **Property 4: Post-Submit Feedback Completeness**
    - **Validates: Requirements 10.4**
    - Generate kombinasi acak 5 jawaban MC dan 5 jawaban esai, submit, verifikasi semua 10 `.question-card` memiliki class `.correct` atau `.wrong`

  - [~] 7.8 Tulis property test untuk Reset Round-Trip (Property 5)
    - **Property 5: Reset Round-Trip**
    - **Validates: Requirements 10.6**
    - Submit dengan jawaban acak, klik reset, verifikasi `allRadiosUnchecked() && allEssayInputsEmpty() && scoreHidden() && resetButtonHidden() && allFeedbackCleared()`

- [~] 8. Checkpoint — Verifikasi `latihan.html`
  - Buka `latihan.html` di browser: jawab semua soal dan klik Kumpulkan → verifikasi skor dan indikator. Coba submit dengan soal kosong → verifikasi warning. Klik Coba Lagi → verifikasi reset penuh.

- [ ] 9. Finalisasi responsivitas dan konsistensi style
  - [~] 9.1 Tambahkan dan audit style responsif di `style.css`
    - Pastikan tidak ada overflow horizontal pada viewport 320px–1440px untuk semua section di kedua halaman
    - Verifikasi media query `< 480px` untuk navbar (vertical stacking), `.formula-block` (overflow-x: auto), dan `.question-card` (lebar penuh)
    - Pastikan semua elemen menggunakan satuan CSS responsif (`rem`, `%`, `max-width`)
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 12.1, 12.2, 12.3, 12.4_

  - [~] 9.2 Audit dan perbaiki konsistensi Retro_Style di seluruh halaman
    - Pastikan `--color-primary: #0F3051` digunakan pada heading, tombol, border aksen, dan elemen dekoratif di kedua halaman
    - Pastikan `--color-bg` adalah latar gelap (lightness ≤ 20%)
    - Verifikasi border ≥ 2px pada semua kartu, tombol, dan blok rumus
    - Verifikasi font monospace konsisten pada semua heading dan body text
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [~] 10. Final Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task merujuk ke requirement spesifik untuk keterlacakan
- Checkpoint memastikan validasi bertahap sebelum melanjutkan ke fase berikutnya
- Property tests memvalidasi correctness properties universal dari fungsi murni (pure functions)
- Unit tests memvalidasi contoh spesifik dan edge cases
- File `latihan.js` harus diletakkan di `Project/js/` dan di-load sebagai `<script src="js/latihan.js">` di `latihan.html`

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.2"] },
    { "id": 2, "tasks": ["3.1", "3.2"] },
    { "id": 3, "tasks": ["4.1", "4.2"] },
    { "id": 4, "tasks": ["6.1", "6.2"] },
    { "id": 5, "tasks": ["7.1"] },
    { "id": 6, "tasks": ["7.2", "7.3"] },
    { "id": 7, "tasks": ["7.4", "7.5", "7.6"] },
    { "id": 8, "tasks": ["7.7", "7.8"] },
    { "id": 9, "tasks": ["9.1", "9.2"] }
  ]
}
```
