import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { site } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "AI, Product & Brand Services | Theeditroom Labs Studio",
  description: "Explore AI engineering, digital product development, brand strategy, and growth services from Theeditroom Labs. Let's build something useful.",
  path: "/services",
});

const services = [
  {
    name: "AI systems and automation",
    description: "Custom copilots, agents, LLM products, and intelligent workflows designed to solve real problems and run reliably.",
  },
  {
    name: "Digital products and technology",
    description: "Product engineering, web platforms, data experiences, and integrations built to be fast, useful, and ready to grow.",
  },
  {
    name: "Brand strategy and creative",
    description: "Positioning, visual identity, campaigns, and creative direction that help the right people notice and remember you.",
  },
  {
    name: "Growth, social, and community",
    description: "Content systems, social strategy, community, and practical growth experiments that turn attention into momentum.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${site.url}/#organization` },
    url: `${site.url}/services`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs currentPage="Services" path="/services" />
      <JsonLd data={structuredData} />
      <main className="px-5 pb-20 pt-10 text-[#0000FF] sm:px-8 sm:pb-28 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0000FF]/60">What we make possible</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl">The right mix of imagination and engineering.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#0000FF]/75 sm:text-xl">{site.description}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.name} className="rounded-[1.5rem] border border-[#0000FF]/15 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0000FF]/50">0{index + 1} / SERVICE</p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.05em] sm:text-3xl">{service.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#0000FF]/70 sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#0000FF] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            Tell us what you need ↗
          </Link>
        </div>
      </main>
    </>
  );
}
