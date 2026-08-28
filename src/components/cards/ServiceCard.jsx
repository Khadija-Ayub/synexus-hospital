import {
  Ambulance, ScanLine, FlaskConical, HeartPulse, Syringe, Truck,
  Radiation, Utensils, ParkingSquare, Accessibility,
} from 'lucide-react'

const icons = {
  Ambulance, ScanLine, FlaskConical, HeartPulse, Syringe, Truck,
  Radiation, Utensils, ParkingSquare, Accessibility,
}

export default function ServiceCard({ icon, name, shortDescription }) {
  const Icon = icons[icon] ?? HeartPulse

  return (
    <div className="flex items-start gap-4 rounded-xl p-5 hover:bg-surface transition-colors">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base font-semibold text-text">{name}</h3>
        <p className="mt-1 text-sm text-text-muted leading-relaxed">{shortDescription}</p>
      </div>
    </div>
  )
}