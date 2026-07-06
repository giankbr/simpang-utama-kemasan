import FaqSection from '@/components/faq-section'
import { button3d } from '@/lib/button-3d'
import { IconPalette } from '@tabler/icons-react'

const printingOptions = [
  {
    title: 'Sablon Plastik',
    description: 'Cetak custom pada berbagai jenis kemasan plastik dengan warna unlimited',
  },
  {
    title: 'Sablon Kertas',
    description: 'Printing berkualitas tinggi pada kemasan kertas dan paper products',
  },
  {
    title: 'Cetak Label',
    description: 'Label dengan desain custom sesuai brand identity Anda',
  },
  {
    title: 'Cetak Stiker',
    description: 'Stiker waterproof dengan hasil cetak yang tahan lama',
  },
  {
    title: 'Cetak Desain Custom',
    description: 'Layanan desain dan cetak khusus untuk kebutuhan unik Anda',
  },
  {
    title: 'Branding Package',
    description: 'Paket lengkap branding dari desain hingga produksi',
  },
]

const process = [
  {
    step: 1,
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan dan visi desain Anda dengan tim kami',
  },
  {
    step: 2,
    title: 'Design & Mockup',
    description: 'Tim desainer kami akan membuat desain dan mockup untuk persetujuan Anda',
  },
  {
    step: 3,
    title: 'Approval & Produksi',
    description: 'Setelah disetujui, kami mulai proses produksi sesuai spesifikasi',
  },
  {
    step: 4,
    title: 'Quality Control',
    description: 'Setiap produk melalui kontrol kualitas ketat sebelum pengiriman',
  },
  {
    step: 5,
    title: 'Pengiriman',
    description: 'Produk siap dikirim ke alamat Anda dengan packaging aman',
  },
]

export default function CustomPrintingPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <IconPalette size={40} stroke={1.5} />
              <h1 className="text-4xl md:text-5xl font-bold">Layanan Custom Printing</h1>
            </div>
            <p className="text-lg text-white text-opacity-90 max-w-2xl">
              Wujudkan branding Anda dengan layanan cetak custom berkualitas tinggi dari Simpang Utama Kemasan.
            </p>
          </div>
        </section>

        {/* Printing Options */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Pilihan Cetak</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {printingOptions.map((option, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <IconPalette size={24} stroke={1.5} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Proses Custom Printing
            </h2>

            <div className="relative">
              <div
                className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary/25 pointer-events-none"
                aria-hidden
              />

              <ol className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative">
                {process.map((item) => (
                  <li key={item.step} className="flex flex-col items-center text-center px-2">
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-white shrink-0">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mt-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <FaqSection />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mewujudkan Desain Impian Anda?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik.
            </p>
            <a
              href="https://wa.me/628123456789"
              className={button3d('white', 'px-8 py-3')}
            >
              Konsultasi Sekarang
            </a>
          </div>
        </section>
    </main>
  )
}
