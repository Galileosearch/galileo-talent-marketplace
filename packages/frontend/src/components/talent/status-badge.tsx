interface StatusBadgeProps {
  status: 'Active' | 'Available Soon' | 'Engaged'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    Active: 'bg-success/10 text-success',
    'Available Soon': 'bg-warning/10 text-warning',
    Engaged: 'bg-galileo-blue/10 text-galileo-blue',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}
      aria-label={`Availability: ${status}`}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" fill="currentColor" />
      </svg>
      {status}
    </span>
  )
}
