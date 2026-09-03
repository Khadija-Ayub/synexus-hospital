import { useEffect, useState } from 'react'
import { Cross } from 'lucide-react'

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
const fadeTimer = setTimeout(() => setFadeOut(true), 2500)
const doneTimer = setTimeout(() => onFinish(), 3000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-[#050B17] via-[#0B1A2E] to-primary transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" aria-hidden="true" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 border border-white/20">
          <Cross className="h-8 w-8 text-white" aria-hidden="true" />
        </span>
      </div>

      <p className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-wide">
        SYNEXUS <span className="font-light text-white/70">Medical Center</span>
      </p>
      <p className="mt-2 text-xs text-white/40 tracking-[0.2em] uppercase">
        Compassionate Care · Advanced Medicine
      </p>
    </div>
  )
}