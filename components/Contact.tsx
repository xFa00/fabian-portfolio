"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  es: {
    section: "06. CONTACTO",
    title: "Construyamos algo",
    highlightedTitle: "seguro y útil.",
    description:
      "¿Tienes un proyecto o necesitas fortalecer tu entorno tecnológico? Contáctame y conversemos sobre cómo puedo ayudarte a construir soluciones seguras, eficientes y adaptadas a tus necesidades.",
    conversation: "Iniciar conversación",
    channels: "Canales disponibles",
    cv: "Descargar hoja de vida",
    availability: "Disponbile",
    location: "Medellín, Colombia",
  },
  
  en: {
    section: "06. CONTACT",
    title: "Let’s build something",
    highlightedTitle: "secure and useful.",
    description:
     "Do you have a project in mind or need to strengthen your technology environment? Get in touch and let’s discuss how I can help you build secure, efficient solutions tailored to your needs.",
    conversation: "Start a conversation",
    channels: "Available channels",
    cv: "Download résumé",
    availability: "Available",
    location: "Medellín, Colombia",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const text = translations[language];

  const contactLinks = [
    {
      label: "Email",
      value: "contacto@fabianchiran.dev",
      href: "mailto:contacto@fabianchiran.dev",
    },
    {
      label: "GitHub",
      value: "github.com/xFa00",
      href: "https://github.com/xFa00",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fabianchiran",
      href: "https://www.linkedin.com/in/fabian-andres-chiran-guevara-a2054917a/",
    },
    {
      label: "CV",
      value: text.cv,
      href: "/cv-fabian-chiran.pdf",
      target: "_blank",
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">{text.section}</p>

        <div className="mt-4 grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-3xl font-mono text-4xl font-bold leading-tight text-white md:text-6xl">
              {text.title}
              <span className="block text-green-400">
                {text.highlightedTitle}
              </span>
            </h2>

            <p className="mt-7 max-w-2xl font-mono text-sm leading-7 text-neutral-500 md:text-base">
              {text.description}
            </p>

            <a
              href="mailto:contacto@fabianchiran.dev"
              className="mt-10 inline-flex items-center border border-green-400 bg-green-400 px-6 py-3 font-mono text-sm font-bold text-black transition hover:bg-transparent hover:text-green-400"
            >
              {text.conversation}
              <span className="ml-3">↗</span>
            </a>
          </div>

          <div className="border-l border-neutral-900 pl-0 md:pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
              {text.channels}
            </p>

            <div className="mt-8 space-y-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.target ??
                    (contact.href.startsWith("http") ? "_blank" : undefined)
                  }
                  rel={
                    contact.target === "_blank" ||
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block border border-neutral-900 bg-neutral-950/30 p-5 transition hover:border-green-400/40"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                        {contact.label}
                      </p>

                      <p className="mt-2 break-all font-mono text-sm text-neutral-400 transition group-hover:text-white">
                        {contact.value}
                      </p>
                    </div>

                    <span className="font-mono text-sm text-neutral-700 transition group-hover:text-green-400">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 border border-neutral-900 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {text.availability}
                </p>
              </div>

              <p className="mt-4 font-mono text-sm text-neutral-600">
                {text.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}