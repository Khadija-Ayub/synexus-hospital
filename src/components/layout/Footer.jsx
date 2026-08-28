import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Cross } from 'lucide-react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/doctors', label: 'Find a Doctor' },
  { to: '/wards', label: 'Wards & Rooms' },
  { to: '/pharmacy', label: 'Pharmacy' },
  { to: '/appointment', label: 'Book Appointment' },
  { to: '/news', label: 'Health Updates' },
  { to: '/contact', label: 'Contact' },
]

const departmentLinks = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'General Surgery',
  'Obstetrics & Gynecology',
]

const socialLinks = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: '#',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: '#',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: '#',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: '#',
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <Cross
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                />
              </span>

              SYNEXUS Medical Center
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Compassionate, modern healthcare for you and your family,
              backed by specialists and technology you can trust.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Departments
            </h3>

            <ul className="mt-4 space-y-2.5">
              {departmentLinks.map((name) => (
                <li key={name}>
                  <Link
                    to="/departments"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-white/80">

              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />

                <span>
                  123 Health Avenue, Islamabad, Pakistan
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="tel:+921234567890"
                  className="transition-colors hover:text-white"
                >
                  +92 123 4567890
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="mailto:info@synexusmedical.com"
                  className="transition-colors hover:text-white"
                >
                  info@synexusmedical.com
                </a>
              </li>

              {/* Emergency */}
              <li className="pt-1 font-medium text-white">
                Emergency Line: 24/7
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">

          <p>
            &copy; {new Date().getFullYear()} SYNEXUS Medical Center.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}