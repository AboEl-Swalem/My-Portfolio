"use client";

import { useState, useRef, useEffect } from "react";

type HistoryEntry = {
  id: number;
  command: string;
  output: React.ReactNode;
};

const PROJECTS = [
  {
    key: "medguard",
    name: "MedGuard AI",
    tag: "Healthcare • RAG",
    description:
      "AI-powered medication safety checker for pharmacists using RAG over real FDA drug label data to catch interactions, dosage issues, and allergy conflicts in seconds.",
    stack: "JavaScript • RAG • FDA Data • AI",
    repo: "https://github.com/AboEl-Swalem/MedGuard-AI",
  },
  {
    key: "mars",
    name: "Not Quite Mars",
    tag: "NASA Space Apps 2026",
    description:
      "Finds Earth analogs for the Moon by matching terrain slope. Click any point on the lunar map to locate the closest-matching terrain in Turkey's Marmara region.",
    stack: "Python • Jupyter • Geospatial • Data Analysis",
    repo: "https://github.com/AboEl-Swalem/Not-Quite-Mars-",
  },
  {
    key: "cs50",
    name: "CS50 Implementations",
    tag: "Computer Science",
    description:
      "Solutions to Harvard CS50 problem sets covering memory management, data structures, algorithms, and full-stack web fundamentals.",
    stack: "C • Python • HTML • Algorithms",
    repo: "https://github.com/AboEl-Swalem/CS50-2024-Implementations",
  },
];

function renderOutput(rawCmd: string): React.ReactNode {
  const cmd = rawCmd.trim().toLowerCase();

  if (cmd === "help" || cmd === "ls") {
    return (
      <div className="space-y-1.5 text-zinc-300">
        <p className="text-zinc-400">Available commands:</p>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <p>
            <span className="text-emerald-400">about</span> — Who I am &amp;
            what I build
          </p>
          <p>
            <span className="text-emerald-400">projects</span> — Featured
            software &amp; AI builds
          </p>
          <p>
            <span className="text-emerald-400">skills</span> — Languages,
            frameworks &amp; tools
          </p>
          <p>
            <span className="text-emerald-400">highlights</span> — Milestones
            &amp; hackathons
          </p>
          <p>
            <span className="text-emerald-400">contact</span> — GitHub &amp;
            LinkedIn links
          </p>
          <p>
            <span className="text-emerald-400">clear</span> — Clear terminal
            output
          </p>
        </div>
      </div>
    );
  }

  if (cmd === "about" || cmd === "whoami") {
    return (
      <div className="space-y-2 text-zinc-300">
        <p className="font-semibold text-white">
          Abd Al-Rahman Salem — Software &amp; AI Developer
        </p>
        <p className="leading-relaxed text-zinc-400">
          I build practical AI applications, geospatial analysis tools, and
          clean web software. Whether designing retrieval-augmented healthcare
          engines or analyzing lunar elevation data for NASA Space Apps, I focus
          on clarity, speed, and real-world utility.
        </p>
        <p className="text-xs text-emerald-400">
          Status: Open to Software Engineering &amp; AI Opportunities
        </p>
      </div>
    );
  }

  if (cmd === "projects" || cmd === "ls projects") {
    return (
      <div className="space-y-3">
        {PROJECTS.map((p, idx) => (
          <div
            key={p.key}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">0{idx + 1}</span>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-400 underline-offset-4 hover:underline"
                >
                  {p.name} ↗
                </a>
              </div>
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
                {p.tag}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {p.description}
            </p>
            <p className="mt-2 text-xs text-zinc-500">{p.stack}</p>
          </div>
        ))}
      </div>
    );
  }

  if (cmd === "skills" || cmd === "stack") {
    return (
      <div className="space-y-2 text-zinc-300">
        <p>
          <span className="text-emerald-400">Languages:</span> Python,
          JavaScript, TypeScript, C, HTML/CSS
        </p>
        <p>
          <span className="text-emerald-400">Frameworks &amp; Web:</span> React,
          Next.js, Node.js, Tailwind CSS
        </p>
        <p>
          <span className="text-emerald-400">AI &amp; Data:</span> RAG
          Pipelines, LLMs, Jupyter, Geospatial Analysis
        </p>
        <p>
          <span className="text-emerald-400">Tools:</span> Git, GitHub, Linux,
          REST APIs
        </p>
      </div>
    );
  }

  if (cmd === "highlights") {
    return (
      <ul className="space-y-1.5 text-zinc-300">
        <li>
          <span className="text-emerald-400">[+]</span> NASA Space Apps 2026 —
          Lunar-to-Earth terrain analog matcher
        </li>
        <li>
          <span className="text-emerald-400">[+]</span> MedGuard AI — RAG
          medication safety engine over FDA drug labels
        </li>
        <li>
          <span className="text-emerald-400">[+]</span> Harvard CS50 — Core C,
          algorithms, memory, and web implementations
        </li>
      </ul>
    );
  }

  if (cmd === "contact" || cmd === "socials") {
    return (
      <div className="space-y-1.5 text-zinc-300">
        <p>
          <span className="text-zinc-500">GitHub:</span>{" "}
          <a
            href="https://github.com/AboEl-Swalem"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 underline-offset-4 hover:underline"
          >
            github.com/AboEl-Swalem ↗
          </a>
        </p>
        <p>
          <span className="text-zinc-500">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/abd-al-rahman-salem"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 underline-offset-4 hover:underline"
          >
            linkedin.com/in/abd-al-rahman-salem ↗
          </a>
        </p>
      </div>
    );
  }

  return (
    <p className="text-rose-400">
      Command not found: <span className="text-zinc-200">{rawCmd}</span>. Type{" "}
      <span className="text-emerald-400">help</span> or click a command below.
    </p>
  );
}

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: 1,
      command: "whoami",
      output: renderOutput("whoami"),
    },
    {
      id: 2,
      command: "projects",
      output: renderOutput("projects"),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const runCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        command: trimmed,
        output: renderOutput(trimmed),
      },
    ]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const quickCommands = [
    "help",
    "about",
    "projects",
    "skills",
    "highlights",
    "contact",
    "clear",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-8 font-mono text-sm text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Terminal Window */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl shadow-black/60"
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-zinc-400">
            abdalrahman@portfolio: ~/My-Portfolio
          </span>
          <a
            href="https://github.com/AboEl-Swalem"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-400 transition hover:text-emerald-400"
          >
            GitHub ↗
          </a>
        </div>

        {/* Terminal Scrollable Body */}
        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-6">
          <div className="text-xs text-zinc-500">
            Welcome to Abd Al-Rahman&apos;s interactive portfolio terminal. Type{" "}
            <span className="text-emerald-400">help</span> or click a command
            below.
          </div>

          {history.map((entry) => (
            <div key={entry.id} className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">guest@portfolio:~$</span>
                <span className="font-medium text-white">{entry.command}</span>
              </div>
              <div className="pl-2 sm:pl-4">{entry.output}</div>
            </div>
          ))}

          {/* Active Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              runCommand(input);
            }}
            className="flex items-center gap-2"
          >
            <span className="shrink-0 text-emerald-400">
              guest@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type a command (e.g. help, skills, contact)..."
              aria-label="Terminal command input"
              className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none"
              autoFocus
            />
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Clickable Command Bar */}
        <div className="flex flex-wrap items-center gap-2 border-t border-zinc-800 bg-zinc-950/70 px-4 py-3">
          <span className="mr-1 text-xs text-zinc-500">Quick run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                runCommand(cmd);
              }}
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-400"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
