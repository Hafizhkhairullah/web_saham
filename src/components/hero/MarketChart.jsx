import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Custom tooltip
function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="glass-card px-3 py-2 text-xs"
      style={{ borderRadius: 'var(--radius-md)' }}
    >
      <p className="font-mono" style={{ color: 'var(--white)' }}>
        Rp {payload[0].value.toLocaleString('id-ID')}
      </p>
      <p style={{ color: 'var(--gray-light)' }}>{payload[0].payload.time}</p>
    </div>
  )
}

export default function MarketChart({ data }) {
  return (
    <div
      style={{
        width: '100%',
        height: 'clamp(120px, 12vw, 220px)',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ADE80" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#4ADE80" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            tick={{ fill: '#555555', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            interval={5}
          />
          <YAxis
            domain={['auto', 'auto']}
            tick={{ fill: '#555555', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#4ADE80"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 4, fill: '#86EFAC', stroke: '#050505', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
