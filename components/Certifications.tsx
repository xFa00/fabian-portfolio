const certifications = [
  {
    name: "JavaScript Essentials 1",
    provider: "Cisco",
    year: "2024",
    status: "OBTENIDA",
    url: "https://www.credly.com/badges/72a41c12-6bf0-47e1-95a1-ffbafebe91f1",
  },
  {
    name: "Applied Machine Learning in Python",
    provider: "Coursera",
    year: "2024",
    status: "OBTENIDA",
    url: "https://www.coursera.org/share/601b9b05592b8a5b8a91e18bcfe03df4",
  },
  {
    name: "Introduction to Data Science in Python",
    provider: "Coursera",
    year: "2022",
    status: "OBTENIDA",
    url: "https://www.coursera.org/account/accomplishments/verify/FUY8VBZWQS67",
  },
  {
    name: "CCNA: Introduction to Networks",
    provider: "Cisco",
    year: "2025",
    status: "OBTENIDA",
    url: "https://www.credly.com/badges/dea3bbe2-5240-4ab0-918b-90c27249438e/public_url",
  },
  {
    name: "Google Cloud Computing Foundations",
    provider: "Google Cloud",
    year: "2025",
    status: "OBTENIDA",
    url: "https://www.skills.google/public_profiles/d6802c34-c534-4620-960a-48ac79df0f4e/badges/20506940",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    year: "2026",
    status: "EN PREPARACIÓN",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "AWS Certified AI Practitioner",
    provider: "Amazon Web Services",
    year: "2026",
    status: "EN PREPARACIÓN",
    url: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-green-500/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-green-400">
          05. CERTIFICACIONES
        </p>

        <h2 className="mt-4 font-mono text-3xl font-bold text-white md:text-4xl">
          Formación y credenciales
        </h2>

        <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-neutral-500">
          Certificaciones y cursos orientados a desarrollo, análisis de datos,
          redes, inteligencia artificial y computación en la nube.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => {
            const isCompleted = certification.status === "OBTENIDA";

            return (
              <a
                key={certification.name}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border border-neutral-900 bg-neutral-950/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/50"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                      {certification.provider}
                    </p>

                    <h3 className="mt-3 font-mono text-base font-bold leading-7 text-white transition group-hover:text-green-400">
                      {certification.name}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 border px-2 py-1 font-mono text-[10px] tracking-widest ${
                      isCompleted
                        ? "border-green-400/30 text-green-400"
                        : "border-yellow-500/30 text-yellow-400"
                    }`}
                  >
                    {certification.status}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-neutral-900 pt-5">
                  <span className="font-mono text-xs text-neutral-600">
                    {certification.year}
                  </span>

                  <span className="font-mono text-xs text-neutral-500 transition group-hover:text-green-400">
                    {isCompleted ? "Ver credencial" : "Ver certificación"}
                    <span className="ml-2">↗</span>
                  </span>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}