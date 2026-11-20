import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BookOpenText, ChartLineUp, ShieldCheck,
  ChartBar, TrendUp, Wallet, ListNumbers, Warning, Scales,
} from '@phosphor-icons/react'
import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTheme } from '../context/ThemeContext'
import GSAPGeometricBackground from '../components/background/GSAPGeometricBackground'
import Footer from '../components/layout/Footer'
import { siteContent, parseText } from '../config/siteContent'
import { GradientCard } from '../components/ui/GradientCard'

// ─────────────────────────────────────────
// Animation helpers
// ─────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

// ─────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────
function SectionHeader({ badge, badgeIcon: BadgeIcon, title, highlight, subtitle }) {
  const reduced = useReducedMotion()
  const anim = (d) => (reduced ? {} : fadeUp(d))

  return (
    <div className="flex flex-col gap-4 mb-12">
      {badge && (
        <motion.span
          {...anim(0)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest w-fit"
          style={{ background: 'var(--red-primary)', color: '#fff' }}
        >
          {BadgeIcon && <BadgeIcon size={13} weight="bold" />}
          {badge}
        </motion.span>
      )}
      <motion.h2
        {...anim(0.05)}
        className="font-bold tracking-tight"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--white)' }}
      >
        {title}{' '}
        {highlight && <span style={{ color: 'var(--red-bright)' }}>{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...anim(0.1)}
          className="max-w-3xl text-base lg:text-lg"
          style={{ color: 'var(--gray-light)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}


function StepItem({ number, title, desc, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="flex gap-5 items-start"
    >
      <div
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm"
        style={{ background: 'var(--red-primary)', color: '#fff' }}
      >
        {number}
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="font-semibold" style={{ color: 'var(--white)' }}>{title}</h4>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>{desc}</p>
      </div>
    </motion.div>
  )
}

function GlossaryItem({ term, definition, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="group flex flex-col gap-1.5 p-4 rounded-[var(--radius-lg)] transition-colors duration-200"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      <dt className="font-bold text-sm" style={{ color: 'var(--red-bright)' }}>{term}</dt>
      <dd className="text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>{definition}</dd>
    </motion.div>
  )
}

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────
export default function EdukasiPage() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const anim = (d) => (reduced ? {} : fadeUp(d))

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════════════════════ */}
        {/* HERO BANNER */}
        {/* ═══════════════════════════════════════ */}
        <section
          className="relative overflow-hidden flex items-end"
          style={{
            minHeight: '50vh',
            paddingTop: 'clamp(100px, 8vw, 160px)',
            paddingBottom: 'clamp(48px, 4vw, 80px)',
            background: 'var(--bg-main)',
          }}
        >
          <GSAPGeometricBackground count={14} zIndex={0} />

          {/* Red glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              right: '-10%', top: '-20%',
              width: '60%', height: '100%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.06) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <Container className="relative z-10">
            {/* Back link */}
            <motion.div {...anim(0)} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--gray-light)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--red-bright)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-light)'}
              >
                <ArrowLeft size={16} weight="bold" />
                Kembali ke Beranda
              </Link>
            </motion.div>

            <motion.span
              {...anim(0.05)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'var(--red-primary)', color: '#fff' }}
            >
              <BookOpenText size={14} weight="bold" />
              {siteContent.edukasi.hero.badge}
            </motion.span>

            <motion.h1
              {...anim(0.1)}
              className="font-bold tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
            >
              {siteContent.edukasi.hero.title}{' '}
              <span style={{ color: 'var(--red-bright)' }}>{siteContent.edukasi.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              {...anim(0.15)}
              className="max-w-2xl text-lg"
              style={{ color: 'var(--gray-light)' }}
            >
              {parseText(siteContent.edukasi.hero.subtitle)}
            </motion.p>
          </Container>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))', zIndex: 5 }}
            aria-hidden="true"
          />
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 1: Apa Itu Saham? */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.edukasi.sections[0].badge}
              badgeIcon={BookOpenText}
              title={siteContent.edukasi.sections[0].title}
              highlight={siteContent.edukasi.sections[0].titleHighlight}
              subtitle={siteContent.edukasi.sections[0].subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {siteContent.edukasi.sections[0].cards.map((card, i) => (
                <div key={i} data-gsap="edu-card">
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
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 2: Cara Mulai Investasi */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={8} zIndex={0} />

          <Container className="relative z-10">
            <SectionHeader
              badge={siteContent.edukasi.panduan.badge}
              badgeIcon={ChartLineUp}
              title={siteContent.edukasi.panduan.title}
              highlight={siteContent.edukasi.panduan.titleHighlight}
              subtitle={siteContent.edukasi.panduan.subtitle}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Steps */}
              <div className="flex flex-col gap-8">
                {siteContent.edukasi.panduan.steps.map((step, i) => (
                  <StepItem
                    key={i}
                    number={i + 1}
                    title={step.title}
                    desc={parseText(step.desc)}
                    delay={i * 0.08}
                  />
                ))}
              </div>

              {/* Tips card */}
              <motion.div
                {...(reduced ? {} : fadeUp(0.1))}
                className="p-8 rounded-[var(--radius-xl)] flex flex-col gap-5 sticky top-28"
                style={{
                  background: isLight ? 'rgba(74,222,128,0.04)' : 'rgba(74,222,128,0.06)',
                  border: '1px solid rgba(74,222,128,0.12)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Warning size={22} weight="duotone" style={{ color: 'var(--red-bright)' }} />
                  <h3 className="font-bold" style={{ color: 'var(--white)' }}>{siteContent.edukasi.panduan.tipsTitle}</h3>
                </div>
                <ul className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                  {siteContent.edukasi.panduan.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'var(--red-bright)' }}>•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 3: Fundamental vs Teknikal */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.edukasi.sections[1].badge}
              badgeIcon={ChartBar}
              title={siteContent.edukasi.sections[1].title}
              highlight={siteContent.edukasi.sections[1].titleHighlight}
              subtitle={siteContent.edukasi.sections[1].subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {siteContent.edukasi.sections[1].cards.map((card, i) => (
                <div key={i} data-gsap="edu-card">
                  <GradientCard
                    badgeText={`Metode ${i + 1}`}
                    badgeColor={card.badgeColor}
                    title={card.title}
                    description={
                      <div className="flex flex-col gap-2">
                        <p><strong className="dark:text-white text-slate-900">{card.desc1}</strong> {card.desc1Val}</p>
                        <p>{card.desc2}</p>
                        <p><strong className="dark:text-white text-slate-900">{card.desc3}</strong> {card.desc3Val}</p>
                      </div>
                    }
                    ctaText={card.ctaText}
                    ctaHref={card.ctaHref}
                    imageUrl={card.imageUrl}
                    gradient={card.gradient}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 4: Manajemen Risiko */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={8} zIndex={0} />

          <Container className="relative z-10">
            <SectionHeader
              badge={siteContent.edukasi.sections[2].badge}
              badgeIcon={ShieldCheck}
              title={siteContent.edukasi.sections[2].title}
              highlight={siteContent.edukasi.sections[2].titleHighlight}
              subtitle={siteContent.edukasi.sections[2].subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {siteContent.edukasi.sections[2].cards.map((card, i) => (
                <div key={i} data-gsap="edu-card">
                  <GradientCard
                    badgeText={`Strategi ${i + 1}`}
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
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 5: Glosarium */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.edukasi.glosarium.badge}
              badgeIcon={BookOpenText}
              title={siteContent.edukasi.glosarium.title}
              highlight={siteContent.edukasi.glosarium.titleHighlight}
              subtitle={siteContent.edukasi.glosarium.subtitle}
            />

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteContent.edukasi.glosarium.items.map((item, i) => (
                <GlossaryItem key={i} term={item.term} definition={item.def} delay={i * 0.04} />
              ))}
            </dl>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* CTA SECTION */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={10} zIndex={0} />

          {/* Centered glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '400px',
              background: 'radial-gradient(ellipse, rgba(74,222,128,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <Container className="relative z-10 flex flex-col items-center text-center gap-6">
            <motion.h2
              {...anim(0)}
              className="font-bold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)' }}
            >
              {siteContent.edukasi.cta.title}{' '}
              <span style={{ color: 'var(--red-bright)' }}>{siteContent.edukasi.cta.titleHighlight}</span>
            </motion.h2>
            <motion.p
              {...anim(0.1)}
              className="max-w-xl text-base lg:text-lg"
              style={{ color: 'var(--gray-light)' }}
            >
              {parseText(siteContent.edukasi.cta.subtitle)}
            </motion.p>
            <motion.div {...anim(0.2)} className="flex flex-wrap gap-4 justify-center mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{ background: 'var(--red-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--red-bright)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(74,222,128,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--red-primary)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {siteContent.edukasi.cta.primary}
                <ArrowRight size={18} weight="bold" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{
                  color: 'var(--white)',
                  border: '1px solid var(--border-card)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'var(--border-card)'
                }}
              >
                <ArrowLeft size={16} weight="bold" />
                Kembali ke Beranda
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
