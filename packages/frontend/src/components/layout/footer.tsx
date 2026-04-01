import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-sm tracking-[0.2em] font-light">
              <span className="text-white">GALILE</span>
              <span className="text-galileo-blue">O</span>
              <span className="text-white">SEARCH</span>
            </span>
            <p className="text-xs text-muted mt-3 leading-relaxed">
              Specialist marketplace of certified Anthropic integration professionals.
              Pre-verified, pre-costed talent for Claude enterprise deployments.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-xs text-muted hover:text-white transition">Browse Talent</Link></li>
              <li><a href="https://salary.galileosearch.com.au" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-white transition">Salary Benchmarking</a></li>
              <li><a href="https://framework.galileosearch.com.au" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-white transition">Business Case Generator</a></li>
              <li><a href="https://setup.galileosearch.com.au" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-white transition">Cowork Setup Assistant</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted hover:text-white transition">About</a></li>
              <li><a href="#" className="text-xs text-muted hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-xs text-muted hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-muted hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/5">
          <p className="text-xs text-muted">Built on Anthropic's Claude. Part of the Galileo Search ecosystem.</p>
          <Link
            to="/apply"
            className="px-6 py-2.5 bg-gradient-to-r from-[#06b3e8] to-[#0595c2] text-white text-xs font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,179,232,0.3)] transition-shadow min-h-[44px] flex items-center"
          >
            Join as Talent
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-white/20 mt-6">
          &copy; {new Date().getFullYear()} Galileo Search. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
