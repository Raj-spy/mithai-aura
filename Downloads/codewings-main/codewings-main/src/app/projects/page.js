import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Product & Brand Projects | Theeditroom Labs",
  description: "Explore selected work from Theeditroom Labs across digital products, campaigns, brand experiences, and growth. See how good ideas ship.",
  path: "/projects",
});

const projects = [
  {
    name: "Break A Leg",
    type: "Digital experience · Entertainment",
    description: "Made finding a night out feel like part of the show.",
    video: "/brand.mp4",
  },
  {
    name: "Intellect",
    type: "Campaign · Fintech",
    description: "A scroll-stopping campaign with a clear job to do.",
    video: "/break-a-leg-intro.mp4",
  },
  {
    name: "Dashboard Pro",
    type: "Product · Data",
    description: "A lot of information. A much easier next move.",
    video: "/development.mp4",
  },
  {
    name: "Conversion Engine",
    type: "Growth · Digital product",
    description: "A faster, more considered journey from browse to buy.",
    video: "/Web_design.mp4",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs currentPage="Projects" path="/projects" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Selected projects by Theeditroom Labs",
        description: "Selected digital product, campaign, data, and growth work.",
        url: "https://theeditroomlabs.vercel.app/projects",
      }} />
      <main className="px-5 pb-20 pt-10 text-[#0000FF] sm:px-8 sm:pb-28 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0000FF]/60">Selected work</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl">Good ideas, out in the world.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#0000FF]/75 sm:text-xl">A selection of product, campaign, data, and growth experiences from Theeditroom Labs.</p>
          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.name} className="group">
                <div className="relative aspect-[1.25] overflow-hidden rounded-[1.5rem] bg-[#0000FF]">
                  <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay muted loop playsInline preload="metadata" src={project.video} aria-label={`${project.name} project preview`} />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-[#0000FF]">0{index + 1}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.05em]">{project.name}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#0000FF]/70">{project.description}</p>
                  </div>
                  <span className="pt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0000FF]/55">{project.type}</span>
                </div>
              </article>
            ))}
          </div>
          <Link href="/contact" className="mt-12 inline-flex min-h-12 items-center rounded-full bg-[#0000FF] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            Start a project ↗
          </Link>
        </div>
      </main>
    </>
  );
}
