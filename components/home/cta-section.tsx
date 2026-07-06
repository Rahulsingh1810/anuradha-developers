import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-28 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative rounded-[2.5rem] bg-[#5c2967] overflow-hidden px-8 md:px-16 py-20 text-center">
          {/* Background image overlay */}
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=70"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
          />
          <div className="relative z-10">
            <span className="inline-block text-[#F5D78E] text-xs tracking-widest uppercase font-semibold mb-6">
              Start Your Journey
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#faf8f5] leading-tight mb-6 text-balance">
              Ready to Find Your
              <br />
              <span className="text-[#F5D78E] font-semibold italic">Perfect Home?</span>
            </h2>
            <p className="text-[#F5D78E]/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Let our experienced team guide you to the right property. Book a free consultation
              today and take the first step towards your dream home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5D78E] text-[#5c2967] font-semibold text-sm tracking-wide hover:bg-[#fae9bc] transition-colors shadow-lg shadow-[#F5D78E]/20"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#F5D78E]/40 text-[#F5D78E] font-semibold text-sm tracking-wide hover:bg-[#F5D78E]/10 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
