import type { Metadata } from 'next'
import { button3d } from '@/lib/button-3d'
import {
  SITE_INDUSTRIES,
  SITE_OFFICE_HOURS,
  SITE_PRODUCT_CATEGORIES,
  SITE_SHORT_DESCRIPTION,
  SITE_TAGLINE,
  whatsappUrl,
} from '@/lib/site'
import { IconAward, IconBuildingStore, IconMapPin, IconPackage, IconUsers } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Tentang Kami | Simpang Utama Kemasan',
  description: SITE_SHORT_DESCRIPTION,
}

export default function AboutPage() {
  return (
    <main>
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Simpang Utama Kemasan</h1>
          <p className="text-lg text-white text-opacity-90 max-w-3xl leading-relaxed">
            Toko Simpang Utama Kemasan merupakan distributor produk kemasan terlengkap pertama di
            NTB, berlokasi di Jl. Sandubaya Bertais, Mataram. {SITE_TAGLINE}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sejarah & Perjalanan Kami
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Berdiri sejak tahun 1998, kami bergerak di bidang industri plastik dan menyediakan
                  segala macam produk plastik untuk kebutuhan industri, pertanian, perikanan, hingga
                  perlengkapan HoReCa (F&B business).
                </p>
                <p>
                  Dengan menjunjung tinggi komitmen untuk selalu memberikan kualitas produk dan
                  layanan terbaik secara konsisten terhadap setiap konsumen, Simpang Utama Kemasan
                  telah dipercaya pelaku bisnis di berbagai sektor.
                </p>
                <p>
                  Banyaknya pilihan produk yang kami tawarkan memudahkan Anda memilih solusi
                  kemasan sesuai kebutuhan dan budget bisnis.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-light-gray rounded-2xl p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <IconBuildingStore size={28} stroke={1.5} className="text-primary" />
                <h3 className="text-xl font-bold text-foreground">Kunjungi Toko Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Butuh kemasan untuk bisnis Anda? Ke Toko Simpang Utama aja.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-700 mb-4">
                <IconMapPin size={18} stroke={1.5} className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Sandubaya Mandalika Blok AA No. 17-20, Bertais, Mataram, NTB
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Jam operasional: {SITE_OFFICE_HOURS.weekday}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produk Utama Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari kebutuhan harian hingga kemasan custom, kami siap membantu dengan pilihan produk
              yang lengkap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_PRODUCT_CATEGORIES.map((product) => (
              <div
                key={product}
                className="bg-white rounded-xl border border-border px-5 py-4 text-sm text-gray-700 shadow-sm"
              >
                {product}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconPackage size={32} stroke={1.5} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Misi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menyediakan produk kemasan berkualitas dengan pilihan terlengkap di NTB, serta
                memberikan layanan terbaik secara konsisten untuk mendukung pertumbuhan bisnis
                pelanggan kami.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconAward size={32} stroke={1.5} className="text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi solusi kemasan pilihan utama di Nusa Tenggara Barat dan sekitarnya yang
                dipercaya oleh pelaku bisnis di berbagai industri.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Melayani Berbagai Sektor
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Produk kami telah banyak digunakan dan didistribusikan oleh pelaku bisnis di berbagai
            bidang.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SITE_INDUSTRIES.map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-xl border border-border px-5 py-4 text-center text-sm font-medium text-foreground"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <IconUsers size={48} stroke={1.5} className="mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Kemasan untuk Bisnis Anda?
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Ke Toko Simpang Utama aja. Untuk informasi pemesanan, chat via WhatsApp atau kunjungi
            toko kami di Mataram.
          </p>
          <a
            href={whatsappUrl('Halo, saya ingin menanyakan produk kemasan dari Simpang Utama Kemasan.')}
            target="_blank"
            rel="noopener noreferrer"
            className={button3d('white', 'px-8 py-3')}
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  )
}
