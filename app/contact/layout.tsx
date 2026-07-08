import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Anuradha Developers & Design Group',
  description: 'Get in touch with Anuradha Developers & Design Group for your construction and infrastructure needs. Reach out via phone or email, or visit our registered office.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Anuradha Developers & Design Group',
    description: 'Get in touch with Anuradha Developers & Design Group for your construction and infrastructure needs.',
    url: 'https://anuradhadevelopers.in/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
