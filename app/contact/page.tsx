'use client'

import { useState } from 'react'
import { button3d } from '@/lib/button-3d'
import {
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_OFFICE_HOURS,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_TAGLINE,
  whatsappUrl,
} from '@/lib/site'
import {
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBuildingStore,
  IconArrowRight,
} from '@tabler/icons-react'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=No.+17-20,+Jl.+Sandubaya+Mandalika+Blok+AA,+Bertais,+Mataram,+NTB&t=&z=16&ie=UTF8&iwloc=&output=embed'

const quickContacts = [
  {
    label: 'WhatsApp',
    value: SITE_PHONE_DISPLAY,
    href: whatsappUrl(),
    external: true,
    Icon: IconBrandWhatsapp,
    accent: 'text-[#25D366]',
    description: 'Respon cepat untuk pemesanan & konsultasi',
  },
  {
    label: 'Telepon',
    value: SITE_PHONE_DISPLAY,
    href: `tel:${SITE_PHONE_E164}`,
    Icon: IconPhone,
    accent: 'text-primary',
    description: 'Hubungi langsung pada jam operasional',
  },
  {
    label: 'Email',
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    Icon: IconMail,
    accent: 'text-primary',
    description: 'Untuk penawaran dan pertanyaan detail',
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
    const companyLine = formData.company ? ` dari ${formData.company}` : ''
    const whatsappMessage = `Halo, saya ${formData.name}${companyLine}.\n\nEmail: ${formData.email}\nPesan: ${formData.message}\n\nBisa dihubungi di: ${formData.phone}`
    window.open(whatsappUrl(whatsappMessage))
  }

  return (
    <main>
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
                Kontak
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi {SITE_NAME}</h1>
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                Untuk informasi pemesanan, konsultasi kemasan custom, atau kunjungan ke toko kami di
                Mataram. {SITE_TAGLINE}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={whatsappUrl('Halo, saya ingin konsultasi kemasan dari Simpang Utama Kemasan.')}
                target="_blank"
                rel="noopener noreferrer"
                className={button3d('white', 'px-6 py-3 text-sm justify-center w-full')}
              >
                <IconBrandWhatsapp size={18} stroke={1.5} />
                Chat WhatsApp
              </a>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className={button3d('glass', 'px-6 py-3 text-sm justify-center w-full')}
              >
                <IconPhone size={18} stroke={1.5} />
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {quickContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group rounded-2xl border border-border bg-white p-5 md:p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.Icon size={24} stroke={1.5} className={item.accent} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-bold text-foreground mb-2 group-hover:text-primary transition">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Kirim Pesan</h2>
                <p className="text-gray-600 mb-8">
                  Isi formulir di bawah ini. Pesan akan dikirim langsung ke WhatsApp tim kami.
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
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
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
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        No. Telepon / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
                        placeholder={SITE_PHONE_DISPLAY}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Nama Perusahaan / Brand
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
                        placeholder="Opsional"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Pesan / Kebutuhan Kemasan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition resize-none"
                      placeholder="Ceritakan jenis kemasan, volume order, atau pertanyaan Anda..."
                    />
                  </div>

                  <button type="submit" className={button3d('primary', 'px-8 py-3.5 text-sm md:text-base')}>
                    <IconBrandWhatsapp size={18} stroke={1.5} />
                    Kirim Melalui WhatsApp
                    <IconArrowRight size={18} stroke={2} />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconBuildingStore size={24} stroke={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Kunjungi Toko</h3>
                    <p className="text-sm text-muted-foreground">Mataram, NTB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                  <IconMapPin size={18} stroke={1.5} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    {SITE_ADDRESS_LINES.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconClock size={24} stroke={1.5} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Jam Operasional</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4 pb-4 border-b border-border">
                    <span className="text-muted-foreground">Senin – Jumat</span>
                    <span className="font-semibold text-foreground">{SITE_OFFICE_HOURS.weekday}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Sabtu</span>
                    <span className="font-semibold text-foreground">{SITE_OFFICE_HOURS.saturday}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-5 pt-5 border-t border-border leading-relaxed">
                  Di luar jam operasional, tetap bisa hubungi kami via WhatsApp.
                </p>
              </div>

              <div className="rounded-2xl bg-primary p-6 md:p-8 text-white">
                <h3 className="font-bold text-lg mb-2">Butuh respon cepat?</h3>
                <p className="text-white/90 text-sm mb-5 leading-relaxed">
                  Tim kami siap bantu pilih jenis kemasan, custom printing, dan estimasi order.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={button3d('white', 'px-6 py-3 text-sm w-full justify-center')}
                >
                  <IconBrandWhatsapp size={18} stroke={1.5} />
                  Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Lokasi Kami</h2>
            <p className="text-gray-600">
              Kunjungi toko Simpang Utama Kemasan di Jl. Sandubaya Bertais, Mataram.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[16/10] md:aspect-[21/9] bg-light-gray">
            <iframe
              title="Lokasi Simpang Utama Kemasan"
              src={MAP_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  )
}
