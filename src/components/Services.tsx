import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { GraduationCap, FileText, ClipboardList, Code, Mic, Rocket, Check, RotateCcw } from 'lucide-react'

const serviceData = [
  { icon: GraduationCap, title: 'Project Mentorship', teaser: 'End-to-end from idea to deployment', desc: 'Complete guidance through your entire final year project journey.', points: ['Domain selection help', 'Architecture design', 'Coding mentorship', 'Testing & debugging'] },
  { icon: FileText, title: 'IEEE Research Paper', teaser: 'We write, format & submit', desc: 'Professional research paper writing with IEEE/Scopus formatting.', points: ['Literature review', 'Methodology chapter', 'IEEE/Scopus formatting', 'Submission guidance'] },
  { icon: ClipboardList, title: 'Full Documentation', teaser: '12-chapter SRS report + PPT', desc: 'Comprehensive 80+ page documentation covering all aspects.', points: ['System design', 'ER diagrams', 'Use case diagrams', '80+ pages report'] },
  { icon: Code, title: 'Source Code Delivery', teaser: 'Clean, commented, working code', desc: 'Production-ready code with complete setup guide and walkthrough.', points: ['Full source code', 'Setup guide', '.env config', 'Video walkthrough'] },
  { icon: Mic, title: 'Viva Preparation', teaser: 'Ace your final exam', desc: 'Comprehensive preparation for your viva voce examination.', points: ['50 likely viva questions', 'Mock Q&A session', 'PPT coaching', 'Demo practice'] },
  { icon: Rocket, title: 'Career Support', teaser: 'Land your dream job', desc: 'Placement-focused support to kickstart your tech career.', points: ['Resume review', 'LinkedIn profile', 'GitHub portfolio setup', 'Placement project tips'] },
]

export function Services() {
  const ref = useReveal()
  const [flipped, setFlipped] = useState<string | null>(null)
  return (
    <section id="services" style={{ background: 'var(--bg-void)', padding: '96px 24px' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">SERVICES</span>
          <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>What We <span>Offer</span></h2>
          <p className="service-hint">Hover or tap a card to see what’s included.</p>
        </div>
        <div className="service-grid">
          {serviceData.map(s => {
            const Icon = s.icon
            const isFlipped = flipped === s.title
            return (
              <article key={s.title} className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(isFlipped ? null : s.title)}>
                <div className="flip-card-inner">
                  <div className="flip-card-face flip-card-front">
                    <div className="service-icon"><Icon size={36} strokeWidth={1.5} /></div>
                    <span className="service-index">0{serviceData.indexOf(s) + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.teaser}</p>
                    <span className="flip-prompt">Explore <RotateCcw size={14} /></span>
                  </div>
                  <div className="flip-card-face flip-card-back">
                    <span className="service-index">INCLUDED</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul>{s.points.map(point => <li key={point}><Check size={14} /> {point}</li>)}</ul>
                    <a href="https://wa.me/919515667238" target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>Talk to a mentor →</a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
