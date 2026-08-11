import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Phone, Mail, Instagram, Globe, MessageCircle, Send } from 'lucide-react'

export function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', domain: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', domain: '', message: '' })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Contact form error:", err)
      alert("Failed to send message. Please try again.")
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-void)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, var(--white-3), transparent 70%)', top: '10%', left: '-5%' }} />
      <div className="orb" style={{ width: 350, height: 350, background: 'radial-gradient(circle, var(--white-3), transparent 70%)', bottom: '0', right: '5%' }} />
      <div className="line-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div ref={ref} className="reveal-section" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label" style={{ color: 'var(--text-primary)' }}>GET IN TOUCH</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
            Start Your <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Journey</span>
          </h2>
          <p style={{ color: 'var(--white-50)', fontSize: 15, marginTop: 10, fontFamily: 'var(--font-text)' }}>Get a free consultation within 24 hours</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'start' }}>
          {/* Info */}
          <div className="anti-gravity-card" style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', marginBottom: 4 }}>Contact Info</h3>
            {[
              { icon: Phone, label: '+91 95156 67238', href: 'tel:+919515667238' },
              { icon: Mail, label: 'xeno1.solutions@gmail.com', href: 'mailto:xeno1.solutions@gmail.com' },
              { icon: Instagram, label: '@the.xen.o1', href: 'https://instagram.com/the.xen.o1' },
              { icon: Globe, label: 'www.xen-o1.com', href: 'https://xen-o1.com' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', transition: 'opacity 0.2s', color: 'var(--text-primary)' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                <span style={{ display: 'flex' }}><c.icon size={18} strokeWidth={1.5} /></span>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--white-70)' }}>{c.label}</span>
              </a>
            ))}
            <a href="https://wa.me/919515667238" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 10, color: '#22C55E', fontWeight: 600, fontSize: 14, textDecoration: 'none', fontFamily: 'var(--font-text)', marginTop: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.2)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.12)')}>
              <MessageCircle size={18} strokeWidth={1.5} /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="anti-gravity-card" style={{ padding: 32 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input aria-label="Your Name" className="form-input" placeholder="Your Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                <input aria-label="Email Address" className="form-input" type="email" placeholder="Email Address" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
              </div>
              <input aria-label="Phone Number" className="form-input" type="tel" minLength={10} placeholder="Phone Number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
              <select aria-label="Select Domain" className="form-input" value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))}>
                <option value="">Select Domain / Project Area</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
                <option>Deep Learning</option>
                <option>Data Science</option>
                <option>NLP</option>
                <option>Computer Vision</option>
                <option>Blockchain</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Other</option>
              </select>
              <textarea aria-label="Project Requirements Message" className="form-input" rows={4} minLength={10} placeholder="Tell us about your project requirements..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required style={{ resize: 'vertical', fontFamily: 'var(--font-text)' }} />
              <button type="submit" className="anti-gravity-card fluid-link" style={{ fontSize: 15, padding: '14px 28px', justifyContent: 'center', display: 'flex', gap: 8, alignItems: 'center' }}>
                Send Message <Send size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #contact .reveal-section > div:last-child { grid-template-columns: 1fr !important; } }`}</style>

      {success && (
        <div className="success-overlay" onClick={() => setSuccess(false)}>
          <div className="checkmark-circle">✓</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--text-primary)', marginTop: 20 }}>Message Sent!</h3>
          <p style={{ fontFamily: 'var(--font-text)', color: 'var(--white-60)', marginTop: 8, textAlign: 'center', maxWidth: 300 }}>We'll contact you within 24 hours. Click anywhere to close.</p>
        </div>
      )}
    </section>
  )
}
