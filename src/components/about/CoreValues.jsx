import { HeartHandshake, Award, Heart, ShieldCheck, Lightbulb, Shield } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { coreValues } from '../../data/aboutContent'

const icons = { HeartHandshake, Award, Heart, ShieldCheck, Lightbulb, Shield }

export default function CoreValues() {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading eyebrow="What Guides Us" title="Our Core Values" align="center" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => {
            const Icon = icons[value.icon]
            return (
              <Reveal key={value.title} delay={i * 60}>
                <div className="rounded-xl bg-surface border border-border p-6 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-text">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}