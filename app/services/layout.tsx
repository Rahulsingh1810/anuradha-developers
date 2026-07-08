import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Anuradha Developers & Design Group',
  description: 'Explore our services including residential construction, layout development, industrial & infrastructure projects, government projects, and renewable energy.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | Anuradha Developers & Design Group',
    description: 'Explore our services including residential construction, layout development, industrial & infrastructure projects, and more.',
    url: 'https://anuradhadevelopers.in/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
