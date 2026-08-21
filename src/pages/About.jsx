import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import HistoryTimeline from '../components/about/HistoryTimeline'
import LeadershipMessage from '../components/about/LeadershipMessage'
import QualityStandards from '../components/about/QualityStandards'

export default function About() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | About Us'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Care Built on Trust and Experience"
        description="Learn about SYNEXUS Medical Center's mission, values, and the team dedicated to your health."
        breadcrumbItems={[{ label: 'About' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-wide text-secondary">Who We Are</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text">Hospital Overview</h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                SYNEXUS Medical Center is a multi-specialty hospital dedicated to providing accessible,
                high-quality healthcare to the communities we serve. We bring together experienced
                specialists, modern diagnostic technology, and a genuinely patient-centered approach —
                because we believe good medicine and good care should never be separate things.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                From routine checkups to complex, specialized treatment, our teams work together to
                make sure every patient feels heard, informed, and well cared for at every step of
                their visit.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <MissionVision />
      <CoreValues />
      <HistoryTimeline />
      <LeadershipMessage />
      <QualityStandards />
    </>
  )
}