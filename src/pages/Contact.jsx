import { useEffect, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Siren, CheckCircle2, Send } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import FormField from '../components/ui/FormField'
import Button from '../components/ui/Button'
import { contactInfo } from '../data/hospitalInfo'

const inputClasses =
  'w-full rounded-lg border bg-background py-2.5 px-3 text-sm text-text focus-visible:outline-2 focus-visible:outline-secondary'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'SYNEXUS Medical Center | Contact'
  }, [])

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter an email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.'
    if (!form.message.trim()) newErrors.message = 'Please enter a message.'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  function handleNewMessage() {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Reach out with questions, feedback, or general inquiries — our team is here to help."
        breadcrumbItems={[{ label: 'Contact' }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: info panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-emergency/30 bg-emergency/5 p-5 flex gap-3">
                <Siren className="h-5 w-5 text-emergency shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-emergency">Medical Emergency?</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Please call our 24/7 emergency line immediately rather than using this form.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6 space-y-5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Address</p>
                    <p className="text-sm text-text-muted mt-0.5">{contactInfo.address}</p>
                  </div>
                </div>
                {contactInfo.phones.map((p) => (
                  <div key={p.label} className="flex items-start gap-2.5">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-text">{p.label}</p>
                      <a
                        href={`tel:${p.number.replace(/\s/g, '')}`}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {p.number}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-text">Hours</p>
                    <p className="text-sm text-text-muted mt-0.5">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  title="SYNEXUS Medical Center location map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl border border-border bg-surface p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-text">Message Sent</h2>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Thank you, {form.name}. We've received your message and will get back to you at{' '}
                    {form.email} soon.
                  </p>
                  <p className="mt-2 text-xs text-text-muted">
                    (This is a simulated confirmation — no message has actually been sent.)
                  </p>
                  <Button variant="outline" className="mt-6" onClick={handleNewMessage}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full Name" htmlFor="c-name" required error={errors.name}>
                      <input
                        id="c-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        aria-invalid={!!errors.name}
                        className={`${inputClasses} ${errors.name ? 'border-emergency' : 'border-border'}`}
                        placeholder="Your full name"
                      />
                    </FormField>
                    <FormField label="Email Address" htmlFor="c-email" required error={errors.email}>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        aria-invalid={!!errors.email}
                        className={`${inputClasses} ${errors.email ? 'border-emergency' : 'border-border'}`}
                        placeholder="you@example.com"
                      />
                    </FormField>
                  </div>

                  <FormField label="Subject" htmlFor="c-subject" required error={errors.subject}>
                    <input
                      id="c-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      aria-invalid={!!errors.subject}
                      className={`${inputClasses} ${errors.subject ? 'border-emergency' : 'border-border'}`}
                      placeholder="What is this regarding?"
                    />
                  </FormField>

                  <FormField label="Message" htmlFor="c-message" required error={errors.message}>
                    <textarea
                      id="c-message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      aria-invalid={!!errors.message}
                      className={`${inputClasses} resize-none ${errors.message ? 'border-emergency' : 'border-border'}`}
                      placeholder="How can we help?"
                    />
                  </FormField>

                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}