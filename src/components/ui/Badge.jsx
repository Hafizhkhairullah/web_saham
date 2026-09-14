/**
 * Badge / Pill component
 * variant: 'default' | 'red' | 'green' | 'outline'
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const base = [
    'inline-flex items-center gap-1.5',
    'text-xs font-medium leading-none',
    'px-3 py-1.5',
    'rounded-[var(--radius-pill)]',
  ]

  const variants = {
    default: [
      'bg-[rgba(255,255,255,0.05)]',
      'border border-[var(--border-subtle)]',
      'text-[var(--gray-light)]',
    ],
    red: [
      'bg-[rgba(225,29,46,0.12)]',
      'border border-[rgba(225,29,46,0.25)]',
      'text-[var(--red-bright)]',
    ],
    green: [
      'bg-[rgba(34,197,94,0.12)]',
      'border border-[rgba(34,197,94,0.25)]',
      'text-[var(--green-data)]',
    ],
    outline: [
      'bg-transparent',
      'border border-[var(--border-card)]',
      'text-[var(--gray-light)]',
    ],
  }

  const classes = [...base, ...variants[variant], className].join(' ')

  return <span className={classes}>{children}</span>
}
