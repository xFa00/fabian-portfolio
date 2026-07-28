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
    value: "Descargar hoja de vida",
    href: "/cv-fabian-chiran.pdf",
    target: "_blank",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">06. CONTACTO</p>

        <div className="mt-4 grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-3xl font-mono text-4xl font-bold leading-tight text-white md:text-6xl">
              Construyamos algo
              <span className="block text-green-400">seguro y útil.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-mono text-sm leading-7 text-neutral-500 md:text-base">
              Estoy disponible para oportunidades en ciberseguridad,
              cloud, infraestructura, automatización y desarrollo.
            </p>

            <a
              href="mailto:contacto@fabianchiran.dev"
              className="mt-10 inline-flex items-center border border-green-400 bg-green-400 px-6 py-3 font-mono text-sm font-bold text-black transition hover:bg-transparent hover:text-green-400"
            >
              Iniciar conversación
              <span className="ml-3">↗</span>
            </a>
          </div>

          <div className="border-l border-neutral-900 pl-0 md:pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
              Canales disponibles
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
                    contact.target === "_blank" || contact.href.startsWith("http")
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
                  Disponible para oportunidades
                </p>
              </div>

              <p className="mt-4 font-mono text-sm text-neutral-600">
                Medellín, Colombia · Modalidad presencial, híbrida o remota
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}