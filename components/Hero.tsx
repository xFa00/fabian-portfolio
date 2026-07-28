export default function Hero() {
  const skills = [
    "Python",
    "AWS",
    "Linux",
    "SQL",
    "Ansible",
    "Cybersecurity",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-green-400">
            Portfolio / Cybersecurity
        </p>

        <h1 className="max-w-5xl font-mono text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
            Fabián Chiran
            <span className="terminal-cursor ml-2 inline-block h-[0.85em] w-[2px] bg-green-400 align-[-0.08em]" />
        </h1>


        <p className="mt-8 max-w-3xl font-mono text-lg leading-8 text-neutral-400 md:text-xl">
          Ingeniero de Sistemas enfocado en ciberseguridad, infraestructura
          cloud, automatización y análisis de datos.
        </p>

        <div className="mt-8 border-l border-green-400/50 pl-5 font-mono text-sm leading-7 text-neutral-500">
          <p>
            <span className="text-green-400">location:</span> Medellín, Colombia
          </p>
          <p>
            <span className="text-green-400">status:</span> disponible para
            oportunidades
          </p>
          <p>
            <span className="text-green-400">current_project:</span> Urkunina
            Scan
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="border border-green-400 bg-green-400 px-6 py-3 font-mono text-sm font-bold text-black transition hover:bg-transparent hover:text-green-400"
          >
            ./explore_projects
          </a>

            <a
            href="/cv-fabian-chiran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-700 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-green-400 hover:text-green-400"
            >
            Descargar CV
          </a>
          
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-neutral-600">
          {skills.map((skill) => (
            <span key={skill}>
              <span className="text-green-500">+</span> {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}