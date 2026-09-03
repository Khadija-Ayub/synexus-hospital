import { useInView } from '../../hooks/useInView'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView()
  // src/components/ui/Reveal.jsx
  // Cap stagger delay so grids with many items (e.g. 12 doctors) don't take
  // a long time to finish revealing — without this, item #12's delay would be i * 60ms.
  const cappedDelay = Math.min(delay, 240)

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${className}`}
      style={{ transitionDelay: isInView ? `${cappedDelay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}