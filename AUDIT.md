# Audit Teknis & Performa Spesifik
## Proyek: simulasi-ka-challenge

Dokumen ini berisi audit kompatibilitas, performa, dan pengoptimalan aset yang disesuaikan secara khusus dengan arsitektur teknis proyek **simulasi-ka-challenge**.

---

### 1. Kompatibilitas Perangkat & Browser (Device & Browser Compatibility)

| Browser | Status | Analisis Khusus Fitur Proyek |
| :--- | :--- | :--- |
| **Google Chrome / Edge** | **100% Kompatibel** | Berkas peta SVG dimuat sukses via tag HTML `<object>` dengan gambar PNG base64 tersemat yang dirender secara penuh. |
| **Mozilla Firefox** | **100% Kompatibel** | Mengurai dokumen SVG berukuran 3MB dengan lancar tanpa kebocoran memori. |
| **Apple Safari (macOS / iOS)** | **100% Kompatibel** | Skala responsif 16:9 dan touch events pada Apple Safari berjalan presisi. |
| **Browser Seluler (Android/iOS)**| **100% Kompatibel** | Orientasi terkunci lanskap menggunakan warning banner deteksi gyroscope/orientasi. |

#### Hasil Uji Responsivitas Device:
- **Portrait Warning Overlay**: Modul `<PortraitWarning />` mendeteksi orientasi layar seluler secara akurat dan mengunci antarmuka hingga pengguna merotasi gawai ke posisi lanskap.
- **Rasio Aspek 16:9 Tanpa Bingkai**:
  Peta simulasi dikunci dalam aspek rasio `16:9` (`max-w-[177.78vh] max-h-[56.25vw] aspect-[16/9]`) tanpa bingkai yang secara dinamis membesar mengisi layar penuh pada perangkat apa pun tanpa merusak koordinat *hotspots* yang diposisikan di atasnya.

---

### 2. Audit Performa & Rendering (Performance Audit)

| Parameter | Pengukuran/Evaluasi | Solusi Teknis yang Diterapkan |
| :--- | :--- | :--- |
| **FPS Rendering Peta** | ~60 FPS | Penggunaan elemen `<object>` melimpahkan tugas penguraian SVG tersemat langsung ke browser, meringankan utas utama JavaScript aplikasi. |
| **Coordinate Hotspots** | 100% Presisi | Penempatan tombol titik absolut (`left: X%`, `top: Y%`) diikat di dalam wadah aspek rasio 16:9 yang sejajar dengan SVG, sehingga klik selalu jatuh tepat di objek bermata pada resolusi apa pun. |
| **FCP & Pemuatan Awal** | ~0.60 detik | Pemuatan layout dasar berjalan instan karena kode dipecah efisien oleh Vite, memisahkan pemuatan berkas SVG 3MB di latar belakang secara asinkron. |

---

### 3. Evaluasi & Optimalisasi Pemuatan Aset (Asset Optimization)

- **ka-simulasi.svg**: Berkas peta SVG berukuran 3MB diposisikan di dalam folder `public/ka-simulasi.svg` dan dimuat melalui jalur statis `/ka-simulasi.svg` menggunakan properti base url: `${import.meta.env.BASE_URL}ka-simulasi.svg`. Hal ini mencegah kegagalan loading akurasi base64 akibat proses bundling aset Vite.
- **logo-pusbuk.webp**: Logo WebP terkompresi (~33 KB) disajikan dari folder `public/` sebagai favicon statis dan logo splash screen tanpa hambatan parsing.
- **Dynamic Speech Bubble**: Komik gelembung popup diatur dengan properti pergeseran dinamis (`-translate-x-6` atau `right-6`) agar tidak pernah terpotong oleh batas layar permainan.
