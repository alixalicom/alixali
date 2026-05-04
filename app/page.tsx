import Image from "next/image";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const gallery = [
  {
    title: "Brand refresh — placeholder",
    tag: "Identity",
    image: "/file.svg",
  },
  {
    title: "Campaign visuals — placeholder",
    tag: "Social",
    image: "/window.svg",
  },
  {
    title: "Packaging concept — placeholder",
    tag: "Print",
    image: "/vercel.svg",
  },
  {
    title: "Editorial layout — placeholder",
    tag: "Layout",
    image: "/file.svg",
  },
  {
    title: "Event graphics — placeholder",
    tag: "Campaign",
    image: "/window.svg",
  },
  {
    title: "UI art direction — placeholder",
    image: "/vercel.svg",
    tag: "Digital",
  },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.35),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(37,99,235,0.2),transparent),radial-gradient(ellipse_50%_35%_at_0%_20%,rgba(14,165,233,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
      />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#top"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow-lg shadow-sky-500/25">
              YN
            </span>
            <span className="group-hover:text-sky-200 transition-colors">
              Your Name
            </span>
          </a>
          <nav className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-sky-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition-colors hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-100 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <a
              href="mailto:hello@example.com?subject=CV%20request&body=Hi%20%E2%80%94%20I%E2%80%99d%20love%20to%20receive%20your%20CV."
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
            >
              Request CV
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              Graphic designer · Portfolio + CV
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Bold visuals, clear stories, and{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                thoughtful craft
              </span>
              .
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
              Placeholder intro: I help teams shape memorable brands through
              identity systems, campaign art direction, and polished digital
              graphics — from first sketches to final production files.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                See selected work
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-500/40 hover:bg-sky-500/10"
              >
                hello@example.com
              </a>
            </div>
            <dl className="grid max-w-lg grid-cols-3 gap-4 pt-2 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-slate-500">Years</dt>
                <dd className="mt-1 text-lg font-semibold text-white">8+</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-slate-500">Clients</dt>
                <dd className="mt-1 text-lg font-semibold text-white">40+</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-slate-500">Focus</dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  Brand
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/20 via-blue-600/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 shadow-2xl shadow-sky-900/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-sky-300/90">
                    Snapshot
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Your Name
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Senior Graphic Designer · City, Country
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image
                      src="/window.svg"
                      alt="Placeholder portrait graphic"
                      fill
                      className="object-cover p-3 opacity-90"
                      sizes="80px"
                      priority
                    />
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>
                    Placeholder: led visual direction for a multi-channel
                    launch — social, web, and print.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>
                    Placeholder: built scalable brand kits, templates, and
                    guidelines for fast-moving teams.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Placeholder: collaborative partner with marketing and
                    product — clear files, realistic timelines.
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Photoshop", "Illustrator", "InDesign", "Figma"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tool}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-10 border-t border-white/5 pt-16 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              About
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Placeholder bio: I&apos;m a graphic designer who loves typography,
              composition, and color systems. I enjoy turning messy ideas into
              cohesive visuals that feel confident on screen and in print.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              This site doubles as my CV and a small gallery — enough to show
              taste and range without a heavy case-study buildout.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-300/90">
              Working style
            </h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-slate-500">01</span>
                Discovery, references, and a tight creative direction.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-slate-500">02</span>
                Iterations with clear rationale — not endless options.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-slate-500">03</span>
                Delivery-ready exports, naming, and organized handoff.
              </li>
            </ul>
          </div>
        </section>

        <section id="experience" className="border-t border-white/5 pt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Experience
              </h2>
              <p className="mt-2 max-w-xl text-slate-400">
                Placeholder roles — swap titles, dates, and bullets with your
                real history.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-300 hover:text-sky-200"
            >
              LinkedIn →
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                role: "Senior Graphic Designer",
                org: "Studio North — placeholder",
                dates: "2022 — Present",
                bullets: [
                  "Art direction for campaigns across social, web, and events.",
                  "Mentored designers and standardized templates for speed.",
                ],
              },
              {
                role: "Graphic Designer",
                org: "Freelance — placeholder",
                dates: "2018 — 2022",
                bullets: [
                  "Brand identities, pitch decks, and packaging explorations.",
                  "Client workshops, moodboards, and production-ready files.",
                ],
              },
            ].map((job) => (
              <article
                key={job.role + job.org}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-slate-400">{job.org}</p>
                  </div>
                  <p className="text-sm text-sky-200/90">{job.dates}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 marker:text-sky-400">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-white/5 pt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Skills
          </h2>
          <p className="mt-2 max-w-xl text-slate-400">
            Placeholder skill clusters — adjust to match your real stack.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brand & identity",
                items: ["Logo systems", "Color + type", "Brand guidelines"],
              },
              {
                title: "Campaign design",
                items: ["Social kits", "Ads", "Landing visuals"],
              },
              {
                title: "Print & packaging",
                items: ["Layouts", "Dielines", "Prepress checks"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-sky-400">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-t border-white/5 pt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Selected work
              </h2>
              <p className="mt-2 max-w-xl text-slate-400">
                A compact gallery — swap these placeholders with your real JPG /
                PNG exports in <span className="text-slate-200">/public</span>.
              </p>
            </div>
            <p className="text-sm text-slate-500">6 pieces · grid layout</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800/80 to-slate-950/80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-10 opacity-80 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <figcaption className="flex items-start justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Placeholder caption — add client or year later.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-200">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/5 pt-16 pb-4"
        >
          <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-slate-950/40 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <p className="mt-3 max-w-xl text-slate-200/90">
              Placeholder CTA: tell me what you&apos;re building — a rebrand, a
              launch, or a set of templates — and I&apos;ll reply with next
              steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Email me
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                Behance
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                Instagram
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Tip: swap the mailto address everywhere when you&apos;re ready, or
              add a real PDF in <span className="text-slate-200">/public</span>{" "}
              and link it from the header.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-slate-600">
            Built with Next.js · placeholder content
          </p>
        </div>
      </footer>
    </div>
  );
}
