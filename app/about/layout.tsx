import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Anuradha Developers & Design Group',
  description: 'Learn about Anuradha Developers & Design Group, our story, core values, and mission to deliver world-class construction services with uncompromising quality.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Anuradha Developers & Design Group',
    description: 'Learn about Anuradha Developers & Design Group, our story, core values, and mission.',
    url: 'https://anuradhadevelopers.in/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
