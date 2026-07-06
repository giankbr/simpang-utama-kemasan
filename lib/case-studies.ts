export type CaseStudySection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  excerpt: string
  category: string
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
          'Mereka membutuhkan rebranding total tanpa investasi plat cetak yang besar, karena budget masih terbatas dan SKU baru sering ditambahkan.',
        ],
      },
      {
        heading: 'Tantangan',
        paragraphs: [
          'Tim kami mengidentifikasi beberapa hambatan utama dalam proses rebranding:',
        ],
        bullets: [
          'Logo dan palet warna belum konsisten di berbagai SKU',
          'MOQ cetak konvensional terlalu tinggi untuk UMKM',
          'Proses approval desain berbelit karena proofing manual',
          'Kemasan lama tidak food grade untuk ekspansi produk baru',
        ],
      },
      {
        heading: 'Solusi',
        paragraphs: [
          'Simpang Utama Kemasan menyediakan paket rebranding end-to-end: konsultasi desain, mockup digital, dan produksi sachet 3 side seal full color dengan material food grade. Semua varian rasa menggunakan template desain yang konsisten dengan warna aksen berbeda per SKU.',
          'Dengan digital printing, brand bisa memesan mulai 100 pcs per desain, ideal untuk uji pasar sebelum scale up.',
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
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
