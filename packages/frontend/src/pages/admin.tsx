import GalileoNav from '../components/shared/galileo-nav'

export default function AdminPage() {
  return (
    <div className="min-h-dvh bg-light-bg">
      <header className="bg-navy text-white px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Talent Management</h1>
            <p className="text-sm text-muted mt-1">Review, approve, and manage marketplace talent</p>
          </div>
          <button className="px-4 py-2 bg-galileo-blue text-white text-sm font-medium rounded-lg hover:bg-galileo-blue/90 transition cursor-pointer">
            + Invite Talent
          </button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-8 py-8">
        <p className="text-muted">Admin dashboard — coming soon</p>
      </main>
    </div>
  )
}
