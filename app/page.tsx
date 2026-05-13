import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import ScrollReveal from "./components/ScrollReveal";
import ContactForm from "./components/ContactForm";
import NetworkCanvas from "./components/NetworkCanvas";
import TerminalWindow from "./components/TerminalWindow";
import AnimatedRing from "./components/AnimatedRing";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Learning" },
  { href: "#design", label: "Design" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "Qatar", label: "Based" },
  { value: "AZ-900", label: "In Progress" },
];

const heroTags = ["Azure", "ITIL", "Linux", "Networking", "Windows Server"];

const skills = {
  technical: [
    "Linux",
    "Windows & macOS",
    "Hardware Troubleshooting",
    "Networking Basics (DNS · DHCP · TCP/IP)",
    "cPanel & Web Hosting",
    "Git & GitHub",
    "WordPress",
  ],
  cloud: [
    "Microsoft Azure (In Progress)",
    "Virtualization",
    "Remote Desktop & SSH",
  ],
  creative: [
    "Visual Communication (8+ years)",
    "Technical Documentation",
    "Problem Solving",
    "Client Management",
  ],
};

const learning = [
  {
    icon: "🔄",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    status: "In Progress",
    active: true,
    progress: 72,
  },
  {
    icon: "🔄",
    title: "ITIL Foundation (Version 5)",
    status: "In Progress",
    active: true,
    progress: 55,
  },
  {
    icon: "📚",
    title: "Azure Home Lab",
    status: "Planned",
    active: false,
    progress: 0,
  },
  {
    icon: "📚",
    title: "Active Directory Lab",
    status: "Planned",
    active: false,
    progress: 0,
  },
];

/*
 * ── Portfolio items ────────────────────────────────────────────────────────
 * To add an image: upload to Google Drive, share as "Anyone with the link",
 * then paste the direct URL: https://drive.google.com/uc?export=view&id=FILE_ID
 */
const portfolioItems = [
  {
    id: "1",
    title: "Social Media Design",
    category: "Collection",
    imageUrl: "",
  },
  {
    id: "2",
    title: "Brand Identity",
    category: "Collection",
    imageUrl: "",
  },
  {
    id: "3",
    title: "UI Art Direction",
    category: "Collection",
    imageUrl: "",
  },
];

/* ─── SVG icons ──────────────────────────────────────────────────────────── */

const IconTerminal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconCloud = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const IconLayers = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div
      className="relative flex min-h-full flex-1 flex-col overflow-x-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500"
        style={{
          background: [
            "radial-gradient(ellipse 65% 45% at 10% -5%, var(--ambient-1) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 50% at 95% 10%, var(--ambient-2) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 55% at 50% 100%, var(--ambient-3) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header
        className="anim-slide-down sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300"
        style={{ borderColor: "var(--border-subtle)", background: "var(--bg-header)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <Image src="/logo.svg" alt="Alixali" width={22} height={22} priority />
            </div>
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "var(--text-primary)" }}
            >
              Ali <span style={{ color: "var(--text-accent)" }}>Ali</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-1.5 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all hover:opacity-80 hover:scale-[1.03]"
              style={{
                borderColor: "var(--text-accent)",
                background: "var(--badge-bg)",
                color: "var(--text-accent)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              CV
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative flex min-h-[88vh] flex-col items-center justify-center gap-12 overflow-hidden py-20 lg:flex-row lg:gap-16">

          {/* Network canvas background */}
          <NetworkCanvas />

          {/* Subtle tech dot grid */}
          <div aria-hidden className="tech-grid pointer-events-none absolute inset-0 opacity-60" />

          {/* Left: text */}
          <div className="relative z-10 flex flex-1 flex-col gap-6">
            {/* Badge */}
            <span
              className="anim-fade-up inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{
                borderColor: "var(--badge-border)",
                background: "var(--badge-bg)",
                color: "var(--badge-text)",
                animationDelay: "0ms",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full glow-pulse"
                style={{ background: "var(--dot-color)", boxShadow: "0 0 8px var(--dot-color)" }}
              />
              Computer Engineer · IT &amp; Cloud in Progress
            </span>

            {/* Headline */}
            <div className="anim-fade-up flex flex-col gap-3" style={{ animationDelay: "100ms" }}>
              <h1
                className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--text-primary)" }}
              >
                A Technologist Who{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--text-accent) 0%, #673de6 100%)",
                  }}
                >
                  Took the Scenic Route.
                </span>
              </h1>
              <p
                className="max-w-lg text-pretty text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Computer Engineer. 8 Years of Cross-Disciplinary Experience. Now Focused on IT &amp;
                Cloud.
              </p>
            </div>

            {/* CTAs */}
            <div className="anim-fade-up flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--bg-primary)", boxShadow: "0 4px 24px var(--glow)" }}
              >
                Let&apos;s Connect →
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
                style={{
                  borderColor: "var(--btn-ghost-border)",
                  background: "var(--btn-ghost-bg)",
                  color: "var(--text-primary)",
                }}
              >
                View Full CV
              </Link>
            </div>

            {/* Stats */}
            <div className="anim-fade-up flex flex-wrap gap-8 pt-1" style={{ animationDelay: "340ms" }}>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <p className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div
            className="anim-scale-in relative z-10 w-full shrink-0 lg:w-[340px]"
            style={{ animationDelay: "180ms" }}
          >
            {/* Glow blob behind terminal */}
            <div
              className="absolute -inset-6 -z-10 rounded-3xl blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, var(--glow), transparent 70%)" }}
            />
            <TerminalWindow />

            {/* Focus tags below terminal */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="tag-hover rounded-lg border px-2.5 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--btn-ghost-bg)",
                    color: "var(--text-primary)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SNIPPET ─────────────────────────────────────────────── */}
        <section id="about" className="py-20">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <p
                className="section-label text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--text-accent)" }}
              >
                About
              </p>
              <h2
                className="mt-3 text-3xl font-semibold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                A Technologist Who Took the Scenic Route.
              </h2>
              <p
                className="mt-4 text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I didn&apos;t start as a designer. I started as someone who couldn&apos;t stop taking
                things apart.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "var(--text-accent)" }}
              >
                Read My Full Story →
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* ── SKILLS ────────────────────────────────────────────────────── */}
        <section id="skills" className="py-20">
          <ScrollReveal>
            <p
              className="section-label text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-accent)" }}
            >
              Skills
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              What I Bring to the Table
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Technical */}
            <ScrollReveal variant="scale" delay={0}>
              <div
                className="card-hover h-full rounded-2xl border p-6"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
              >
                <p
                  className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-accent)" }}
                >
                  <IconTerminal />
                  Technical
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((s) => (
                    <span
                      key={s}
                      className="tag-hover rounded-lg border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--btn-ghost-bg)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Cloud & IT */}
            <ScrollReveal variant="scale" delay={80}>
              <div
                className="card-hover h-full rounded-2xl border p-6"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
              >
                <p
                  className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-accent)" }}
                >
                  <IconCloud />
                  Cloud &amp; IT
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((s) => (
                    <span
                      key={s}
                      className="tag-hover rounded-lg border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--btn-ghost-bg)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Creative & Soft */}
            <ScrollReveal variant="scale" delay={160}>
              <div
                className="card-hover h-full rounded-2xl border p-6 sm:col-span-2 lg:col-span-1"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
              >
                <p
                  className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-accent)" }}
                >
                  <IconLayers />
                  Creative &amp; Soft Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.creative.map((s) => (
                    <span
                      key={s}
                      className="tag-hover rounded-lg border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--btn-ghost-bg)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CURRENTLY LEARNING ────────────────────────────────────────── */}
        <section id="learning" className="py-20">
          <ScrollReveal>
            <p
              className="section-label text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-accent)" }}
            >
              Currently Learning
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              The Road Ahead
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {learning.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div
                  className="card-hover rounded-2xl border p-5"
                  style={{
                    borderColor: item.active ? "var(--border)" : "var(--border-subtle)",
                    background: item.active ? "var(--bg-card-hover)" : "var(--bg-card)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-xl leading-none">{item.icon}</span>
                      <div className="flex flex-col gap-1.5">
                        <p
                          className="text-sm font-semibold leading-snug"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.title}
                        </p>
                        {!item.active && (
                          <span
                            className="w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium"
                            style={{
                              borderColor: "var(--border)",
                              background: "var(--btn-ghost-bg)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.active && item.progress > 0 ? (
                      <AnimatedRing value={item.progress} size={46} />
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── DESIGN BACKGROUND ─────────────────────────────────────────── */}
        <section id="design" className="py-20">
          <ScrollReveal>
            <p
              className="section-label text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-accent)" }}
            >
              Design Background
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              8+ Years of Professional Design
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
              A foundation, not a destination.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={item.id} variant="scale" delay={i * 80}>
                <div
                  className="card-hover group overflow-hidden rounded-2xl border transition-all"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
                >
                  {/* Image area */}
                  <div
                    className="relative h-44 overflow-hidden"
                    style={{ background: "var(--btn-ghost-bg)" }}
                  >
                    {item.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2">
                        <div
                          className="float flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ background: "var(--badge-bg)" }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1.5"
                            style={{ color: "var(--text-accent)" }}>
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          Coming Soon
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs" style={{ color: "var(--text-accent)" }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={260}>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "var(--text-accent)" }}
              >
                View Full Portfolio →
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────────── */}
        <section id="contact" className="py-20 pb-32">
          <ScrollReveal>
            <p
              className="section-label text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-accent)" }}
            >
              Contact
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s Connect
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              Open to IT &amp; Cloud opportunities in Qatar and beyond.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ScrollReveal delay={80}>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@alixali.com"
                  className="card-hover flex items-center gap-4 rounded-2xl border p-4"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--badge-bg)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      style={{ color: "var(--text-accent)" }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>Email</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      hello@alixali.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/alixalicom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex items-center gap-4 rounded-2xl border p-4"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--badge-bg)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                      style={{ color: "var(--text-accent)" }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      linkedin.com/in/alixalicom
                    </p>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="border-t py-8 transition-colors duration-300"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Ali Ali — A Technologist Who Took the Scenic Route.
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              IT &amp; Cloud in Progress · Doha, Qatar
            </p>
          </div>
        </div>
      </footer>

      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(to right, transparent, var(--border), transparent)",
        }}
      />
    </div>
  );
}
