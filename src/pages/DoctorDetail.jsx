import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoctorBySlug } from '../data/doctors'
import { departments } from '../data/departments'
import DoctorProfileHeader from '../components/doctors/DoctorProfileHeader'
import DoctorSchedule from '../components/doctors/DoctorSchedule'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import NotFound from './NotFound'

export default function DoctorDetail() {
  const { doctorId } = useParams()
  const doctor = getDoctorBySlug(doctorId)
  const department = doctor ? departments.find((d) => d.id === doctor.departmentId) : null

  useEffect(() => {
    document.title = doctor
      ? `SYNEXUS Medical Center | ${doctor.name}`
      : 'SYNEXUS Medical Center | Doctor Not Found'
  }, [doctor])

  if (!doctor) {
    return (
      <NotFound
        title="Doctor Not Found"
        message="We couldn't find the specialist you're looking for."
        backTo="/doctors"
        backLabel="Back to Doctors"
      />
    )
  }

  return (
    <>
      <DoctorProfileHeader doctor={doctor} departmentName={department?.name} />

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="text-xl font-bold text-text">About</h2>
            <p className="mt-3 text-text-muted leading-relaxed max-w-2xl">{doctor.bio}</p>
          </Reveal>

          <Reveal delay={100} className="mt-8">
            <h2 className="text-xl font-bold text-text">Qualifications</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {doctor.qualifications.map((q) => (
                <li
                  key={q}
                  className="rounded-full bg-secondary/10 text-secondary text-sm font-medium px-3 py-1"
                >
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <DoctorSchedule doctor={doctor} />
    </>
  )
}