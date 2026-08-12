import { HeartPulse, Brain, Bone, Baby, Scissors, HeartHandshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = { HeartPulse, Brain, Bone, Baby, Scissors, HeartHandshake }

export default function DepartmentCard({ slug, name, icon, description }) {
  const Icon = icons[icon] ?? HeartPulse

  return (
    <Link
      to={`/departments/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-secondary/40 hover:shadow-md"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-text">{name}</h3>
      <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  )
}