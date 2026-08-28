import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getNewsBySlug } from '../data/news'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import NotFound from './NotFound'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function NewsDetail() {
  const { slug } = useParams()
  const article = getNewsBySlug(slug)

  useEffect(() => {
    document.title = article
      ? `SYNEXUS Medical Center | ${article.title}`
      : 'SYNEXUS Medical Center | Article Not Found'
  }, [article])

  if (!article) {
    return (
      <NotFound
        title="Article Not Found"
        message="We couldn't find the article you're looking for."
        backTo="/news"
        backLabel="Back to News"
      />
    )
  }

  const paragraphs = article.content.split('\n\n')

  return (
    <article className="py-10 lg:py-14">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'News', to: '/news' }, { label: article.title }]} />

          <Reveal>
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide text-secondary">
              {article.category}
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              {article.title}
            </h1>
            <time dateTime={article.date} className="mt-3 block text-sm text-text-muted">
              {formatDate(article.date)}
            </time>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <img
                src={article.image}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 space-y-4">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Link
              to="/news"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to News
            </Link>
          </Reveal>
        </div>
      </Container>
    </article>
  )
}