import { IconArrowRight } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'

const WHATSAPP_URL =
  'https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20menanyakan%20penawaran%20kemasan%20dari%20Simpang%20Utama%20Kemasan'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Network pattern — right side */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none opacity-[0.12]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="120" cy="80" r="4" fill="white" />
          <circle cx="280" cy="60" r="4" fill="white" />
          <circle cx="420" cy="100" r="4" fill="white" />
          <circle cx="520" cy="200" r="4" fill="white" />
          <circle cx="360" cy="240" r="4" fill="white" />
          <circle cx="200" cy="300" r="4" fill="white" />
          <circle cx="480" cy="320" r="4" fill="white" />
          <circle cx="100" cy="200" r="3" fill="white" />
          <circle cx="300" cy="160" r="3" fill="white" />
          <circle cx="440" cy="280" r="3" fill="white" />
          <line x1="120" y1="80" x2="280" y2="60" stroke="white" strokeWidth="1" />
          <line x1="280" y1="60" x2="420" y2="100" stroke="white" strokeWidth="1" />
          <line x1="420" y1="100" x2="520" y2="200" stroke="white" strokeWidth="1" />
          <line x1="120" y1="80" x2="100" y2="200" stroke="white" strokeWidth="1" />
          <line x1="100" y1="200" x2="200" y2="300" stroke="white" strokeWidth="1" />
          <line x1="280" y1="60" x2="300" y2="160" stroke="white" strokeWidth="1" />
          <line x1="300" y1="160" x2="360" y2="240" stroke="white" strokeWidth="1" />
          <line x1="360" y1="240" x2="440" y2="280" stroke="white" strokeWidth="1" />
          <line x1="440" y1="280" x2="480" y2="320" stroke="white" strokeWidth="1" />
          <line x1="420" y1="100" x2="360" y2="240" stroke="white" strokeWidth="1" />
          <line x1="520" y1="200" x2="480" y2="320" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug max-w-2xl">
            Cetak Kemasan Fleksibel Custom Full Color, Min. Order 100 pcs, Tanpa Investasi Plat
          </h2>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={button3d('white', 'px-8 py-3.5 text-sm md:text-base shrink-0 self-start md:self-center')}
          >
            Konsultasi Gratis
            <IconArrowRight size={18} stroke={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
