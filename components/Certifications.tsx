"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  status: "completed" | "progress";
  credentialUrl?: string;
  description: string;
  skills: string[];
};

const content: Record<
  "es" | "en",
  {
    sectionLabel: string;
    title: string;
    introduction: string;
    completedLabel: string;
    progressLabel: string;
    credentialLabel: string;
    unavailableLabel: string;
    certifications: Certification[];
  }
> = {
  es: {
    sectionLabel: "05. CERTIFICACIONES",
    title: "Formación y certificaciones",
    introduction:
      "Certificaciones, cursos y rutas de aprendizaje relacionadas con programación, datos, redes, cloud y ciberseguridad.",
    completedLabel: "COMPLETADO",
    progressLabel: "EN PREPARACIÓN",
    credentialLabel: "Ver credencial",
    unavailableLabel: "Credencial no disponible",

    certifications: [
      {
        title: "JavaScript Essentials 1",
        issuer: "Cisco Networking Academy",
        year: "2024",
        status: "completed",
        credentialUrl: "https://www.credly.com/badges/72a41c12-6bf0-47e1-95a1-ffbafebe91f1",
        description:
          "Fundamentos de programación con JavaScript, estructuras de control, funciones, objetos y resolución de problemas.",
        skills: [
          "JavaScript",
          "Programming Logic",
          "Functions",
          "Objects",
        ],
      },
      {
        title: "Applied Machine Learning in Python",
        issuer: "Coursera",
        year: "2024",
        status: "completed",
        credentialUrl: "https://www.coursera.org/share/601b9b05592b8a5b8a91e18bcfe03df4",
        description:
          "Aplicación de técnicas de aprendizaje automático mediante Python y librerías especializadas para clasificación, regresión y evaluación de modelos.",
        skills: [
          "Python",
          "Machine Learning",
          "Scikit-learn",
          "Model Evaluation",
        ],
      },
      {
        title: "Introduction to Data Science in Python",
        issuer: "Coursera",
        year: "2022",
        status: "completed",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/FUY8VBZWQS67",
        description:
          "Introducción al procesamiento, limpieza, transformación y análisis de datos utilizando Python y pandas.",
        skills: [
          "Python",
          "Pandas",
          "Data Cleaning",
          "Data Analysis",
        ],
      },
      {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        year: "2025",
        status: "completed",
        credentialUrl: "https://www.credly.com/badges/dea3bbe2-5240-4ab0-918b-90c27249438e/public_url",
        description:
          "Fundamentos de redes, direccionamiento IP, protocolos, dispositivos de red y comunicación entre sistemas.",
        skills: [
          "Networking",
          "IPv4",
          "IPv6",
          "Cisco",
          "Network Fundamentals",
        ],
      },
      {
        title: "Google Cloud Computing Foundations",
        issuer: "Google Cloud",
        year: "2025",
        status: "completed",
        credentialUrl: "https://www.skills.google/public_profiles/d6802c34-c534-4620-960a-48ac79df0f4e/badges/20506940",
        description:
          "Fundamentos de computación en la nube, servicios de Google Cloud, infraestructura, redes y almacenamiento.",
        skills: [
          "Google Cloud",
          "Cloud Computing",
          "Infrastructure",
          "Storage",
        ],
      },
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2026",
        status: "progress",
        description:
          "Preparación en fundamentos de AWS, arquitectura cloud, seguridad, facturación, servicios y modelo de responsabilidad compartida.",
        skills: [
          "AWS",
          "Cloud Concepts",
          "Security",
          "Billing",
          "Architecture",
        ],
      },
      {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        year: "2026",
        status: "progress",
        description:
          "Preparación en fundamentos de inteligencia artificial, machine learning, IA generativa y servicios de AWS relacionados.",
        skills: [
          "Artificial Intelligence",
          "Machine Learning",
          "Generative AI",
          "AWS AI Services",
        ],
      },
    ],
  },

  en: {
    sectionLabel: "05. CERTIFICATIONS",
    title: "Training and certifications",
    introduction:
      "Certifications, courses, and learning paths related to programming, data, networking, cloud computing, and cybersecurity.",
    completedLabel: "COMPLETED",
    progressLabel: "IN PREPARATION",
    credentialLabel: "View credential",
    unavailableLabel: "Credential unavailable",

    certifications: [
      {
        title: "JavaScript Essentials 1",
        issuer: "Cisco Networking Academy",
        year: "2024",
        status: "completed",
        credentialUrl: "https://www.credly.com/badges/72a41c12-6bf0-47e1-95a1-ffbafebe91f1",
        description:
          "Programming fundamentals using JavaScript, including control structures, functions, objects, and problem solving.",
        skills: [
          "JavaScript",
          "Programming Logic",
          "Functions",
          "Objects",
        ],
      },
      {
        title: "Applied Machine Learning in Python",
        issuer: "Coursera",
        year: "2024",
        status: "completed",
        credentialUrl: "https://www.coursera.org/share/601b9b05592b8a5b8a91e18bcfe03df4",
        description:
          "Application of machine learning techniques using Python and specialized libraries for classification, regression, and model evaluation.",
        skills: [
          "Python",
          "Machine Learning",
          "Scikit-learn",
          "Model Evaluation",
        ],
      },
      {
        title: "Introduction to Data Science in Python",
        issuer: "Coursera",
        year: "2022",
        status: "completed",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/FUY8VBZWQS67",
        description:
          "Introduction to data processing, cleaning, transformation, and analysis using Python and pandas.",
        skills: [
          "Python",
          "Pandas",
          "Data Cleaning",
          "Data Analysis",
        ],
      },
      {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        year: "2025",
        status: "completed",
        credentialUrl: "https://www.credly.com/badges/dea3bbe2-5240-4ab0-918b-90c27249438e/public_url",
        description:
          "Networking fundamentals, IP addressing, protocols, network devices, and communication between systems.",
        skills: [
          "Networking",
          "IPv4",
          "IPv6",
          "Cisco",
          "Network Fundamentals",
        ],
      },
      {
        title: "Google Cloud Computing Foundations",
        issuer: "Google Cloud",
        year: "2025",
        status: "completed",
        credentialUrl: "https://www.skills.google/public_profiles/d6802c34-c534-4620-960a-48ac79df0f4e/badges/20506940",
        description:
          "Cloud computing fundamentals, Google Cloud services, infrastructure, networking, and storage.",
        skills: [
          "Google Cloud",
          "Cloud Computing",
          "Infrastructure",
          "Storage",
        ],
      },
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2026",
        status: "progress",
        description:
          "Preparation covering AWS fundamentals, cloud architecture, security, billing, services, and the shared responsibility model.",
        skills: [
          "AWS",
          "Cloud Concepts",
          "Security",
          "Billing",
          "Architecture",
        ],
      },
      {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        year: "2026",
        status: "progress",
        description:
          "Preparation covering artificial intelligence, machine learning, generative AI, and related AWS services.",
        skills: [
          "Artificial Intelligence",
          "Machine Learning",
          "Generative AI",
          "AWS AI Services",
        ],
      },
    ],
  },
};

export default function Certifications() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="certifications"
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

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {text.certifications.map((certification, index) => {
            const isCompleted = certification.status === "completed";

            return (
              <Reveal
                key={certification.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 120}
              >
                <article
                  className={`group relative h-full overflow-hidden border bg-neutral-950/40 p-6 transition duration-300 hover:-translate-y-1 md:p-7 ${
                    isCompleted
                      ? "border-neutral-900 hover:border-green-400/40"
                      : "border-dashed border-green-400/20 hover:border-green-400/50"
                  }`}
                >
                  <div className="absolute right-4 top-3 font-mono text-5xl font-bold text-neutral-900 transition duration-300 group-hover:text-green-400/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`flex items-center gap-2 border px-2 py-1 font-mono text-[9px] tracking-[0.15em] ${
                          isCompleted
                            ? "border-green-400/30 text-green-400"
                            : "border-yellow-400/20 text-yellow-300/70"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isCompleted
                              ? "bg-green-400"
                              : "animate-pulse bg-yellow-300/70"
                          }`}
                        />

                        {isCompleted
                          ? text.completedLabel
                          : text.progressLabel}
                      </span>

                      <span className="font-mono text-[10px] text-neutral-700">
                        {certification.year}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-[85%] font-mono text-xl font-bold leading-8 text-white">
                      {certification.title}
                    </h3>

                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-green-400/70">
                      {certification.issuer}
                    </p>

                    <p className="mt-5 font-mono text-sm leading-7 text-neutral-600">
                      {certification.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-neutral-800 bg-black px-3 py-1.5 font-mono text-[11px] text-neutral-500 transition duration-300 group-hover:border-green-400/20 group-hover:text-neutral-400"
                        >
                          <span className="mr-1 text-green-400/70">+</span>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      {certification.credentialUrl ? (
                        <a
                          href={certification.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 transition duration-300 hover:text-green-400"
                        >
                          {text.credentialLabel}
                          <span className="text-green-400">↗</span>
                        </a>
                      ) : isCompleted ? (
                        <span className="font-mono text-xs text-neutral-800">
                          {text.unavailableLabel}
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-yellow-300/40">
                          {text.progressLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}