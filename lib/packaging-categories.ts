export type PackagingCategory = {
  slug: string
  name: string
  image: string
  excerpt: string
  packagingTypes: string[]
  highlights: string[]
  sections: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }[]
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=600&q=80`

export const packagingCategories: PackagingCategory[] = [
  {
    slug: 'kopi-teh-bubuk-minuman',
    name: 'Kemasan Kopi, Teh & Bubuk Minuman',
    image: unsplash('photo-1559056199-641a0ac8b55e'),
    excerpt:
      'Kemasan fleksibel custom full color untuk kopi, teh, dan bubuk minuman dengan barrier baik agar aroma dan rasa produk tetap terjaga.',
    packagingTypes: ['Sachet 3 Side Seal', 'Standing Pouch', 'Roll Stock'],
    highlights: ['Barrier aroma & kelembapan', 'Cetak full color', 'Food grade'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Produk kopi, teh, dan bubuk minuman membutuhkan kemasan yang mampu melindungi aroma serta kualitas bubuk dari kelembapan dan oksigen. Kami menyediakan berbagai pilihan kemasan fleksibel yang bisa dicetak sesuai identitas brand Anda.',
        ],
        bullets: [
          'Sachet untuk single serve dan sampling',
          'Standing pouch untuk tampilan premium di rak',
          'Roll stock untuk produksi skala menengah hingga besar',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Material dapat disesuaikan dengan kebutuhan barrier produk, mulai dari metallized hingga transparan, dengan opsi zip lock untuk menjaga kesegaran setelah dibuka.',
        ],
      },
    ],
  },
  {
    slug: 'kosmetik-obat',
    name: 'Kemasan Kosmetik & Obat',
    image: unsplash('photo-1596462502278-27bfdc403348'),
    excerpt:
      'Kemasan fleksibel untuk produk kosmetik, skincare, dan suplemen dengan tampilan elegan dan informasi label yang jelas.',
    packagingTypes: ['Sachet', 'Standing Pouch', 'Lid Cup'],
    highlights: ['Tampilan premium', 'Label jelas', 'Custom size'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Industri kosmetik dan wellness membutuhkan kemasan yang tidak hanya fungsional, tetapi juga memperkuat kesan brand. Desain full color membantu produk menonjol di etalase dan marketplace.',
        ],
        bullets: [
          'Sachet untuk sample, serum, dan masker',
          'Standing pouch untuk produk volume lebih besar',
          'Lid cup untuk produk dairy atau krim tertentu',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Konsultasi desain gratis membantu menata informasi produk, logo, dan komposisi agar tampil rapi dan profesional di kemasan Anda.',
        ],
      },
    ],
  },
  {
    slug: 'bumbu-dapur',
    name: 'Kemasan Bumbu Dapur',
    image: unsplash('photo-1596040033229-a9821ebd058d'),
    excerpt:
      'Kemasan untuk bumbu dapur, rempah, dan bahan masak bubuk dengan proteksi terhadap lembap dan kontaminasi.',
    packagingTypes: ['Sachet 3 Side Seal', 'Standing Pouch', 'Roll Stock'],
    highlights: ['Tahan lembap', 'Min. order fleksibel', 'Full color'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Bumbu dapur rentan terhadap perubahan aroma dan tekstur jika kemasan tidak memadai. Kami bantu pilih material dan struktur kemasan sesuai karakter produk Anda.',
        ],
        bullets: [
          'Sachet kecil untuk bumbu instan dan retail',
          'Standing pouch untuk varian rasa dan ukuran keluarga',
          'Roll stock untuk filling otomatis',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Cetak custom full color memudahkan diferensiasi varian rasa dalam satu lini produk tanpa investasi plat besar.',
        ],
      },
    ],
  },
  {
    slug: 'frozen-food',
    name: 'Kemasan Frozen Food',
    image: unsplash('photo-1546069901-ba9599a7e63c'),
    excerpt:
      'Kemasan fleksibel untuk produk beku dan dingin dengan ketahanan suhu rendah serta proteksi barrier yang baik.',
    packagingTypes: ['Standing Pouch', 'Sachet', 'Roll Stock'],
    highlights: ['Cocok suhu rendah', 'Barrier kuat', 'Zip lock opsional'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Produk frozen food membutuhkan kemasan yang stabil pada suhu rendah dan mampu melindungi kualitas selama distribusi berantai dingin.',
        ],
        bullets: [
          'Standing pouch untuk nugget, bakso, dan produk beku siap masak',
          'Sachet untuk bumbu atau pelengkap frozen',
          'Material disesuaikan dengan kebutuhan barrier produk',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Desain kemasan yang informatif membantu konsumen memahami cara penyimpanan dan pengolahan produk dengan lebih jelas.',
        ],
      },
    ],
  },
  {
    slug: 'makanan-ringan',
    name: 'Kemasan Makanan Ringan',
    image: unsplash('photo-1481391319762-47dff72954d9'),
    excerpt:
      'Kemasan snack dan makanan ringan dengan cetak menarik untuk menarik perhatian di rak retail maupun online.',
    packagingTypes: ['Standing Pouch', 'Sachet', 'Roll Stock'],
    highlights: ['Desain eye-catching', 'Renyah terjaga', 'MOQ 100 pcs'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Kategori snack sangat bergantung pada daya tarik visual kemasan. Full color printing membantu brand UMKM hingga menengah bersaing di rak dan marketplace.',
        ],
        bullets: [
          'Standing pouch dengan atau tanpa zip lock',
          'Sachet untuk snack ukuran kecil',
          'Variasi material metallized dan transparan',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Minimum order fleksibel cocok untuk uji pasar varian rasa baru sebelum produksi skala besar.',
        ],
      },
    ],
  },
  {
    slug: 'roti-kue',
    name: 'Kemasan Roti & Kue',
    image: unsplash('photo-1509440159596-0249088772ff'),
    excerpt:
      'Kemasan untuk roti, kue, pastry, dan produk bakery dengan tampilan higienis dan informasi produk yang lengkap.',
    packagingTypes: ['Standing Pouch', 'Sachet', 'Roll Stock'],
    highlights: ['Food grade', 'Higienis', 'Custom desain'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Produk bakery membutuhkan kemasan yang menjaga kesegaran sekaligus menampilkan produk secara menarik, baik untuk toko roti maupun brand packaged bakery.',
        ],
        bullets: [
          'Standing pouch untuk cookies dan pastry kemasan',
          'Sachet untuk produk single serve',
          'Desain sesuai positioning brand premium atau ekonomis',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Tim kami siap bantu menyusun layout desain agar informasi nutrisi, halal, dan tanggal produksi tercetak rapi.',
        ],
      },
    ],
  },
  {
    slug: 'bibit-tanaman',
    name: 'Kemasan Bibit Tanaman',
    image: unsplash('photo-1416879595882-3373a0480b5b'),
    excerpt:
      'Kemasan untuk bibit, pupuk, dan produk pertanian dengan ketahanan baik untuk penyimpanan dan distribusi.',
    packagingTypes: ['Standing Pouch', 'Sachet', 'Roll Stock'],
    highlights: ['Kuat & praktis', 'Label informatif', 'Ukuran custom'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Pelaku agribisnis membutuhkan kemasan yang kuat, informatif, dan mudah didistribusikan ke berbagai channel penjualan.',
        ],
        bullets: [
          'Standing pouch untuk bibit dan produk pertanian kemasan',
          'Sachet untuk sampel atau paket kecil',
          'Cetak petunjuk tanam dan branding produk',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Selain kemasan fleksibel custom, kami juga menyediakan produk plastik pertanian lain sesuai kebutuhan usaha Anda.',
        ],
      },
    ],
  },
  {
    slug: 'makanan-hewan',
    name: 'Kemasan Makanan Hewan',
    image: unsplash('photo-1589924691995-400dc9ecc119'),
    excerpt:
      'Kemasan untuk pakan kucing, anjing, dan hewan peliharaan lain dengan desain menarik dan proteksi produk yang baik.',
    packagingTypes: ['Standing Pouch', 'Sachet', 'Roll Stock'],
    highlights: ['Zip lock', 'Full color', 'Food grade'],
    sections: [
      {
        heading: 'Solusi Kemasan',
        paragraphs: [
          'Industri pet food berkembang pesat dan membutuhkan kemasan yang kuat, higienis, serta menarik bagi pemilik hewan peliharaan.',
        ],
        bullets: [
          'Standing pouch untuk dry food dan treat',
          'Sachet untuk wet food atau sample',
          'Zip lock untuk menjaga kesegaran setelah dibuka',
        ],
      },
      {
        heading: 'Keunggulan',
        paragraphs: [
          'Desain kemasan yang konsisten di berbagai SKU membantu membangun brand yang mudah dikenali konsumen.',
        ],
      },
    ],
  },
]

export function getPackagingCategory(slug: string) {
  return packagingCategories.find((category) => category.slug === slug)
}
