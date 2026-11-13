 // src/app/components/WorkGrid.jsx
"use client";

function WorkCard({ webm, mp4, tags = [], title, desc }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[#0000FF]/80 ring-1 ring-white/30">
      <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <video className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" autoPlay muted loop playsInline preload="metadata">
          {webm && <source src={webm} type="video/webm" />}
          <source src={mp4} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/30 rounded-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0000FF]/50 via-[#0000FF]/0 to-[#0000FF]/0" />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-white px-3 py-1 text-xs text-[#0000FF]">{t}</span>
          ))}
        </div>
        <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-white/70">{desc}</p>
      </div>
    </article>
  );
}

export default function WorkGrid({ titleTop = "Turning Vision", titleBottom = "Into Voltage", ctaHref = "/work", items = [] }) {
  return (
    <section className="relative">
      {/* merge fades */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-[#0000FF]/0 to-[#0000FF]/40" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-[#0000FF]/0 to-[#0000FF]/40" />

      {/* faint section tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#0000FF]/10" />

      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl pt-16 md:pt-20 flex items-start justify-between gap-6">
          <h2 className="leading-tight font-extrabold tracking-tight text-white">
            <span className="block" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>{titleTop}</span>
            <span className="block text-white" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>{titleBottom}</span>
          </h2>
          <a href={ctaHref} className="hidden sm:inline-flex items-center rounded-full bg-white px-5 py-3 text-sm text-[#0000FF] ring-1 ring-white shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:bg-white/90">
            See All Work ↗
          </a>
        </div>

        <div className="mx-auto max-w-[1800px] mt-8 md:mt-10">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {items.map((it) => <WorkCard key={it.slug} {...it} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
