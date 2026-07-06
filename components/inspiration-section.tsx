'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { IconArrowRight } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'
import { INSPIRATION_CATEGORIES, getInspirationByCategory } from '@/lib/case-studies'
import Reveal from '@/components/animate/reveal'
import StaggerReveal from '@/components/animate/stagger-reveal'
import { usePressEffect } from '@/hooks/use-press-effect'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'

const tabs = INSPIRATION_CATEGORIES
type Tab = (typeof tabs)[number]

function CaseStudyCard({
  slug,
  image,
  title,
  category,
  excerpt,
}: {
  slug: string
  image: string
  title: string
  category: string
  excerpt: string
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const card = cardRef.current
      const img = imageRef.current
      if (!card || !img) return

      const enter = contextSafe(() => {
        gsap.to(img, { scale: 1.06, duration: 0.55, ease: 'power2.out' })
        gsap.to(card, { y: -4, duration: 0.3, ease: 'power2.out' })
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
      href={`/studi-kasus/${slug}`}
      className="bg-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group block will-change-transform"
    >
      <div className="aspect-video overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{excerpt}</p>
        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
          Baca Lebih Banyak
          <IconArrowRight size={16} stroke={1.5} />
        </span>
      </div>
    </Link>
  )
}

export default function InspirationSection() {
  const ctaRef = usePressEffect<HTMLAnchorElement>()
  const [activeTab, setActiveTab] = useState<Tab>('Studi Kasus')

  const filteredStudies = getInspirationByCategory(activeTab)

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Inspirasi Bisnis
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer',
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground border border-border hover:border-primary/30 hover:bg-primary/5',
              )}
            >
              {tab}
            </button>
          ))}
        </Reveal>

        <div key={activeTab}>
          {filteredStudies.length > 0 ? (
            <StaggerReveal
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              stagger={0.15}
            >
              {filteredStudies.map((article) => (
                <CaseStudyCard
                  key={article.slug}
                  slug={article.slug}
                  image={article.image}
                  title={article.title}
                  category={article.category}
                  excerpt={article.excerpt}
                />
              ))}
            </StaggerReveal>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                Konten {activeTab} segera hadir
              </p>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Kami sedang menyiapkan inspirasi dan cerita terbaru untuk kategori ini. Sementara
                itu, lihat studi kasus lainnya.
              </p>
            </div>
          )}
        </div>

        <Reveal className="text-center mt-10">
          <Link ref={ctaRef} href="/studi-kasus" className={button3d('primary', 'px-6 py-3 text-sm will-change-transform')}>
            Lihat Semua
            <IconArrowRight size={18} stroke={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
