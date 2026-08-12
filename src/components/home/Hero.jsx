import { ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Decorative background shape */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-muted via-surface to-surface"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-max)] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Trusted Healthcare Since 2011
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-text">
              Compassionate Care.{' '}
              <span className="text-primary">Advanced Medicine.</span>{' '}
              Close to You.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
              SYNEXUS Medical Center brings together experienced specialists,
              modern diagnostics, and round-the-clock emergency care — so you
              and your family always have somewhere trustworthy to turn.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/appointment" variant="primary" className="text-base px-6 py-3">
                Book an Appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/services" variant="outline" className="text-base px-6 py-3">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary">
              {/* Replace with a real, license-safe photo when available:
                  <img src="/hero-doctor.jpg" alt="Doctor consulting with a patient at SYNEXUS Medical Center" className="h-full w-full object-cover" /> */}
              <div className="flex h-full w-full items-center justify-center">
                <Stethoscope className="h-20 w-20 text-white/40" aria-hidden="true" />
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 w-52 rounded-xl bg-surface p-4 shadow-lg border border-border">
              <p className="text-2xl font-extrabold text-primary">24/7</p>
              <p className="text-xs text-text-muted mt-0.5">
                Emergency care available every day, all year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}