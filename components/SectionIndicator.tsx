"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const sections = {
  es: [
    { id: "about", number: "01", name: "SOBRE MÍ" },
    { id: "experience", number: "02", name: "EXPERIENCIA" },
    { id: "projects", number: "03", name: "PROYECTOS" },
    { id: "skills", number: "04", name: "COMPETENCIAS" },
    { id: "certifications", number: "05", name: "CERTIFICACIONES" },
    { id: "contact", number: "06", name: "CONTACTO" },
  ],

  en: [
    { id: "about", number: "01", name: "ABOUT" },
    { id: "experience", number: "02", name: "EXPERIENCE" },
    { id: "projects", number: "03", name: "PROJECTS" },
    { id: "skills", number: "04", name: "SKILLS" },
    { id: "certifications", number: "05", name: "CERTIFICATIONS" },
    { id: "contact", number: "06", name: "CONTACT" },
  ],
};

export default function SectionIndicator() {
  const { language } = useLanguage();
  const currentSections = sections[language];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionElements = currentSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.4, 0.6],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentSections]);

  const currentIndex = currentSections.findIndex(
    (section) => section.id === activeSection,
  );

  const currentSection =
    currentSections[currentIndex] ?? currentSections[0];

  return (
    <>
      {/* Versión móvil */}
      <div className="pointer-events-none fixed inset-x-0 top-16 z-40 border-b border-green-500/10 bg-black/80 px-6 py-2 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between font-mono text-[10px] tracking-[0.18em]">
          <span className="text-green-400">
            {currentSection.number} /{" "}
            {currentSections.length.toString().padStart(2, "0")}
          </span>

          <span className="text-neutral-600">
            {currentSection.name}
          </span>
        </div>
      </div>

      {/* Versión escritorio */}
      <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:right-10">
        <nav
          aria-label={
            language === "es"
              ? "Indicador de secciones"
              : "Section indicator"
          }
          className="flex flex-col items-end gap-4"
        >
          {currentSections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-label={
                  language === "es"
                    ? `Ir a ${section.name}`
                    : `Go to ${section.name}`
                }
                className="group flex items-center gap-3"
              >
                <span
                  className={`font-mono text-[10px] tracking-widest transition duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-neutral-700 group-hover:text-neutral-400"
                  }`}
                >
                  {section.number}
                </span>

                <span
                  className={`block h-px transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                      : "w-3 bg-neutral-800 group-hover:w-5 group-hover:bg-neutral-500"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}