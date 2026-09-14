import { Sparkle } from '@phosphor-icons/react'
import { siteContent } from '../../config/siteContent'

export default function AnnouncementBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] glass-card-light">
      {/* Live indicator dot */}
      <span
        className="w-1.5 h-1.5 rounded-full bg-[var(--red-bright)] shrink-0"
        style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
        aria-hidden="true"
      />
      <Sparkle size={13} weight="fill" className="text-[var(--red-primary)] shrink-0" aria-hidden="true" />
      <span className="text-xs font-medium text-[var(--gray-light)] leading-none">
        {siteContent.home.hero.badge}
      </span>
    </div>
  )
}
