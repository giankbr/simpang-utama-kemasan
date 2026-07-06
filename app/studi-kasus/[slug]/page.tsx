import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IconArrowLeft, IconArrowRight, IconCheck } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'
import type { Metadata } from 'next'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Studi Kasus Tidak Ditemukan' }

  return {
    title: `${study.title} | Simpang Utama Kemasan`,
    description: study.excerpt,
  }
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2)

  return (
    <main className="bg-white">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <Link
            href="/studi-kasus"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition mb-6"
          >
            <IconArrowLeft size={16} stroke={1.5} />
            Kembali ke Studi Kasus
          </Link>

          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {study.category}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight max-w-4xl">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{study.excerpt}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {study.publishedAt} · {study.readTime}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border bg-light-gray">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <aside className="lg:col-span-4 xl:col-span-3 space-y-4 lg:sticky lg:top-28">
              <div className="bg-light-gray rounded-2xl border border-border p-5 md:p-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Klien
                  </p>
                  <p className="text-sm font-medium text-foreground">{study.client}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Industri
                  </p>
                  <p className="text-sm font-medium text-foreground">{study.industry}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Jenis Kemasan
                  </p>
                  <p className="text-sm font-medium text-foreground">{study.packagingType}</p>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8 xl:col-span-9 space-y-10">
              {study.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 mt-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                        >
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="p-6 md:p-8 bg-light-gray rounded-2xl border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4">Hasil Utama</h2>
                <ul className="space-y-3">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                      <IconCheck size={20} stroke={2} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <div className="mt-14 p-6 md:p-8 rounded-2xl bg-[#0c1f3d] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Butuh solusi kemasan serupa untuk brand Anda?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Konsultasi gratis bareng tim Simpang Utama Kemasan.
              </p>
            </div>
            <a
              href="https://wa.me/628123456789?text=Halo%2C%20saya%20tertarik%20konsultasi%20studi%20kasus%20kemasan"
              target="_blank"
              rel="noopener noreferrer"
              className={button3d('white', 'px-6 py-3 text-sm text-center shrink-0')}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 md:py-20 bg-light-gray border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Studi Kasus Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/studi-kasus/${item.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Baca selengkapnya
                      <IconArrowRight size={16} stroke={1.5} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
