import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { Footer } from '@/components/footer'
import { SmoothScrollProvider } from '@/lib/smooth-scroll'
import { LodgingStructuredData } from '@/components/structured-data'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Santiagos Resort | 40-Guest Private Container Resort in Alfonso, Tagaytay",
  description:
    "Whole-property private resort in Alfonso, Cavite with private pool, videoke lounge, billiards, arcade, basketball court, and 8 bathrooms. Accommodates up to 40 guests.",
  metadataBase: new URL('https://santiagosresort.com'),
  alternates: {
    canonical: 'https://santiagosresort.com',
  },
  openGraph: {
    title: "Santiagos Resort — Whole-Property Industrial Container Resort",
    description:
      "Private pool, videoke lounge, billiards, 8 bathrooms, and 20 beds for 40 guests in Alfonso, Tagaytay highlands.",
    url: 'https://santiagosresort.com',
    siteName: "Santiagos Resort",
    images: [
      {
        url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/b800534f-c860-4d16-a179-fb2c4a90a4b8.jpeg?im_w=1920',
        width: 1920,
        height: 1080,
        alt: "Santiagos Resort evening private pool and industrial container architecture in Alfonso Tagaytay",
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Santiagos Resort — 40-Guest Private Industrial Container Resort",
    description: "Private pool, 8 bathrooms, videoke lounge, billiards, and 20 beds in Alfonso, Tagaytay.",
    images: ['https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/b800534f-c860-4d16-a179-fb2c4a90a4b8.jpeg?im_w=1920'],
  },
  icons: {
    icon: [
      { url: '/icon-32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${greatVibes.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <LodgingStructuredData />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased flex flex-col selection:bg-terra/20 selection:text-terra-dark pb-24 md:pb-0">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyBookingBar />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
