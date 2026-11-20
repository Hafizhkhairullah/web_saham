/**
 * HeroBackground — layered background system:
 *
 * Layer 0 (z=0):   Solid bg-main fill (so body color shows)
 * Layer 1 (z=1):   SVG dot pattern + perspective grid
 * Layer 2 (z=2):   Red radial glow + abstract market line
 * Layer 3 (z=3):   Spline 3D scene (right half, WebGL canvas)
 * Layer 4 (z=4):   Mouse Spotlight
 * Layer 5 (z=5):   Edge vignettes (top/bottom/radial)
 *
 * Hero content Container sits at z=10 (var(--z-content)), above all background layers.
 * Spline canvas is pointer-events-auto so 3D interactivity works.
 * All other layers are pointer-events-none.
 */
import { Suspense, lazy } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { useTheme } from '../../context/ThemeContext'
import GSAPGeometricBackground from './GSAPGeometricBackground'

const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-6 h-6 rounded-full border-2 animate-spin"
        style={{ borderColor: 'var(--red-primary)', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function HeroBackground() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const gridColor = isLight ? '#000000' : '#ffffffff'
  const gridOpacity = isLight ? 0.03 : 0.03
  const dotOpacity = isLight ? 0.04 : 0.04
  const glowA = isLight ? '0.04' : '0.08'
  const glowB = isLight ? '0.01' : '0.03'
  const lineOpacity = isLight ? 0.0 : 0.08

  return (
    <>
      {/* ── LAYER 0: bg-main fill (transparent body shows underneath) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--bg-main)', zIndex: 0 }}
      />

      <GSAPGeometricBackground count={20} zIndex={1} />

      {/* ── LAYER 1: Dot pattern ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: dotOpacity, zIndex: 1 }}
      >
        <defs>
          <pattern id="nexabg-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={gridColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nexabg-dots)" />
      </svg>

      {/* ── LAYER 1: Perspective grid ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: gridOpacity, zIndex: 1 }}
      >
        {[...Array(16)].map((_, i) => (
          <line key={`v${i}`} x1={90 * i} y1="0" x2={720 + (90 * i - 720) * 0.4} y2="900" stroke={gridColor} strokeWidth="0.5" />
        ))}
        {[...Array(12)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={75 * i} x2="1440" y2={75 * i} stroke={gridColor} strokeWidth="0.5" />
        ))}
      </svg>

      {/* ── LAYER 2: Red radial glow (right side) ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: 2,
          right: '-5%', top: '0%',
          width: '70%', height: '100%',
          background: `radial-gradient(ellipse at 60% 40%, rgba(74,222,128,${glowA}) 0%, rgba(22,101,52,${glowB}) 45%, transparent 70%)`,
          animation: 'glow-pulse 6s ease-in-out infinite',
        }}
      />

      {/* ── LAYER 2: Abstract market line (bottom-left) ── */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[55%] h-[60%] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        style={{ opacity: lineOpacity, zIndex: 2 }}
      >
        <defs>
          <linearGradient id="nexabg-linefill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="0,420 80,380 160,390 220,340 290,355 360,300 430,320 500,270 580,280 650,230 720,245 800,180 800,500 0,500"
          fill="url(#nexabg-linefill)"
        />
        <polyline
          points="0,420 80,380 160,390 220,340 290,355 360,300 430,320 500,270 580,280 650,230 720,245 800,180"
          fill="none" stroke="#4ADE80" strokeWidth="1.5"
        />
      </svg>

      {/* ── LAYER 4: Mouse Spotlight (injected here, binds to parent section via useEffect) ── */}
      <Spotlight
        size={340}
        springOptions={{ bounce: 0, duration: 0.25 }}
        style={{ zIndex: 4 }}
      />

      {/* ── LAYER 5: Vignettes (frame + depth) ── */}
      {/* Radial vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          background: `radial-gradient(ellipse at 50% 50%, transparent 30%, ${isLight ? 'rgba(240,240,243,0.5)' : 'rgba(5,5,5,0.5)'} 100%)`,
        }}
      />
      {/* Top fade */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-36 pointer-events-none"
        style={{ zIndex: 5, background: 'linear-gradient(to bottom, var(--bg-main) 0%, transparent 100%)' }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ zIndex: 5, background: 'linear-gradient(to top, var(--bg-main) 0%, transparent 100%)' }}
      />
      {/* Left fade (protects text readability) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[40%] pointer-events-none"
        style={{
          zIndex: 5,
          background: `linear-gradient(to right, var(--bg-main) 0%, ${isLight ? 'rgba(240,240,243,0.8)' : 'rgba(5,5,5,0.6)'} 50%, transparent 100%)`,
        }}
      />
    </>
  )
}
