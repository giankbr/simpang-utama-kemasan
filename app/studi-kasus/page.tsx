import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'
import { caseStudies, INSPIRATION_CATEGORIES } from '@/lib/case-studies'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Inspirasi Bisnis | Simpang Utama Kemasan',
  description:
    'Studi kasus, success story, portofolio, event, dan artikel blog seputar kemasan fleksibel custom dari Simpang Utama Kemasan.',
}

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inspirasi Bisnis</h1>
          <p className="text-lg text-white text-opacity-90 max-w-2xl leading-relaxed">
            Kisah nyata brand, portofolio kemasan, event, dan artikel yang membantu Anda memilih
            solusi kemasan fleksibel custom full color yang tepat.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          {INSPIRATION_CATEGORIES.map((category) => {
            const items = caseStudies.filter((study) => study.category === category)
            if (!items.length) return null

            return (
              <div key={category} className="mb-14 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {items.map((study) => (
                    <Link
                      key={study.slug}
                      href={`/studi-kasus/${study.slug}`}
                      className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition group"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span
                          className={cn(
                            'text-xs font-semibold uppercase tracking-wide',
                            category === 'Studi Kasus' || category === 'Success Story'
                              ? 'text-primary'
                              : 'text-muted-foreground',
                          )}
                        >
                          {study.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-3 leading-snug">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{study.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          Baca Lebih Banyak
                          <IconArrowRight size={16} stroke={1.5} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
