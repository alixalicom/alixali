"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
}

export default function NetworkCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const N = 38;
    const CONNECT = 120;
    let dots: Dot[] = [];
    let tick = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas!.width = rect.width;
      canvas!.height = rect.height;
    }

    function init() {
      dots = Array.from({ length: N }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    resize();
    init();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    function draw() {
      tick++;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const w = canvas!.width;
      const h = canvas!.height;

      // Move
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.pulse += 0.018;
        // wrap edges
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;
      }

      // Connections
      for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * 0.18;
            ctx!.beginPath();
            ctx!.moveTo(dots[i].x, dots[i].y);
            ctx!.lineTo(dots[j].x, dots[j].y);
            ctx!.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Nodes with subtle pulse
      for (const d of dots) {
        const pulse = 0.4 + Math.sin(d.pulse) * 0.15;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(167, 139, 250, ${pulse})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
