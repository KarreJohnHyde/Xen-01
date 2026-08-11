import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)
  
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  
  return <div className="scroll-progress" style={{ width: pct + '%' }} />
}
