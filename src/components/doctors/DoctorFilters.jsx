import { Search, X } from 'lucide-react'

export default function DoctorFilters({
  searchTerm,
  onSearchChange,
  specialty,
  onSpecialtyChange,
  specialties,
  departmentId,
  onDepartmentChange,
  departments,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <label htmlFor="doctor-search" className="sr-only">
            Search doctors by name
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted"
            aria-hidden="true"
          />
          <input
            id="doctor-search"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search doctor by name..."
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm text-text placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-secondary"
          />
        </div>

        <div className="flex-1 sm:flex-none sm:w-48">
          <label htmlFor="specialty-filter" className="sr-only">
            Filter by specialty
          </label>
          <select
            id="specialty-filter"
            value={specialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-2.5 px-3 text-sm text-text focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <option value="all">All Specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 sm:flex-none sm:w-52">
          <label htmlFor="department-filter" className="sr-only">
            Filter by department
          </label>
          <select
            id="department-filter"
            value={departmentId}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-2.5 px-3 text-sm text-text focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <option value="all">All Departments</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-muted hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>
    </div>
  )
}