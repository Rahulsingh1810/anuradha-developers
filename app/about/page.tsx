'use client'

import {
  Shield,
  Award,
  Lightbulb,
  HardHat,
  Leaf,
  Heart,
  Star,
  Target,
  Eye,
} from 'lucide-react'

const coreValues = [
  {
    icon: Shield,
    label: 'Integrity',
    description:
      'We uphold the highest ethical standards in every transaction, building relationships founded on honesty, transparency, and mutual respect.',
  },
  {
    icon: Award,
    label: 'Quality',
    description:
      'Every project reflects our obsession with quality — from material selection and structural engineering to the finest finishing details.',
  },
  {
    icon: Lightbulb,
    label: 'Innovation',
    description:
      'We embrace modern construction technologies and creative design approaches to deliver smarter, more efficient building solutions.',
  },
  {
    icon: HardHat,
    label: 'Safety',
    description:
      'Zero-compromise safety protocols protect our workforce and communities. Every site follows rigorous safety standards at all times.',
  },
  {
    icon: Leaf,
    label: 'Sustainability',
    description:
      'We integrate eco-friendly practices and sustainable materials into our projects, building responsibly for future generations.',
  },
  {
    icon: Heart,
    label: 'Customer Satisfaction',
    description:
      'Client happiness is our ultimate benchmark. We listen, adapt, and go the extra mile to exceed expectations on every project.',
  },
  {
    icon: Star,
    label: 'Professional Excellence',
    description:
      'Our team of skilled engineers and architects bring deep expertise, disciplined execution, and a relentless pursuit of perfection.',
  },
]

const missions = [
  'Deliver world-class construction services with uncompromising quality.',
  'Complete projects safely and on schedule.',
  'Build long-term relationships through trust, transparency, and professionalism.',
  'Adopt modern engineering practices and sustainable construction methods.',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/95 to-gold/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
            About Us
          </span>
          <h1 className="font-heading text-6xl md:text-7xl font-light text-cream leading-[1.05] mb-6 text-balance">
            Our <span className="text-gold font-semibold italic">Story</span>
          </h1>
          <p className="text-gold-soft/70 text-lg max-w-2xl leading-relaxed">
            Established in 2017, Anuradha Developers & Design Group has grown into
            a trusted name in construction and infrastructure across Telangana and
            Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
                The Beginning
              </span>
              <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight mb-6 text-balance">
                Founded by{' '}
                <span className="text-gold font-semibold italic">
                  Mr. Dasari Prasad
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Anuradha Developers & Design Group was established in 2017 by
                  Mr. Dasari Prasad with a vision to deliver high-quality
                  construction and infrastructure solutions through innovation,
                  integrity, and engineering excellence.
                </p>
                <p>
                  Since its inception, the company has grown into a trusted name
                  in residential construction, layout development, industrial
                  infrastructure, and government projects across Telangana and
                  Andhra Pradesh.
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Registered under Rule 3, Form II — Registration No.
                  SEA/HYD/ALO/03/46340/2017
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5">
                <img
                  src="/profile.png"
                  alt="Mr. Dasari Prasad — Founder, Anuradha Developers & Design Group"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-lg">
                <p className="font-heading text-3xl font-bold text-gold">2017</p>
                <p className="text-muted-foreground text-xs">Year Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registered Office */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center">
            <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
              Registered Office
            </span>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Anuradha Developers & Design Group
            </h3>
            <address className="not-italic text-muted-foreground leading-relaxed">
              Ambience Avenue, Block B, Flat No. 204<br />
              Srinagar Colony, Hyderabad – 500073<br />
              Telangana, India
            </address>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-espresso rounded-3xl p-10 md:p-12">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <Eye size={22} className="text-gold" />
              </div>
              <h2 className="font-heading text-4xl font-semibold text-cream mb-6">
                Vision
              </h2>
              <p className="text-gold-soft/70 leading-relaxed">
                To become one of India&apos;s most trusted construction and
                infrastructure companies by delivering innovative, sustainable, and
                high-quality developments that create lasting value for clients and
                communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-3xl p-10 md:p-12">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Target size={22} className="text-gold" />
              </div>
              <h2 className="font-heading text-4xl font-semibold text-espresso mb-6">
                Mission
              </h2>
              <ul className="space-y-4">
                {missions.map((mission) => (
                  <li
                    key={mission}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — Enhanced */}
      <section className="relative py-28 bg-espresso overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso to-gold/5" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(200,169,110,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold/40" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                What Drives Us
              </span>
              <span className="w-12 h-px bg-gold/40" />
            </div>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight text-balance mb-5">
              Our Core{' '}
              <span className="text-gold font-semibold italic">Values</span>
            </h2>
            <p className="text-gold-soft/50 text-base max-w-2xl mx-auto leading-relaxed">
              These seven principles form the foundation of every project we
              undertake, every relationship we build, and every decision we make.
            </p>
          </div>

          {/* Values Grid — Top row: 4, Bottom row: 3 centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {coreValues.slice(0, 4).map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.label}
                  className="group relative bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-gold/30 transition-all duration-500"
                >
                  {/* Number badge */}
                  <span className="absolute top-5 right-5 font-heading text-4xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
                    0{i + 1}
                  </span>

                  <div className="w-13 h-13 rounded-2xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-500">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                    {value.label}
                  </h3>
                  <p className="text-gold-soft/45 text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom gold accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/40 transition-all duration-500" />
                </div>
              )
            })}
          </div>

          {/* Bottom row — 3 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[75%] mx-auto">
            {coreValues.slice(4).map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.label}
                  className="group relative bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-gold/30 transition-all duration-500"
                >
                  {/* Number badge */}
                  <span className="absolute top-5 right-5 font-heading text-4xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
                    0{i + 5}
                  </span>

                  <div className="w-13 h-13 rounded-2xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-500">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                    {value.label}
                  </h3>
                  <p className="text-gold-soft/45 text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom gold accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/40 transition-all duration-500" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
