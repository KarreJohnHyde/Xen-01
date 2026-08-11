import { useReveal } from '../hooks/useReveal'
import { Counter } from './ui/Counter'
import { TiltCard } from './ui/TiltCard'

import { Trophy, Zap, BookOpen, Star, Users, ShieldCheck, Clock, Headphones, IndianRupee, GraduationCap } from 'lucide-react'

export function Stats() {
  const ref = useReveal()
  const stats = [
    { label: 'Students Helped', end: 500, suffix: '+', icon: Trophy },
    { label: 'Projects Delivered', end: 100, suffix: '+', icon: Zap },
    { label: 'Domains', end: 9, suffix: '+', icon: BookOpen },
    { label: 'Rating', end: 4.9, suffix: '/5', icon: Star },
  ]
  const reasons = [
    { icon: Users, title: 'Expert Mentors', desc: 'IIT/NIT alumni & industry professionals guiding every step' },
    { icon: ShieldCheck, title: '100% Original', desc: 'Zero copied projects, full plagiarism reports included' },
    { icon: Clock, title: 'Fast Delivery', desc: 'Projects ready in 7–15 days, always on schedule' },
    { icon: Headphones, title: '24/7 Support', desc: 'WhatsApp & call support always available for your queries' },
    { icon: IndianRupee, title: 'Affordable Price', desc: 'Best price guaranteed — no hidden charges' },
    { icon: GraduationCap, title: 'Placement-Ready', desc: 'Projects that make interviewers say WOW at top companies' },
  ]

  return (
    <section id="why" style={{ background: 'var(--bg-void)', padding: '96px 24px' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">WHY XEN-O1</span>
          <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
            Why <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Choose Us</span>
          </h2>
        </div>

        {/* Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          {stats.map(s => (
            <div key={s.label} className="anti-gravity-card stat-card" style={{ padding: 24, textAlign: 'center' }}>
              <div style={{ color: 'var(--text-primary)', marginBottom: 8 }}><s.icon size={28} strokeWidth={1.5} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: 'var(--text-primary)', lineHeight: 1 }}>
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--text-secondary)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {reasons.map(r => (
            <TiltCard key={r.title} className="anti-gravity-card reason-card" style={{ padding: 24 }}>
              <div style={{ color: 'var(--text-primary)', marginBottom: 12 }}><r.icon size={28} strokeWidth={1.5} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', marginBottom: 6 }}>{r.title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{r.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
