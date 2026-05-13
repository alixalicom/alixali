"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedProgress({ value }: { value: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setWidth(value), 250);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mt-2.5 flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          Progress
        </span>
        <span
          className="text-[10px] font-semibold tabular-nums"
          style={{ color: "var(--text-accent)" }}
        >
          {width > 0 ? `${value}%` : "—"}
        </span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full"
        style={{ background: "var(--progress-bg)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background:
              "linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)",
            transition: "width 1.3s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: "0 0 8px rgba(167, 139, 250, 0.5)",
          }}
        />
      </div>
    </div>
  );
}
