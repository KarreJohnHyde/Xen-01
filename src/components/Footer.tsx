import { Instagram, MessageCircle, Mail } from 'lucide-react'
import { XenLogo } from './XenLogo'

export function Footer() {
  const links = ['Home', 'Projects', 'Domains', 'Services', 'Research', 'Blog', 'Contact']
  const ticker = 'XEN-O1 ✦ Empowering Innovation ✦ 500+ Students Helped ✦ 100+ Projects ✦ IEEE Certified ✦ Scopus Indexed ✦ 9+ Domains ✦ '

  return (
    <footer style={{ background: 'var(--bg-void)', color: 'white', paddingTop: 60 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <XenLogo size={42} />
        </div>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--white-40)', marginBottom: 28 }}>India's #1 Final Year Project Mentorship Platform</p>

        {/* Social */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Instagram', href: 'https://instagram.com/the.xen.o1', icon: Instagram },
            { label: 'WhatsApp', href: 'https://wa.me/919515667238', icon: MessageCircle },
            { label: 'Email', href: 'mailto:xeno1.solutions@gmail.com', icon: Mail },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--glass-hover)', border: '1px solid var(--white-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.2s', color: 'var(--text-primary)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--white-10)'; e.currentTarget.style.borderColor = 'var(--white-20)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass-hover)'; e.currentTarget.style.borderColor = 'var(--white-10)' }}>
              <s.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          {links.map(l => (
            <button key={l} aria-label={`Go to ${l}`} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--white-45)', cursor: 'pointer', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-45)')}>
              {l}
            </button>
          ))}
        </div>
        <div style={{ height: 1, background: 'var(--white-6)', marginBottom: 20 }} />
        <p style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: 'var(--white-25)' }}>© 2025 XEN-O1. All Rights Reserved. | www.xen-o1.com</p>
      </div>

      {/* Ticker */}
      <div className="news-ticker" aria-label="XEN-O1 updates">
        <div className="ticker-window">
          <div className="ticker-track">
            <span>{ticker}</span><span aria-hidden>{ticker}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
