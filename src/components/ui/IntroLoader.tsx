import { useState, useEffect } from 'react'

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'show' | 'exit' | 'hidden'>('show')
  const brandText = 'XEN-O1'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 3000)
    const t2 = setTimeout(() => { setPhase('hidden'); onDone() }, 4000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  if (phase === 'hidden') return null

  return (
    <div className={`intro-loader ${phase === 'exit' ? 'exit' : ''}`}>
      <div className="intro-left" />
      <div className="intro-right" />
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="orbit-1" />
          <div className="orbit-2" />
          <div className="orbit-3" />
          <div className="logo-cube" style={{ transform: 'perspective(400px)' }}>
            {(['front','back','left','right','top','bottom'] as const).map(f => (
              <div key={f} className={`cube-face ${f}`}>X</div>
            ))}
          </div>
        </div>
        <div className="intro-brand">
          {brandText.split('').map((ch, i) => (
            <span key={i} className="typewriter-char" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>{ch}</span>
          ))}
        </div>
        <div className="intro-tagline">EMPOWERING INNOVATION · ENABLING EXCELLENCE</div>
        <div className="loader-progress">
          <div className="loader-progress-fill" />
        </div>
      </div>
    </div>
  )
}
