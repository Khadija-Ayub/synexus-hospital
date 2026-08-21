import SectionHeading from '../ui/SectionHeading'
import DoctorCard from '../cards/DoctorCard'
import Reveal from '../ui/Reveal'
import { getDoctorsByDepartment } from '../../data/doctors'

export default function DepartmentDoctors({ department }) {
  const doctors = getDoctorsByDepartment(department.id)

  if (doctors.length === 0) return null

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading
          eyebrow="Meet the Team"
          title={`${department.name} Specialists`}
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.slug} delay={i * 80}>
              <DoctorCard {...doctor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}