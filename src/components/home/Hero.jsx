import { ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-muted via-surface to-surface"
        aria-hidden="true"
      />

      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <ShieldCheck
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              Trusted Healthcare Since 2011
            </span>

            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] text-text sm:text-5xl lg:text-[3.25rem]">
              Compassionate Care.{' '}
              <span className="text-primary">
                Advanced Medicine.
              </span>{' '}
              Close to You.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              SYNEXUS Medical Center brings together experienced
              specialists, modern diagnostics, and round-the-clock
              emergency care — so you and your family always have
              somewhere trustworthy to turn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/appointment"
                variant="primary"
                className="px-6 py-3 text-base"
              >
                Book an Appointment

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Button>

              <Button
                to="/services"
                variant="outline"
                className="px-6 py-3 text-base"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary">

              {/* Temporary placeholder */}
              <div className="flex h-full w-full items-center justify-center">
                <Stethoscope
                  className="h-20 w-20 text-white/40"
                  aria-hidden="true"
                />
              </div>

            </div>

            {/* Floating information card */}
            <div className="absolute -bottom-6 left-4 w-52 rounded-xl border border-border bg-surface p-4 shadow-lg sm:left-6">
              <p className="text-2xl font-extrabold text-primary">
                24/7
              </p>

              <p className="mt-0.5 text-xs text-text-muted">
                Emergency care available every day, all year
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}