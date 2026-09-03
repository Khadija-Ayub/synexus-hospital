import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Cross, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
]

const trailingLinks = [
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]


function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const moreLinks = [
    { to: '/wards', label: 'Wards & Rooms' },
    { to: '/pharmacy', label: 'Pharmacy' },
    { to: '/news', label: 'News & Health Updates' },
  ]

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
      >
        More
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-surface shadow-lg py-1.5 z-50">
          {moreLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${isActive ? 'text-primary font-medium' : 'text-text hover:bg-muted'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
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
      className={`sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b transition-shadow duration-300 ${isScrolled ? 'border-border shadow-sm' : 'border-transparent'
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
                  `rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <MoreDropdown />

            {trailingLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to="/appointment"
              variant="primary"
              className="hidden md:inline-flex text-sm px-4 py-2"
            >
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
        className={`lg:hidden overflow-y-auto border-t border-border bg-surface transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[75vh]' : 'max-h-0 border-t-0'
          }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {[...navLinks, { to: '/wards', label: 'Wards & Rooms' }, { to: '/pharmacy', label: 'Pharmacy' }, { to: '/news', label: 'News & Health Updates' }, ...trailingLinks].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-muted text-primary' : 'text-text hover:bg-muted'
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