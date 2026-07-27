export default function About() {
  return (
    <section
      id="about"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="font-mono text-sm text-green-400">
            01. /about
          </p>

          <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
            Sobre mí
          </h2>
        </div>

        <div>
          <p className="font-mono text-base leading-8 text-neutral-400 md:text-lg">
            Soy Ingeniero de Sistemas e Informática con experiencia en
            infraestructura, automatización, análisis de datos y entornos
            cloud. Actualmente estoy construyendo mi carrera en
            ciberseguridad, con interés en seguridad cloud, DevSecOps,
            AppSec y análisis de amenazas.
          </p>

          <p className="mt-6 font-mono text-base leading-8 text-neutral-500">
            Me interesa entender cómo funcionan los sistemas, automatizar
            procesos y convertir problemas técnicos complejos en soluciones
            prácticas, documentadas y seguras.
          </p>

          <div className="mt-10 grid gap-6 border-t border-neutral-900 pt-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-green-400">
                Educación
              </p>

              <p className="mt-3 font-mono text-sm text-neutral-300">
                Ingeniería de Sistemas e Informática
              </p>

              <p className="mt-1 font-mono text-sm text-neutral-600">
                Universidad Nacional de Colombia
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-green-400">
                Enfoque actual
              </p>

              <p className="mt-3 font-mono text-sm text-neutral-300">
                Ciberseguridad, cloud y automatización
              </p>

              <p className="mt-1 font-mono text-sm text-neutral-600">
                Medellín, Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}