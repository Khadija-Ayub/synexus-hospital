import { Clock } from 'lucide-react'
import Button from '../ui/Button'

export default function DoctorCard({ slug, name, specialty, experience, availability, image }) {
  return (
<div className="group flex flex-col rounded-xl border border-border bg-surface overflow-hidden transition-all hover:shadow-md">      <div className="aspect-[4/3] w-full bg-muted overflow-hidden">
        <img
          src={image}
          alt={`Portrait of ${name}, ${specialty}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          width={400}
          height={300}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-text">{name}</h3>
        <p className="text-sm text-secondary font-medium mt-0.5">{specialty}</p>
        <p className="text-sm text-text-muted mt-2">{experience}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-text-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {availability}
        </p>
        <Button to={`/doctors/${slug}`} variant="outline" className="mt-4 w-full">
          View Profile
        </Button>
      </div>
    </div>
  )
}