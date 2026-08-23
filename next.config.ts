import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.cnn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mediaim.expedia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'carrongroup.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pix8.agoda.net',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/amenities.html', destination: '/amenities', permanent: true },
      { source: '/rooms.html', destination: '/rooms', permanent: true },
      { source: '/rates.html', destination: '/rates', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/location.html', destination: '/location', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/occasions.html', destination: '/occasions', permanent: true },
    ]
  },
}

export default nextConfig
