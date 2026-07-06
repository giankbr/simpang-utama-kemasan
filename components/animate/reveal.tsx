'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
  duration?: number
  start?: string
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  duration = 0.75,
  start = 'top 88%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion) return

      gsap.from(ref.current, {
        autoAlpha: 0,
        y,
        x,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      })
    },
    { scope: ref, dependencies: [prefersReducedMotion, delay, y, x, duration, start] },
  )

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
