import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Cross } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b transition-shadow duration-300 ${
        isScrolled ? 'border-border shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Cross className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            SYNEXUS
            <span className="hidden sm:inline font-medium text-text-muted">Medical Center</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/appointment" variant="primary" className="hidden sm:inline-flex">
              Book Appointment
            </Button>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-muted"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-border bg-surface transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-sm font-medium ${
                  isActive ? 'bg-muted text-primary' : 'text-text hover:bg-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/appointment" variant="primary" className="mt-2 w-full">
            Book Appointment
          </Button>
        </nav>
      </div>
    </header>
  )
}