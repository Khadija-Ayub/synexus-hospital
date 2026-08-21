import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { historyTimeline } from '../../data/aboutContent'

export default function HistoryTimeline() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading eyebrow="Our Story" title="A History of Trusted Care" />

        <ol className="mt-10 relative border-l border-border pl-8 space-y-10">
          {historyTimeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 80}>
              <li className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 rounded-full bg-secondary ring-4 ring-secondary/15" />
                <span className="text-sm font-bold text-secondary">{item.year}</span>
                <h3 className="mt-1 text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-text-muted leading-relaxed max-w-xl">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}