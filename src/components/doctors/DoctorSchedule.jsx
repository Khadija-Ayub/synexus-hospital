import { CalendarClock, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function DoctorSchedule({ doctor }) {
  return (
    <section className="py-16 bg-muted/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-secondary" aria-hidden="true" />
              Consultation Schedule
            </h2>
            <ul className="mt-4 divide-y divide-border rounded-xl border border-border overflow-hidden">
              {doctor.schedule.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between px-4 py-3 bg-surface text-sm"
                >
                  <span className="font-medium text-text">{slot.day}</span>
                  <span className="text-text-muted">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              Location
            </h2>
            <p className="mt-4 text-sm text-text-muted">{doctor.location}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}