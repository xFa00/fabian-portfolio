"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const content: Record<
  "es" | "en",
  {
    sectionLabel: string;
    title: string;
    introduction: string;
    groups: SkillGroup[];
  }
> = {
  es: {
    sectionLabel: "04. COMPETENCIAS",
    title: "Stack técnico",
    introduction:
      "Tecnologías, herramientas y áreas de conocimiento utilizadas en proyectos académicos, profesionales y personales.",

    groups: [
      {
        title: "Lenguajes y scripting",
        description:
          "Lenguajes utilizados para automatización, análisis de datos, desarrollo backend y creación de soluciones técnicas.",
        skills: [
          "Python",
          "SQL",
          "TypeScript",
          "JavaScript",
          "Java",
          "Bash",
          "PowerShell",
          "YAML",
        ],
      },

      {
        title: "Ciberseguridad",
        description:
          "Herramientas y conocimientos relacionados con análisis de vulnerabilidades, seguridad ofensiva y defensa.",
        skills: [
          "Nmap",
          "Nuclei",
          "Tenable",
          "OWASP Top 10",
          "MITRE ATT&CK",
          "Threat Hunting",
          "Gestión de vulnerabilidades",
          "Análisis de riesgos",
        ],
      },

      {
        title: "Cloud e infraestructura",
        description:
          "Experiencia con servicios cloud, automatización de infraestructura, sistemas Linux y administración técnica.",
        skills: [
          "AWS",
          "Azure",
          "Azure Arc",
          "Ansible",
          "Docker",
          "Linux",
          "Route 53",
          "BlueCat",
          "CI/CD",
        ],
      },

      {
        title: "Desarrollo",
        description:
          "Tecnologías para construir APIs, aplicaciones web, servicios backend y soluciones modulares.",
        skills: [
          "FastAPI",
          "Next.js",
          "Node.js",
          "Spring Boot",
          ".NET",
          "REST APIs",
          "Git",
          "GitHub",
          "PostgreSQL",
          "MySQL",
        ],
      },

      {
        title: "Datos y analítica",
        description:
          "Herramientas para procesamiento, limpieza, análisis, modelado y visualización de datos.",
        skills: [
          "Pandas",
          "NumPy",
          "Jupyter",
          "Power BI",
          "Tableau",
          "Machine Learning",
          "Data Cleaning",
          "Data Visualization",
        ],
      },

      {
        title: "Áreas de interés",
        description:
          "Campos en los que actualmente desarrollo conocimientos y proyectos de manera progresiva.",
        skills: [
          "Cloud Security",
          "DevSecOps",
          "AppSec",
          "Purple Team",
          "Threat Intelligence",
          "Security Automation",
          "Pentesting",
          "Detection Engineering",
        ],
      },
    ],
  },

  en: {
    sectionLabel: "04. SKILLS",
    title: "Technical stack",
    introduction:
      "Technologies, tools, and knowledge areas used across academic, professional, and personal projects.",

    groups: [
      {
        title: "Languages and scripting",
        description:
          "Languages used for automation, data analysis, backend development, and technical solution building.",
        skills: [
          "Python",
          "SQL",
          "TypeScript",
          "JavaScript",
          "Java",
          "Bash",
          "PowerShell",
          "YAML",
        ],
      },

      {
        title: "Cybersecurity",
        description:
          "Tools and knowledge related to vulnerability analysis, offensive security, and defensive operations.",
        skills: [
          "Nmap",
          "Nuclei",
          "Tenable",
          "OWASP Top 10",
          "MITRE ATT&CK",
          "Threat Hunting",
          "Vulnerability Management",
          "Risk Analysis",
        ],
      },

      {
        title: "Cloud and infrastructure",
        description:
          "Experience with cloud services, infrastructure automation, Linux systems, and technical administration.",
        skills: [
          "AWS",
          "Azure",
          "Azure Arc",
          "Ansible",
          "Docker",
          "Linux",
          "Route 53",
          "BlueCat",
          "CI/CD",
        ],
      },

      {
        title: "Development",
        description:
          "Technologies used to build APIs, web applications, backend services, and modular solutions.",
        skills: [
          "FastAPI",
          "Next.js",
          "Node.js",
          "Spring Boot",
          ".NET",
          "REST APIs",
          "Git",
          "GitHub",
          "PostgreSQL",
          "MySQL",
        ],
      },

      {
        title: "Data and analytics",
        description:
          "Tools for data processing, cleaning, analysis, modeling, and visualization.",
        skills: [
          "Pandas",
          "NumPy",
          "Jupyter",
          "Power BI",
          "Tableau",
          "Machine Learning",
          "Data Cleaning",
          "Data Visualization",
        ],
      },

      {
        title: "Areas of interest",
        description:
          "Fields in which I am currently developing knowledge and building projects progressively.",
        skills: [
          "Cloud Security",
          "DevSecOps",
          "AppSec",
          "Purple Team",
          "Threat Intelligence",
          "Security Automation",
          "Pentesting",
          "Detection Engineering",
        ],
      },
    ],
  },
};

export default function Skills() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="skills"
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {text.groups.map((group, index) => (
            <Reveal
              key={group.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 120}
            >
              <article className="group relative h-full overflow-hidden border border-neutral-900 bg-neutral-950/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/40 md:p-7">
                <div className="absolute right-4 top-3 font-mono text-5xl font-bold text-neutral-900 transition duration-300 group-hover:text-green-400/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <h3 className="max-w-[80%] font-mono text-xl font-bold leading-7 text-white">
                    {group.title}
                  </h3>

                  <p className="mt-4 font-mono text-sm leading-7 text-neutral-600">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-neutral-800 bg-black px-3 py-1.5 font-mono text-[11px] text-neutral-500 transition duration-300 group-hover:border-green-400/20 group-hover:text-neutral-400"
                      >
                        <span className="mr-1 text-green-400/70">+</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}