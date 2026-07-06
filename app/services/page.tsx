'use client'

import Link from 'next/link'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import {
  Home,
  LayoutGrid,
  Factory,
  Landmark,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'We specialise in building premium villas, independent houses, and residential apartment projects. From turnkey construction solutions to renovation and redevelopment — we deliver homes that stand the test of time.',
    features: [
      'Premium villas and independent houses',
      'Residential apartment projects',
      'Turnkey construction solutions',
      'Renovation and redevelopment',
      'Project planning and execution',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Layout Development',
    description:
      'End-to-end residential and commercial layout development with complete site infrastructure, including internal roads, drainage systems, water supply networks, and utility installations.',
    features: [
      'Residential and commercial layouts',
      'Site infrastructure development',
      'Internal roads and drainage',
      'Water supply and utility networks',
      'End-to-end project execution',
    ],
  },
  {
    icon: Factory,
    title: 'Industrial & Infrastructure',
    description:
      'Comprehensive civil works for industrial facilities, renewable energy infrastructure, warehousing, institutional buildings, and both public and private infrastructure development projects.',
    features: [
      'Civil works for industrial facilities',
      'Renewable energy infrastructure',
      'Warehousing and institutional buildings',
      'Public and private infrastructure',
      'Large-scale project management',
    ],
  },
  {
    icon: Landmark,
    title: 'Government Projects',
    description:
      'We have successfully executed civil and infrastructure works for prestigious government organisations, demonstrating our capability to deliver high-quality results under stringent requirements.',
    features: [
      'Telangana Tourism — Civil works',
      'Telangana State Warehousing Corporation',
      'Public infrastructure development',
      'Compliance with government standards',
      'Timely project delivery',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/95 to-gold/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
            What We Do
          </span>
          <h1 className="font-heading text-6xl md:text-7xl font-light text-cream leading-[1.05] mb-6 text-balance">
            Our <span className="text-gold font-semibold italic">Services</span>
          </h1>
          <p className="text-gold-soft/70 text-lg max-w-2xl leading-relaxed">
            From residential construction to large-scale infrastructure — we deliver
            engineering excellence across every project we undertake.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  !isEven ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:order-2 lg:direction-ltr' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Icon size={26} className="text-gold" />
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl font-semibold text-espresso mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-foreground text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Card */}
                <div
                  className={`${
                    !isEven ? 'lg:order-1 lg:direction-ltr' : ''
                  }`}
                >
                  <div className="bg-card border border-border rounded-3xl p-10 md:p-14 text-center hover:shadow-xl hover:shadow-gold/8 transition-shadow duration-300">
                    <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Icon size={36} className="text-gold" />
                    </div>
                    <p className="font-heading text-2xl font-semibold text-foreground">
                      {service.title}
                    </p>
                    <div className="hairline mt-6 mx-auto max-w-[60%]" />
                    <p className="text-muted-foreground text-sm mt-4">
                      {service.features.length} specialisations
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
              Residential Portfolio
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight text-balance">
              Delivering <span className="text-gold font-semibold italic">Quality</span> Across Regions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Hyderabad Projects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Successfully completed several residential projects across Hyderabad,
                earning the trust of clients through quality workmanship, timely
                delivery, and customer-focused execution.
              </p>
            </div>
            <div className="bg-espresso border border-gold/20 rounded-3xl p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-[10px] tracking-widest uppercase font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Upcoming
              </div>
              <h3 className="font-heading text-2xl font-semibold text-cream mb-3">
                Visakhapatnam — MVP Beach Road
              </h3>
              <p className="text-gold-soft/70 leading-relaxed">
                Currently launching a premium residential development on MVP Beach
                Road, Visakhapatnam — marking our expansion into Andhra Pradesh with
                contemporary design and superior construction quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0">
          <img
            src="/property-6.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-espresso/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-espresso/90 via-espresso/70 to-espresso/90" />
        </div>

        {/* Dot pattern */}
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
              Let&apos;s Build Together
            </span>
            <span className="w-10 h-px bg-gold/50" />
          </div>

          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6 text-balance">
            Ready to Start Your
            <br />
            <span className="text-gold font-semibold italic">Project?</span>
          </h2>
          <p className="text-gold-soft/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get in touch with our team to discuss your construction or infrastructure
            requirements. We&apos;re here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-espresso font-semibold text-sm tracking-wide hover:bg-gold-soft transition-colors shadow-lg shadow-gold/20"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+917095949111"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-gold/30 text-gold font-semibold text-sm tracking-wide hover:bg-gold/10 transition-colors"
            >
              Call +91 70959 49111
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
