import { ArrowRight, ChartBar } from '@phosphor-icons/react'
import Button from '../ui/Button'
import { siteContent } from '../../config/siteContent'

export default function HeroActions() {
  const handlePrimary = () => {
    window.Location.href = '/kontak'
  }


  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        variant="primary"
        size="lg"
        id="hero-primary-cta"
        icon={<ArrowRight size={18} weight="bold" />}
        iconPosition="right"
        onClick={handlePrimary}
        aria-label={`${siteContent.home.hero.ctaPrimary} - Hubungi Kami sekarang`}
      >
        {siteContent.home.hero.ctaPrimary}
      </Button>


    </div>
  )
}
