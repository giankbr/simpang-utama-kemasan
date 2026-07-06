import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import SmoothScroll from '@/components/smooth-scroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simpang Utama Kemasan | Cetak Kemasan Fleksibel Custom Full Color',
  description:
    'Solusi kemasan fleksibel custom full color untuk berbagai industri. Sachet, standing pouch, roll stock, lid cup.',
  keywords: 'Simpang Utama Kemasan, kemasan fleksibel, custom printing, sachet, standing pouch, roll stock, food grade',
  applicationName: 'Simpang Utama Kemasan',
  icons: {
    icon: {
      url: '/logo.jpg',
      type: 'image/jpeg',
    },
    apple: '/logo.jpg',
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
