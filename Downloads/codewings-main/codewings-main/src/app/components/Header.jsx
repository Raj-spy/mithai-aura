import Link from "next/link";

const links = [
  // ["Work", "/projects"],
  ["Services", "/services"],
  // ["About", "/about"],
  ["Process", "/#process"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0000FF]/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="text-[#0000FF]" aria-label="Theeditroom Labs home">
          <span className="text-lg font-semibold tracking-[-0.06em]">Theeditroom Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-[#0000FF]/70 transition-colors hover:text-[#0000FF]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden min-h-11 items-center gap-3 rounded-full bg-[#0000FF] px-5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
          <details className="group relative md:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[#0000FF]/25 px-4 text-sm font-semibold text-[#0000FF] [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav className="absolute right-0 top-[calc(100%+0.75rem)] flex w-52 flex-col rounded-2xl border border-[#0000FF]/15 bg-white p-2 shadow-[0_16px_40px_rgba(0,0,255,0.12)]" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm font-medium text-[#0000FF] transition-colors hover:bg-[#0000FF] hover:text-white">
                  {label}
                </Link>
              ))}
              <Link href="/contact" className="mt-1 rounded-xl bg-[#0000FF] px-4 py-3 text-sm font-semibold text-white">
                Let&apos;s talk ↗
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
