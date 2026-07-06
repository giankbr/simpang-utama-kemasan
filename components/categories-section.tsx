'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { packagingCategories } from '@/lib/packaging-categories'
import Reveal from '@/components/animate/reveal'
import StaggerReveal from '@/components/animate/stagger-reveal'
import { gsap, useGSAP } from '@/lib/gsap'

function CategoryCard({
  slug,
  name,
  image,
}: {
  slug: string
  name: string
  image: string
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const card = cardRef.current
      const img = imageRef.current
      if (!card || !img) return

      const enter = contextSafe(() => {
        gsap.to(img, { scale: 1.08, duration: 0.5, ease: 'power2.out' })
        gsap.to(card, { y: -3, duration: 0.3, ease: 'power2.out' })
      })

      const leave = contextSafe(() => {
        gsap.to(img, { scale: 1, duration: 0.45, ease: 'power2.out' })
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
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
    <Link
      ref={cardRef}
      href={`/kategori/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-white overflow-hidden hover:shadow-lg hover:border-primary/20 transition-shadow duration-300 will-change-transform"
    >
      <div className="aspect-[4/3] overflow-hidden bg-light-gray">
        <img
          ref={imageRef}
          src={image}
          alt={name}
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="flex-1 p-3 sm:p-4 bg-light-gray">
        <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground group-hover:text-primary transition leading-snug line-clamp-3">
          {name}
        </h3>
      </div>
    </Link>
  )
}

export default function CategoriesSection() {
  return (
    <section id="kemasan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pilih Kemasan Sesuai Produkmu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solusi kemasan custom full color untuk berbagai jenis produk dan industri
          </p>
        </Reveal>

        <StaggerReveal
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          stagger={0.08}
        >
          {packagingCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              image={category.image}
            />
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
