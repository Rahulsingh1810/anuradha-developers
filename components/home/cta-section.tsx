import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark background image */}
      <div className="absolute inset-0">
        <img
          src="/property-8.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/90 via-espresso/70 to-espresso/90" />
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(200,169,110,0.5) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Gold border accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gold/50" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                Let&apos;s Build Together
              </span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6 text-balance">
              Ready to Build
              <br />
              Your <span className="text-gold font-semibold italic">Vision?</span>
            </h2>

            <p className="text-gold-soft/60 text-lg leading-relaxed max-w-lg mb-10">
              Whether it&apos;s a premium residence, a commercial layout, or an
              infrastructure project — our team brings engineering excellence and
              unwavering commitment to every build.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-espresso font-semibold text-sm tracking-wide hover:bg-gold-soft transition-colors shadow-lg shadow-gold/20"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-gold/30 text-gold font-semibold text-sm tracking-wide hover:bg-gold/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — Quick contact cards */}
          <div className="space-y-4">
            <a
              href="tel:+917095949111"
              className="flex items-center gap-5 bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:bg-cream/10 hover:border-gold/25 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                <Phone size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold-soft/50 text-xs tracking-widest uppercase font-semibold mb-1">
                  Call Us
                </p>
                <p className="text-cream text-lg font-heading font-semibold">
                  +91 70959 49111
                </p>
              </div>
            </a>

            <a
              href="tel:+919849151190"
              className="flex items-center gap-5 bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:bg-cream/10 hover:border-gold/25 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                <Phone size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold-soft/50 text-xs tracking-widest uppercase font-semibold mb-1">
                  Alternate Number
                </p>
                <p className="text-cream text-lg font-heading font-semibold">
                  +91 98491 51190
                </p>
              </div>
            </a>

            <div className="bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-6">
              <p className="text-gold-soft/50 text-xs tracking-widest uppercase font-semibold mb-2">
                Registered Office
              </p>
              <address className="not-italic text-cream/80 text-sm leading-relaxed">
                Ambience Avenue, Block B, Flat No. 204<br />
                Srinagar Colony, Hyderabad – 500073<br />
                Telangana, India
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
