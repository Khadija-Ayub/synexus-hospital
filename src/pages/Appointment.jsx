import { useEffect, useState } from 'react'
import { CheckCircle2, CalendarPlus } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import FormField from '../components/ui/FormField'
import Button from '../components/ui/Button'
import { departments } from '../data/departments'
import { getDoctorsByDepartment } from '../data/doctors'

const inputClasses =
  'w-full rounded-lg border bg-background py-2.5 px-3 text-sm text-text focus-visible:outline-2 focus-visible:outline-secondary'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  departmentId: '',
  doctorId: '',
  preferredDate: '',
  message: '',
}

export default function Appointment() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Appointment Enquiry'
  }, [])

  const availableDoctors = form.departmentId ? getDoctorsByDepartment(form.departmentId) : []
  const today = new Date().toISOString().split('T')[0]

  function updateField(field, value) {
    setForm((prev) => {
      // Reset doctor selection if department changes, since the doctor list depends on it
      if (field === 'departmentId') {
        return { ...prev, departmentId: value, doctorId: '' }
      }
      return { ...prev, [field]: value }
    })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function validate() {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Please enter your full name.'

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter a phone number.'
    } else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter an email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!form.departmentId) newErrors.departmentId = 'Please select a department.'

    if (!form.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.'
    } else if (form.preferredDate < today) {
      newErrors.preferredDate = 'Please choose a date from today onward.'
    }

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleNewRequest() {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <PageHero
        eyebrow="Book a Visit"
        title="Appointment Enquiry"
        description="Request an appointment with one of our specialists. Our team will contact you to confirm your booking."
        breadcrumbItems={[{ label: 'Appointment' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="rounded-xl border border-border bg-surface p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xl font-bold text-text">Request Received</h2>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Thank you, {form.name}. Your appointment enquiry has been submitted. Our team will
                  contact you at {form.phone} or {form.email} shortly to confirm your appointment.
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  (This is a simulated confirmation — no real appointment has been booked.)
                </p>
                <Button variant="outline" className="mt-6" onClick={handleNewRequest}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <FormField label="Full Name" htmlFor="name" required error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${inputClasses} ${errors.name ? 'border-emergency' : 'border-border'}`}
                    placeholder="Your full name"
                  />
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Phone Number" htmlFor="phone" required error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`${inputClasses} ${errors.phone ? 'border-emergency' : 'border-border'}`}
                      placeholder="+92 123 4567890"
                    />
                  </FormField>

                  <FormField label="Email Address" htmlFor="email" required error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`${inputClasses} ${errors.email ? 'border-emergency' : 'border-border'}`}
                      placeholder="you@example.com"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Department" htmlFor="departmentId" required error={errors.departmentId}>
                    <select
                      id="departmentId"
                      value={form.departmentId}
                      onChange={(e) => updateField('departmentId', e.target.value)}
                      aria-invalid={!!errors.departmentId}
                      className={`${inputClasses} ${errors.departmentId ? 'border-emergency' : 'border-border'}`}
                    >
                      <option value="">Select a department</option>
                      {departments.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Doctor (Optional)" htmlFor="doctorId">
                    <select
                      id="doctorId"
                      value={form.doctorId}
                      onChange={(e) => updateField('doctorId', e.target.value)}
                      disabled={!form.departmentId}
                      className={`${inputClasses} border-border disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <option value="">
                        {form.departmentId ? 'Any available doctor' : 'Select a department first'}
                      </option>
                      {availableDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>{doc.name}</option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField label="Preferred Date" htmlFor="preferredDate" required error={errors.preferredDate}>
                  <input
                    id="preferredDate"
                    type="date"
                    min={today}
                    value={form.preferredDate}
                    onChange={(e) => updateField('preferredDate', e.target.value)}
                    aria-invalid={!!errors.preferredDate}
                    className={`${inputClasses} ${errors.preferredDate ? 'border-emergency' : 'border-border'}`}
                  />
                </FormField>

                <FormField label="Message (Optional)" htmlFor="message">
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`${inputClasses} border-border resize-none`}
                    placeholder="Briefly describe your concern or reason for the visit..."
                  />
                </FormField>

                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                  Submit Appointment Request
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}