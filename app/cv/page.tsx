import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "CV — Ali Ali",
  description:
    "Computer Engineer transitioning into IT Support & Cloud Computing. 8+ years of cross-disciplinary technical experience.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#learning", label: "Learning" },
  { href: "/#design", label: "Design" },
  { href: "/#contact", label: "Contact" },
];

const technicalSkills = [
  {
    category: "Operating Systems",
    items: "Windows 10/11, Windows Server, Linux (Ubuntu, Debian), macOS",
  },
  {
    category: "Networking",
    items: "TCP/IP, DNS, DHCP, HTTP/S, basic network troubleshooting and configuration",
  },
  {
    category: "Cloud & Virtualization",
    items: "Microsoft Azure (Fundamentals — Expected June 2026), VMs, Remote Desktop (RDP), SSH",
  },
  {
    category: "Server & Hosting",
    items: "cPanel, web hosting management, domain configuration, SSL, FTP",
  },
  {
    category: "Hardware",
    items: "PC assembly, hardware diagnostics, peripheral troubleshooting, component replacement",
  },
  {
    category: "Web & Automation",
    items: "WordPress (Advanced), Git/GitHub, n8n workflow automation, HTML/CSS basics",
  },
  {
    category: "Tools",
    items: "Microsoft 365, Google Workspace, Bitwarden, remote support tools",
  },
];

const certifications = [
  {
    icon: "🔄",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Expected June 2026",
  },
  {
    icon: "🔄",
    title: "ITIL Foundation (Version 5)",
    issuer: "PeopleCert",
    date: "Expected June 2026",
  },
];

const experience = [
  {
    role: "Graphic Designer",
    org: "Kahramaa — Qatar General Electricity & Water",
    location: "Doha, Qatar · Full-time",
    dates: "Aug 2025 – Present",
    current: true,
    bullets: [
      "Create and manage visual content for one of Qatar's largest public utility organizations.",
      "Design for print, digital platforms, and internal communications serving thousands of employees.",
      "Coordinate with technical and management teams — developing strong cross-department communication skills.",
      "Manage multiple concurrent projects with strict deadlines in a structured enterprise environment.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Abecods Digital Solutions",
    location: "Doha, Qatar · Remote",
    dates: "Dec 2024 – Nov 2025",
    current: false,
    bullets: [
      "Produced visual assets for print and digital channels including ads, social media, logos, and brand identities.",
      "Collaborated remotely with distributed teams — proficient with remote collaboration tools and async workflows.",
    ],
  },
  {
    role: "Community Manager & Graphic Designer",
    org: "Wqtah",
    location: "Doha, Qatar · Hybrid",
    dates: "Feb 2024 – Jan 2025",
    current: false,
    bullets: [
      "Managed social media platforms and created bilingual (Arabic/English) design assets.",
      "Developed HTML/CSS email templates — demonstrating practical web development skills.",
      "Maintained and updated website content and added promotional banners to web and mobile app.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Nour Publishing",
    location: "Sharjah, UAE · Remote",
    dates: "Oct 2019 – Apr 2022",
    current: false,
    bullets: [
      "Produced book layouts using Adobe InDesign and managed digital asset libraries.",
      "Delivered consistent output remotely across a multi-year engagement.",
    ],
  },
  {
    role: "Chief Designer",
    org: "Amart for Advanced Projects CO. LTD",
    location: "Khartoum, Sudan · On-site",
    dates: "Mar 2021 – Nov 2021",
    current: false,
    bullets: [
      "Led visual design for prominent Sudanese institutions including Al Baraka Bank Sudan, Al Jazira Bank, and the Telecommunications & Post Regulatory Authority.",
      "Managed a design team — developed leadership, coordination, and project management skills.",
    ],
  },
  {
    role: "Freelance — Technical & Design Consultant",
    org: "Independent",
    location: "Remote",
    dates: "2016 – Present",
    current: false,
    bullets: [
      "Delivered web development, WordPress builds, and graphic design services to 30+ startups and SMEs.",
      "Managed full web infrastructure including hosting setup, domain configuration, cPanel administration, and SSL.",
      "Hands-on experience with Linux servers, SSH access, and remote server troubleshooting.",
      "Implemented n8n-based workflow automation to streamline client operations.",
    ],
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Logo Competition Winner — Ministry of Telecommunications, Sudan",
    date: "Jun 2022",
    desc: "Selected from 1,000+ submissions as the winning logo design for a national government institution.",
  },
  {
    icon: "🤝",
    title: "Design Team Lead — Patient Support Organization, Sudan",
    date: "Aug 2019 – Feb 2022",
    desc: "Led a volunteer design and media team recognized as the top-performing media team across all branches in 2021.",
  },
];

/* ─── Shared sub-components ─────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div
      className="my-16 h-px w-full"
      style={{
        background: "linear-gradient(to right, transparent, var(--border), transparent)",
      }}
    />
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function CVPage() {
  return (
    <div
      className="relative flex min-h-full flex-1 flex-col overflow-x-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient */}
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

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300"
        style={{ borderColor: "var(--border-subtle)", background: "var(--bg-header)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ background: "#12092a", borderColor: "var(--border)" }}
            >
              <Image src="/logo.svg" alt="Alixali" width={22} height={22} priority />
            </div>
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "var(--text-primary)" }}
            >
              Ali <span style={{ color: "var(--text-accent)" }}>Ali</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-1.5 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-12 sm:px-8 sm:py-16">

        {/* ── Action buttons ─────────────────────────────────────────────── */}
        <div className="mb-10 flex flex-wrap items-center justify-end gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              background: "var(--btn-ghost-bg)",
              color: "var(--text-secondary)",
            }}
          >
            ← Back to Home
          </Link>
          <a
            href="/Ali-Ali-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "var(--bg-primary)", boxShadow: "0 4px 20px var(--glow)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* ── 1. CV HEADER ───────────────────────────────────────────────── */}
        <ScrollReveal>
          <div
            className="rounded-2xl border p-8 sm:p-10"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
          >
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Ali Ali
            </h1>
            <p
              className="mt-2 text-xl font-semibold"
              style={{ color: "var(--text-accent)" }}
            >
              IT Support Specialist
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Computer Engineer · Cloud in Progress · Doha, Qatar
            </p>
            <div
              className="mt-5 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                { icon: "✉️", text: "hello@alixali.com", href: "mailto:hello@alixali.com" },
                {
                  icon: "💼",
                  text: "linkedin.com/in/alixalicom",
                  href: "https://linkedin.com/in/alixalicom",
                },
                { icon: "🌐", text: "alixali.com", href: "https://alixali.com" },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 2. PROFESSIONAL SUMMARY ────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Professional Summary
          </p>
          <div
            className="mt-4 rounded-2xl border p-6"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
          >
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Computer Engineer with 8+ years of cross-disciplinary technical experience, currently
              transitioning into IT Support and Cloud Computing. Combines a strong academic foundation
              in computer engineering with hands-on expertise in Linux/Windows administration,
              networking, server management, web infrastructure, and workflow automation. Experienced
              in troubleshooting hardware and software issues, managing hosting environments, and
              deploying cloud-based solutions. Currently preparing for Microsoft Azure Fundamentals
              (AZ-900) and ITIL Foundation (Version 5) — both expected June 2026. Brings rare
              cross-domain perspective: technical depth, strong visual communication, and the ability
              to bridge IT infrastructure with end-user experience.
            </p>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 3. TECHNICAL SKILLS ────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Technical Skills
          </p>
          <div
            className="mt-4 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
          >
            {technicalSkills.map((row, i) => (
              <div
                key={row.category}
                className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <p
                  className="w-full shrink-0 text-xs font-semibold uppercase tracking-wider sm:w-44"
                  style={{ color: "var(--text-accent)" }}
                >
                  {row.category}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {row.items}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 4. CERTIFICATIONS ─────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Certifications &amp; Learning
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} variant="scale" delay={i * 80}>
                <div
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-card-hover)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-2xl leading-none">{cert.icon}</span>
                    <div>
                      <p
                        className="text-sm font-semibold leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {cert.title}
                      </p>
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {cert.issuer}
                      </p>
                      <span
                        className="mt-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          borderColor: "var(--badge-border)",
                          background: "var(--badge-bg)",
                          color: "var(--badge-text)",
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 5. WORK EXPERIENCE ────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Work Experience
          </p>
        </ScrollReveal>

        <div className="mt-4 flex flex-col gap-4">
          {experience.map((job, i) => (
            <ScrollReveal key={`${job.org}-${job.dates}`} delay={i * 50}>
              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: job.current ? "var(--border)" : "var(--border-subtle)",
                  background: job.current ? "var(--bg-card-hover)" : "var(--bg-card)",
                }}
              >
                {/* Job header */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {job.role}
                      </h3>
                      {job.current && (
                        <span
                          className="rounded-full border px-2 py-0.5 text-xs font-medium"
                          style={{
                            borderColor: "var(--badge-border)",
                            background: "var(--badge-bg)",
                            color: "var(--badge-text)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-0.5 text-sm font-medium"
                      style={{
                        color: job.current ? "var(--text-accent)" : "var(--text-secondary)",
                      }}
                    >
                      {job.org}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {job.location}
                    </p>
                  </div>
                  <p
                    className="shrink-0 text-sm"
                    style={{ color: "var(--text-accent-2)" }}
                  >
                    {job.dates}
                  </p>
                </div>

                {/* Bullet points */}
                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--dot-color)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <SectionDivider />

        {/* ── 6. EDUCATION ──────────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Education
          </p>
          <div
            className="mt-4 rounded-2xl border p-6"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  B.Sc. (Honours) — Electrical Engineering, Computer Engineering Track
                </h3>
                <p
                  className="mt-0.5 text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Alzaeem Alazhary University
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Khartoum, Sudan
                </p>
              </div>
              <p
                className="shrink-0 text-sm"
                style={{ color: "var(--text-accent-2)" }}
              >
                Graduated Dec 2021
              </p>
            </div>
            <div
              className="mt-4 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="font-medium" style={{ color: "var(--text-secondary)" }}>
                Coursework included:{" "}
              </span>
              Computer Networks, Operating Systems, Programming (C/C++/Java), Database Systems,
              Computer Architecture, and Digital Electronics.
            </p>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 7. ACHIEVEMENTS ───────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Achievements &amp; Volunteer Work
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 80}>
                <div
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
                >
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg leading-none">{a.icon}</span>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {a.title}
                        </p>
                        <p
                          className="mt-1 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {a.desc}
                        </p>
                      </div>
                    </div>
                    <p
                      className="shrink-0 pl-7 text-xs sm:pl-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {a.date}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* ── 8. LANGUAGES ──────────────────────────────────────────────── */}
        <ScrollReveal>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-accent)" }}
          >
            Languages
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { lang: "Arabic", level: "Native", pct: 100 },
              { lang: "English", level: "Upper Intermediate (B2)", pct: 72 },
            ].map((l) => (
              <div
                key={l.lang}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {l.lang}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {l.level}
                  </p>
                </div>
                <div
                  className="mt-3 h-1.5 w-full overflow-hidden rounded-full"
                  style={{ background: "var(--progress-bg)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${l.pct}%`, background: "var(--bg-primary)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom action buttons */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/Ali-Ali-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "var(--bg-primary)", boxShadow: "0 4px 24px var(--glow)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
            style={{
              borderColor: "var(--btn-ghost-border)",
              background: "var(--btn-ghost-bg)",
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        className="mt-16 border-t py-8 transition-colors duration-300"
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
