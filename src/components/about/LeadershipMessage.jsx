import Reveal from '../ui/Reveal'
import { leadership } from '../../data/aboutContent'

export default function LeadershipMessage() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-3xl mx-auto text-center sm:text-left">
            <img
              src={leadership.image}
              alt={`Portrait of ${leadership.name}, ${leadership.position}`}
              className="h-24 w-24 rounded-full object-cover shrink-0 ring-4 ring-white/15"
              loading="lazy"
              width={96}
              height={96}
            />
            <div>
              <svg className="h-7 w-7 text-white/25 mx-auto sm:mx-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.5 8.5C7 8.5 5 10.5 5 13v5h6v-6H8c0-1.5 1-3 3-3V6c-.5 0-1 .1-1.5.5zm9 0c-2.5 0-4.5 2-4.5 4.5v5h6v-6h-3c0-1.5 1-3 3-3V6c-.5 0-1 .1-1.5.5z" />
              </svg>
              <p className="mt-2 text-white/90 leading-relaxed">{leadership.message}</p>
              <p className="mt-4 font-semibold text-white">{leadership.name}</p>
              <p className="text-sm text-white/70">{leadership.position}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}