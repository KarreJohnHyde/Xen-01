import { useState, useEffect, useRef } from 'react'

export function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.disconnect()
        let start = 0
        const step = end / 60
        const interval = setInterval(() => {
          start += step
          if (start >= end) { setVal(end); clearInterval(interval) }
          else setVal(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [end])
  
  return <span ref={ref}>{val}{suffix}</span>
}
