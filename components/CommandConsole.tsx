"use client";

import {
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type HistoryEntry = {
  command: string;
  response: string;
};

const responses: Record<string, string> = {
  help: `
Comandos disponibles:

whoami          Información general
about           Perfil profesional
experience      Experiencia laboral
projects        Proyectos actuales
skills          Competencias técnicas
certifications  Certificaciones
contact         Datos de contacto
cv              Abrir hoja de vida
github          Abrir GitHub
linkedin        Abrir LinkedIn
clear           Limpiar consola
  `.trim(),

  whoami: `
Fabián Chiran
Ingeniero de Sistemas e Informática.

FOCUS
Ciberseguridad · Cloud · Automatización · Datos

LOCATION
Medellín, Colombia

STATUS
Disponible para oportunidades
  `.trim(),

  about: `
Ingeniero de Sistemas e Informática con experiencia en infraestructura,
automatización, análisis de datos y entornos cloud.

Actualmente construye su carrera en ciberseguridad, con interés en:

• Cloud Security
• DevSecOps
• AppSec
• Threat Hunting
• Automatización de seguridad
  `.trim(),

  experience: `
BANCOLOMBIA — 2026
Ingeniero de Infraestructura · Práctica profesional

Automatización de procesos, Ansible Automation Platform, AWS,
Azure Arc, Python, SQL, DNS e inventarios tecnológicos.

GENIUS SPORTS — 2024–2025
Sports Data Operator

Validación, control de calidad y procesamiento de información deportiva.

GENIUS SPORTS — 2023
Live Analyst Data

Registro y análisis de eventos deportivos en tiempo real.
  `.trim(),

  projects: `
01 — URKUNINA SCAN
Plataforma modular de descubrimiento, correlación y priorización
de vulnerabilidades.

Estado: En progreso


02 — DATA VOLCÁNICA
Plataforma de análisis de datos enfocada inicialmente
en Deportivo Pasto y el fútbol colombiano.

Estado: En progreso


03 — PROYECTO CLASIFICADO
Nueva iniciativa actualmente en exploración.
  `.trim(),

  skills: `
LANGUAGES
Python · SQL · TypeScript · JavaScript · Bash · PowerShell

CYBERSECURITY
Nmap · Nuclei · Tenable · MITRE ATT&CK
Threat Hunting · Gestión de vulnerabilidades

CLOUD & INFRASTRUCTURE
AWS · Azure Arc · Ansible · Linux · Docker · DNS

DATA
Pandas · MySQL · PostgreSQL · Power BI · Tableau · Jupyter
  `.trim(),

  certifications: `
OBTENIDAS

✓ JavaScript Essentials 1
✓ Applied Machine Learning in Python
✓ Introduction to Data Science in Python
✓ CCNA: Introduction to Networks
✓ Google Cloud Computing Foundations


EN PREPARACIÓN

• AWS Certified Cloud Practitioner
• AWS Certified AI Practitioner
  `.trim(),

  contact: `
EMAIL
contacto@fabianchiran.dev

GITHUB
github.com/xFa00

LINKEDIN
linkedin.com/in/fabian-andres-chiran-guevara-a2054917a

LOCATION
Medellín, Colombia

MODALITY
Presencial · Híbrida · Remota
  `.trim(),
};

const quickCommands = [
  "whoami",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
];

export default function CommandConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "system",
      response:
        'Portfolio Console inicializada.\nEscribe "help" para consultar los comandos.',
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const closeConsole = () => {
    setIsOpen(false);
    setInput("");
    setHistoryIndex(-1);
  };

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const addHistoryEntry = (command: string, response: string) => {
    setHistory((current) => [
      ...current,
      {
        command,
        response,
      },
    ]);
  };

  const executeCommand = (rawCommand?: string) => {
    const command = (rawCommand ?? input).trim().toLowerCase();

    if (!command) {
      return;
    }

    setCommandHistory((current) => [
      ...current.filter((item) => item !== command),
      command,
    ]);

    setHistoryIndex(-1);
    setInput("");

    if (command === "clear") {
      setHistory([
        {
          command: "system",
          response: "Consola limpia.",
        },
      ]);

      return;
    }

    if (command === "cv") {
      addHistoryEntry(command, "Abriendo hoja de vida...");
      openExternalLink("/cv-fabian-chiran.pdf");
      return;
    }

    if (command === "github") {
      addHistoryEntry(command, "Abriendo perfil de GitHub...");
      openExternalLink("https://github.com/xFa00");
      return;
    }

    if (command === "linkedin") {
      addHistoryEntry(command, "Abriendo perfil de LinkedIn...");
      openExternalLink(
        "https://www.linkedin.com/in/fabian-andres-chiran-guevara-a2054917a/",
      );
      return;
    }

    const response = responses[command];

    if (!response) {
      addHistoryEntry(
        command,
        `Comando desconocido: "${command}".\nEscribe "help" para ver las opciones.`,
      );

      return;
    }

    addHistoryEntry(command, response);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand();
  };

  const handleInputKeyDown = (
    event: ReactKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;

      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const nextIndex = historyIndex - 1;

      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
    }

    if (event.key === "Escape") {
      closeConsole();
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setIsOpen((current) => !current);
      }

      if (event.key === "Escape") {
        closeConsole();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
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

  useEffect(() => {
    outputRef.current?.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir consola del portafolio"
        className="fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2 border border-green-400/40 bg-black/90 px-4 font-mono text-xs text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.12)] backdrop-blur-md transition duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black"
      >
        <span className="text-base">&gt;_</span>
        <span className="hidden sm:inline">CMD K</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Consola del portafolio"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeConsole();
            }
          }}
        >
          <div className="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden border border-green-400/30 bg-black shadow-[0_0_60px_rgba(34,197,94,0.12)]">
            <div className="flex items-center justify-between border-b border-green-400/15 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                    Portfolio Console
                  </p>

                  <p className="mt-1 hidden font-mono text-[10px] text-neutral-700 sm:block">
                    Interactive profile interface
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeConsole}
                aria-label="Cerrar consola"
                className="font-mono text-xs text-neutral-600 transition hover:text-green-400"
              >
                ESC
              </button>
            </div>

            <div
              ref={outputRef}
              className="min-h-64 flex-1 space-y-7 overflow-y-auto p-5 md:min-h-80"
            >
              {history.map((entry, index) => (
                <div key={`${entry.command}-${index}`}>
                  <p className="font-mono text-xs text-green-400">
                    <span className="mr-2 text-neutral-700">&gt;</span>
                    {entry.command}
                  </p>

                  <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-6 text-neutral-400 md:text-sm">
                    {entry.response}
                  </pre>
                </div>
              ))}

              <span
                aria-hidden="true"
                className="terminal-cursor inline-block h-4 w-[2px] bg-green-400"
              />
            </div>

            <div className="border-t border-neutral-900 px-5 py-3">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => executeCommand(command)}
                    className="shrink-0 border border-neutral-900 px-3 py-1.5 font-mono text-[10px] text-neutral-600 transition hover:border-green-400/40 hover:text-green-400"
                  >
                    {command}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 border-t border-neutral-900 px-5 py-4"
            >
              <span className="font-mono text-sm text-green-400">&gt;</span>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                autoComplete="off"
                spellCheck={false}
                aria-label="Comando"
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

            <div className="flex items-center justify-between border-t border-neutral-900 px-5 py-3 font-mono text-[9px] text-neutral-800">
              <span>↑ ↓ command history</span>
              <span>⌘ K toggle · ESC close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}