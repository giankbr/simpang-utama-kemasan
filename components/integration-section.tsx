import Link from 'next/link'
import { IconArrowRight, IconLayersLinked, IconPalette, IconTruck } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'

const highlights = [
  {
    Icon: IconPalette,
    title: 'Desain ke Produksi',
    description: 'Dari konsultasi desain hingga cetak full color, semua dalam satu alur kerja terintegrasi.',
  },
  {
    Icon: IconLayersLinked,
    title: 'Beragam Jenis Kemasan',
    description: 'Sachet, standing pouch, roll stock, dan lid cup — pilih sesuai kebutuhan produkmu.',
  },
  {
    Icon: IconTruck,
    title: 'Pengiriman Nasional',
    description: 'Distribusi ke seluruh Indonesia dengan tracking dan kemasan aman.',
  },
]

export default function IntegrationSection() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Fleksibilitas Pesanan Terintegrasi
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Bagaimana kita fleksibel & terintegrasi? Simpang Utama Kemasan menghadirkan solusi
              kemasan custom dari awal hingga akhir — tanpa ribet, tanpa investasi plat.
            </p>
            <Link
              href="/custom-printing"
              className={button3d('primary', 'px-6 py-3 text-sm md:text-base')}
            >
              Lihat Detail
              <IconArrowRight size={18} stroke={1.5} />
            </Link>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-5 md:p-6 shadow-md flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.Icon size={24} stroke={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
