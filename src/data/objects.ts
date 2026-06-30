import type { ObjectWithEyes } from '../types';

export const OBJECTS_DATA: ObjectWithEyes[] = [
  // clip-path="url(#db00a68686)" - foto dan vas bunga (ada 2 titik, tertukar koordinat & jawabannya diperbaiki)
  {
    id: 'foto-keluarga',
    name: 'Bingkai Foto',
    question: 'Aku adalah foto pemandangan berbingkai',
    isAI: false,
    explanation: 'bingkai foto pajangan dinding biasa. Aku menampilkan gambar pemandangan statis yang dicetak di atas kertas foto tanpa adanya sirkuit elektronik maupun kemampuan digital.',
    x: 40.0,
    y: 22.0,
    room: 1
  },
  {
    id: 'vas-bunga-tv',
    name: 'Vas Bunga Rak',
    question: 'Aku adalah vas keramik hias pajangan berwarna abu-abu.',
    isAI: false,
    explanation: 'vas keramik pajangan biasa rak kiri. Aku tidak memiliki kelistrikan, sirkuit pintar, maupun program digital apa pun.',
    x: 31.5,
    y: 25.0,
    room: 1
  },

  // clip-path="url(#eecceff095)" - jam dinding
  {
    id: 'jam-dinding',
    name: 'Jam Dinding Analog',
    question: 'Aku berputar menunjukkan waktu menggunakan daya baterai dan gir roda gigi mekanis biasa.',
    isAI: false,
    explanation: 'jam dinding mekanis konvensional. Aku bekerja berdasarkan putaran motor listrik sederhana dari baterai secara teratur tanpa pengolahan data cerdas.',
    x: 52.0,
    y: 12.8,
    room: 1
  },

  // clip-path="url(#223f33b967)" - buku dan vas bunga (dipecah menjadi 2 titik)
  {
    id: 'buku-rak-kanan',
    name: 'Buku Ensiklopedia',
    question: 'Kami adalah tumpukan buku ilmu pengetahuan tebal yang disimpan rapi sebagai pajangan rak atas.',
    isAI: false,
    explanation: 'tumpukan buku cetak fisik kertas konvensional di rak atas. Kami tidak memiliki komponen elektronik, kelistrikan, maupun kemampuan cerdas.',
    x: 72.0,
    y: 8.0,
    room: 1
  },
  {
    id: 'vas-bunga-rak-kanan',
    name: 'Vas Bunga',
    question: 'Aku adalah vas keramik putih kecil dengan tanaman hias hijau untuk mempercantik.',
    isAI: false,
    explanation: 'vas keramik putih kecil pajangan dengan tanaman hias hijau untuk mempercantik rak kanan. Aku tidak memiliki sirkuit kelistrikan maupun program pintar.',
    x: 82.5,
    y: 14.0,
    room: 1
  },

  // clip-path="url(#80bee28e5b)" - kipas angin
  {
    id: 'kipas-angin',
    name: 'Kiko, si Kipas Angin Sensor',
    question: 'Aku otomatis menyala dan berputar ke arahmu saat sensor termalku mendeteksi panas tubuh manusia.',
    isAI: false,
    explanation: 'kipas angin otomatis konvensional. Aku bekerja berdasarkan pembacaan sensor inframerah (infrared) statis sederhana untuk mendeteksi panas tubuh, tanpa adanya proses belajar mandiri (Machine Learning).',
    x: 54.0,
    y: 42.4,
    room: 1
  },

  // clip-path="url(#37c8231ee0)" - dvd
  {
    id: 'dvd',
    name: 'Pemutar DVD',
    question: 'Aku memutar film dari kepingan disk DVD yang kamu masukkan menggunakan teknologi pembaca optik laser.',
    isAI: false,
    explanation: 'pemutar media digital statis konvensional. Aku hanya menerjemahkan data biner dari piringan kaset secara lurus mengikuti instruksi pabrik.',
    x: 72.0,
    y: 68.2,
    room: 1
  },

  // clip-path="url(#9a063948c9)" - tv
  {
    id: 'tv',
    name: 'Televisi Pintar (Smart TV)',
    question: 'Aku bisa memutar video dari internet dan merekomendasikan kategori film secara terstruktur berdasarkan riwayat tontonanmu.',
    isAI: false,
    explanation: 'smart TV biasa. Aku mengandalkan algoritme pencarian statis konvensional dengan filter database terstruktur, bukan kecerdasan artifisial yang mampu bernalar secara dinamis.',
    x: 80.0,
    y: 28.6,
    room: 1
  },

  // clip-path="url(#7140d1e304)" - sofa
  {
    id: 'sofa',
    name: 'Sofa Tamu Busa',
    question: 'Aku adalah tempat duduk empuk berlapis kain tenun untuk bersantai keluarga.',
    isAI: false,
    explanation: 'produk furnitur sofa konvensional. Aku tidak memiliki komponen mikroprosesor maupun kemampuan komputasi digital.',
    x: 30.6,
    y: 48.3,
    room: 1
  },

  // clip-path="url(#5f8a003861)" - bantal
  {
    id: 'bantal',
    name: 'Bantal Sofa Hias',
    question: 'Aku adalah bantal persegi empuk bermotif lucu untuk ditaruh sebagai sandaran punggung di sofa.',
    isAI: false,
    explanation: 'produk tekstil hiasan rumah konvensional. Aku tidak memiliki sirkuit maupun program pintar.',
    x: 36.5,
    y: 57.4,
    room: 1
  },

  // clip-path="url(#d27c3b9489)" - vas bunga
  {
    id: 'vas-bunga-sudut',
    name: 'Vas Bunga',
    question: 'Aku adalah vas keramik besar berisi daun palem kering dekoratif di pojok ruangan.',
    isAI: false,
    explanation: 'pajangan dekorasi keramik biasa dengan daun palem kering statis di dalamnya. Aku tidak memiliki kelistrikan maupun program digital.',
    x: 10.1,
    y: 70.3,
    room: 1
  },

  // clip-path="url(#19506fbfb9)" - vas bunga
  {
    id: 'vas-bunga-meja-tengah',
    name: 'Vas Bunga Kaca Kopi',
    question: 'Aku adalah vas kaca bening berisi bunga mawar segar di tengah meja kopi.',
    isAI: false,
    explanation: 'dekorasi pajangan kaca konvensional berisi bunga mawar segar. Aku tidak memiliki sirkuit elektronik maupun kemampuan digital.',
    x: 44.6,
    y: 74.2,
    room: 1
  },

  // clip-path="url(#aac9f13096)" - phone
  {
    id: 'phone',
    name: 'Telepon Genggam',
    question: 'Aku bisa memproses asisten suara cerdas, mengenali wajahmu, dan membantu membuat teks atau gambar orisinal secara instan.',
    isAI: true,
    explanation: 'telepon genggam cerdas. Di dalam sistem operasiku tersemat Large Language Model (LLM) untuk memproses teks, pengenalan wajah pintar (face recognition), serta asisten suara AI yang terus belajar mengenali kebiasaan harianmu.',
    x: 56.2,
    y: 69.2,
    room: 1
  },

  // clip-path="url(#2667c12bc2)" - router
  {
    id: 'router',
    name: 'Router Wi-Fi Jaringan',
    question: 'Aku memancarkan jaringan nirkabel dan membagi bandwidth internet ke seluruh gawai terhubung mengikuti aturan DHCP.',
    isAI: false,
    explanation: 'router jaringan konvensional. Aku bekerja berdasarkan tabel alokasi IP statis dan protokol jaringan standar buatan pabrik, bukan kecerdasan artifisial.',
    x: 90.1,
    y: 54.4,
    room: 1
  },

  // clip-path="url(#42f579b6a6)" - air purifier
  {
    id: 'air-purifier',
    name: 'Air Purifier Cerdas',
    question: 'Aku mendeteksi jumlah partikulat debu di udara secara real-time dan mempelajari pola aktivitas harianmu untuk mengoptimalkan siklus pembersihan udara hemat daya.',
    isAI: true,
    explanation: 'air purifier cerdas yang dilengkapi sensor kualitas udara terintegrasi AI untuk mempelajari kebiasaan hunian di rumah, memprediksi puncak polusi, dan mengatur kecepatan filter secara mandiri.',
    x: 88.7,
    y: 86.6,
    room: 1
  }
];

export const ROOMS_NAMES = [
  'Ruang Tamu Pintar'
];
