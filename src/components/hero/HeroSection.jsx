import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Container from '../layout/Container'
import HeroBackground from '../background/HeroBackground'
import AnnouncementBadge from './AnnouncementBadge'
import HeroContent from './HeroContent'
import HeroActions from './HeroActions'
import TrustIndicators from './TrustIndicators'
import MarketDashboard from './MarketDashboard'
import { IHSGCard, SentimentCard } from './FloatingMarketCard'
import RiskProfileCard from './RiskProfileCard'

// Stagger animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32, scale: 0.97 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
})

export default function HeroSection() {
  const reduced = useReducedMotion()

  // When reduced motion, skip animations
  const anim = (animProps) =>
    reduced
      ? { initial: false, animate: false, transition: undefined }
      : animProps

  // Track hero view
  const onHeroVisible = () => {
    window.__nexaAnalytics?.track('hero_view')
  }

  return (
    <section
      id="hero"
      className="relative flex items-center"
      style={{
        minHeight: '100dvh',
        paddingTop: 'clamp(72px, 6vw, 120px)',
        /* No background here — body provides it, so the Spline WebGL layer shows through */
      }}
      onMouseEnter={onHeroVisible}
    >
      {/* Background */}
      <HeroBackground />

      <Container className="relative py-12 lg:py-20 3xl:py-28 4xl:py-36" style={{ zIndex: 'var(--z-content)' }}>
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 3xl:gap-24 4xl:gap-32 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-8 3xl:gap-12 4xl:gap-16" data-gsap="hero-left">

            {/* Announcement badge */}
            <motion.div {...anim(fadeUp(0))}>
              <AnnouncementBadge />
            </motion.div>

            {/* Headline + copy */}
            <motion.div {...anim(fadeUp(0.1))}>
              <HeroContent />
            </motion.div>

            {/* CTAs */}
            <motion.div {...anim(fadeUp(0.22))}>
              <HeroActions />
            </motion.div>

            {/* Trust indicators */}
            <motion.div {...anim(fadeUp(0.34))}>
              <TrustIndicators />
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="relative flex flex-col gap-4" data-gsap="hero-right">

            {/* Main dashboard */}
            <motion.div {...anim(fadeRight(0.15))}>
              <MarketDashboard />
            </motion.div>

            {/* Floating cards row — below dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <motion.div {...anim(fadeUp(0.35))}>
                <IHSGCard delay={0} />
              </motion.div>
              <motion.div {...anim(fadeUp(0.45))}>
                <SentimentCard delay={0.6} />
              </motion.div>
              <motion.div {...anim(fadeUp(0.55))}>
                <RiskProfileCard delay={1.2} />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg-main))',
          zIndex: 'var(--z-content)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
