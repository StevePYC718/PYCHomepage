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
  color = 'rgba(99,255,173,0.85)',
  density = 0.45,
  speed = 0.85,
  size = 1.2,
  maxParticles = 45,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0, height = 0;
    let ctx: CanvasRenderingContext2D | null = null;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const saveData =
      typeof navigator !== 'undefined' &&
      (navigator as any).connection &&
      (navigator as any).connection.saveData;

    const deviceMemory =
      typeof navigator !== 'undefined' && (navigator as any).deviceMemory
        ? Number((navigator as any).deviceMemory)
        : undefined;

    const lowPower = saveData || (deviceMemory && deviceMemory <= 4);
    const disableAnimation = prefersReduced || saveData;

    // create particles
    let particles: Particle[] = [];

    const baseDensity = 0.00008; // particles per pixel
    function resize() {
      const canvasEl = (canvasRef?.current ?? canvas) as HTMLCanvasElement | null;
      if (!canvasEl) return;

      ctx = canvasEl.getContext('2d');
      if (!ctx) return;

      const parent = canvasEl.parentElement as HTMLElement | null;
      const widthSource = parent ? parent.clientWidth : canvasEl.clientWidth;
      const heightSource = parent ? parent.clientHeight : canvasEl.clientHeight;

      width = widthSource;
      height = heightSource;
      canvasEl.width = Math.max(1, Math.floor(width * dpr));
      canvasEl.height = Math.max(1, Math.floor(height * dpr));
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const adjustedDensity = lowPower ? density * 0.5 : density;
      const allowedParticles = lowPower ? Math.min(maxParticles, 32) : maxParticles;

      const targetCount = Math.min(
        allowedParticles,
        Math.floor(width * height * baseDensity * adjustedDensity)
      );

      // regenerate to fit new area
      particles = Array.from({ length: targetCount }).map(() => {
        const upward = Math.random() < 0.92;
        const angle = upward
          ? -Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3)
          : Math.random() * Math.PI * 2;
        const speedMultiplier = lowPower ? speed * 0.7 : speed; // slow down on low-power
        const s = (0.25 + Math.random() * 1.0) * speedMultiplier; // 0.25..1.25 * speed
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * s * (upward ? 0.4 : 1),
          vy: Math.sin(angle) * s,
          r: (1.0 + Math.random() * 1.6) * size, // radius 1.0..2.6 * size
          a: 0.75 + Math.random() * 0.25,         // alpha 0.75..1.0
        };
      });

      // draw once if reduced motion
      if (disableAnimation) {
        draw(true);
      }
    }

    function draw(staticOnly = false) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

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
      ctx.globalAlpha = 1;
    }

    function loop() {
      draw(false);
      rafRef.current = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (!disableAnimation) {
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
