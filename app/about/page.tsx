"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Users,
  ShieldCheck,
  Lightbulb,
  CalendarCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const whyUs = [
  {
    icon: Star,
    title: "Expert Guidance",
    description:
      "With over 18 years of experience in Bengaluru's real estate market, we help you make informed decisions based on your needs and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Access to Trusted Developers",
    description:
      "We work with Sobha, Prestige, Mana Projects, Arvind SmartSpaces, Abhee Ventures, and other leading brands, giving you access to quality projects.",
  },
  {
    icon: Lightbulb,
    title: "Personalised Property Selection",
    description:
      "We take time to understand your requirements and recommend properties that truly match your lifestyle and investment goals.",
  },
  {
    icon: CalendarCheck,
    title: "Hassle-Free Site Visits",
    description:
      "We arrange and coordinate property visits at your convenience, ensuring you receive complete project information and a seamless experience.",
  },
  {
    icon: Users,
    title: "Transparent Advice",
    description:
      "Our recommendations are based on what is best for you. We believe in honest communication, clear information, and building long-term trust.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Support",
    description:
      "From your first enquiry to booking, home loan guidance, documentation, and final purchase — we are with you every step of the way.",
  },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
        };

  const stagger: Variants = prefersReducedMotion
    ? {}
    : { initial: {}, animate: { transition: { staggerChildren: 0.08 } } };

  const cardAnim: Variants = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-black pt-40 pb-24">
        {/* Background Image */}
        <img
          src="/property-4.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Subtle Purple Tint */}
        <div className="absolute inset-0 bg-[#5c2967]/25" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <motion.div {...fadeUp(0.1)}>
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-widest text-[#F5D78E]/70">
              Who We Are
            </span>

            <h1 className="mb-6 text-balance font-heading text-6xl font-light leading-tight text-[#faf8f5] md:text-7xl">
              About{" "}
              <span className="font-semibold italic text-[#F5D78E]">
                Purple Nest
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#F5D78E]/80">
              A Bengaluru-based real estate advisory and channel partner firm
              committed to connecting homebuyers and investors with India's most
              trusted developers.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-28 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
              <img
                src="/property-6.jpeg"
                alt="Modern residential apartment building in Bengaluru"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-8 bg-[#5c2967] rounded-2xl px-7 py-5 shadow-2xl shadow-[#5c2967]/30">
              <p className="font-heading text-4xl font-bold text-[#F5D78E]">
                18+
              </p>
              <p className="text-[#F5D78E]/60 text-xs mt-0.5 tracking-wide">
                Years of Expertise
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp(0.2)}>
            <span className="text-[#5c2967] text-xs tracking-widest uppercase font-semibold mb-5 block">
              Our Story
            </span>
            <h2 className="font-heading text-5xl font-light text-[#1a0d2e] leading-tight mb-7 text-balance">
              More Than a Transaction —{" "}
              <span className="text-[#5c2967] italic font-semibold">
                A Life Decision
              </span>
            </h2>
            <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
              <p>
                Purple Nest works closely with leading developers such as Sobha,
                Prestige, Mana Projects, Arvind SmartSpaces, and Abhee Ventures,
                helping them reach qualified and genuine property buyers. Our
                role is to understand each client&apos;s requirements, identify
                the most suitable properties, and arrange personalised site
                visits — ensuring a smooth and informed buying experience.
              </p>
              <p>
                At Purple Nest, we believe that purchasing a property is more
                than a transaction — it&apos;s an important life decision.
                That&apos;s why we focus on providing transparent advice,
                personalised guidance, and end-to-end support throughout the
                home-buying journey.
              </p>
              <p>
                Our strong relationships with reputed developers, in-depth
                knowledge of the Bengaluru real estate market, and
                customer-first approach enable us to deliver a seamless
                experience built on trust, professionalism, and integrity.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-[#F5D78E] pl-6 italic font-heading text-xl text-[#5c2967] font-medium">
              &ldquo;At Purple Nest, we don&apos;t just help you find a property
              — we help you find the right one.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Why Purple Nest */}
      <section className="py-28 bg-[#5c2967]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div {...fadeUp(0.1)} className="max-w-2xl mb-16">
            <span className="text-[#F5D78E]/70 text-xs tracking-widest uppercase font-semibold mb-5 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-[#faf8f5] leading-tight text-balance">
              Why{" "}
              <span className="text-[#F5D78E] font-semibold italic">
                Purple Nest?
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={cardAnim}
                  className="group bg-[#faf8f5]/8 border border-[#F5D78E]/15 rounded-3xl p-8 hover:bg-[#faf8f5]/12 hover:border-[#F5D78E]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5D78E]/15 flex items-center justify-center mb-6 group-hover:bg-[#F5D78E]/25 transition-colors duration-300">
                    <Icon size={22} className="text-[#F5D78E]" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[#faf8f5] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F5D78E]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-28 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div {...fadeUp(0.1)} className="order-2 lg:order-1">
            <span className="text-[#5c2967] text-xs tracking-widest uppercase font-semibold mb-5 block">
              Meet the Founder
            </span>
            <h2 className="font-heading text-5xl font-light text-[#1a0d2e] leading-tight mb-2 text-balance">
              R. Ethesh Kumar
            </h2>
            <p className="text-[#5c2967] font-semibold text-sm mb-7 tracking-wide">
              Founder, Purple Nest
            </p>
            <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
              <p>
                R. Ethesh Kumar is the Founder of Purple Nest, bringing nearly
                two decades of experience in sales, customer relationship
                management, and the Bengaluru real estate market.
              </p>
              <p>
                Throughout his career, Ethesh has held leadership and sales
                roles with some of India&apos;s most respected real estate
                developers — including Total Environment, Assetz Property Group,
                Shriram Properties, Concorde Group, Sobha Developers, and
                Chartered Housing.
              </p>
              <p>
                This extensive experience has given him a deep understanding of
                residential real estate, customer expectations, and the evolving
                dynamics of the property market in Bengaluru.
              </p>
            </div>

            {/* Past employers */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Total Environment",
                "Assetz",
                "Shriram Properties",
                "Concorde",
                "Sobha",
                "Chartered Housing",
              ].map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-1.5 rounded-full bg-[#5c2967]/10 text-[#5c2967] text-xs font-semibold tracking-wide border border-[#5c2967]/15"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeUp(0.2)} className="order-1 lg:order-2 relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="/founder.jpeg"
                alt="Professional real estate advisor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute bottom-6 -left-4 bg-[#F5D78E] rounded-2xl px-6 py-4 shadow-xl shadow-[#5c2967]/20 max-w-[200px]">
              <p className="font-heading text-[#5c2967] text-3xl font-bold leading-none">
                18+
              </p>
              <p className="text-[#5c2967]/70 text-xs mt-1 leading-snug">
                Years in Real Estate
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[2.5rem] bg-[#5c2967] px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#faf8f5] mb-3 text-balance">
                Ready to start your property journey?
              </h2>
              <p className="text-[#F5D78E]/60 text-base">
                Talk to our expert team — completely free.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5D78E] text-[#5c2967] font-semibold text-sm tracking-wide hover:bg-[#fae9bc] transition-colors shadow-lg shadow-[#F5D78E]/20"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
