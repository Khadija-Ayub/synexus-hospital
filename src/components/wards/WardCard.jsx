import { BedDouble, DoorClosed, HeartPulse, Baby, Clock, Users, Info } from 'lucide-react'

const icons = { BedDouble, DoorClosed, HeartPulse, Baby }

export default function WardCard({ name, icon, description, roomTypes, facilities, visitingHours, visitorRules }) {
  const Icon = icons[icon] ?? BedDouble

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-text">{name}</h3>
          <p className="mt-1 text-sm text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-border pt-5">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-secondary">Room Types</h4>
          <ul className="mt-2 space-y-1.5">
            {roomTypes.map((type) => (
              <li key={type} className="text-sm text-text-muted">{type}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-secondary">Facilities</h4>
          <ul className="mt-2 space-y-1.5">
            {facilities.map((facility) => (
              <li key={facility} className="text-sm text-text-muted">{facility}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-border pt-5">
        <div className="flex items-start gap-2.5">
          <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold text-text">Visiting Hours</p>
            <p className="text-sm text-text-muted mt-0.5">{visitingHours}</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold text-text">Visitor Rules</p>
            <ul className="mt-0.5 space-y-1">
              {visitorRules.map((rule) => (
                <li key={rule} className="text-sm text-text-muted flex items-start gap-1.5">
                  <Info className="h-3 w-3 mt-1 shrink-0 text-text-muted/60" aria-hidden="true" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}