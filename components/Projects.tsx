"use client";

import AnimatedProgress from "@/components/AnimatedProgress";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  number: string;
  title: string;
  status: string;
  progress: number;
  description: string;
  details: string;
  technologies: string[];
  repository: string;
};

const content: Record<
  "es" | "en",
  {
    sectionLabel: string;
    title: string;
    introduction: string;
    progressLabel: string;
    repositoryAvailable: string;
    repositorySoon: string;
    projects: Project[];
    classified: {
      number: string;
      title: string;
      status: string;
      description: string;
      access: string;
      clearance: string;
    };
  }
> = {
  es: {
    sectionLabel: "03. PROYECTOS",
    title: "Proyectos en construcción",
    introduction:
      "Proyectos personales desarrollados.",
    progressLabel: "progreso_del_proyecto",
    repositoryAvailable: "Ver repositorio",
    repositorySoon: "Repositorio próximamente",

    projects: [
      {
        number: "01",
        title: "Urkunina Scan",
        status: "EN PROGRESO",
        progress: 18,
        description:
          "Plataforma modular para descubrir, correlacionar, priorizar y reportar vulnerabilidades en pequeñas organizaciones.",
        details:
          "Permitirá analizar direcciones IP, dominios, URLs y repositorios mediante herramientas como Nmap y Nuclei, correlacionando hallazgos y organizándolos según severidad, exposición y contexto.",
        technologies: [
          "Python",
          "FastAPI",
          "Nmap",
          "Nuclei",
          "PostgreSQL",
          "Docker",
        ],
        repository: "",
      },

      {
        number: "02",
        title: "Data Volcánica",
        status: "EN PROGRESO",
        progress: 10,
        description:
          "Plataforma independiente de análisis de datos enfocada en Deportivo Pasto y el fútbol colombiano.",
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
        repository: "",
      },
    ],

    classified: {
      number: "03",
      title: "Proyecto clasificado",
      status: "PRÓXIMAMENTE",
      description:
        "Nueva iniciativa en fase de exploración. Los detalles serán publicados cuando comience su desarrollo.",
      access: "[ ACCESO RESTRINGIDO ]",
      clearance: "AUTORIZACIÓN_REQUERIDA",
    },
  },

  en: {
    sectionLabel: "03. PROJECTS",
    title: "Projects in development",
    introduction:
      "Personal projects developed progressively.",
    progressLabel: "project_progress",
    repositoryAvailable: "View repository",
    repositorySoon: "Repository coming soon",

    projects: [
      {
        number: "01",
        title: "Urkunina Scan",
        status: "IN PROGRESS",
        progress: 18,
        description:
          "A modular platform designed to discover, correlate, prioritize, and report vulnerabilities for small organizations.",
        details:
          "It will analyze IP addresses, domains, URLs, and repositories using tools such as Nmap and Nuclei, correlating findings and organizing them according to severity, exposure, and context.",
        technologies: [
          "Python",
          "FastAPI",
          "Nmap",
          "Nuclei",
          "PostgreSQL",
          "Docker",
        ],
        repository: "",
      },

      {
        number: "02",
        title: "Data Volcánica",
        status: "IN PROGRESS",
        progress: 10,
        description:
          "An independent data analytics platform initially focused on Deportivo Pasto and Colombian football.",
        details:
          "The project aims to transform statistics, results, and sports data into visualizations, analyses, and accessible content for supporters, journalists, and football communities.",
        technologies: [
          "Python",
          "Pandas",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Data Visualization",
        ],
        repository: "",
      },
    ],

    classified: {
      number: "03",
      title: "Classified project",
      status: "COMING SOON",
      description:
        "A new initiative currently in the exploration phase. Details will be published once development begins.",
      access: "[ RESTRICTED ACCESS ]",
      clearance: "CLEARANCE_REQUIRED",
    },
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="projects"
      className="border-t border-green-500/10 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal direction="left">
          <div>
            <p className="font-mono text-sm text-green-400">
              {text.sectionLabel}
            </p>

            <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
              {text.title}
            </h2>

            <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-500 md:text-base">
              {text.introduction}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {text.projects.map((project, index) => (
            <Reveal
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 220}
            >
              <article
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
                    <AnimatedProgress
                      value={project.progress}
                      delay={index * 250}
                      label={text.progressLabel}
                    />

                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 self-start font-mono text-sm text-neutral-400 transition hover:text-green-400 md:self-end"
                      >
                        {text.repositoryAvailable}
                        <span className="ml-2 text-green-400">↗</span>
                      </a>
                    ) : (
                      <span className="mt-8 self-start font-mono text-sm text-neutral-700 md:self-end">
                        {text.repositorySoon}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}

          <Reveal direction="up" delay={420}>
            <article className="classified-project group relative overflow-hidden border border-dashed border-neutral-800 bg-neutral-950/20 p-6 transition duration-500 hover:border-green-400/40 md:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              <div className="absolute right-5 top-4 font-mono text-5xl font-bold text-neutral-900 transition duration-500 group-hover:text-green-400/10 md:text-7xl">
                {text.classified.number}
              </div>

              <div className="relative flex min-h-48 flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="font-mono text-2xl font-bold text-neutral-500 transition duration-500 group-hover:text-neutral-300 md:text-3xl">
                      {text.classified.title}
                    </h3>

                    <span className="border border-neutral-800 px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-600 transition duration-500 group-hover:border-green-400/30 group-hover:text-green-400">
                      {text.classified.status}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-neutral-700 transition duration-500 group-hover:text-neutral-500">
                    {text.classified.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <p className="font-mono text-xs tracking-[0.2em] text-neutral-800 transition duration-500 group-hover:text-green-400/50 sm:tracking-[0.25em]">
                    {text.classified.access}
                  </p>

                  <span className="hidden font-mono text-[10px] text-neutral-900 opacity-0 transition duration-500 group-hover:text-green-400/40 group-hover:opacity-100 sm:inline">
                    {text.classified.clearance}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}