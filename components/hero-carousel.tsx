'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=600&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=800&fit=crop',
    ctaType: 'whatsapp' as const,
    ctaLink:
      'https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20menanyakan%20tentang%20kemasan%20custom%20dari%20Simpang%20Utama%20Kemasan',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582735809210-dc46b4ad37cb?w=1200&h=600&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1582735809210-dc46b4ad37cb?w=600&h=800&fit=crop',
    ctaType: 'readmore' as const,
    ctaLink: '/products',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=600&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop',
    ctaType: 'readmore' as const,
    ctaLink: '#kemasan',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=600&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop',
    ctaType: 'readmore-red' as const,
    ctaLink: '/custom-printing',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full overflow-hidden bg-dark-gray">
      <div className="relative w-full aspect-video md:aspect-auto md:h-[500px] lg:h-[600px]">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 hover:bg-white hover:bg-opacity-20 rounded transition"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
            <path d="M14 26L2 14L14 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 hover:bg-white hover:bg-opacity-20 rounded transition"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
            <path d="M2 2L14 14L2 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <picture>
              <source srcSet={s.mobileImage} media="(max-width: 767px)" />
              <img
                src={s.image}
                alt={`Simpang Utama Kemasan Banner ${s.id}`}
                className="w-full h-full object-cover"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>

            {s.ctaType === 'whatsapp' && (
              <a
                href={s.ctaLink}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full flex items-center justify-center hover:shadow-lg transition">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23l-.356.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 001.51 5.394c.915 1.355 2.112 2.463 3.488 3.24 1.375.776 2.886 1.184 4.39 1.175 1.504-.009 3.002-.341 4.38-1.015l.374-.214 3.728.973-.993-3.629.236-.375a9.87 9.87 0 00-1.51-5.394c-.915-1.355-2.112-2.463-3.488-3.24-1.375-.776-2.886-1.184-4.39-1.175z" />
                  </svg>
                </div>
              </a>
            )}

            {(s.ctaType === 'readmore' || s.ctaType === 'readmore-red') && (
              <a
                href={s.ctaLink}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-20"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:shadow-lg transition ${
                    s.ctaType === 'readmore-red' ? 'bg-primary' : 'bg-white'
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      s.ctaType === 'readmore-red' ? 'text-white' : 'text-primary'
                    }`}
                  >
                    READ
                  </span>
                </div>
              </a>
            )}
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                index === current ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
