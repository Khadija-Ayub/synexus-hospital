import Hero from '../components/home/Hero'
import QuickAccess from '../components/home/QuickAccess'
import DepartmentsPreview from '../components/home/DepartmentsPreview'
import Statistics from '../components/home/Statistics'
import DoctorsPreview from '../components/home/DoctorsPreview'
import FacilitiesPreview from '../components/home/FacilitiesPreview'
import Testimonials from '../components/home/Testimonials'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <DepartmentsPreview />
      <Statistics />
      <DoctorsPreview />
      <FacilitiesPreview />
      <Testimonials />
      <FinalCTA />
    </>
  )
}