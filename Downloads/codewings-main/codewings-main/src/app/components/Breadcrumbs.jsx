import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "../../lib/site";

export default function Breadcrumbs({ currentPage, path }) {
  const items = [
    { name: "Home", item: site.url },
    { name: currentPage, item: `${site.url}${path}` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, item }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item,
    })),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1440px] px-5 pt-8 text-sm text-[#0000FF]/60 sm:px-8 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-[#0000FF] hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[#0000FF]">{currentPage}</li>
        </ol>
      </nav>
    </>
  );
}
