import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Article, ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import { useReducedMotion } from '../hooks/useReducedMotion'
import GSAPGeometricBackground from '../components/background/GSAPGeometricBackground'
import Footer from '../components/layout/Footer'
import { siteContent, parseText } from '../config/siteContent'
import BlogCard from '../components/insight/BlogCard'


// ─────────────────────────────────────────
// Animation helpers
// ─────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function InsightPage() {
  const reduced = useReducedMotion()
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const articles = siteContent.insight.articles
  
  // Pyramid layout slicing
  const featuredArticle = articles[0]
  const mediumArticles = articles.slice(1, 3)
  const regularArticles = articles.slice(3, 6)

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-main)' }}>
      <Navbar />

      <main className="flex-grow pt-24 pb-20 lg:pt-32">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
          <GSAPGeometricBackground count={6} zIndex={0} />
          <Container className="relative z-10">
            {/* Back Button */}
            <motion.div
              {...(reduced ? {} : fadeUp(0))}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group"
                style={{ color: 'var(--gray-light)' }}
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {siteContent.insight.hero.back}
              </Link>
            </motion.div>

            <div className="max-w-3xl">
              <motion.span
                {...(reduced ? {} : fadeUp(0.1))}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: 'var(--red-primary)', color: '#fff' }}
              >
                <Article size={14} weight="bold" />
                {siteContent.insight.hero.badge}
              </motion.span>
              
              <motion.h1
                {...(reduced ? {} : fadeUp(0.2))}
                className="font-bold tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)', lineHeight: 1.1 }}
              >
                {siteContent.insight.hero.title}{' '}
                <span style={{ color: 'var(--red-bright)' }}>{siteContent.insight.hero.titleHighlight}</span>
              </motion.h1>
              
              <motion.p
                {...(reduced ? {} : fadeUp(0.3))}
                className="text-lg lg:text-xl max-w-2xl"
                style={{ color: 'var(--gray-light)' }}
              >
                {parseText(siteContent.insight.hero.subtitle)}
              </motion.p>
            </div>
            
            {/* Search Bar (Visual only for now) */}
            <motion.div
              {...(reduced ? {} : fadeUp(0.4))}
              className="mt-12 max-w-md relative"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlass size={20} style={{ color: 'var(--gray-light)' }} />
              </div>
              <input
                type="text"
                placeholder="Cari berita atau analisis..."
                className="w-full pl-11 pr-4 py-3 rounded-[var(--radius-lg)] border focus:outline-none transition-colors duration-300"
                style={{ 
                  background: 'var(--bg-card)', 
                  borderColor: 'var(--border-card)',
                  color: 'var(--white)'
                }}
              />
            </motion.div>
          </Container>
        </section>

        {/* ARTICLES SECTION (PYRAMID LAYOUT) */}
        <section className="relative py-12 lg:py-16">
          <Container>
            
            {/* Level 1: Featured Article (1 column, full width/horizontal card) */}
            {featuredArticle && (
              <div className="mb-8 lg:mb-12">
                <BlogCard article={featuredArticle} featured={true} delay={0.1} />
              </div>
            )}
            
            {/* Level 2: Medium Articles (2 columns) */}
            {mediumArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
                {mediumArticles.map((article, i) => (
                  <div key={article.id}>
                    <BlogCard article={article} delay={0.2 + (i * 0.1)} />
                  </div>
                ))}
              </div>
            )}
            
            {/* Level 3: Regular Articles (3 columns) */}
            {regularArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {regularArticles.map((article, i) => (
                  <div key={article.id}>
                    <BlogCard article={article} delay={0.3 + (i * 0.1)} />
                  </div>
                ))}
              </div>
            )}
            
            {/* Load More Button */}
            <motion.div
              className="mt-16 flex justify-center"
              {...(reduced ? {} : fadeUp(0.5))}
            >
              <button
                className="px-8 py-3 rounded-[var(--radius-pill)] font-semibold transition-colors duration-300 border hover:bg-slate-100/5 dark:hover:bg-white/5"
                style={{ 
                  borderColor: 'var(--border-card)',
                  color: 'var(--white)'
                }}
              >
                Muat Lebih Banyak
              </button>
            </motion.div>

          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
