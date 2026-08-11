import { useState, useMemo, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { TiltCard } from './ui/TiltCard'
import WebXRViewer from './WebXRViewer'
import { projects, domainColorMap } from '../data/projects'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CATEGORIES = {
  'AI & Data Science': ['AI', 'ML', 'DL', 'DS', 'NLP', 'CV'],
  'Development': ['Web Dev', 'App Dev'],
  'Web3 & Core': ['Blockchain']
}

const PRICE_RANGES = [
  { label: 'Under ₹5k', min: 0, max: 4999 },
  { label: '₹5k–₹7k', min: 5000, max: 7000 },
  { label: '₹7k+', min: 7001, max: 100000 }
]

export function Projects() {
  const [active3D, setActive3D] = useState<string | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [visible, setVisible] = useState(12)

  const searchQ = searchParams.get('q') || ''
  const selectedDomains = searchParams.get('domains')?.split(',').filter(Boolean) || []
  const selectedDiffs = searchParams.get('diffs')?.split(',').filter(Boolean) || []
  const selectedPrices = searchParams.get('prices')?.split(',').filter(Boolean) || []
  const isPremiumOnly = searchParams.get('premium') === 'true'

  const updateParams = (updates: Record<string, string | null>) => {
    const next = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([k, v]) => {
      if (v === null || v === '') next.delete(k)
      else next.set(k, v)
    })
    setSearchParams(next)
    setVisible(12)
  }

  const toggleArrayParam = (key: string, current: string[], val: string) => {
    const next = current.includes(val) ? current.filter(x => x !== val) : [...current, val]
    updateParams({ [key]: next.length ? next.join(',') : null })
  }

  const removeFilter = (key: 'domains' | 'diffs' | 'prices' | 'premium' | 'q', val?: string) => {
    if (key === 'q') updateParams({ q: null })
    else if (key === 'premium') updateParams({ premium: null })
    else if (val) {
      const current = key === 'domains' ? selectedDomains : key === 'diffs' ? selectedDiffs : selectedPrices
      updateParams({ [key]: current.filter(x => x !== val).join(',') || null })
    }
  }

  const clearAll = () => setSearchParams(new URLSearchParams())

  const filtered = useMemo(() => {
    return projects.filter(p => {
      if (searchQ && !p.title.toLowerCase().includes(searchQ.toLowerCase()) && !p.tech.some(t => t.toLowerCase().includes(searchQ.toLowerCase()))) return false
      if (selectedDomains.length > 0 && !selectedDomains.includes(p.domain)) return false
      if (selectedDiffs.length > 0 && !selectedDiffs.includes(p.difficulty)) return false
      if (isPremiumOnly && !p.isPremium) return false
      if (selectedPrices.length > 0) {
        const matchesPrice = selectedPrices.some(priceLabel => {
          const range = PRICE_RANGES.find(r => r.label === priceLabel)
          return range ? (p.price >= range.min && p.price <= range.max) : false
        })
        if (!matchesPrice) return false
      }
      return true
    })
  }, [searchQ, selectedDomains, selectedDiffs, selectedPrices, isPremiumOnly])

  const ref = useReveal()
  const navigate = useNavigate()

  // Prevent scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileFilterOpen])

  return (
    <section id="projects" style={{ padding: '80px 20px', background: 'var(--bg-void)', position: 'relative' }}>
      <div ref={ref} className="reveal-section" style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">CATALOG</span>
          <h2 className="glitch" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
            Project <span style={{ color: 'var(--text-primary)', fontVariationSettings: "'wght' var(--w-extrabold)" }}>Catalog</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, marginTop: 12, fontFamily: 'var(--font-text)' }}>Find the perfect project for your final year submission</p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="mobile-filter-toggle" style={{ marginBottom: 20 }}>
          <button className="anti-gravity-card fluid-link" onClick={() => setIsMobileFilterOpen(true)} style={{ width: '100%', padding: '12px', fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, background: 'var(--white-2)', border: '1px solid var(--white-10)', color: 'var(--text-primary)', borderRadius: 12 }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            Filter & Sort Projects
          </button>
        </div>

        <div className="projects-layout">
          {/* Sidebar */}
          <aside className={`filter-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
            <div className="filter-sidebar-header">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)' }}>Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 8 }}>
                 <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="filter-sidebar-content">
              {/* Search */}
              <div className="filter-group">
                <input 
                  type="text" 
                  placeholder="Search projects, tech..." 
                  value={searchQ}
                  onChange={e => updateParams({ q: e.target.value })}
                  className="search-input"
                />
              </div>

              {/* Categories / Domains */}
              <div className="filter-group">
                <div className="filter-title">CATEGORIES</div>
                {Object.entries(CATEGORIES).map(([cat, domains]) => (
                  <div key={cat} style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>{cat.toUpperCase()}</div>
                    {domains.map(dom => (
                      <label key={dom} className="checkbox-label">
                        <input 
                          type="checkbox" 
                          checked={selectedDomains.includes(dom)} 
                          onChange={() => toggleArrayParam('domains', selectedDomains, dom)} 
                        />
                        <span className="checkbox-custom"></span>
                        {dom}
                      </label>
                    ))}
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="filter-group">
                <div className="filter-title">PRICE RANGE</div>
                {PRICE_RANGES.map(range => (
                  <label key={range.label} className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedPrices.includes(range.label)} 
                      onChange={() => toggleArrayParam('prices', selectedPrices, range.label)} 
                    />
                    <span className="checkbox-custom"></span>
                    {range.label}
                  </label>
                ))}
              </div>

              {/* Difficulty */}
              <div className="filter-group">
                <div className="filter-title">DIFFICULTY</div>
                {['Easy', 'Medium', 'Advanced'].map(diff => (
                  <label key={diff} className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedDiffs.includes(diff)} 
                      onChange={() => toggleArrayParam('diffs', selectedDiffs, diff)} 
                    />
                    <span className="checkbox-custom"></span>
                    {diff}
                  </label>
                ))}
              </div>

              {/* Premium */}
              <div className="filter-group" style={{ borderBottom: 'none' }}>
                <label className="checkbox-label premium-toggle">
                  <input 
                    type="checkbox" 
                    checked={isPremiumOnly} 
                    onChange={e => updateParams({ premium: e.target.checked ? 'true' : null })} 
                  />
                  <span className="checkbox-custom"></span>
                  <span style={{ color: '#F59E0B', fontWeight: 600 }}>Premium Projects Only</span>
                </label>
              </div>
            </div>
            
            {/* Mobile Footer */}
            <div className="filter-sidebar-footer">
              <button className="clear-btn" onClick={clearAll}>Clear All</button>
              <button className="apply-btn" onClick={() => setIsMobileFilterOpen(false)}>Show {filtered.length} Results</button>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="projects-main">
            {/* Active Filters */}
            {(searchQ || selectedDomains.length > 0 || selectedDiffs.length > 0 || selectedPrices.length > 0 || isPremiumOnly) && (
              <div className="active-filters">
                <span style={{ fontSize: 12, color: '#9CA3AF' }}>Active Filters:</span>
                {searchQ && (
                  <span className="active-chip">
                    "{searchQ}" <button onClick={() => removeFilter('q')}>×</button>
                  </span>
                )}
                {isPremiumOnly && (
                  <span className="active-chip premium">
                    Premium <button onClick={() => removeFilter('premium')}>×</button>
                  </span>
                )}
                {selectedDomains.map(d => (
                  <span key={d} className="active-chip">
                    {d} <button onClick={() => removeFilter('domains', d)}>×</button>
                  </span>
                ))}
                {selectedPrices.map(p => (
                  <span key={p} className="active-chip">
                    {p} <button onClick={() => removeFilter('prices', p)}>×</button>
                  </span>
                ))}
                {selectedDiffs.map(d => (
                  <span key={d} className="active-chip">
                    {d} <button onClick={() => removeFilter('diffs', d)}>×</button>
                  </span>
                ))}
                <button className="clear-all-text" onClick={clearAll}>Clear All</button>
              </div>
            )}

            <div className="grid-header">
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#9CA3AF', marginBottom: 20 }}>
                Showing <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{Math.min(visible, filtered.length)}</span> of <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{filtered.length}</span> projects
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {filtered.slice(0, visible).map(p => {
                const dc2 = domainColorMap[p.domain] || { color: 'var(--text-primary)', bg: 'var(--white-10)' }
                return (
                  <TiltCard key={p.id} className="anti-gravity-card project-card" style={{ border: `1px solid var(--white-5)`, '--domain-color': dc2.color } as React.CSSProperties}>
                    <div className="card-top" style={{ background: 'var(--white-2)', position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                      {active3D === p.id ? (
                        <WebXRViewer domain={p.domain} />
                      ) : p.image ? (
                        <img src={p.image} alt={p.title} loading="lazy" width="400" height="200" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, mixBlendMode: 'luminosity' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'var(--white-2)' }} />
                      )}
                      <div style={{ position: 'absolute', inset: 0, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span className="tag-pill" style={{ background: 'rgba(0,0,0,0.5)', color: dc2.color, border: `1px solid ${dc2.color}40`, backdropFilter: 'blur(8px)' }}>{p.domain}</span>
                        {p.isPremium && <span className="premium-badge">PREMIUM</span>}
                      </div>
                      <div style={{ position: 'absolute', bottom: 8, left: 12 }}>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: 'var(--white-60)', letterSpacing: 1 }}>{p.id}</span>
                      </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                        {p.tech.slice(0, 3).map(t => (
                          <span key={t} style={{ fontFamily: 'JetBrains Mono', fontSize: 10, padding: '4px 8px', background: 'var(--white-5)', borderRadius: 4, color: 'var(--text-primary)', border: '1px solid var(--white-5)' }}>{t}</span>
                        ))}
                        {p.tech.length > 3 && <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#9CA3AF', padding: '4px' }}>+{p.tech.length - 3}</span>}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>₹{p.price.toLocaleString()}</div>
                          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>{p.deliveryDays}</div>
                        </div>
                        <span className="tag-pill" style={{ background: p.difficulty === 'Easy' ? 'rgba(34,197,94,0.1)' : p.difficulty === 'Medium' ? 'rgba(234,179,8,0.1)' : 'rgba(239,68,68,0.1)', color: p.difficulty === 'Easy' ? '#16A34A' : p.difficulty === 'Medium' ? '#CA8A04' : '#DC2626', border: 'none', fontSize: 11 }}>
                          {p.difficulty}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button 
                          className="anti-gravity-card fluid-link" 
                          onClick={(e) => { e.stopPropagation(); navigate(`/projects/${p.id}`); }} 
                          style={{ flex: 1, textAlign: 'center', padding: '10px', fontSize: 13, cursor: 'pointer', border: 'none', outline: 'none' }}
                        >
                          View Details
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setActive3D(active3D === p.id ? null : p.id); }}
                          className="anti-gravity-card fluid-link" 
                          style={{ flex: 1, textAlign: 'center', padding: '10px', fontSize: 13, cursor: 'pointer', border: 'none', outline: 'none', background: active3D === p.id ? 'var(--text-primary)' : 'transparent', color: active3D === p.id ? 'var(--bg-void)' : 'var(--text-primary)' }}
                        >
                          {active3D === p.id ? 'Close 3D' : 'View 3D'}
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>

            {visible < filtered.length && (
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <button className="anti-gravity-card fluid-link" onClick={() => setVisible(v => v + 12)} style={{ padding: '12px 24px' }}>Load More Projects ({filtered.length - visible} remaining)</button>
              </div>
            )}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0', color: '#9CA3AF', fontFamily: 'var(--font-text)', background: 'var(--white-2)', borderRadius: 16, border: '1px dashed var(--white-10)' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>No projects match your filters.</div>
                <div>Try adjusting your search or categories.</div>
                <button style={{ marginTop: 24, padding: '8px 16px', background: 'var(--text-primary)', color: 'var(--bg-void)', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }} onClick={clearAll}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
