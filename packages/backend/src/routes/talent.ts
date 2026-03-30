import { Router } from 'express'
import type { Router as RouterType } from 'express'

const router: RouterType = Router()

// GET /api/v1/talent — List talent profiles (with filters)
router.get('/', async (_req, res) => {
  // TODO: Query Supabase talent_profiles table
  res.json({
    success: true,
    data: [],
    message: 'Talent listing endpoint — connect Supabase to populate',
  })
})

// GET /api/v1/talent/:id — Get single talent profile
router.get('/:id', async (req, res) => {
  const { id } = req.params
  // TODO: Query Supabase by ID
  res.json({
    success: true,
    data: null,
    message: `Profile ${id} — connect Supabase to populate`,
  })
})

// GET /api/v1/talent/availability — Query available talent for P2 integration
router.get('/availability', async (req, res) => {
  const { role, seniority, location } = req.query
  // TODO: Query talent_profiles + talent_availability
  res.json({
    success: true,
    data: {
      available: 0,
      avg_daily_rate: 0,
      earliest_start: null,
      profiles: [],
    },
    filters: { role, seniority, location },
  })
})

export default router
