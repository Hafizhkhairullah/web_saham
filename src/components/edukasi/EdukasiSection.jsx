import { motion } from 'motion/react'
import { BookOpenText, ChartLineUp, ShieldCheck, ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTheme } from '../../context/ThemeContext'
import GSAPGeometricBackground from '../background/GSAPGeometricBackground'
import { siteContent, parseText } from '../../config/siteContent'

import { GradientCard } from '../ui/GradientCard'
export default function EdukasiSection() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <section
      id="edukasi"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
      data-gsap="section-reveal"
    >
      <GSAPGeometricBackground count={10} zIndex={0} />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'var(--red-primary)',
              color: '#fff',
            }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookOpenText size={14} weight="bold" />
            {siteContent.home.edukasi.badge}
          </motion.span>

          <motion.h2
            className="font-bold tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--white)',
            }}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {siteContent.home.edukasi.title}{' '}
            <span style={{ color: 'var(--red-bright)' }}>{siteContent.home.edukasi.titleHighlight}</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base"
            style={{ color: 'var(--gray-light)' }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseText(siteContent.home.edukasi.subtitle)}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {siteContent.home.edukasi.cards.map((card, i) => (
            <div data-gsap="edu-card" key={i}>
              <GradientCard
                badgeText={`Topik ${i + 1}`}
                badgeColor={card.badgeColor}
                title={card.title}
                description={card.desc}
                ctaText={card.ctaText}
                ctaHref={card.ctaHref}
                imageUrl={card.imageUrl}
                gradient={card.gradient}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/edukasi"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
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
            {siteContent.home.edukasi.cta}
            <ArrowRight size={18} weight="bold" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
