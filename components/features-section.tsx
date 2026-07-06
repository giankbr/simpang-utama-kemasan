'use client'

import {
  IconPackage,
  IconShieldCheck,
  IconPalette,
  IconLayersLinked,
} from '@tabler/icons-react'

const features = [
  {
    title: 'Minimum Order Hanya 100pcs, Tanpa Investasi Plat',
    description:
      'Kamu bebas cetak kemasan fleksibel dengan unlimited desain dan warna apapun tanpa perlu investasi plat.',
    Icon: IconPackage,
  },
  {
    title: 'Bukan Paper Foil',
    description:
      'Material terbaik (Aluminium, Nylon, OPP) sehingga kemasan tidak terkelupas, tahan air, mencegah oksigen masuk, dan melindungi kualitas produk dengan maksimal.',
    Icon: IconLayersLinked,
  },
  {
    title: 'Terjamin Food Grade',
    description:
      'Mau kemasan food grade untuk produk makanan? Bisa banget! Standarisasi food grade menjamin produk makananmu tetap aman.',
    Icon: IconShieldCheck,
  },
  {
    title: 'Desain Kemasan Tidak Terbatas',
    description:
      'Bikin pelanggan jatuh cinta dengan desain full color di kemasan produkmu! Cetak dengan beragam warna tanpa biaya berlebih.',
    Icon: IconPalette,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Kenapa Simpang Utama Kemasan? Karena Kami Berbeda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.Icon size={32} stroke={1.5} className="text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
