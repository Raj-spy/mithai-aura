 'use client';

 import { createWhatsAppUrl } from '../../lib/whatsapp';
 import { site } from '../../lib/site';

 export default function HeroVideoSection() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0000FF]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/poster_1.jpg"
        src="/video_1.mp4"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#0000FF]/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Let’s collaborate
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Next.js • React • Tailwind
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl('Hi Theeditroom Labs, I would like to discuss a project.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white text-[#0000FF] px-5 py-3 text-sm font-medium hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Start a project on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=Collaboration`}
              className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Work with us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient for subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0000FF]/70 to-transparent" />
    </section>
  );
}
