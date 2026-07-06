import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Purple Nest — Finding Your Perfect Nest',
  description:
    'Purple Nest is a Bengaluru-based real estate advisory and channel partner firm committed to connecting homebuyers and investors with India\'s most trusted developers.',
  keywords: [
    'real estate',
    'Bengaluru',
    'property',
    'advisory',
    'Sobha',
    'Prestige',
    'Purple Nest',
    'buy property in Bangalore',
    'real estate investments',
    'apartments in Bangalore',
    'villas in Bangalore',
    'commercial properties',
    'real estate advisory Bengaluru',
    'luxury homes Bengaluru',
    'new launch projects'
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://purplenest.space'),
  verification: {
    google: '35af7cUBlDqwmn-WwaI0tiKg3Y1V93DFq8s1p58WYxE',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Purple Nest — Finding Your Perfect Nest',
    description: 'Purple Nest is a Bengaluru-based real estate advisory and channel partner firm committed to connecting homebuyers and investors with India\'s most trusted developers.',
    url: 'https://purplenest.space',
    siteName: 'Purple Nest',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Purple Nest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple Nest — Finding Your Perfect Nest',
    description: 'Purple Nest is a Bengaluru-based real estate advisory and channel partner firm committed to connecting homebuyers and investors with India\'s most trusted developers.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5c2967',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
