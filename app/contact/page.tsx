'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99029 30927', 
    href: 'tel:+919902930927',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7483790927',
    href: 'tel:+917483790927',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Purplenest27@gmail.com',
    href: 'mailto:Purplenest27@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Ground Floor, No 40, 6th Sector, 14th Cross, HSR Layout, Bengaluru – 560102',
    href: 'https://maps.google.com/?q=HSR+Layout+Bengaluru',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    href: null,
  },
]

const interests = [
  'Residential Property',
  'Luxury Apartment',
  'Commercial Space',
  'Investment Property',
  'Site Visit Request',
  'General Enquiry',
]

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    message: '',
  })

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
        }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'enquiry',
          ...form,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Failed to send enquiry. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-black">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=60"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full object-cover opacity-100"
  />

  {/* Subtle Purple Overlay */}
  <div className="absolute inset-0 bg-[#5c2967]/40" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
    <motion.div {...fadeUp(0.1)}>
      <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-widest text-[#F5D78E]/70">
        Get in Touch
      </span>

      <h1 className="mb-5 text-balance font-heading text-6xl font-light leading-tight text-[#faf8f5] md:text-7xl">
        Let&apos;s Find Your{" "}
        <span className="font-semibold italic text-[#F5D78E]">
          Perfect Nest
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-[#F5D78E]/80">
        Speak with our expert team — completely free. We&apos;ll understand your
        requirements and help you make the right property decision.
      </p>
    </motion.div>
  </div>

  {/* Bottom Gradient */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
</section>

      <section className="py-24 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.aside
            {...fadeUp(0.1)}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-heading text-4xl font-light text-[#1a0d2e] mb-3 text-balance">
                We&apos;re Here to{' '}
                <span className="text-[#5c2967] italic font-semibold">Help You</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you&apos;re a first-time homebuyer, a seasoned investor, or exploring your
                options — our team is ready to guide you with honest, personalised advice.
              </p>
            </div>

            <ul className="flex flex-col gap-5" aria-label="Contact information">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={value}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#5c2967]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={17} className="text-[#5c2967]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-semibold mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground text-sm font-medium hover:text-[#5c2967] transition-colors leading-relaxed"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm font-medium leading-relaxed">{value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Map embed placeholder */}
            {/* <div className="rounded-3xl overflow-hidden border border-border h-56 bg-muted relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70"
                alt="Map showing HSR Layout, Bengaluru location"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=HSR+Layout+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#5c2967] text-[#F5D78E] px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-[#7e3e8c] transition-colors"
                >
                  <MapPin size={14} />
                  Open in Maps
                </a>
              </div>
            </div> */}

            {/* CTA card */}
            <div className="rounded-3xl bg-[#5c2967] p-7">
              <p className="font-heading text-2xl font-semibold text-[#faf8f5] mb-2">
                Prefer a call?
              </p>
              <p className="text-[#F5D78E]/60 text-sm mb-5">
                Our team is available Monday to Saturday, 9 AM – 7 PM.
              </p>
              <a
                href="tel:+919902930927"
                className="flex items-center gap-2 w-full justify-center py-3.5 rounded-2xl bg-[#F5D78E] text-[#5c2967] font-semibold text-sm tracking-wide hover:bg-[#fae9bc] transition-colors"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-semibold text-foreground mb-2">
                      Enquiry Received!
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      Thank you for reaching out to Purple Nest. Our team will get back to you
                      within 24 hours to discuss your property requirements.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setError(null)
                      setForm({ name: '', email: '', phone: '', interest: '', budget: '', message: '' })
                    }}
                    className="mt-2 px-6 py-2.5 rounded-full border border-[#5c2967]/30 text-[#5c2967] text-sm font-semibold hover:bg-[#5c2967]/8 transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-3xl font-semibold text-foreground mb-1">
                    Send us an Enquiry
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill in the form and we&apos;ll get back to you promptly.
                  </p>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition"
                      />
                    </div>

                    {/* Interest + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="interest" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          I&apos;m Interested In
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition appearance-none cursor-pointer"
                        >
                          <option value="">Select an option</option>
                          {interests.map((i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition appearance-none cursor-pointer"
                        >
                          <option value="">Select budget</option>
                          <option>Under ₹50 Lakhs</option>
                          <option>₹50L – ₹1 Crore</option>
                          <option>₹1Cr – ₹2 Crore</option>
                          <option>₹2Cr – ₹5 Crore</option>
                          <option>Above ₹5 Crore</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground tracking-wide uppercase">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, preferred location, or any specific questions..."
                        className="px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#5c2967]/30 focus:border-[#5c2967]/50 transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#5c2967] text-[#F5D78E] font-semibold text-sm tracking-wide hover:bg-[#7e3e8c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#5c2967]/20"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#F5D78E]/40 border-t-[#F5D78E] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-muted-foreground text-xs">
                      We respect your privacy. Your details will never be shared without your consent.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
