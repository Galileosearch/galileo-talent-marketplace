import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/browse', label: 'Browse Talent' },
    { to: '/apply', label: 'Join as Talent' },
  ]

  return (
    <header className="glass-navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-sm tracking-[0.2em] font-light">
            <span className="text-white">GALILE</span>
            <span className="galileo-o text-galileo-blue">O</span>
            <span className="text-white">SEARCH</span>
          </span>
          <span className="text-white/20 text-xs">|</span>
          <span className="text-muted text-xs">AI Talent Marketplace</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs font-medium transition ${
                location.pathname === to ? 'text-galileo-blue' : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <button className="px-4 py-2 border border-white/10 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition cursor-pointer">
            Sign In
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-2 ${
                location.pathname === to ? 'text-galileo-blue' : 'text-white/70'
              }`}
            >
              {label}
            </Link>
          ))}
          <button className="mt-2 px-4 py-2.5 border border-white/10 rounded-lg text-sm font-medium text-white/70 cursor-pointer min-h-[44px]">
            Sign In
          </button>
        </nav>
      )}
    </header>
  )
}
