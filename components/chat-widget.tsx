'use client'

import { useState, useRef, useEffect } from 'react'
import { IconBrandWhatsapp, IconX } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'
import { whatsappUrl } from '@/lib/site'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePressEffect } from '@/hooks/use-press-effect'

const WHATSAPP_URL = whatsappUrl(
  'Halo, saya ingin menanyakan tentang kemasan dari Simpang Utama Kemasan.',
)

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = usePressEffect<HTMLButtonElement>()

  useGSAP(
    () => {
      if (!toggleRef.current) return
      gsap.from(toggleRef.current, {
        scale: 0,
        autoAlpha: 0,
        duration: 0.5,
        delay: 1.2,
        ease: 'back.out(2)',
      })
    },
    { scope: containerRef },
  )

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    if (isOpen) {
      gsap.fromTo(
        panel,
        { autoAlpha: 0, y: 16, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.7)' },
      )
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          ref={panelRef}
          className="w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
        >
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
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center will-change-transform"
        aria-label="Buka chat WhatsApp"
      >
        {isOpen ? <IconX size={24} stroke={1.5} /> : <IconBrandWhatsapp size={26} stroke={1.5} />}
      </button>
    </div>
  )
}
