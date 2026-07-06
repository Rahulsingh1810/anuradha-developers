'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/property-2.jpeg',
    subtitle: 'Construction & Infrastructure Excellence',
    heading: ['Building', 'Excellence'],
    description:
      'Delivering high-quality construction and infrastructure solutions through innovation, integrity, and engineering excellence.',
  },
  {
    image: '/property-1.jpeg',
    subtitle: 'Premium Residential Projects',
    heading: ['Creating', 'Value'],
    description:
      'Premium villas, independent houses, and residential apartments crafted with superior quality across Telangana and Andhra Pradesh.',
  },
  {
    image: '/property-4.jpeg',
    subtitle: 'Industrial & Layout Development',
    heading: ['Delivering', 'Trust'],
    description:
      'End-to-end layout development, industrial infrastructure, and government project execution with unwavering commitment.',
  },
  {
    image: '/property-6.jpeg',
    subtitle: 'Expanding Horizons',
    heading: ['Transforming', 'Landscapes'],
    description:
      'From Hyderabad to Visakhapatnam — building landmarks that stand the test of time with modern engineering practices.',
  },
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, prefersReducedMotion])

  const slide = slides[current]

  const imageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.08,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.6 },
    }),
  }

  const textVariants = {
    enter: {
      opacity: 0,
      y: 40,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images carousel */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-espresso/20" />

      {/* Decorative gold line (left) */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gold/30 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-32 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-3xl"
          >
            {/* Subtitle with gold line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                {slide.subtitle}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-6xl md:text-7xl lg:text-[5.5rem] font-light text-cream leading-[1.05] tracking-tight mb-6">
              {slide.heading[0]}
              <br />
              <span className="text-gold font-semibold italic">
                {slide.heading[1]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gold-soft/70 text-lg leading-relaxed max-w-xl mb-10">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-espresso font-semibold text-sm tracking-wide hover:bg-gold-soft transition-colors shadow-lg shadow-gold/20"
              >
                Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold font-semibold text-sm tracking-wide hover:bg-gold/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar: dots + arrows */}
        <div className="absolute bottom-10 right-6 md:right-10 flex items-center gap-4">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    i === current
                      ? 'w-8 h-2 bg-gold'
                      : 'w-2 h-2 bg-cream/40 hover:bg-cream/60'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
