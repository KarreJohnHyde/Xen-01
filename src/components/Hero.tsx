import { useEffect, useRef } from 'react'
import { XenLogo } from './XenLogo'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight

    const stars: {x: number, y: number, z: number}[] = []
    const stardust: {x: number, y: number, z: number, s: number}[] = []
    for(let i=0; i<150; i++){
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(Math.random() * 2 - 1)
      stars.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi)
      })
    }
    for(let i=0; i<300; i++){
      stardust.push({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 4,
        s: Math.random() * 1.5
      })
    }
    
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { 
        const rect = canvas.getBoundingClientRect();
        mx = (e.clientX - rect.left) / rect.width - 0.5;
        my = (e.clientY - rect.top) / rect.height - 0.5;
    }
    document.addEventListener('mousemove', onMove)
    
    let scrollSpeed = 0;
    const onScroll = () => { scrollSpeed += 0.05; }
    window.addEventListener('scroll', onScroll)

    let time = 0;
    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Decay scroll speed
      scrollSpeed *= 0.95;
      time += 0.005 + scrollSpeed;
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) * 0.8;
      
      // Rotation matrices
      const cosY = Math.cos(time + mx);
      const sinY = Math.sin(time + mx);
      const cosX = Math.cos(time * 0.5 + my);
      const sinX = Math.sin(time * 0.5 + my);

      const projected = stars.map(p => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;
        
        // Perspective project
        const scale = 2 / (2 - z2);
        return {
          x: cx + x1 * radius * scale,
          y: cy + y2 * radius * scale,
          scale: scale,
          z: z2
        }
      });
      
      // Draw lines between close points
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
            const p1 = projected[i];
            const p2 = projected[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = dx*dx + dy*dy;
            if (dist < 15000 && p1.z < 0.5 && p2.z < 0.5) { // Only draw front face connections
                const opacity = 1 - (dist / 15000);
                ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.7})`; // Light Blue lines
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      }

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const nodeColor = getComputedStyle(document.body).getPropertyValue('--network-node-color').trim() || (isLight ? '16, 150, 100' : '16, 185, 129');
      const stardustColor = getComputedStyle(document.body).getPropertyValue('--network-stardust-color').trim() || (isLight ? '10, 100, 180' : '14, 165, 233');

      // Draw points
      projected.forEach(p => {
        if (p.z > 0.5) return; // simple backface culling
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, p.scale * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${p.scale * 0.9})`; 
        ctx.fill();
      });
      
      // Draw stardust
      stardust.forEach(p => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;
        const scale = 2 / (2 - z2);
        if (z2 > 0.5) return;
        ctx.beginPath(); 
        ctx.arc(cx + x1 * radius * scale * 1.5, cy + y2 * radius * scale * 1.5, p.s * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${stardustColor}, ${scale * 0.7})`; 
        ctx.fill();
      });

      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMove); window.removeEventListener('scroll', onScroll); }
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'flex-start', padding: '184px 0 88px', overflow: 'hidden', background: 'var(--bg-void)' }}>
      <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '60vw', height: '100vh', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(123,47,190,0.1) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Left Content */}
          <div className="hero-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, background: 'var(--glass-base)', border: '1px solid var(--border-glass)', marginBottom: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'waPulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-primary)', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>🎓 India's #1 Project Mentorship Platform</span>
            </div>

            <h1 className="glitch text-3d-shadow" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(46px, 5.2vw, 78px)', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: 24, letterSpacing: -2, paddingTop: '16px' }}>
              Empowering<br />
              <span className="gold-gradient-text" style={{ fontVariationSettings: "'wght' var(--w-extrabold)", position: 'relative', display: 'inline-block' }}>
                Innovation,
                {/* Decorative Orbit Icon */}
                <svg aria-hidden="true" viewBox="0 0 100 100" style={{ position: 'absolute', top: '-20%', right: '-30px', width: '80px', height: '80px', zIndex: -1, opacity: 0.8, pointerEvents: 'none', animation: 'orbit-spin-3 20s linear infinite' }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeDasharray="12 8" opacity="0.6" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="50" cy="15" r="3" fill="var(--color-gold)" />
                </svg>
              </span><br />
              Enabling Excellence.
            </h1>

            <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 32px 0', maxWidth: 640 }}>
              From concept to deployment — we guide final year engineering students through cutting-edge technology projects with full documentation, source code, and research paper support.
            </p>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: 40, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--text-primary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>✅ 100% Original</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>⚡ Fast Delivery</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>📄 IEEE Support</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>🔬 Scopus Indexed</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Projects →
              </button>
              <button className="anti-gravity-card fluid-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Free Consultation
              </button>
            </div>
          </div>
          
          {/* Right Content - Floating Badges */}
          <div className="hero-right" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="wireframe-sphere" aria-hidden="true">
              {Array.from({ length: 2 }).map((_, index) => <span key={index} className="sphere-ring" />)}
              <span className="sphere-core">
                <XenLogo label={false} size={48} />
              </span>
            </div>
            
            {/* Stat Cards Container */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <div className="floating-badge anti-gravity-card" style={{ position: 'absolute', top: '15%', left: '5%', padding: '16px', animationDelay: '0s', pointerEvents: 'auto', minWidth: 'max-content' }}>
                <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}>500+</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Students Helped</div>
              </div>
              
              <div className="floating-badge anti-gravity-card" style={{ position: 'absolute', bottom: '15%', left: '5%', padding: '16px', animationDelay: '1s', pointerEvents: 'auto', minWidth: 'max-content' }}>
                <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-cyan)' }}>100+</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Projects Delivered</div>
              </div>
              
              <div className="floating-badge anti-gravity-card" style={{ position: 'absolute', top: '40%', right: '5%', padding: '16px', animationDelay: '2s', pointerEvents: 'auto', minWidth: 'max-content' }}>
                <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-purple-neon)' }}>4.9/5</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Average Rating</div>
              </div>
            </div>
            
            <div className="hero-course-stack" aria-label="Featured courses">
              <span>AI Mentor</span><span>ML Lab</span><span>Vision Pro</span>
            </div>
          </div>

      </div>
    </section>
  )
}
