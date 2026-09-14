import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { TrendUp, TrendDown, Smiley } from '@phosphor-icons/react'
import { ihsgData, sentimentData } from '../../data/marketMockData'

// Mini sparkline SVG from array of values
function Sparkline({ values, color }) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const w = 64
  const h = 28
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  })
  return (
    <svg width={w} height={h} aria-hidden="true" style={{ overflow: 'visible' }}>
      <polyline
        points={pts.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IHSGCard({ delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="glass-card rounded-[var(--radius-lg)] p-4 3xl:p-6 4xl:p-8 flex flex-col gap-3 3xl:gap-4"
      style={{ border: '1px solid var(--border-card)' }}
      animate={
        reduced
          ? {}
          : { y: [0, -5, 0] }
      }
      transition={
        reduced
          ? {}
          : {
              duration: 4,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
          {ihsgData.name}
        </span>
        <TrendUp size={14} weight="bold" style={{ color: 'var(--green-data)' }} aria-hidden="true" />
      </div>

      {/* Value + change */}
      <div className="flex flex-col gap-0.5">
        <span className="text-xl 3xl:text-3xl 4xl:text-4xl font-bold font-mono" style={{ color: 'var(--white)' }}>
          {ihsgData.value}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: ihsgData.isUp ? 'var(--green-data)' : 'var(--red-data)' }}
          aria-label={`IHSG ${ihsgData.isUp ? 'naik' : 'turun'} ${ihsgData.change}`}
        >
          {ihsgData.change} hari ini
        </span>
      </div>

      {/* Sparkline */}
      <Sparkline values={ihsgData.sparkline} color="var(--green-data)" />
    </motion.div>
  )
}

export function SentimentCard({ delay = 0.5 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="glass-card rounded-[var(--radius-lg)] p-4 flex flex-col gap-3"
      style={{ border: '1px solid var(--border-card)' }}
      animate={
        reduced
          ? {}
          : { y: [0, -4, 0] }
      }
      transition={
        reduced
          ? {}
          : {
              duration: 4.5,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
          {sentimentData.label}
        </span>
        <Smiley size={14} weight="fill" style={{ color: 'var(--green-data)' }} aria-hidden="true" />
      </div>

      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: 'var(--green-data)' }}
          aria-hidden="true"
        />
        <span className="text-base 3xl:text-xl 4xl:text-2xl font-semibold" style={{ color: 'var(--white)' }}>
          {sentimentData.status}
        </span>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: 'var(--gray-light)' }}>
        {sentimentData.description}
      </p>
    </motion.div>
  )
}
