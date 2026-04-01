import { Link } from 'react-router-dom'
import type { TalentProfile } from '../../lib/seed-data'
import { getRoleBySlug } from '../../lib/role-config'
import ScoreBadge from './score-badge'
import StatusBadge from './status-badge'

interface TalentCardProps {
  profile: TalentProfile
}

export default function TalentCard({ profile }: TalentCardProps) {
  const role = getRoleBySlug(profile.roleSlug)

  return (
    <Link to={`/talent/${profile.id}`} className="block group">
      <article
        role="article"
        aria-label={`${profile.name}, ${role?.name ?? profile.roleSlug}`}
        className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-galileo-blue/30 transition-all duration-200 h-full flex flex-col"
      >
        {/* Top: Avatar + Info + Score */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="shrink-0 w-12 h-12 rounded-full bg-galileo-blue/20 border-2 border-galileo-blue/40 flex items-center justify-center">
            <span className="text-sm font-bold text-galileo-blue">{profile.avatarInitials}</span>
          </div>

          {/* Name + Role */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-white truncate group-hover:text-galileo-blue transition-colors">
              {profile.name}
            </h3>
            <p className="text-xs text-muted truncate">{role?.name}</p>
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white/70">
              {profile.seniority}
            </span>
          </div>

          {/* Score */}
          <div className="shrink-0">
            <ScoreBadge score={profile.score} />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-muted mb-4">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {profile.location}
        </div>

        {/* Status + Verified */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          <StatusBadge status={profile.availability} />
          {profile.verified && (
            <span className="inline-flex items-center gap-1 text-[10px] text-success font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              Galileo Reviewed
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="w-full py-2.5 bg-gradient-to-r from-[#06b3e8] to-[#0595c2] text-white text-xs font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,179,232,0.3)] transition-shadow cursor-pointer min-h-[44px]"
        >
          Request Interview
        </button>
      </article>
    </Link>
  )
}
