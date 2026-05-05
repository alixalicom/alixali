import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-x-hidden px-4">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(103,61,230,0.38) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 85%, rgba(115,82,237,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(103,61,230,0.5), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(115,82,237,0.25), transparent)",
        }}
      />

      <main className="flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #7352ed 0%, #673de6 100%)",
              boxShadow: "0 0 40px rgba(103,61,230,0.4)",
            }}
          >
            <Image
              src="/logo.svg"
              alt="Alixali logo"
              width={48}
              height={48}
              priority
            />
          </div>
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase"
            style={{ color: "#a19bff" }}
          >
            Ali Ali
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-4">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Something{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #a19bff 0%, #673de6 100%)",
              }}
            >
              beautiful
            </span>{" "}
            is coming.
          </h1>
          <p className="text-pretty text-lg leading-relaxed" style={{ color: "#c0bec8" }}>
            A new portfolio is on its way — brand identities, campaigns, and
            thoughtful visual craft. Stay tuned.
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px w-24"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(161,155,255,0.6), transparent)",
          }}
        />

        {/* Contact */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm" style={{ color: "#c0bec8" }}>
            Want to reach out in the meantime?
          </p>
          <a
            href="mailto:hello@alixali.com"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white transition-all"
            style={{
              border: "1px solid rgba(103,61,230,0.35)",
              background: "rgba(103,61,230,0.12)",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(103,61,230,0.25)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(161,155,255,0.5)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(103,61,230,0.12)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(103,61,230,0.35)";
            }}
          >
            hello@alixali.com
          </a>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alixalicom"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-all"
          style={{ color: "#a19bff" }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#cbc8ff")
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#a19bff")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn · alixalicom
        </a>
      </main>

      <footer className="absolute bottom-6 text-xs" style={{ color: "rgba(192,190,200,0.4)" }}>
        © {new Date().getFullYear()} Ali Ali
      </footer>
    </div>
  );
}
