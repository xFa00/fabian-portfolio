"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const content: Record<
  "es" | "en",
  {
    sectionLabel: string;
    title: string;
    introduction: string;
    experiences: ExperienceItem[];
    currentLabel: string;
  }
> = {
  es: {
    sectionLabel: "02. EXPERIENCIA",
    title: "Trayectoria profesional",
    introduction:
      "Experiencia en infraestructura tecnológica, automatización, procesamiento de datos y operación de información deportiva en entornos corporativos.",
    currentLabel: "MÁS RECIENTE",

    experiences: [
      {
        company: "Bancolombia",
        role: "Ingeniero de Infraestructura — Práctica profesional",
        period: "Febrero 2026 — Julio 2026",
        location: "Medellín, Colombia",
        description:
          "Participación en procesos de automatización, administración de infraestructura y validación de activos tecnológicos dentro de un entorno empresarial de gran escala.",
        achievements: [
          "Desarrollo y mantenimiento de playbooks en YAML mediante Red Hat Ansible Automation Platform.",
          "Automatización de consultas, validaciones y actualizaciones relacionadas con infraestructura DNS.",
          "Participación en procesos de migración desde Microsoft DNS hacia BlueCat, incluyendo recursos cloud y on-premise.",
          "Procesamiento, depuración y validación de inventarios corporativos mediante Python, pandas y SQL.",
          "Integración y comparación de información sobre servidores, direcciones IP, funciones AWS Lambda y estados operativos.",
          "Apoyo en procesos relacionados con AWS, Azure Arc, Tenable, Route 53, Power BI y automatización técnica.",
        ],
        technologies: [
          "Python",
          "SQL",
          "Ansible",
          "YAML",
          "AWS",
          "Azure Arc",
          "BlueCat",
          "Tenable",
        ],
      },

      {
        company: "Genius Sports",
        role: "Sports Data Operator",
        period: "Octubre 2024 — Diciembre 2025",
        location: "Remoto",
        description:
          "Operación, validación y control de calidad de datos deportivos utilizados en productos tecnológicos y procesos de análisis.",
        achievements: [
          "Recopilación y validación de información deportiva bajo estándares definidos de precisión y consistencia.",
          "Identificación, documentación y reporte de inconsistencias en eventos, equipos y registros deportivos.",
          "Ejecución de controles de calidad sobre información utilizada en productos de datos y modelos tecnológicos.",
          "Coordinación con equipos internacionales para resolver errores y mantener la integridad de los datos.",
        ],
        technologies: [
          "Data Validation",
          "Quality Control",
          "Sports Data",
          "Operational Analysis",
        ],
      },

      {
        company: "Genius Sports",
        role: "Live Analyst Data",
        period: "Abril 2023 — Octubre 2023",
        location: "Remoto",
        description:
          "Registro y análisis de eventos deportivos en tiempo real, siguiendo protocolos operativos y criterios de precisión.",
        achievements: [
          "Seguimiento de partidos y captura de eventos deportivos en plataformas especializadas.",
          "Validación en tiempo real de jugadas, resultados y acontecimientos relevantes.",
          "Cumplimiento de procedimientos operativos bajo condiciones de tiempo limitado.",
          "Reporte de inconsistencias técnicas o diferencias en el seguimiento de los eventos.",
        ],
        technologies: [
          "Live Data",
          "Real-Time Analysis",
          "Data Accuracy",
          "Sports Operations",
        ],
      },
    ],
  },

  en: {
    sectionLabel: "02. EXPERIENCE",
    title: "Professional background",
    introduction:
      "Experience in technology infrastructure, automation, data processing, and sports information operations within corporate environments.",
    currentLabel: "MOST RECENT",

    experiences: [
      {
        company: "Bancolombia",
        role: "Infrastructure Engineer — Professional internship",
        period: "February 2026 — July 2026",
        location: "Medellín, Colombia",
        description:
          "Participation in automation, infrastructure administration, and technology asset validation processes within a large-scale enterprise environment.",
        achievements: [
          "Developed and maintained YAML playbooks using Red Hat Ansible Automation Platform.",
          "Automated queries, validations, and updates related to DNS infrastructure.",
          "Participated in migration processes from Microsoft DNS to BlueCat, including cloud and on-premises resources.",
          "Processed, cleaned, and validated corporate inventories using Python, pandas, and SQL.",
          "Integrated and compared information about servers, IP addresses, AWS Lambda functions, and operational statuses.",
          "Supported processes involving AWS, Azure Arc, Tenable, Route 53, Power BI, and technical automation.",
        ],
        technologies: [
          "Python",
          "SQL",
          "Ansible",
          "YAML",
          "AWS",
          "Azure Arc",
          "BlueCat",
          "Tenable",
        ],
      },

      {
        company: "Genius Sports",
        role: "Sports Data Operator",
        period: "October 2024 — December 2025",
        location: "Remote",
        description:
          "Operation, validation, and quality control of sports data used in technology products and analytical processes.",
        achievements: [
          "Collected and validated sports information according to defined accuracy and consistency standards.",
          "Identified, documented, and reported inconsistencies involving events, teams, and sports records.",
          "Performed quality controls on information used in data products and technology models.",
          "Coordinated with international teams to resolve errors and maintain data integrity.",
        ],
        technologies: [
          "Data Validation",
          "Quality Control",
          "Sports Data",
          "Operational Analysis",
        ],
      },

      {
        company: "Genius Sports",
        role: "Live Data Analyst",
        period: "April 2023 — October 2023",
        location: "Remote",
        description:
          "Real-time recording and analysis of sports events, following operational protocols and accuracy requirements.",
        achievements: [
          "Monitored matches and captured sports events using specialized platforms.",
          "Validated plays, results, and relevant match events in real time.",
          "Followed operational procedures under time-sensitive conditions.",
          "Reported technical inconsistencies or tracking differences during live events.",
        ],
        technologies: [
          "Live Data",
          "Real-Time Analysis",
          "Data Accuracy",
          "Sports Operations",
        ],
      },
    ],
  },
};

export default function Experience() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="experience"
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

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-gradient-to-b from-green-400/60 via-green-400/20 to-transparent md:block"
          />

          <div className="space-y-8 md:space-y-12">
            {text.experiences.map((experience, index) => (
              <Reveal
                key={`${experience.company}-${experience.role}`}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 180}
              >
                <article className="group relative md:pl-12">
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-9 hidden h-4 w-4 rounded-full border bg-black transition duration-300 md:block ${
                      index === 0
                        ? "border-green-400 shadow-[0_0_14px_rgba(34,197,94,0.45)]"
                        : "border-neutral-800 group-hover:border-green-400/60"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        index === 0
                          ? "bg-green-400"
                          : "bg-neutral-800 group-hover:bg-green-400/60"
                      }`}
                    />
                  </div>

                  <div className="relative overflow-hidden border border-neutral-900 bg-neutral-950/40 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-green-400/30 md:p-8">
                    <div className="absolute right-5 top-4 font-mono text-5xl font-bold text-neutral-900/80 transition duration-300 group-hover:text-green-400/[0.07] md:text-7xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative">
                      <div className="flex flex-col gap-5 border-b border-neutral-900 pb-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-mono text-2xl font-bold text-white">
                              {experience.company}
                            </h3>

                            {index === 0 && (
                              <span className="flex items-center gap-2 border border-green-400/30 px-2 py-1 font-mono text-[9px] tracking-[0.15em] text-green-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                                {text.currentLabel}
                              </span>
                            )}
                          </div>

                          <p className="mt-3 max-w-3xl font-mono text-sm leading-6 text-neutral-300 md:text-base">
                            {experience.role}
                          </p>
                        </div>

                        <div className="shrink-0 border-l border-green-400/30 pl-4 font-mono text-xs leading-6 text-neutral-600 lg:text-right">
                          <p>{experience.period}</p>
                          <p>{experience.location}</p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-4xl font-mono text-sm leading-7 text-neutral-500">
                        {experience.description}
                      </p>

                      <div className="mt-7 space-y-4">
                        {experience.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start gap-4"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-green-400/70" />

                            <p className="font-mono text-sm leading-7 text-neutral-400">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-900 pt-6">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border border-neutral-800 bg-black px-3 py-1.5 font-mono text-[11px] text-neutral-600 transition duration-300 group-hover:border-green-400/20 group-hover:text-neutral-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}