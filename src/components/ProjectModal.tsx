import { User } from 'firebase/auth'
import { TiltCard } from './ui/TiltCard'
import { Project, domainColorMap } from '../data/projects'

export function ProjectModal({ project, onClose, user, setShowAuth }: { project: Project, onClose: () => void, user: User | null, setShowAuth: (v: boolean) => void }) {
  const dc = domainColorMap[project.domain] || { color: '#C9A84C' };
  
  return (
    <div className="auth-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(5,8,16,0.95)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={onClose}>
      <TiltCard className="anti-gravity-card" style={{ width: '100%', maxWidth: 800, maxHeight: '90vh', overflowY: 'auto', padding: 40, position: 'relative', border: `1px solid ${dc.color}40`, boxShadow: `0 0 40px ${dc.color}20`, cursor: 'default' } as any} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: 24, zIndex: 10 }}>✕</button>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Header */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="tag-pill" style={{ background: `${dc.color}20`, color: dc.color, border: `1px solid ${dc.color}40` }}>{project.domain}</span>
              <span className="tag-pill" style={{ background: project.difficulty === 'Easy' ? 'rgba(34,197,94,0.1)' : project.difficulty === 'Medium' ? 'rgba(234,179,8,0.1)' : 'rgba(239,68,68,0.1)', color: project.difficulty === 'Easy' ? '#16A34A' : project.difficulty === 'Medium' ? '#CA8A04' : '#DC2626', border: 'none' }}>
                {project.difficulty}
              </span>
              {project.isPremium && <span className="premium-badge">PREMIUM</span>}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{project.title}</h2>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--white-40)', marginTop: 8 }}>Project ID: {project.id}</div>
          </div>
          
          {/* Main content grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)', marginBottom: 16 }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontFamily: 'JetBrains Mono', fontSize: 12, padding: '6px 12px', background: 'var(--white-5)', borderRadius: 6, color: 'var(--text-primary)', border: '1px solid var(--white-10)' }}>{t}</span>
                ))}
              </div>
              
              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)', marginBottom: 16 }}>Project Features</h3>
                <ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', fontSize: 15, lineHeight: 1.6, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <li>Complete Source Code Included</li>
                  <li>Setup Documentation & Installation Guide</li>
                  <li>Base Paper / Reference IEEE Paper</li>
                  <li>1-on-1 Mentorship Session</li>
                  <li>Plagiarism Free Report Support</li>
                </ul>
              </div>
            </div>
            
            <div style={{ background: 'var(--glass-base)', borderRadius: 16, padding: 24, border: '1px solid var(--border-glass)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--white-10)' }}>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', marginBottom: 4 }}>Total Price</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--text-primary)' }}>₹{project.price.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', marginBottom: 4 }}>Delivery in</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: 'var(--text-primary)' }}>{project.deliveryDays}</div>
                </div>
              </div>
              
              {user ? (
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>
                  Proceed to Payment
                </button>
              ) : (
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }} onClick={() => { onClose(); setShowAuth(true); }}>
                  Sign in to Purchase
                </button>
              )}
              
              <a href={`https://wa.me/919515667238?text=Hi, I am interested in project ${project.id}: ${project.title}`} target="_blank" rel="noreferrer" className="anti-gravity-card fluid-link" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px' }}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  )
}
