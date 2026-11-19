import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  ArrowUpRight,
  CheckCircle,
  Buildings,
  CalendarBlank,
  X,
  Medal,
  WhatsappLogo,
  ArrowRight,
} from '@phosphor-icons/react'
import Container from '../layout/Container'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTheme } from '../../context/ThemeContext'
import { siteContent, parseText } from '../../config/siteContent'

export default function PortfolioSection() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const { portfolio } = siteContent.home

  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredItems =
    activeCategory === 'Semua'
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === activeCategory)

  // Close modal on Escape key & lock body scroll when modal open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProject])

  const handleDiscussProject = (project) => {
    const number = siteContent.kontak?.info?.whatsappNumber || '6281234567890'
    const message = encodeURIComponent(
      `Halo Tim ${siteContent.global.companyName}, saya tertarik mendiskusikan portofolio "${project.title}" (${project.category}).`
    )
    window.open(`https://wa.me/${number}?text=${message}`, '_blank')
  }

  return (
    <section
      id="portofolio"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-main)' }}
      data-gsap="section-reveal"
    >
      {/* Subtle ambient background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 0,
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,46,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'var(--red-primary)', color: '#fff' }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase size={14} weight="bold" />
            {portfolio.badge}
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
            {portfolio.title}{' '}
            <span style={{ color: 'var(--red-bright)' }}>{portfolio.titleHighlight}</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base lg:text-lg"
            style={{ color: 'var(--gray-light)' }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseText(portfolio.subtitle)}
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          role="tablist"
          aria-label="Filter kategori portofolio"
        >
          {portfolio.categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-[var(--radius-pill)] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: isActive
                    ? 'var(--red-primary)'
                    : isLight
                      ? 'rgba(0,0,0,0.05)'
                      : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#ffffff' : 'var(--gray-light)',
                  border: isActive
                    ? '1px solid var(--red-bright)'
                    : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 4px 16px rgba(225,29,46,0.28)' : 'none',
                }}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={reduced ? false : { opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={reduced ? {} : { y: -6 }}
                onClick={() => setSelectedProject(item)}
                className="group relative flex flex-col rounded-[var(--radius-xl)] overflow-hidden cursor-pointer transition-shadow duration-300"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  boxShadow: isLight
                    ? '0 4px 20px rgba(0,0,0,0.04)'
                    : '0 8px 30px rgba(0,0,0,0.25)',
                }}
              >
                {/* Image Cover */}
                <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.25) 55%, transparent 100%)',
                    }}
                  />

                  {/* Category & Year Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-md"
                      style={{
                        background: 'rgba(225,29,46,0.88)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium text-white/90 backdrop-blur-md"
                      style={{
                        background: 'rgba(0,0,0,0.55)',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      <CalendarBlank size={12} weight="bold" />
                      {item.year}
                    </span>
                  </div>

                  {/* Client label at bottom of image */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-2 text-xs text-white/85 font-medium">
                    <Buildings size={14} weight="duotone" className="text-[var(--red-bright)] shrink-0" />
                    <span className="truncate">{item.client}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-2.5">
                    <h3
                      className="text-lg lg:text-xl font-bold leading-snug group-hover:text-[var(--red-bright)] transition-colors duration-200"
                      style={{ color: 'var(--white)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed line-clamp-3"
                      style={{ color: 'var(--gray-light)' }}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Impact Badge */}
                    <div
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                      style={{
                        background: isLight ? 'rgba(225,29,46,0.06)' : 'rgba(225,29,46,0.1)',
                        color: 'var(--red-bright)',
                        border: '1px solid rgba(225,29,46,0.18)',
                      }}
                    >
                      <Medal size={15} weight="fill" className="shrink-0" />
                      <span className="truncate">{item.impact}</span>
                    </div>

                    {/* Action Footer */}
                    <div
                      className="pt-3 flex items-center justify-between text-xs font-semibold"
                      style={{
                        borderTop: '1px solid var(--border-subtle)',
                        color: 'var(--white)',
                      }}
                    >
                      <span>Lihat Detail Portofolio</span>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[var(--red-primary)] group-hover:text-white"
                        style={{
                          background: 'rgba(128,128,128,0.1)',
                        }}
                      >
                        <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* ═══════════════════════════════════════ */}
      {/* PORTFOLIO CASE STUDY DETAIL MODAL */}
      {/* ═══════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="portfolio-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              style={{ zIndex: 'var(--z-modal)' }}
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />

            <motion.div
              key="portfolio-modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[92%] max-w-2xl max-h-[88vh] overflow-y-auto rounded-[var(--radius-xl)] shadow-2xl"
              style={{
                zIndex: 'calc(var(--z-modal) + 1)',
                background: isLight ? '#ffffff' : '#121215',
                border: '1px solid var(--border-card)',
              }}
            >
              {/* Modal Image Banner */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(18,18,21,0.95) 0%, rgba(18,18,21,0.35) 60%, rgba(0,0,0,0.4) 100%)',
                  }}
                />

                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Tutup detail portofolio"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/50 hover:bg-[var(--red-primary)] backdrop-blur-md transition-colors cursor-pointer"
                >
                  <X size={20} weight="bold" />
                </button>

                {/* Header metadata over banner */}
                <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: 'var(--red-primary)' }}
                    >
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-white/90 bg-white/15 backdrop-blur-md">
                      Tahun {selectedProject.year}
                    </span>
                  </div>
                  <h3
                    id="portfolio-modal-title"
                    className="text-xl sm:text-2xl font-bold text-white leading-tight"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                {/* Client & Impact Bar */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl"
                  style={{
                    background: isLight ? '#F8F8FA' : 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
                      Mitra / Sektor Industri
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--white)' }}>
                      <Buildings size={16} weight="duotone" style={{ color: 'var(--red-bright)' }} />
                      {selectedProject.client}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
                      Pencapaian Utama
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--red-bright)' }}>
                      <Medal size={16} weight="fill" />
                      {selectedProject.impact}
                    </span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--red-bright)' }}>
                      Tantangan
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--green-data)' }}>
                      Solusi Strategis
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-light)' }}>
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--white)' }}>
                    Lingkup Kerja & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedProject.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl text-xs font-medium"
                        style={{
                          background: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--white)',
                        }}
                      >
                        <CheckCircle size={15} weight="fill" style={{ color: 'var(--red-bright)' }} className="shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div
                  className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  <button
                    onClick={() => handleDiscussProject(selectedProject)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 cursor-pointer"
                    style={{
                      background: '#25D366',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                    }}
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    Diskusikan Proyek Serupa
                  </button>

                  <Link
                    to="/kontak"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid var(--border-card)',
                    }}
                  >
                    Hubungi Tim Korporasi
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
