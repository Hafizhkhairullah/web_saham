import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  PaperPlaneRight
} from '@phosphor-icons/react'
import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTheme } from '../context/ThemeContext'
import GSAPGeometricBackground from '../components/background/GSAPGeometricBackground'
import Footer from '../components/layout/Footer'
import { siteContent, parseText } from '../config/siteContent'
import Button from '../components/ui/Button'

// ─────────────────────────────────────────
// Animation helpers
// ─────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function KontakPage() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const anim = (d) => (reduced ? {} : fadeUp(d))

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic here
    alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.")
  }

  const handleWhatsApp = () => {
    const { whatsappNumber, whatsappBtn } = siteContent.kontak
    const message = encodeURIComponent(whatsappBtn?.message || "Halo")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

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
            minHeight: '40vh',
            paddingTop: 'clamp(100px, 8vw, 160px)',
            paddingBottom: 'clamp(48px, 4vw, 80px)',
            background: 'var(--bg-main)',
          }}
        >
          <GSAPGeometricBackground count={10} zIndex={0} />

          {/* Red glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              right: '-10%', top: '-20%',
              width: '60%', height: '100%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,46,0.06) 0%, transparent 70%)',
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
                {siteContent.kontak.hero.back}
              </Link>
            </motion.div>

            <motion.span
              {...anim(0.05)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'var(--red-primary)', color: '#fff' }}
            >
              <EnvelopeSimple size={14} weight="bold" />
              {siteContent.kontak.hero.badge}
            </motion.span>

            <motion.h1
              {...anim(0.1)}
              className="font-bold tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
            >
              {siteContent.kontak.hero.title}{' '}
              <span style={{ color: 'var(--red-bright)' }}>{siteContent.kontak.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              {...anim(0.15)}
              className="max-w-2xl text-lg"
              style={{ color: 'var(--gray-light)' }}
            >
              {parseText(siteContent.kontak.hero.subtitle)}
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
        {/* CONTACT INFO & FORM SECTION */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left Column: Contact Info */}
              <motion.div {...anim(0.1)} className="flex flex-col gap-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--white)' }}>
                    Informasi Kontak
                  </h2>
                  <p className="text-lg mb-8" style={{ color: 'var(--gray-light)' }}>
                    Tim kami selalu siap mendengarkan kebutuhan Anda. Silakan hubungi kami melalui salah satu kanal di bawah ini.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors"
                         style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                      <WhatsappLogo size={24} weight="fill" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--white)' }}>WhatsApp</h3>
                      <p className="mb-3" style={{ color: 'var(--gray-light)' }}>+{siteContent.kontak.info.whatsappNumber}</p>
                      <button
                        onClick={handleWhatsApp}
                        className="text-sm font-semibold inline-flex items-center gap-1 transition-colors hover:opacity-80"
                        style={{ color: '#25D366' }}
                      >
                        {siteContent.kontak.whatsappBtn.text}
                        <ArrowLeft size={14} weight="bold" className="rotate-135 transform scale-x-[-1]" />
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors"
                         style={{ background: 'rgba(225, 29, 46, 0.1)', color: 'var(--red-primary)' }}>
                      <EnvelopeSimple size={24} weight="fill" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--white)' }}>Email</h3>
                      <p style={{ color: 'var(--gray-light)' }}>{siteContent.kontak.info.email}</p>
                      <a href={`mailto:${siteContent.kontak.info.email}`}
                         className="text-sm font-semibold inline-flex mt-3 transition-colors hover:opacity-80"
                         style={{ color: 'var(--red-bright)' }}>
                        Kirim Email
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors"
                         style={{ background: 'rgba(225, 29, 46, 0.1)', color: 'var(--red-primary)' }}>
                      <MapPin size={24} weight="fill" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--white)' }}>Kantor Pusat</h3>
                      <p className="leading-relaxed" style={{ color: 'var(--gray-light)' }}>{siteContent.kontak.info.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div {...anim(0.2)}>
                <div 
                  className="p-8 lg:p-10 rounded-[var(--radius-xl)] flex flex-col gap-6"
                  style={{ 
                    background: isLight ? '#ffffff' : 'rgba(20, 20, 20, 0.6)', 
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.05)'
                  }}
                >
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--white)' }}>
                    {siteContent.kontak.form.title}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--gray-light)' }}>
                        {siteContent.kontak.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder={siteContent.kontak.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] outline-none transition-all duration-200"
                        style={{
                          background: isLight ? '#f9fafb' : 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--white)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--red-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--gray-light)' }}>
                        {siteContent.kontak.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder={siteContent.kontak.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] outline-none transition-all duration-200"
                        style={{
                          background: isLight ? '#f9fafb' : 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--white)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--red-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--gray-light)' }}>
                        {siteContent.kontak.form.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder={siteContent.kontak.form.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] outline-none transition-all duration-200 resize-none"
                        style={{
                          background: isLight ? '#f9fafb' : 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--white)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--red-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white rounded-[var(--radius-md)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                      style={{ background: 'var(--red-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--red-bright)'
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(225,29,46,0.3)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--red-primary)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {siteContent.kontak.form.submitBtn}
                      <PaperPlaneRight size={18} weight="bold" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
