export default function Statistic({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-extrabold text-white">{value}</p>
      <p className="mt-1.5 text-sm text-white/70">{label}</p>
    </div>
  )
}