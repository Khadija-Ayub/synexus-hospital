import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ArticleCard from '../components/cards/ArticleCard'
import { news } from '../data/news'

export default function News() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | News & Health Updates'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Health Updates"
        title="News & Health Updates"
        description="Health tips, hospital news, and specialist insights from our clinical teams."
        breadcrumbItems={[{ label: 'News' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, i) => (
              <Reveal key={article.slug} delay={Math.min(i * 60, 180)}>
                <ArticleCard {...article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}