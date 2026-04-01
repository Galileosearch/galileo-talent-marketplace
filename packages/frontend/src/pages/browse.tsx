import { useState, useMemo } from 'react'
import { TALENT_PROFILES } from '../lib/seed-data'
import type { TalentProfile } from '../lib/seed-data'
import TalentCard from '../components/talent/talent-card'
import TalentFilters from '../components/talent/talent-filters'

export default function BrowsePage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [selectedSeniority, setSelectedSeniority] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('score')

  const filteredProfiles = useMemo(() => {
    let results = TALENT_PROFILES.filter((p: TalentProfile) => {
      if (selectedRole && p.roleSlug !== selectedRole) return false
      if (selectedSeniority && p.seniority !== selectedSeniority) return false
      if (selectedLocation && p.location !== selectedLocation) return false
      return true
    })

    results = [...results].sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'rate') return b.dailyRate - a.dailyRate
      return 0
    })

    return results
  }, [selectedRole, selectedSeniority, selectedLocation, sortBy])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-2">Browse Talent</h1>
      <p className="text-muted text-sm mb-8">Explore verified Anthropic integration specialists</p>

      <TalentFilters
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        selectedSeniority={selectedSeniority}
        onSeniorityChange={setSelectedSeniority}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={filteredProfiles.length}
      />

      {filteredProfiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <TalentCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted text-sm">No specialists match your filters</p>
          <button
            onClick={() => {
              setSelectedRole(null)
              setSelectedSeniority(null)
              setSelectedLocation(null)
            }}
            className="mt-3 text-galileo-blue text-xs font-medium hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
