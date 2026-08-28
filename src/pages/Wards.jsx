import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import WardCard from '../components/wards/WardCard'
import { wards } from '../data/wards'

export default function Wards() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Wards & Rooms'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Inpatient Care"
        title="Wards & Rooms"
        description="Learn about our ward types, room categories, and visiting guidelines to help you plan your visit."
        breadcrumbItems={[{ label: 'Wards & Rooms' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {wards.map((ward, i) => (
              <Reveal key={ward.id} delay={Math.min(i * 60, 180)}>
                <WardCard {...ward} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}