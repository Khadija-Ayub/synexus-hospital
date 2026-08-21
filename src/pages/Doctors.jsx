import { useEffect, useMemo, useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import DoctorCard from '../components/cards/DoctorCard'
import DoctorFilters from '../components/doctors/DoctorFilters'
import Button from '../components/ui/Button'
import { doctors } from '../data/doctors'
import { departments } from '../data/departments'

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [specialty, setSpecialty] = useState('all')
  const [departmentId, setDepartmentId] = useState('all')

  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Doctors'
  }, [])

  const specialties = useMemo(
    () => [...new Set(doctors.map((d) => d.specialty))].sort(),
    []
  )

  const filteredDoctors = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return doctors.filter((doctor) => {
      const matchesSearch =
        term === '' ||
        doctor.name.toLowerCase().includes(term) ||
        doctor.specialty.toLowerCase().includes(term)

      const matchesSpecialty = specialty === 'all' || doctor.specialty === specialty
      const matchesDepartment = departmentId === 'all' || doctor.departmentId === departmentId

      return matchesSearch && matchesSpecialty && matchesDepartment
    })
  }, [searchTerm, specialty, departmentId])

  const hasActiveFilters = searchTerm !== '' || specialty !== 'all' || departmentId !== 'all'

  function clearFilters() {
    setSearchTerm('')
    setSpecialty('all')
    setDepartmentId('all')
  }

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Find the Right Specialist for You"
        description="Search and browse our team of experienced doctors across every department."
        breadcrumbItems={[{ label: 'Doctors' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <DoctorFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            specialty={specialty}
            onSpecialtyChange={setSpecialty}
            specialties={specialties}
            departmentId={departmentId}
            onDepartmentChange={setDepartmentId}
            departments={departments}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <p className="mt-5 text-sm text-text-muted" aria-live="polite">
            {filteredDoctors.length === 0
              ? 'No doctors found'
              : `${filteredDoctors.length} specialist${filteredDoctors.length === 1 ? '' : 's'} found`}
          </p>

          {filteredDoctors.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor, i) => (
                <Reveal key={doctor.slug} delay={i * 60}>
                  <DoctorCard {...doctor} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 text-center py-12">
              <p className="text-text-muted">No specialists match your search.</p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}