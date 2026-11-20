import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/hero/HeroSection'
import MarketTickerDivider from '../components/shared/MarketTickerDivider'
import AboutSection from '../components/about/AboutSection'
import ServicesSection from '../components/portfolio/ServicesSection'
import KontakSection from '../components/kontak/KontakSection'
import Footer from '../components/layout/Footer'
import { useGSAPScrollAnimations } from '../hooks/useGSAPScrollAnimations'

export default function HomePage() {
  const location = useLocation()

  // Initialize all GSAP ScrollTrigger animations
  useGSAPScrollAnimations()

  // Smooth scroll to section if URL has a hash (e.g. /#layanan)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarketTickerDivider />
      <AboutSection />
      <ServicesSection />
      <KontakSection />
      <Footer />
    </main>
  )
}
