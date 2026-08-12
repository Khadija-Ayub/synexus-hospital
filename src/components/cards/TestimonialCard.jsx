import { Quote } from 'lucide-react'

export default function TestimonialCard({ quote, name, context }) {
  return (
    <div className="flex flex-col rounded-xl bg-surface border border-border p-6">
      <Quote className="h-6 w-6 text-secondary/40" aria-hidden="true" />
      <p className="mt-4 text-sm text-text leading-relaxed flex-1">"{quote}"</p>
      <div className="mt-5 pt-4 border-t border-border">
        <p className="text-sm font-semibold text-text">{name}</p>
        <p className="text-xs text-text-muted">{context}</p>
      </div>
    </div>
  )
}