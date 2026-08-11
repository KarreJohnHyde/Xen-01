import { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { MessageCircle, X } from 'lucide-react'
import { ThemeToggle } from './ui/ThemeToggle'
import { XenLogo } from './XenLogo'

export function Navbar({ user, setShowAuth }: { user: User | null, setShowAuth: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Projects', 'Domains', 'Services', 'Research', 'Blog', 'Contact']

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <XenLogo size={34} />
          </div>

          {/* Center links */}
          <div style={{ display: 'none', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <button key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>{l}</button>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {user ? (
              <button className="anti-gravity-card fluid-link" style={{ padding: '8px 18px', fontSize: 13 }} onClick={() => auth.signOut()}>Log Out</button>
            ) : (
              <button className="anti-gravity-card fluid-link" style={{ padding: '8px 18px', fontSize: 13 }} onClick={() => setShowAuth(true)}>Sign In</button>
            )}
            <a href="https://wa.me/919515667238" target="_blank" rel="noreferrer" className="anti-gravity-card fluid-link desktop-only-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', color: 'var(--text-primary)', fontSize: 12 }}>
              <MessageCircle size={14} strokeWidth={2} /> WhatsApp
            </a>
            <button className="anti-gravity-card fluid-link desktop-only-btn" style={{ padding: '8px 18px', fontSize: 13 }} onClick={() => scrollTo('Contact')}>Contact Us</button>
            <ThemeToggle />
            <button aria-label="Open Mobile Menu" className="mobile-menu-btn" onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 20, height: 1.5, background: 'var(--text-primary)', borderRadius: 1, display: 'block' }} />)}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button aria-label="Close Mobile Menu" onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}><X size={28} strokeWidth={2} /></button>
        {['Home', ...links].map(l => (
          <a key={l} href="#" onClick={e => { e.preventDefault(); scrollTo(l === 'Home' ? 'hero' : l) }}>{l}</a>
        ))}
        <a href="https://wa.me/919515667238" target="_blank" rel="noreferrer" className="anti-gravity-card fluid-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MessageCircle size={18} strokeWidth={2} /> Chat on WhatsApp</a>
      </div>
    </>
  )
}
