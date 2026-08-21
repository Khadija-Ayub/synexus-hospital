import { BadgeCheck, ShieldAlert, ClipboardCheck, SprayCan } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { qualityStandards } from '../../data/aboutContent'

const icons = { BadgeCheck, ShieldAlert, ClipboardCheck, SprayCan }

export default function QualityStandards() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading eyebrow="Accreditation & Quality" title="Our Quality Standards" description="We hold ourselves accountable to rigorous internal standards across every department." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualityStandards.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-xl border border-border p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}