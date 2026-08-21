import { Check } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function DepartmentServices({ department }) {
  return (
    <section className="py-16 bg-muted/40">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-xl font-bold text-text">Services Offered</h2>
            <ul className="mt-4 space-y-2.5">
              {department.services.map((service) => (
                <li key={service} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-xl font-bold text-text">Procedures</h2>
            <ul className="mt-4 space-y-2.5">
              {department.procedures.map((procedure) => (
                <li key={procedure} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  {procedure}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}