import {
  Ambulance,
  Stethoscope,
  LayoutGrid,
  CalendarCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const items = [
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: '24/7 emergency support',
    to: '/services',
    tone: 'bg-emergency/10 text-emergency',
  },
  {
    icon: Stethoscope,
    title: 'Find a Doctor',
    description: 'Explore our specialists',
    to: '/doctors',
    tone: 'bg-secondary/10 text-secondary',
  },
  {
    icon: LayoutGrid,
    title: 'Departments',
    description: 'Find the right care',
    to: '/departments',
    tone: 'bg-primary/10 text-primary',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment',
    description: 'Request an appointment',
    to: '/appointment',
    tone: 'bg-accent/10 text-accent',
  },
]

export default function QuickAccess() {
  return (
    <section className="relative z-20 -mt-16 lg:-mt-20">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-4 shadow-lg lg:grid-cols-4">
          {items.map(
            ({ icon: Icon, title, description, to, tone }) => (
              <Link
                key={title}
                to={to}
                className="flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-colors hover:bg-muted"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${tone}`}
                >
                  <Icon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-sm font-semibold text-text">
                  {title}
                </span>

                <span className="text-xs text-text-muted">
                  {description}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}