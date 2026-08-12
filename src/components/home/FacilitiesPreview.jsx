import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../cards/ServiceCard'
import { services } from '../../data/services'

export default function FacilitiesPreview() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <SectionHeading
          eyebrow="Facilities"
          title="Equipped for every level of care"
          description="Our facilities are built around fast, safe, and comfortable treatment — from routine visits to critical emergencies."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}