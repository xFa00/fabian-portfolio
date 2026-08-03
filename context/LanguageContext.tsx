"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("es");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language, isReady]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const toggleLanguage = () => {
    setLanguageState((currentLanguage) =>
      currentLanguage === "es" ? "en" : "es",
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe utilizarse dentro de LanguageProvider.",
    );
  }

  return context;
}