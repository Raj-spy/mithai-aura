 // src/app/components/Statement.jsx
'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const LINES = [
  'In a world of digital noise, we create signal.',
  'Our work cuts through the chaos with strategic clarity and creative courage,',
  "transforming passive viewers into active participants in your brand's journey.",
];

function ProLine({ text, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '0px 0px -20% 0px', once: true });
  const prefersReduced = useReducedMotion();

  const baseColor = 'rgb(255 255 255 / 0.75)';
  const focusColor = 'rgb(255 255 255)';

  const animated = !prefersReduced && inView;

  return (
    <div className="relative overflow-hidden">
      {/* Wipe mask */}
      <motion.span
        aria-hidden
        className="absolute inset-y-0 left-0 w-full bg-white/10"
        initial={{ x: '-100%' }}
        animate={animated ? { x: '100%' } : {}}
        transition={{ duration: 1.8, ease: 'easeInOut', delay: index * 0.15 }} // slow, smooth
      />
      <motion.p
        ref={ref}
        className="tracking-tight will-change-transform"
        style={{
          fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)', // medium, professional
          lineHeight: 1.3,
          letterSpacing: '-0.012em',
          fontWeight: 500,
          fontFamily: "'IBM Plex Sans', 'Inter', sans-serif", // modern professional
        }}
        initial={{ y: 25, opacity: 0.55, color: baseColor }}
        animate={
          animated
            ? {
                y: 0,
                opacity: 1,
                color: focusColor,
                letterSpacing: '-0.016em',
                fontWeight: 500,
              }
            : {}
        }
        transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.15 + 0.1 }}
      >
        {text}
      </motion.p>
    </div>
  );
}

export default function Statement() {
  return (
    <section className="relative bg-[#0000FF]">
      {/* Soft gradient edges for seamless blending */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-[#0000FF]/0 to-[#0000FF]/50" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-[#0000FF]/0 to-[#0000FF]/50" />
      <div className="pointer-events-none absolute inset-0 bg-[#0000FF]/10" />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-between py-16 sm:py-20">
          <div className="space-y-4">
            {LINES.map((t, i) => (
              <ProLine key={i} text={t} index={i} />
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/start"
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-base ring-1 ring-white text-[#0000FF] shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:bg-white/90 transition-colors duration-300 font-medium"
            >
              Start a project ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
