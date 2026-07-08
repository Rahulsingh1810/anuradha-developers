'use client'

import Link from 'next/link'
import { motion, useReducedMotion, Variants } from 'framer-motion'
import {
  Home,
  LayoutGrid,
  Factory,
  Landmark,
  Building2,
  TreePine,
  Sparkles,
  Sun,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    image: '/service-residential.png',
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
    image: '/service-layout.png',
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
    image: '/service-industrial.png',
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
    image: '/govt.png',
    description:
      'We have successfully executed civil and infrastructure works for prestigious government organisations, demonstrating our capability to deliver high-quality results under stringent requirements.',
    features: [
      'Telangana Tourism — Civil works',
      'Telangana State Warehousing Corporation',
      'Public infrastructure development',
    ],
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    image: '/renewable.jpeg',
    description:
      'Delivering civil construction and installation support for utility-scale solar and clean energy projects. Our expertise spans site development, infrastructure creation, and project execution.',
    features: [
      'Utility-scale solar projects',
      'Site development & infrastructure',
      'Installation support services',
      'Clean energy facilities',
      'Future-ready infrastructure',
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image — always first in DOM for mobile */}
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5 group">
                    <div className="aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay label */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent p-6 pt-16">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <p className="font-heading text-xl font-semibold text-cream">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:order-1' : ''}>
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
              </div>
            )
          })}
        </div>
      </section>

      {/* Current & Upcoming Projects */}
      <section className="py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
              Our Projects
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight text-balance">
              Current &amp; <span className="text-gold font-semibold italic">Upcoming Projects</span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Project 1 — Hitech City Apartment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5 group">
                  <div className="aspect-[4/3]">
                    <img
                      src="/property.jpeg"
                      alt="Premium Semi-Gated Community Apartment at Hitech City"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent p-6 pt-16">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <Building2 size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-heading text-xl font-semibold text-cream">
                          Premium Apartment Community
                        </p>
                        <p className="text-gold-soft/60 text-xs tracking-wide">
                          Hitech City, Hyderabad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold text-[10px] tracking-widest uppercase font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Ongoing
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Building2 size={26} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl font-semibold text-espresso leading-tight">
                      Premium Semi-Gated Community Apartment
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Hitech City, Hyderabad
                    </p>
                  </div>
                </div>
                <p className="text-gold font-heading text-lg italic mb-3">
                  Experience the perfect blend of modern living, convenience, and comfort.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Enjoy a well-planned lifestyle in one of Hyderabad&apos;s most sought-after locations, surrounded by excellent connectivity, urban conveniences, and a vibrant neighborhood. Designed for families and professionals alike, this thoughtfully developed community offers the ideal balance of privacy, comfort, and accessibility.
                </p>
                <ul className="space-y-2.5">
                  {['Prime Hitech City location', 'Semi-gated community with modern amenities', 'Excellent connectivity & urban conveniences', 'Designed for families & professionals'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project 2 — Infrastructure & Warehousing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image — always first in DOM for mobile */}
              <div className="lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5 group">
                  <div className="aspect-[4/3]">
                    <img
                      src="/project-warehouse.png"
                      alt="Modern Warehouse Complexes"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent p-6 pt-16">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <Factory size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-heading text-xl font-semibold text-cream">
                          Warehouse Infrastructure
                        </p>
                        <p className="text-gold-soft/60 text-xs tracking-wide">
                          TS Warehousing Corporation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-espresso/10 text-espresso text-[10px] tracking-widest uppercase font-semibold mb-5">
                  Infrastructure &amp; Warehousing
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Factory size={26} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl font-semibold text-espresso leading-tight">
                      Modern Warehouse Complexes
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Telangana State Warehousing Corporation
                    </p>
                  </div>
                </div>
                <p className="text-gold font-heading text-lg italic mb-3">
                  Constructing modern warehouse complexes for the Telangana State Warehousing Corporation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Successfully constructing modern warehouse complexes for the Telangana State Warehousing Corporation, delivering high-quality, durable, and efficient storage infrastructure that supports the state&apos;s agricultural and logistics network.
                </p>
                <ul className="space-y-2.5">
                  {['Government-grade warehouse construction', 'High-quality, durable infrastructure', 'Efficient storage solutions', 'Supporting agricultural & logistics network'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project 3 — Vikarabad Farm Plots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5 group">
                  <div className="aspect-[4/3]">
                    <img
                      src="/project-vikarabad.png"
                      alt="Premium Gated Farm Plot Community at Vikarabad"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent p-6 pt-16">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <TreePine size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-heading text-xl font-semibold text-cream">
                          Gated Farm Plots
                        </p>
                        <p className="text-gold-soft/60 text-xs tracking-wide">
                          Jaidupalli, Vikarabad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-[10px] tracking-widest uppercase font-semibold mb-5">
                  <Sparkles size={12} />
                  Launching Soon
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <TreePine size={26} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl font-semibold text-espresso leading-tight">
                      Premium Gated Farm Plotting Community
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Jaidupalli, Vikarabad — 50 Acres
                    </p>
                  </div>
                </div>
                <p className="text-gold font-heading text-lg italic mb-3">
                  Experience the perfect blend of nature, greenery, and peaceful living.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Escape the city&apos;s hustle and embrace a serene lifestyle surrounded by lush landscapes, fresh air, and a thriving green ecosystem. Designed for nature lovers, weekend retreats, and long-term investment, this thoughtfully planned gated community offers the ideal balance of comfort and sustainability.
                </p>
                <div className="bg-gold/5 border border-gold/20 rounded-2xl p-4 mb-6">
                  <p className="font-heading text-xl font-semibold text-espresso italic">
                    A Touch of Nature. A Greener Tomorrow.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Own your piece of paradise in the heart of Vikarabad.
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {['50 Acres of premium gated farm plots', 'Lush landscapes & green ecosystem', 'Ideal for weekend retreats & investment', 'Thoughtfully planned sustainable community'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
