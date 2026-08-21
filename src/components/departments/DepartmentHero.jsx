import Breadcrumbs from '../ui/Breadcrumbs'
import Button from '../ui/Button'

export default function DepartmentHero({ department }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-10 lg:py-14">
        <Breadcrumbs
          items={[{ label: 'Departments', to: '/departments' }, { label: department.name }]}
        />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Department
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              {department.name}
            </h1>
            <p className="mt-3 text-text-muted leading-relaxed max-w-md">
              {department.shortDescription}
            </p>
            <Button to="/appointment" variant="primary" className="mt-6">
              Book an Appointment
            </Button>
          </div>

          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
            <img
              src={department.image}
              alt={`${department.name} department at SYNEXUS Medical Center`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}