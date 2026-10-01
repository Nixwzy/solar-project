'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--border) bg-(--background)">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            logo
          </Link>

          {/* ================= DESKTOP =================  */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
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

          {/* ================= MOBILE =================  */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/overview"
              className="rounded-full bg-(--foreground) px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              quero conhecer
            </Link>

            {/* menuzin */}
            <button
              type="button"
              aria-label={menuOpen ? 'fechar menu' : 'abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-0.5 w-full rounded-full bg-(--foreground) transition-transform ${
                    menuOpen ? 'translate-y-7px rotate-45' : ''
                  }`}
                />

                <span
                  className={`h-0.5 w-full rounded-full bg-(--foreground) transition-opacity ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />

                <span
                  className={`h-0.5 w-full rounded-full bg-(--foreground) transition-transform ${
                    menuOpen ? '-translate-y-7px -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`grid transition-all duration-200 md:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] pb-5 opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-(--border) pt-4">
              <Link
                href="/content"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-(--muted) transition-colors hover:bg-black/5 hover:text-(--foreground)"
              >
                conteúdo
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-(--muted) transition-colors hover:bg-black/5 hover:text-(--foreground)"
              >
                sobre
              </Link>
            </div>
          </div>
        </div>
        
      </nav>
    </header>
  );
}
