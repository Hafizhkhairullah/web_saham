import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteContent, parseText } from '../../config/siteContent'

/**
 * Hero headline + supporting copy.
 * h1 with italic+red emphasis on last phrase.
 * Font size: 64-76px desktop, 38-44px mobile.
 */
export default function HeroContent() {
  const reduced = useReducedMotion()
  const highlightText = siteContent.home.hero.titleHighlight

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.6 }
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
    <div className="flex flex-col gap-5">
      {/* h1 */}
      <h2
        className="font-extrabold tracking-tight leading-[1.05]"
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 6rem)',
          color: 'var(--white)',
        }}
      >
        {siteContent.home.hero.titlePart1}{' '}
        <br className="hidden sm:block" />
        {siteContent.home.hero.titlePart2}{' '}
        <motion.span
          className="italic inline-flex"
          style={{ color: 'var(--red-bright)', paddingBottom: '0.05em' }}
          variants={reduced ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={highlightText}
        >
          {highlightText.split('').map((char, index) => (
            <motion.span key={index} variants={reduced ? {} : letterVariants} aria-hidden="true">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </h2>

      {/* Supporting copy */}
      <p
        className="leading-relaxed max-w-[48ch]"
        style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
          color: 'var(--gray-light)',
        }}
      >
        {parseText(siteContent.home.hero.subtitle)}
      </p>
    </div>
  )
}
