import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTheme } from '../../context/ThemeContext'

/**
 * GSAPGeometricBackground
 * 
 * Renders a layer of floating geometric shapes (circles, triangles, diamonds,
 * hexagons, crosses, rings) animated with GSAP. Shapes drift, rotate, and pulse
 * opacity for a subtle, living background.
 * 
 * Props:
 *  - count: number of shapes (default 18)
 *  - zIndex: z-index layer (default 1)
 *  - className: extra classes on the container
 */

// Shape types as pure SVG path generators
const SHAPES = {
  circle: (s) => `<circle cx="${s/2}" cy="${s/2}" r="${s*0.4}" />`,
  triangle: (s) => {
    const h = s * 0.45
    return `<polygon points="${s/2},${s/2-h} ${s/2+h*0.87},${s/2+h*0.5} ${s/2-h*0.87},${s/2+h*0.5}" />`
  },
  diamond: (s) => {
    const h = s * 0.42
    return `<polygon points="${s/2},${s/2-h} ${s/2+h*0.7},${s/2} ${s/2},${s/2+h} ${s/2-h*0.7},${s/2}" />`
  },
  hexagon: (s) => {
    const r = s * 0.38
    const cx = s / 2, cy = s / 2
    const pts = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
    }).join(' ')
    return `<polygon points="${pts}" />`
  },
  cross: (s) => {
    const t = s * 0.12, h = s * 0.38
    const cx = s / 2, cy = s / 2
    return `<rect x="${cx-t}" y="${cy-h}" width="${t*2}" height="${h*2}" rx="${t*0.5}" />
            <rect x="${cx-h}" y="${cy-t}" width="${h*2}" height="${t*2}" rx="${t*0.5}" />`
  },
  ring: (s) => `<circle cx="${s/2}" cy="${s/2}" r="${s*0.38}" fill="none" stroke-width="${s*0.06}" />`,
}

const SHAPE_KEYS = Object.keys(SHAPES)

// Seeded pseudo-random for consistent layout across renders
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

export default function GSAPGeometricBackground({ count = 18, zIndex = 1, className = '' }) {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const rand = seededRandom(42)
    const shapes = []

    // Create shape elements
    for (let i = 0; i < count; i++) {
      const shapeType = SHAPE_KEYS[Math.floor(rand() * SHAPE_KEYS.length)]
      const size = 20 + rand() * 40 // 20-60px
      const svgSize = Math.ceil(size * 1.2)

      const wrapper = document.createElement('div')
      wrapper.style.cssText = `
        position: absolute;
        width: ${svgSize}px;
        height: ${svgSize}px;
        left: ${rand() * 100}%;
        top: ${rand() * 100}%;
        pointer-events: none;
        will-change: transform, opacity;
      `

      const accentColor = isLight ? 'var(--red-primary)' : 'var(--red-bright)'
      const neutralColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)'
      // 30% chance of red accent, rest neutral
      const color = rand() < 0.3 ? accentColor : neutralColor
      const strokeAttr = shapeType === 'ring' ? `stroke="${color}" fill="none"` : `fill="${color}" stroke="none"`

      wrapper.innerHTML = `
        <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" 
             xmlns="http://www.w3.org/2000/svg" ${strokeAttr}
             style="display:block;">
          ${SHAPES[shapeType](svgSize)}
        </svg>
      `

      container.appendChild(wrapper)
      shapes.push({ el: wrapper, rand })
    }

    // Animate each shape
    const tweens = shapes.map(({ el }, i) => {
      const r = seededRandom(i * 137)
      const duration = 12 + r() * 20 // 12-32s per cycle
      const yDrift = 30 + r() * 60   // 30-90px vertical drift
      const xDrift = -20 + r() * 40  // -20 to +20px horizontal drift
      const rotation = -60 + r() * 120 // -60 to +60deg
      const startOpacity = 0.15 + r() * 0.35

      // Set initial state
      gsap.set(el, { opacity: 0, scale: 0.6 + r() * 0.4 })

      // Fade in
      gsap.to(el, {
        opacity: startOpacity,
        duration: 1.5 + r() * 1.5,
        delay: r() * 3,
        ease: 'power2.out',
      })

      // Continuous floating animation
      return gsap.to(el, {
        y: `+=${yDrift}`,
        x: `+=${xDrift}`,
        rotation: rotation,
        duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: r() * 5,
      })
    })

    // Subtle global pulse on opacity for "breathing" effect
    const pulseTimeline = gsap.timeline({ repeat: -1 })
    shapes.forEach(({ el }, i) => {
      const r = seededRandom(i * 31 + 7)
      pulseTimeline.to(el, {
        opacity: `*=${0.5 + r() * 0.5}`,
        duration: 3 + r() * 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
      }, r() * 6)
    })

    return () => {
      tweens.forEach(t => t.kill())
      pulseTimeline.kill()
      // Clean up DOM
      shapes.forEach(({ el }) => {
        if (el.parentNode === container) {
          container.removeChild(el)
        }
      })
    }
  }, [count, isLight])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
    />
  )
}
