'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconMenu, IconX, IconBrandWhatsapp, IconMail, IconChevronDown } from '@tabler/icons-react'
import Logo from '@/components/logo'
import { button3d } from '@/lib/button-3d'

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
        setHeaderHeight(headerRef.current.offsetHeight)
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

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-white py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-end sm:justify-between gap-3">
          <span className="font-medium text-xs md:text-sm hidden sm:block">
            Cetak Kemasan Fleksibel Custom Full Color
          </span>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="https://wa.me/628123456789"
              className="flex items-center gap-1.5 text-xs md:text-sm hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={16} stroke={1.5} className="flex-shrink-0" />
              <span className="hidden sm:inline">+62 812-3456-789</span>
            </a>
            <a
              href="mailto:info@simpangutama.com"
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:opacity-90 transition hidden sm:flex"
            >
              <IconMail size={16} stroke={1.5} />
              <span>info@simpangutama.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 lg:py-4">
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
                <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-lg shadow-xl py-2 z-50">
                  {kemasanItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-light-gray hover:text-primary transition"
                    >
                      {item.name}
                    </Link>
                  ))}
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
                    <div className="absolute top-full left-0 w-48 bg-white border border-border rounded-lg shadow-xl py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-light-gray hover:text-primary transition"
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
                  className="px-4 py-2 text-foreground hover:text-primary transition font-medium text-sm"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 flex-shrink-0">
            <a
              href="https://wa.me/628123456789"
              className={button3d('primary', 'hidden lg:inline-flex px-6 py-2.5 text-sm')}
            >
              Hubungi Kami
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
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
        <nav
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-white flex flex-col border-t border-border"
          style={{ top: headerHeight }}
          aria-label="Mobile navigation"
        >
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <div className="border-b border-border">
              <button
                onClick={() => toggleDropdown('kemasan-mobile')}
                className="flex items-center justify-between w-full py-4 font-medium text-sm"
              >
                Kemasan
                <IconChevronDown
                  size={16}
                  stroke={1.5}
                  className={`transition ${openDropdown === 'kemasan-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'kemasan-mobile' && (
                <div className="pb-3 pl-4 space-y-1">
                  {kemasanItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2.5 text-sm text-gray-600"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {menuItems.map((item) =>
              item.children ? (
                <div key={item.name} className="border-b border-border">
                  <button
                    onClick={() => toggleDropdown(`mobile-${item.name}`)}
                    className="flex items-center justify-between w-full py-4 font-medium text-sm"
                  >
                    {item.name}
                    <IconChevronDown
                      size={16}
                      stroke={1.5}
                      className={`transition ${openDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === `mobile-${item.name}` && (
                    <div className="pb-3 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2.5 text-sm text-gray-600"
                          onClick={closeMenu}
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
                  className="flex items-center w-full py-4 border-b border-border font-medium text-sm"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="p-4 border-t border-border bg-white">
            <a
              href="https://wa.me/628123456789"
              className={button3d('primary', 'w-full py-3.5 text-sm text-center')}
              onClick={closeMenu}
            >
              Hubungi Kami
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
