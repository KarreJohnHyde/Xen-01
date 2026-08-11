import { useReveal } from '../hooks/useReveal'
import { Check, FileCheck, Search } from 'lucide-react'

export function Research() {
  const ref = useReveal()
  return (
    <section id="research" className="research-section" style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, var(--white-3), transparent 70%)', top: '-10%', right: '5%' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, var(--white-3), transparent 70%)', bottom: '0', left: '5%' }} />
      <div ref={ref} className="reveal-section section-dark" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left */}
        <div>
          <span className="section-label" style={{ color: 'var(--text-primary)' }}>IEEE / SCOPUS</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px, 3.5vw, 42px)', color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: 28 }}>
            100% Original Work —<br /><span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Research Paper Included</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {['Plagiarism-free guarantee', 'IEEE & Scopus journal support', 'Springer publication assistance', 'Full paper formatting + submission', 'Research methodology guidance', 'Turnitin report provided'].map((item, i) => (
              <div key={item} className="stagger-child" style={{ transitionDelay: `${i * 0.08}s`, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', flexShrink: 0 }}><Check size={12} strokeWidth={2.5} /></span>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--white-80)' }}>{item}</span>
              </div>
            ))}
          </div>
          <button className="anti-gravity-card fluid-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Research Paper Support →</button>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {[
              { text: 'IEEE Certified', icon: FileCheck },
              { text: 'Scopus Indexed', icon: Search },
            ].map(b => (
              <span key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--white-3)', border: '1px solid var(--white-10)', borderRadius: 8, fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-text)' }}>
                <b.icon size={14} /> {b.text}
              </span>
            ))}
          </div>
        </div>
        {/* Right: floating doc */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="doc-float anti-gravity-card" style={{ width: 280, padding: 28 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: 'var(--text-primary)', letterSpacing: 2, marginBottom: 16 }}>IEEE RESEARCH PAPER</div>
            {['Abstract', 'Introduction', 'Literature Review', 'Methodology', 'Results & Analysis', 'Conclusion'].map((sec, i) => (
              <div key={sec} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, opacity: 0.5 + i * 0.08, animation: `fadeUp 0.4s ${i * 0.15}s both` }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: 'var(--text-primary)', minWidth: 20 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--text-secondary)' }}>{sec}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--white-3)', borderRadius: 8, border: '1px solid var(--white-10)' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: 'var(--text-primary)' }}>PLAGIARISM SCORE</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--text-primary)' }}>{'<'}5%</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #research .reveal-section { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
