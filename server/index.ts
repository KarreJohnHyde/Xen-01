import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'
import { z } from 'zod'

const app = express()
const port = process.env.PORT || 3001

// ES Modules __dirname equivalent
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

// Serve React static files in production
app.use(express.static(path.join(__dirname, '../dist')))

// Initialize Database
const db = new Database('contacts.db', { verbose: console.log })

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    domain TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  domain: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

// Insert statement
const insertLead = db.prepare(`
  INSERT INTO leads (name, email, phone, domain, message)
  VALUES (@name, @email, @phone, @domain, @message)
`)

app.post('/api/contact', (req, res) => {
  try {
    const data = contactSchema.parse(req.body)
    
    const info = insertLead.run({
      name: data.name,
      email: data.email,
      phone: data.phone,
      domain: data.domain || null,
      message: data.message
    })
    
    res.status(201).json({ success: true, id: info.lastInsertRowid })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.errors })
    } else {
      console.error(error)
      res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
  }
})

// GET Leads for Admin
const getLeads = db.prepare(`SELECT * FROM leads ORDER BY created_at DESC`)
app.get('/api/leads', (req, res) => {
  try {
    const leads = getLeads.all()
    res.json({ success: true, data: leads })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
})

// Catch-all route to serve React App for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log(`API Server running at http://localhost:${port}`)
})
