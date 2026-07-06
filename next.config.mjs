/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'flexy-pack-website-clone.vercel.app',
          },
        ],
        destination: 'https://simpang-utama-kemasan.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
