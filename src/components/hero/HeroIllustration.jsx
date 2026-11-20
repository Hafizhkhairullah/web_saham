import { ShieldCheck, ChartLineUp, CheckCircle } from '@phosphor-icons/react'
import { useTheme } from '../../context/ThemeContext'
import { siteContent } from '../../config/siteContent'

export default function HeroIllustration() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const { illustration } = siteContent.home.hero

  return (
    <div
      className="relative w-full flex flex-col gap-4"
      aria-label={illustration.mainImageAlt}
    >
      {/* Decorative ambient glow behind illustration */}
      <div
        className="absolute -inset-4 rounded-[32px] pointer-events-none blur-2xl opacity-45"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(74,222,128,0.3), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main Illustration Frame — fits 100% of column width with precise 4:3 aspect ratio */}
      <div
        className="relative w-full rounded-[var(--radius-xl)] overflow-hidden glass-card p-3"
        style={{
          border: '1px solid rgba(74,222,128,0.22)',
          boxShadow: isLight
            ? '0 24px 60px rgba(0,0,0,0.1), 0 0 36px rgba(74,222,128,0.1)'
            : '0 28px 70px rgba(0,0,0,0.6), 0 0 48px rgba(74,222,128,0.15)',
        }}
      >
        {/* Image & Vector Illustration Canvas — Proportional 4:3 aspect ratio */}
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden w-full aspect-[4/3] bg-[#0a0a0d]">
          {/* Base Corporate Image */}
          <img
            src={illustration.mainImageUrl}
            alt={illustration.mainImageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            loading="eager"
          />

          {/* Duotone / Atmospheric Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(5,5,8,0.8) 0%, rgba(17,17,24,0.5) 50%, rgba(74,222,128,0.28) 100%)',
            }}
          />

          {/* Bespoke SVG Financial & Corporate Ecosystem Vector Illustration Overlay */}
          <svg
            viewBox="0 0 600 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroIllustArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="heroIllustLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#86EFAC" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="glassPanel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            {/* Subtle perspective grid lines */}
            <g opacity="0.15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 6">
              <line x1="60" y1="90" x2="540" y2="90" />
              <line x1="60" y1="170" x2="540" y2="170" />
              <line x1="60" y1="250" x2="540" y2="250" />
              <line x1="60" y1="330" x2="540" y2="330" />
              <line x1="150" y1="60" x2="150" y2="370" />
              <line x1="300" y1="60" x2="300" y2="370" />
              <line x1="450" y1="60" x2="450" y2="370" />
            </g>

            {/* Isometric Portfolio Growth Blocks (Illustration) */}
            <g opacity="0.88">
              <rect x="95" y="255" width="38" height="75" rx="6" fill="url(#glassPanel)" stroke="rgba(255,255,255,0.22)" />
              <rect x="165" y="220" width="38" height="110" rx="6" fill="url(#glassPanel)" stroke="rgba(255,255,255,0.25)" />
              <rect x="235" y="195" width="38" height="135" rx="6" fill="url(#glassPanel)" stroke="rgba(255,255,255,0.28)" />
              <rect x="305" y="155" width="38" height="175" rx="6" fill="rgba(74,222,128,0.28)" stroke="rgba(134,239,172,0.5)" />
              <rect x="375" y="125" width="38" height="205" rx="6" fill="rgba(74,222,128,0.42)" stroke="rgba(134,239,172,0.65)" />
              <rect x="445" y="95" width="38" height="235" rx="6" fill="rgba(74,222,128,0.65)" stroke="#86EFAC" />
            </g>

            {/* Growth Area Curve */}
            <path
              d="M75 290 C 135 275, 175 235, 245 215 C 315 195, 365 140, 465 98 L 515 78 L 515 340 L 75 340 Z"
              fill="url(#heroIllustArea)"
            />

            {/* Growth Curve Line */}
            <path
              d="M75 290 C 135 275, 175 235, 245 215 C 315 195, 365 140, 465 98 L 515 78"
              stroke="url(#heroIllustLine)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Connected Node Points */}
            {[
              { cx: 114, cy: 277 },
              { cx: 184, cy: 242 },
              { cx: 254, cy: 212 },
              { cx: 324, cy: 175 },
              { cx: 394, cy: 132 },
              { cx: 464, cy: 98 },
            ].map((pt, idx) => (
              <g key={idx}>
                <circle cx={pt.cx} cy={pt.cy} r="8" fill="#4ADE80" fillOpacity="0.3" />
                <circle cx={pt.cx} cy={pt.cy} r="4.5" fill="#FFFFFF" stroke="#4ADE80" strokeWidth="2" />
              </g>
            ))}
          </svg>

          {/* Bottom Gradient Scrim for internal tags */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(5,5,8,0.92) 15%, transparent 100%)',
            }}
          />

          {/* Bottom Pillar Chips inside Illustration */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 z-10">
            {illustration.pillars.map((pillar, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/95 backdrop-blur-md"
                style={{
                  background: i === 0 ? 'rgba(74,222,128,0.88)' : 'rgba(255,255,255,0.14)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <CheckCircle size={14} weight="fill" className="text-white shrink-0" />
                <span>{pillar}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Clean 2-Column Highlight Row below the Canvas (no overlapping text!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{
              background: isLight ? 'rgba(74,222,128,0.04)' : 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(74,222,128,0.18)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(74,222,128,0.14)', color: 'var(--red-bright)' }}
            >
              <ChartLineUp size={21} weight="duotone" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold tracking-tight truncate" style={{ color: 'var(--white)' }}>
                {illustration.badgeTopTitle}
              </span>
              <span className="text-[11px] truncate" style={{ color: 'var(--gray-light)' }}>
                {illustration.badgeTopSubtitle}
              </span>
            </div>
          </div>

          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{
              background: isLight ? 'rgba(0,0,0,0.025)' : 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(34,197,94,0.14)', color: 'var(--green-data)' }}
            >
              <ShieldCheck size={21} weight="duotone" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold tracking-tight truncate" style={{ color: 'var(--white)' }}>
                {illustration.badgeBottomTitle}
              </span>
              <span className="text-[11px] truncate" style={{ color: 'var(--gray-light)' }}>
                {illustration.badgeBottomSubtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
