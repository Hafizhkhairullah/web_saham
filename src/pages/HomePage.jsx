import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/hero/HeroSection'
import MarketTickerDivider from '../components/shared/MarketTickerDivider'
import AboutSection from '../components/about/AboutSection'
import EdukasiSection from '../components/edukasi/EdukasiSection'
import InsightSection from '../components/insight/InsightSection'
import KontakSection from '../components/kontak/KontakSection'
import Footer from '../components/layout/Footer'
import { useGSAPScrollAnimations } from '../hooks/useGSAPScrollAnimations'

export default function HomePage() {
  // Initialize all GSAP ScrollTrigger animations
  useGSAPScrollAnimations()

  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarketTickerDivider />
      <AboutSection />
      <EdukasiSection />
      <InsightSection />
      <KontakSection />
      {/* <ProductsSection /> */}
      {/* <StatsSection /> */}
      <Footer />
    </main>
  )
}
