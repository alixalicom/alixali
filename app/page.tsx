export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-x-hidden px-4">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.3),transparent),radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(14,165,233,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"
      />

      <main className="flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-2xl font-bold text-white shadow-2xl shadow-sky-500/30">
            YN
          </span>
          <p className="text-sm font-medium tracking-widest text-sky-300/80 uppercase">
            Your Name
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Something{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              beautiful
            </span>{" "}
            is coming.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-slate-400">
            A new portfolio is on its way — brand identities, campaigns, and
            thoughtful visual craft. Stay tuned.
          </p>
        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-slate-500">Want to reach out in the meantime?</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-100"
          >
            hello@example.com
          </a>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-300"
          >
            Behance
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-300"
          >
            Instagram
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>
      </main>

      <footer className="absolute bottom-6 text-xs text-slate-700">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
