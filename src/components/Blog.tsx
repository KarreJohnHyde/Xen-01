import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const blogPosts = [
  { title: 'Top 10 Final Year Project Ideas for 2025', category: 'AI/ML', date: 'Jan 2025', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600', excerpt: 'Discover the most innovative and placement-winning final year project ideas across AI, ML, and emerging tech domains.' },
  { title: 'How to Write an IEEE Research Paper — Complete Guide', category: 'Research', date: 'Dec 2024', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600', excerpt: 'Step-by-step guide to writing, formatting, and submitting your IEEE research paper for maximum acceptance rate.' },
  { title: 'Blockchain Projects That Will Get You Hired', category: 'Blockchain', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600', excerpt: 'The most in-demand blockchain projects that top tech companies look for when hiring final year engineering graduates.' },
]

export function Blog() {
  const ref = useReveal()
  const [active, setActive] = useState<typeof blogPosts[number] | null>(null)
  return (
    <section id="blog" className="news-section" style={{ padding: '96px 24px' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="news-heading">
          <div><span className="section-label">NEWS FLASH</span><h2>Ideas worth <span>building.</span></h2></div>
          <p>Fresh project inspiration, research guidance, and practical career insight for final-year students.</p>
        </div>
        <div className="news-gallery">
          {blogPosts.map((post, index) => (
            <article key={post.title} className={`news-card news-card-${index}`} onClick={() => setActive(post)}>
              <img src={post.img} alt="" loading="lazy" />
              <div className="news-sheen" />
              <div className="news-content">
                <div><span>{post.category}</span><time>{post.date}</time></div>
                <h3>{post.title}</h3>
                <button aria-label={`Read ${post.title}`}>Read article <ArrowUpRight size={17} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {active && <div className="article-overlay" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
        <article className="article-dialog" onClick={event => event.stopPropagation()}>
          <button className="article-close" aria-label="Close article" onClick={() => setActive(null)}><X size={18} /></button>
          <img src={active.img} alt="" />
          <span>{active.category} · {active.date}</span>
          <h3>{active.title}</h3>
          <p>{active.excerpt} Our mentors help you translate this idea into a scoped, well-documented project with a polished demonstration.</p>
          <button className="btn-primary" onClick={() => { setActive(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Discuss this idea</button>
        </article>
      </div>}
    </section>
  )
}
