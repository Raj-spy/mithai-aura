'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    k: 'discovery',
    title: 'Discovery',
    time: '2–3 days',
    desc: 'Align on goals, users, and success metrics—map constraints and opportunities.',
    bullet: ['Stakeholder workshop', 'Scope + risk log', 'Delivery plan & estimate'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    k: 'design',
    title: 'Design',
    time: '1–2 weeks',
    desc: 'Rapid prototypes and systemized UI to validate experience before code.',
    bullet: ['Flows & wireframes', 'Design tokens + components', 'Interactive prototype'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M7 4v16M4 17h16M17 4v16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    k: 'dev',
    title: 'Development',
    time: '2–6 weeks',
    desc: 'Agile sprints with previews, tests, and performance budgets.',
    bullet: ['Next.js + Node/TS', 'CI/CD + preview envs', 'Perf + security gates'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 8h16M4 12h10M4 16h7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    k: 'launch',
    title: 'Launch & Scale',
    time: '2–5 days',
    desc: 'Zero‑downtime launch with analytics, SLOs, and roadmap for growth.',
    bullet: ['Blue/green deploy', 'Observability + alerts', 'Post‑launch iteration'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { margin: '0px 0px -15% 0px', once: true });
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.25, 0.85]); // line glow intensity

  return (
    <section className="relative py-28 sm:py-32">
      {/* Ambient brand tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_480px_at_8%_0%,rgba(255,255,255,0.12),transparent_65%)]" />

      <div ref={wrapRef} className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <header className="text-center">
          <motion.h3
            initial={{ y: 12, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-white font-semibold tracking-wider uppercase"
          >
            Process • How We Work
          </motion.h3>
          <motion.h2
            initial={{ y: 14, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mt-3 font-extrabold leading-[0.94] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 6.4vw, 3.8rem)' }}
          >
            Organized, transparent, and engineered for outcomes.
          </motion.h2>
        </header>

        {/* Curved animated path */}
        <div className="relative mt-16">
          <svg className="absolute -z-10 left-0 right-0 mx-auto" width="100%" height="360" viewBox="0 0 1200 360">
            {/* base line */}
            <path
              d="M40 290 C 260 90, 480 90, 700 290 S 1120 490, 1160 240"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* glowing gradient overlay */}
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(0,0,255,0.0)" offset="0" />
                <stop stopColor="rgba(255,255,255,0.9)" offset="0.5" />
                <stop stopColor="rgba(0,0,255,0.0)" offset="1" />
              </linearGradient>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
            </defs>
            <motion.path
              d="M40 290 C 260 90, 480 90, 700 290 S 1120 490, 1160 240"
              stroke="url(#g)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              filter="url(#blur)"
              style={{ opacity: glow }}
            />
          </svg>

          {/* Steps on the curve with depth and micro-interactions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {STEPS.map((s, i) => (
              <StepCard key={s.k} index={i} {...s} />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mt-14 flex items-center justify-center"
        >
          <a
            href="/start"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 ring-1 ring-white text-[#0000FF] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:bg-white/90 transition-colors"
          >
            Book a 20‑min intro
            <span className="translate-y-[1px] transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ title, desc, bullet, index, time, icon }) {
  const r = useRef(null);
  const vis = useInView(r, { margin: '0px 0px -20% 0px', once: true });

  // offsets to ride the curve
  const offsets = [16, -8, 10, -6];

  return (
    <motion.div
      ref={r}
      initial={{ y: 28, opacity: 0, scale: 0.98 }}
      animate={vis ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
      className="relative"
      style={{ transform: `translateY(${offsets[index]}px)` }}
    >
      {/* step label + badge */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkpoint active />
          <span className="text-sm tracking-wider text-white/70">Step {index + 1}</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[12px] text-white/75 ring-1 ring-white/10">
          <span className="text-white">{time}</span>
        </span>
      </div>

      <div
        className={[
          'group rounded-2xl bg-[#0000FF]/80 ring-1 ring-white/30',
          'px-5 pb-5 pt-4 backdrop-blur-[2px]',
          'shadow-[0_10px_35px_rgba(255,255,255,0.12)]',
          'transition-transform duration-300 hover:-translate-y-1',
        ].join(' ')}
      >
        <div className="mb-2 flex items-center gap-2 text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20 ring-1 ring-white/30 text-white">
            {icon}
          </span>
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
        <ul className="mt-3 space-y-1.5 text-white/70 text-sm">
          {bullet.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Checkpoint({ active }) {
  return (
    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#0000FF] ring-2 ring-white/60">
      <span className="h-2 w-2 rounded-full bg-white" />
      {active && (
        <>
          <span className="absolute h-8 w-8 rounded-full bg-white/20 blur-md" />
          <span className="absolute h-12 w-12 rounded-full bg-white/10 blur-[10px]" />
        </>
      )}
    </span>
  );
}
