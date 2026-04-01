import { ROLE_CONFIGS } from '../../lib/role-config'

interface TalentFiltersProps {
  selectedRole: string | null
  onRoleChange: (slug: string | null) => void
  selectedSeniority: string | null
  onSeniorityChange: (seniority: string | null) => void
  selectedLocation: string | null
  onLocationChange: (location: string | null) => void
  sortBy: string
  onSortChange: (sort: string) => void
  totalCount: number
}

const LOCATIONS = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Canberra', 'Adelaide']

export default function TalentFilters({
  selectedRole,
  onRoleChange,
  selectedSeniority,
  onSeniorityChange,
  selectedLocation,
  onLocationChange,
  sortBy,
  onSortChange,
  totalCount,
}: TalentFiltersProps) {
  return (
    <div className="mb-8">
      {/* Role pills */}
      <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter by role">
        <button
          onClick={() => onRoleChange(null)}
          aria-pressed={selectedRole === null}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
            selectedRole === null
              ? 'bg-galileo-blue/20 text-galileo-blue border border-galileo-blue/40'
              : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
          }`}
        >
          All Roles
        </button>
        {ROLE_CONFIGS.map((role) => (
          <button
            key={role.id}
            onClick={() => onRoleChange(selectedRole === role.id ? null : role.id)}
            aria-pressed={selectedRole === role.id}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
              selectedRole === role.id
                ? 'border text-white'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
            }`}
            style={
              selectedRole === role.id
                ? { backgroundColor: `${role.color}20`, borderColor: `${role.color}66`, color: role.color }
                : undefined
            }
          >
            {role.domain}
          </button>
        ))}
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-muted mr-auto">
          <span className="font-semibold text-white">{totalCount}</span> specialist{totalCount !== 1 ? 's' : ''} found
        </p>

        <select
          value={selectedSeniority ?? ''}
          onChange={(e) => onSeniorityChange(e.target.value || null)}
          className="bg-white/5 border border-white/10 rounded-lg text-white text-xs px-3 py-2 appearance-none pr-8 cursor-pointer focus:outline-none focus:border-galileo-blue/50"
          aria-label="Filter by seniority"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '14px' }}
        >
          <option value="">Seniority</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
          <option value="Lead">Lead</option>
        </select>

        <select
          value={selectedLocation ?? ''}
          onChange={(e) => onLocationChange(e.target.value || null)}
          className="bg-white/5 border border-white/10 rounded-lg text-white text-xs px-3 py-2 appearance-none pr-8 cursor-pointer focus:outline-none focus:border-galileo-blue/50"
          aria-label="Filter by location"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '14px' }}
        >
          <option value="">Location</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg text-white text-xs px-3 py-2 appearance-none pr-8 cursor-pointer focus:outline-none focus:border-galileo-blue/50"
          aria-label="Sort by"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '14px' }}
        >
          <option value="score">Galileo Score</option>
          <option value="name">Name A-Z</option>
          <option value="rate">Daily Rate</option>
        </select>
      </div>
    </div>
  )
}
