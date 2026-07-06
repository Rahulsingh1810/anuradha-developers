import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const developers = [
  'Sobha Developers',
  'Prestige Group',
  'Mana Projects',
  'Arvind SmartSpaces',
  'Abhee Ventures',
  'CKPC Properties',
]

export function Footer() {
  return (
    <footer className="bg-[#5c2967] text-[#F5D78E]/80">
      {/* Top divider */}
      <div className="h-px bg-[#F5D78E]/20" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center mb-4">
            <img
              src="/footer-logo.png"
              alt="Purple Nest Logo"
              className="h-14 w-auto object-contain  "
            />
          </Link>
          <p className="text-sm leading-relaxed text-[#F5D78E]/60 mb-6">
            Finding Your Perfect Nest. Bengaluru&apos;s trusted real estate advisory partner, committed to transparent guidance and seamless property journeys.
          </p>
          <p className="text-xs tracking-widest uppercase text-[#F5D78E]/40 font-semibold">
            Est. &mdash; Bengaluru
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-[#F5D78E] text-lg font-semibold mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-[#F5D78E] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Partners */}
        <div>
          <h3 className="font-heading text-[#F5D78E] text-lg font-semibold mb-5 tracking-wide">
            Developer Partners
          </h3>
          <ul className="flex flex-col gap-3">
            {developers.map((dev) => (
              <li key={dev} className="text-sm">
                {dev}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-[#F5D78E] text-lg font-semibold mb-5 tracking-wide">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="tel:+919902930927"
                className="flex items-start gap-3 text-sm hover:text-[#F5D78E] transition-colors"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#F5D78E]" />
                <span>+91 99029 30927</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+917483790927"
                className="flex items-start gap-3 text-sm hover:text-[#F5D78E] transition-colors"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#F5D78E]" />
                <span>+91 74837 90927</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:Purplenest27@gmail.com"
                className="flex items-start gap-3 text-sm hover:text-[#F5D78E] transition-colors"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#F5D78E]" />
                <span>Purplenest27@gmail.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#F5D78E]" />
                <address className="not-italic leading-relaxed">
                  Ground Floor, No 40, 6th Sector,<br />
                  14th Cross, HSR Layout,<br />
                  Bengaluru – 560102
                </address>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-[#F5D78E]/10">
  <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#F5D78E]/40">
    <p>&copy; {new Date().getFullYear()} Purple Nest. All rights reserved.</p>

    <p className="italic font-heading text-sm text-[#F5D78E]/40">
      &ldquo;Finding Your Perfect Nest.&rdquo;
    </p>

    <p className="text-xs text-[#F5D78E]/40">
      Website Developed &amp; Maintained by{" "}
      <a
        href="https://www.quantech.pro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F5D78E] hover:text-white transition-colors duration-300"
      >
        QuanTech
      </a>
    </p>
  </div>
</div>
    </footer>
  )
}
