import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-(--border) bg-(--background)">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          logo
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/content"
            className="text-(--muted) transition-colors hover:text-(--foreground)"
          >
            conteúdo
          </Link>

          <Link
            href="/about"
            className="text-(--muted) transition-colors hover:text-(--foreground)"
          >
            sobre
          </Link>

          <Link
            href="/overview"
            className="rounded-full bg-(--foreground) px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            quero conhecer
          </Link>
        </div>
      </nav>
    </header>
  );
}