import TypewriterName from "@/components/TypewriterName";

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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:pb-20 md:pt-24"
    >
      {/* Cuadrícula de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Oscurecimiento para mantener legible el contenido */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black"
      />

      {/* Silueta sutil del Galeras */}
      <div
        aria-hidden="true"
        className="galeras-reveal pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[34vh] opacity-80 md:h-[44vh]"
      >
        <svg
          viewBox="0 0 1440 500"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="galerasFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="rgba(34,197,94,0.13)" />
              <stop offset="55%" stopColor="rgba(34,197,94,0.07)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>

            <linearGradient
              id="galerasStroke"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="rgba(34,197,94,0.02)" />
              <stop offset="50%" stopColor="rgba(34,197,94,0.20)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0.02)" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>

          {/* Relleno del volcán */}
          <path
            d="
              M0 500
              L0 410
              C70 408, 120 406, 170 402
              C220 398, 270 392, 320 382
              C360 374, 395 362, 430 346
              C458 334, 485 315, 515 298
              C548 279, 585 262, 625 250
              C665 238, 705 231, 748 228
              C785 225, 820 224, 852 226
              C885 228, 914 229, 940 224
              C965 219, 985 210, 1003 204
              C1022 198, 1044 198, 1066 204
              C1090 211, 1115 223, 1142 240
              C1175 260, 1207 283, 1240 308
              C1275 335, 1312 362, 1360 388
              C1388 402, 1415 410, 1440 414
              L1440 500
              Z
            "
            fill="url(#galerasFill)"
          />

          {/* Contorno del volcán */}
          <path
            d="
              M0 410
              C70 408, 120 406, 170 402
              C220 398, 270 392, 320 382
              C360 374, 395 362, 430 346
              C458 334, 485 315, 515 298
              C548 279, 585 262, 625 250
              C665 238, 705 231, 748 228
              C785 225, 820 224, 852 226
              C885 228, 914 229, 940 224
              C965 219, 985 210, 1003 204
              C1022 198, 1044 198, 1066 204
              C1090 211, 1115 223, 1142 240
              C1175 260, 1207 283, 1240 308
              C1275 335, 1312 362, 1360 388
              C1388 402, 1415 410, 1440 414
            "
            fill="none"
            stroke="url(#galerasStroke)"
            strokeWidth="3"
            filter="url(#softGlow)"
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="hero-step hero-step-1 mb-6 font-mono text-xs uppercase tracking-[0.25em] text-green-400 sm:text-sm">
          Portfolio / Cybersecurity
        </p>

        <h1 className="hero-step hero-step-2 min-h-[1.2em] max-w-5xl font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          <TypewriterName />
        </h1>

        <p className="hero-step hero-step-3 mt-7 max-w-3xl font-mono text-base leading-8 text-neutral-400 md:mt-8 md:text-xl">
          Ingeniero de Sistemas enfocado en ciberseguridad, infraestructura
          cloud, automatización y análisis de datos.
        </p>

        <div className="hero-step hero-step-4 mt-8 border-l border-green-400/50 pl-5 font-mono text-xs leading-7 text-neutral-500 sm:text-sm">
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

        <div className="hero-step hero-step-5 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="border border-green-400 bg-green-400 px-6 py-3 text-center font-mono text-sm font-bold text-black transition duration-300 hover:bg-transparent hover:text-green-400"
          >
            Explorar proyectos
          </a>

          <a
            href="/cv-fabian-chiran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-700 px-6 py-3 text-center font-mono text-sm text-neutral-300 transition duration-300 hover:border-green-400 hover:text-green-400"
          >
            Descargar CV
          </a>
        </div>

        <div className="hero-step hero-step-6 mt-10 flex flex-wrap gap-x-5 gap-y-3 font-mono text-[11px] text-neutral-600 md:mt-12 md:text-xs">
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