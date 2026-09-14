import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import Container from '../layout/Container'
import { SplineScene } from '@/components/ui/splite'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTheme } from '../../context/ThemeContext'
import GSAPGeometricBackground from '../background/GSAPGeometricBackground'
import { siteContent, parseText } from '../../config/siteContent'

// Angka yang "count up" saat elemen masuk viewport
function StatCounter({ value, suffix = '', duration = 1.5, reduced }) {
  const [display, setDisplay] = useState(reduced ? value : 0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleEnter = () => {
    if (hasAnimated || reduced) return
    setHasAnimated(true)
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v * 10) / 10)
    })
    return () => controls.stop()
  }

  return (
    <motion.span
      className="text-3xl font-bold font-mono tabular-nums"
      style={{ color: 'var(--white)' }}
      onViewportEnter={handleEnter}
      viewport={{ once: true, margin: '-50px' }}
    >
      {display}{suffix}
    </motion.span>
  )
}

export default function AboutSection() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const sectionRef = useRef(null)

  // --- Mouse-tracking tilt untuk Spline scene ---
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['20%', '80%'])
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['20%', '80%'])

  const handleMouseMove = (e) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-main)' }}
      data-gsap="section-reveal"
    >
      <GSAPGeometricBackground count={12} zIndex={0} />

      {/* Spotlight yang mengikuti cursor di seluruh section */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${glowX} ${glowY}, var(--red-bright)15, transparent 70%)`
          }}
        />
      )}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div
            className="flex flex-col gap-6"
          >
            <h2
              className="font-bold tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--white)' }}
            >
              {/* Word-by-word split for GSAP stagger */}
              {siteContent.home.about.title.split(' ').map((word, i) => (
                <span key={i} data-gsap="about-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>{word}</span>
              ))}
              <br />
              <motion.span
                style={{ color: 'var(--red-bright)' }}
                whileHover={reduced ? {} : { letterSpacing: '0.02em' }}
                transition={{ duration: 0.3 }}
              >
                <span data-gsap="about-word" style={{ display: 'inline-block' }}>{siteContent.home.about.titleHighlight}</span>
              </motion.span>
            </h2>

            <div className="flex flex-col gap-4" style={{ color: 'var(--gray-light)', fontSize: '1.125rem' }}>
              <p data-gsap="about-para">
                {parseText(siteContent.home.about.description)}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-8">
              <motion.div
                className="flex flex-col gap-1 cursor-default"
                whileHover={reduced ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
                data-gsap="about-stat"
              >
                <StatCounter value={siteContent.home.about.stats[0].value} suffix={siteContent.home.about.stats[0].suffix} reduced={reduced} />
                <span className="text-sm font-medium" style={{ color: 'var(--gray-mid)' }}>{siteContent.home.about.stats[0].label}</span>
              </motion.div>
              <div className="w-px h-12" style={{ background: 'var(--border-subtle)' }} />
              <motion.div
                className="flex flex-col gap-1 cursor-default"
                whileHover={reduced ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
                data-gsap="about-stat"
              >
                <StatCounter value={siteContent.home.about.stats[1].value} suffix={siteContent.home.about.stats[1].suffix} reduced={reduced} />
                <span className="text-sm font-medium" style={{ color: 'var(--gray-mid)' }}>{siteContent.home.about.stats[1].label}</span>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-6"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{
                  background: 'var(--red-primary)',
                  boxShadow: '0 0 0 rgba(225,29,46,0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--red-bright)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,46,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--red-primary)'
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(225,29,46,0)'
                }}
              >
                {siteContent.home.about.cta}
                <ArrowRight size={16} weight="bold" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Spline Robot dengan tilt interaktif */}
          <div
            className="relative h-[400px] lg:h-[600px] w-full"
            style={{ perspective: 1000 }}
            data-gsap="about-robot"
          >
            <motion.div
              className="absolute inset-0 z-10 transition-all duration-700"
              style={{
                filter: isLight ? 'invert(0.85) hue-rotate(180deg) brightness(1.2) contrast(0.9)' : 'none',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
              aria-label="Visualisasi robot 3D"
              role="img"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  )
}