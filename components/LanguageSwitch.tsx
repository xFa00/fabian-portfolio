"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Seleccionar idioma"
      className="flex items-center border border-neutral-800 bg-black/70 p-1 font-mono text-[10px] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`px-2.5 py-1.5 transition duration-300 ${
          language === "es"
            ? "bg-green-400 text-black"
            : "text-neutral-600 hover:text-green-400"
        }`}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1.5 transition duration-300 ${
          language === "en"
            ? "bg-green-400 text-black"
            : "text-neutral-600 hover:text-green-400"
        }`}
      >
        EN
      </button>
    </div>
  );
}