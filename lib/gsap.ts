'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

let registered = false

export function registerGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin)
  registered = true
}

registerGsap()

export { gsap, ScrollTrigger, ScrollSmoother, ScrollToPlugin, useGSAP }
