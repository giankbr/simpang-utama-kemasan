'use client'

import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'
import { caseStudies } from '@/lib/case-studies'

const tabs = ['Studi Kasus', 'Success Story', 'Portofolio', 'Event', 'Blog'] as const

export default function InspirationSection() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Inspirasi Bisnis
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'bg-light-gray text-foreground hover:bg-primary/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((article) => (
            <Link
              key={article.slug}
              href={`/studi-kasus/${article.slug}`}
              className="bg-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Baca Lebih Banyak
                  <IconArrowRight size={16} stroke={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/studi-kasus" className={button3d('primary', 'px-6 py-3 text-sm')}>
            Lihat Semua
            <IconArrowRight size={18} stroke={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
