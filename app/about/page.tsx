import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ali Ali",
  description:
    "Computer Engineer transitioning into IT & Cloud Computing. Full story behind the scenic route.",
};

export default function AboutPage() {
  return (
    <div
      className="relative min-h-full flex flex-col overflow-x-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 65% 45% at 10% -5%, var(--ambient-1) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 50% at 95% 10%, var(--ambient-2) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 55% at 50% 100%, var(--ambient-3) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* Simple header */}
      <header
        className="sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300"
        style={{ borderColor: "var(--border-subtle)", background: "var(--bg-header)" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ background: "#12092a", borderColor: "var(--border)" }}
            >
              <Image src="/logo.svg" alt="Alixali" width={22} height={22} />
            </div>
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "var(--text-primary)" }}
            >
              Ali <span style={{ color: "var(--text-accent)" }}>Ali</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-all hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              background: "var(--btn-ghost-bg)",
              color: "var(--text-secondary)",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        {/* Label */}
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--text-accent)" }}
        >
          About
        </p>

        {/* Title */}
        <h1
          className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
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

        {/* Bio */}
        <div
          className="mt-10 flex flex-col gap-5 text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            I didn&apos;t start as a designer. I started as someone who couldn&apos;t stop taking things apart —
            computers, networks, code — just to understand how they worked.
          </p>
          <p>
            Back in 2016, I taught myself web development and started freelancing for individuals and
            startups. Design came later, not as a passion, but as a necessity — I needed it to improve
            the interfaces I was building. Then something unexpected happened: clients wanted the design
            more than the websites. So I followed the demand, sharpened the skill, and became a
            full-time graphic designer.
          </p>
          <p style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            But I never stopped being a technologist.
          </p>
          <p>
            While designing logos and managing client revisions, I was studying networking, exploring
            Linux servers, managing cPanel environments, and following every major shift in cloud
            infrastructure. I graduated with a degree in Computer Engineering in 2021 — and the gap
            between what I was doing and what I was capable of never stopped bothering me.
          </p>
          <p>
            For years I explored every direction: cybersecurity, data analysis, full-stack development,
            cloud architecture. Some call that scattered. I call it building a map — because today I can
            see the full picture of how technology fits together in a way that specialists often
            can&apos;t.
          </p>
          <p style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            Now I&apos;m making the deliberate move I should have made sooner.
          </p>
          <p>
            I&apos;m transitioning into IT and Cloud Computing — not as a beginner stumbling into a new
            field, but as someone with a decade of fragmented, self-driven technical experience finally
            moving in one focused direction. I bring something rare to IT: deep technical curiosity, an
            eye for communication and clarity, and the ability to understand both the infrastructure and
            the humans who use it.
          </p>
          <p>
            I&apos;m currently preparing for Microsoft Azure Fundamentals (AZ-900) and ITIL Foundation
            (Version 5) — and this is only the beginning.
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "var(--bg-primary)",
              boxShadow: "0 4px 24px var(--glow)",
            }}
          >
            Let&apos;s Connect →
          </Link>
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
            style={{
              borderColor: "var(--btn-ghost-border)",
              background: "var(--btn-ghost-bg)",
              color: "var(--text-primary)",
            }}
          >
            View My Skills
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p
            className="text-center text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()} Ali Ali — A Technologist Who Took the Scenic Route.
          </p>
        </div>
      </footer>
    </div>
  );
}
