import { useReveal } from '../hooks/useReveal'
import { Layers, GitBranch } from 'lucide-react'

export function VercelFeatures() {
  const ref = useReveal()
  return (
    <section style={{ background: 'var(--bg-void)', padding: '96px 24px', borderTop: '1px solid var(--white-8)' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">INFRASTRUCTURE</span>
          <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
            Next-Gen <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Deployments</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, marginTop: 12, fontFamily: 'var(--font-text)' }}>
            Experience seamless integration and delivery for your projects.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          
          <div className="anti-gravity-card" style={{ padding: 32, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--white-8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <Layers size={24} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Build Multiple Deployments Simultaneously</h3>
            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--font-text)' }}>Never wait for a queued build.</p>
          </div>

          <div className="anti-gravity-card" style={{ padding: 32, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--white-8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <GitBranch size={24} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Prevent Frontend-Backend Mismatches</h3>
            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--font-text)' }}>Automatically sync client and server versions to avoid deployment conflicts.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
