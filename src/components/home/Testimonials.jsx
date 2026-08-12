import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-muted/40">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What our patients say"
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}