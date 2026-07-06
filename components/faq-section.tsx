'use client'

import { useState } from 'react'
import {
  IconChevronDown,
  IconHelp,
  IconMessageCircle,
  IconPackage,
  IconClock,
  IconPalette,
  IconBrush,
} from '@tabler/icons-react'

const faqs = [
  {
    question: 'Berapa minimum order untuk custom printing?',
    answer:
      'Minimum order untuk custom printing adalah 100 PCS per desain, tergantung jenis produk. Hubungi kami untuk penawaran khusus.',
    Icon: IconPackage,
  },
  {
    question: 'Berapa lama waktu produksi?',
    answer:
      'Waktu produksi rata-rata 7-14 hari kerja setelah desain disetujui, tergantung volume dan kompleksitas desain.',
    Icon: IconClock,
  },
  {
    question: 'Apakah bisa custom full color?',
    answer:
      'Ya, kami menyediakan cetak full color dengan teknologi terkini untuk hasil yang maksimal.',
    Icon: IconPalette,
  },
  {
    question: 'Apakah menyediakan jasa desain?',
    answer:
      'Ya, kami memiliki tim desainer profesional yang siap membantu mewujudkan konsep desain Anda.',
    Icon: IconBrush,
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 xl:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <IconHelp size={28} stroke={1.5} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Punya pertanyaan seputar layanan custom printing? Berikut jawaban untuk hal yang
                paling sering ditanyakan pelanggan kami.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Masih ada pertanyaan?</p>
                <p className="text-sm text-gray-600 mb-4">
                  Tim kami siap bantu via WhatsApp dalam hitungan menit.
                </p>
                <a
                  href="https://wa.me/628123456789?text=Halo%2C%20saya%20punya%20pertanyaan%20tentang%20custom%20printing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d-primary px-6 py-2.5 text-sm w-full sm:w-auto"
                >
                  <IconMessageCircle size={18} stroke={1.5} />
                  Tanya Sekarang
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 xl:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.question}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-primary/30 shadow-lg shadow-primary/5'
                      : 'border-border shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <faq.Icon size={22} stroke={1.5} />
                    </div>
                    <span className="flex-1 font-bold text-foreground text-sm md:text-base pr-2">
                      {faq.question}
                    </span>
                    <IconChevronDown
                      size={20}
                      stroke={1.5}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-5 md:pb-6 pl-[4.75rem] md:pl-[5.25rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
