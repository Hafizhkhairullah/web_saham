import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useGSAPScrollAnimations
 * 
 * Initialises all GSAP ScrollTrigger scroll-driven animations for the page.
 * Respects `prefers-reduced-motion`.
 * Call this hook once at the page level (e.g. HomePage).
 */
export function useGSAPScrollAnimations() {
  const ctx = useRef(null)

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Small delay to let DOM mount fully (Spline, illustrations, etc.)
    const raf = requestAnimationFrame(() => {
      ctx.current = gsap.context(() => {

        // ═══════════════════════════════════════
        // 1. HERO — Parallax depth + fade-out
        // ═══════════════════════════════════════
        const heroSection = document.querySelector('#hero')
        if (heroSection) {
          const heroLeft = heroSection.querySelector('[data-gsap="hero-left"]')
          const heroRight = heroSection.querySelector('[data-gsap="hero-right"]')

          if (heroLeft) {
            gsap.to(heroLeft, {
              y: -80,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6,
              }
            })
          }

          if (heroRight) {
            gsap.to(heroRight, {
              y: -40,
              opacity: 0.3,
              ease: 'none',
              scrollTrigger: {
                trigger: heroSection,
                start: 'center top',
                end: 'bottom top',
                scrub: 0.6,
              }
            })
          }
        }

        // ═══════════════════════════════════════
        // 2. MARKET TICKER — Pin + glow pulse
        // ═══════════════════════════════════════
        const ticker = document.querySelector('#market-ticker')
        if (ticker) {
          const glowLine = ticker.querySelector('[data-gsap="ticker-glow"]')

          ScrollTrigger.create({
            trigger: ticker,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
            onUpdate: (self) => {
              if (glowLine) {
                const progress = self.progress
                const opacity = Math.sin(progress * Math.PI) * 0.7
                gsap.set(glowLine, { opacity })
              }
            }
          })
        }

        // ═══════════════════════════════════════
        // 3. ABOUT SECTION — Staggered reveal
        // ═══════════════════════════════════════
        const aboutSection = document.querySelector('#tentang')
        if (aboutSection) {
          // Heading: word-by-word reveal
          const headingWords = aboutSection.querySelectorAll('[data-gsap="about-word"]')
          if (headingWords.length > 0) {
            gsap.set(headingWords, { opacity: 0, y: 20 })
            gsap.to(headingWords, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: aboutSection,
                start: 'top 75%',
                toggleActions: 'play none none none',
              }
            })
          }

          // Paragraphs: staggered slide-in from left
          const aboutParas = aboutSection.querySelectorAll('[data-gsap="about-para"]')
          if (aboutParas.length > 0) {
            gsap.set(aboutParas, { opacity: 0, x: -40 })
            gsap.to(aboutParas, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: aboutSection,
                start: 'top 65%',
                toggleActions: 'play none none none',
              }
            })
          }

          // Highlights: staggered pop-in
          const aboutStats = aboutSection.querySelectorAll('[data-gsap="about-stat"]')
          if (aboutStats.length > 0) {
            gsap.set(aboutStats, { opacity: 0, y: 24, scale: 0.96 })
            gsap.to(aboutStats, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: aboutStats[0],
                start: 'top 85%',
                toggleActions: 'play none none none',
              }
            })
          }

          // Robot / Spline container: scale-up + rotate entrance
          const robotContainer = aboutSection.querySelector('[data-gsap="about-robot"]')
          if (robotContainer) {
            gsap.set(robotContainer, { opacity: 0, scale: 0.82, rotateY: -12 })
            gsap.to(robotContainer, {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: robotContainer,
                start: 'top 80%',
                toggleActions: 'play none none none',
              }
            })
          }
        }

        // ═══════════════════════════════════════
        // 4. GLOBAL SECTION TRANSITIONS — clipPath reveal
        // ═══════════════════════════════════════
        const revealSections = document.querySelectorAll('[data-gsap="section-reveal"]')
        revealSections.forEach((section) => {
          gsap.set(section, {
            clipPath: 'inset(6% 0% 0% 0%)',
            opacity: 0.75,
          })
          gsap.to(section, {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'top 55%',
              scrub: 0.4,
            }
          })
        })

      }) // end gsap.context
    }) // end rAF

    return () => {
      cancelAnimationFrame(raf)
      if (ctx.current) {
        ctx.current.revert()
      }
    }
  }, [])
}
