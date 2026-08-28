import { useEffect } from 'react'
import { MapPin, Clock, Phone, Mail, CheckCircle2, Info } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { pharmacyInfo } from '../data/hospitalInfo'

export default function Pharmacy() {
  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Pharmacy'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Hospital Pharmacy"
        title="Pharmacy"
        description="Prescription and medication support for patients and visitors, located on-site."
        breadcrumbItems={[{ label: 'Pharmacy' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: services + guidance */}
            <div className="lg:col-span-2 space-y-10">
              <Reveal>
                <SectionHeading eyebrow="What We Offer" title="Pharmacy Services" />
                <ul className="mt-5 space-y-3">
                  {pharmacyInfo.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-xl border border-border bg-muted/40 p-6 flex gap-3">
                  <Info className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-text">Prescription Guidance</h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                      {pharmacyInfo.guidance}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: at-a-glance info */}
            
            < Reveal delay={150}>
              <div className="rounded-xl border border-border bg-surface p-6 space-y-5 sticky top-24">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Location</p>
                    <p className="text-sm text-text-muted mt-0.5">{pharmacyInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Operating Hours</p>
                    <p className="text-sm text-text-muted mt-0.5">{pharmacyInfo.hours.weekdays}</p>
                    <p className="text-sm text-text-muted">{pharmacyInfo.hours.weekend}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Phone</p>
                    <a
                      href={`tel:${pharmacyInfo.contact.phone.replace(/\s/g, '')}`}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {pharmacyInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Email</p>
                    <a
                      href={`mailto:${pharmacyInfo.contact.email}`}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {pharmacyInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}