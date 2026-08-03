"use client";

import { useEffect, useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";

const navigation = {
  es: [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Competencias", href: "#skills" },
    { label: "Certificaciones", href: "#certifications" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = navigation[language];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-green-500/10 bg-black/80 backdrop-blur-xl">
      <nav
        aria-label={
          language === "es"
            ? "Navegación principal"
            : "Main navigation"
        }
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label={
            language === "es"
              ? "Ir al inicio"
              : "Go to home"
          }
          className="group flex min-w-0 items-center gap-2 font-mono text-sm font-bold tracking-wider text-white"
        >
          <span className="shrink-0 text-green-400 transition group-hover:text-green-300">
            &gt;
          </span>

          <span className="truncate transition group-hover:text-green-400">
            fabian_chiran
          </span>

        </a>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs text-neutral-500 transition duration-300 hover:text-green-400"
            >
              <span className="mr-1 text-[10px] text-neutral-800 transition group-hover:text-green-400/60">
                {String(index + 1).padStart(2, "0")}.
              </span>

              {link.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-green-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Controles de escritorio */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch />

          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />

            ONLINE
          </div>
        </div>

        {/* Controles móviles */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <LanguageSwitch />

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? language === "es"
                  ? "Cerrar menú"
                  : "Close menu"
                : language === "es"
                  ? "Abrir menú"
                  : "Open menu"
            }
            className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-800 bg-black font-mono text-green-400 transition hover:border-green-400"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close" : "Menu"}
            </span>

            <span
              className={`absolute h-px w-5 bg-current transition duration-300 ${
                isMenuOpen
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-current transition duration-300 ${
                isMenuOpen
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-16 z-50 overflow-hidden border-b border-green-400/10 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto px-6 py-8">
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-neutral-900 py-4 font-mono"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-neutral-700 transition group-hover:text-green-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-neutral-300 transition group-hover:text-green-400">
                    {link.label}
                  </span>
                </div>

                <span className="translate-x-0 text-green-400/40 transition duration-300 group-hover:translate-x-1 group-hover:text-green-400">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-neutral-900 pt-6">
            <div className="font-mono text-[10px] leading-5 text-neutral-700">
              <p>
                {language === "es"
                  ? "Sistema de navegación activo"
                  : "Navigation system active"}
              </p>

              <p>
                {language === "es"
                  ? "Idioma seleccionado:"
                  : "Selected language:"}{" "}
                <span className="text-green-400">
                  {language.toUpperCase()}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />

              ONLINE
            </div>
          </div>
        </div>
      </div>

      {/* Fondo para cerrar el menú móvil */}
      {isMenuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          aria-label={
            language === "es"
              ? "Cerrar menú"
              : "Close menu"
          }
          className="fixed inset-0 top-16 -z-10 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}
    </header>
  );
}