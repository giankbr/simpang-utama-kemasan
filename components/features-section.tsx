'use client'

import { useRef } from 'react'
import {
  IconPackage,
  IconShieldCheck,
  IconPalette,
  IconLayersLinked,
} from '@tabler/icons-react'
import Reveal from '@/components/animate/reveal'
import StaggerReveal from '@/components/animate/stagger-reveal'
import { gsap, useGSAP } from '@/lib/gsap'

const features = [
  {
    index: '01',
    title: 'Minimum Order Hanya 100pcs, Tanpa Investasi Plat',
    description:
      'Kamu bebas cetak kemasan fleksibel dengan unlimited desain dan warna apapun tanpa perlu investasi plat.',
    Icon: IconPackage,
    tag: 'Fleksibel',
  },
  {
    index: '02',
    title: 'Bukan Paper Foil',
    description:
      'Material terbaik (Aluminium, Nylon, OPP) sehingga kemasan tidak terkelupas, tahan air, mencegah oksigen masuk, dan melindungi kualitas produk dengan maksimal.',
    Icon: IconLayersLinked,
    tag: 'Material Premium',
  },
  {
    index: '03',
    title: 'Terjamin Food Grade',
    description:
      'Mau kemasan food grade untuk produk makanan? Bisa banget! Standarisasi food grade menjamin produk makananmu tetap aman.',
    Icon: IconShieldCheck,
    tag: 'Aman & Higienis',
  },
  {
    index: '04',
    title: 'Desain Kemasan Tidak Terbatas',
    description:
      'Bikin pelanggan jatuh cinta dengan desain full color di kemasan produkmu! Cetak dengan beragam warna tanpa biaya berlebih.',
    Icon: IconPalette,
    tag: 'Full Color',
  },
]

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number]
}) {
  const cardRef = useRef<HTMLElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const card = cardRef.current
      const icon = iconRef.current
      if (!card || !icon) return

      const enter = contextSafe(() => {
        gsap.to(icon, { scale: 1.08, rotation: 3, duration: 0.3, ease: 'power2.out' })
        gsap.to(card, { y: -4, duration: 0.3, ease: 'power2.out' })
      })

      const leave = contextSafe(() => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.35, ease: 'power2.out' })
        gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out' })
      })

      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)

      return () => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      }
    },
    { scope: cardRef },
  )

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-border bg-light-gray p-6 md:p-8 transition-colors duration-300 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 will-change-transform"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between gap-4 mb-6">
        <div
          ref={iconRef}
          className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_4px_0_#9a1b1b] will-change-transform"
        >
          <feature.Icon size={28} stroke={1.5} />
        </div>
        <span className="text-3xl md:text-4xl font-bold text-primary/15 leading-none select-none">
          {feature.index}
        </span>
      </div>

      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
        {feature.tag}
      </span>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {feature.description}
      </p>
    </article>
  )
}

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Keunggulan Kami
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Kenapa Simpang Utama Kemasan? Karena Kami Berbeda
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Solusi kemasan fleksibel custom dengan kualitas material, layanan, dan fleksibilitas
            order yang membantu brand Anda tumbuh lebih cepat.
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" stagger={0.12}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
