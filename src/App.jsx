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
          <Route path="/wards" element={<ComingSoon title="Wards & Rooms" />} />
          <Route path="/pharmacy" element={<ComingSoon title="Pharmacy" />} />
          <Route path="/services" element={<ComingSoon title="Services & Facilities" />} />
          <Route path="/appointment" element={<ComingSoon title="Appointment Enquiry" />} />
          <Route path="/news" element={<ComingSoon title="News & Health Updates" />} />
          <Route path="/news/:slug" element={<ComingSoon title="Article" />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App