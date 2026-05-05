"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "fade-up" | "scale";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  style,
  variant = "fade-up",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
