export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-green-500/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-bold text-white">
            Fabián Chiran
            <span className="text-green-400">.</span>
          </p>

          <p className="mt-1 font-mono text-xs text-neutral-700">
            Cybersecurity · Cloud · Automation · Data
          </p>
        </div>

        <div className="font-mono text-xs text-neutral-700 md:text-right">
          <p>© {currentYear} Fabián Chiran</p>
          <p className="mt-1">Construido con Next.js y constancia.</p>
        </div>
      </div>
    </footer>
  );
}