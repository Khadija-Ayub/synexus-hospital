import { useInView } from '../../hooks/useInView'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView()
  const cappedDelay = Math.min(delay, 240)

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{ transitionDelay: isInView ? `${cappedDelay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}