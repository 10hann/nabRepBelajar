# Requirements Document

## Introduction

Website interaktif bertema retro dengan warna primer kuning yang menyajikan materi matematika eksponen dan akar (pangkat dan akar kuadrat/pangkat). Website terdiri dari dua halaman HTML: halaman utama (`index.html`) yang memuat navbar, landing page, sejarah materi, isi materi, contoh soal, dan credit; serta halaman latihan (`latihan.html`) yang memuat 10 soal (5 pilihan ganda + 5 esai), sistem input jawaban, perhitungan skor otomatis, dan credit. Keseluruhan tampilan mengikuti estetika retro dengan palet warna kuning sebagai warna primer.

---

## Glossary

- **Website**: Kumpulan halaman HTML yang dapat diakses melalui browser.
- **Halaman_Utama**: File `index.html` yang berisi konten edukatif utama tentang eksponen dan akar.
- **Halaman_Latihan**: File `latihan.html` yang berisi soal-soal latihan interaktif.
- **Navbar**: Komponen navigasi di bagian atas halaman yang memuat tautan antar halaman.
- **Landing_Section**: Bagian pertama Halaman_Utama yang menyambut pengguna dengan judul dan deskripsi singkat.
- **Sejarah_Section**: Bagian Halaman_Utama yang memuat narasi sejarah penemuan dan perkembangan eksponen dan akar.
- **Materi_Section**: Bagian Halaman_Utama yang memuat penjelasan konsep, rumus, dan properti eksponen dan akar.
- **Contoh_Section**: Bagian Halaman_Utama yang memuat contoh soal beserta penyelesaian langkah demi langkah.
- **Credit_Section**: Komponen di bagian bawah setiap halaman yang menampilkan identitas pembuat.
- **Soal_Pilihan_Ganda**: Soal dengan empat opsi jawaban (A, B, C, D) di mana pengguna memilih satu jawaban benar.
- **Soal_Esai**: Soal di mana pengguna mengetikkan jawaban berupa angka ke dalam input teks.
- **Skor**: Nilai hasil latihan yang dihitung secara otomatis setelah pengguna menyelesaikan semua soal.
- **Retro_Style**: Gaya visual yang terinspirasi dari estetika desain era 1980–1990an, ditandai dengan font tebal bergaya pixel/slab-serif, warna kontras, border tebal (minimal 2px), dan elemen dekoratif geometris.
- **Warna_Primer**: Warna kuning (#FFD700 atau ekuivalen) yang menjadi warna dominan pada elemen utama seperti heading, tombol, dan aksen dekoratif.
- **Pengguna**: Seseorang yang mengakses dan berinteraksi dengan website melalui browser.

---

## Requirements

### Requirement 1: Navbar Navigasi

**User Story:** Sebagai Pengguna, saya ingin memiliki navbar yang konsisten di setiap halaman, sehingga saya dapat berpindah antara Halaman_Utama dan Halaman_Latihan dengan mudah.

#### Acceptance Criteria

1. THE Navbar SHALL ditampilkan di bagian paling atas setiap halaman (Halaman_Utama dan Halaman_Latihan) sebelum konten utama lainnya.
2. THE Navbar SHALL memuat tautan dengan teks yang tepat "Beranda" yang mengarah ke `index.html`.
3. THE Navbar SHALL memuat tautan dengan teks yang tepat "Latihan Soal" yang mengarah ke `latihan.html`.
4. THE Navbar SHALL menerapkan Retro_Style: latar belakang Warna_Primer (#FFD700) atau teks Warna_Primer pada latar gelap, dengan border bawah tebal minimal 2px.
5. WHEN Pengguna mengklik tautan di Navbar, THE Browser SHALL menavigasi ke halaman tujuan yang sesuai dalam tab yang sama.
6. WHILE Pengguna berada di Halaman_Utama, THE Navbar SHALL menampilkan tautan "Beranda" dengan indikator aktif (underline, latar berbeda, atau warna teks berbeda dari tautan non-aktif).
7. WHILE Pengguna berada di Halaman_Latihan, THE Navbar SHALL menampilkan tautan "Latihan Soal" dengan indikator aktif yang sama seperti kriteria 6.
8. THE Navbar SHALL memuat judul "Eksponen" yang tepat berada pada paling kiri navbar.

---

### Requirement 2: Landing Section (Halaman Utama)

**User Story:** Sebagai Pengguna, saya ingin disambut oleh halaman pembuka yang menarik, sehingga saya mendapat gambaran awal tentang topik yang akan dipelajari.

#### Acceptance Criteria

1. THE Landing_Section SHALL menampilkan judul utama website yang secara eksplisit menyebutkan kedua topik: "eksponen" dan "akar" (atau "pangkat" dan "akar").
2. THE Landing_Section SHALL menampilkan deskripsi singkat minimal satu kalimat dan maksimal tiga kalimat yang menjelaskan tujuan atau manfaat website bagi Pengguna.
3. THE Landing_Section SHALL menampilkan tombol call-to-action yang mengarah ke Materi_Section di dalam `index.html` menggunakan anchor link internal, atau ke `latihan.html`.
4. WHEN Pengguna mengklik tombol call-to-action tersebut, THE Browser SHALL menavigasi ke target yang ditentukan dalam tab yang sama.
5. THE Landing_Section SHALL menerapkan Retro_Style: judul menggunakan Warna_Primer sebagai warna teks, dan tombol call-to-action menggunakan Warna_Primer sebagai warna latar atau teks dengan border tebal minimal 2px.
6. THE Landing_Section SHALL menampilkan minimal satu elemen dekoratif visual (border bergaris ganda, pola geometris berulang, atau simbol matematika dekoratif) yang terbedakan secara visual dari konten teks utama.

---

### Requirement 3: Sejarah Section

**User Story:** Sebagai Pengguna, saya ingin membaca sejarah penemuan eksponen dan akar, sehingga saya memahami konteks dan latar belakang topik ini.

#### Acceptance Criteria

1. THE Sejarah_Section SHALL menampilkan judul seksi dengan teks "Sejarah Eksponen & Akar" atau "Sejarah Eksponen dan Akar".
2. THE Sejarah_Section SHALL memuat narasi tentang sejarah penggunaan eksponen yang menyebutkan secara eksplisit minimal satu nama tokoh atau peradaban (misalnya Archimedes, matematikawan Arab abad ke-9, atau matematikawan era Renaissance).
3. THE Sejarah_Section SHALL memuat narasi tentang sejarah penggunaan akar yang menyebutkan asal-usul simbol radikal (√) secara eksplisit.
4. THE Sejarah_Section SHALL menampilkan konten dalam paragraf yang terbungkus dalam elemen kontainer dengan border tebal sesuai Retro_Style, atau dalam kartu teks yang memiliki border dan latar belakang yang terbedakan dari halaman utama.

---

### Requirement 4: Materi Section — Eksponen

**User Story:** Sebagai Pengguna, saya ingin mempelajari konsep dan rumus eksponen secara lengkap, sehingga saya memahami definisi, sifat-sifat, dan cara penggunaannya.

#### Acceptance Criteria

1. THE Materi_Section SHALL menampilkan definisi eksponen beserta notasi standar (aⁿ = a × a × … × a sebanyak n kali).
2. THE Materi_Section SHALL menampilkan daftar sifat-sifat eksponen yang mencakup minimal lima sifat berikut:
   - Perkalian basis sama: aᵐ × aⁿ = aᵐ⁺ⁿ
   - Pembagian basis sama: aᵐ ÷ aⁿ = aᵐ⁻ⁿ
   - Pangkat dari pangkat: (aᵐ)ⁿ = aᵐⁿ
   - Eksponen nol: a⁰ = 1 (a ≠ 0)
   - Eksponen negatif: a⁻ⁿ = 1/aⁿ
3. THE Materi_Section SHALL menampilkan setiap blok rumus dalam elemen yang memiliki border yang terlihat (visible border) dengan ketebalan minimal 2px, terbedakan dari teks paragraf biasa.
4. THE Materi_Section SHALL menggunakan Warna_Primer sebagai warna border pada blok rumus dan sebagai warna teks pada judul sub-seksi eksponen.

---

### Requirement 5: Materi Section — Akar

**User Story:** Sebagai Pengguna, saya ingin mempelajari konsep dan rumus akar secara lengkap, sehingga saya memahami hubungannya dengan eksponen dan cara menghitungnya.

#### Acceptance Criteria

1. THE Materi_Section SHALL menampilkan definisi akar beserta notasi standar (√a = b jika b² = a).
2. THE Materi_Section SHALL menampilkan hubungan antara akar dan eksponen: ⁿ√a = a^(1/n).
3. THE Materi_Section SHALL menampilkan daftar sifat-sifat akar yang mencakup minimal tiga sifat berikut:
   - √(a × b) = √a × √b
   - √(a / b) = √a / √b
   - (√a)² = a
4. THE Materi_Section SHALL menampilkan penjelasan tentang akar pangkat dua dan akar pangkat tiga sebagai kasus khusus, di mana masing-masing mencakup: notasi spesifik, satu contoh numerik yang terselesaikan, dan pernyataan domain (misalnya a ≥ 0 untuk akar kuadrat dalam bilangan real).
5. THE Materi_Section SHALL menampilkan setiap blok rumus akar dalam elemen dengan latar belakang yang terbedakan, border yang terlihat, dan font yang konsisten sesuai Retro_Style.
6. IF konten menampilkan atau membahas operasi akar dengan bilangan negatif di bawah tanda radikal, THEN THE Materi_Section SHALL menampilkan pernyataan eksplisit bahwa hasilnya tidak terdefinisi dalam bilangan real.

---

### Requirement 6: Contoh Soal Section

**User Story:** Sebagai Pengguna, saya ingin melihat contoh soal beserta penyelesaiannya, sehingga saya dapat memahami cara mengaplikasikan rumus eksponen dan akar.

#### Acceptance Criteria

1. THE Contoh_Section SHALL menampilkan minimal tiga contoh soal eksponen, di mana setiap penyelesaian menampilkan minimal dua langkah operasi matematis berurutan yang terlihat secara eksplisit.
2. THE Contoh_Section SHALL menampilkan minimal tiga contoh soal akar, di mana setiap penyelesaian menampilkan minimal dua langkah operasi matematis berurutan yang terlihat secara eksplisit.
3. THE Contoh_Section SHALL menampilkan setiap soal dan penyelesaiannya dalam kartu atau blok yang memiliki border tebal minimal 2px dan menggunakan Warna_Primer sebagai aksen, sesuai Retro_Style.
4. THE Contoh_Section SHALL menampilkan label atau judul yang membedakan secara visual antara kelompok contoh soal eksponen dan kelompok contoh soal akar.
5. THE Contoh_Section SHALL menampilkan tombol atau tautan dengan teks "Coba Latihan Soal" yang mengarah ke `latihan.html` dalam tab yang sama.

---

### Requirement 7: Credit Section

**User Story:** Sebagai Pengguna, saya ingin melihat informasi pembuat di setiap halaman, sehingga saya mengetahui siapa yang membuat website ini.

#### Acceptance Criteria

1. WHEN halaman selesai dimuat sepenuhnya, THE Credit_Section SHALL terlihat di bagian paling bawah setiap halaman (Halaman_Utama dan Halaman_Latihan), setelah semua konten lainnya.
2. THE Credit_Section SHALL menampilkan nama lengkap pembuat atau nama tim secara eksplisit dalam teks yang terlihat.
3. THE Credit_Section SHALL menampilkan tahun pembuatan dalam format 4 digit (YYYY).
4. THE Credit_Section SHALL menerapkan Retro_Style yang konsisten: menggunakan font yang sama dengan bagian halaman lainnya, dan memiliki border atas atau latar belakang yang terbedakan sesuai Retro_Style.

---

### Requirement 8: Halaman Latihan — Soal Pilihan Ganda

**User Story:** Sebagai Pengguna, saya ingin menjawab soal pilihan ganda tentang eksponen dan akar, sehingga saya dapat menguji pemahaman saya dengan cara yang terstruktur.

#### Acceptance Criteria

1. WHEN Halaman_Latihan dimuat, THE Halaman_Latihan SHALL menampilkan tepat 5 Soal_Pilihan_Ganda yang berkaitan dengan materi eksponen dan/atau akar, dalam urutan bernomor 1 hingga 5.
2. THE Halaman_Latihan SHALL menyediakan tepat 4 opsi jawaban menggunakan elemen radio button (A, B, C, D) untuk setiap Soal_Pilihan_Ganda.
3. WHEN Pengguna memilih salah satu opsi pada Soal_Pilihan_Ganda, THE Halaman_Latihan SHALL menampilkan indikator visual terpilih (radio button tercentang) dan mencatat pilihan tersebut; Pengguna dapat mengubah pilihan ke opsi lain sebelum submit.
4. THE Halaman_Latihan SHALL menampilkan setiap Soal_Pilihan_Ganda dalam kartu atau blok dengan border tebal minimal 2px dan font Retro_Style yang konsisten.
5. WHEN semua 5 Soal_Pilihan_Ganda telah dijawab, THE Halaman_Latihan SHALL mengizinkan Pengguna untuk melanjutkan ke pengiriman jawaban.

---

### Requirement 9: Halaman Latihan — Soal Esai

**User Story:** Sebagai Pengguna, saya ingin menjawab soal esai (isian singkat berupa angka) tentang eksponen dan akar, sehingga saya dapat berlatih menghitung secara mandiri.

#### Acceptance Criteria

1. WHEN Halaman_Latihan dimuat, THE Halaman_Latihan SHALL menampilkan tepat 5 Soal_Esai yang berkaitan dengan materi eksponen dan/atau akar, dalam urutan bernomor 6 hingga 10.
2. THE Halaman_Latihan SHALL menyediakan satu elemen `<input type="text">` atau `<input type="number">` untuk setiap Soal_Esai agar Pengguna dapat mengetikkan jawaban berupa angka bulat atau desimal.
3. THE Halaman_Latihan SHALL membatasi input Soal_Esai agar hanya menerima karakter numerik (angka 0–9, tanda minus untuk negatif, dan titik desimal jika diperlukan) dengan panjang maksimal 15 karakter.
4. IF Pengguna mengetikkan nilai numerik yang valid pada input Soal_Esai, THEN THE input SHALL menampilkan nilai tersebut di dalam field sebagai konfirmasi penerimaan input.
5. THE Halaman_Latihan SHALL menampilkan setiap Soal_Esai dalam kartu atau blok dengan border tebal minimal 2px dan font Retro_Style yang konsisten.
6. IF Pengguna mengetikkan karakter non-numerik pada input Soal_Esai, THEN THE Halaman_Latihan SHALL mencegah karakter tersebut tampil di input field atau menampilkan pesan kesalahan inline yang meminta input berupa angka.

---

### Requirement 10: Halaman Latihan — Pengiriman dan Penilaian

**User Story:** Sebagai Pengguna, saya ingin mengirimkan semua jawaban dan melihat skor saya, sehingga saya mengetahui seberapa baik pemahaman saya terhadap materi.

#### Acceptance Criteria

1. THE Halaman_Latihan SHALL menampilkan satu tombol dengan teks "Kumpulkan" atau "Submit" untuk mengirimkan semua jawaban sekaligus.
2. WHEN Pengguna mengklik tombol Submit dan semua 10 soal telah dijawab, THE Halaman_Latihan SHALL menghitung Skor berdasarkan jumlah jawaban benar: setiap Soal_Pilihan_Ganda dinilai benar jika opsi yang dipilih sesuai kunci jawaban; setiap Soal_Esai dinilai benar jika nilai yang diinput secara numerik sama dengan kunci jawaban.
3. WHEN Pengguna mengklik tombol Submit dan semua 10 soal telah dijawab, THE Halaman_Latihan SHALL menampilkan Skor dalam format eksplisit "Skor Anda: X / 10" di mana X adalah jumlah jawaban benar.
4. WHEN Pengguna mengklik tombol Submit dan semua 10 soal telah dijawab, THE Halaman_Latihan SHALL menampilkan indikator benar atau salah pada setiap soal menggunakan elemen visual yang terbedakan (misalnya border berwarna atau ikon).
5. IF Pengguna mengklik tombol Submit dan terdapat minimal satu soal yang belum dijawab (Soal_Pilihan_Ganda tanpa opsi terpilih atau Soal_Esai dengan input kosong), THEN THE Halaman_Latihan SHALL menampilkan pesan peringatan yang menyebutkan bahwa semua soal harus dilengkapi, dan SHALL NOT menghitung atau menampilkan Skor.
6. WHEN Skor telah ditampilkan, THE Halaman_Latihan SHALL menampilkan tombol "Coba Lagi" yang ketika diklik mereset semua radio button ke tidak terpilih, mengosongkan semua input teks Soal_Esai, menyembunyikan Skor, dan menghapus semua indikator benar/salah.

---

### Requirement 11: Konsistensi Retro Style dan Warna Primer

**User Story:** Sebagai Pengguna, saya ingin seluruh website memiliki tampilan retro yang konsisten dengan warna navy sebagai warna primer, sehingga pengalaman visual saya terasa kohesif dan menarik.

#### Acceptance Criteria

1. THE Website SHALL menggunakan Warna_Primer (#0F3051 atau ekuivalen) pada elemen heading, tombol utama, border aksen, dan elemen dekoratif di semua halaman.
2. THE Website SHALL menggunakan tipografi bergaya Retro_Style — font monospace, slab-serif, atau pixel font — yang diterapkan secara konsisten pada semua heading dan body text di semua halaman.
3. THE Website SHALL menerapkan latar belakang gelap (hitam murni #000000 atau abu-abu sangat gelap dengan nilai lightness ≤ 20%) yang memberikan kontras tinggi terhadap Warna_Primer dan teks terang.
4. THE Website SHALL menggunakan border dengan ketebalan minimal 2px pada kartu konten, tombol, dan blok rumus di semua halaman; elemen shadow bergaya retro (misalnya box-shadow dengan offset positif dan warna solid) diperbolehkan sebagai tambahan.
5. THE Website SHALL memastikan semua teks body memiliki rasio kontras warna minimal 4.5:1 terhadap latar belakangnya, dan teks heading besar (≥ 18pt atau ≥ 14pt bold) memiliki rasio minimal 3:1, sesuai WCAG 2.1 AA.

---

### Requirement 12: Responsivitas Dasar

**User Story:** Sebagai Pengguna, saya ingin website dapat diakses dan terbaca dengan baik pada berbagai ukuran layar, sehingga saya dapat belajar baik di komputer maupun perangkat lain.

#### Acceptance Criteria

1. THE Website SHALL menampilkan semua konten tanpa overflow horizontal (scrollbar horizontal tidak muncul) pada lebar viewport minimal 320px.
2. THE Navbar SHALL menyesuaikan tata letaknya sehingga semua tautan tetap dapat diklik dan tidak terpotong pada lebar viewport 320px hingga 1440px.
3. THE Website SHALL menggunakan satuan CSS yang responsif (`%`, `em`, `rem`, `vw`, atau `max-width`) pada elemen layout utama (container, grid, atau flex) sehingga konten tidak terpotong dan tidak memerlukan scroll horizontal pada berbagai ukuran layar.
4. IF lebar viewport kurang dari 480px, THEN THE Navbar SHALL menampilkan tautan dalam susunan vertikal atau menggunakan menu hamburger agar tidak overflow secara horizontal.
