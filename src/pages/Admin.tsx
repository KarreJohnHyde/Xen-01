import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  domain: string | null
  message: string
  created_at: string
}

export function Admin({ user, setShowAuth }: { user: User | null, setShowAuth: (v: boolean) => void }) {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // If not logged in, prompt auth
    if (!user) {
      setShowAuth(true)
      return
    }
    
    // In a real app, pass the auth token to the backend.
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLeads(data.data)
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [user, setShowAuth])

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Please log in to access the Admin Dashboard.</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 60, maxWidth: 1280, margin: '0 auto', padding: '100px 24px 60px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 24 }}>Lead Submissions</h1>
      
      {loading ? (
        <p style={{ color: 'var(--text-secondary)' }}>Loading leads...</p>
      ) : leads.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)' }}>No leads found.</p>
      ) : (
        <div style={{ overflowX: 'auto', background: 'var(--glass-base)', border: '1px solid var(--white-10)', borderRadius: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-text)', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'var(--white-5)', borderBottom: '1px solid var(--white-10)' }}>
                <th style={{ padding: 16, color: 'var(--text-secondary)' }}>Date</th>
                <th style={{ padding: 16, color: 'var(--text-secondary)' }}>Name</th>
                <th style={{ padding: 16, color: 'var(--text-secondary)' }}>Contact</th>
                <th style={{ padding: 16, color: 'var(--text-secondary)' }}>Domain</th>
                <th style={{ padding: 16, color: 'var(--text-secondary)' }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} style={{ borderBottom: '1px solid var(--white-5)' }}>
                  <td style={{ padding: 16, color: 'var(--text-secondary)' }}>{new Date(lead.created_at).toLocaleDateString()}</td>
                  <td style={{ padding: 16, color: 'var(--text-primary)', fontWeight: 500 }}>{lead.name}</td>
                  <td style={{ padding: 16 }}>
                    <div style={{ color: 'var(--text-primary)' }}>{lead.email}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{lead.phone}</div>
                  </td>
                  <td style={{ padding: 16 }}>
                    <span style={{ padding: '4px 10px', background: 'var(--white-5)', borderRadius: 99, fontSize: 12, color: 'var(--color-gold)' }}>
                      {lead.domain || 'N/A'}
                    </span>
                  </td>
                  <td style={{ padding: 16, color: 'var(--text-secondary)', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={lead.message}>
                    {lead.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
