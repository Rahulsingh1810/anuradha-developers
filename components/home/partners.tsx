'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Handshake, Sun, Building2, MapPin } from 'lucide-react'

const collaborations = [
  {
    name: 'Somasila Solar Power Pvt Ltd',
    description: 'Civil and infrastructure works',
    icon: Sun,
  },
  {
    name: 'Merlin Group',
    description: 'Civil construction and development works',
    icon: Building2,
  },
  {
    name: 'Telangana Tourism',
    description: 'Government civil and infrastructure projects',
    icon: MapPin,
  },
  {
    name: 'TS Warehousing Corporation',
    description: 'Warehousing infrastructure development',
    icon: Building2,
  },
]

const highlights = [
  {
    title: 'Hyderabad Portfolio',
    description:
      'Successfully completed several residential projects across Hyderabad, earning the trust of clients through quality workmanship, timely delivery, and customer-focused execution.',
  },
  {
    title: 'Visakhapatnam Expansion',
    description:
      'Currently launching a premium residential development on MVP Beach Road, Visakhapatnam — marking expansion into Andhra Pradesh with contemporary design and superior construction quality.',
  },
]

export function Collaborations() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <>
      {/* Ongoing Collaborations */}
      <section className="py-20 bg-espresso">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-gold/60 text-xs tracking-widest uppercase mb-4 font-semibold">
            Ongoing Collaborations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream text-center mb-12 text-balance">
            Trusted <span className="text-gold font-semibold italic">Partners</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborations.map((collab) => {
              const Icon = collab.icon
              return (
                <div
                  key={collab.name}
                  className="px-6 py-5 rounded-2xl bg-gold/10 border border-gold/20 hover:bg-gold/15 hover:border-gold/40 transition-colors cursor-default text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <p className="font-heading text-gold text-lg font-semibold leading-tight">
                    {collab.name}
                  </p>
                  <p className="text-gold-soft/50 text-[11px] tracking-widest uppercase mt-1">
                    {collab.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-xl mb-16">
            <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
              Our Portfolio
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight text-balance">
              Projects Across{' '}
              <span className="text-gold font-semibold italic">
                Two States
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <motion.article
                key={h.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg hover:shadow-gold/8 transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Handshake size={20} className="text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {h.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
