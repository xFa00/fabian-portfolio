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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black" />

      <div className="absolute inset-x-0 bottom-0 z-0 h-[42vh] md:h-[48vh]">
        <svg
          viewBox="0 0 1440 500"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="galerasFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(34,197,94,0.14)" />
              <stop offset="55%" stopColor="rgba(34,197,94,0.08)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>

            <linearGradient id="galerasStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(34,197,94,0.04)" />
              <stop offset="50%" stopColor="rgba(34,197,94,0.22)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0.04)" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>

        <path
            d="M0 500
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
                L1440 500 Z"
            fill="url(#galerasFill)"
            />

        <path
            d="M0 410
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
                C1388 402, 1415 410, 1440 414"
            fill="none"
            stroke="url(#galerasStroke)"
            strokeWidth="3"
            filter="url(#softGlow)"
            />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-green-400">
          Portfolio / Cybersecurity
        </p>

        <h1 className="max-w-5xl min-h-[1.2em] font-mono text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          <TypewriterName />
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
            Explorar proyectos
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