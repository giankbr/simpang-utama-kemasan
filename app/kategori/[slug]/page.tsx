import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IconArrowLeft, IconArrowRight, IconCheck } from '@tabler/icons-react'
import { button3d } from '@/lib/button-3d'
import { whatsappUrl } from '@/lib/site'
import { getPackagingCategory, packagingCategories } from '@/lib/packaging-categories'
import type { Metadata } from 'next'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return packagingCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getPackagingCategory(slug)
  if (!category) return { title: 'Kategori Tidak Ditemukan' }

  return {
    title: `${category.name} | Simpang Utama Kemasan`,
    description: category.excerpt,
  }
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const category = getPackagingCategory(slug)
  if (!category) notFound()

  const related = packagingCategories.filter((item) => item.slug !== category.slug).slice(0, 4)

  return (
    <main className="bg-white">
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/#kemasan"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition mb-6"
          >
            <IconArrowLeft size={16} stroke={1.5} />
            Kembali ke Kategori Kemasan
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-4xl">
            {category.name}
          </h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl">{category.excerpt}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border bg-light-gray">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap gap-2">
                {category.highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    <IconCheck size={14} stroke={2} className="text-primary" />
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Jenis Kemasan Tersedia</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.packagingTypes.map((type) => (
                    <li
                      key={type}
                      className="bg-white rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              {category.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Kategori Lainnya</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/kategori/${item.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-white overflow-hidden hover:shadow-lg hover:border-primary/20 transition duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-light-gray">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-light-gray">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition leading-snug line-clamp-3">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-xs mt-2 group-hover:gap-2 transition-all">
                    Lihat Detail
                    <IconArrowRight size={14} stroke={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Butuh kemasan untuk {category.name.toLowerCase()}?
            </h2>
            <p className="text-white/90">
              Konsultasi gratis bareng tim Simpang Utama Kemasan.
            </p>
          </div>
          <a
            href={whatsappUrl(
              `Halo, saya tertarik konsultasi kemasan untuk ${category.name}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={button3d('white', 'px-6 py-3 text-sm text-center shrink-0')}
          >
            Konsultasi Gratis
          </a>
        </div>
      </section>
    </main>
  )
}
