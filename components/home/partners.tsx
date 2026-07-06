"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

const developers = [
  { name: "Sobha", tagline: "Quality Builders" },
  { name: "Prestige", tagline: "Premium Living" },
  { name: "Mana Projects", tagline: "Modern Spaces" },
  { name: "Arvind SmartSpaces", tagline: "Smart Homes" },
  { name: "Abhee Ventures", tagline: "Trusted Builds" },
  { name: "CKPC Properties", tagline: "Step into a Life in Harmony" },
];

const testimonials = [
  {
    quote:
      "Purple Nest made our home buying journey completely stress-free. Ethesh personally guided us through every step and helped us choose a property that perfectly matched our budget and lifestyle.",
    name: "Ramesh & Priya Sharma",
    role: "Homeowners, HSR Layout",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    quote:
      "The transparency and honesty Purple Nest brings to the table is rare in the real estate space. They recommended only what was genuinely right for us, not what earned them the most commission.",
    name: "Karthik Murthy",
    role: "Investor, Whitefield",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "From the very first site visit to finally getting our keys, Purple Nest was by our side. Their knowledge of the Bengaluru market is unmatched.",
    name: "Anita Reddy",
    role: "First-time Homebuyer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function Partners() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <>
      {/* Developer Partners */}
      <section className="py-20 bg-[#5c2967]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-[#F5D78E]/60 text-xs tracking-widest uppercase mb-10 font-semibold">
            Our Trusted Developer Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {developers.map((dev) => (
              <div
                key={dev.name}
                className="px-6 py-3.5 rounded-2xl bg-[#F5D78E]/10 border border-[#F5D78E]/20 hover:bg-[#F5D78E]/15 hover:border-[#F5D78E]/40 transition-colors cursor-default"
              >
                <p className="font-heading text-[#F5D78E] text-lg font-semibold">
                  {dev.name}
                </p>
                <p className="text-[#F5D78E]/50 text-[10px] tracking-widest uppercase">
                  {dev.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-xl mb-16">
            <span className="text-[#5c2967] text-xs tracking-widest uppercase font-semibold mb-4 block">
              Client Stories
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-[#1a0d2e] leading-tight text-balance">
              Trusted by{" "}
              <span className="text-[#5c2967] font-semibold italic">
                Families
              </span>{" "}
              Across Bengaluru
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-6 hover:shadow-lg hover:shadow-[#5c2967]/8 transition-shadow duration-300"
              >
                <Quote
                  size={28}
                  className="text-[#F5D78E]"
                  aria-hidden="true"
                />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
