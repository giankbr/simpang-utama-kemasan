import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  className?: string
  height?: number
  href?: string
}

export default function Logo({ className = '', height = 48, href = '/' }: LogoProps) {
  const image = (
    <Image
      src="/logo.jpg"
      alt="Simpang Utama Kemasan"
      width={Math.round(height * 3.2)}
      height={height}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ height, width: 'auto' }}
      priority
    />
  )

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0 inline-flex">
        {image}
      </Link>
    )
  }

  return image
}
