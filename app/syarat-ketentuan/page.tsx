import type { Metadata } from 'next'
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | Simpang Utama Kemasan',
  description:
    'Syarat dan ketentuan penggunaan layanan cetak kemasan fleksibel custom full color dari Simpang Utama Kemasan.',
}

const sections = [
  {
    title: '1. Ketentuan Umum',
    paragraphs: [
      'Dengan mengakses situs web dan menggunakan layanan Simpang Utama Kemasan, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.',
      'Kami berhak memperbarui ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui situs web ini dan berlaku sejak tanggal dipublikasikan.',
    ],
  },
  {
    title: '2. Layanan',
    paragraphs: [
      'Simpang Utama Kemasan menyediakan layanan distribusi dan cetak kemasan fleksibel custom full color, termasuk sachet, standing pouch, roll stock, lid cup, serta layanan konsultasi desain terkait.',
      'Spesifikasi produk, minimum order, waktu produksi, dan harga akan dikonfirmasi melalui penawaran resmi sebelum pesanan diproses.',
    ],
  },
  {
    title: '3. Pemesanan & Pembayaran',
    paragraphs: [
      'Pesanan dianggap sah setelah desain disetujui, detail order dikonfirmasi, dan pembayaran sesuai kesepakatan telah diterima.',
      'Keterlambatan pembayaran dapat mempengaruhi jadwal produksi dan pengiriman. Biaya tambahan akibat perubahan desain atau revisi di luar kesepakatan awal dapat dikenakan sesuai ketentuan yang disepakati bersama.',
    ],
  },
  {
    title: '4. Desain & Persetujuan Cetak',
    paragraphs: [
      'Pelanggan bertanggung jawab atas keakuratan data desain, informasi produk, logo, dan materi yang diserahkan untuk proses cetak.',
      'Setelah desain disetujui untuk produksi, Simpang Utama Kemasan tidak bertanggung jawab atas kesalahan yang berasal dari file atau informasi yang telah dikonfirmasi pelanggan.',
    ],
  },
  {
    title: '5. Pengiriman',
    paragraphs: [
      'Pengiriman dilakukan ke alamat yang telah dikonfirmasi pelanggan. Estimasi waktu pengiriman dapat berbeda tergantung lokasi tujuan dan kondisi ekspedisi.',
      'Risiko keterlambatan akibat force majeure, kondisi cuaca, atau gangguan logistik di luar kendali kami tidak dapat dijadikan dasar klaim ganti rugi.',
    ],
  },
  {
    title: '6. Hak Kekayaan Intelektual',
    paragraphs: [
      'Seluruh konten di situs web ini, termasuk teks, gambar, logo, dan materi promosi, merupakan milik Simpang Utama Kemasan kecuali dinyatakan lain.',
      'Penggunaan materi milik pihak ketiga untuk keperluan cetak menjadi tanggung jawab pelanggan, termasuk memastikan hak penggunaan desain telah diperoleh secara sah.',
    ],
  },
  {
    title: '7. Batasan Tanggung Jawab',
    paragraphs: [
      'Kami berupaya memberikan layanan terbaik, namun tidak menjamin situs web akan selalu bebas dari gangguan teknis.',
      'Tanggung jawab kami atas kerugian langsung terkait layanan dibatasi sesuai nilai transaksi pada pesanan yang bersangkutan, kecuali diwajibkan lain oleh peraturan perundang-undangan.',
    ],
  },
  {
    title: '8. Hukum yang Berlaku',
    paragraphs: [
      'Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa yang timbul akan diselesaikan secara musyawarah terlebih dahulu. Jika tidak tercapai kesepakatan, penyelesaian dilakukan melalui jalur hukum yang berlaku.',
    ],
  },
  {
    title: '9. Kontak',
    paragraphs: [
      `Untuk pertanyaan terkait syarat dan ketentuan ini, hubungi kami melalui email ${SITE_EMAIL} atau WhatsApp ${SITE_PHONE_DISPLAY}.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <main>
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Syarat & Ketentuan</h1>
          <p className="text-lg text-white text-opacity-90 max-w-2xl">
            Ketentuan penggunaan layanan dan situs web Simpang Utama Kemasan.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-10">Terakhir diperbarui: 6 Juli 2026</p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
