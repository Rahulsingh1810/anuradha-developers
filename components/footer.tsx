import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const collaborations = [
  'Somasila Solar Power Pvt Ltd',
  'Merlin Group',
  'Telangana Tourism',
  'TS Warehousing Corporation',
]

export function Footer() {
  return (
    <footer className="bg-espresso text-gold-soft/80">
      {/* Top divider */}
      <div className="h-px bg-gold/20" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center mb-4">
            <img
              src="/logo-2.png"
              alt="Anuradha Developers Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gold-soft/60 mb-6">
            Building Excellence. Creating Value. Delivering Trust. Hyderabad&apos;s trusted
            construction and infrastructure partner since 2017.
          </p>
          <p className="text-xs tracking-widest uppercase text-gold-soft/40 font-semibold">
            Est. 2017 &mdash; Hyderabad
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-gold text-lg font-semibold mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Collaborations */}
        <div>
          <h3 className="font-heading text-gold text-lg font-semibold mb-5 tracking-wide">
            Our Collaborations
          </h3>
          <ul className="flex flex-col gap-3">
            {collaborations.map((collab) => (
              <li key={collab} className="text-sm">
                {collab}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-gold text-lg font-semibold mb-5 tracking-wide">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="tel:+917095949111"
                className="flex items-start gap-3 text-sm hover:text-gold transition-colors"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>+91 70959 49111</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+919849151190"
                className="flex items-start gap-3 text-sm hover:text-gold transition-colors"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>+91 98491 51190</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:pdasari1978@gmail.com"
                className="flex items-start gap-3 text-sm hover:text-gold transition-colors"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>pdasari1978@gmail.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <address className="not-italic leading-relaxed">
                  Ambience Avenue, Block B, Flat No. 204,<br />
                  Srinagar Colony,<br />
                  Hyderabad – 500073, Telangana
                </address>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gold-soft/40">
          <p>&copy; {new Date().getFullYear()} Anuradha Developers & Design Group. All rights reserved.</p>

          <p className="italic font-heading text-sm text-gold-soft/40">
            &ldquo;Building Excellence. Creating Value. Delivering Trust.&rdquo;
          </p>

          <p className="text-xs text-gold-soft/40">
            Website Developed &amp; Maintained by{" "}
            <a
              href="https://www.quantech.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors duration-300"
            >
              QuanTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
