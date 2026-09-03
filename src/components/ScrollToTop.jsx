import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// src/components/ScrollToTop.jsx
// React Router doesn't reset scroll position on client-side navigation by
// default, so without this, pages open wherever the previous page was scrolled to.

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}