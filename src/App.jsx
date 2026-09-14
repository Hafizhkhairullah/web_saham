import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EdukasiPage from './pages/EdukasiPage'
import TentangKamiPage from './pages/TentangKamiPage'
import InsightPage from './pages/InsightPage'
import KontakPage from './pages/KontakPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edukasi" element={<EdukasiPage />} />
      <Route path="/tentang" element={<TentangKamiPage />} />
      <Route path="/insight" element={<InsightPage />} />
      <Route path="/kontak" element={<KontakPage />} />
    </Routes>
  )
}
