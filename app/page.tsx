export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold">
          Fabian Chiran<span className="text-emerald-400">.</span>
        </span>

        <div className="hidden gap-8 text-sm text-neutral-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            Sobre mí
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experiencia
          </a>

          <a href="#projects" className="transition hover:text-white">
            Proyectos
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contacto
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
            Ciberseguridad · Cloud · Automatización
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hola, soy
            <span className="block text-neutral-400">Fabián Chiran.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Ingeniero de Sistemas enfocado en ciberseguridad, infraestructura
            cloud y automatización. Construyo proyectos que conectan seguridad,
            datos y tecnología.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-emerald-300"
            >
              Ver proyectos
            </a>

            <a
              href="/cv-fabian-chiran.pdf"
              className="rounded-lg border border-neutral-700 px-6 py-3 font-semibold transition hover:border-neutral-400 hover:bg-neutral-900"
            >
              Descargar CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-sm text-neutral-400">
            {[
              "Python",
              "AWS",
              "Linux",
              "SQL",
              "Ansible",
              "Cybersecurity",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}