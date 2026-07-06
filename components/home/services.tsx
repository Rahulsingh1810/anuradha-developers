'use client'

import { motion, useReducedMotion, Variants } from 'framer-motion'
import { Home, LayoutGrid, Factory, Landmark } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'Premium villas, independent houses, residential apartments, turnkey construction solutions, and renovation & redevelopment projects.',
  },
  {
    icon: LayoutGrid,
    title: 'Layout Development',
    description:
      'Residential and commercial layout development with complete site infrastructure — internal roads, drainage, water supply, and utility networks.',
  },
  {
    icon: Factory,
    title: 'Industrial & Infrastructure',
    description:
      'Civil works for industrial facilities, renewable energy infrastructure, warehousing, institutional buildings, and public-private infrastructure development.',
  },
  {
    icon: Landmark,
    title: 'Government Projects',
    description:
      'Successfully executed civil and infrastructure works for Telangana Tourism and Telangana State Warehousing Corporation.',
  },
]

export function Expertise() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants: Variants = prefersReducedMotion
    ? {}
    : {
        initial: {},
        animate: { transition: { staggerChildren: 0.08 } },
      }

  const cardVariants: Variants = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }

  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight mb-4 text-balance">
            Comprehensive
            <br />
            <span className="text-gold font-semibold italic">Construction Solutions</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From residential developments to large-scale infrastructure projects,
            Anuradha Developers & Design Group delivers end-to-end construction
            excellence across every sector.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertiseAreas.map((area) => {
            const Icon = area.icon
            return (
              <motion.article
                key={area.title}
                variants={cardVariants}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-espresso transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-gold group-hover:text-gold transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
