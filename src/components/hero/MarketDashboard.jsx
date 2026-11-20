import { useState } from 'react'
import { CaretUp, CaretDown } from '@phosphor-icons/react'
import MarketChart from './MarketChart'
import WatchlistRow from './WatchlistRow'
import { timeRanges } from '../../data/marketMockData'
import { useFinnhubTicker } from '../../hooks/useFinnhubTicker'
import { useFinnhubChart } from '../../hooks/useFinnhubChart'
import { siteContent, parseText } from '../../config/siteContent'

const COMPANY_NAMES = {
  AAPL: 'Apple Inc.',
  MSFT: 'Microsoft Corp.',
  TSLA: 'Tesla Inc.',
  NVDA: 'NVIDIA Corp.',
  GOOGL: 'Alphabet Inc.',
  AMZN: 'Amazon.com Inc.',
}

export default function MarketDashboard() {
  const [activeRange, setActiveRange] = useState('1H')
  const { tickerData } = useFinnhubTicker()

  // Ambil saham pertama sebagai highlight di atas chart
  const featured = tickerData[0] || {}
  const { chartData } = useFinnhubChart(featured.symbol, activeRange)

  const featuredStock = {
    name: COMPANY_NAMES[featured.symbol] || featured.symbol,
    ticker: featured.symbol,
    price: featured.value,
    change: featured.change,
    isUp: featured.up,
    currency: '$'
  }

  // Ambil 3 saham berikutnya untuk masuk ke watchlist
  const watchlist = tickerData.slice(1, 4).map(item => ({
    ticker: item.symbol,
    name: COMPANY_NAMES[item.symbol] || item.symbol,
    price: `$${item.value}`,
    change: item.change,
    isUp: item.up
  }))

  return (
    <div
      className="relative glass-card rounded-[var(--radius-xl)] overflow-hidden"
      role="region"
      aria-label={`Dashboard pasar saham - ${siteContent.home.demoDashboard.demoTag}`}
      style={{
        border: '1px solid rgba(74,222,128,0.15)',
        boxShadow: '0 0 40px rgba(74,222,128,0.08), 0 24px 48px rgba(0,0,0,0.4)',
      }}
      onClick={() =>
        window.__nexaAnalytics?.track('hero_dashboard_interaction')
      }
    >
      {/* App-style top bar */}
      <div
        className="flex items-center justify-between px-5 py-3.5 3xl:px-8 3xl:py-5 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          {['var(--red-primary)', '#F59E0B', 'var(--green-data)'].map((c, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c, opacity: 0.7 }}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
          {parseText(siteContent.home.demoDashboard.headerTitle)}
        </span>
        {/* Demo badge */}
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: 'rgba(74,222,128,0.15)',
            color: 'var(--red-bright)',
            border: '1px solid rgba(74,222,128,0.2)',
          }}
        >
          {siteContent.home.demoDashboard.demoTag}
        </span>
      </div>

      <div className="p-5 3xl:p-8 4xl:p-10 flex flex-col gap-4 3xl:gap-6">
        {/* Stock header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium" style={{ color: 'var(--gray-mid)' }}>
              {featuredStock.name}
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className="text-2xl 3xl:text-4xl 4xl:text-5xl font-bold font-mono"
                style={{ color: 'var(--white)' }}
              >
                {featuredStock.currency} {featuredStock.price}
              </span>
              <span
                className="text-sm font-mono flex items-center gap-0.5"
                style={{
                  color: featuredStock.isUp ? 'var(--green-data)' : 'var(--red-data)',
                }}
              >
                {featuredStock.isUp
                  ? <CaretUp size={13} weight="fill" aria-hidden="true" />
                  : <CaretDown size={13} weight="fill" aria-hidden="true" />}
                <span aria-label={`${featuredStock.isUp ? 'naik' : 'turun'} ${featuredStock.change}`}>
                  {featuredStock.change}
                </span>
              </span>
            </div>
            <span className="text-xs" style={{ color: 'var(--gray-mid)' }}>
              {featuredStock.ticker}
            </span>
          </div>

          {/* Time range selector */}
          <div
            className="flex items-center gap-0.5 p-1 rounded-[var(--radius-md)]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
            role="group"
            aria-label="Rentang waktu grafik"
          >
            {timeRanges.map((r) => (
              <button
                key={r}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveRange(r)
                }}
                className="px-2.5 py-1 text-xs font-semibold rounded-[var(--radius-sm)] transition-all duration-150 min-w-[36px] min-h-[28px]"
                style={{
                  background: activeRange === r ? 'var(--red-primary)' : 'transparent',
                  color: activeRange === r ? 'white' : 'var(--gray-mid)',
                }}
                aria-pressed={activeRange === r}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <MarketChart data={chartData} />

        {/* Watchlist */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--gray-mid)' }}>
            Watchlist
          </h3>
          {watchlist.map((stock) => (
            <WatchlistRow key={stock.ticker} {...stock} />
          ))}
        </div>

        {/* Action button */}
        <button
          className="w-full py-2.5 text-sm font-semibold rounded-[var(--radius-md)] transition-all duration-200 mt-1 min-h-[44px]"
          style={{
            background: 'rgba(74,222,128,0.1)',
            border: '1px solid rgba(74,222,128,0.2)',
            color: 'var(--red-bright)',
          }}
          onClick={(e) => {
            e.stopPropagation()
            window.__nexaAnalytics?.track('hero_primary_cta_click', { source: 'dashboard' })
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(74,222,128,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(74,222,128,0.1)'
          }}
        >
          Mulai Trading (Demo)
        </button>
      </div>
    </div>
  )
}
