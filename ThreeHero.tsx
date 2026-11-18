import { useEffect, useRef } from 'react';

/**
 * Lightweight, dependency-free canvas 3D scene for the homepage hero.
 * Uses a perspective projection and requestAnimationFrame; pauses when
 * the browser tab is hidden and respects reduced-motion preferences.
 */
export default function ThreeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const ctx = context;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;
    const points = Array.from({ length: 110 }, (_, i) => ({
      angle: i * 2.399,
      radius: 0.18 + ((i * 37) % 100) / 100 * 0.78,
      depth: ((i * 19) % 100) / 100,
      size: 0.7 + ((i * 13) % 20) / 10
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (!canvas.isConnected) return;
      if (document.hidden) {
        raf = 0;
        return;
      }
      if (reduced && frame > 0) return;
      const delta = Math.min((time - (last || time)) / 1000, 0.04);
      last = time;
      frame += delta;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.34;
      const spin = reduced ? 0.35 : frame * 0.22;

      // Fine orbit ellipses behind the central dimensional object.
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.35 + Math.sin(spin) * 0.08);
      ctx.strokeStyle = 'rgba(245,207,104,.42)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 1.42, scale * 0.48, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.rotate(1.0);
      ctx.strokeStyle = 'rgba(128,180,244,.34)';
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 1.32, scale * 0.54, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Depth particles with a gentle parallax drift.
      for (const p of points) {
        const a = p.angle + spin * (0.25 + p.depth * 0.25);
        const r = scale * p.radius * 1.55;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.68;
        ctx.beginPath();
        ctx.fillStyle = p.depth > 0.65 ? 'rgba(255,224,151,.8)' : 'rgba(139,185,244,.5)';
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Faceted metallic crystal rendered with layered polygon faces.
      const bob = reduced ? 0 : Math.sin(frame * 1.25) * 7;
      ctx.save();
      ctx.translate(cx, cy + bob);
      ctx.rotate(spin * 0.55);
      const radius = scale * 0.67;
      const vertices = Array.from({ length: 8 }, (_, i) => {
        const a = -Math.PI / 2 + i * Math.PI / 4;
        return [Math.cos(a) * radius, Math.sin(a) * radius];
      });
      const gradients = [
        ['#ffe7a1', '#bd842c'], ['#d9e8ff', '#477bb7'],
        ['#f2cc70', '#8e5e24'], ['#7ca9e6', '#244a7b']
      ];
      for (let i = 0; i < vertices.length; i++) {
        const [x1, y1] = vertices[i];
        const [x2, y2] = vertices[(i + 1) % vertices.length];
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, gradients[i % gradients.length][0]);
        grad.addColorStop(1, gradients[i % gradients.length][1]);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.36)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // Soft glow gives the object separation from the deep background.
      const glow = ctx.createRadialGradient(cx, cy, 4, cx, cy, scale * 1.45);
      glow.addColorStop(0, 'rgba(255,207,104,.14)');
      glow.addColorStop(1, 'rgba(72,135,213,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      if (!reduced) raf = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (!document.hidden && !raf) {
        last = 0;
        raf = window.requestAnimationFrame(draw);
      }
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', onVisibility);
    raf = window.requestAnimationFrame(draw);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-3d-canvas" aria-hidden="true" />;
}
