const experiences = [
  {
    period: "2026",
    company: "Bancolombia",
    role: "Ingeniero de Infraestructura — Práctica profesional",
    description:
      "Automatización de procesos de infraestructura, administración de inventarios tecnológicos y apoyo en entornos empresariales con Ansible, AWS, Azure Arc, Python y SQL.",
  },
  {
    period: "2024 — 2025",
    company: "Genius Sports",
    role: "Sports Data Operator",
    description:
      "Gestión y validación de datos deportivos en tiempo real, asegurando precisión, consistencia y cumplimiento de procesos operativos.",
  },
  {
    period: "2023",
    company: "Genius Sports",
    role: "Live Analyst Data",
    description:
      "Registro y análisis de eventos deportivos en vivo, trabajando bajo presión y con altos estándares de exactitud.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">
          02. /experience
        </p>

        <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
          Experiencia
        </h2>

        <div className="mt-14 border-l border-neutral-800">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative border-b border-neutral-900 py-10 pl-8 md:grid md:grid-cols-[180px_1fr] md:gap-10"
            >
              <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rounded-full border border-green-400 bg-black" />

              <p className="font-mono text-sm text-green-400">
                {experience.period}
              </p>

              <div className="mt-4 md:mt-0">
                <h3 className="font-mono text-xl font-bold text-white">
                  {experience.company}
                </h3>

                <p className="mt-2 font-mono text-sm text-neutral-300">
                  {experience.role}
                </p>

                <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-500">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}