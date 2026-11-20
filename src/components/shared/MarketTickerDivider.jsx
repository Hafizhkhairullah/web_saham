import { useTheme } from '../../context/ThemeContext'
import { motion, AnimatePresence } from 'motion/react'
import { CaretUp, CaretDown } from '@phosphor-icons/react'
import { useFinnhubTicker } from '../../hooks/useFinnhubTicker'
import { useState, useEffect } from 'react'

export default function MarketTickerDivider() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show ticker after scrolling past 80% of the viewport (approaching end of hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mengambil data dari custom hook Finnhub
  const { tickerData } = useFinnhubTicker()

  // Duplicate the array so we can loop it seamlessly
  const SCROLL_ITEMS = [...tickerData, ...tickerData, ...tickerData]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="market-ticker"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 w-full flex items-center overflow-hidden border-t shadow-lg"
      style={{
        height: '48px',
        background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 10, 10, 0.85)',
        borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        zIndex: 50
      }}
    >
      {/* Subtle glowing line at the top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--red-primary), transparent)',
          opacity: 0.3
        }}
      />

      {/* GSAP-controlled glow line — starts hidden, pulses on scroll */}
      <div
        data-gsap="ticker-glow"
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent 10%, var(--red-bright), transparent 90%)',
          opacity: 0,
          boxShadow: '0 0 12px var(--red-bright), 0 0 24px rgba(134, 239, 172, 0.3)',
        }}
      />

      <div className="flex whitespace-nowrap animate-ticker">
        {SCROLL_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8 border-r" style={{ borderColor: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)' }}>
            <span className="font-semibold text-sm" style={{ color: 'var(--white)' }}>
              {item.symbol}
            </span>
            <span className="font-mono text-sm" style={{ color: 'var(--gray-light)' }}>
              {item.value}
            </span>
            <span className="flex items-center gap-0.5 font-mono text-xs font-medium" style={{ color: item.up ? 'var(--green-data)' : 'var(--red-data)' }}>
              {item.up ? <CaretUp size={12} weight="fill" /> : <CaretDown size={12} weight="fill" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>

      {/* Fade gradients on edges */}
      <div
        className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${isLight ? '#F0F0F3' : '#050505'}, transparent)`
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${isLight ? '#F0F0F3' : '#050505'}, transparent)`
        }}
      />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
