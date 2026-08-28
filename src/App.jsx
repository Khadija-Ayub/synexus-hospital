import { Routes, Route } from 'react-router-dom'
import EmergencyBar from './components/layout/EmergencyBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import About from './pages/About'
import Departments from './pages/Departments'
import DepartmentDetail from './pages/DepartmentDetail'
import Doctors from './pages/Doctors'
import DoctorDetail from './pages/DoctorDetail'
import Wards from './pages/Wards'
import Pharmacy from './pages/Pharmacy'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <EmergencyBar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:departmentId" element={<DepartmentDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
          <Route path="/wards" element={<Wards />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App