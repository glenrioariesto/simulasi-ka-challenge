import type { ObjectWithEyes } from '../types';

export const OBJECTS_DATA: ObjectWithEyes[] = [
  // Room 1: Ruang Tamu (Top-Left Quadrant, x: 0..50%, y: 0..50%)
  {
    id: 'tv-pintar',
    name: 'Lumi, si Smart TV',
    question: 'Aku bisa memutar video dari internet dan merekomendasikan film sesuai kategori pilihanmu.',
    isAI: false,
    explanation: 'Aku adalah Smart TV (Televisi Pintar). Aku bekerja menggunakan aturan pemrograman konvensional untuk merekomendasikan kategori film secara terstruktur. Aku tidak mempelajari perilakumu atau membuat keputusan mandiri seperti AI.',
    x: 18,
    y: 18,
    room: 1
  },
  {
    id: 'kipas-sensor',
    name: 'Kiko, si Kipas Angin Sensor',
    question: 'Aku otomatis menyala dan berputar ke arahmu saat mendeteksi suhu hangat tubuh manusia.',
    isAI: false,
    explanation: 'Aku adalah Kipas Angin Sensor. Aku menyala murni karena sinyal sensor inframerah (infrared) sederhana mendeteksi radiasi panas tubuh, tanpa adanya proses belajar dari data atau penalaran logis.',
    x: 35,
    y: 22,
    room: 1
  },
  {
    id: 'speaker-asisten',
    name: 'Alexa, si Asisten Suara',
    question: 'Aku bisa memahami perintah suaramu, menjawab pertanyaan, dan belajar mengenali aksenmu.',
    isAI: true,
    explanation: 'Aku menggunakan teknologi Pemrosesan Bahasa Alami (NLP) yang berbasis Kecerdasan Artifisial. Aku terus belajar memahami ucapan manusia dan mengenali konteks obrolan secara cerdas.',
    x: 25,
    y: 38,
    room: 1
  },

  // Room 2: Dapur Pintar (Top-Right Quadrant, x: 50%..100%, y: 0..50%)
  {
    id: 'kulkas-pintar',
    name: 'Frigi, si Kulkas Pintar',
    question: 'Aku bisa menampilkan isi dalam kulkas ke layar pintarku dan memutar musik saat kamu memasak.',
    isAI: false,
    explanation: 'Aku adalah Kulkas Pintar. Layar dan koneksi internetku membantumu mencatat stok makanan secara manual. Namun, aku tidak punya kecerdasan buatan untuk meramal bahan apa yang akan habis atau memikirkan resep secara mandiri.',
    x: 65,
    y: 20,
    room: 2
  },
  {
    id: 'kamera-keamanan',
    name: 'Cami, si Kamera AI',
    question: 'Aku otomatis melacak gerakan di dapur dan mengirim notifikasi jika mendeteksi wajah orang asing.',
    isAI: true,
    explanation: 'Aku menggunakan Visi Komputer (Computer Vision) berbasis Deep Learning. Aku dilatih dengan jutaan data gambar untuk bisa membedakan mana kucing peliharaan, anggota keluarga, dan orang asing secara otomatis.',
    x: 85,
    y: 12,
    room: 2
  },
  {
    id: 'microwave-otomatis',
    name: 'Micro, si Microwave Pintar',
    question: 'Aku secara otomatis mematikan pemanas begitu timer memasak yang kamu tentukan selesai.',
    isAI: false,
    explanation: 'Aku adalah Microwave Pintar. Aku hanya menjalankan pengatur waktu (timer) mekanik atau digital statis yang diatur oleh manusia, tanpa kemampuan untuk belajar atau beradaptasi.',
    x: 75,
    y: 38,
    room: 2
  },

  // Room 3: Ruang Belajar (Bottom-Left Quadrant, x: 0..50%, y: 50%..100%)
  {
    id: 'komputer-ai',
    name: 'Compi, si Laptop Generatif',
    question: 'Aku bisa membuat puisi baru, menulis surat resmi, dan menjawab soal matematika rumit secara instan.',
    isAI: true,
    explanation: 'Aku adalah Laptop yang terintegrasi dengan Large Language Model (LLM), salah satu cabang AI Generatif terkuat saat ini. Aku memprediksi kata demi kata berdasarkan pola bahasa raksasa yang telah kupelajari.',
    x: 18,
    y: 65,
    room: 3
  },
  {
    id: 'robot-vacuum',
    name: 'Robo, si Robot Penyedot Debu',
    question: 'Aku otomatis menjelajahi lantai kamarmu, memetakan rintangan, dan menghindari tangga agar tidak jatuh.',
    isAI: true,
    explanation: 'Aku dilengkapi algoritme AI pemetaan (SLAM) dan sensor LiDAR. Aku mempelajari tata letak rumahmu, mendeteksi penghalang baru secara cerdas, dan merencanakan rute pembersihan paling optimal secara dinamis.',
    x: 32,
    y: 80,
    room: 3
  },
  {
    id: 'lampu-meja',
    name: 'Lampa, si Lampu Meja LDR',
    question: 'Aku otomatis menyala terang ketika cahaya di dalam ruangan mulai temaram dan gelap.',
    isAI: false,
    explanation: 'Aku adalah Lampu Meja otomatis. Aku bekerja menggunakan sensor LDR (Light Dependent Resistor) sederhana yang memutus atau mengalirkan listrik berdasarkan tingkat kegelapan cahaya fisik, tanpa olah data digital atau kecerdasan.',
    x: 12,
    y: 75,
    room: 3
  },

  // Room 4: Ruang Server (Bottom-Right Quadrant, x: 50%..100%, y: 50%..100%)
  {
    id: 'vr-headset',
    name: 'Viri, si Kacamata VR',
    question: 'Aku menampilkan dunia 3D interaktif yang berputar mengikuti ke mana arah kepalamu menoleh.',
    isAI: false,
    explanation: 'Aku adalah Kacamata VR. Aku mengandalkan sensor giroskop dan akselerometer untuk membaca arah kepala secara fisik dan merender grafis 3D secara langsung. Tidak ada proses pembelajaran mesin di dalam fungsi utamaku.',
    x: 65,
    y: 68,
    room: 4
  },
  {
    id: 'robot-asisten',
    name: 'Buddy, si Robot Pelayan',
    question: 'Aku berjalan mengantarkan berkas, menyapa namamu saat bertemu, dan menanyakan kabarmu hari ini.',
    isAI: true,
    explanation: 'Aku adalah Robot Asisten Sosial berbasis AI. Aku menggabungkan Computer Vision untuk mengenali wajahmu, NLP untuk mendengarkan perintahmu, dan Reinforcement Learning untuk navigasi berjalan yang luwes.',
    x: 82,
    y: 72,
    room: 4
  },
  {
    id: 'ac-pintar',
    name: 'Cooly, si AC Hemat Energi',
    question: 'Aku mendeteksi jumlah orang di ruangan dan menyesuaikan hembusan udara dingin agar hemat listrik.',
    isAI: true,
    explanation: 'Aku menggunakan sensor thermal grid dan AI analisis hunian. Aku memproses data suhu tubuh manusia secara berkala untuk memprediksi kebutuhan pendinginan ruangan paling efisien dan ramah lingkungan.',
    x: 75,
    y: 58,
    room: 4
  }
];

export const ROOMS_NAMES = [
  'Ruang Tamu Pintar',
  'Dapur Pintar',
  'Ruang Belajar',
  'Ruang Server & Game'
];
