import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import DepartmentCard from '../components/cards/DepartmentCard'
import { departments } from '../data/departments'

export default function Departments() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Departments'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Our Departments"
        title="Specialized Care for Every Need"
        description="Explore our departments to learn more about the services, procedures, and specialists available to you."
        breadcrumbItems={[{ label: 'Departments' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <p className="text-sm text-text-muted">
            {departments.length} departments
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <Reveal key={dept.slug} delay={i * 60}>
                <DepartmentCard {...dept} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}