'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY

      setScrolled(current > 20)

      if (current < 50) {
        setShowNavbar(true)
      } else if (current > lastScroll) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScroll(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScroll])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: showNavbar ? 0 : -120 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-full border border-gray-200/80 bg-white transition-all duration-500',
            scrolled
              ? 'shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
              : 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
          )}
        >
          <nav className="flex h-20 items-center justify-between px-6 md:px-10">
            <Link href="/">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/logo-2.png"
                alt="Purple Nest"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'rounded-full px-5 py-2 font-medium transition-all duration-300',
                        active
                          ? 'bg-[#5c2967] text-white'
                          : 'text-black hover:bg-black/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#5c2967] px-6 py-3 font-semibold text-white transition hover:scale-105 md:inline-flex"
            >
              Book a Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-black md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed inset-0 z-50 bg-white md:hidden"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex h-24 items-center justify-between px-6">
                <img
                  src="/logo-2.png"
                  alt="Purple Nest"
                  className="h-14"
                />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5"
                >
                  <X className="text-black" />
                </button>
              </div>

              <nav className="flex h-[calc(100%-96px)] flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'text-4xl font-semibold transition-colors',
                          active
                            ? 'text-[#5c2967]'
                            : 'text-black hover:text-[#5c2967]'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Consultation button intentionally removed on mobile */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}