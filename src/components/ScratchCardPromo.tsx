import { useEffect, useRef } from 'react'

export function ScratchCardPromo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#1a1a24');
    grad.addColorStop(0.5, '#3a3a4c');
    grad.addColorStop(1, '#1a1a24');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < canvas.width; i += 2) {
      for (let j = 0; j < canvas.height; j += 2) {
        if (Math.random() > 0.5) {
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.fillRect(i, j, 2, 2);
        }
      }
    }
    
    ctx.font = '500 16px var(--font-display)';
    ctx.fillStyle = 'var(--text-primary)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch to Reveal Discount', canvas.width/2, canvas.height/2);

    let isDrawing = false;
    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const down = () => isDrawing = true;
    const up = () => isDrawing = false;

    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', up);
    canvas.addEventListener('mouseleave', up);
    canvas.addEventListener('touchstart', down, {passive: false});
    canvas.addEventListener('touchmove', scratch, {passive: false});
    canvas.addEventListener('touchend', up);
    
    return () => {
      canvas.removeEventListener('mousedown', down);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('mouseup', up);
      canvas.removeEventListener('mouseleave', up);
      canvas.removeEventListener('touchstart', down);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchend', up);
    }
  }, [])

  return (
    <div className="promo-section" style={{ marginTop: 64, textAlign: 'center' }}>
      <h3 className="display-text" style={{ fontSize: 24, marginBottom: 16 }}>Reveal Your Mentorship Discount</h3>
      <div className="scratch-card-container anti-gravity-card" style={{ position: 'relative', width: 320, height: 160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="scratch-result" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
          20% OFF PREMIUM
        </div>
        <canvas ref={canvasRef} width={320} height={160} style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, cursor: 'pointer', borderRadius: 16 }} />
      </div>
    </div>
  )
}
