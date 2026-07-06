import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  href?: string
}

export default function Logo({ className = '', href = '/' }: LogoProps) {
  const image = (
    <Image
      src="/logo.jpg"
      alt="Simpang Utama Kemasan"
      width={180}
      height={52}
      className={cn('w-auto object-contain h-8 sm:h-10 lg:h-[52px] max-w-[130px] sm:max-w-[160px] lg:max-w-none', className)}
      priority
    />
  )

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0 inline-flex min-w-0">
        {image}
      </Link>
    )
  }

  return image
}
