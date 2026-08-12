export default function ComingSoon({ title }) {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
        Coming Soon
      </p>
      <h1 className="mt-2 text-3xl font-bold text-text">{title}</h1>
      <p className="mt-3 text-text-muted">
        This page is part of an upcoming development phase.
      </p>
    </div>
  )
}