import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { EnvelopeSimple, WhatsappLogo, ArrowRight } from '@phosphor-icons/react'
import Container from '../layout/Container'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTheme } from '../../context/ThemeContext'
import { siteContent, parseText } from '../../config/siteContent'

export default function KontakSection() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleWhatsApp = () => {
    const { whatsappNumber, whatsappBtn } = siteContent.kontak.info
      ? siteContent.kontak
      : { info: { whatsappNumber: "6281234567890" }, whatsappBtn: { message: "Halo" } }
    
    const number = siteContent.kontak?.info?.whatsappNumber || "6281234567890"
    const message = encodeURIComponent(siteContent.kontak?.whatsappBtn?.message || "Halo")
    window.open(`https://wa.me/${number}?text=${message}`, '_blank')
  }

  return (
    <section id="kontak" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-main)' }}>
      {/* Background elements */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,46,0.15) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border-subtle), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border-subtle), transparent)' }} />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ background: 'var(--red-primary)', color: '#fff' }}
        >
          <EnvelopeSimple size={14} weight="bold" />
          {siteContent.home.kontak.badge}
        </motion.span>

        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)' }}
        >
          {siteContent.home.kontak.title}{' '}
          <span style={{ color: 'var(--red-bright)' }}>{siteContent.home.kontak.titleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg mb-10"
          style={{ color: 'var(--gray-light)' }}
        >
          {parseText(siteContent.home.kontak.subtitle)}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            style={{
              background: '#25D366',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
            }}
          >
            <WhatsappLogo size={20} weight="fill" />
            {siteContent.home.kontak.ctaPrimary}
          </button>
          
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            style={{
              color: 'var(--white)',
              border: '1px solid var(--border-subtle)',
              background: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.03)',
            }}
          >
            {siteContent.home.kontak.ctaSecondary}
            <ArrowRight size={16} weight="bold" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
