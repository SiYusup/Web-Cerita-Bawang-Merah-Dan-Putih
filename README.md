# 📖 Web Cerita Bawang Merah & Bawang Putih (Bilingual Folktale Landing Page)

Aplikasi web interaktif berformat *cinematic scroll landing page* yang menyajikan cerita rakyat Nusantara **"Bawang Merah & Bawang Putih"** dalam dua bahasa (**Bahasa Indonesia** dan **Bahasa Jawa**).

Project ini dirancang khusus untuk pembelajaran Bahasa Jawa dan pelestarian cerita rakyat dengan pengalaman visual interaktif tanpa ketergantungan pada *framework* JavaScript berat atau proses *build*.

---

## 📋 Deskripsi Aplikasi

Aplikasi ini menampilkan kisah Bawang Merah dan Bawang Putih secara bertahap (*scene-by-scene*) yang dikendalikan melalui gerakan *scroll* (gulir) pengguna. Setiap babak cerita dilengkapi visual visual pendukung, efek transisi partikel 3D, serta fitur ganti bahasa instan tanpa memuat ulang halaman atau merusak animasi.

### ✨ Fitur Utama
1. **Fitur Dwibasa (Bilingual Toggle ID/JV):** 
   - Peralihan instan antara **Bahasa Indonesia (ID)** dan **Bahasa Jawa (JV - Ngoko/Krama)**.
   - Mengubah teks di tempat (*in-place updates*) sehingga status animasi GSAP dan posisi *scroll* tetap terjaga.
2. **Pengalaman Visual Interaktif (Cinematic Scroll & Scrubbed Timelines):**
   - Transisi babak cerita yang halus berbasis *scroll* menggunakan **GSAP ScrollTrigger**.
   - Efek partikel 3D interaktif menggunakan **Three.js** yang responsif terhadap gerakan scroll (*deterministic scrub*).
   - *Smooth scrolling* menggunakan **Lenis** pada perangkat *desktop*.
3. **Desain Visual & Tipografi Elegan:**
   - Palet warna tegas *Monochrome B&W* (Hitam-Putih) dipadukan dengan tipografi **Montserrat**.
   - Teks cerita berada langsung di atas foto (*text sitting on image*) berkat efek *bottom gradient scrim* untuk kenyamanan membaca.
4. **Audio Backsound Player:**
   - Tombol pengatur musik latar (ikon 🔊 / 🔇) pada Floating Navbar.
   - Mengisi musik otomatis setelah menekan tombol "Mulai Cerita" (sesuai kebijakan autoplay peramban) dan mendukung file audio kustom (`assets/backsound.mp3`).
5. **Navigasi Babak & Affordance:**
   - Floating Navbar berbentuk *pill* transparan di bagian atas.
   - Indicator titik babak (*chapter dots*) di samping kanan untuk perangkat *desktop*.
   - Indikator *scroll hint* & *Hero Prelude Gate* (tombol mulai cerita).
6. **Dukungan Aksesibilitas & Mode Offline (Zero Dependency Build):**
   - Seluruh pustaka JS/CSS (*GSAP, Three.js, Lenis, Tailwind*) disimpan secara lokal pada folder `vendor/`.
   - Dapat dijalankan secara **100% offline** tanpa koneksi internet (kecuali *fallback font*).
   - Fitur keamanan performa: partikel 3D dan smooth scroll otomatis disesuaikan/dinonaktifkan jika perangkat mengaktifkan *Reduced Motion* atau memiliki spesifikasi hemat daya.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik (`index.html`).
* **Tailwind CSS (CDN/Local Vendor):** Utilitas *styling* tata letak visual (`vendor/tailwind.min.js`).
* **Custom CSS (`style.css`):** Animasi keyframes, penyesuaian khusus scrim, dan navigasi titik.
* **Vanilla JavaScript (`script.js`):** Logika utama manipulasi DOM, state bahasa, dan kontrol animasi.
* **GSAP 3.12.5 + ScrollTrigger + ScrollToPlugin (`vendor/gsap.min.js`, dll):** Pengendali utama animasi interaktif *scene pin* & *scrub timeline*.
* **Three.js r128 (`vendor/three.min.js`):** Render partikel 3D transisi background.
* **Lenis 1.1.14 (`vendor/lenis.min.js`):** Pengatur *smooth scroll*.

---

## 🚀 Tata Cara Penggunaan & Jalankan Aplikasi

Aplikasi ini bersifat **Pure Static Web** (tanpa `package.json`, tanpa `npm install`, dan tanpa proses kompilasi/build).

### Cara 1: Langsung Buka File HTML
1. Buka folder penyimpanan project di komputer Anda.
2. Klik ganda file [`index.html`](file:///D:/Belajar/Persiapan%20TKA/SAS_S1_XIIRPL_2026/Bahasa%20Jawa/web/index.html) untuk membukanya langsung di peramban web (*Browser*) favorit Anda (Chrome, Edge, Firefox, Safari).

### Cara 2: Menjalankan Local Web Server (Direkomendasikan)
Menjalankan melalui *local server* memastikan seluruh aset visual dan pustaka dimuat dengan sempurna tanpa batasan keamanan *file:// protocol*.

#### Menggunakan Python (Built-in)
1. Buka Terminal / Command Prompt / PowerShell.
2. Masuk ke direktori folder project:
   ```bash
   cd "path/to/web"
   ```
3. Jalankan perintah server HTTP Python:
   ```bash
   python -m http.server 8000
   ```
4. Buka peramban web dan akses URL: [http://localhost:8000](http://localhost:8000)

#### Menggunakan Extension Live Server (VS Code)
1. Buka folder project ini di **VS Code**.
2. Klik kanan pada file [`index.html`](file:///D:/Belajar/Persiapan%20TKA/SAS_S1_XIIRPL_2026/Bahasa%20Jawa/web/index.html).
3. Pilih **"Open with Live Server"**.

---

## 🎮 Panduan Navigasi & Penggunaan Fitur

1. **Memulai Cerita:**
   - Pada halaman utama (*Hero Section*), klik tombol **"Mulai Cerita"** atau gulir peramban ke bawah untuk membuka tirai cerita.
2. **Navigasi Cerita:**
   - Gulir (*scroll*) tetikus (*mouse wheel*) atau layar sentuh secara perlahan ke bawah.
   - Setiap babak cerita akan terkunci sementara (*pinned*) hingga animasi teks dan gambar selesai bertransisi sebelum beralih ke babak berikutnya.
   - Pada desktop, klik **Titik Navigasi (01 - 06)** di sisi kanan layar untuk melompat langsung ke babak tertentu.
3. **Mengganti Bahasa (ID / JV):**
   - Klik tombol **ID | JV** pada Floating Navbar di bagian atas layar, atau tombol ganti bahasa di area Hero & Penutup.
   - Teks cerita akan otomatis berganti ke **Bahasa Indonesia** atau **Bahasa Jawa** secara seketika.
4. **Membaca Ulang:**
   - Di bagian akhir (*Pesan Moral*), klik tombol **"Baca dari Awal"** untuk kembali ke halaman utama.

---

## 📁 Struktur Direktori Project

```text
web/
├── assets/             # Aset gambar cerita (hero-joglo, bab1-bab5, penutup)
├── vendor/             # Pustaka JavaScript & CSS lokal (GSAP, Three.js, Lenis, Tailwind)
├── index.html          # File HTML utama halaman landing page
├── style.css           # Custom styling, keyframes, dan overrides
├── script.js           # Logika interaktif, data cerita bilingual, & animasi GSAP/Three.js
├── PRD.md              # Spesifikasi produk dan naskah cerita asli
├── AGENTS.md           # Aturan dan konvensi pengembangan project
└── README.md           # Dokumentasi dan petunjuk penggunaan aplikasi
```
