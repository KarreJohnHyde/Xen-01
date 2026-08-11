import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    let raf: number
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dotRef.current?.classList.add('is-visible')
      ringRef.current?.classList.add('is-visible')
    }
    const onEnter = () => ringRef.current?.classList.add('expanded')
    const onLeave = () => ringRef.current?.classList.remove('expanded')

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (dotRef.current) { dotRef.current.style.left = mx + 'px'; dotRef.current.style.top = my + 'px' }
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px' }
      raf = requestAnimationFrame(animate)
    }
    animate()
    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,.tilt-card,.flip-card,.blog-card,.domain-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMove); }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
