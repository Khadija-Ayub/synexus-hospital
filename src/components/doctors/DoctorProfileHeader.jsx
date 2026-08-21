import { GraduationCap, Briefcase, Languages } from 'lucide-react'
import Breadcrumbs from '../ui/Breadcrumbs'
import Button from '../ui/Button'

export default function DoctorProfileHeader({ doctor, departmentName }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-10 lg:py-14">
        <Breadcrumbs
          items={[{ label: 'Doctors', to: '/doctors' }, { label: doctor.name }]}
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-8 items-start">
          <div className="aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-xl">
            <img
              src={doctor.image}
              alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text">{doctor.name}</h1>
            <p className="mt-1 text-secondary font-medium">{doctor.specialty}</p>
            {departmentName && (
              <p className="text-sm text-text-muted mt-0.5">{departmentName}</p>
            )}

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                {doctor.experience}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                {doctor.qualifications[0]}
                {doctor.qualifications.length > 1 && ` +${doctor.qualifications.length - 1} more`}
              </span>
              <span className="flex items-center gap-1.5">
                <Languages className="h-4 w-4 text-primary" aria-hidden="true" />
                {doctor.languages.join(', ')}
              </span>
            </div>

            <Button to="/appointment" variant="primary" className="mt-6">
              Request Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}