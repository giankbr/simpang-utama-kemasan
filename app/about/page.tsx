import Header from '@/components/header'
import Footer from '@/components/footer'
import { IconAward, IconUsers, IconTarget, IconHeart } from '@tabler/icons-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Simpang Utama Kemasan</h1>
            <p className="text-lg text-white text-opacity-90 max-w-2xl">
              Distributor terpercaya untuk kebutuhan kemasan, kertas, dan pertanian di Indonesia.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Sejarah & Perjalanan Kami</h2>
            <div className="prose prose-lg max-w-3xl">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Simpang Utama Kemasan dimulai dengan visi untuk menjadi distributor one-stop solution untuk semua kebutuhan kemasan, kertas, dan produk pertanian di Indonesia. Dengan komitmen terhadap kualitas dan layanan pelanggan, kami telah membangun kepercayaan dari ribuan bisnis di berbagai industri.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sejak awal berdiri, kami fokus pada pengembangan produk berkualitas tinggi dan layanan yang responsif. Kami memahami bahwa setiap bisnis memiliki kebutuhan unik, dan kami berkomitmen untuk memberikan solusi yang disesuaikan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hari ini, Simpang Utama Kemasan terus berkembang dengan ekspansi produk dan jangkauan pasar ke seluruh nusantara, melayani retail, grosir, HoReCa, UMKM, dan sektor pertanian.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <IconTarget size={32} stroke={1.5} className="text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Menyediakan solusi kemasan berkualitas tinggi dengan harga kompetitif untuk mendukung pertumbuhan bisnis mitra kami di seluruh Indonesia.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <IconHeart size={32} stroke={1.5} className="text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi distributor kemasan terdepan di Indonesia yang dipercaya oleh ribuan bisnis dengan standar kualitas internasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconAward size={32} stroke={1.5} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Kualitas</h3>
                <p className="text-gray-600">
                  Komitmen kami terhadap kualitas produk dan layanan adalah prioritas utama.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconUsers size={32} stroke={1.5} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Kepercayaan</h3>
                <p className="text-gray-600">
                  Kami membangun hubungan jangka panjang dengan pelanggan melalui transparansi dan integritas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconTarget size={32} stroke={1.5} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Inovasi</h3>
                <p className="text-gray-600">
                  Terus berinovasi untuk memberikan solusi terbaik yang sesuai dengan kebutuhan pasar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Tim Profesional Kami</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Tim kami terdiri dari profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik kepada setiap pelanggan.
            </p>
            <div className="bg-white rounded-lg p-12 shadow-md text-center">
              <IconUsers size={64} stroke={1.5} className="text-primary mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                Ratusan tim yang siap membantu Anda 24/7 dengan dedikasi penuh.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Berkolaborasi dengan Kami?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Hubungi tim kami untuk diskusi tentang kebutuhan bisnis Anda.
            </p>
            <a
              href="https://wa.me/628123456789"
              className="inline-block btn-3d btn-3d-white px-8 py-3"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
