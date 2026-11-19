import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Buildings, Users, ShieldCheck,
  Handshake, Target, Eye, Lightbulb, Medal, Globe, ChartLineUp,
} from '@phosphor-icons/react'
import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTheme } from '../context/ThemeContext'
import GSAPGeometricBackground from '../components/background/GSAPGeometricBackground'
import Footer from '../components/layout/Footer'
import { siteContent, parseText } from '../config/siteContent'

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

function ValueCard({ icon: Icon, color, title, desc, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="group relative flex flex-col gap-4 p-6 lg:p-8 rounded-[var(--radius-xl)]"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
    >
      <div
        className="absolute inset-0 rounded-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(250px circle at 50% 0%, ${color}12, transparent 70%)` }}
      />
      <div
        className="relative flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)]"
        style={{ background: `${color}15` }}
      >
        <Icon size={22} weight="duotone" style={{ color }} />
      </div>
      <h3 className="relative text-lg font-bold" style={{ color: 'var(--white)' }}>{title}</h3>
      <p className="relative text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>{desc}</p>
    </motion.div>
  )
}

const PILLAR_ICONS = [ShieldCheck, ChartLineUp, Lightbulb, Handshake]

function PillarBlock({ title, desc, index, delay = 0 }) {
  const reduced = useReducedMotion()
  const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length]

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="flex flex-col gap-3 p-6 rounded-[var(--radius-xl)]"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'rgba(225,29,46,0.12)', color: 'var(--red-bright)' }}
      >
        <Icon size={20} weight="duotone" />
      </div>
      <h3 className="text-base font-bold" style={{ color: 'var(--white)' }}>
        {title}
      </h3>
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
        {desc}
      </p>
    </motion.div>
  )
}

function TimelineItem({ year, title, desc, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="relative flex gap-6 items-start"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: 'var(--red-primary)' }}
        />
        <div className="w-px flex-1 min-h-[40px]" style={{ background: 'var(--border-subtle)' }} />
      </div>

      <div className="flex flex-col gap-1.5 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--red-bright)' }}>
          {year}
        </span>
        <h4 className="font-semibold" style={{ color: 'var(--white)' }}>{title}</h4>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>{desc}</p>
      </div>
    </motion.div>
  )
}

function TeamCard({ name, role, initial, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="group flex flex-col items-center gap-4 p-6 rounded-[var(--radius-xl)] text-center"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
    >
      {/* Avatar placeholder */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-105 transition-transform duration-300"
        style={{ background: 'var(--red-primary)', color: '#fff' }}
      >
        {initial}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold" style={{ color: 'var(--white)' }}>{name}</h4>
        <span className="text-sm" style={{ color: 'var(--gray-light)' }}>{role}</span>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────
export default function TentangKamiPage() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const anim = (d) => (reduced ? {} : fadeUp(d))

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

          <div
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              left: '-10%', top: '-20%',
              width: '60%', height: '100%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,46,0.06) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <Container className="relative z-10">
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
              <Buildings size={14} weight="bold" />
              {siteContent.tentangKami.hero.badge}
            </motion.span>

            <motion.h1
              {...anim(0.1)}
              className="font-bold tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
            >
              {siteContent.tentangKami.hero.title}{' '}
              <span style={{ color: 'var(--red-bright)' }}>{siteContent.tentangKami.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              {...anim(0.15)}
              className="max-w-2xl text-lg"
              style={{ color: 'var(--gray-light)' }}
            >
              {parseText(siteContent.tentangKami.hero.subtitle)}
            </motion.p>
          </Container>

          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))', zIndex: 5 }}
            aria-hidden="true"
          />
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 1: Tentang Perusahaan */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.tentangKami.perusahaan.badge}
              badgeIcon={Buildings}
              title={siteContent.tentangKami.perusahaan.title}
              highlight={siteContent.tentangKami.perusahaan.titleHighlight}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="flex flex-col gap-5">
                {siteContent.tentangKami.perusahaan.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    {...anim(i * 0.08)}
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: 'var(--gray-light)' }}
                    dangerouslySetInnerHTML={{
                      __html: parseText(p).replace(
                        new RegExp(siteContent.global.companyName, 'g'),
                        `<strong style="color: var(--white)">${siteContent.global.companyName}</strong>`
                      ),
                    }}
                  />
                ))}
              </div>

              {/* Corporate Pillars Grid (replaces removed stats) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-min">
                {siteContent.tentangKami.perusahaan.pillars.map((pillar, i) => (
                  <PillarBlock
                    key={i}
                    index={i}
                    title={pillar.title}
                    desc={pillar.desc}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 2: Visi & Misi */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={8} zIndex={0} />

          <Container className="relative z-10">
            <SectionHeader
              badge={siteContent.tentangKami.visiMisi.badge}
              badgeIcon={Target}
              title={siteContent.tentangKami.visiMisi.title}
              highlight={siteContent.tentangKami.visiMisi.titleHighlight}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visi */}
              <motion.div
                {...anim(0)}
                className="relative p-8 lg:p-10 rounded-[var(--radius-xl)] flex flex-col gap-5"
                style={{
                  background: isLight ? 'rgba(225,29,46,0.04)' : 'rgba(225,29,46,0.06)',
                  border: '1px solid rgba(225,29,46,0.12)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Eye size={24} weight="duotone" style={{ color: 'var(--red-bright)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--white)' }}>Visi</h3>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                  {siteContent.tentangKami.visiMisi.visi}
                </p>
              </motion.div>

              {/* Misi */}
              <motion.div
                {...anim(0.1)}
                className="relative p-8 lg:p-10 rounded-[var(--radius-xl)] flex flex-col gap-5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
              >
                <div className="flex items-center gap-3">
                  <Target size={24} weight="duotone" style={{ color: 'var(--green-data)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--white)' }}>Misi</h3>
                </div>
                <ul className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                  {siteContent.tentangKami.visiMisi.misi.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'var(--red-bright)' }}>{i + 1}.</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 3: Nilai-Nilai */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.tentangKami.nilai.badge}
              badgeIcon={Medal}
              title={siteContent.tentangKami.nilai.title}
              highlight={siteContent.tentangKami.nilai.titleHighlight}
              subtitle={siteContent.tentangKami.nilai.subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, color: "var(--red-bright)" },
                { icon: Lightbulb, color: "#3B82F6" },
                { icon: Handshake, color: "var(--green-data)" },
                { icon: Globe, color: "#F59E0B" }
              ].map((iconData, i) => (
                <ValueCard
                  key={i}
                  icon={iconData.icon}
                  color={iconData.color}
                  title={siteContent.tentangKami.nilai.items[i].title}
                  desc={siteContent.tentangKami.nilai.items[i].desc}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 4: Perjalanan Kami */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={8} zIndex={0} />

          <Container className="relative z-10">
            <SectionHeader
              badge={siteContent.tentangKami.timeline.badge}
              badgeIcon={ChartLineUp}
              title={siteContent.tentangKami.timeline.title}
              highlight={siteContent.tentangKami.timeline.titleHighlight}
              subtitle={parseText(siteContent.tentangKami.timeline.subtitle)}
            />

            <div className="max-w-2xl">
              {siteContent.tentangKami.timeline.items.map((item, i) => (
                <TimelineItem
                  key={i}
                  year={item.year}
                  title={parseText(item.title)}
                  desc={parseText(item.desc)}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 5: Tim Kami */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <SectionHeader
              badge={siteContent.tentangKami.tim.badge}
              badgeIcon={Users}
              title={siteContent.tentangKami.tim.title}
              highlight={siteContent.tentangKami.tim.titleHighlight}
              subtitle={siteContent.tentangKami.tim.subtitle}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {siteContent.tentangKami.tim.items.map((member, i) => (
                <TeamCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  initial={member.initial}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* CTA SECTION */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
          <GSAPGeometricBackground count={10} zIndex={0} />

          <div
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '400px',
              background: 'radial-gradient(ellipse, rgba(225,29,46,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <Container className="relative z-10 flex flex-col items-center text-center gap-6">
            <motion.h2
              {...anim(0)}
              className="font-bold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)' }}
            >
              {siteContent.tentangKami.cta.title}{' '}
              <span style={{ color: 'var(--red-bright)' }}>{siteContent.tentangKami.cta.titleHighlight}</span>
            </motion.h2>
            <motion.p
              {...anim(0.1)}
              className="max-w-xl text-base lg:text-lg"
              style={{ color: 'var(--gray-light)' }}
            >
              {parseText(siteContent.tentangKami.cta.subtitle)}
            </motion.p>
            <motion.div {...anim(0.2)} className="flex flex-wrap gap-4 justify-center mt-4">
              <Link
                to="/#portofolio"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{ background: 'var(--red-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--red-bright)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,46,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--red-primary)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {siteContent.tentangKami.cta.primary}
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                to="/kontak"
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
                {siteContent.tentangKami.cta.secondary}
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
