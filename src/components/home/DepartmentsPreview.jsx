import SectionHeading from '../ui/SectionHeading'
import DepartmentCard from '../cards/DepartmentCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { departments } from '../../data/departments'

export default function DepartmentsPreview() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
            <SectionHeading
              eyebrow="Our Departments"
              title="Specialized care, all in one place"
              description="From routine checkups to complex procedures, our departments bring together the expertise your family needs."
            />
            <Button to="/departments" variant="outline" className="shrink-0">
              View All Departments
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <Reveal key={dept.slug} delay={i * 80}>
              <DepartmentCard {...dept} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}