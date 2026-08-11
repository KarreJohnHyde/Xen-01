import { useState } from 'react'
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from 'firebase/auth'

export function AuthModal({ onClose, onLogin }: { onClose: () => void, onLogin: (u: User) => void }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr('')
    setLoading(true)
    try {
      if (isLogin) {
        const cred = await signInWithEmailAndPassword(auth, email, password)
        onLogin(cred.user)
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        onLogin(cred.user)
      }
      onClose()
    } catch (e: any) {
      const msg = e.message.replace('Firebase: ', '').replace(/\(auth.*\)\./, '')
      setErr(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="anti-gravity-card" style={{ width: '100%', maxWidth: 400, padding: 32, position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: 20 }}>✕</button>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: 28, marginBottom: 8, fontWeight: 800 }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24, fontFamily: 'var(--font-text)' }}>{isLogin ? 'Log in to access your premium projects.' : 'Sign up to start your journey.'}</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input className="form-input" type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="form-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          {err && <div style={{ color: '#ef4444', fontSize: 13, fontFamily: 'var(--font-text)' }}>{err}</div>}
          <button className="anti-gravity-card fluid-link" type="submit" disabled={loading} style={{ justifyContent: 'center', padding: '12px', marginTop: 8, opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Authenticating...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span style={{ color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 600 }} onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign Up' : 'Log In'}</span>
        </div>
      </div>
    </div>
  )
}
