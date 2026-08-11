import React, { useRef, useCallback } from 'react'

export function TiltCard({ children, className = '', style = {}, onClick }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; onClick?: (e: React.MouseEvent) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(8px)`
  }, [])
  
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)'
  }, [])
  
  return (
    <div ref={ref} className={`tilt-card ${className}`} style={style} onClick={onClick} onMouseMove={(e) => {
      onMove(e);
      const el = ref.current;
      const glare = el?.querySelector('.glare') as HTMLElement;
      if (el && glare) {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left);
        const y = (e.clientY - rect.top);
        glare.style.transform = `translate(${x - rect.width/2}px, ${y - rect.height/2}px)`;
      }
    }} onMouseLeave={onLeave}>
      <div className="glare"></div>
      {children}
    </div>
  )
}
