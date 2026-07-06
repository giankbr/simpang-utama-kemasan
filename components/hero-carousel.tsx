'use client'

import { useState, useEffect, useRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePressEffect } from '@/hooks/use-press-effect'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&h=700&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    image: '/banners/hero-2.png',
    mobileImage: '/banners/hero-2.png',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600&h=700&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=1000&fit=crop',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&h=700&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=1000&fit=crop',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const prevBtnRef = usePressEffect<HTMLButtonElement>()
  const nextBtnRef = usePressEffect<HTMLButtonElement>()

  useGSAP(
    () => {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return
        gsap.set(slide, { autoAlpha: index === 0 ? 1 : 0, scale: index === 0 ? 1 : 1.06 })
      })
    },
    { scope: sectionRef },
  )

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return
      const isActive = index === current
      gsap.to(slide, {
        autoAlpha: isActive ? 1 : 0,
        scale: isActive ? 1 : 1.06,
        duration: 1,
        ease: 'power2.inOut',
        overwrite: true,
      })
    })
  }, [current])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-dark-gray">
      <div className="relative w-full aspect-video md:aspect-auto md:h-[500px] lg:h-[600px]">
        <button
          ref={prevBtnRef}
          onClick={prev}
          className="group absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary will-change-transform"
          aria-label="Previous slide"
        >
          <IconChevronLeft size={22} stroke={2} className="transition-colors" />
        </button>
        <button
          ref={nextBtnRef}
          onClick={next}
          className="group absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary will-change-transform"
          aria-label="Next slide"
        >
          <IconChevronRight size={22} stroke={2} className="transition-colors" />
        </button>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => {
              slideRefs.current[index] = el
            }}
            className="absolute inset-0 invisible"
          >
            <picture>
              <source srcSet={slide.mobileImage} media="(max-width: 767px)" />
              <img
                src={slide.image}
                alt={`Simpang Utama Kemasan Banner ${slide.id}`}
                className="w-full h-full object-cover"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                index === current ? 'bg-white scale-110' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
