'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function usePressEffect<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current
      if (!el || prefersReducedMotion) return

      const press = contextSafe(() => {
        gsap.to(el, { scale: 0.96, duration: 0.12, ease: 'power2.out', overwrite: true })
      })

      const release = contextSafe(() => {
        gsap.to(el, { scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.45)', overwrite: true })
      })

      el.addEventListener('mousedown', press)
      el.addEventListener('mouseup', release)
      el.addEventListener('mouseleave', release)
      el.addEventListener('touchstart', press, { passive: true })
      el.addEventListener('touchend', release)

      return () => {
        el.removeEventListener('mousedown', press)
        el.removeEventListener('mouseup', release)
        el.removeEventListener('mouseleave', release)
        el.removeEventListener('touchstart', press)
        el.removeEventListener('touchend', release)
      }
    },
    { scope: ref, dependencies: [prefersReducedMotion] },
  )

  return ref
}
