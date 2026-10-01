export default function Header() {
  return (
    <header className="border-b border-black/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold">
          logo
        </span>

        <div className="flex items-center gap-8 text-sm">
          <a
            href="/content"
            className="transition-opacity hover:opacity-60"
          >
            conteúdo
          </a>

          <a
            href="/about"
            className="transition-opacity hover:opacity-60"
          >
            sobre
          </a>

          <a
            href="/overview"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-80"
          >
            quero conhecer
          </a>
        </div>
      </nav>
    </header>
  )
}