export const SITE_NAME = 'Simpang Utama Kemasan'

export const SITE_URL = 'https://simpang-utama-kemasan.vercel.app'

export const SITE_META_TITLE = 'Simpang Utama Kemasan | Cetak Kemasan Fleksibel Custom Full Color'

export const SITE_META_DESCRIPTION =
  'Solusi kemasan fleksibel custom full color untuk berbagai industri. Sachet, standing pouch, roll stock, lid cup.'

export const SITE_PHONE_DISPLAY = '0819-1801-7888'
export const SITE_PHONE_E164 = '+6281918017888'
export const SITE_WHATSAPP_URL = 'https://wa.me/6281918017888'

export const SITE_EMAIL = 'info@simpangutama.com'

export const SITE_ADDRESS_LINES = [
  'No. 17-20, Jl. Sandubaya Mandalika Blok AA',
  'Bertais, Sandubaya, Mataram City',
  'West Nusa Tenggara 83236',
] as const

export const SITE_ADDRESS_FULL = SITE_ADDRESS_LINES.join(', ')

export const SITE_OFFICE_HOURS = {
  weekday: '08:00 – 17:00 WIB',
  saturday: '08:00 – 12:00 WIB',
} as const

export const SITE_TAGLINE = 'Solusi Kemasan Anda.'

export const SITE_SHORT_DESCRIPTION =
  'Distributor produk kemasan terlengkap pertama di NTB, berdiri sejak 1998 dan melayani kebutuhan industri, pertanian, perikanan, hingga HoReCa.'

export const SITE_PRODUCT_CATEGORIES = [
  'Tas & Kantong Plastik',
  'Plastik Mulsa Hitam (Pertanian)',
  'Plastik UV Green House',
  'Plastik Mulsa Tambak',
  'OPP, PP & Tali Rafia',
  'Karung & Plastik Laundry',
  'Kotak Kardus & Bubble Wrap',
  'Paper Cup, Thinwall & Standing Pouch',
  'Kemasan Makanan & Baking Paper',
  'Mesin Sealer, Sedotan, Sendok & Garpu',
  'Tissue & Alat Tulis',
  'Kemasan Fleksibel Custom Full Color',
] as const

export const SITE_INDUSTRIES = [
  'Pertanian & perikanan',
  'Hotel & perhotelan',
  'Kafe & restoran (HoReCa)',
  'Retail & grosir',
  'UMKM & industri makanan',
] as const

export function whatsappUrl(message?: string) {
  if (!message) return SITE_WHATSAPP_URL
  return `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
