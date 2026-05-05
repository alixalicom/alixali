import Image from "next/image";
import WorkGallery from "./components/WorkGallery";
import ThemeToggle from "./components/ThemeToggle";
import ScrollReveal from "./components/ScrollReveal";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const experience = [
  {
    role: "Graphic Designer",
    org: "كهرماء — Qatar General Electricity & Water",
    location: "Doha, Qatar · Full-time",
    dates: "Aug 2025 — Present",
    current: true,
    bullets: [
      "Creating visual content for one of Qatar's largest public utilities.",
      "Designing for print, digital, and internal communications.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Abecods Digital Solutions",
    location: "Doha, Qatar · Remote",
    dates: "Dec 2024 — Nov 2025",
    current: false,
    bullets: [
      "Produced visuals for print and digital: ads, social media, logos, and brand identities.",
    ],
  },
  {
    role: "Community Manager & Graphic Designer",
    org: "Wqtah",
    location: "Doha, Qatar · Hybrid",
    dates: "Feb 2024 — Jan 2025",
    current: false,
    bullets: [
      "Managed social media pages and created design assets in Arabic and English.",
      "Developed HTML email templates and maintained website content.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Nour Publishing",
    location: "UAE · Remote",
    dates: "Oct 2019 — Apr 2022",
    current: false,
    bullets: [
      "Produced book layouts using Adobe InDesign and social media design assets.",
    ],
  },
  {
    role: "Chief Designer",
    org: "Amart for Advanced Projects CO.LTD",
    location: "Khartoum, Sudan · On-site",
    dates: "Mar 2021 — Nov 2021",
    current: false,
    bullets: [
      "Led visual design for prominent Sudanese companies including Al Baraka Bank Sudan and Al Jazira Bank.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Independent",
    location: "Remote",
    dates: "2017 — Present",
    current: false,
    bullets: [
      "Assisted 30+ startups and brands in establishing their visual presence.",
      "Delivered brand identities, publications, UI design, and social media kits.",
    ],
  },
];

const designSkills = [
  "Brand Identity",
  "Logo Design",
  "Social Media Design",
  "Publication Design",
  "Print & Printables",
  "UI Art Direction",
  "Visual Systems",
  "Campaign Design",
];

const tools = [
  { name: "Photoshop", level: 95 },
  { name: "Illustrator", level: 92 },
  { name: "InDesign", level: 88 },
  { name: "Figma", level: 80 },
  { name: "XD", level: 78 },
  { name: "After Effects", level: 55 },
  { name: "Premiere Pro", level: 50 },
];

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden" style={{ background: "var(--bg)" }}>

      {/* Ambient */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500"
        style={{
          background: [
            "radial-gradient(ellipse 65% 45% at 10% -5%, var(--ambient-1) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 50% at 95% 10%, var(--ambient-2) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 55% at 50% 100%, var(--ambient-3) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* ── HEADER ── */}
      <header className="anim-slide-down sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300"
        style={{ borderColor: "var(--border-subtle)", background: "var(--bg-header)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ background: "#12092a", borderColor: "var(--border)" }}>
              <Image src="/logo.svg" alt="Alixali" width={22} height={22} priority />
            </div>
            <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--text-primary)" }}>
              Ali <span style={{ color: "var(--text-accent)" }}>Ali</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 text-sm md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="mailto:hello@alixali.com"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
              style={{ background: "var(--bg-primary)" }}>
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">

        {/* ── HERO ── */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-24 pt-20 sm:px-8 lg:flex-row lg:items-center lg:pt-28">
          <div className="flex flex-1 flex-col gap-7">

            <span className="anim-fade-up inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{ borderColor: "var(--badge-border)", background: "var(--badge-bg)", color: "var(--badge-text)", animationDelay: "0ms" }}>
              <span className="h-1.5 w-1.5 rounded-full glow-pulse" style={{ background: "var(--dot-color)", boxShadow: "0 0 8px var(--dot-color)" }} />
              Pixels Engineer · Graphic Designer
            </span>

            <div className="anim-fade-up flex flex-col gap-3" style={{ animationDelay: "100ms" }}>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--text-primary)" }}>
                Engineering pixels
                <br />into brands{" "}
                <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, var(--text-accent) 0%, #673de6 100%)" }}>
                  that endure.
                </span>
              </h1>
              <p className="max-w-lg text-pretty text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m Ali Ali — a graphic designer with 7+ years of crafting visual identities,
                campaigns, and design systems for brands and startups across the Middle East.
              </p>
            </div>

            <div className="anim-fade-up flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
              <a href="#work"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: "var(--bg-primary)", boxShadow: "0 4px 24px var(--glow)" }}>
                View my work
              </a>
              <a href="mailto:hello@alixali.com"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-all hover:opacity-80"
                style={{ borderColor: "var(--btn-ghost-border)", background: "var(--btn-ghost-bg)", color: "var(--text-primary)" }}>
                hello@alixali.com
              </a>
            </div>

            <div className="anim-fade-up flex flex-wrap gap-8 pt-1" style={{ animationDelay: "340ms" }}>
              {[
                { value: "7+", label: "Years experience" },
                { value: "30+", label: "Brands & startups" },
                { value: "Qatar", label: "Based in" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>{s.value}</p>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--text-secondary)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="anim-scale-in relative w-full lg:w-[360px] lg:shrink-0" style={{ animationDelay: "180ms" }}>
            <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl blur-3xl"
              style={{ background: `radial-gradient(ellipse at center, var(--glow), transparent 70%)` }} />
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border p-6 transition-colors duration-300"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-accent)" }}>Current role</p>
                <p className="mt-3 text-base font-semibold" style={{ color: "var(--text-primary)" }}>Graphic Designer</p>
                <p className="mt-0.5 text-sm" style={{ color: "var(--text-secondary)" }}>كهرماء — Qatar General Electricity & Water</p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-accent-2)" }}>Full-time · Aug 2025 – Present</p>
                <div className="my-4 h-px" style={{ background: "var(--border)" }} />
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-accent)" }}>Core tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Photoshop", "Illustrator", "InDesign", "Figma", "XD"].map((t) => (
                    <span key={t} className="rounded-lg border px-2.5 py-1 text-xs"
                      style={{ borderColor: "var(--border)", background: "var(--btn-ghost-bg)", color: "var(--text-primary)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border px-4 py-3 transition-colors duration-300"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--text-accent)" }}>🏆 </span>
                  Logo competition winner — Ministry of Telecom, Sudan
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── ABOUT ── */}
        <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <ScrollReveal className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-5">
              <SectionLabel>About</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                The designer behind the pixels
              </h2>
              <p className="text-pretty leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m a Sudanese graphic designer based in Doha, Qatar, with a Bachelor&apos;s degree in
                Computer Engineering and over 7 years of hands-on experience in visual design. That
                technical foundation shapes how I approach design — systematically, efficiently, and
                with an eye for what works beyond aesthetics.
              </p>
              <p className="text-pretty leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;ve worked across startups, publishers, and large public institutions — always
                bringing the same commitment: clear creative direction, realistic timelines, and
                production-ready deliverables.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="mailto:hello@alixali.com"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
                  style={{ background: "var(--bg-primary)" }}>
                  Get in touch
                </a>
                <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium transition-all hover:opacity-80"
                  style={{ borderColor: "var(--btn-ghost-border)", color: "var(--text-secondary)", background: "var(--btn-ghost-bg)" }}>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Approach", value: "Discovery first, then clear creative direction — not endless options." },
                { label: "Delivery", value: "Production-ready exports with organized naming and structured handoff." },
                { label: "Languages", value: "Arabic (native) · English (intermediate)" },
                { label: "Education", value: "B.Sc. Computer Engineering — Alzaeem Alazhary University, Sudan" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border p-5 transition-colors duration-300"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-accent)" }}>{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <Divider />

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Work history</h2>
            </div>
            <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors hover:opacity-70" style={{ color: "var(--text-accent)" }}>
              LinkedIn →
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {experience.map((job, i) => (
              <ScrollReveal key={job.role + job.org} delay={i * 60}>
              <article className="rounded-2xl border p-6 transition-colors duration-300"
                style={{
                  borderColor: job.current ? "var(--border)" : "var(--border-subtle)",
                  background: job.current ? "var(--bg-card-hover)" : "var(--bg-card)",
                }}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ color: job.current ? "var(--text-accent)" : "var(--text-secondary)" }}>
                      {job.org}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{job.location}</p>
                  </div>
                  <p className="shrink-0 text-sm" style={{ color: "var(--text-accent-2)" }}>{job.dates}</p>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--dot-color)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── SKILLS ── */}
        <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-10">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              What I bring to the table
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal variant="scale">
              <div className="rounded-2xl border p-6 transition-colors duration-300"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-accent)" }}>Design disciplines</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {designSkills.map((s) => (
                    <span key={s} className="rounded-xl border px-3 py-1.5 text-sm"
                      style={{ borderColor: "var(--border)", background: "var(--btn-ghost-bg)", color: "var(--text-primary)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={100}>
              <div className="rounded-2xl border p-6 transition-colors duration-300"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-accent)" }}>Tools & software</p>
                <div className="mt-5 flex flex-col gap-4">
                  {tools.map((t) => (
                    <div key={t.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span style={{ color: "var(--text-primary)" }}>{t.name}</span>
                        <span style={{ color: "var(--text-accent)" }}>{t.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--progress-bg)" }}>
                        <div className="h-full rounded-full" style={{ width: `${t.level}%`, background: "var(--bg-primary)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Divider />

        {/* ── WORK ── */}
        <section id="work" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <ScrollReveal className="mb-10 flex items-end justify-between">
            <div>
              <SectionLabel>Work</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Selected projects</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <WorkGallery />
          </ScrollReveal>
        </section>

        <Divider />

        {/* ── CONTACT ── */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border p-10 sm:p-14 transition-colors duration-300"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <div className="mx-auto max-w-xl text-center">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
                Let&apos;s build something together
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Have a project in mind? Whether it&apos;s a brand identity, a campaign, or a visual
                system — I&apos;d love to hear about it.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href="mailto:hello@alixali.com"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: "var(--bg-primary)", boxShadow: "0 4px 24px var(--glow)" }}>
                  hello@alixali.com
                </a>
                <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-xl border px-7 py-3 text-sm font-medium transition-all hover:opacity-80"
                  style={{ borderColor: "var(--btn-ghost-border)", background: "var(--btn-ghost-bg)", color: "var(--text-primary)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8 transition-colors duration-300" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs sm:flex-row sm:px-8"
          style={{ color: "var(--text-muted)" }}>
          <p>© {new Date().getFullYear()} Ali Ali — Pixels Engineer</p>
          <p>Graphic Designer · Doha, Qatar</p>
        </div>
      </footer>

    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="h-px transition-colors duration-300"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-accent)" }}>
      {children}
    </p>
  );
}
