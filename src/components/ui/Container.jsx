export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[var(--container-max)] px-6 ${className}`}>
      {children}
    </div>
  )
}