import Breadcrumbs from './Breadcrumbs'

export default function PageHero({ eyebrow, title, description, breadcrumbItems }) {
  return (
    <section className="bg-muted/50 border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-10 lg:py-14">
        <Breadcrumbs items={breadcrumbItems} />

        {eyebrow && (
          <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-secondary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base text-text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}