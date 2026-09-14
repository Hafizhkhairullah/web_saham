import { useState, useEffect } from 'react'
import { chartData as fallbackChartData } from '../data/marketMockData'

export function useFinnhubChart(symbol, timeRange) {
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchChartData() {
      const apiKey = import.meta.env.VITE_FINNHUB_KEY
      
      if (!apiKey || !symbol) {
        setChartData(fallbackChartData)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        
        // Calculate from and to timestamps based on timeRange
        // timeRange: "1J" (1 Hour), "1H" (1 Day), "1M" (1 Week/Month), "3M" (3 Months), "1T" (1 Year)
        const to = Math.floor(Date.now() / 1000)
        let from = to
        let resolution = '1'

        switch(timeRange) {
          case '1J': // 1 Jam
            from = to - 3600 * 24 // Give a day to ensure we have data if market is closed
            resolution = '5' 
            break
          case '1H': // 1 Hari
            from = to - 86400 * 3 // 3 days to account for weekends
            resolution = '15'
            break
          case '1M': // 1 Minggu / 1 Month
            from = to - 30 * 86400
            resolution = 'D'
            break
          case '3M': // 3 Bulan
            from = to - 90 * 86400
            resolution = 'D'
            break
          case '1T': // 1 Tahun
            from = to - 365 * 86400
            resolution = 'W'
            break
          default:
            from = to - 86400 * 3
            resolution = '15'
        }

        const response = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch chart data')
        }

        const data = await response.json()

        if (data.s === 'ok' && data.t && data.t.length > 0) {
          const formattedData = data.t.map((timestamp, index) => {
            const date = new Date(timestamp * 1000)
            
            let timeStr = ''
            if (['1J', '1H'].includes(timeRange)) {
              timeStr = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            } else {
              timeStr = date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })
            }

            return {
              time: timeStr,
              price: data.c[index]
            }
          })
          
          // If we fetched more data to account for weekends, slice the latest points for better view
          // e.g. for 1 Jam, maybe just take the last 30 data points
          let displayData = formattedData
          if (timeRange === '1J') {
             displayData = formattedData.slice(-30)
          } else if (timeRange === '1H') {
             displayData = formattedData.slice(-50)
          }
          
          setChartData(displayData)
        } else {
          // If API returns no_data, fallback to mock data
          setChartData(fallbackChartData)
        }
      } catch (err) {
        console.error('Finnhub Chart Error:', err)
        setError(err.message)
        setChartData(fallbackChartData)
      } finally {
        setLoading(false)
      }
    }

    fetchChartData()
  }, [symbol, timeRange])

  return { chartData, loading, error }
}
