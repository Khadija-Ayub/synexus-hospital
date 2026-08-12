import { Routes, Route } from 'react-router-dom'
import EmergencyBar from './components/layout/EmergencyBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <EmergencyBar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="/departments" element={<ComingSoon title="Departments" />} />
          <Route path="/departments/:slug" element={<ComingSoon title="Department Detail" />} />
          <Route path="/doctors" element={<ComingSoon title="Doctors" />} />
          <Route path="/doctors/:slug" element={<ComingSoon title="Doctor Profile" />} />
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