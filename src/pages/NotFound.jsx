import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound({ title = 'Page Not Found', message, backTo = '/', backLabel = 'Back to Home' }) {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted text-text-muted">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-text">{title}</h1>
      <p className="mt-2 text-text-muted max-w-md mx-auto">
        {message ?? "We couldn't find what you were looking for."}
      </p>
      <Button to={backTo} variant="primary" className="mt-6">
        {backLabel}
      </Button>
    </div>
  )
}