import Statistic from '../cards/Statistic'

const stats = [
  { value: '15+', label: 'Years of Care' },
  { value: '40+', label: 'Specialists' },
  { value: '25K+', label: 'Patients Served' },
  { value: '24/7', label: 'Emergency Support' },
]

export default function Statistics() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Statistic key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}