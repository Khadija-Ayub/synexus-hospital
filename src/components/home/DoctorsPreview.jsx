import SectionHeading from '../ui/SectionHeading'
import DoctorCard from '../cards/DoctorCard'
import Button from '../ui/Button'
import { doctors } from '../../data/doctors'

const featuredDoctors = doctors.slice(0, 6)

export default function DoctorsPreview() {
  return (
    <section className="py-20 lg:py-24 bg-muted/40">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Experienced specialists you can trust"
          description="Our doctors combine deep clinical expertise with a genuinely patient-first approach to care."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDoctors.map((doc) => (
            <DoctorCard key={doc.slug} {...doc} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/doctors" variant="primary">View All Doctors</Button>
        </div>
      </div>
    </section>
  )
}