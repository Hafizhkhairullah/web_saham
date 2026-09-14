import { useState, useEffect } from 'react'

const FALLBACK_DATA = [
  { symbol: 'BBCA', value: '9.250', change: '+1,24%', up: true },
  { symbol: 'BBRI', value: '4.850', change: '-0,51%', up: false },
  { symbol: 'TLKM', value: '3.690', change: '+0,82%', up: true },
  { symbol: 'BMRI', value: '7.150', change: '+0,50%', up: true },
  { symbol: 'ASII', value: '5.275', change: '+0,48%', up: true },
  { symbol: 'GOTO', value: '70', change: '-1,59%', up: false },
  { symbol: 'AAPL', value: '225.00', change: '+1,12%', up: true },
  { symbol: 'TSLA', value: '180.50', change: '-2,30%', up: false },
]

// Array of symbols to fetch from Finnhub.
// Catatan: Finnhub API versi gratis HANYA mengizinkan saham pasar Amerika Serikat (US).
// Saham IHSG/Indonesia (.JK) akan mengembalikan error "You don't have access to this resource."
const SYMBOLS = ['NFLX', 'AAPL', 'MSFT', 'TSLA', 'NVDA', 'GOOGL', 'AMZN']

export function useFinnhubTicker() {
  const [tickerData, setTickerData] = useState(FALLBACK_DATA)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMarketData() {
      const apiKey = import.meta.env.VITE_FINNHUB_KEY

      if (!apiKey) {
        setTickerData(FALLBACK_DATA)
        setLoading(false)
        return
      }

      try {
        setLoading(true)

        // Fetch quotes for all symbols concurrently
        const fetchPromises = SYMBOLS.map(async (symbol) => {
          const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)

          if (!response.ok) {
            throw new Error(`Failed to fetch ${symbol}`)
          }

          const data = await response.json()

          // Finnhub API Response format:
          // c: Current price
          // d: Change
          // dp: Percent change

          // If the API returns 0 or null for current price, the symbol might be invalid or data unavailable
          if (!data.c) {
            return null
          }

          const price = parseFloat(data.c)
          const changeVal = parseFloat(data.d || 0)
          const changePercent = parseFloat(data.dp || 0)

          const isUp = changeVal >= 0

          // Format number
          const formattedPrice = new Intl.NumberFormat('id-ID').format(price)
          const formattedChange = `${isUp ? '+' : ''}${changePercent.toFixed(2).replace('.', ',')}%`

          // Clean up the symbol for display (e.g., 'BBCA.JK' -> 'BBCA')
          const displaySymbol = symbol.replace('.JK', '')

          return {
            symbol: displaySymbol,
            value: formattedPrice,
            change: formattedChange,
            up: isUp
          }
        })

        const results = await Promise.all(fetchPromises)
        // Filter out any failed requests (nulls)
        const validResults = results.filter(Boolean)

        if (validResults.length > 0) {
          setTickerData(validResults)
        } else {
          setTickerData(FALLBACK_DATA)
        }

      } catch (err) {
        console.error('Finnhub API Error:', err)
        setError(err.message)
        // Fallback to dummy data so UI doesn't break
        setTickerData(FALLBACK_DATA)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()

    // Finnhub free tier limits to 60 API calls per minute.
    // We are making 7 calls per fetch. Fetching every 60 seconds is extremely safe.
    const interval = setInterval(fetchMarketData, 60000)
    return () => clearInterval(interval)
  }, [])

  return { tickerData, loading, error }
}
