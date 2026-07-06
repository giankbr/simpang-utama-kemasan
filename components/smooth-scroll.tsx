'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type SmoothScrollProps = {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion || !wrapperRef.current || !contentRef.current) return

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.15,
        smoothTouch: 0.12,
        effects: true,
      })

      ScrollTrigger.refresh()

      return () => {
        smoother.kill()
      }
    },
    { scope: wrapperRef, dependencies: [prefersReducedMotion] },
  )

  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const hash = href.includes('#') ? href.slice(href.indexOf('#')) : ''
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      const isSamePage =
        href.startsWith('#') ||
        (anchor.pathname === window.location.pathname && anchor.hostname === window.location.hostname)

      if (!isSamePage) return

      event.preventDefault()

      const smoother = ScrollSmoother.get()
      const headerOffset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--site-header-offset'),
          10,
        ) || 88

      if (smoother) {
        smoother.scrollTo(target, true, `top ${headerOffset}px`)
        return
      }

      gsap.to(window, {
        duration: 0.8,
        ease: 'power3.inOut',
        scrollTo: { y: target, offsetY: headerOffset },
      })
    }

    document.addEventListener('click', onAnchorClick)
    return () => document.removeEventListener('click', onAnchorClick)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !window.location.hash) return

    const target = document.querySelector(window.location.hash)
    if (!target) return

    const timer = window.setTimeout(() => {
      const smoother = ScrollSmoother.get()
      const headerOffset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--site-header-offset'),
          10,
        ) || 88

      if (smoother) {
        smoother.scrollTo(target, true, `top ${headerOffset}px`)
        return
      }

      gsap.to(window, {
        duration: 0.8,
        ease: 'power3.inOut',
        scrollTo: { y: target, offsetY: headerOffset },
      })
    }, 100)

    return () => window.clearTimeout(timer)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  )
}
