import { ImageResponse } from 'next/og'
import { SITE_META_DESCRIPTION, SITE_NAME } from '@/lib/site'

export const alt = SITE_NAME
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #D32F2F 0%, #C62828 45%, #FF6F00 100%)',
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 900,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.95)',
            lineHeight: 1.35,
            maxWidth: 980,
          }}
        >
          Cetak Kemasan Fleksibel Custom Full Color
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.45,
            maxWidth: 980,
          }}
        >
          {SITE_META_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  )
}
