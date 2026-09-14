import { CaretUp, CaretDown } from '@phosphor-icons/react'

export default function WatchlistRow({ ticker, name, price, change, isUp }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)] last:border-0">
      {/* Left: ticker + name */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-semibold truncate" style={{ color: 'var(--white)' }}>
          {ticker}
        </span>
        <span className="text-xs truncate" style={{ color: 'var(--gray-mid)' }}>
          {name}
        </span>
      </div>

      {/* Right: price + change */}
      <div className="flex flex-col items-end gap-0.5 shrink-0 ml-3">
        <span
          className="text-sm font-mono font-semibold"
          style={{ color: 'var(--white)' }}
        >
          {price}
        </span>
        <span
          className="text-xs font-mono flex items-center gap-0.5"
          style={{ color: isUp ? 'var(--green-data)' : 'var(--red-data)' }}
        >
          {isUp
            ? <CaretUp size={11} weight="fill" aria-hidden="true" />
            : <CaretDown size={11} weight="fill" aria-hidden="true" />}
          <span aria-label={`${isUp ? 'naik' : 'turun'} ${change}`}>{change}</span>
        </span>
      </div>
    </div>
  )
}
