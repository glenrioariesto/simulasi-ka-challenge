import type { ObjectWithEyes } from '../types';

export const OBJECTS_DATA: ObjectWithEyes[] = [
  // clip-path="url(#db00a68686)" - foto dan vas bunga (ada 2 titik)
  {
    id: 'foto-keluarga',
    name: 'Bingkai Foto Pajangan Dinding',
    question: 'Aku menampilkan foto keluarga secara statis di dalam bingkai kaca kayu.',
    isAI: false,
    explanation: 'Aku adalah bingkai foto pajangan biasa. Aku hanya menyimpan dan memamerkan gambar fisik cetak tanpa sirkuit komputasi maupun kemampuan digital.',
    x: 32.5,
    y: 18.0,
    room: 1
  },
  {
    id: 'vas-bunga-tv',
    name: 'Vas Bunga Pintar Rak Kiri',
    question: 'Aku otomatis menyala berwarna-warni sesuai tempo dan melodi musik di sekelilingku menggunakan sensor audio AI.',
    isAI: true,
    explanation: 'Aku memiliki modul pemroses suara berbasis Kecerdasan Artifisial yang mampu mengklasifikasikan suasana/tempo musik secara langsung untuk menyesuaikan pendaran warna lampu LED secara cerdas.',
    x: 38.0,
    y: 28.0,
    room: 1
  },

  // clip-path="url(#eecceff095)" - jam dinding
  {
    id: 'jam-dinding',
    name: 'Jam Dinding Analog',
    question: 'Aku berputar menunjukkan waktu menggunakan daya baterai dan gir roda gigi mekanis biasa.',
    isAI: false,
    explanation: 'Aku adalah Jam Dinding mekanis konvensional. Aku bekerja berdasarkan putaran motor listrik sederhana dari baterai secara teratur tanpa pengolahan data cerdas.',
    x: 50.0,
    y: 19.8,
    room: 1
  },

  // clip-path="url(#223f33b967)" - buku dan vas bunga
  {
    id: 'buku-dan-vas-bunga',
    name: 'Buku & Vas Bunga Rak Kanan',
    question: 'Kami adalah dekorasi buku ensiklopedia dan vas bunga hias yang terletak di rak atas.',
    isAI: false,
    explanation: 'Kami adalah benda mati pajangan dekorasi konvensional tanpa komponen elektronik, kabel, maupun kemampuan komputasi.',
    x: 75.0,
    y: 20.1,
    room: 1
  },

  // clip-path="url(#80bee28e5b)" - kipas angin
  {
    id: 'kipas-angin',
    name: 'Kiko, si Kipas Angin Sensor',
    question: 'Aku otomatis menyala dan berputar ke arahmu saat sensor termalku mendeteksi panas tubuh manusia.',
    isAI: false,
    explanation: 'Aku adalah Kipas Angin otomatis. Aku bekerja berdasarkan pembacaan sensor inframerah (infrared) statis sederhana untuk mendeteksi panas tubuh, tanpa adanya proses belajar mandiri (Machine Learning).',
    x: 50.0,
    y: 52.4,
    room: 1
  },

  // clip-path="url(#37c8231ee0)" - dvd
  {
    id: 'dvd',
    name: 'Pemutar DVD',
    question: 'Aku memutar film dari kepingan disk DVD yang kamu masukkan menggunakan teknologi pembaca optik laser.',
    isAI: false,
    explanation: 'Aku adalah pemutar media digital statis konvensional. Aku hanya menerjemahkan data biner dari piringan kaset secara lurus mengikuti instruksi pabrik.',
    x: 69.0,
    y: 68.2,
    room: 1
  },

  // clip-path="url(#9a063948c9)" - tv
  {
    id: 'tv',
    name: 'Televisi Pintar (Smart TV)',
    question: 'Aku bisa memutar video dari internet dan merekomendasikan kategori film secara terstruktur berdasarkan riwayat tontonanmu.',
    isAI: false,
    explanation: 'Aku adalah Smart TV biasa. Aku mengandalkan algoritme pencarian statis konvensional dengan filter database terstruktur, bukan kecerdasan artifisial yang mampu bernalar secara dinamis.',
    x: 71.0,
    y: 42.6,
    room: 1
  },

  // clip-path="url(#7140d1e304)" - sofa
  {
    id: 'sofa',
    name: 'Sofa Tamu Busa',
    question: 'Aku adalah tempat duduk empuk berlapis kain tenun untuk bersantai keluarga.',
    isAI: false,
    explanation: 'Aku adalah produk furnitur sofa konvensional tanpa komponen mikroprosesor maupun kemampuan komputasi digital.',
    x: 25.6,
    y: 67.3,
    room: 1
  },

  // clip-path="url(#5f8a003861)" - bantal
  {
    id: 'bantal',
    name: 'Bantal Sofa Hias',
    question: 'Aku adalah bantal persegi empuk bermotif lucu untuk ditaruh sebagai sandaran punggung di sofa.',
    isAI: false,
    explanation: 'Aku adalah produk tekstil hiasan rumah konvensional tanpa sirkuit maupun program pintar.',
    x: 34.5,
    y: 60.4,
    room: 1
  },

  // clip-path="url(#0b541943b0)" - meja-rak
  {
    id: 'meja-rak',
    name: 'Meja Kabinet TV Kayu',
    question: 'Aku adalah meja kayu panjang penyangga televisi, buku, dan pemutar DVD.',
    isAI: false,
    explanation: 'Aku adalah kabinet penyimpanan furnitur kayu konvensional tanpa sirkuit pintar.',
    x: 8.3,
    y: 86.2,
    room: 1
  },

  // clip-path="url(#d27c3b9489)" - vas bunga
  {
    id: 'vas-bunga-sudut',
    name: 'Vas Bunga Sudut Kiri',
    question: 'Aku adalah vas keramik besar berisi daun palem kering dekoratif di pojok ruangan.',
    isAI: false,
    explanation: 'Aku adalah pajangan dekorasi keramik biasa tanpa kelistrikan maupun program digital.',
    x: 7.1,
    y: 65.3,
    room: 1
  },

  // clip-path="url(#6ed6d8403e)" - meja tamu
  {
    id: 'meja-tamu',
    name: 'Meja Tamu Tengah',
    question: 'Aku adalah meja rendah dari kayu jati tempat menyajikan teh atau meletakkan vas hias.',
    isAI: false,
    explanation: 'Aku adalah furnitur meja biasa tanpa program, sirkuit, maupun kemampuan pintar.',
    x: 50.0,
    y: 86.1,
    room: 1
  },

  // clip-path="url(#19506fbfb9)" - vas bunga
  {
    id: 'vas-bunga-meja-tengah',
    name: 'Vas Bunga Kaca Kopi',
    question: 'Aku adalah vas kaca bening berisi bunga mawar segar di tengah meja kopi.',
    isAI: false,
    explanation: 'Aku adalah dekorasi pajangan kaca konvensional tanpa sirkuit elektronik maupun kemampuan digital.',
    x: 44.6,
    y: 74.2,
    room: 1
  },

  // clip-path="url(#aac9f13096)" - phone
  {
    id: 'phone',
    name: 'Telepon Genggam Generatif',
    question: 'Aku bisa memproses asisten suara cerdas, mengenali wajahmu, dan membantu membuat teks atau gambar orisinal secara instan.',
    isAI: true,
    explanation: 'Di dalam sistem operasiku tersemat Large Language Model (LLM) dan algoritme Deep Learning untuk pengenalan wajah serta generative AI yang terus belajar dari interaksimu.',
    x: 54.2,
    y: 73.2,
    room: 1
  },

  // clip-path="url(#2667c12bc2)" - router
  {
    id: 'router',
    name: 'Router Wi-Fi Jaringan',
    question: 'Aku memancarkan jaringan nirkabel dan membagi bandwidth internet ke seluruh gawai terhubung mengikuti aturan DHCP.',
    isAI: false,
    explanation: 'Aku adalah router jaringan konvensional. Aku bekerja berdasarkan tabel alokasi IP statis dan protokol jaringan standar buatan pabrik, bukan kecerdasan artifisial.',
    x: 88.1,
    y: 52.4,
    room: 1
  },

  // clip-path="url(#42f579b6a6)" - air purifier
  {
    id: 'air-purifier',
    name: 'Air Purifier Cerdas',
    question: 'Aku mendeteksi jumlah partikulat debu di udara secara real-time dan mempelajari pola aktivitas harianmu untuk mengoptimalkan siklus pembersihan udara hemat daya.',
    isAI: true,
    explanation: 'Aku dilengkapi sensor kualitas udara terintegrasi AI yang mempelajari kebiasaan hunian di rumah untuk memprediksi puncak polusi dan mengatur kecepatan filter secara mandiri.',
    x: 88.7,
    y: 86.6,
    room: 1
  }
];

export const ROOMS_NAMES = [
  'Ruang Tamu Pintar'
];
