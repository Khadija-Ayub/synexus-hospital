export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}