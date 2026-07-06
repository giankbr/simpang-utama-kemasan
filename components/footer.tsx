import Link from 'next/link'
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'

const footerLinks = {
  tentang: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Custom Printing', href: '/custom-printing' },
    { label: 'Kontak', href: '/contact' },
  ],
  portofolio: [
    { label: 'Studi Kasus', href: '/studi-kasus' },
    { label: 'Portofolio', href: '/studi-kasus' },
  ],
  kemasan: [
    { label: 'Sachet / 3 Side Seal', href: '/products' },
    { label: 'Standing Pouch', href: '/products' },
    { label: 'Lid Cup', href: '/products' },
    { label: 'Roll Stock', href: '/products' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1c1c28] text-white">
      {/* Link columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 mb-4 uppercase">
              Tentang Kami
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 mb-4 uppercase">
              Portofolio
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.portofolio.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 mb-4 uppercase">
              Kemasan
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.kemasan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-white/50 mb-4 uppercase">
              Layanan Pengaduan
            </h4>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Kementerian Perdagangan Republik Indonesia
            </p>
            <a
              href="https://wa.me/6285311111010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-2"
            >
              <IconBrandWhatsapp size={16} stroke={1.5} className="text-[#25D366] flex-shrink-0" />
              0853-1111-1010 (WhatsApp)
            </a>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-white/50 mb-4 uppercase">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <p className="font-semibold text-white text-sm mb-1">Simpang Utama Kemasan</p>
                <p className="flex items-start gap-2">
                  <IconMapPin size={16} stroke={1.5} className="flex-shrink-0 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </p>
              </li>
              <li>
                <a
                  href="https://wa.me/628123456789"
                  className="hover:text-white transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandWhatsapp size={16} stroke={1.5} className="text-[#25D366] flex-shrink-0" />
                  0812-3456-789
                </a>
              </li>
              <li>
                <a
                  href="tel:+628123456789"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <IconPhone size={16} stroke={1.5} />
                  0812-3456-789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@simpangutama.com"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <IconMail size={16} stroke={1.5} />
                  info@simpangutama.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs text-white/50 hover:text-white transition uppercase tracking-wide"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>Copyright &copy; {currentYear} Simpang Utama Kemasan. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white/70 transition">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
