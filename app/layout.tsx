import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import SmoothScroll from '@/components/smooth-scroll'
import {
  SITE_META_DESCRIPTION,
  SITE_META_TITLE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_META_TITLE,
  description: SITE_META_DESCRIPTION,
  keywords:
    'Simpang Utama Kemasan, kemasan fleksibel, custom printing, sachet, standing pouch, roll stock, food grade',
  applicationName: SITE_NAME,
  icons: {
    icon: {
      url: '/logo.jpg',
      type: 'image/jpeg',
    },
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#D32F2F' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-background text-foreground font-sans">
        <Header />
        <SmoothScroll>
          <div className="site-content-offset">
            {children}
            <Footer />
          </div>
        </SmoothScroll>
        <ChatWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
