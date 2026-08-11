import { useReveal } from '../hooks/useReveal'
import { TiltCard } from './ui/TiltCard'
import { domains } from '../data/projects'
import { useNavigate } from 'react-router-dom'

export function Domains() {
  const ref = useReveal()
  const navigate = useNavigate()
  return (
    <section id="domains" style={{ background: 'var(--bg-void)', padding: '96px 24px' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">EXPLORE</span>
          <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
            Explore by <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Domain</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, marginTop: 12, fontFamily: 'var(--font-text)' }}>9 cutting-edge technology domains — all with full mentorship</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {domains.map(d => (
            <TiltCard key={d.name} className={`domain-card ${d.cls}`} style={{ border: `1px solid ${d.border}`, '--domain-color': d.color } as React.CSSProperties}>
              <div className="card-top" style={{ height: 160, overflow: 'hidden' }}>
                <img src={d.image} alt={d.label} className="card-img" loading="lazy" width="300" height="160" onError={event => { event.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600'; event.currentTarget.onerror = null; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '16px 20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span className="tag-pill" style={{ background: d.bg, color: d.color, border: `1px solid ${d.border}` }}>{d.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#9CA3AF' }}>{d.count} Projects</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 4 }}>{d.label}</h3>
                <p style={{ fontSize: 12, color: '#6B7280', fontFamily: 'var(--font-text)', marginBottom: 12 }}>{d.desc}</p>
                <button type="button" style={{ display: 'flex', alignItems: 'center', gap: 4, color: d.color, fontWeight: 600, fontSize: 12, fontFamily: 'var(--font-text)', cursor: 'pointer', padding: 0, border: 'none', background: 'none' }}
                  onClick={() => { navigate(`/?domain=${encodeURIComponent(d.name)}`); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 50) }}>
                  View Projects <span style={{ transition: 'transform 0.2s' }}>→</span>
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
