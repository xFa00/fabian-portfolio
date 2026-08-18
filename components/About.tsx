"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    sectionLabel: "01. SOBRE MÍ",
    title: "Perfil profesional",
    paragraphs: [
      "Ingeniero de Sistemas e Informática con experiencia en infraestructura tecnológica, automatización, ciberseguridad, análisis de datos y servicios cloud.",
      "Enfoco mi perfil en el diseño y fortalecimiento de soluciones seguras, integrando conocimientos de seguridad cloud, DevSecOps, AppSec, threat hunting y automatización de procesos de seguridad.",
      "Me interesa comprender los sistemas desde su arquitectura, operación y superficie de ataque, identificar riesgos y contribuir a la construcción de soluciones robustas, automatizadas y seguras, combinando perspectivas defensivas y ofensivas.",
    ],
    educationLabel: "educación",
    degree: "Ingeniería de Sistemas e Informática",
    university: "Universidad Nacional de Colombia.",
    period: "2020 — 2026",
    location: "Medellín, Colombia",
    focusLabel: "enfoque_actual",
    focus: "Ciberseguridad · Cloud · Automatización · Desarrolllo ",
    profileLabel: "perfil",
    profileValue: "Ingeniero de Sistemas",
  },

  en: {
    sectionLabel: "01. ABOUT",
    title: "Professional profile",
    paragraphs: [
      "Systems and Computer Engineer with experience in technology infrastructure, automation, cybersecurity, data analysis, and cloud services.",
      "I focus my professional profile on designing and strengthening secure solutions, integrating knowledge of cloud security, DevSecOps, AppSec, threat hunting, and security process automation.",
      "I am interested in understanding systems from the perspective of architecture, operations, and attack surface, identifying risks, and contributing to the development of robust, automated, and secure solutions by combining defensive and offensive approaches.",
    ],
    educationLabel: "education",
    degree: "Systems and Computer Engineering",
    university: "National University of Colombia. ",
    period: "2020 — 2026",
    location: "Medellín, Colombia",
    focusLabel: "current_focus",
    focus: "Cybersecurity · Cloud · Automation · Development",
    profileLabel: "profile",
    profileValue: "Systems Engineer",
  },
};

export default function About() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="about"
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
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <Reveal direction="left" delay={150}>
            <div className="space-y-6">
              {text.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-3xl font-mono text-sm leading-8 text-neutral-400 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={300}>
            <aside className="relative overflow-hidden border border-neutral-900 bg-neutral-950/40 p-6 md:p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 bg-green-400/[0.025]"
              />

              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                  {text.educationLabel}
                </p>

                <h3 className="mt-5 font-mono text-xl font-bold leading-8 text-white">
                  {text.degree}
                </h3>

                <p className="mt-3 font-mono text-sm leading-6 text-neutral-500">
                  {text.university}
                </p>

                <div className="mt-6 space-y-2 border-l border-green-400/30 pl-4 font-mono text-xs leading-6 text-neutral-600">
                  <p>{text.period}</p>
                  <p>{text.location}</p>
                </div>

                <div className="mt-8 space-y-5 border-t border-neutral-900 pt-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-700">
                      {text.profileLabel}
                    </p>

                    <p className="mt-2 font-mono text-sm text-neutral-300">
                      {text.profileValue}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-700">
                      {text.focusLabel}
                    </p>

                    <p className="mt-2 font-mono text-sm text-neutral-300">
                      {text.focus}
                    </p>
                  </div>

                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-green-400/50 via-green-400/10 to-transparent" />
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}