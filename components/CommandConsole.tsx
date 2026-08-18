"use client";

import {
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/context/LanguageContext";

type HistoryEntry = {
  command: string;
  response: string;
};

const responses = {
  es: {
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

ENFOQUE
Ciberseguridad · Cloud · Automatización · Datos

UBICACIÓN
Medellín, Colombia

ESTADO
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
LENGUAJES
Python · SQL · TypeScript · JavaScript · Bash · PowerShell

CIBERSEGURIDAD
Nmap · Nuclei · Tenable · MITRE ATT&CK
Threat Hunting · Gestión de vulnerabilidades

CLOUD E INFRAESTRUCTURA
AWS · Azure Arc · Ansible · Linux · Docker · DNS

DATOS
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
CORREO
contacto@fabianchiran.dev

GITHUB
github.com/xFa00

LINKEDIN
linkedin.com/in/fabian-andres-chiran-guevara-a2054917a

UBICACIÓN
Medellín, Colombia

MODALIDAD
Presencial · Híbrida · Remota
    `.trim(),
  },

  en: {
    help: `
Available commands:

whoami          General information
about           Professional profile
experience      Work experience
projects        Current projects
skills          Technical skills
certifications  Certifications
contact         Contact information
cv              Open résumé
github          Open GitHub
linkedin        Open LinkedIn
clear           Clear console
    `.trim(),

    whoami: `
Fabián Chiran
Systems Engineer.

FOCUS
Cybersecurity · Cloud · Automation · Data

LOCATION
Medellín, Colombia

STATUS
Available for opportunities
    `.trim(),

    about: `
Systems Engineer with experience in infrastructure,
automation, data analysis, and cloud environments.

Currently building a career in cybersecurity, with an interest in:

• Cloud Security
• DevSecOps
• AppSec
• Threat Hunting
• Security Automation
    `.trim(),

    experience: `
BANCOLOMBIA — 2026
Infrastructure Engineer · Professional internship

Process automation, Ansible Automation Platform, AWS,
Azure Arc, Python, SQL, DNS, and technology inventories.

GENIUS SPORTS — 2024–2025
Sports Data Operator

Validation, quality control, and processing of sports information.

GENIUS SPORTS — 2023
Live Data Analyst

Real-time recording and analysis of sports events.
    `.trim(),

    projects: `
01 — URKUNINA SCAN
Modular vulnerability discovery, correlation, and prioritization
platform.

Status: In progress


02 — DATA VOLCÁNICA
Data analytics platform initially focused on
Deportivo Pasto and Colombian football.

Status: In progress


03 — CLASSIFIED PROJECT
New initiative currently under exploration.
    `.trim(),

    skills: `
LANGUAGES
Python · SQL · TypeScript · JavaScript · Bash · PowerShell

CYBERSECURITY
Nmap · Nuclei · Tenable · MITRE ATT&CK
Threat Hunting · Vulnerability Management

CLOUD AND INFRASTRUCTURE
AWS · Azure Arc · Ansible · Linux · Docker · DNS

DATA
Pandas · MySQL · PostgreSQL · Power BI · Tableau · Jupyter
    `.trim(),

    certifications: `
COMPLETED

✓ JavaScript Essentials 1
✓ Applied Machine Learning in Python
✓ Introduction to Data Science in Python
✓ CCNA: Introduction to Networks
✓ Google Cloud Computing Foundations


IN PREPARATION

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

WORK MODE
On-site · Hybrid · Remote
    `.trim(),
  },
};

const interfaceText = {
  es: {
    initialMessage:
      'Portfolio Console inicializada.\nEscribe "help" para consultar los comandos.',
    consoleLabel: "Consola del portafolio",
    consoleSubtitle: "Interfaz interactiva del perfil",
    openConsole: "Abrir consola del portafolio",
    closeConsole: "Cerrar consola",
    inputLabel: "Comando",
    inputPlaceholder: "Escribe un comando...",
    execute: "EJECUTAR",
    unknownCommand: "Comando desconocido",
    unknownHelp: 'Escribe "help" para ver las opciones.',
    clearMessage: "Consola limpia.",
    openCv: "Abriendo hoja de vida...",
    openGithub: "Abriendo perfil de GitHub...",
    openLinkedin: "Abriendo perfil de LinkedIn...",
    historyHint: "↑ ↓ historial",
    shortcutHint: "⌘ K · ESC",
  },

  en: {
    initialMessage:
      'Portfolio Console initialized.\nType "help" to view the available commands.',
    consoleLabel: "Portfolio console",
    consoleSubtitle: "Interactive profile interface",
    openConsole: "Open portfolio console",
    closeConsole: "Close console",
    inputLabel: "Command",
    inputPlaceholder: "Type a command...",
    execute: "EXECUTE",
    unknownCommand: "Unknown command",
    unknownHelp: 'Type "help" to view the available options.',
    clearMessage: "Console cleared.",
    openCv: "Opening résumé...",
    openGithub: "Opening GitHub profile...",
    openLinkedin: "Opening LinkedIn profile...",
    historyHint: "↑ ↓ history",
    shortcutHint: "⌘ K · ESC",
  },
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
  const { language } = useLanguage();
  const text = interfaceText[language];
  const commandResponses = responses[language];

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const resetConsole = () => {
    setInput("");
    setHistory([
      {
        command: "system",
        response: text.initialMessage,
      },
    ]);
    setCommandHistory([]);
    setHistoryIndex(-1);
  };

  const openConsole = () => {
    resetConsole();
    setIsOpen(true);
  };

  const closeConsole = () => {
    setIsOpen(false);
    resetConsole();
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

    if (!command) return;

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
          response: text.clearMessage,
        },
      ]);
      return;
    }

    if (command === "cv") {
      addHistoryEntry(command, text.openCv);
      openExternalLink("/cv-fabian-chiran.pdf");
      return;
    }

    if (command === "github") {
      addHistoryEntry(command, text.openGithub);
      openExternalLink("https://github.com/xFa00");
      return;
    }

    if (command === "linkedin") {
      addHistoryEntry(command, text.openLinkedin);
      openExternalLink(
        "https://www.linkedin.com/in/fabian-andres-chiran-guevara-a2054917a/",
      );
      return;
    }

    const response =
      commandResponses[command as keyof typeof commandResponses];

    if (!response) {
      addHistoryEntry(
        command,
        `${text.unknownCommand}: "${command}".\n${text.unknownHelp}`,
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
    resetConsole();
  }, [language]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();

        if (isOpen) {
          closeConsole();
        } else {
          openConsole();
        }
      }

      if (event.key === "Escape" && isOpen) {
        closeConsole();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isOpen, language]);

  useEffect(() => {
    if (!isOpen) return;

    const updateViewportHeight = () => {
      const height =
        window.visualViewport?.height ?? window.innerHeight;

      setViewportHeight(height);
    };

    updateViewportHeight();

    window.visualViewport?.addEventListener(
      "resize",
      updateViewportHeight,
    );

    window.visualViewport?.addEventListener(
      "scroll",
      updateViewportHeight,
    );

    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        updateViewportHeight,
      );

      window.visualViewport?.removeEventListener(
        "scroll",
        updateViewportHeight,
      );

      window.removeEventListener(
        "resize",
        updateViewportHeight,
      );
    };
  }, [isOpen]);

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
        onClick={openConsole}
        aria-label={text.openConsole}
        className="fixed bottom-4 right-4 z-40 flex h-11 items-center gap-2 border border-green-400/40 bg-black/90 px-3 font-mono text-xs text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.12)] backdrop-blur-md transition duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black sm:bottom-6 sm:right-6 sm:h-12 sm:px-4"
      >
        <span className="text-base">&gt;_</span>
        <span className="hidden sm:inline">CMD K</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={text.consoleLabel}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 p-2 backdrop-blur-sm sm:items-center sm:px-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeConsole();
            }
          }}
        >
          <div
            className="flex w-full max-w-3xl flex-col overflow-hidden border border-green-400/30 bg-black shadow-[0_0_60px_rgba(34,197,94,0.12)] sm:max-h-[85vh]"
            style={{
              height:
                viewportHeight !== null
                  ? `calc(${viewportHeight}px - 16px)`
                  : "88dvh",
              maxHeight:
                viewportHeight !== null
                  ? `calc(${viewportHeight}px - 16px)`
                  : "88dvh",
            }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-green-400/15 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />

                <div className="min-w-0">
                  <p className="truncate font-mono text-xs uppercase tracking-[0.16em] text-green-400 sm:tracking-[0.2em]">
                    Portfolio Console
                  </p>

                  <p className="mt-1 hidden font-mono text-[10px] text-neutral-700 sm:block">
                    {text.consoleSubtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeConsole}
                aria-label={text.closeConsole}
                className="shrink-0 px-2 py-1 font-mono text-xs text-neutral-600 transition hover:text-green-400"
              >
                ESC
              </button>
            </div>

            <div
              ref={outputRef}
              className="min-h-0 flex-1 space-y-6 overflow-y-auto overflow-x-hidden px-4 py-4 sm:space-y-7 sm:p-5"
            >
              {history.map((entry, index) => (
                <div
                  key={`${entry.command}-${index}`}
                  className="min-w-0"
                >
                  <p className="break-words font-mono text-xs text-green-400">
                    <span className="mr-2 text-neutral-700">&gt;</span>
                    {entry.command}
                  </p>

                  <pre className="mt-3 max-w-full whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-neutral-400 sm:text-sm sm:leading-6">
                    {entry.response}
                  </pre>
                </div>
              ))}

              <span
                aria-hidden="true"
                className="terminal-cursor inline-block h-4 w-[2px] bg-green-400"
              />
            </div>

            <div className="shrink-0 border-t border-neutral-900 px-4 py-3 sm:px-5">
              <div className="flex flex-wrap gap-2">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => executeCommand(command)}
                    className="border border-neutral-900 px-2.5 py-1.5 font-mono text-[9px] text-neutral-600 transition hover:border-green-400/40 hover:text-green-400 sm:px-3 sm:text-[10px]"
                  >
                    {command}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="shrink-0 border-t border-neutral-900 px-4 py-3 sm:px-5 sm:py-4"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="shrink-0 font-mono text-sm text-green-400">
                  &gt;
                </span>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label={text.inputLabel}
                  placeholder={text.inputPlaceholder}
                  className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-neutral-700"
                />

                <button
                  type="submit"
                  className="shrink-0 border border-neutral-800 px-2.5 py-2 font-mono text-[9px] tracking-widest text-neutral-500 transition hover:border-green-400 hover:text-green-400 sm:px-3 sm:text-[10px]"
                >
                  {text.execute}
                </button>
              </div>
            </form>

            <div className="hidden shrink-0 items-center justify-between border-t border-neutral-900 px-5 py-3 font-mono text-[9px] text-neutral-800 sm:flex">
              <span>{text.historyHint}</span>
              <span>{text.shortcutHint}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}