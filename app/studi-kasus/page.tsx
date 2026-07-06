import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'
import { caseStudies } from '@/lib/case-studies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studi Kasus | Simpang Utama Kemasan',
  description:
    'Pelajari bagaimana brand F&B, UMKM, dan industri lain memecahkan tantangan kemasan bersama Simpang Utama Kemasan.',
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Portofolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Studi Kasus</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Kisah nyata brand yang berhasil meningkatkan kualitas produk, tampilan, dan performa
            penjualan lewat solusi kemasan fleksibel custom full color.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study) => (
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
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {study.category}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-3 leading-snug">
                    {study.title}
                  </h2>
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
      </section>
    </main>
  )
}
