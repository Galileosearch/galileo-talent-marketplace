import GalileoNav from '../components/shared/galileo-nav'

export default function ApplyPage() {
  return (
    <div className="min-h-dvh bg-navy text-white">
      <GalileoNav />
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Join the Galileo Talent Marketplace</h1>
        <p className="text-muted mb-8">
          We're building a specialist bench of certified Anthropic integration professionals.
          Complete Anthropic's free training, pass our verification, and start receiving client engagements.
        </p>
        <p className="text-muted text-sm">Application form — coming soon</p>
      </div>
    </div>
  )
}
