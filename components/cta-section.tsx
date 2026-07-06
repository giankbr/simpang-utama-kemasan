'use client'

import { IconMessageCircle, IconPhone } from '@tabler/icons-react'

const WHATSAPP_URL =
  'https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20menanyakan%20penawaran%20kemasan%20dari%20Simpang%20Utama%20Kemasan'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-black/10 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-2xl">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/80 mb-3">
                Penawaran Gratis
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Segera hubungi kami untuk dapatkan penawaran instan hari ini GRATIS! 🚀
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-white px-8 py-3.5 text-sm md:text-base justify-center"
              >
                <IconMessageCircle size={20} stroke={1.5} />
                Hubungi Kami
              </a>
              <a
                href="tel:+628123456789"
                className="btn-3d btn-3d-glass px-8 py-3.5 text-sm md:text-base justify-center"
              >
                <IconPhone size={20} stroke={1.5} />
                Telepon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
