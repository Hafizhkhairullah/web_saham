import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Container from '../layout/Container'
import HeroBackground from '../background/HeroBackground'
import AnnouncementBadge from './AnnouncementBadge'
import HeroContent from './HeroContent'
import HeroActions from './HeroActions'
import TrustIndicators from './TrustIndicators'
import HeroIllustration from './HeroIllustration'

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
      }}
      onMouseEnter={onHeroVisible}
    >
      {/* Background */}
      <HeroBackground />

      <Container className="relative py-12 lg:py-20 3xl:py-28 4xl:py-36" style={{ zIndex: 'var(--z-content)' }}>
        {/* Two-column grid — Equal 50:50 width with min-w-0 to prevent any text overflow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 3xl:gap-24 4xl:gap-32 items-center">

          {/* ── Left column ── */}
          <div className="w-full min-w-0 flex flex-col gap-7 3xl:gap-12 4xl:gap-16" data-gsap="hero-left">

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

          {/* ── Right column: Corporate Image Illustration (Equal width & precise proportion) ── */}
          <div className="w-full min-w-0 relative" data-gsap="hero-right">
            <motion.div {...anim(fadeRight(0.15))} className="w-full">
              <HeroIllustration />
            </motion.div>
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
