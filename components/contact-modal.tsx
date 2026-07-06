'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Phone, Download, CheckCircle2 } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; email: string; phone: string }) => void
  projectName: string
}

export function ContactModal({ isOpen, onClose, onSubmit, projectName }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setName('')
      setEmail('')
      setPhone('')
      setIsSubmitting(false)
      setIsSuccess(false)
      setError(null)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone) return

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'brochure',
          name,
          email,
          phone,
          projectName,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        setIsSuccess(true)
        onSubmit({ name, email, phone })
        setTimeout(() => {
          onClose()
        }, 1800)
      } else {
        setError(data.error || 'Failed to submit details. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] bg-background border border-gold/10 p-8 md:p-10 shadow-2xl shadow-espresso/40"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-espresso/60 hover:text-espresso hover:bg-espresso/5 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="mb-8 pr-6">
                  <div className="inline-flex p-3 rounded-2xl bg-gold/10 text-gold mb-4">
                    <Download size={22} className="animate-bounce" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-espresso">
                    Download Brochure
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Please provide your contact details to download the brochure for{' '}
                    <span className="font-semibold text-espresso">{projectName}</span>.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                        <User size={16} />
                      </span>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                        <Mail size={16} />
                      </span>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                        <Phone size={16} />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 mt-6 rounded-2xl bg-gold text-espresso font-semibold text-sm tracking-wide hover:bg-gold-soft disabled:bg-gold/50 disabled:pointer-events-none transition-colors cursor-pointer shadow-lg shadow-gold/15"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 rounded-full border-2 border-espresso border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Submit & Download</span>
                        <Download size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
                >
                  <CheckCircle2 size={36} />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-espresso mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                  Your details have been registered. The brochure download will start automatically.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
