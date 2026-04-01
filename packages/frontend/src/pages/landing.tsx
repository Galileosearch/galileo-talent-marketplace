import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-galileo-blue text-xs font-semibold tracking-[0.15em] uppercase mb-4">
          Certified Anthropic Specialists
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Find the Right AI Specialist<br />in Minutes
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
          Explore verified talent across 10 Anthropic integration roles.
          Every candidate is Anthropic-certified, AI-assessed, and Galileo Reviewed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate('/browse')}
            className="px-8 py-3 bg-gradient-to-r from-[#06b3e8] to-[#0595c2] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(6,179,232,0.3)] transition-shadow cursor-pointer"
          >
            Browse Talent
          </button>
          <button
            onClick={() => navigate('/apply')}
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition cursor-pointer"
          >
            Join as Talent
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-galileo-blue">10</p>
            <p className="text-muted text-sm mt-1">Specialist Roles</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-success">100%</p>
            <p className="text-muted text-sm mt-1">Anthropic Certified</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">6</p>
            <p className="text-muted text-sm mt-1">Verification Steps</p>
          </div>
        </div>
      </section>

      {/* Role Categories */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Core Talent Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { role: 'Integration Engineer', desc: 'Builds Claude API integrations, MCP servers, Cowork skills', tier: 'Core' },
            { role: 'Solutions Architect', desc: 'Designs enterprise integration architecture', tier: 'Core' },
            { role: 'Change & Adoption Manager', desc: 'Drives employee adoption, runs workshops', tier: 'Core' },
            { role: 'Project/Program Manager', desc: 'Manages timelines, stakeholders, delivery', tier: 'Core' },
            { role: 'Cowork Config Specialist', desc: 'Hands-on plugin setup, end-user training', tier: 'Core' },
            { role: 'Data & Analytics Engineer', desc: 'Connects data pipelines to Claude', tier: 'Specialist' },
          ].map(({ role, desc, tier }) => (
            <div key={role} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-galileo-blue/30 transition cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-sm">{role}</h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  tier === 'Core' ? 'bg-galileo-blue/10 text-galileo-blue' : 'bg-warning/10 text-warning'
                }`}>{tier}</span>
              </div>
              <p className="text-xs text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
