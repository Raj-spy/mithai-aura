import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { site } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "About Theeditroom Labs | Meet Our Founder & People",
  description: "Meet Raj Tayde, founder of Theeditroom Labs in Indore. We build production-ready AI systems, digital products, standout brands, and growth experiences.",
  path: "/about",
});

const founderStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about#raj-tayde`,
  name: site.founder.name,
  jobTitle: site.founder.jobTitle,
  description: site.founder.description,
  url: site.founder.url,
  sameAs: [site.founder.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  worksFor: { "@id": `${site.url}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs currentPage="About" path="/about" />
      <JsonLd data={founderStructuredData} />
      <main className="px-5 pb-20 pt-10 text-[#0000FF] sm:px-8 sm:pb-28 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0000FF]/60">People behind the work</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl">
            Good ideas need people who can make them real.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#0000FF]/75 sm:text-xl">
            {site.description} We bring creative thinking and production-minded engineering together, from the first sketch to the systems running in the real world.
          </p>

          <section aria-labelledby="founder-heading" className="mt-14 grid gap-8 border-t border-[#0000FF]/20 py-8 md:grid-cols-[0.45fr_1fr] md:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0000FF]/55">Founder · Indore, India</p>
              <h2 id="founder-heading" className="mt-3 text-3xl font-semibold tracking-[-0.06em]">{site.founder.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#0000FF]/65">{site.founder.jobTitle}</p>
              <a href={site.founder.url} target="_blank" rel="me noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#0000FF]/25 px-4 text-sm font-semibold hover:bg-[#0000FF] hover:text-white">
                Connect on LinkedIn ↗
              </a>
            </div>
            <div>
              <p className="text-base leading-relaxed text-[#0000FF]/80">{site.founder.description}</p>
              <p className="mt-5 text-base leading-relaxed text-[#0000FF]/80">
                Raj created <span className="font-semibold">LLM Drift Monitor</span>, an open-source observability platform for tracking cost, latency, and output quality in LLM applications.
              </p>
            </div>
          </section>

          <section aria-labelledby="team-heading" className="border-t border-[#0000FF]/20 py-8">
            <h2 id="team-heading" className="text-2xl font-semibold tracking-[-0.05em]">The team</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0000FF]/70">
              Team details: TODO — add confirmed team member names and biographies when ready.
            </p>
          </section>

          <div className="flex flex-wrap gap-5 border-t border-[#0000FF]/20 pt-6 text-sm font-semibold">
            <a href={site.instagram} target="_blank" rel="me noreferrer" className="underline underline-offset-4">Theeditroom Labs on Instagram</a>
            <a href={site.founder.url} target="_blank" rel="me noreferrer" className="underline underline-offset-4">Raj Tayde on LinkedIn</a>
          </div>
        </div>
      </main>
    </>
  );
}
