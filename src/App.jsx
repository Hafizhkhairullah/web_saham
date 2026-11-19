import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TentangKamiPage from './pages/TentangKamiPage'
import KontakPage from './pages/KontakPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tentang" element={<TentangKamiPage />} />
      <Route path="/kontak" element={<KontakPage />} />
      {/* Redirect legacy routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
