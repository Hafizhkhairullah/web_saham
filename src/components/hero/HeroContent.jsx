import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteContent, parseText } from '../../config/siteContent'

/**
 * Hero headline + supporting copy.
 * Responsive font size & word-wrapping so headline never overflows into the right column.
 */
export default function HeroContent() {
  const reduced = useReducedMotion()
  const highlightText = siteContent.home.hero.titleHighlight
  const highlightWords = highlightText.split(' ')

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.4 }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.1 }
    }
  }

  return (
    <div className="flex flex-col gap-5 min-w-0">
      {/* Headline */}
      <h1
        className="font-extrabold tracking-tight leading-[1.12] break-words"
        style={{
          fontSize: 'clamp(2rem, 3.2vw, 3.5rem)',
          color: 'var(--white)',
        }}
      >
        <span className="block">{siteContent.home.hero.titlePart1}</span>
        <span className="block">{siteContent.home.hero.titlePart2}</span>
        <motion.span
          className="italic inline-flex flex-wrap gap-x-[0.28em]"
          style={{ color: 'var(--red-bright)', paddingBottom: '0.05em' }}
          variants={reduced ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={highlightText}
        >
          {highlightWords.map((word, wIdx) => (
            <span key={wIdx} className="inline-flex whitespace-nowrap">
              {word.split('').map((char, cIdx) => (
                <motion.span key={cIdx} variants={reduced ? {} : letterVariants} aria-hidden="true">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.span>
      </h1>

      {/* Supporting copy */}
      <p
        className="leading-relaxed max-w-[52ch]"
        style={{
          fontSize: 'clamp(0.95rem, 1.25vw, 1.1rem)',
          color: 'var(--gray-light)',
        }}
      >
        {parseText(siteContent.home.hero.subtitle)}
      </p>
    </div>
  )
}
