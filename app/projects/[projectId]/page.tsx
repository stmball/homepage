import Link from "next/link";
import Navbar from "@/components/Navbar";
import projectInfo from "@/public/project_info.json";

interface Project {
  id: number;
  title?: string;
  name?: string;
  description?: string;
  problem?: string;
  solution?: string;
  facts?: Array<
    | string
    | {
        label?: string;
        name?: string;
        value?: string;
        stat?: string;
      }
  >;
  repository?: string;
  screenshot?: string;
  technologies?: string[] | string;
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const projects = projectInfo as Project[];
  const project = projects.find((p) => String(p?.id) === String(projectId));

  if (!project) {
    return (
      <div className="bg-linear-to-bl from-gray-950 to-slate-950 min-h-screen text-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 pt-40">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mt-2 text-gray-400">We couldn&apos;t find that project.</p>
          <Link
            href="/projects"
            className="mt-6 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const title = project.title || project.name;
  const subtitle = project.description || null;
  const problem = project.problem || null;
  const solution = project.solution || null;
  const metrics = Array.isArray(project.facts) ? project.facts : null;
  const github = project.repository || null;
  const screenshot = project.screenshot || null;
  const techStackRaw = project.technologies || null;

  return (
    <div className="bg-linear-to-bl from-gray-950 to-slate-950 min-h-screen text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-48 pb-20">
        {/* Header */}
        <header className="max-w-2xl">
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-3 text-l text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-400 transition"
            >
              View Code on GitHub
            </a>
          )}
        </header>

        {/* Body */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content: Problem, Solution, Tech stack */}
          <div className="lg:col-span-2 space-y-8">
            {problem && (
              <section className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  Problem
                </h2>
                <p className="mt-3 text-gray-300 leading-relaxed font-light">
                  {problem}
                </p>
              </section>
            )}
            {solution && (
              <section className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  Solution
                </h2>
                <p className="mt-3 text-gray-300 leading-relaxed font-light">
                  {solution}
                </p>
              </section>
            )}
            {techStackRaw && (
              <section className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  Tech stack
                </h2>
                {Array.isArray(techStackRaw) ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {techStackRaw.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 text-gray-100 text-sm border border-white/10"
                      >
                        {typeof t === "string" ? t : (t as any)?.name || ""}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-gray-300 leading-relaxed font-light">
                    {String(techStackRaw)}
                  </p>
                )}
              </section>
            )}
          </div>

          {/* Right sidebar: Metrics */}
          {Array.isArray(metrics) && metrics.length > 0 && (
            <aside className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Key Metrics
              </h2>
              {metrics.map((m, idx) => {
                const isObj = m && typeof m === "object";
                const label = isObj
                  ? (m as any).label || (m as any).name
                  : null;
                const value = isObj
                  ? (m as any).value || (m as any).stat
                  : null;
                const text = !isObj ? String(m) : null;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    {value ? (
                      <div>
                        <div className="text-3xl font-bold text-gray-100">
                          {value}
                        </div>
                        {label && (
                          <div className="mt-1 text-sm text-gray-400">
                            {label}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-300">{text || label}</div>
                    )}
                  </div>
                );
              })}
            </aside>
          )}

          {/* Full-width screenshot below content */}
          <div className="lg:col-span-3">
            <section>
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-md">
                {screenshot ? (
                  <img
                    src={screenshot}
                    alt={`${title} screenshot`}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video flex items-center justify-center text-gray-400 text-sm">
                    Solution screenshot coming soon
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
