import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    fontFamily: 'JetBrains Mono',
    primaryColor: '#050810',
    primaryTextColor: '#fff',
    primaryBorderColor: '#334155',
    lineColor: '#64748b',
    secondaryColor: '#1e293b',
    tertiaryColor: '#0f172a'
  },
});

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (ref.current) {
      mermaid.render(id, chart).then((result) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg;
        }
      }).catch(e => {
        console.error('Mermaid render error', e);
      });
    }
  }, [chart, id]);

  return (
    <div 
      className="mermaid-diagram" 
      style={{ 
        width: '100%', 
        overflowX: 'auto', 
        padding: '24px', 
        background: 'var(--white-2)',
        border: '1px solid var(--white-10)',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div ref={ref} />
    </div>
  );
}
