"use client";

import { ReactNode, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type PortfolioLoaderProps = {
  children: ReactNode;
};

const translations = {
  es: {
    initializing: "inicializando portafolio...",
    profile: "Cargando perfil...",
    experience: "Cargando experiencia...",
    projects: "Cargando proyectos...",
    security: "Inicializando módulos de seguridad...",
    interface: "Preparando interfaz...",
    ready: "Sistema listo.",
  },

  en: {
    initializing: "initializing portfolio...",
    profile: "Loading profile...",
    experience: "Loading experience...",
    projects: "Loading projects...",
    security: "Initializing security modules...",
    interface: "Preparing interface...",
    ready: "System ready.",
  },
};

export default function PortfolioLoader({
  children,
}: PortfolioLoaderProps) {
  const { language } = useLanguage();
  const text = translations[language];

  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    let finishTimeout: number;

    const duration = 5000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const percentage = Math.min(
        (elapsed / duration) * 100,
        100,
      );

      setProgress(Math.floor(percentage));

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      /*
       * Primero dejamos visible el 100%
       * durante unos instantes.
       */
      finishTimeout = window.setTimeout(() => {
        setIsLeaving(true);

        /*
         * Después del fade negro,
         * recién montamos el portafolio.
         *
         * Esto hace que TypewriterName
         * empiece desde cero y sea visible.
         */
        window.setTimeout(() => {
          setShowPortfolio(true);
        }, 550);
      }, 300);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(finishTimeout);
    };
  }, []);

  useEffect(() => {
    if (showPortfolio) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPortfolio]);

  const getStatus = () => {
    if (progress < 20) {
      return text.profile;
    }

    if (progress < 40) {
      return text.experience;
    }

    if (progress < 60) {
      return text.projects;
    }

    if (progress < 80) {
      return text.security;
    }

    if (progress < 100) {
      return text.interface;
    }

    return text.ready;
  };

  /*
   * Cuando termina:
   * el portafolio se monta desde cero.
   *
   * Eso reinicia correctamente:
   * - TypewriterName
   * - Hero steps
   * - Galeras reveal
   */
  if (showPortfolio) {
    return (
      <div className="min-h-screen bg-black">
        {children}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black px-6 transition-opacity duration-500 ${
          isLeaving ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:40px_40px]"
        />

        <div className="relative z-10 w-full max-w-xl">
          {/* Estado del sistema */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
              SYSTEM BOOT
            </p>
          </div>

          {/* Comando */}
          <p className="font-mono text-sm text-neutral-400 md:text-base">
            <span className="mr-2 text-green-400">&gt;</span>

            {text.initializing}

            <span className="terminal-cursor ml-1 inline-block h-4 w-[2px] bg-green-400 align-middle" />
          </p>

          {/* Barra */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-700">
                system_progress
              </span>

              <span className="text-green-400">
                {progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden border border-neutral-900 bg-neutral-950">
              <div
                className="h-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.35)]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Estado actual */}
          <div className="mt-6 min-h-8">
            <p className="font-mono text-xs text-neutral-600">
              <span className="mr-2 text-green-400/70">
                [{progress === 100 ? "OK" : ".."}]
              </span>

              {getStatus()}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-neutral-900 pt-4">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-800 sm:text-[10px]">
              <span>fabianchiran.dev</span>

              <span>
                {progress === 100
                  ? "READY"
                  : "BOOTING"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}