'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  childSelector?: string
  stagger?: number
  y?: number
  start?: string
}

export default function StaggerReveal({
  children,
  className,
  childSelector = ':scope > *',
  stagger = 0.1,
  y = 28,
  start = 'top 88%',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion) return

      const items = gsap.utils.toArray<HTMLElement>(childSelector, ref.current)
      if (!items.length) return

      gsap.set(items, { autoAlpha: 0, y })

      ScrollTrigger.batch(items, {
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger,
            ease: 'power3.out',
            overwrite: true,
          })
        },
        start,
        once: true,
      })
    },
    { scope: ref, dependencies: [prefersReducedMotion, childSelector, stagger, y, start] },
  )

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
