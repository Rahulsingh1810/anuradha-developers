import { Hero } from '@/components/home/hero'
import { Expertise } from '@/components/home/services'
import { ProjectsShowcase } from '@/components/home/projects-showcase'
import { Collaborations } from '@/components/home/partners'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <ProjectsShowcase />
      <Collaborations />
      <CtaSection />
    </>
  )
}
