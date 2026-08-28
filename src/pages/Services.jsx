import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Services & Facilities'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services & Facilities"
        description="A full range of medical services and hospital facilities designed around patient safety and comfort."
        breadcrumbItems={[{ label: 'Services & Facilities' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={Math.min(i * 50, 180)}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}