'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="property-2.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center "
        />
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#F5D78E]/30 hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5D78E]/40 bg-[#F5D78E]/10 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D78E] animate-pulse" />
            <span className="text-[#F5D78E] text-xs tracking-widest uppercase font-semibold">
              Bengaluru&apos;s Trusted Property Advisory
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl font-light text-[#faf8f5] leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Finding Your
            <br />
            <span className="text-[#F5D78E] font-semibold italic">Perfect Nest</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#F5D78E]/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
          >
            We connect discerning homebuyers and investors with Bengaluru&apos;s finest residential
            and commercial properties through personalised guidance, transparent advice, and
            end-to-end support.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5D78E] text-[#5c2967] font-semibold text-sm tracking-wide hover:bg-[#fae9bc] transition-colors shadow-lg shadow-[#F5D78E]/20"
            >
              Explore Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#F5D78E]/40 text-[#F5D78E] font-semibold text-sm tracking-wide hover:bg-[#F5D78E]/10 transition-colors"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Stats cards */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex-shrink-0 grid grid-cols-2 gap-4 w-full lg:w-80"
        >
          {[
            { value: '18+', label: 'Years of Experience' },
            { value: '500+', label: 'Happy Families' },
            { value: '5+', label: 'Trusted Developers' },
            { value: '₹100Cr+', label: 'Properties Advised' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#faf8f5]/10 backdrop-blur-sm border border-[#F5D78E]/20 rounded-2xl p-5 text-center"
            >
              <p className="font-heading text-3xl font-bold text-[#F5D78E]">{stat.value}</p>
              <p className="text-[#F5D78E]/60 text-xs mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F5D78E]/50 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}
