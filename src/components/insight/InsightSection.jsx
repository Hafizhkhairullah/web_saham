import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Article, ArrowRight } from '@phosphor-icons/react'
import Container from '../layout/Container'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteContent, parseText } from '../../config/siteContent'
import BlogCard from './BlogCard'

export default function InsightSection() {
  const reduced = useReducedMotion()
  
  // Get latest 3 articles
  const latestArticles = siteContent.insight.articles.slice(0, 3)

  return (
    <section
      id="insight"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-main)' }}
    >
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
            <Article size={14} weight="bold" />
            {siteContent.home.insight.badge}
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
            {siteContent.home.insight.title}{' '}
            <span style={{ color: 'var(--red-bright)' }}>{siteContent.home.insight.titleHighlight}</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base"
            style={{ color: 'var(--gray-light)' }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseText(siteContent.home.insight.subtitle)}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {latestArticles.map((article, i) => (
            <div key={article.id}>
              <BlogCard article={article} delay={i * 0.1} />
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
            to="/insight"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-slate-900 dark:text-white rounded-[var(--radius-pill)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-slate-200 dark:border-white/10 hover:border-[var(--red-primary)] dark:hover:border-[var(--red-primary)]"
            style={{
              background: 'var(--bg-card)',
            }}
          >
            {siteContent.home.insight.cta}
            <ArrowRight size={18} weight="bold" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
