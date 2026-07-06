'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type HoverLiftOptions = {
  y?: number
  scale?: number
}

export function useHoverLift<T extends HTMLElement>({ y = -4, scale = 1.02 }: HoverLiftOptions = {}) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current
      if (!el || prefersReducedMotion) return

      const enter = contextSafe(() => {
        gsap.to(el, { y, scale, duration: 0.3, ease: 'power2.out', overwrite: true })
      })

      const leave = contextSafe(() => {
        gsap.to(el, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out', overwrite: true })
      })

      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)

      return () => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      }
    },
    { scope: ref, dependencies: [prefersReducedMotion, y, scale] },
  )

  return ref
}
