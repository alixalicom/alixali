import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "A new portfolio is on the way.",
};

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_-25%,rgba(59,130,246,0.45),transparent),radial-gradient(ellipse_55%_45%_at_100%_10%,rgba(37,99,235,0.22),transparent),radial-gradient(ellipse_45%_35%_at_0%_30%,rgba(14,165,233,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-500/45 to-transparent"
      />

      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
          Portfolio update in progress
        </p>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Something new is{" "}
          <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
            almost here
          </span>
          .
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
          Placeholder copy: I&apos;m polishing a refreshed portfolio experience.
          If you need to reach me in the meantime, send a note and I&apos;ll get
          back to you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
          >
            Email placeholder
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-500/40 hover:bg-sky-500/10"
          >
            Instagram placeholder
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-600">
          If you&apos;re the site owner testing a preview build, use your secret
          preview link (configured in Vercel environment variables).
        </p>
      </main>
    </div>
  );
}
