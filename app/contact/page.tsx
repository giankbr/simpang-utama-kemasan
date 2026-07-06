'use client'

import { useState } from 'react'
import { button3d } from '@/lib/button-3d'
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconClock,
} from '@tabler/icons-react'

const contactItems = [
  {
    label: 'Telepon',
    value: '+62 812-3456-789',
    href: 'tel:+628123456789',
    Icon: IconPhone,
  },
  {
    label: 'WhatsApp',
    value: '+62 812-3456-789',
    href: 'https://wa.me/628123456789',
    external: true,
    Icon: IconMessageCircle,
  },
  {
    label: 'Email',
    value: 'info@simpangutama.com',
    href: 'mailto:info@simpangutama.com',
    Icon: IconMail,
  },
  {
    label: 'Alamat',
    value: 'Jl. Simpang Utama, Jakarta, Indonesia',
    Icon: IconMapPin,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Halo, saya ${formData.name} dari ${formData.company}.\n\nPesan: ${formData.message}\n\nBisa dihubungi di: ${formData.phone}`
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(whatsappMessage)}`)
  }

  return (
    <main className="bg-white">
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Kontak
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hubungi Kami</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Tim kami siap membantu menjawab pertanyaan tentang produk, custom printing, dan
              kebutuhan kemasan bisnis Anda.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                  <ul className="divide-y divide-border">
                    {contactItems.map((item) => (
                      <li key={item.label} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full border border-border bg-light-gray flex items-center justify-center flex-shrink-0">
                          <item.Icon size={18} stroke={1.5} className="text-foreground/70" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noopener noreferrer' : undefined}
                              className="text-sm md:text-base text-foreground hover:underline underline-offset-4 break-words"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm md:text-base text-foreground leading-relaxed">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-border bg-light-gray flex items-center justify-center">
                      <IconClock size={18} stroke={1.5} className="text-foreground/70" />
                    </div>
                    <h3 className="font-bold text-foreground">Jam Operasional</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Senin – Jumat</p>
                      <p className="font-medium text-foreground">08:00 – 17:00 WIB</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Sabtu</p>
                      <p className="font-medium text-foreground">08:00 – 12:00 WIB</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-5 pt-5 border-t border-border">
                    Di luar jam operasional, hubungi WhatsApp untuk keperluan mendesak.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-border p-6 md:p-8 lg:p-10">
                  <h2 className="text-xl font-bold text-foreground mb-2">Kirim Pesan</h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Isi formulir di bawah. Pesan akan dikirim melalui WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          No. Telepon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition"
                          placeholder="+62 812-3456-789"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition"
                          placeholder="Opsional"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition resize-none"
                        placeholder="Ceritakan kebutuhan kemasan Anda..."
                      />
                    </div>

                    <button type="submit" className={button3d('primary', 'px-8 py-3 text-sm md:text-base')}>
                      <IconMessageCircle size={18} stroke={1.5} />
                      Kirim Melalui WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
            <div className="rounded-2xl border border-border bg-light-gray h-56 md:h-72 flex items-center justify-center">
              <div className="text-center px-4">
                <IconMapPin size={28} stroke={1.5} className="text-foreground/40 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Peta lokasi akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
