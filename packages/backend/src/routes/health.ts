import { Router } from 'express'
import type { Router as RouterType } from 'express'

const router: RouterType = Router()
const startTime = Date.now()

router.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    platform: 'P4 — AI Talent Marketplace',
    uptime: (Date.now() - startTime) / 1000,
    timestamp: new Date().toISOString(),
  })
})

export default router
