import { ArrowRight, Briefcase } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { siteContent } from '../../config/siteContent'

export default function HeroActions() {
  const navigate = useNavigate()

  const handlePrimary = () => {
    const servicesEl = document.getElementById('layanan')
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#layanan')
    }
  }

  const handleSecondary = () => {
    navigate('/kontak')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3.5">
      <Button
        variant="primary"
        size="lg"
        id="hero-primary-cta"
        icon={<Briefcase size={18} weight="bold" />}
        iconPosition="left"
        onClick={handlePrimary}
        aria-label={siteContent.home.hero.ctaPrimary}
      >
        {siteContent.home.hero.ctaPrimary}
      </Button>

      <Button
        variant="secondary"
        size="lg"
        id="hero-secondary-cta"
        icon={<ArrowRight size={17} weight="bold" />}
        iconPosition="right"
        onClick={handleSecondary}
        aria-label={siteContent.home.hero.ctaSecondary}
      >
        {siteContent.home.hero.ctaSecondary}
      </Button>
    </div>
  )
}
