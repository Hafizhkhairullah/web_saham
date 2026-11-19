import { ShieldCheck, Buildings, Medal } from '@phosphor-icons/react'
import { siteContent } from '../../config/siteContent'

const ICONS = [ShieldCheck, Buildings, Medal]

export default function TrustIndicators() {
  const indicators = siteContent.home.hero.trustIndicators || []

  return (
    <div
      className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
      role="list"
      aria-label="Keunggulan korporasi"
    >
      {indicators.map((label, idx) => {
        const Icon = ICONS[idx % ICONS.length]
        return (
          <div
            key={label}
            role="listitem"
            className="flex items-center gap-2"
          >
            <Icon
              size={16}
              weight="fill"
              className="shrink-0"
              style={{ color: 'var(--red-primary)' }}
              aria-hidden="true"
            />
            <span
              className="text-sm font-medium leading-tight"
              style={{ color: 'var(--gray-light)' }}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
