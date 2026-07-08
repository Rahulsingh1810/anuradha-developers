import { Hero } from '@/components/home/hero'
import { Expertise } from '@/components/home/services'
import { RenewableEnergy } from '@/components/home/renewable-energy'
import { ProjectsShowcase } from '@/components/home/projects-showcase'
import { Collaborations } from '@/components/home/partners'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <RenewableEnergy />
      <ProjectsShowcase />
      <Collaborations />
      <CtaSection />
    </>
  )
}
