export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-green-500/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div
            aria-hidden="true"
            className="relative flex h-12 w-12 items-center justify-center"
          >
            <div className="absolute h-7 w-7 rotate-45 border border-green-400/30" />
            <div className="absolute h-7 w-7 border border-green-400/30" />
            <div className="h-2 w-2 rounded-full bg-green-400/70 shadow-[0_0_16px_rgba(34,197,94,0.35)]" />
          </div>

          <div>
            <p className="font-mono text-sm font-bold text-white">
              Fabián Chiran
              <span className="text-green-400">.</span>
            </p>

            <p className="mt-1 font-mono text-xs text-neutral-700">
              Cybersecurity · Cloud · Automation · Data
            </p>
          </div>
        </div>

        <div className="font-mono text-xs text-neutral-700 md:text-right">
          <p>© {currentYear} Fabián Chiran</p>
          <p className="mt-1">Construido con Next.js y constancia.</p>
        </div>
      </div>
    </footer>
  );
}