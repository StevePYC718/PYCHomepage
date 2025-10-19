'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  color?: string;
  density?: number;     // 0..1 (fraction of base density)
  speed?: number;       // 0..1.2 (multiplier)
  size?: number;        // 0..4 (radius px multiplier)
  maxParticles?: number;
};

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  r: number; a: number;
};

export function Particles({
  className,
  color = 'rgba(255,255,255,0.8)',
  density = 0.5,
  speed = 0.55,
  size = 1.0,
  maxParticles = 80,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0, height = 0;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // create particles
    let particles: Particle[] = [];

    const baseDensity = 0.00008; // particles per pixel
    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

    function resize() {
      const { clientWidth, clientHeight } = canvas.parentElement || canvas;
      width = clientWidth;
      height = clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.min(
        maxParticles,
        Math.floor(width * height * baseDensity * density)
      );

      // regenerate to fit new area
      particles = Array.from({ length: targetCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const s = (0.25 + Math.random() * 0.75) * speed; // 0.25..1 * speed
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * s,
          vy: Math.sin(angle) * s,
          r: (0.6 + Math.random() * 1.0) * size, // radius 0.6..1.6 * size
          a: 0.6 + Math.random() * 0.4,          // alpha 0.6..1.0
        };
      });

      // draw once if reduced motion
      if (prefersReduced) {
        draw(true);
      }
    }

    function draw(staticOnly = false) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      // soft connector lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;

      // update
      if (!staticOnly) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          // wrap around edges
          if (p.x < -5) p.x = width + 5;
          else if (p.x > width + 5) p.x = -5;
          if (p.y < -5) p.y = height + 5;
          else if (p.y > height + 5) p.y = -5;
        }
      }

      // draw dots
      for (const p of particles) {
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // draw faint lines between nearby particles
      const LINK_DIST = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = clamp(1 - Math.sqrt(d2) / LINK_DIST, 0, 0.8) * 0.25;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      draw(false);
      rafRef.current = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, density, speed, size, maxParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={clsx(
        'absolute inset-0 z-[1] block h-full w-full pointer-events-none select-none',
        className
      )}
    />
  );
}
