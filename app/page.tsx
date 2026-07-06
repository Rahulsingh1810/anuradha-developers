import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { Partners } from '@/components/home/partners'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <CtaSection />
    </>
  )
}
