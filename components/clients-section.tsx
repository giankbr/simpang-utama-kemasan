'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Reveal from '@/components/animate/reveal'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const brands = [
  { name: 'Baked ID', logo: '/brands/baked-id.svg', width: 140 },
  { name: 'Osaka Dorayaki', logo: '/brands/osaka-dorayaki.svg', width: 160 },
  { name: 'Kopi Nusantara', logo: '/brands/kopi-nusantara.svg', width: 150 },
  { name: 'FreshBite', logo: '/brands/freshbite.svg', width: 130 },
  { name: 'GreenLeaf', logo: '/brands/greenleaf.svg', width: 130 },
  { name: 'SnackBox', logo: '/brands/snackbox.svg', width: 120 },
  { name: 'RotiManis', logo: '/brands/rotimanis.svg', width: 130 },
  { name: 'PetCare ID', logo: '/brands/petcare-id.svg', width: 130 },
]

const MARQUEE_SPEED = 55

function BrandLogo({ name, logo, width }: (typeof brands)[number]) {
  return (
    <div className="flex shrink-0 items-center justify-center px-3 md:px-5">
      <Image
        src={logo}
        alt={name}
        width={width}
        height={48}
        className="h-10 md:h-12 w-auto object-contain opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
      />
    </div>
  )
}

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const marqueeBrands = [...brands, ...brands]

  useGSAP(
    (_, contextSafe) => {
      const track = trackRef.current
      if (!track || prefersReducedMotion) return

      let tween: gsap.core.Tween | null = null

      const buildMarquee = () => {
        tween?.kill()
        gsap.set(track, { x: 0 })

        const loopWidth = track.scrollWidth / 2
        if (!loopWidth) return

        tween = gsap.to(track, {
          x: -loopWidth,
          duration: loopWidth / MARQUEE_SPEED,
          ease: 'none',
          repeat: -1,
        })
      }

      buildMarquee()

      const resizeObserver = new ResizeObserver(contextSafe(() => buildMarquee()))
      resizeObserver.observe(track)

      const onResize = contextSafe(() => buildMarquee())
      window.addEventListener('resize', onResize)

      const pause = contextSafe(() => tween?.pause())
      const resume = contextSafe(() => tween?.resume())

      track.addEventListener('mouseenter', pause)
      track.addEventListener('mouseleave', resume)

      return () => {
        tween?.kill()
        resizeObserver.disconnect()
        window.removeEventListener('resize', onResize)
        track.removeEventListener('mouseenter', pause)
        track.removeEventListener('mouseleave', resume)
      }
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-14 bg-white border-b border-border overflow-hidden"
    >
      <Reveal className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm md:text-base font-semibold text-muted-foreground">
          Brand yang telah mempercayakan Simpang Utama Kemasan
        </p>
      </Reveal>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-28" />

        {prefersReducedMotion ? (
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4">
            {brands.map((brand) => (
              <BrandLogo key={brand.name} {...brand} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex w-max will-change-transform">
              {marqueeBrands.map((brand, index) => (
                <BrandLogo key={`${brand.name}-${index}`} {...brand} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
