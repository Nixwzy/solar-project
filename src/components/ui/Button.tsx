import Link from 'next/link';

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-(--foreground) px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
}
