'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Building2, Factory, TreePine, CheckCircle2, Sparkles } from 'lucide-react'

const projects = [
  {
    badge: 'Ongoing',
    badgeColor: 'bg-gold/20 text-gold',
    icon: Building2,
    title: 'Premium Semi-Gated Community Apartment',
    location: 'Hitech City, Hyderabad',
    image: '/property.jpeg',
    description:
      'Experience the perfect blend of modern living, convenience, and comfort.',
    body: 'Enjoy a well-planned lifestyle in one of Hyderabad\'s most sought-after locations, surrounded by excellent connectivity, urban conveniences, and a vibrant neighborhood. Designed for families and professionals alike, this thoughtfully developed community offers the ideal balance of privacy, comfort, and accessibility.',
    highlights: [
      'Prime Hitech City location',
      'Semi-gated community with modern amenities',
      'Excellent connectivity & urban conveniences',
      'Designed for families & professionals',
    ],
  },
  {
    badge: 'Infrastructure & Warehousing',
    badgeColor: 'bg-espresso/10 text-espresso',
    icon: Factory,
    title: 'Modern Warehouse Complexes',
    location: 'Telangana State Warehousing Corporation',
    image: '/project-warehouse.png',
    description:
      'Constructing modern warehouse complexes for the Telangana State Warehousing Corporation.',
    body: 'Successfully constructing modern warehouse complexes for the Telangana State Warehousing Corporation, delivering high-quality, durable, and efficient storage infrastructure that supports the state\'s agricultural and logistics network.',
    highlights: [
      'Government-grade warehouse construction',
      'High-quality, durable infrastructure',
      'Efficient storage solutions',
      'Supporting agricultural & logistics network',
    ],
  },
  {
    badge: 'Launching Soon',
    badgeColor: 'bg-green-100 text-green-700',
    icon: TreePine,
    title: 'Premium Gated Farm Plotting Community',
    location: 'Jaidupalli, Vikarabad',
    image: '/project-vikarabad.png',
    description:
      'Experience the perfect blend of nature, greenery, and peaceful living.',
    body: 'Escape the city\'s hustle and embrace a serene lifestyle surrounded by lush landscapes, fresh air, and a thriving green ecosystem. Designed for nature lovers, weekend retreats, and long-term investment, this thoughtfully planned gated community offers the ideal balance of comfort and sustainability.',
    tagline: 'A Touch of Nature. A Greener Tomorrow.',
    ctaText: 'Own your piece of paradise in the heart of Vikarabad.',
    highlights: [
      '50 Acres of premium gated farm plots',
      'Lush landscapes & green ecosystem',
      'Ideal for weekend retreats & investment',
      'Thoughtfully planned sustainable community',
    ],
  },
]

export function ProjectsShowcase() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      }

  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
            Our Projects
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-espresso leading-tight mb-4 text-balance">
            Current &{' '}
            <span className="text-gold font-semibold italic">
              Upcoming Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From premium residential communities to large-scale infrastructure — 
            explore our latest developments shaping the future of living and growth.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-gold/5 group">
                    <div className="aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent p-6 pt-16">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-heading text-xl font-semibold text-cream">
                            {project.title}
                          </p>
                          <p className="text-gold-soft/60 text-xs tracking-wide">
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] tracking-widest uppercase font-semibold mb-5"
                    style={{ }}
                  >
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${project.badgeColor}`}>
                      {project.badge === 'Launching Soon' && (
                        <Sparkles size={12} />
                      )}
                      {project.badge === 'Ongoing' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      )}
                      {project.badge}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl font-semibold text-espresso leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gold font-heading text-lg italic mb-3">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.body}
                  </p>

                  {/* Tagline for farm plots */}
                  {project.tagline && (
                    <div className="bg-gold/5 border border-gold/20 rounded-2xl p-4 mb-6">
                      <p className="font-heading text-xl font-semibold text-espresso italic">
                        {project.tagline}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {project.ctaText}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 text-foreground text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold flex-shrink-0"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
