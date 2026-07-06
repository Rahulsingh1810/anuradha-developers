'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, BedDouble, IndianRupee, ArrowRight, Building2, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ContactModal } from '@/components/contact-modal'

type Project = {
  id: number
  name: string
  developer: string
  location: string
  type: string
  status: 'Ready to Move' | 'Under Construction' | 'New Launch'
  priceRange: string
  bhk: string
  area: string
  image: string
  highlights: string[]
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Mana Dale',
    developer: 'Mana Projects',
    location: 'Kodathi, Off Sarjapur Road, Bengaluru',
    type: 'Residential',
    status: 'Under Construction',
    priceRange: '₹1.74Cr – ₹2.38Cr',
    bhk: '3, 4 BHK',
    area: '1,590 – 2,145 sq.ft',
    image: '/mana-new.png',
    highlights: ['Nature-Themed', 'Double Clubhouse', 'Mivan Construction', 'Off Sarjapur Road'],
    description:
      'A premium nature-themed township off Sarjapur Road, featuring extensive greenery, double clubhouses, and luxury 3 & 4 BHK residences designed for modern families.',
  },
  {
    id: 2,
    name: 'Arvind Sarjapur Road',
    developer: 'Arvind SmartSpaces',
    location: 'Opposite Wipro Campus, Sarjapur Main Road, Bengaluru',
    type: 'Residential',
    status: 'New Launch',
    priceRange: '₹1.96Cr – ₹3.24Cr',
    bhk: '3, 4 BHK',
    area: '1,450 – 2,400 sq.ft',
    image: '/arvind-new.png',
    highlights: ['Opposite Wipro Campus', '85% Open Spaces', '15,000+ sq.ft Clubhouse', '40+ Curated Amenities'],
    description:
      'A premium high-rise residential community opposite the Wipro Campus on Sarjapur Main Road, offering spacious 3 & 4 BHK homes with abundant greenery and world-class amenities.',
  },
  {
    id: 3,
    name: 'Nambiar District 25',
    developer: 'Nambiar Builders',
    location: 'Sarjapur Road, Bengaluru',
    type: 'Residential',
    status: 'New Launch',
    priceRange: '₹1.47Cr – ₹2.8Cr',
    bhk: '2, 3, 4 BHK',
    area: '1,200 – 2,500 sq.ft',
    image: '/Nambiar.jpeg',
    highlights: ['100-Acre Township', 'Massive Clubhouse', '72% Open Space', 'High-speed Elevators'],
    description:
      'A massive 100-acre integrated township on Sarjapur Road that merges premium apartments with commercial space, sprawling landscapes, and elite lifestyle facilities.',
  },
 {
  id: 4,
  name: 'Sobha OneWorld',
  developer: 'Sobha',
  location: 'Greater Whitefield, Old Madras Road, Hoskote, Bengaluru',
  type: 'Residential',
  status: 'New Launch',
  priceRange: '₹1.09Cr – ₹3.90Cr',
  bhk: '1, 2, 3, 4 BHK',
  area: '734 – 2,415 sq.ft',
  image: '/sobha.webp',
  highlights: [
    '48-Acre Integrated Township',
    '80% Open Space',
    '1.2 Lakh sq.ft Clubhouse',
    '65,000 sq.ft Retail Plaza',
    '750m Jogging & Cycling Track',
    'Near Whitefield'
  ],
  description:
    'Sobha OneWorld is a premium integrated township in Greater Whitefield featuring luxury 1 to 4 BHK apartments, expansive open spaces, a world-class clubhouse, retail boulevard, sports facilities, and excellent connectivity to Whitefield, IT hubs, and the upcoming metro.'
},
{
  id: 5,
  name: 'Heart of Harmony',
  developer: 'CKPC Properties',
  location: 'Hosur Main Road, Kudlu Gate, South Bengaluru',
  type: 'Residential',
  status: 'New Launch',
  priceRange: '₹2.49Cr – ₹3.92Cr',
  bhk: '3, 4 BHK',
  area: '1,786 – 2,572 sq.ft',
  image: '/HOH.png',
  highlights: [
    '400m from Kudlu Gate Metro',
    '84% Green Open Spaces',
    'Zero Common Walls',
    'Private Sky Gardens',
    'Vaastu Compliant',
    '10 mins from Silk Board'
  ],
  description:
    'Heart of Harmony is a boutique luxury high-rise by CKPC Properties on Hosur Main Road featuring spacious 3 & 4 BHK residences with zero common walls, expansive green spaces, private sky gardens, and excellent connectivity to Silk Board, Electronic City, and the upcoming Kudlu Gate Metro.',
},
{
  id: 6,
  name: 'Prestige Evergreen',
  developer: 'Prestige Group',
  location: 'Whitefield Main Road, Varthur, Bengaluru - 560066',
  type: 'Residential',
  status: 'New Launch',
  priceRange: '₹1.8Cr – ₹3.4Cr',
  bhk: '2, 3, 4 BHK',
  area: '1,461 – 2,513 sq.ft',
  image: '/evergreen.png',
  highlights: [
    'Whitefield Main Road',
    'Within Prestige Raintree Park',
    'Near ITPL & Tech Parks',
    'Nature-Themed Township',
    'Premium Lifestyle Amenities',
    'Excellent Metro Connectivity'
  ],
  description:
    'Prestige Evergreen is a premium residential enclave within Prestige Raintree Park on Whitefield Main Road, Varthur. Offering spacious 2, 3, and 4 BHK residences, the project combines expansive green landscapes, world-class amenities, and seamless connectivity to Whitefield, major IT parks, metro stations, schools, hospitals, and shopping destinations.',
},
]

const filters = ['All', 'Sobha', 'Mana Projects', 'Arvind SmartSpaces', 'Nambiar Builders', 'CKPC Properties', 'Prestige Group']
const statusColors: Record<string, string> = {
  'Ready to Move': 'bg-emerald-100 text-emerald-800',
  'Under Construction': 'bg-amber-100 text-amber-800',
  'New Launch': 'bg-[#5c2967]/10 text-[#5c2967]',
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const prefersReducedMotion = useReducedMotion()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hasEnquired, setHasEnquired] = useState(false)

  useEffect(() => {
    const contact = localStorage.getItem('purple_nest_user_contact')
    if (contact) {
      setHasEnquired(true)
    }
  }, [])

  const handleDownload = (project: Project) => {
    const content = `=========================================
      PURPLE NEST REAL ESTATE ADVISORY
=========================================
           OFFICIAL BROCHURE

Project: ${project.name}
Developer: ${project.developer}
Location: ${project.location}
Type: ${project.type}
Status: ${project.status}
Price Range: ${project.priceRange}
Config: ${project.bhk}
Area: ${project.area}

HIGHLIGHTS:
${project.highlights.map((h) => `- ${h}`).join('\n')}

DESCRIPTION:
${project.description}

Thank you for your interest in ${project.name}. A senior property advisor from Purple Nest will get in touch with you shortly with exclusive pricing plans and site visit slots.

Contact Us:
Email: info@purplenest.in
Website: www.purplenest.in
=========================================
`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${project.name.replace(/\s+/g, '_')}_Brochure.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleModalSubmit = (contactData: { name: string; email: string; phone: string }) => {
    localStorage.setItem('purple_nest_user_contact', JSON.stringify(contactData))
    setHasEnquired(true)
    if (selectedProject) {
      handleDownload(selectedProject)
    }
  }

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.developer === activeFilter)

  const cardAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
      }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black pt-40 pb-24">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=60"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full object-cover opacity-100"
  />

  {/* Subtle Purple Overlay */}
  <div className="absolute inset-0 bg-[#5c2967]/40" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
    <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-widest text-[#F5D78E]/70">
      Our Portfolio
    </span>

    <h1 className="mb-5 text-balance font-heading text-6xl font-light leading-tight text-[#faf8f5] md:text-7xl">
      Featured{" "}
      <span className="font-semibold italic text-[#F5D78E]">
        Projects
      </span>
    </h1>

    <p className="max-w-2xl text-lg leading-relaxed text-[#F5D78E]/80">
      Curated residential and commercial properties from Bengaluru&apos;s
      most trusted developers. Each project is handpicked to match your
      lifestyle and investment goals.
    </p>
  </div>

  {/* Bottom Gradient */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
</section>

      {/* Filter + Grid */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-14" role="group" aria-label="Filter by developer">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 border',
                  activeFilter === f
                    ? 'bg-[#5c2967] text-[#F5D78E] border-[#5c2967] shadow-md shadow-[#5c2967]/20'
                    : 'bg-card text-muted-foreground border-border hover:border-[#5c2967]/30 hover:text-[#5c2967]'
                )}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project count */}
          <p className="text-muted-foreground text-sm mb-8">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            project{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' ? ` by ${activeFilter}` : ''}
          </p>

          {/* Cards */}
          <motion.div
            layout={!prefersReducedMotion}
            className="grid grid-cols-1 gap-10 max-w-5xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout={!prefersReducedMotion}
                  {...cardAnim}
                  transition={{ duration: 0.4 }}
                  className="bg-card border border-border rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl hover:shadow-[#5c2967]/10 hover:border-[#5c2967]/25 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 md:h-auto md:w-[360px] lg:w-[420px] shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.name} by ${project.developer}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Status badge */}
                    <div className="absolute top-6 left-6">
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
                          statusColors[project.status]
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#5c2967] text-[#F5D78E]">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 p-8 md:p-10">
                    <div className="flex-1">
                      {/* Developer */}
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 size={13} className="text-[#5c2967]" />
                        <span className="text-[#5c2967] text-xs font-semibold tracking-wide uppercase">
                          {project.developer}
                        </span>
                      </div>

                      {/* Name */}
                      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-1 leading-tight">
                        {project.name}
                      </h2>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                        <MapPin size={13} />
                        <span>{project.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Specs row */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                            <BedDouble size={13} />
                            <span className="text-[10px] uppercase tracking-widest font-semibold">
                              Config
                            </span>
                          </div>
                          <p className="text-foreground text-sm font-semibold">{project.bhk}</p>
                        </div>
                        <div className="bg-muted rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                            <IndianRupee size={13} />
                            <span className="text-[10px] uppercase tracking-widest font-semibold">
                              Price
                            </span>
                          </div>
                          <p className="text-foreground text-sm font-semibold">{project.priceRange}</p>
                        </div>
                      </div>

                      {/* Area */}
                      <p className="text-muted-foreground text-xs mb-6">
                        Area: <span className="font-medium text-foreground">{project.area}</span>
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1 rounded-full bg-[#5c2967]/8 text-[#5c2967] text-[10px] font-semibold tracking-wide border border-[#5c2967]/12"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => {
                        if (hasEnquired) {
                          handleDownload(project)
                        } else {
                          setSelectedProject(project)
                          setIsModalOpen(true)
                        }
                      }}
                      className="flex items-center justify-center gap-2 w-full md:max-w-xs py-3.5 rounded-2xl bg-[#5c2967] text-[#F5D78E] text-sm font-semibold tracking-wide hover:bg-[#7e3e8c] transition-all duration-300 cursor-pointer shadow-md active:scale-[0.98]"
                    >
                      {hasEnquired ? (
                        <>
                          <span>Download Brochure</span>
                          <Download size={15} />
                        </>
                      ) : (
                        <>
                          <span>Enquire Now</span>
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground text-base mb-6">
              Can&apos;t find what you&apos;re looking for? Let us find the perfect property for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5c2967] text-[#F5D78E] font-semibold text-sm tracking-wide hover:bg-[#7e3e8c] transition-colors shadow-lg shadow-[#5c2967]/20"
            >
              Talk to Our Expert
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProject(null)
          }}
          onSubmit={handleModalSubmit}
          projectName={selectedProject.name}
        />
      )}
    </>
  )
}
