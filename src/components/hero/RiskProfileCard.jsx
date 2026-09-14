import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ChartBar, ArrowRight } from '@phosphor-icons/react'

// Progress ring SVG
function ProgressRing({ progress = 0, size = 52, strokeWidth = 4 }) {
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - progress)

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: 'rotate(-90deg)' }}
      aria-hidden="true"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--red-primary)"
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function RiskProfileCard({ delay = 1 }) {
  const reduced = useReducedMotion()

  const handleClick = () => {
    window.__nexaAnalytics?.track('risk_test_click', { source: 'floating_card' })
  }

  return (
    <motion.div
      className="glass-card rounded-[var(--radius-lg)] p-4 flex flex-col gap-3 cursor-pointer"
      style={{
        border: '1px solid var(--border-card)',
      }}
      animate={
        reduced
          ? {}
          : { y: [0, -6, 0] }
      }
      transition={
        reduced
          ? {}
          : {
              duration: 5,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
      whileHover={reduced ? {} : { scale: 1.02 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Mulai Tes Profil Risiko investasi, sekitar 3 menit"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <ChartBar size={13} weight="fill" style={{ color: 'var(--red-primary)' }} aria-hidden="true" />
        <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
          Profil Risiko
        </span>
      </div>

      {/* Ring + level */}
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <ProgressRing progress={0} />
          <span
            className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
            style={{ color: 'var(--gray-light)' }}
          >
            ?
          </span>
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm font-semibold truncate" style={{ color: 'var(--white)' }} title="Belum Diketahui">
            Belum Diketahui
          </span>
          <span className="text-xs truncate" style={{ color: 'var(--gray-mid)' }} title="Temukan profil kamu">
            Temukan profil kamu
          </span>
        </div>
      </div>

      {/* CTA */}
      <div
        className="flex items-center justify-between px-3 py-2 rounded-[var(--radius-md)] mt-0.5 overflow-hidden"
        style={{ border: '1px solid var(--border-subtle)' }}
      >
        <span className="text-xs font-semibold whitespace-nowrap" style={{ color: 'var(--red-bright)' }}>
          Mulai Tes
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] whitespace-nowrap" style={{ color: 'var(--gray-mid)' }}>
            ~3 mnt
          </span>
          <ArrowRight size={12} weight="bold" style={{ color: 'var(--red-bright)' }} aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  )
}
