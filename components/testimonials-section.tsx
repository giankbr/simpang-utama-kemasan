'use client'

import { useState } from 'react'
import { IconChevronLeft, IconChevronRight, IconStarFilled } from '@tabler/icons-react'

const testimonials = [
  {
    id: 1,
    name: 'Dea Amira',
    role: 'Lab Tobacco Department',
    text: 'Packaging dari Simpang Utama Kemasan terbukti mampu menjaga kualitas produk tembakau tetap fresh dan berkualitas.',
  },
  {
    id: 2,
    name: 'Chef Angie',
    role: 'd\'Pesisir - Top 8 MCI S-10',
    text: 'Simpang Utama Kemasan menghadirkan kemasan yang high quality, ekonomis, dan tidak gampang robek.',
  },
  {
    id: 3,
    name: 'Andri Susanto',
    role: 'TitiandFood',
    text: 'Packaging dengan kualitas food grade dari Simpang Utama Kemasan sangat cocok dan aman untuk bahan makanan.',
  },
  {
    id: 4,
    name: 'Nina Junisma',
    role: 'Pempek Tekwan Almeera',
    text: 'Packaging dengan kualitas food grade dari Simpang Utama Kemasan sangat cocok dan aman untuk bahan makanan.',
  },
  {
    id: 5,
    name: 'Mona Halim',
    role: 'Pink Matter',
    text: 'Simpang Utama Kemasan menjadikan packaging lebih aman untuk produk dan juga lebih travel-friendly.',
  },
  {
    id: 6,
    name: 'Ahmad',
    role: 'Tartaruga',
    text: 'Kemasan dengan kualitas yang baik akan memberikan first impression yang baik juga dan itu ada di Simpang Utama Kemasan.',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const itemsPerPage = 3
  const pages = Math.ceil(testimonials.length / itemsPerPage)

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + pages) % pages)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % pages)
  }

  const startIndex = current * itemsPerPage
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Kepuasan Pelanggan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Berbagai ulasan dari pelanggan yang telah merasakan manfaat produk Simpang Utama Kemasan.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-light-gray rounded-lg p-6 md:p-8 shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm md:text-base">{testimonial.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base italic">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IconStarFilled key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {pages > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 hover:bg-light-gray rounded-full transition hidden md:block"
                aria-label="Previous testimonials"
              >
                <IconChevronLeft size={24} stroke={1.5} className="text-primary" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 hover:bg-light-gray rounded-full transition hidden md:block"
                aria-label="Next testimonials"
              >
                <IconChevronRight size={24} stroke={1.5} className="text-primary" />
              </button>
            </>
          )}
        </div>

        {pages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(pages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
