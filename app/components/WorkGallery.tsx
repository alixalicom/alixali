"use client";

import { useState } from "react";

type Category = "All" | "Social Media" | "Print Design" | "Logo Design";

const filters: Category[] = ["All", "Social Media", "Print Design", "Logo Design"];

const items = [
  { title: "Brand Identity System", category: "Logo Design", span: "col" },
  { title: "Social Media Campaign", category: "Social Media", span: "normal" },
  { title: "Event Poster Series", category: "Print Design", span: "normal" },
  { title: "Logo & Visual Identity", category: "Logo Design", span: "normal" },
  { title: "Instagram Content Kit", category: "Social Media", span: "col" },
  { title: "Publication Layout", category: "Print Design", span: "normal" },
  { title: "Startup Brand Package", category: "Logo Design", span: "normal" },
  { title: "Social Ads Campaign", category: "Social Media", span: "normal" },
  { title: "Brochure & Catalog", category: "Print Design", span: "normal" },
] as const;

export default function WorkGallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered = items.filter((i) => active === "All" || i.category === active);

  return (
    <div className="flex flex-col gap-8">

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-xl border px-4 py-2 text-sm font-medium transition-all"
              style={{
                borderColor: isActive ? "rgba(103,61,230,0.6)" : "rgba(103,61,230,0.15)",
                background: isActive ? "rgba(103,61,230,0.18)" : "rgba(103,61,230,0.04)",
                color: isActive ? "#ffffff" : "#c0bec8",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[rgba(103,61,230,0.4)]"
            style={{
              borderColor: "rgba(103,61,230,0.15)",
              background: "rgba(103,61,230,0.04)",
              aspectRatio: "4/3",
            }}
          >
            {/* Placeholder visual */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <div
                className="h-16 w-16 rounded-2xl opacity-15 transition-opacity duration-300 group-hover:opacity-25"
                style={{ background: "linear-gradient(135deg, #7352ed, #673de6)" }}
              />
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(to top, rgba(18,9,42,0.85) 0%, transparent 60%)" }}
            />

            {/* Info */}
            <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-semibold text-white">{item.title}</p>
            </div>

            {/* Tag — always visible */}
            <div className="absolute right-3 top-3">
              <span
                className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                style={{
                  borderColor: "rgba(103,61,230,0.35)",
                  background: "rgba(18,9,42,0.8)",
                  color: "#a19bff",
                }}
              >
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm" style={{ color: "#c0bec8" }}>
          No items in this category yet.
        </p>
      )}
    </div>
  );
}
