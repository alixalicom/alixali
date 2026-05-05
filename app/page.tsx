import Image from "next/image";
import WorkGallery from "./components/WorkGallery";

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
      "Led visual design for a group of prominent Sudanese companies including Al Baraka Bank Sudan and Al Jazira Bank.",
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
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden">

      {/* Ambient */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 50% at 15% -5%, rgba(103,61,230,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 15%, rgba(115,82,237,0.12) 0%, transparent 55%)" }} />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-20 border-b border-white/5 backdrop-blur-md"
        style={{ background: "rgba(18,9,42,0.8)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "#12092a", boxShadow: "0 0 0 1px rgba(103,61,230,0.4)" }}>
              <Image src="/logo.svg" alt="Alixali" width={22} height={22} priority />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">
              Ali <span style={{ color: "#a19bff" }}>Ali</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 text-sm md:flex" style={{ color: "#c0bec8" }}>
            {nav.map((item) => (
              <a key={item.href} href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="mailto:hello@alixali.com"
            className="rounded-xl px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #7352ed, #673de6)" }}>
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">

        {/* ── HERO ── */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-24 pt-20 sm:px-8 lg:flex-row lg:items-center lg:pt-28">
          <div className="flex flex-1 flex-col gap-7">

            <span className="inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{ borderColor: "rgba(103,61,230,0.35)", background: "rgba(103,61,230,0.1)", color: "#a19bff" }}>
              <span className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#673de6", boxShadow: "0 0 8px #673de6" }} />
              Pixels Engineer · Graphic Designer
            </span>

            <div className="flex flex-col gap-3">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Engineering pixels
                <br />into brands{" "}
                <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #a19bff 0%, #673de6 100%)" }}>
                  that endure.
                </span>
              </h1>
              <p className="max-w-lg text-pretty text-lg leading-relaxed" style={{ color: "#c0bec8" }}>
                I&apos;m Ali Ali — a graphic designer with 7+ years of crafting visual identities,
                campaigns, and design systems for brands and startups across the Middle East.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#work"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #7352ed, #673de6)", boxShadow: "0 4px 24px rgba(103,61,230,0.35)" }}>
                View my work
              </a>
              <a href="mailto:hello@alixali.com"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium text-white transition-all hover:border-[rgba(161,155,255,0.4)] hover:bg-[rgba(103,61,230,0.1)]"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
                hello@alixali.com
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-1">
              {[
                { value: "7+", label: "Years experience" },
                { value: "30+", label: "Brands & startups" },
                { value: "Qatar", label: "Based in" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs" style={{ color: "#c0bec8" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="relative w-full lg:w-[360px] lg:shrink-0">
            <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, rgba(103,61,230,0.18), transparent 70%)" }} />

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(103,61,230,0.2)", background: "rgba(103,61,230,0.06)", backdropFilter: "blur(12px)" }}>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Current role</p>
                <p className="mt-3 text-base font-semibold text-white">Graphic Designer</p>
                <p className="mt-0.5 text-sm" style={{ color: "#c0bec8" }}>كهرماء — Qatar General Electricity & Water</p>
                <p className="mt-1 text-xs" style={{ color: "#7352ed" }}>Full-time · Aug 2025 – Present</p>

                <div className="my-4 h-px" style={{ background: "rgba(103,61,230,0.2)" }} />

                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Core tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Photoshop", "Illustrator", "InDesign", "Figma", "XD"].map((t) => (
                    <span key={t} className="rounded-lg border px-2.5 py-1 text-xs text-white"
                      style={{ borderColor: "rgba(161,155,255,0.15)", background: "rgba(161,155,255,0.05)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border px-4 py-3"
                style={{ borderColor: "rgba(103,61,230,0.2)", background: "rgba(103,61,230,0.06)" }}>
                <p className="text-sm" style={{ color: "#c0bec8" }}>
                  <span style={{ color: "#a19bff" }}>🏆 </span>
                  Logo competition winner — Ministry of Telecom, Sudan
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(103,61,230,0.3), transparent)" }} />
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>About</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">The designer behind the pixels</h2>
              </div>
              <p className="text-pretty leading-relaxed" style={{ color: "#c0bec8" }}>
                I&apos;m a Sudanese graphic designer based in Doha, Qatar, with a Bachelor&apos;s degree in
                Computer Engineering and over 7 years of hands-on experience in visual design. That
                technical foundation shapes how I approach design — systematically, efficiently, and
                with an eye for what works beyond aesthetics.
              </p>
              <p className="text-pretty leading-relaxed" style={{ color: "#c0bec8" }}>
                I&apos;ve worked across startups, publishers, and large public institutions — always
                bringing the same commitment: clear creative direction, realistic timelines, and
                production-ready deliverables.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="mailto:hello@alixali.com"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
                  style={{ background: "linear-gradient(135deg, #7352ed, #673de6)" }}>
                  Get in touch
                </a>
                <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium transition-all hover:border-[rgba(161,155,255,0.4)] hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "#c0bec8", background: "rgba(255,255,255,0.03)" }}>
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
                <div key={item.label} className="rounded-2xl border p-5"
                  style={{ borderColor: "rgba(103,61,230,0.15)", background: "rgba(103,61,230,0.04)" }}>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "#a19bff" }}>{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(103,61,230,0.3), transparent)" }} />
        </div>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Experience</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Work history</h2>
            </div>
            <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-white" style={{ color: "#a19bff" }}>
              LinkedIn →
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {experience.map((job) => (
              <article key={job.role + job.org} className="rounded-2xl border p-6 transition-colors"
                style={{
                  borderColor: job.current ? "rgba(103,61,230,0.35)" : "rgba(103,61,230,0.12)",
                  background: job.current ? "rgba(103,61,230,0.08)" : "rgba(103,61,230,0.03)",
                }}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-white">{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{ background: "rgba(103,61,230,0.25)", color: "#a19bff" }}>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ color: job.current ? "#a19bff" : "#c0bec8" }}>{job.org}</p>
                    <p className="text-xs" style={{ color: "rgba(192,190,200,0.6)" }}>{job.location}</p>
                  </div>
                  <p className="shrink-0 text-sm" style={{ color: "#7352ed" }}>{job.dates}</p>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#c0bec8" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#673de6" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(103,61,230,0.3), transparent)" }} />
        </div>

        {/* ── SKILLS ── */}
        <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Skills</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">What I bring to the table</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Disciplines */}
            <div className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(103,61,230,0.15)", background: "rgba(103,61,230,0.04)" }}>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Design disciplines</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {designSkills.map((s) => (
                  <span key={s} className="rounded-xl border px-3 py-1.5 text-sm text-white"
                    style={{ borderColor: "rgba(161,155,255,0.15)", background: "rgba(161,155,255,0.05)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(103,61,230,0.15)", background: "rgba(103,61,230,0.04)" }}>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Tools & software</p>
              <div className="mt-5 flex flex-col gap-4">
                {tools.map((t) => (
                  <div key={t.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-white">{t.name}</span>
                      <span style={{ color: "#a19bff" }}>{t.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(103,61,230,0.15)" }}>
                      <div className="h-full rounded-full"
                        style={{ width: `${t.level}%`, background: "linear-gradient(90deg, #7352ed, #673de6)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(103,61,230,0.3), transparent)" }} />
        </div>

        {/* ── WORK ── */}
        <section id="work" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Selected projects</h2>
            </div>
            <p className="text-sm" style={{ color: "rgba(192,190,200,0.5)" }}>Coming soon</p>
          </div>

          <WorkGallery />
        </section>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(103,61,230,0.3), transparent)" }} />
        </div>

        {/* ── CONTACT ── */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="overflow-hidden rounded-3xl border p-10 sm:p-14"
            style={{ borderColor: "rgba(103,61,230,0.25)", background: "linear-gradient(135deg, rgba(103,61,230,0.12) 0%, rgba(18,9,42,0.6) 100%)" }}>
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a19bff" }}>Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something together
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "#c0bec8" }}>
                Have a project in mind? Whether it&apos;s a brand identity, a campaign, or a visual
                system — I&apos;d love to hear about it.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href="mailto:hello@alixali.com"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: "linear-gradient(135deg, #7352ed, #673de6)", boxShadow: "0 4px 24px rgba(103,61,230,0.4)" }}>
                  hello@alixali.com
                </a>
                <a href="https://www.linkedin.com/in/alixalicom" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-xl border px-7 py-3 text-sm font-medium text-white transition-all hover:border-[rgba(161,155,255,0.4)] hover:bg-[rgba(103,61,230,0.1)]"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8" style={{ borderColor: "rgba(103,61,230,0.12)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs sm:flex-row sm:px-8"
          style={{ color: "rgba(192,190,200,0.35)" }}>
          <p>© {new Date().getFullYear()} Ali Ali — Pixels Engineer</p>
          <p>Graphic Designer · Doha, Qatar</p>
        </div>
      </footer>

    </div>
  );
}
