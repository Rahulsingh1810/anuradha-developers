'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...formData }),
      })

      const data = await response.json()
      if (response.ok) {
        setIsSuccess(true)
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/95 to-gold/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-6xl md:text-7xl font-light text-cream leading-[1.05] mb-6 text-balance">
            Contact <span className="text-gold font-semibold italic">Us</span>
          </h1>
          <p className="text-gold-soft/70 text-lg max-w-2xl leading-relaxed">
            We&apos;d love to hear from you. Whether you have a project in mind or
            want to learn more about our services — reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-espresso mb-6">
                  Reach Out to Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Anuradha Developers & Design Group is always ready to discuss
                  your construction and infrastructure needs.
                </p>
              </div>

              {/* Founder */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <User size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mr. Dasari Prasad</p>
                    <p className="text-muted-foreground text-sm">Founder</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <a
                  href="tel:+917095949111"
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-espresso transition-colors">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">+91 70959 49111</p>
                  </div>
                </a>
                <a
                  href="tel:+919849151190"
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-espresso transition-colors">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">+91 98491 51190</p>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <a
                  href="mailto:info@anuradhadevelopers.in"
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-espresso transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">General Info</p>
                    <p className="font-semibold text-foreground">info@anuradhadevelopers.in</p>
                  </div>
                </a>
                <a
                  href="mailto:prasad@anuradhadevelopers.in"
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-espresso transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prasad</p>
                    <p className="font-semibold text-foreground">prasad@anuradhadevelopers.in</p>
                  </div>
                </a>
                <a
                  href="mailto:chandan@anuradhadevelopers.in"
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-espresso transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Chandan</p>
                    <p className="font-semibold text-foreground">chandan@anuradhadevelopers.in</p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registered Office</p>
                  <address className="not-italic font-semibold text-foreground leading-relaxed text-sm">
                    Ambience Avenue, Block B, Flat No. 204<br />
                    Srinagar Colony, Hyderabad – 500073<br />
                    Telangana, India
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                {!isSuccess ? (
                  <>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground text-sm mb-8">
                      Fill out the form below and we&apos;ll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2"
                          >
                            Full Name *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                              <User size={16} />
                            </span>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2"
                          >
                            Phone Number *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                              <Phone size={16} />
                            </span>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                            <Mail size={16} />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2"
                        >
                          Subject
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40">
                            <Building2 size={16} />
                          </span>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all appearance-none"
                          >
                            <option value="">Select a topic</option>
                            <option value="residential">Residential Construction</option>
                            <option value="layout">Layout Development</option>
                            <option value="industrial">Industrial & Infrastructure</option>
                            <option value="government">Government Projects</option>
                            <option value="general">General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2"
                        >
                          Message
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-4 text-gold/40">
                            <MessageSquare size={16} />
                          </span>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/40 transition-all placeholder:text-muted-foreground/50 resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl bg-gold text-espresso font-semibold text-sm tracking-wide hover:bg-gold-soft disabled:bg-gold/50 disabled:pointer-events-none transition-colors cursor-pointer shadow-lg shadow-gold/15"
                      >
                        {isSubmitting ? (
                          <span className="inline-block w-5 h-5 rounded-full border-2 border-espresso border-t-transparent animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
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
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px]">
                      Your message has been received. Our team will get back to you
                      shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
