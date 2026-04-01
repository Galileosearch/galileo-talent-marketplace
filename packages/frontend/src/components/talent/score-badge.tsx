interface ScoreBadgeProps {
  score: number
  size?: 'sm' | 'md'
}

export default function ScoreBadge({ score, size = 'sm' }: ScoreBadgeProps) {
  const dimensions = size === 'sm' ? 48 : 80
  const strokeWidth = size === 'sm' ? 3 : 4
  const radius = (dimensions - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)
  const fontSize = size === 'sm' ? 'text-xs' : 'text-lg'

  return (
    <div
      className="relative inline-flex items-center justify-center"
      aria-label={`Assessment score ${score} percent`}
    >
      <svg width={dimensions} height={dimensions} className="-rotate-90">
        <circle
          cx={dimensions / 2}
          cy={dimensions / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={dimensions / 2}
          cy={dimensions / 2}
          r={radius}
          fill="none"
          stroke="#06b3e8"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className={`absolute ${fontSize} font-bold text-white`}>
        {score}%
      </span>
    </div>
  )
}
