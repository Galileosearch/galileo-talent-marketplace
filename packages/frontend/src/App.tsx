import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing'
import BrowsePage from './pages/browse'
import ProfilePage from './pages/profile'
import AdminPage from './pages/admin'
import ApplyPage from './pages/apply'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/talent/:id" element={<ProfilePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/apply" element={<ApplyPage />} />
    </Routes>
  )
}
