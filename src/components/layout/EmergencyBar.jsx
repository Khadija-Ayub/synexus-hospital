import { Phone, Clock, MapPin } from 'lucide-react'

export default function EmergencyBar() {
  return (
    <div className="bg-primary text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-2 flex flex-wrap items-center justify-between gap-2">
        
        <a
          href="tel:+921234567890"
          className="flex items-center gap-1.5 font-medium hover:text-accent transition-colors"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Emergency: 24/7 &middot; +92 123 4567890
        </a>

        <div className="hidden sm:flex items-center gap-4 text-white/85">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Open Daily, 24 Hours
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Islamabad, Pakistan
          </span>
        </div>

      </div>
    </div>
  )
}