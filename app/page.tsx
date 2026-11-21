export default function Home() {
  const projects = [
    {
      title: "MedGuard AI",
      badge: "Healthcare • RAG",
      description:
        "AI-powered medication safety checker for pharmacists using RAG over real FDA drug label data to catch interactions, dosage issues, and allergy conflicts in seconds.",
      stack: ["JavaScript", "RAG", "FDA Data", "AI"],
      repo: "https://github.com/AboEl-Swalem/MedGuard-AI",
      featured: true,
    },
    {
      title: "Not Quite Mars",
      badge: "NASA Space Apps 2026",
      description:
        "Finds Earth analogs for the Moon by matching terrain slope. Click any point on the lunar map to locate the closest-matching terrain in Turkey's Marmara region.",
      stack: ["Python", "Jupyter", "Geospatial", "Data Analysis"],
      repo: "https://github.com/AboEl-Swalem/Not-Quite-Mars-",
      featured: true,
    },
    {
      title: "CS50 Implementations",
      badge: "Computer Science",
      description:
        "Solutions to Harvard CS50 problem sets covering memory management, data structures, algorithms, and full-stack web fundamentals.",
      stack: ["C", "Python", "HTML", "Algorithms"],
      repo: "https://github.com/AboEl-Swalem/CS50-2024-Implementations",
      featured: false,
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "RAG & LLMs",
    "C",
    "Git & GitHub",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        {/* Top Navigation */}
        <header className="mb-12 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-zinc-100"
          >
            Abd Al-Rahman Salem
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#projects" className="transition hover:text-zinc-100">
              Projects
            </a>
            <a href="#about" className="transition hover:text-zinc-100">
              About
            </a>
            <a
              href="https://github.com/AboEl-Swalem"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
            >
              GitHub ↗
            </a>
          </nav>
        </header>

        {/* Hero Bento Section */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Main Intro Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 md:col-span-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to Software & AI Opportunities
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Hi, I&apos;m Abd Al-Rahman.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                Software developer building practical AI applications,
                geospatial tools, and clean web software that solve real-world
                problems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Explore Projects
              </a>
              <a
                href="https://www.linkedin.com/in/abd-al-rahman-salem"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column Status & Location Cards */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Current Focus
              </span>
              <div className="mt-4">
                <p className="text-lg font-semibold text-zinc-100">
                  Applied AI & Full-Stack
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  RAG pipelines, geospatial data analysis, and modern web apps.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Highlights
              </span>
              <div className="mt-4 space-y-2 text-sm text-zinc-300">
                <p>🚀 NASA Space Apps 2026</p>
                <p>💊 FDA Drug Safety RAG Engine</p>
                <p>🎓 Harvard CS50 Alumni</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Bento Grid */}
        <section id="projects" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Selected Work
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Systems, experiments, and problem-solving builds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900 ${
                  !project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-400">
                      {project.badge}
                    </span>
                    <span className="text-sm text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-emerald-400 transition">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About & Tech Stack Bento Row */}
        <section id="about" className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-7 md:col-span-2">
            <h2 className="text-lg font-semibold text-white">About Me</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              I&apos;m Abd Al-Rahman Salem, a software developer passionate about
              turning complex technical ideas into clean, working software.
              Whether I&apos;m building retrieval-augmented healthcare tools or
              analyzing lunar elevation data for NASA Space Apps, I care about
              clarity, speed, and real-world utility.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-7">
            <h2 className="text-lg font-semibold text-white">Core Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="mt-14 flex flex-col items-start justify-between gap-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-white">
              Let&apos;s build something together.
            </p>
            <p className="text-sm text-zinc-400">
              Reach out for internships, collaborations, or project feedback.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AboEl-Swalem"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abd-al-rahman-salem"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Connect on LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
