'use client'

import {
  IconPackage,
  IconFileText,
  IconLeaf,
  IconToolsKitchen2,
  IconGlass,
  IconPalette,
} from '@tabler/icons-react'

const products = [
  {
    id: 1,
    name: 'Kemasan Plastik',
    description: 'Kresek, botol, wrapping, gelas, sendok, kantong sampah dan produk plastik lainnya',
    Icon: IconPackage,
  },
  {
    id: 2,
    name: 'Kemasan Kertas',
    description: 'Kertas nasi, paper cup, paper bowl, bagasse, sumpit dan solusi eco-friendly',
    Icon: IconFileText,
  },
  {
    id: 3,
    name: 'Produk Pertanian',
    description: 'Karung, plastik mulsa, terpal, alas padi, plastik UV, waring dan kebutuhan pertanian',
    Icon: IconLeaf,
  },
  {
    id: 4,
    name: 'Solusi HoReCa',
    description: 'Lengkap untuk kebutuhan hotel, restoran dan cafe dengan standar kualitas tinggi',
    Icon: IconToolsKitchen2,
  },
  {
    id: 5,
    name: 'Kemasan Food & Beverage',
    description: 'Khusus untuk makanan dan minuman dengan sertifikasi food grade',
    Icon: IconGlass,
  },
  {
    id: 6,
    name: 'Custom Printing',
    description: 'Layanan cetak custom sesuai desain dan brand Anda dengan minimum order rendah',
    Icon: IconPalette,
  },
]

export default function ProductsSection() {
  return (
    <section id="produk" className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Kategori Produk Lengkap
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Menyediakan ribuan produk berkualitas untuk retail, grosir, HoReCa, UMKM hingga sektor pertanian
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <product.Icon size={64} stroke={1.5} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a
                  href="#kontak"
                  className="inline-block text-primary font-semibold hover:text-accent transition text-sm"
                >
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
