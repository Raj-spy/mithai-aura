import Link from "next/link";
import { site } from "../../lib/site";

const navigation = [
  ["Home", "/"],
  // ["About", "/about"],
  ["Services", "/services"],
  // ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0000FF]/15 bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="text-[#0000FF]">
            <span className="text-lg font-semibold tracking-[-0.06em]">Theeditroom Labs</span>
          </Link>
          <p className="mt-3 text-sm text-[#0000FF]/70">Good ideas deserve great execution.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-[#0000FF]/70 transition-colors hover:text-[#0000FF]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-4">
            <a href={site.instagram} target="_blank" rel="me noreferrer" className="text-sm font-medium text-[#0000FF]/70 transition-colors hover:text-[#0000FF]">Instagram ↗</a>
            {/* <a href={site.founder.url} target="_blank" rel="me noreferrer" className="text-sm font-medium text-[#0000FF]/70 transition-colors hover:text-[#0000FF]">LinkedIn ↗</a> */}
          </div>
          <p className="text-xs text-[#0000FF]/60">© {new Date().getFullYear()} Theeditroom Labs</p>
        </div>
      </div>
    </footer>
  );
}
