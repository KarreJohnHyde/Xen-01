import { useReveal } from '../hooks/useReveal'
import { domainColorMap } from '../data/projects'

const testimonials = [
  { name: 'Arjun Sharma', college: 'B.Tech CSE, Hyderabad', text: 'XEN-O1 helped me build an AI project that got me placed at TCS! The IEEE paper they helped write got published too. Best decision of my final year!', domain: 'AI', initials: 'AS', color: '#A855F7' },
  { name: 'Priya Reddy', college: 'M.Tech AI, Bangalore', text: 'Best mentorship I ever received. The documentation was perfect and their viva preparation was a complete lifesaver. Highly recommend!', domain: 'DL', initials: 'PR', color: '#EC4899' },
  { name: 'Ravi Kumar', college: 'B.E. ECE, Chennai', text: 'Got my blockchain project in 10 days with full source code and a research paper. The team is super professional and responsive. Worth every rupee!', domain: 'Blockchain', initials: 'RK', color: 'var(--text-primary)' },
  { name: 'Sneha Patel', college: 'MCA, Ahmedabad', text: 'The team guided me through every step. My project won the best project award in my college! Cannot thank XEN-O1 enough!', domain: 'Web Dev', initials: 'SP', color: '#34D399' },
  { name: 'Karthik Nair', college: 'B.Tech IT, Coimbatore', text: 'The NLP project I got from XEN-O1 was industry-grade. My college professor was amazed. The source code was clean and well-documented.', domain: 'NLP', initials: 'KN', color: '#06B6D4' },
  { name: 'Ananya Singh', college: 'B.E. CSE, Pune', text: 'Excellent support throughout the project. The WhatsApp support is super fast. Got my Flutter app delivered before the deadline. 5 stars!', domain: 'App Dev', initials: 'AN', color: '#818CF8' },
]

export function Testimonials() {
  const ref = useReveal()
  const doubled = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" style={{ background: 'var(--bg-void)', padding: '96px 0', overflow: 'hidden' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', marginBottom: 40, textAlign: 'center' }}>
        <span className="section-label">TESTIMONIALS</span>
        <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
          What Students <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Say</span>
        </h2>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="testimonial-track" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => {
            const dc = domainColorMap[t.domain] || { color: 'var(--text-primary)', bg: '' }
            return (
              <div key={i} className="anti-gravity-card testimonial-card" style={{ width: 320, border: '1px solid var(--white-5)', borderRadius: 16, padding: 24, flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}33, ${t.color}66)`, border: `2px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: t.color, flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-text)', fontSize: 11, color: 'var(--text-secondary)' }}>{t.college}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>{'⭐⭐⭐⭐⭐'.split('').map((s, j) => <span key={j} style={{ fontSize: 12 }}>{s}</span>)}</div>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.text}"</p>
                <span className="tag-pill" style={{ background: `${dc.color}12`, color: dc.color, border: `1px solid ${dc.color}30`, marginTop: 12, fontSize: 10 }}>{t.domain}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
