'use client'

import Image from 'next/image'

const brands = [
  { name: 'Baked ID', logo: '/brands/baked-id.svg', width: 140 },
  { name: 'Osaka Dorayaki', logo: '/brands/osaka-dorayaki.svg', width: 160 },
  { name: 'Kopi Nusantara', logo: '/brands/kopi-nusantara.svg', width: 150 },
  { name: 'FreshBite', logo: '/brands/freshbite.svg', width: 130 },
  { name: 'GreenLeaf', logo: '/brands/greenleaf.svg', width: 130 },
  { name: 'SnackBox', logo: '/brands/snackbox.svg', width: 120 },
  { name: 'RotiManis', logo: '/brands/rotimanis.svg', width: 130 },
  { name: 'PetCare ID', logo: '/brands/petcare-id.svg', width: 130 },
]

function BrandLogo({ name, logo, width }: (typeof brands)[number]) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-2 md:px-3">
      <Image
        src={logo}
        alt={name}
        width={width}
        height={48}
        className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
      />
    </div>
  )
}

export default function ClientsSection() {
  const marqueeBrands = [...brands, ...brands]

  return (
    <section className="py-10 md:py-14 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm md:text-base font-semibold text-muted-foreground">
          Brand yang telah mempercayakan Simpang Utama Kemasan
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-4 motion-reduce:max-w-5xl motion-reduce:mx-auto motion-reduce:px-4">
          {marqueeBrands.map((brand, index) => (
            <BrandLogo key={`${brand.name}-${index}`} {...brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
