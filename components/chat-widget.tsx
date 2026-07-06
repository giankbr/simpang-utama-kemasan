'use client'

import { useState } from 'react'
import { IconBrandWhatsapp, IconX } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'

const WHATSAPP_URL =
  'https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20kemasan%20dari%20Simpang%20Utama%20Kemasan.'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary text-white px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">Simpang Utama Kemasan</p>
              <p className="text-xs text-white/80">Biasanya membalas dalam hitungan menit</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition"
              aria-label="Tutup chat"
            >
              <IconX size={18} stroke={1.5} />
            </button>
          </div>
          <div className="p-5">
            <div className="bg-light-gray rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground leading-relaxed">
                Hi, Selamat Datang di Simpang Utama Kemasan. Chat kami untuk bantuan kemasan yang
                tepat untuk produkmu.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={button3d('whatsapp', 'w-full py-3 text-sm')}
            >
              <IconBrandWhatsapp size={18} stroke={1.5} />
              Kirim pesan
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition flex items-center justify-center"
        aria-label="Buka chat WhatsApp"
      >
        {isOpen ? <IconX size={24} stroke={1.5} /> : <IconBrandWhatsapp size={26} stroke={1.5} />}
      </button>
    </div>
  )
}
