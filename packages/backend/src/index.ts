import express from 'express'
import cors from 'cors'
import talentRoutes from './routes/talent.js'
import healthRoute from './routes/health.js'

const app = express()
const PORT = process.env.PORT || 3004

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5175',
  credentials: true,
}))
app.use(express.json({ limit: '10mb' }))

// Routes
app.use('/health', healthRoute)
app.use('/api/v1/talent', talentRoutes)

app.listen(PORT, () => {
  console.log(`[P4 Backend] Running on port ${PORT}`)
})
