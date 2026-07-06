'use client'

import {
  IconCoffee,
  IconSparkles,
  IconChefHat,
  IconSnowflake,
  IconCookie,
  IconCake,
  IconPlant,
  IconPaw,
} from '@tabler/icons-react'

const categories = [
  {
    id: 1,
    name: 'Kemasan Kopi, Teh & Bubuk Minuman',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    Icon: IconCoffee,
  },
  {
    id: 2,
    name: 'Kemasan Kosmetik & Obat',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
    Icon: IconSparkles,
  },
  {
    id: 3,
    name: 'Kemasan Bumbu Dapur',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b451c4f3a5?w=400&h=300&fit=crop',
    Icon: IconChefHat,
  },
  {
    id: 4,
    name: 'Kemasan Frozen Food',
    image: 'https://images.unsplash.com/photo-1626204050388-1e6e05e42687?w=400&h=300&fit=crop',
    Icon: IconSnowflake,
  },
  {
    id: 5,
    name: 'Kemasan Makanan Ringan',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
    Icon: IconCookie,
  },
  {
    id: 6,
    name: 'Kemasan Roti & Kue',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    Icon: IconCake,
  },
  {
    id: 7,
    name: 'Kemasan Bibit Tanaman',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    Icon: IconPlant,
  },
  {
    id: 8,
    name: 'Kemasan Makanan Hewan',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
    Icon: IconPaw,
  },
]

export default function CategoriesSection() {
  return (
    <section id="kemasan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pilih Kemasan Sesuai Produkmu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solusi kemasan custom full color untuk berbagai jenis produk dan industri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="/products"
              className="group bg-light-gray rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                  <category.Icon size={20} stroke={1.5} className="text-primary" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition leading-snug">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
