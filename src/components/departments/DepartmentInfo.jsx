import { Clock, MapPin, Siren } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function DepartmentInfo({ department }) {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-text">Overview</h2>
            <p className="mt-3 text-text-muted leading-relaxed">{department.description}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text">
                  <Clock className="h-4 w-4 text-secondary" aria-hidden="true" />
                  Clinic Hours
                </div>
                <p className="mt-1 text-sm text-text-muted">{department.timings.clinic}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text">
                  <Siren className="h-4 w-4 text-emergency" aria-hidden="true" />
                  Emergency Availability
                </div>
                <p className="mt-1 text-sm text-text-muted">{department.timings.emergency}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  Location
                </div>
                <p className="mt-1 text-sm text-text-muted">{department.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}