import { motion } from 'motion/react'
import {
  ChartPieSlice,
  Briefcase,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Sparkle,
} from '@phosphor-icons/react'
import Container from '../layout/Container'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import GSAPGeometricBackground from '../background/GSAPGeometricBackground'
import { siteContent, parseText } from '../../config/siteContent'

const SERVICE_ICONS = [ChartPieSlice, Briefcase, Cpu, ShieldCheck]
const ACCENT_COLORS = ['#4ADE80', '#3B82F6', '#10B981', '#F59E0B']

export default function ServicesSection() {
  const reduced = useReducedMotion()
  const { services } = siteContent.home

  return (
    <section
      id="layanan"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
      data-gsap="section-reveal"
    >
      <GSAPGeometricBackground count={10} zIndex={0} />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'var(--red-primary)', color: '#fff' }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkle size={14} weight="fill" />
            {services.badge}
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
            {services.title}{' '}
            <span style={{ color: 'var(--red-bright)' }}>{services.titleHighlight}</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base lg:text-lg"
            style={{ color: 'var(--gray-light)' }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseText(services.subtitle)}
          </motion.p>
        </div>

        {/* 4-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.items.map((item, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length]
            const accent = ACCENT_COLORS[idx % ACCENT_COLORS.length]

            return (
              <motion.div
                key={item.id}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={reduced ? {} : { y: -6 }}
                className="group relative flex flex-col justify-between p-7 lg:p-9 rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                }}
              >
                {/* Subtle radial hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at 90% 10%, ${accent}15, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Top row: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `${accent}15`,
                        color: accent,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      <Icon size={26} weight="duotone" />
                    </div>
                    <span
                      className="font-mono text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        color: 'var(--gray-mid)',
                        background: 'rgba(128,128,128,0.08)',
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2.5 transition-colors duration-200"
                      style={{ color: 'var(--white)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm lg:text-base leading-relaxed"
                      style={{ color: 'var(--gray-light)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Highlights / Deliverables list */}
                <div
                  className="relative z-10 mt-6 pt-5 flex flex-wrap gap-2"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                      style={{
                        background: 'rgba(128,128,128,0.07)',
                        color: 'var(--white)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <CheckCircle size={13} weight="fill" style={{ color: accent }} />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
