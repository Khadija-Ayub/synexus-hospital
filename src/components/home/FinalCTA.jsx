import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="rounded-2xl bg-primary px-8 py-14 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto leading-tight">
            Your health deserves thoughtful care.
          </h2>
          <p className="mt-4 text-white/75 max-w-md mx-auto">
            Whether it's a routine checkup or urgent concern, our team is ready
            to help you take the next step.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/appointment" variant="secondary" className="text-base px-6 py-3">
              Request an Appointment
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="text-base px-6 py-3 !border-white/30 !text-white hover:!bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}