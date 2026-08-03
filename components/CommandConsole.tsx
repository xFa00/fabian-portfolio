"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const responses: Record<string, string> = {
  help: `
Comandos disponibles:

whoami
about
experience
projects
skills
certifications
contact
cv
github
linkedin
clear
  `.trim(),

  whoami: `
Fabián Chiran
Ingeniero de Sistemas e Informática.

Enfoque:
Ciberseguridad, cloud, automatización y análisis de datos.

Ubicación:
Medellín, Colombia.

Estado:
Disponible para oportunidades.
  `.trim(),

  about: `
Soy Ingeniero de Sistemas e Informática con experiencia en infraestructura,
automatización, análisis de datos y entornos cloud.

Actualmente enfoco mi desarrollo profesional en ciberseguridad,
seguridad cloud, DevSecOps y AppSec.
  `.trim(),

  experience: `
Bancolombia — 2026
Ingeniero de Infraestructura, práctica profesional.
Automatización, Ansible, AWS, Azure Arc, Python y SQL.

Genius Sports — 2024–2025
Sports Data Operator.
Validación y control de calidad de datos deportivos.

Genius Sports — 2023
Live Analyst Data.
Análisis y registro de eventos deportivos en tiempo real.
  `.trim(),

  projects: `
01 — Urkunina Scan
Plataforma modular para descubrir, correlacionar y priorizar vulnerabilidades.
Estado: en progreso.

02 — Data Volcánica
Plataforma de analítica de fútbol enfocada inicialmente en Deportivo Pasto.
Estado: en progreso.

03 — Proyecto clasificado
Nueva iniciativa actualmente en exploración.
  `.trim(),

  skills: `
Lenguajes:
Python, SQL, TypeScript, JavaScript, Bash y PowerShell.

Ciberseguridad:
Nmap, Nuclei, Tenable, MITRE ATT&CK, threat hunting y gestión de vulnerabilidades.

Cloud e infraestructura:
AWS, Azure Arc, Ansible, Linux, Docker y DNS.

Datos:
Pandas, MySQL, PostgreSQL, Power BI, Tableau y Jupyter.
  `.trim(),

  certifications: `
Obtenidas:
JavaScript Essentials 1
Applied Machine Learning in Python
Introduction to Data Science in Python
CCNA: Introduction to Networks
Google Cloud Computing Foundations

En preparación:
AWS Certified Cloud Practitioner
AWS Certified AI Practitioner
  `.trim(),

  contact: `
Email:
contacto@fabianchiran.dev

GitHub:
github.com/xFa00

LinkedIn:
linkedin.com/in/fabian-andres-chiran-guevara-a2054917a

Ubicación:
Medellín, Colombia.
  `.trim(),
};

export default function CommandConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(
    'Escribe "help" para consultar los comandos disponibles.',
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const closeConsole = () => {
    setIsOpen(false);
    setInput("");
  };

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const executeCommand = () => {
    const command = input.trim().toLowerCase();

    if (!command) {
      setOutput("Debes escribir un comando.");
      return;
    }

    if (command === "clear") {
      setOutput("");
      setInput("");
      return;
    }

    if (command === "cv") {
      setOutput("Abriendo hoja de vida...");
      openExternalLink("/cv-fabian-chiran.pdf");
      setInput("");
      return;
    }

    if (command === "github") {
      setOutput("Abriendo GitHub...");
      openExternalLink("https://github.com/xFa00");
      setInput("");
      return;
    }

    if (command === "linkedin") {
      setOutput("Abriendo LinkedIn...");
      openExternalLink(
        "https://www.linkedin.com/in/fabian-andres-chiran-guevara-a2054917a/",
      );
      setInput("");
      return;
    }

    const response = responses[command];

    if (!response) {
      setOutput(
        `Comando desconocido: "${command}". Escribe "help" para ver las opciones.`,
      );
      setInput("");
      return;
    }

    setOutput(response);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setIsOpen((current) => !current);
      }

      if (event.key === "Escape") {
        closeConsole();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir consola"
        className="fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2 border border-green-400/40 bg-black/90 px-4 font-mono text-xs text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.12)] backdrop-blur-md transition hover:border-green-400 hover:bg-green-400 hover:text-black"
      >
        <span className="text-base">&gt;_</span>
        <span className="hidden sm:inline">CMD</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Consola del portafolio"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeConsole();
            }
          }}
        >
          <div className="w-full max-w-2xl overflow-hidden border border-green-400/30 bg-black shadow-[0_0_60px_rgba(34,197,94,0.12)]">
            <div className="flex items-center justify-between border-b border-green-400/15 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                  Portfolio Console
                </p>
              </div>

              <button
                type="button"
                onClick={closeConsole}
                className="font-mono text-xs text-neutral-600 transition hover:text-green-400"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[50vh] min-h-56 overflow-y-auto border-b border-neutral-900 p-5">
              <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-neutral-400 md:text-sm">
                {output}
              </pre>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 px-5 py-4"
            >
              <span className="font-mono text-sm text-green-400">&gt;</span>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                autoComplete="off"
                spellCheck={false}
                placeholder="Escribe un comando..."
                className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-neutral-700"
              />

              <button
                type="submit"
                className="border border-neutral-800 px-3 py-2 font-mono text-[10px] tracking-widest text-neutral-500 transition hover:border-green-400 hover:text-green-400"
              >
                EXECUTE
              </button>
            </form>

            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-900 px-5 py-4 font-mono text-[10px] text-neutral-700">
              <span>whoami</span>
              <span>experience</span>
              <span>projects</span>
              <span>skills</span>
              <span>certifications</span>
              <span>contact</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}