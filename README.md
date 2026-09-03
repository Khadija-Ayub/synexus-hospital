# SYNEXUS Medical Center — Hospital Information Website

A professional, responsive, multi-page frontend website for a fictional hospital, built as a frontend developer internship project for SYNEXUS Software Technologies.

This is a **public-facing, informational website only** — frontend-only, no backend, no database, no authentication, and no real appointment processing. All content is local placeholder data designed to be easily replaced by a real client.

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS 4** — styling (CSS-first `@theme` configuration, no separate config file)
- **React Router 7** — client-side routing
- **lucide-react** — icon library

No state management library, no animation library, and no UI kit — deliberately kept dependency-light per the project's performance requirements. Scroll-reveal animations and form validation are hand-built using native React state and the browser's IntersectionObserver API.

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build
```

Builds an optimized, minified production bundle into `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the built `dist/` output locally (typically at `http://localhost:4173`) so you can verify the real production build before deployment — this is the version that should be used for accurate performance testing (e.g. Lighthouse), not the dev server.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, EmergencyBar, SkipLink
│   ├── ui/            # Reusable primitives: Button, Container, SectionHeading,
│   │                   Breadcrumbs, PageHero, Reveal, FormField
│   ├── cards/          # DepartmentCard, DoctorCard, ServiceCard, Statistic,
│   │                    TestimonialCard, ArticleCard
│   ├── home/           # Home page section components (Hero, QuickAccess, etc.)
│   ├── about/          # About page section components
│   ├── departments/    # Department detail page section components
│   ├── doctors/        # Doctor listing/detail page section components
│   └── wards/          # Ward card component
├── data/                # Local data files (single source of truth for all
│                          repeated content — departments, doctors, services,
│                          wards, news, static hospital info)
├── hooks/                # useInView (powers scroll-reveal animation)
├── pages/                # One component per route
├── App.jsx               # Route definitions
├── main.jsx               # App entry point, router + scroll reset setup
└── index.css               # Design tokens (colors, type, spacing) + global styles
```

## Data Architecture

All repeated content lives in `src/data/` as plain JavaScript objects/arrays — no hardcoded, duplicated markup anywhere in the codebase.

**Relational model:** doctors and departments are linked via ID, not duplicated data:
- Each doctor stores its own `departmentId`
- Department detail pages derive their doctor list by filtering doctors on that ID (`getDoctorsByDepartment()`)
- This means adding a new doctor to `doctors.js` automatically makes them appear in the correct department page and the main doctors directory — no second file to update

The same "one file to edit, everything updates" principle applies to `wards.js`, `services.js`, `news.js`, and `testimonials.js`.

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/departments` | Departments listing |
| `/departments/:departmentId` | Department detail (one reusable template for all departments) |
| `/doctors` | Doctors listing, with search + specialty/department filtering |
| `/doctors/:doctorId` | Doctor profile detail (one reusable template for all doctors) |
| `/wards` | Wards & Rooms |
| `/pharmacy` | Pharmacy |
| `/services` | Services & Facilities |
| `/appointment` | Appointment Enquiry (validated form, simulated confirmation) |
| `/news` | News & Health Updates listing |
| `/news/:slug` | Article detail (one reusable template for all articles) |
| `/contact` | Contact (validated form, map embed) |

Invalid `:departmentId`, `:doctorId`, or `:slug` values render a graceful "Not Found" state rather than crashing.

## Key Features

- Fully responsive (tested from 360px mobile through 1440px+ desktop)
- Accessible: semantic HTML, proper heading hierarchy, labeled form controls, visible focus states, `aria-live` regions for dynamic content (like search results), skip-to-content link
- Working doctor search and filtering (by name, specialty, and department — combinable)
- Two fully validated forms (Appointment Enquiry, Contact) with inline error messaging and simulated success confirmations
- Scroll-triggered reveal animations, respecting `prefers-reduced-motion`
- All images optimized via Unsplash's resize API (`?w=...&h=...&fit=crop&auto=format&q=80`) with `loading="lazy"` below the fold

## Known Limitations (By Design)

Per the project's scope, the following are intentionally **not** implemented:
- No backend, database, or authentication
- No real appointment booking, payment processing, or patient records
- Forms simulate a successful submission but do not send real data anywhere
- Map embed uses Google Maps' no-API-key embed format

## Browser Support

Tested in Chrome, Edge, and Firefox (latest versions). Safari testing was limited by device availability during development.

## License / Content Notice

All doctor names, hospital branding, testimonials, and article content are fictional placeholder data. Photography is sourced from Unsplash under the Unsplash License (free for commercial use, no attribution required).