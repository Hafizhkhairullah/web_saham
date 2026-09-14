/**
 * NexaBursa - Mock Market Data
 * All data is SIMULATED for demonstration purposes only.
 * This is NOT real-time market data.
 */

// ─────────────────────────────────────────
// Featured Stock
// ─────────────────────────────────────────
export const featuredStock = {
  ticker: "BBCA.JK",
  name: "Bank Central Asia",
  price: "9.250",
  priceRaw: 9250,
  change: "+1,24%",
  changeRaw: 1.24,
  isUp: true,
  currency: "Rp",
}

// ─────────────────────────────────────────
// Chart Data (30-point line chart, demo)
// ─────────────────────────────────────────
export const chartData = [
  { time: "09:00", price: 8980 },
  { time: "09:15", price: 9020 },
  { time: "09:30", price: 8990 },
  { time: "09:45", price: 9060 },
  { time: "10:00", price: 9100 },
  { time: "10:15", price: 9085 },
  { time: "10:30", price: 9130 },
  { time: "10:45", price: 9110 },
  { time: "11:00", price: 9090 },
  { time: "11:15", price: 9150 },
  { time: "11:30", price: 9180 },
  { time: "11:45", price: 9160 },
  { time: "12:00", price: 9140 },
  { time: "12:15", price: 9200 },
  { time: "12:30", price: 9185 },
  { time: "12:45", price: 9220 },
  { time: "13:00", price: 9210 },
  { time: "13:15", price: 9240 },
  { time: "13:30", price: 9225 },
  { time: "13:45", price: 9260 },
  { time: "14:00", price: 9245 },
  { time: "14:15", price: 9280 },
  { time: "14:30", price: 9265 },
  { time: "14:45", price: 9250 },
  { time: "15:00", price: 9270 },
  { time: "15:15", price: 9255 },
  { time: "15:30", price: 9280 },
  { time: "15:45", price: 9265 },
  { time: "16:00", price: 9270 },
  { time: "16:15", price: 9250 },
]

// ─────────────────────────────────────────
// Watchlist (demo)
// ─────────────────────────────────────────
export const watchlist = [
  {
    ticker: "TLKM",
    name: "Telkom Indonesia",
    price: "3.690",
    change: "+0,82%",
    isUp: true,
  },
  {
    ticker: "GOTO",
    name: "GoTo Gojek Tokopedia",
    price: "70",
    change: "-1,59%",
    isUp: false,
  },
  {
    ticker: "ASII",
    name: "Astra International",
    price: "5.275",
    change: "+0,48%",
    isUp: true,
  },
]

// ─────────────────────────────────────────
// IHSG Index (demo)
// ─────────────────────────────────────────
export const ihsgData = {
  name: "IHSG",
  value: "7.284",
  change: "+0,87%",
  isUp: true,
  sparkline: [7180, 7195, 7210, 7200, 7225, 7240, 7230, 7260, 7250, 7284],
}

// ─────────────────────────────────────────
// Market Sentiment (demo)
// ─────────────────────────────────────────
export const sentimentData = {
  label: "Sentimen Pasar Hari Ini",
  status: "Positif",
  statusColor: "green",
  description: "Mayoritas sektor menguat",
}

// ─────────────────────────────────────────
// Time Range Options
// ─────────────────────────────────────────
export const timeRanges = ["1J", "1H", "1M", "3M", "1T"]
