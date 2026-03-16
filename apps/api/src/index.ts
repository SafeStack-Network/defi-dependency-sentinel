import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {
  return c.json({ message: 'Sentinel Protocol Management API' })
})

// Drips SDK Operations
app.post('/api/drips/split', async (c) => {
  // Stub for Drips SDK logic to unlock conditional funds for maintainers
  return c.json({ success: true, message: 'Security Split executed via SDK' })
})

// Dashboard Data
app.get('/api/inventory', (c) => {
  // Stub for Risk Inventory data
  return c.json({
    risks: [
      { id: 'OSV-2026-001', package: 'alloy-rs', severity: 'HIGH', resolved: false },
      { id: 'GHSA-xxxx-yyyy', package: 'tokio', severity: 'MEDIUM', resolved: true }
    ]
  })
})

const port = 3001
console.log(`Management API is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
