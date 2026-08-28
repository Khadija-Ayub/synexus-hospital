import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../cards/ServiceCard'
import { services } from '../../data/services'

const previewServices = services.slice(0, 6)

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
          {previewServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}