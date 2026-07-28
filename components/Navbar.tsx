"use client";

import { useState } from "react";

const navigation = [
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Certificaciones", href: "#certifications" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-green-500/10 bg-black/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-sm font-bold tracking-wider text-green-400"
        >
          FABIÁN CHIRAN
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-neutral-400 transition hover:text-green-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 font-mono text-xs text-neutral-500 md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          ONLINE
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-neutral-800 text-green-400 transition hover:border-green-400 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-current transition ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-5 bg-current transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-px w-5 bg-current transition ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-green-500/10 bg-black transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="space-y-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-neutral-900 py-4 font-mono text-sm text-neutral-400 transition hover:text-green-400"
              >
                <span>
                  <span className="mr-3 text-xs text-neutral-700">
                    0{index + 1}
                  </span>
                  {item.name}
                </span>

                <span className="text-neutral-700 transition group-hover:text-green-400">
                  ↘
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-neutral-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            ONLINE
          </div>
        </div>
      </div>
    </header>
  );
}