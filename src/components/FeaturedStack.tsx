import { ArrowRight, CheckCircle2, Layers3, Sparkles } from 'lucide-react'
import { projects } from '../data/projects'

const featuredIds = ['AI-001', 'ML-001', 'DL-001']

export function FeaturedStack() {
  const featured = featuredIds.map(id => projects.find(project => project.id === id)).filter(Boolean)

  return (
    <section className="featured-section" aria-labelledby="featured-heading">
      <div className="featured-inner">
        <div className="featured-copy">
          <span className="section-label"><Sparkles size={13} /> CURATED LEARNING PATHS</span>
          <h2 id="featured-heading">Build a project you’ll be proud to present.</h2>
          <p>Choose a proven course project, learn with mentor support, and leave with the code, documentation, and confidence to own it.</p>
          <div className="featured-points">
            {['Personal mentor guidance', 'Source code & documentation', 'Viva-ready presentation kit'].map(point => (
              <span key={point}><CheckCircle2 size={16} /> {point}</span>
            ))}
          </div>
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Browse all projects <ArrowRight size={17} />
          </button>
        </div>

        <div className="course-stack" aria-label="Featured project courses">
          <div className="stack-halo" />
          {featured.map((project, index) => project && (
            <article key={project.id} className={`stack-card stack-card-${index}`}>
              <div className="stack-image" style={{ backgroundImage: `linear-gradient(135deg, rgba(10,15,30,.2), rgba(31,18,69,.55)), url(${project.image || ''})` }}>
                <span>{project.domain}</span>
                <span className="stack-number">0{index + 1}</span>
              </div>
              <div className="stack-content">
                <div className="stack-meta"><Layers3 size={13} /> {project.difficulty} · {project.deliveryDays}</div>
                <h3>{project.title}</h3>
                <div className="stack-footer"><strong>₹{project.price.toLocaleString('en-IN')}</strong><span>Mentor-led</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
