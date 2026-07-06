'use client'

import { motion, useReducedMotion, Variants } from 'framer-motion'
import { Home, Building2, TrendingUp, Shield, Users, FileText } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Advisory',
    description:
      'Expert guidance in finding your dream home — apartments, villas, and row houses across Bengaluru\'s finest neighbourhoods.',
  },
  {
    icon: Building2,
    title: 'Commercial Properties',
    description:
      'Strategic commercial space advisory for office, retail, and mixed-use investments with strong long-term value.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Consulting',
    description:
      'Data-driven insights into Bengaluru\'s property market to maximise your real estate investment returns.',
  },
  {
    icon: Shield,
    title: 'Transparent Guidance',
    description:
      'Honest, unbiased recommendations based solely on your requirements — never on developer incentives.',
  },
  {
    icon: Users,
    title: 'Personalised Site Visits',
    description:
      'We coordinate and accompany you on property visits, ensuring you receive complete project information.',
  },
  {
    icon: FileText,
    title: 'End-to-End Support',
    description:
      'From first enquiry through documentation, home loans, and final registration — we are with you every step.',
  },
]

export function Services() {
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
    <section className="py-28 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#5c2967] text-xs tracking-widest uppercase font-semibold mb-4 block">
            What We Offer
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-[#1a0d2e] leading-tight mb-4 text-balance">
            A Complete Property
            <br />
            <span className="text-[#5c2967] font-semibold italic">Advisory Experience</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From first conversation to final registration, Purple Nest provides a seamless,
            personalised journey built on trust and expertise.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-[#5c2967]/30 hover:shadow-xl hover:shadow-[#5c2967]/8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5c2967]/10 flex items-center justify-center mb-6 group-hover:bg-[#5c2967] transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#5c2967] group-hover:text-[#F5D78E] transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
