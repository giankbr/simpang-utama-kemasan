'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconMenu, IconX, IconBrandWhatsapp, IconMail, IconChevronDown } from '@tabler/icons-react'
import Logo from '@/components/logo'
import { button3d } from '@/lib/button-3d'
import { SITE_EMAIL, SITE_PHONE_DISPLAY, whatsappUrl } from '@/lib/site'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const kemasanItems = [
  { name: 'Sachet / 3 Side Seal', href: '/products' },
  { name: 'Standing Pouch', href: '/products' },
  { name: 'Lid Cup', href: '/products' },
  { name: 'Roll Stock', href: '/products' },
]

const menuItems = [
  { name: 'Tentang Kami', href: '/about' },
  {
    name: 'Portofolio',
    href: '/about',
    children: [
      { name: 'Studi Kasus', href: '/studi-kasus' },
      { name: 'Portofolio', href: '/studi-kasus' },
    ],
  },
  { name: 'Custom Printing', href: '/custom-printing' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        setHeaderHeight(height)
        document.documentElement.style.setProperty('--site-header-offset', `${height}px`)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useGSAP(
    () => {
      if (!headerRef.current) return

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.to(headerRef.current, {
            boxShadow:
              self.scroll() > 24
                ? '0 4px 24px rgba(0,0,0,0.08)'
                : '0 0 0 rgba(0,0,0,0)',
            duration: 0.25,
            overwrite: true,
          })
        },
      })
    },
    { scope: headerRef },
  )

  useEffect(() => {
    const nav = mobileNavRef.current
    const backdrop = backdropRef.current
    if (!isOpen || !nav) return

    gsap.fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' })
    gsap.fromTo(
      nav,
      { x: '100%' },
      { x: '0%', duration: 0.4, ease: 'power3.out' },
    )
  }, [isOpen])

  const closeMenuAnimated = () => {
    const nav = mobileNavRef.current
    const backdrop = backdropRef.current
    if (!nav) {
      closeMenu()
      return
    }

    gsap.to(nav, {
      x: '100%',
      duration: 0.3,
      ease: 'power3.in',
      onComplete: closeMenu,
    })
    if (backdrop) {
      gsap.to(backdrop, { autoAlpha: 0, duration: 0.25 })
    }
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 min-w-0">
          <span className="font-medium text-[11px] sm:text-sm truncate min-w-0">
            Cetak Kemasan Fleksibel Custom Full Color
          </span>
          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            <a
              href={whatsappUrl()}
              className="flex items-center gap-1.5 text-[11px] sm:text-sm hover:opacity-90 transition whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={16} stroke={1.5} className="flex-shrink-0" />
              <span>{SITE_PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="items-center gap-1 md:gap-2 text-xs md:text-sm hover:opacity-90 transition hidden md:flex"
            >
              <IconMail size={16} stroke={1.5} />
              <span>{SITE_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3.5 lg:py-4">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('kemasan')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition font-medium text-sm">
                Kemasan
                <IconChevronDown size={16} stroke={1.5} />
              </button>
              {openDropdown === 'kemasan' && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="bg-white border border-border rounded-lg shadow-xl py-1.5">
                    {kemasanItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block mx-1.5 px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-light-gray hover:text-primary transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {menuItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition font-medium text-sm">
                    {item.name}
                    <IconChevronDown size={16} stroke={1.5} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 w-48 pt-2 z-50">
                      <div className="bg-white border border-border rounded-lg shadow-xl py-1.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block mx-1.5 px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-light-gray hover:text-primary transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition font-medium text-sm"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="hidden lg:block">
              <a
                href={whatsappUrl()}
                className={button3d('primary', 'px-6 py-2.5 text-sm')}
              >
                Hubungi Kami
              </a>
            </div>
            <button
              onClick={() => (isOpen ? closeMenuAnimated() : setIsOpen(true))}
              className="lg:hidden p-2 -mr-1 hover:bg-secondary rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <IconX size={24} stroke={1.5} /> : <IconMenu size={24} stroke={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <button
            ref={backdropRef}
            type="button"
            className="fixed inset-0 z-40 bg-black/30 lg:hidden invisible"
            style={{ top: headerHeight }}
            onClick={closeMenuAnimated}
            aria-label="Tutup menu"
          />
          <nav
            ref={mobileNavRef}
            className="fixed inset-x-0 bottom-0 z-50 lg:hidden bg-white flex flex-col shadow-2xl"
            style={{ top: headerHeight }}
            aria-label="Mobile navigation"
          >
            <div className="flex-1 overflow-y-auto px-4 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-1">
                Menu
              </p>

              <div className="space-y-2">
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('kemasan-mobile')}
                    className="flex items-center justify-between w-full px-4 py-3.5 font-semibold text-sm text-foreground bg-white"
                  >
                    Kemasan
                    <IconChevronDown
                      size={18}
                      stroke={1.5}
                      className={`text-primary transition ${openDropdown === 'kemasan-mobile' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === 'kemasan-mobile' && (
                    <div className="px-3 pb-3 pt-1 bg-light-gray border-t border-border space-y-1">
                      {kemasanItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-primary transition"
                          onClick={closeMenuAnimated}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {menuItems.map((item) =>
                  item.children ? (
                    <div key={item.name} className="rounded-xl border border-border overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="flex items-center justify-between w-full px-4 py-3.5 font-semibold text-sm text-foreground bg-white"
                      >
                        {item.name}
                        <IconChevronDown
                          size={18}
                          stroke={1.5}
                          className={`text-primary transition ${openDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openDropdown === `mobile-${item.name}` && (
                        <div className="px-3 pb-3 pt-1 bg-light-gray border-t border-border space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-primary transition"
                              onClick={closeMenuAnimated}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center w-full px-4 py-3.5 rounded-xl border border-border font-semibold text-sm text-foreground hover:border-primary/30 hover:bg-light-gray transition"
                      onClick={closeMenuAnimated}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="shrink-0 border-t border-border bg-white px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a
                href={whatsappUrl('Halo, saya ingin konsultasi kemasan dari Simpang Utama Kemasan.')}
                target="_blank"
                rel="noopener noreferrer"
                className={button3d('primary', 'w-full py-3 text-sm justify-center')}
                onClick={closeMenuAnimated}
              >
                <IconBrandWhatsapp size={18} stroke={1.5} />
                Hubungi Kami
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
