export const INSPIRATION_CATEGORIES = [
  'Studi Kasus',
  'Success Story',
  'Portofolio',
  'Event',
  'Blog',
] as const

export type InspirationCategory = (typeof INSPIRATION_CATEGORIES)[number]

export type CaseStudySection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  excerpt: string
  category: InspirationCategory
  image: string
  publishedAt: string
  readTime: string
  client: string
  industry: string
  packagingType: string
  sections: CaseStudySection[]
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'brand-fb-shelf-life',
    title: 'Bagaimana Brand F&B Menjaga Shelf Life Produk Tetap Terjaga?',
    excerpt:
      'Sebagai produsen makanan yang memasarkan produknya di pasar ritel modern, ada banyak tantangan untuk menjaga kualitas. Jenis kemasan yang tepat menjadi kunci.',
    category: 'Studi Kasus',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&h=700&fit=crop',
    publishedAt: '12 Juni 2025',
    readTime: '5 menit baca',
    client: 'Brand F&B Lokal (NDA)',
    industry: 'Makanan & Minuman',
    packagingType: 'Standing Pouch Metallized + Zip Lock',
    sections: [
      {
        heading: 'Latar Belakang',
        paragraphs: [
          'Sebuah brand F&B lokal berkembang pesat setelah masuk ke ritel modern. Produk kopi bubuk dan premix minuman mereka mulai tersedia di berbagai supermarket. Namun, seiring perluasan distribusi, tim internal mulai menerima komplain terkait aroma yang berkurang dan tekstur produk yang tidak konsisten setelah beberapa bulan di rak.',
          'Masalah ini tidak hanya berdampak pada pengalaman konsumen, tetapi juga mengancam repeat order dari mitra ritel yang menuntut kualitas stabil hingga tanggal kedaluwarsa.',
        ],
      },
      {
        heading: 'Tantangan',
        paragraphs: [
          'Setelah audit kemasan bersama tim Simpang Utama Kemasan, ditemukan beberapa titik kritis:',
        ],
        bullets: [
          'Material kemasan belum memiliki barrier yang cukup terhadap oksigen dan uap air',
          'Seal bagian bawah pouch belum optimal untuk produk berbentuk bubuk',
          'Desain kemasan belum memuat informasi penyimpanan dengan jelas',
          'Lead time cetak ulang masih panjang ketika perlu revisi desain',
        ],
      },
      {
        heading: 'Solusi',
        paragraphs: [
          'Kami merekomendasikan migrasi ke standing pouch metallized dengan lapisan barrier multilayer dan zip lock ultra-sonic. Desain dicetak full color tanpa plat sehingga brand bisa melakukan iterasi visual lebih cepat.',
          'Tim produksi Simpang Utama Kemasan juga membantu uji shelf life sederhana dengan simulasi kondisi rak ritel selama 90 hari, memastikan aroma dan kelembapan produk tetap dalam toleransi yang disepakati.',
        ],
        bullets: [
          'Material metallized dengan barrier OTR & MVTR lebih rendah',
          'Zip lock untuk menjaga kesegaran setelah pouch dibuka',
          'Cetak full color digital, minimum order fleksibel',
          'Konsultasi desain gratis untuk informasi nutrisi & penyimpanan',
        ],
      },
      {
        heading: 'Hasil',
        paragraphs: [
          'Tiga bulan setelah implementasi kemasan baru, brand melaporkan penurunan komplain kualitas hingga 70% dan peningkatan repeat purchase di channel ritel. Produk juga lolos uji audit internal salah satu mitra ritel nasional tanpa perlu perubahan formula.',
        ],
      },
    ],
    results: [
      'Komplain kualitas turun 70% dalam 3 bulan',
      'Shelf life stabil hingga 12 bulan di kondisi rak normal',
      'Repeat order ritel naik 25% quarter-on-quarter',
      'Waktu produksi desain kemasan baru turun dari 4 minggu menjadi 10 hari',
    ],
  },
  {
    slug: 'umkm-susu-kemasan-barrier',
    title: 'UMKM Susu Fermentasi Naik Kelas dengan Kemasan Barrier',
    excerpt:
      'Produsen susu fermentasi lokal butuh kemasan yang menjaga kesegaran produk saat distribusi ke kafe-kafe di Lombok. Simak bagaimana material yang tepat mengubah operasional mereka.',
    category: 'Studi Kasus',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=700&fit=crop',
    publishedAt: '3 Juli 2025',
    readTime: '4 menit baca',
    client: 'Dairy Farm NTB',
    industry: 'Produk Susu & Fermentasi',
    packagingType: 'Standing Pouch Metallized + Spout',
    sections: [
      {
        heading: 'Latar Belakang',
        paragraphs: [
          'Dairy Farm NTB memproduksi susu fermentasi untuk pasar kafe dan hotel di Mataram dan Lombok. Produk mereka dikenal segar, tetapi distribusi harian sering terkendala karena kemasan lama tidak cukup menahan suhu ruang dalam perjalanan.',
        ],
      },
      {
        heading: 'Solusi',
        paragraphs: [
          'Tim Simpang Utama Kemasan merekomendasikan standing pouch metallized dengan spout pour, dicetak full color untuk memperkuat identitas brand di etalase kafe mitra.',
        ],
        bullets: [
          'Material barrier untuk menjaga kesegaran lebih lama',
          'Spout pour praktis untuk penyajian barista',
          'Cetak full color mulai 100 pcs per desain',
          'Konsultasi desain label nutrisi & halal',
        ],
      },
      {
        heading: 'Hasil',
        paragraphs: [
          'Setelah migrasi kemasan, Dairy Farm NTB berhasil memperluas jaringan distribusi ke 12 kafe baru dalam 4 bulan tanpa peningkatan komplain kualitas produk.',
        ],
      },
    ],
    results: [
      'Jaringan kafe mitra bertambah 12 lokasi baru',
      'Waste produk turun 30% karena kemasan lebih kedap',
      'Brand recall meningkat berkat tampilan kemasan premium',
      'Lead time order kemasan turun menjadi 10 hari kerja',
    ],
  },
  {
    slug: 'rebranding-kemasan-full-color',
    title: 'Cerita Re-Branding dengan Kemasan Full Color Custom',
    excerpt:
      'Brand lokal membuktikan potensi kemasan fleksibel sebagai media branding. Dengan cetak full color dari Simpang Utama Kemasan, mereka berhasil upgrade tampilan produk.',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=700&fit=crop',
    publishedAt: '28 Mei 2025',
    readTime: '4 menit baca',
    client: 'Snack Brand Nusantara',
    industry: 'Makanan Ringan',
    packagingType: 'Sachet 3 Side Seal Full Color',
    sections: [
      {
        heading: 'Latar Belakang',
        paragraphs: [
          'Snack Brand Nusantara adalah UMKM yang sudah berjualan di pasar tradisional selama bertahun-tahun. Saat mereka memutuskan masuk ke e-commerce dan retail modern, kemasan lama yang polos dan tanpa identitas visual kuat membuat produk sulit bersaing di rak.',
        ],
      },
      {
        heading: 'Solusi',
        paragraphs: [
          'Simpang Utama Kemasan menyediakan paket rebranding end-to-end: konsultasi desain, mockup digital, dan produksi sachet 3 side seal full color dengan material food grade.',
        ],
      },
      {
        heading: 'Hasil',
        paragraphs: [
          'Setelah peluncuran kemasan baru, engagement di marketplace naik signifikan. Foto produk di listing terlihat lebih premium dan konsumen sering menyebut kemasan sebagai salah satu alasan mereka mencoba produk untuk pertama kali.',
        ],
      },
    ],
    results: [
      'Penjualan online naik 3x dalam 2 bulan pertama',
      'CTR iklan produk meningkat 45% setelah update foto kemasan',
      '5 SKU baru diluncurkan tanpa biaya plat cetak',
      'Brand awareness di retail lokal meningkat berkat tampilan rak yang konsisten',
    ],
  },
  {
    slug: 'kopi-nusantara-pouch-launch',
    title: 'Kopi Nusantara Luncurkan Varian Baru Tanpa Biaya Plat Cetak',
    excerpt:
      'Brand kopi lokal berhasil meluncurkan 4 varian rasa baru dalam satu bulan berkat fleksibilitas cetak kemasan fleksibel custom full color.',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=700&fit=crop',
    publishedAt: '18 Juni 2025',
    readTime: '3 menit baca',
    client: 'Kopi Nusantara',
    industry: 'Kopi & Minuman',
    packagingType: 'Standing Pouch Matte + Zip Lock',
    sections: [
      {
        heading: 'Cerita',
        paragraphs: [
          'Kopi Nusantara ingin menguji pasar dengan varian rasa limited edition, tetapi vendor cetak konvensional menawarkan MOQ tinggi dan biaya plat yang memberatkan.',
          'Bersama Simpang Utama Kemasan, mereka memproduksi standing pouch matte full color mulai 100 pcs per desain, memungkinkan peluncuran cepat dan iterasi desain tanpa risiko besar.',
        ],
      },
      {
        heading: 'Hasil',
        paragraphs: [
          'Keempat varian baru habis terjual dalam 3 minggu pertama. Dua varian terlaris langsung dijadikan SKU permanen dengan volume produksi yang lebih besar.',
        ],
      },
    ],
    results: [
      '4 varian baru diluncurkan dalam 30 hari',
      'Tanpa investasi plat cetak',
      '2 varian menjadi SKU permanen',
      'Repeat order naik 40% dari pelanggan lama',
    ],
  },
  {
    slug: 'portofolio-sachet-bumbu-dapur',
    title: 'Sachet Bumbu Dapur Full Color untuk Brand Lokal',
    excerpt:
      'Portofolio kemasan sachet 3 side seal dengan cetak full color untuk produk bumbu instan, siap bersaing di rak minimarket.',
    category: 'Portofolio',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=700&fit=crop',
    publishedAt: 'Februari 2025',
    readTime: '2 menit lihat',
    client: 'Brand Bumbu NTB',
    industry: 'Bumbu & Bahan Masak',
    packagingType: 'Sachet 3 Side Seal',
    sections: [
      {
        heading: 'Detail Proyek',
        paragraphs: [
          'Kemasan sachet food grade dengan barrier yang cukup untuk menjaga aroma rempah. Desain full color menonjolkan ilustrasi bahan alami dan informasi nutrisi yang jelas.',
        ],
        bullets: [
          'Ukuran sachet custom sesuai gramasi produk',
          'Cetak full color tanpa plat',
          'Material food grade',
          'Minimum order 100 pcs',
        ],
      },
    ],
    results: [
      'Desain siap produksi dalam 5 hari kerja',
      'Tampilan premium di rak minimarket',
      'Material tahan lemak & aroma',
    ],
  },
  {
    slug: 'portofolio-standing-pouch-kosmetik',
    title: 'Standing Pouch Kosmetik dengan Finishing Matte',
    excerpt:
      'Koleksi portofolio standing pouch matte untuk produk perawatan tubuh, memberikan kesan premium dan modern di etalase.',
    category: 'Portofolio',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=700&fit=crop',
    publishedAt: 'Maret 2025',
    readTime: '2 menit lihat',
    client: 'Beauty Brand Lokal',
    industry: 'Kosmetik & Perawatan Tubuh',
    packagingType: 'Standing Pouch Matte + Zip Lock',
    sections: [
      {
        heading: 'Detail Proyek',
        paragraphs: [
          'Standing pouch dengan finishing matte memberikan tampilan elegan dan mengurangi glare di foto produk e-commerce. Zip lock menjaga produk tetap higienis setelah dibuka.',
        ],
        bullets: [
          'Finishing matte premium',
          'Zip lock ultra-sonic',
          'Cetak full color detail tinggi',
          'Tersedia berbagai ukuran',
        ],
      },
    ],
    results: [
      'Foto produk lebih konsisten di marketplace',
      'Tampilan rak lebih premium',
      'Feedback positif dari konsumen soal kemasan',
    ],
  },
  {
    slug: 'event-expo-kemasan-mataram-2025',
    title: 'Simpang Utama Kemasan Expo Mataram 2025',
    excerpt:
      'Pameran kemasan fleksibel terbesar di NTB, menghadirkan demo cetak, konsultasi desain gratis, dan promo khusus UMKM.',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=700&fit=crop',
    publishedAt: '15 Agustus 2025',
    readTime: '2 menit baca',
    client: 'Publik',
    industry: 'Pameran & Edukasi',
    packagingType: 'Beragam Jenis Kemasan',
    sections: [
      {
        heading: 'Tentang Event',
        paragraphs: [
          'Simpang Utama Kemasan Expo Mataram 2025 menghadirkan lebih dari 50 sampel kemasan fleksibel custom, live demo proses desain ke produksi, dan sesi konsultasi gratis untuk UMKM di NTB.',
        ],
        bullets: [
          'Konsultasi desain kemasan gratis',
          'Demo material & jenis kemasan',
          'Promo khusus peserta event',
          'Networking dengan pelaku industri F&B',
        ],
      },
      {
        heading: 'Highlight',
        paragraphs: [
          'Event dihadiri lebih dari 200 pelaku bisnis dari Mataram, Lombok, dan Sumbawa. Banyak UMKM yang langsung memulai produksi kemasan custom setelah konsultasi di booth.',
        ],
      },
    ],
    results: [
      '200+ peserta dari berbagai industri',
      '50+ sampel kemasan dipamerkan',
      'Konsultasi gratis untuk seluruh pengunjung',
      'Promo spesial UMKM selama event',
    ],
  },
  {
    slug: 'event-workshop-umkm-packaging-day',
    title: 'Workshop Packaging Day untuk UMKM NTB',
    excerpt:
      'Workshop intensif membantu UMKM memahami cara memilih material, desain label, dan strategi kemasan yang meningkatkan penjualan.',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=700&fit=crop',
    publishedAt: '22 September 2025',
    readTime: '2 menit baca',
    client: 'UMKM NTB',
    industry: 'Edukasi & Pelatihan',
    packagingType: 'Workshop Kemasan',
    sections: [
      {
        heading: 'Agenda Workshop',
        paragraphs: [
          'Packaging Day adalah workshop half-day yang membahas dasar-dasar kemasan fleksibel, regulasi label makanan, dan tips desain yang menarik di marketplace.',
        ],
        bullets: [
          'Memilih material sesuai jenis produk',
          'Desain label & informasi nutrisi',
          'Strategi kemasan untuk e-commerce',
          'Q&A langsung dengan tim ahli',
        ],
      },
    ],
    results: [
      '80 peserta UMKM terdaftar',
      'Materi workbook gratis untuk peserta',
      'Sesi Q&A interaktif 2 jam',
      'Voucher konsultasi untuk semua peserta',
    ],
  },
  {
    slug: 'blog-cara-pilih-material-kemasan-makanan',
    title: '5 Cara Memilih Material Kemasan Makanan yang Tepat',
    excerpt:
      'Panduan praktis memilih material kemasan fleksibel untuk produk makanan: dari food grade, barrier, hingga finishing yang aman untuk konsumen.',
    category: 'Blog',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=700&fit=crop',
    publishedAt: '5 Januari 2026',
    readTime: '6 menit baca',
    client: 'Simpang Utama Kemasan',
    industry: 'Edukasi Kemasan',
    packagingType: 'Panduan Material',
    sections: [
      {
        heading: 'Kenapa Material Penting?',
        paragraphs: [
          'Material kemasan bukan sekadar wadah. Ia melindungi kualitas produk, memperpanjang shelf life, dan membangun kepercayaan konsumen terhadap brand Anda.',
        ],
      },
      {
        heading: 'Tips Memilih Material',
        paragraphs: ['Berikut hal yang perlu diperhatikan saat memilih material kemasan makanan:'],
        bullets: [
          'Pastikan material food grade dan aman untuk kontak makanan',
          'Pilih barrier sesuai kebutuhan: oksigen, uap air, atau cahaya',
          'Pertimbangkan metode penyajian: sachet, pouch, atau roll stock',
          'Sesuaikan finishing dengan positioning brand: matte, glossy, atau metalized',
          'Konsultasikan dengan ahli sebelum produksi massal',
        ],
      },
    ],
    results: [
      'Panduan lengkap untuk UMKM F&B',
      'Contoh material populer dijelaskan',
      'Checklist siap pakai untuk tim produksi',
    ],
  },
  {
    slug: 'blog-kenapa-minimum-order-100-pcs',
    title: 'Kenapa Minimum Order 100 Pcs Justru Menguntungkan UMKM?',
    excerpt:
      'Banyak yang mengira MOQ rendah berarti kualitas rendah. Faktanya, fleksibilitas order 100 pcs membantu UMKM uji pasar tanpa risiko besar.',
    category: 'Blog',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
    publishedAt: '20 Januari 2026',
    readTime: '5 menit baca',
    client: 'Simpang Utama Kemasan',
    industry: 'Tips Bisnis',
    packagingType: 'Kemasan Fleksibel Custom',
    sections: [
      {
        heading: 'Mitos MOQ Rendah',
        paragraphs: [
          'UMKM sering ragu memesan kemasan custom karena takut MOQ terlalu tinggi atau biaya plat cetak memberatkan. Padahal teknologi cetak digital memungkinkan produksi mulai 100 pcs tanpa investasi plat.',
        ],
      },
      {
        heading: 'Keuntungan MOQ 100 Pcs',
        paragraphs: ['Berikut alasan MOQ fleksibel menguntungkan bisnis kecil dan menengah:'],
        bullets: [
          'Uji pasar varian baru tanpa stok berlebih',
          'Iterasi desain cepat berdasarkan feedback konsumen',
          'Tidak perlu investasi plat cetak di awal',
          'Cash flow lebih sehat untuk bisnis yang sedang tumbuh',
          'Scale up volume setelah produk terbukti laku',
        ],
      },
    ],
    results: [
      'Cocok untuk UMKM yang sedang scaling',
      'Tanpa biaya plat cetak',
      'Fleksibel untuk banyak SKU',
      'Konsultasi gratis sebelum order',
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getInspirationByCategory(category: InspirationCategory) {
  return caseStudies.filter((study) => study.category === category)
}
