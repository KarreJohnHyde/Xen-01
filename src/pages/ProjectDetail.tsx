import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'
import { Project, projects, domainColorMap } from '../data/projects'
import { ArrowLeft } from 'lucide-react'
import { XenLogo } from '../components/XenLogo'

export function ProjectDetail({ user, setShowAuth }: { user: User | null, setShowAuth: (v: boolean) => void }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const p = projects.find(p => p.id === id)
    if (p) setProject(p)
  }, [id])

  if (!project) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--text-primary)', marginBottom: 24 }}>Project Not Found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    )
  }

  const handlePayment = () => {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setPaymentSuccess(true)
      setTimeout(() => {
        setShowPayment(false)
        setPaymentSuccess(false)
        alert('Payment successful! Check your email for project files and source code.')
      }, 3000)
    }, 2000)
  }

  const dc = domainColorMap[project.domain] || { color: '#C9A84C' };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '100px', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'var(--font-text)', marginBottom: 40, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={16} /> Back
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {/* Header */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <span className="tag-pill" style={{ background: `${dc.color}20`, color: dc.color, border: `1px solid ${dc.color}40` }}>{project.domain}</span>
              <span className="tag-pill" style={{ background: project.difficulty === 'Easy' ? 'rgba(34,197,94,0.1)' : project.difficulty === 'Medium' ? 'rgba(234,179,8,0.1)' : 'rgba(239,68,68,0.1)', color: project.difficulty === 'Easy' ? '#16A34A' : project.difficulty === 'Medium' ? '#CA8A04' : '#DC2626', border: 'none' }}>
                {project.difficulty}
              </span>
              {project.isPremium && <span className="premium-badge">PREMIUM</span>}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{project.title}</h1>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: 'var(--white-40)', marginTop: 12 }}>Project ID: {project.id}</div>
          </div>
          
          {/* Main content grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', marginBottom: 20 }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontFamily: 'JetBrains Mono', fontSize: 13, padding: '8px 16px', background: 'var(--white-5)', borderRadius: 6, color: 'var(--text-primary)', border: '1px solid var(--white-10)' }}>{t}</span>
                ))}
              </div>
              
              <div style={{ marginTop: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', marginBottom: 20 }}>Project Features</h3>
                <ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', fontSize: 16, lineHeight: 1.6, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li>Complete Source Code Included</li>
                  <li>Setup Documentation & Installation Guide</li>
                  <li>Base Paper / Reference IEEE Paper</li>
                  <li>1-on-1 Mentorship Session</li>
                  <li>Plagiarism Free Report Support</li>
                </ul>
              </div>
            </div>
            
            <div className="anti-gravity-card" style={{ background: 'var(--glass-base)', borderRadius: 24, padding: 32, border: '1px solid var(--border-glass)', height: 'fit-content' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--white-10)' }}>
                <div>
                  <div style={{ fontSize: 15, color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', marginBottom: 8 }}>Total Price</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--text-primary)' }}>₹{project.price.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 15, color: 'var(--text-secondary)', fontFamily: 'var(--font-text)', marginBottom: 8 }}>Delivery in</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: 18, color: 'var(--text-primary)' }}>{project.deliveryDays}</div>
                </div>
              </div>
              
              {user ? (
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 16, padding: '16px' }} onClick={() => setShowPayment(true)}>
                  Purchase Now
                </button>
              ) : (
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 16, padding: '16px' }} onClick={() => { setShowAuth(true); }}>
                  Sign in to Purchase
                </button>
              )}
              
              <a href={`https://wa.me/919515667238?text=Hi, I am interested in project ${project.id}: ${project.title}`} target="_blank" rel="noreferrer" className="anti-gravity-card fluid-link" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '16px', fontSize: 15 }}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {showPayment && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="anti-gravity-card" style={{ width: '100%', maxWidth: 450, padding: 32, background: 'var(--bg-void)', position: 'relative' }}>
            {!processing && !paymentSuccess && (
              <button onClick={() => setShowPayment(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: 20 }}>✕</button>
            )}
            
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><XenLogo size={42} label={false} /></div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: 24 }}>Checkout Securely</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{project.title}</p>
            </div>

            {paymentSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 32 }}>✓</div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 8 }}>Payment Successful</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Redirecting to your dashboard...</p>
              </div>
            ) : processing ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 40, height: 40, border: '3px solid var(--white-10)', borderTopColor: 'var(--color-gold)', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ color: 'var(--text-primary)' }}>Processing Payment...</p>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, padding: '16px', background: 'var(--white-5)', borderRadius: 12 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Total Amount</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>₹{project.price.toLocaleString()}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <button onClick={handlePayment} style={{ width: '100%', padding: 16, background: '#3395ff', color: '#fff', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    Pay via Razorpay (Mock)
                  </button>
                  <button onClick={handlePayment} style={{ width: '100%', padding: 16, background: '#635BFF', color: '#fff', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    Pay via Stripe (Mock)
                  </button>
                </div>
                <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--white-35)' }}>
                  🔒 Secured by 256-bit encryption
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
