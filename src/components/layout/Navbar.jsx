import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { List, X, Sun, Moon, WhatsappLogo } from '@phosphor-icons/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from './Container'
import Button from '../ui/Button'
import { useTheme } from '../../context/ThemeContext'
import { siteContent } from '../../config/siteContent'

const NAV_LINKS = [
  { label: 'Beranda', href: '/', isRoute: true },
  { label: 'Tentang Kami', href: '/#tentang', sectionId: 'tentang', isRoute: false },
  { label: 'Layanan', href: '/#layanan', sectionId: 'layanan', isRoute: false },
  { label: 'Portofolio', href: '/#portofolio', sectionId: 'portofolio', isRoute: false },
  { label: 'Kontak', href: '/#kontak', sectionId: 'kontak', isRoute: false },
]

// Geometric red mark SVG logo
function NexaBursaLogo() {
  return (
    <Link
      to="/"
      aria-label={`${siteContent.global.companyName} - kembali ke beranda`}
      className="flex items-center gap-2.5 shrink-0"
    >
      {/* Geometric mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#E11D2E" />
        <rect x="8" y="14" width="3" height="10" rx="1" fill="white" />
        <rect x="8.5" y="10" width="2" height="5" rx="0.5" fill="white" />
        <rect x="8.5" y="23" width="2" height="3" rx="0.5" fill="white" />
        <rect x="14" y="9" width="3" height="14" rx="1" fill="white" />
        <rect x="14.5" y="6" width="2" height="4" rx="0.5" fill="white" />
        <rect x="14.5" y="22" width="2" height="3" rx="0.5" fill="white" />
        <rect x="20" y="12" width="3" height="12" rx="1" fill="white" opacity="0.85" />
        <rect x="20.5" y="8" width="2" height="5" rx="0.5" fill="white" opacity="0.85" />
        <rect x="20.5" y="23" width="2" height="2" rx="0.5" fill="white" opacity="0.85" />
      </svg>
      {/* Wordmark */}
      <span
        className="text-[17px] 3xl:text-[22px] 4xl:text-[28px] font-bold tracking-tight"
        style={{ color: 'var(--white)' }}
      >
        {siteContent.global.logoTextPart1}<span style={{ color: 'var(--red-bright)' }}>{siteContent.global.logoTextPart2}</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const location = useLocation()
  const navigate = useNavigate()

  const getNavHeight = () => {
    if (typeof window === 'undefined') return '72px'
    if (window.innerWidth >= 3840) return '100px'
    if (window.innerWidth >= 2560) return '88px'
    return '72px'
  }
  const [navHeight, setNavHeight] = useState('72px')

  useEffect(() => {
    setNavHeight(getNavHeight())
  }, [])

  // Detect scroll for navbar style change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
      setNavHeight(getNavHeight())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, link) => {
    window.__nexaAnalytics?.track('nav_item_click', { label: link.label })
    setMobileOpen(false)

    if (link.sectionId) {
      e.preventDefault()
      if (location.pathname === '/') {
        const el = document.getElementById(link.sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        navigate(`/#${link.sectionId}`)
      }
    } else if (link.href === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: 'var(--z-nav)',
          height: navHeight,
          background: scrolled
            ? (isDark ? 'rgba(5, 5, 5, 0.85)' : 'rgba(240, 240, 243, 0.85)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? (isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)')
            : '1px solid transparent',
        }}
      >
        <Container className="h-full flex items-center justify-between">
          <NexaBursaLogo />

          {/* Desktop nav */}
          <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const linkClass = "relative px-4 py-2 text-sm font-medium text-[var(--gray-light)] hover:text-[var(--white)] transition-colors duration-200 rounded-[var(--radius-md)] group cursor-pointer"
              const underline = (
                <span
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--red-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"
                />
              )

              if (link.isRoute) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={linkClass}
                  >
                    {link.label}
                    {underline}
                  </Link>
                )
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={linkClass}
                >
                  {link.label}
                  {underline}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA + theme toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
              title={isDark ? 'Mode terang' : 'Mode gelap'}
              className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)] transition-colors duration-200"
              style={{
                color: 'var(--gray-light)',
                background: 'rgba(128,128,128,0.1)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(128,128,128,0.18)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-light)'; e.currentTarget.style.background = 'rgba(128,128,128,0.1)' }}
            >
              {isDark
                ? <Sun size={18} weight="bold" aria-hidden="true" />
                : <Moon size={18} weight="bold" aria-hidden="true" />}
            </button>

            <Button
              variant="primary"
              size="sm"
              id="nav-open-account-btn"
              onClick={() => {
                setShowWhatsAppModal(true)
              }}
            >
              Kontak Kami
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] text-[var(--gray-light)] hover:text-[var(--white)] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => {
              setMobileOpen((v) => !v)
              window.__nexaAnalytics?.track('mobile_menu_open')
            }}
          >
            {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 'var(--z-nav)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-nav"
              role="dialog"
              aria-label="Menu navigasi"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[72px] left-4 right-4 rounded-[var(--radius-xl)] glass-card p-5 lg:hidden"
              style={{ zIndex: 'calc(var(--z-nav) + 1)' }}
            >
              <nav aria-label="Navigasi mobile" className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const mobileClass = "px-4 py-3 text-base font-medium text-[var(--gray-light)] hover:text-[var(--white)] hover:bg-[rgba(255,255,255,0.05)] rounded-[var(--radius-md)] transition-colors duration-150"
                  if (link.isRoute) {
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={mobileClass}
                        onClick={(e) => handleNavClick(e, link)}
                      >
                        {link.label}
                      </Link>
                    )
                  }
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={mobileClass}
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      {link.label}
                    </a>
                  )
                })}
                <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                  {/* Theme toggle row */}
                  <button
                    onClick={() => { toggleTheme(); setMobileOpen(false) }}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-[var(--radius-md)] transition-colors duration-150"
                    style={{
                      color: 'var(--gray-light)',
                      background: 'rgba(128,128,128,0.08)',
                    }}
                    aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
                  >
                    <span className="text-sm font-medium">
                      {isDark ? 'Mode Terang' : 'Mode Gelap'}
                    </span>
                    {isDark
                      ? <Sun size={17} weight="bold" aria-hidden="true" />
                      : <Moon size={17} weight="bold" aria-hidden="true" />}
                  </button>

                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    id="mobile-open-account-btn"
                    onClick={() => {
                      setMobileOpen(false)
                      setShowWhatsAppModal(true)
                      window.__nexaAnalytics?.track('hero_primary_cta_click', { source: 'mobile_nav' })
                    }}
                  >
                    Kontak Kami
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <>
            <motion.div
              key="wa-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              style={{ zIndex: 'calc(var(--z-nav) + 10)' }}
              onClick={() => setShowWhatsAppModal(false)}
            />
            <motion.div
              key="wa-modal"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] max-w-[420px] rounded-2xl p-0 shadow-2xl overflow-hidden"
              style={{ zIndex: 'calc(var(--z-nav) + 11)', background: isDark ? '#111111' : '#ffffff', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Close Button */}
                <button 
                  onClick={() => setShowWhatsAppModal(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full transition-colors"
                  style={{ color: 'var(--gray-light)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(128,128,128,0.1)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-light)'; e.currentTarget.style.background = 'transparent' }}
                  aria-label="Tutup"
                >
                  <X size={20} weight="bold" />
                </button>

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  <WhatsappLogo size={36} weight="fill" color="white" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--white)' }}>
                  Mari Berdiskusi!
                </h3>
                
                <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--gray-light)' }}>
                  Ingin mendiskusikan portofolio atau kemitraan strategis? Tim kami siap memberikan solusi terbaik melalui WhatsApp.
                </p>
                
                <div className="w-full flex flex-col gap-3">
                  <button
                    onClick={() => {
                      const number = siteContent.kontak?.info?.whatsappNumber || "6281234567890"
                      const message = encodeURIComponent(siteContent.kontak?.whatsappBtn?.message || "Halo")
                      window.open(`https://wa.me/${number}?text=${message}`, '_blank')
                      setShowWhatsAppModal(false)
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 font-semibold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                    style={{ background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)' }}
                  >
                    <WhatsappLogo size={22} weight="fill" />
                    Mulai Percakapan
                  </button>
                  
                  <button
                    onClick={() => setShowWhatsAppModal(false)}
                    className="w-full px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200"
                    style={{ color: 'var(--gray-light)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(128,128,128,0.05)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-light)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    Nanti Saja
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
