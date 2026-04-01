import { useParams, Link } from 'react-router-dom'
import { getProfileById } from '../lib/seed-data'
import { getRoleBySlug } from '../lib/role-config'
import ScoreBadge from '../components/talent/score-badge'
import StatusBadge from '../components/talent/status-badge'

const VERIFICATION_STEPS = [
  'Anthropic Certification',
  'AI Skills Assessment',
  'CV & Work History',
  'Portfolio Review',
  'Reference Checks',
  'Background Check',
]

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>()
  const profile = id ? getProfileById(id) : undefined
  const role = profile ? getRoleBySlug(profile.roleSlug) : undefined

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-3">Profile Not Found</h1>
        <p className="text-muted text-sm mb-6">This talent profile doesn't exist or has been removed.</p>
        <Link to="/browse" className="text-galileo-blue text-sm font-medium hover:underline">
          Back to Browse
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Back link */}
      <Link to="/browse" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition mb-6">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Browse
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
        <div className="shrink-0 w-20 h-20 rounded-full bg-galileo-blue/20 border-2 border-galileo-blue/40 flex items-center justify-center">
          <span className="text-2xl font-bold text-galileo-blue">{profile.avatarInitials}</span>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
          <p className="text-muted text-sm mb-2">{role?.name}</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70">
              {profile.seniority}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {profile.location}
            </span>
            <span className="text-xs text-muted">{profile.yearsExperience} years experience</span>
          </div>
        </div>
      </div>

      {/* Score + Status + Rate */}
      <div className="flex flex-wrap items-center gap-6 mb-8 p-5 bg-white/[0.03] border border-white/10 rounded-xl">
        <ScoreBadge score={profile.score} size="md" />
        <div>
          <p className="text-xs text-muted mb-1">Galileo Score</p>
          <p className="text-lg font-bold">{profile.score}%</p>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block" />
        <StatusBadge status={profile.availability} />
        <div className="w-px h-10 bg-white/10 hidden sm:block" />
        <div>
          <p className="text-xs text-muted mb-1">Daily Rate</p>
          <p className="text-lg font-bold">${profile.dailyRate.toLocaleString()}</p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold mb-3">About</h2>
        <p className="text-sm text-muted leading-relaxed">{profile.bio}</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 bg-galileo-blue/10 text-galileo-blue text-xs font-medium rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* AI Insight */}
      <section className="mb-8 p-5 bg-success/5 border border-success/20 rounded-xl">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-success mb-1">AI Insight</h3>
            <p className="text-xs text-muted leading-relaxed">
              Based on AI assessment, {profile.name} demonstrates strong capabilities in{' '}
              {profile.skills.slice(0, 2).join(' and ')}. With {profile.yearsExperience} years of experience
              and a Galileo Score of {profile.score}%, this candidate is well-suited for enterprise{' '}
              {role?.domain.toLowerCase()} engagements requiring deep Anthropic ecosystem expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Verification */}
      {profile.verified && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Galileo Reviewed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {VERIFICATION_STEPS.map((step) => (
              <div key={step} className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {step}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <button className="px-6 py-2.5 bg-gradient-to-r from-[#06b3e8] to-[#0595c2] text-white text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,179,232,0.3)] transition-shadow cursor-pointer min-h-[44px]">
          Request Interview
        </button>
        <Link
          to="/browse"
          className="px-6 py-2.5 border border-white/10 text-white/70 text-sm font-medium rounded-lg hover:border-white/20 hover:text-white transition min-h-[44px] flex items-center"
        >
          Back to Browse
        </Link>
      </div>
    </div>
  )
}
