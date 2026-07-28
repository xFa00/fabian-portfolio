const skillGroups = [
  {
    title: "Lenguajes",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Bash", "PowerShell"],
  },
  {
    title: "Ciberseguridad",
    skills: [
      "Nmap",
      "Nuclei",
      "Tenable",
      "MITRE ATT&CK",
      "Threat Hunting",
      "Gestión de vulnerabilidades",
    ],
  },
  {
    title: "Cloud e infraestructura",
    skills: [
      "AWS",
      "Azure Arc",
      "Ansible",
      "Linux",
      "Docker",
      "DNS",
    ],
  },
  {
    title: "Datos y automatización",
    skills: [
      "Pandas",
      "MySQL",
      "PostgreSQL",
      "Power BI",
      "Tableau",
      "Jupyter",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">
          04. COMPETENCIAS
        </p>

        <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
          Stack técnico
        </h2>

        <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-500">
          Tecnologías y áreas con las que he trabajado en proyectos,
          formación académica y experiencia profesional.
        </p>

        <div className="mt-14 grid gap-px border border-neutral-900 bg-neutral-900 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group relative bg-black p-6 md:p-8"
            >
              <span className="font-mono text-xs text-neutral-700">
                0{index + 1}
              </span>

              <h3 className="mt-4 font-mono text-lg font-bold text-white">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-800 px-3 py-2 font-mono text-xs text-neutral-500 transition group-hover:border-green-400/20 group-hover:text-neutral-300"
                  >
                    <span className="mr-2 text-green-500">+</span>
                    {skill}
                  </span>
                ))}
              </div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}