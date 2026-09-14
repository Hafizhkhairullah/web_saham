import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CalendarBlank } from '@phosphor-icons/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function BlogCard({ article, featured = false, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <Link to="/insight" className="block h-full">
      <motion.div
        className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] h-full ${
          featured ? 'md:flex-row' : ''
        }`}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
        }}
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={reduced ? {} : { y: -4, scale: 1.01 }}
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 lg:w-3/5 shrink-0' : 'w-full pt-[60%] sm:pt-[50%]'}`}>
          {featured && <div className="absolute inset-0 block md:hidden pt-[60%]" />}
          <motion.img
            src={article.imageUrl}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-[var(--radius-pill)] bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className={`flex flex-col flex-grow p-6 lg:p-8 ${featured ? 'md:w-1/2 lg:w-2/5 justify-center' : ''}`}>
          {/* Meta data */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium mb-4" style={{ color: 'var(--gray-light)' }}>
            <span className="flex items-center gap-1.5">
              <CalendarBlank size={14} weight="bold" />
              {article.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} weight="bold" />
              {article.readTime}
            </span>
          </div>

          <h3 className={`font-bold mb-3 line-clamp-3 dark:text-white text-slate-900 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {article.title}
          </h3>
          
          <p className="text-sm leading-relaxed mb-6 line-clamp-3" style={{ color: 'var(--gray-light)' }}>
            {article.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-semibold dark:text-gray-300 text-slate-700">
              Oleh <span style={{ color: 'var(--red-bright)' }}>{article.author}</span>
            </span>
            
            <div
              className="relative flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: 'var(--red-primary)' }}
            >
              Baca
              <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
