const projects = [
  {
    number: "01",
    title: "Urkunina Scan",
    status: "EN PROGRESO",
    progress: 18,
    description:
      "Plataforma modular para descubrir, correlacionar, priorizar y reportar vulnerabilidades en pequeñas organizaciones.",
    details:
      "Permitirá analizar IPs, dominios, URLs y repositorios mediante herramientas como Nmap y Nuclei, correlacionando hallazgos y organizándolos según severidad, exposición y contexto.",
    technologies: [
      "Python",
      "FastAPI",
      "Nmap",
      "Nuclei",
      "PostgreSQL",
      "Docker",
    ],
    repository: "#",
  },
  {
    number: "02",
    title: "Data Volcánica",
    status: "EN PROGRESO",
    progress: 10,
    description:
      "Plataforma independiente de análisis de datos enfocada inicialmente en Deportivo Pasto y el fútbol colombiano.",
    details:
      "El proyecto busca transformar estadísticas, resultados y datos deportivos en visualizaciones, análisis y contenidos comprensibles para aficionados, periodistas y comunidades futboleras.",
    technologies: [
      "Python",
      "Pandas",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Data Visualization",
    ],
    repository: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">
          03. PROYECTOS
        </p>

        <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
          Proyectos en construcción
        </h2>

        <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-500">
          Proyectos personales construidos de manera progresiva para aplicar
          conocimientos de ciberseguridad, desarrollo de software y análisis de
          datos.
        </p>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden border bg-neutral-950/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/60 md:p-8 ${
                index === 0
                  ? "border-green-400/30"
                  : "border-neutral-900"
              }`}
            >
              <div className="absolute right-5 top-4 font-mono text-5xl font-bold text-neutral-900 md:text-7xl">
                {project.number}
              </div>

              <div className="relative grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="font-mono text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <span className="flex items-center gap-2 border border-green-400/30 px-2 py-1 font-mono text-[10px] tracking-widest text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-300">
                    {project.description}
                  </p>

                  <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-neutral-600">
                    {project.details}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-neutral-800 bg-black px-3 py-1.5 font-mono text-xs text-neutral-500 transition group-hover:border-green-400/20 group-hover:text-neutral-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <div>
                    <div className="mb-3 flex items-center justify-between font-mono text-xs">
                      <span className="text-neutral-600">
                        project_progress
                      </span>

                      <span className="text-green-400">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden bg-neutral-900">
                      <div
                        className="h-full bg-green-400 transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <a
                    href={project.repository}
                    className="mt-8 self-start font-mono text-sm text-neutral-400 transition hover:text-green-400 md:self-end"
                  >
                    Ver repositorio
                    <span className="ml-2 text-green-400">↗</span>
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}

          <article className="group relative overflow-hidden border border-dashed border-neutral-800 bg-neutral-950/20 p-6 transition hover:border-green-400/30 md:p-8">
            <div className="absolute right-5 top-4 font-mono text-5xl font-bold text-neutral-900 md:text-7xl">
              03
            </div>

            <div className="relative flex min-h-48 flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="font-mono text-2xl font-bold text-neutral-500 md:text-3xl">
                    Proyecto clasificado
                  </h3>

                  <span className="border border-neutral-800 px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-600">
                    PRÓXIMAMENTE
                  </span>
                </div>

                <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-neutral-700">
                  Nueva iniciativa en fase de exploración. Los detalles serán
                  publicados cuando comience su desarrollo.
                </p>
              </div>

              <p className="mt-10 font-mono text-xs tracking-[0.25em] text-neutral-800">
                [ ACCESS RESTRICTED ]
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}