import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Buildings, ShieldCheck, ChartLineUp, Handshake } from '@phosphor-icons/react'
import Container from '../layout/Container'
import { SplineScene } from '@/components/ui/splite'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTheme } from '../../context/ThemeContext'
import GSAPGeometricBackground from '../background/GSAPGeometricBackground'
import { siteContent, parseText } from '../../config/siteContent'

const HIGHLIGHT_ICONS = [ShieldCheck, ChartLineUp, Handshake]

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

  const paragraphs = parseText(siteContent.home.about.description).split('\n\n')

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
          <div className="flex flex-col gap-6">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ background: 'var(--red-primary)', color: '#fff' }}
              >
                <Buildings size={14} weight="bold" />
                {siteContent.home.about.badge}
              </span>

              <h2
                className="font-bold tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'var(--white)' }}
              >
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
            </div>

            <div className="flex flex-col gap-4" style={{ color: 'var(--gray-light)', fontSize: '1.0625rem' }}>
              {paragraphs.map((para, idx) => (
                <p key={idx} data-gsap="about-para" className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Corporate Highlights (replaces removed Investor Aktif & Uptime stats) */}
            <div className="grid grid-cols-1 gap-3.5 mt-2">
              {siteContent.home.about.highlights.map((item, i) => {
                const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]
                return (
                  <motion.div
                    key={i}
                    data-gsap="about-stat"
                    whileHover={reduced ? {} : { x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3.5 p-4 rounded-2xl"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-card)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(225,29,46,0.12)', color: 'var(--red-bright)' }}
                    >
                      <Icon size={20} weight="duotone" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-sm font-bold" style={{ color: 'var(--white)' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="mt-4"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
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

          {/* Right Content - Interactive 3D Visual */}
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
              aria-label="Visualisasi interaktif 3D"
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
