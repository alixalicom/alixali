"use client";

import { useEffect, useRef, useState, useId } from "react";

interface Props {
  value: number;   /* 0–100 */
  size?: number;
}

export default function AnimatedRing({ value, size = 44 }: Props) {
  const [progress, setProgress] = useState(0);
  const ref   = useRef<HTMLDivElement>(null);
  const uid   = useId().replace(/:/g, "-");
  const gradId = `rg-${uid}`;

  const stroke = 3.2;
  const r      = (size - stroke * 2) / 2;
  const circ   = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setProgress(value), 280);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="shrink-0" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        overflow="visible"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth={stroke}
        />

        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "drop-shadow(0 0 3px rgba(167,139,250,0.6))",
          }}
        />

        {/* Percentage label */}
        <text
          x={size / 2}
          y={size / 2 + 3.5}
          textAnchor="middle"
          fill="#a78bfa"
          fontSize="9"
          fontWeight="700"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}
