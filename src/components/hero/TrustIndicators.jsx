import { ShieldCheck, Lock, Headset } from '@phosphor-icons/react'

const INDICATORS = [
  {
    icon: ShieldCheck,
    label: 'Terdaftar & diawasi regulator',
    note: '(placeholder)',
  },
  {
    icon: Lock,
    label: 'Data terenkripsi end-to-end',
  },
  {
    icon: Headset,
    label: 'Dukungan investor 5x8',
  },
]

export default function TrustIndicators() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      role="list"
      aria-label="Indikator kepercayaan"
    >
      {INDICATORS.map(({ icon: Icon, label, note }) => (
        <div
          key={label}
          role="listitem"
          className="flex items-center gap-2"
        >
          <Icon
            size={15}
            weight="fill"
            className="shrink-0"
            style={{ color: 'var(--red-primary)' }}
            aria-hidden="true"
          />
          <span
            className="text-sm leading-tight"
            style={{ color: 'var(--gray-light)' }}
          >
            {label}
            {note && (
              <span
                className="ml-1 text-xs"
                style={{ color: 'var(--gray-mid)', opacity: 0.7 }}
              >
                {note}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
