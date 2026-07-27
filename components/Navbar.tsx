const navigation = [
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-green-500/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-wider text-green-400"
        >
          fabian@portfolio:~$
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-neutral-400 transition hover:text-green-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <span className="flex items-center gap-2 font-mono text-xs text-neutral-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          ONLINE
        </span>
      </nav>
    </header>
  );
}