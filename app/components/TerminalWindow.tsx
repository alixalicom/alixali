"use client";

import { useEffect, useRef, useState } from "react";

type LineType = "cmd" | "out" | "blank";

interface Line {
  type: LineType;
  text: string;
}

const SESSION: Line[] = [
  { type: "cmd",   text: "whoami" },
  { type: "out",   text: "ali  # computer-engineer" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "az vm list --output table" },
  { type: "out",   text: "azure-vm-01   Running   East US" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "systemctl status nginx" },
  { type: "out",   text: "● nginx  — active (running) 2h 14m" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "cat progress.log" },
  { type: "out",   text: "AZ-900  ████████░░  in progress" },
  { type: "out",   text: "ITIL v4 ██████░░░░  in progress" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "echo $OPEN_TO_WORK" },
  { type: "out",   text: "true  ·  Doha, Qatar · remote-friendly" },
];

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export default function TerminalWindow() {
  const [lines, setLines]             = useState<Line[]>([]);
  const [cursor, setCursor]           = useState("");
  const [cursorOn, setCursorOn]       = useState(true);
  const cancelRef                     = useRef(false);
  const bottomRef                     = useRef<HTMLDivElement>(null);

  /* Cursor blink */
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 520);
    return () => clearInterval(id);
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, cursor]);

  /* Animation loop */
  useEffect(() => {
    cancelRef.current = false;

    async function run() {
      await sleep(600);
      while (!cancelRef.current) {
        setLines([]);
        setCursor("");

        for (const line of SESSION) {
          if (cancelRef.current) return;

          if (line.type === "blank") {
            await sleep(90);
            setLines((p) => [...p, line]);
            continue;
          }

          if (line.type === "cmd") {
            for (let i = 0; i <= line.text.length; i++) {
              if (cancelRef.current) return;
              setCursor(line.text.slice(0, i));
              await sleep(38 + Math.random() * 28);
            }
            await sleep(380);
            setLines((p) => [...p, line]);
            setCursor("");
            await sleep(55);
          } else {
            await sleep(110);
            setLines((p) => [...p, line]);
          }
        }

        await sleep(2800);
      }
    }

    run();
    return () => { cancelRef.current = true; };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(167, 139, 250, 0.18)",
        background: "rgba(7, 3, 18, 0.96)",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 24px 64px rgba(124, 58, 237, 0.28), inset 0 1px 0 rgba(167, 139, 250, 0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        <span
          className="ml-auto text-[10px]"
          style={{
            color: "rgba(255,255,255,0.22)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          ali@azure-lab — bash
        </span>
      </div>

      {/* Body */}
      <div
        className="h-[220px] overflow-hidden p-4"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        <div className="space-y-0.5 text-xs">
          {lines.map((l, i) =>
            l.type === "blank" ? (
              <div key={i} className="h-2" />
            ) : l.type === "cmd" ? (
              <div key={i} className="flex gap-2">
                <span style={{ color: "#28c840" }}>❯</span>
                <span style={{ color: "#e8e0ff" }}>{l.text}</span>
              </div>
            ) : (
              <div key={i} className="pl-4" style={{ color: "rgba(167, 139, 250, 0.72)" }}>
                {l.text}
              </div>
            )
          )}

          {/* Typing line */}
          <div className="flex items-center gap-2">
            <span style={{ color: "#28c840" }}>❯</span>
            <span style={{ color: "#e8e0ff" }}>{cursor}</span>
            <span
              className="inline-block h-[13px] w-[6px]"
              style={{
                background: "#a78bfa",
                opacity: cursorOn ? 1 : 0,
                transition: "opacity 0.08s",
              }}
            />
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
