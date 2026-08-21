import { Target, Eye } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { missionVision } from '../../data/aboutContent'

export default function MissionVision() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--container-max)] px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-surface p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Target className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-text">Our Mission</h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{missionVision.mission}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-border bg-surface p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <Eye className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-text">Our Vision</h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{missionVision.vision}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}