import type { Metadata } from 'next'
import { SITE_ADDRESS_FULL, SITE_EMAIL, SITE_PHONE_DISPLAY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Simpang Utama Kemasan',
  description:
    'Kebijakan privasi Simpang Utama Kemasan mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pengguna.',
}

const sections = [
  {
    title: '1. Pendahuluan',
    paragraphs: [
      'Simpang Utama Kemasan menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan melalui situs web dan layanan kami.',
    ],
  },
  {
    title: '2. Data yang Kami Kumpulkan',
    paragraphs: [
      'Kami dapat mengumpulkan data berikut saat Anda menghubungi kami, mengisi formulir, atau melakukan pemesanan:',
    ],
    bullets: [
      'Nama lengkap dan nama perusahaan',
      'Nomor telepon dan alamat email',
      'Alamat pengiriman atau kantor',
      'Detail permintaan produk, desain, dan komunikasi terkait pesanan',
      'Data teknis dasar seperti alamat IP, jenis perangkat, dan aktivitas kunjungan situs',
    ],
  },
  {
    title: '3. Penggunaan Data',
    paragraphs: [
      'Data yang dikumpulkan digunakan untuk:',
    ],
    bullets: [
      'Memproses pertanyaan, penawaran, dan pesanan kemasan',
      'Menghubungi Anda terkait layanan, produksi, dan pengiriman',
      'Meningkatkan kualitas layanan dan pengalaman pengguna situs web',
      'Memenuhi kewajiban hukum dan administrasi internal',
    ],
  },
  {
    title: '4. Pembagian Data',
    paragraphs: [
      'Kami tidak menjual data pribadi Anda kepada pihak ketiga. Data dapat dibagikan hanya kepada mitra yang relevan, seperti penyedia logistik atau pembayaran, sejauh diperlukan untuk menjalankan layanan.',
      'Pembagian data juga dapat dilakukan jika diwajibkan oleh hukum atau permintaan resmi dari otoritas yang berwenang.',
    ],
  },
  {
    title: '5. Penyimpanan & Keamanan',
    paragraphs: [
      'Kami menyimpan data pribadi selama diperlukan untuk tujuan layanan dan kewajiban hukum. Kami menerapkan langkah-langkah wajar untuk melindungi data dari akses, pengungkapan, atau penyalahgunaan yang tidak sah.',
      'Meskipun demikian, tidak ada sistem transmisi data melalui internet yang sepenuhnya aman. Kami menyarankan Anda menjaga kerahasiaan informasi akun dan komunikasi pribadi.',
    ],
  },
  {
    title: '6. Cookie & Analitik',
    paragraphs: [
      'Situs web kami dapat menggunakan cookie dan teknologi serupa untuk menganalisis penggunaan situs serta meningkatkan performa layanan. Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.',
    ],
  },
  {
    title: '7. Hak Anda',
    paragraphs: [
      'Anda berhak meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan, sesuai ketentuan hukum yang berlaku. Permintaan dapat diajukan melalui kontak resmi kami di bawah ini.',
    ],
  },
  {
    title: '8. Perubahan Kebijakan',
    paragraphs: [
      'Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Versi terbaru akan selalu tersedia di halaman ini beserta tanggal pembaruan.',
    ],
  },
  {
    title: '9. Kontak',
    paragraphs: [
      'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi:',
      `Email: ${SITE_EMAIL}`,
      `WhatsApp: ${SITE_PHONE_DISPLAY}`,
      `Alamat: ${SITE_ADDRESS_FULL}`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kebijakan Privasi</h1>
          <p className="text-lg text-white text-opacity-90 max-w-2xl">
            Cara kami mengelola dan melindungi data pribadi pengguna layanan Simpang Utama Kemasan.
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
                  {section.bullets && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
