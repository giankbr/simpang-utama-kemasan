'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconMenu, IconX, IconMessageCircle, IconMail, IconChevronDown } from '@tabler/icons-react'
import Logo from '@/components/logo'

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
      { name: 'Studi Kasus', href: '/about' },
      { name: 'Portofolio', href: '/about' },
    ],
  },
  { name: 'Custom Printing', href: '/custom-printing' },
  { name: 'Hubungi Kami', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <span className="font-medium text-xs md:text-sm hidden sm:block">
            Cetak Kemasan Fleksibel Custom Full Color
          </span>
          <div className="flex gap-4 md:gap-6 ml-auto">
            <a
              href="https://wa.me/628123456789"
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMessageCircle size={16} stroke={1.5} />
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

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo height={52} />

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

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="https://wa.me/628123456789"
              className="hidden md:inline-flex btn-3d btn-3d-primary px-5 md:px-7 py-2.5 text-sm"
            >
              Hubungi Kami
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <IconX size={24} stroke={1.5} /> : <IconMenu size={24} stroke={1.5} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t">
            <div className="px-4 py-3">
              <button
                onClick={() => toggleDropdown('kemasan-mobile')}
                className="flex items-center justify-between w-full font-medium text-sm"
              >
                Kemasan
                <IconChevronDown
                  size={16}
                  stroke={1.5}
                  className={`transition ${openDropdown === 'kemasan-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'kemasan-mobile' && (
                <div className="mt-2 ml-4 space-y-1">
                  {kemasanItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-sm text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="w-full text-left px-4 py-3 hover:bg-secondary rounded-lg font-medium text-sm block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628123456789"
              className="block w-full mt-4 btn-3d btn-3d-primary px-4 py-3 text-sm text-center"
            >
              Hubungi Kami
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
