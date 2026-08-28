import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function ArticleCard({ slug, title, category, date, excerpt, image }) {
  return (
    <Link
      to={`/news/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface overflow-hidden transition-all hover:shadow-md"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="font-semibold text-secondary">{category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h3 className="mt-2 text-base font-semibold text-text leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Read More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}