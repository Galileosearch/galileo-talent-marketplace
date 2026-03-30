import GalileoNav from '../components/shared/galileo-nav'

export default function BrowsePage() {
  return (
    <div className="min-h-dvh bg-navy text-white">
      <GalileoNav />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">AI Talent Marketplace — Browse Interface</h1>
        <p className="text-muted text-sm mb-8">Explore verified Anthropic integration specialists</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Integration', 'Architecture', 'Change', 'Data', 'PM', 'Specialist'].map((cat) => (
            <button key={cat} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-medium hover:bg-galileo-blue/10 hover:border-galileo-blue/30 transition cursor-pointer">
              {cat}
            </button>
          ))}
        </div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <p className="text-muted text-sm">Talent profiles will appear here once seeded</p>
          </div>
        </div>
      </div>
    </div>
  )
}
