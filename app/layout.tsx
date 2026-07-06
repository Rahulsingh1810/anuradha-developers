import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Anuradha Developers & Design Group — Building Excellence, Creating Value',
  description:
    'Anuradha Developers & Design Group is a Hyderabad-based construction and infrastructure company delivering high-quality residential, industrial, and government projects since 2017.',
  keywords: [
    'construction company Hyderabad',
    'Anuradha Developers',
    'residential construction',
    'layout development',
    'industrial infrastructure',
    'government projects Telangana',
    'villas Hyderabad',
    'turnkey construction',
    'Dasari Prasad',
    'Visakhapatnam real estate',
    'construction Telangana',
    'infrastructure development',
  ],
  metadataBase: new URL('https://anuradhadevelopers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Anuradha Developers & Design Group — Building Excellence, Creating Value',
    description:
      'Delivering high-quality construction and infrastructure solutions through innovation, integrity, and engineering excellence since 2017.',
    url: 'https://anuradhadevelopers.com',
    siteName: 'Anuradha Developers & Design Group',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anuradha Developers & Design Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuradha Developers & Design Group — Building Excellence',
    description:
      'Delivering high-quality construction and infrastructure solutions through innovation, integrity, and engineering excellence since 2017.',
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
  themeColor: '#c8a96e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${geistMono.variable} bg-background`}
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
