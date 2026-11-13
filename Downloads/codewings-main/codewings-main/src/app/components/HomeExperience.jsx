'use client';

import { useReducedMotion, useScroll, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Bot,
  Check,
  Cpu,
  Sparkles,
  Workflow,
} from 'lucide-react';
import LogoLoop from '../../components/LogoLoop';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import WhatsAppEnquiryForm from './WhatsAppEnquiryForm';

const capabilities = [
  'AI systems',
  'Digital products',
  'Brand worlds',
  'Growth engines',
  'Social energy',
  'Community',
];

const projects = [
  {
    number: '01',
    name: 'Break A Leg',
    type: 'Digital experience · Entertainment',
    description: 'Made finding a night out feel like part of the show.',
    video: '/brand.mp4',
    shape: 'md:col-span-7',
  },
  {
    number: '02',
    name: 'Intellect',
    type: 'Campaign · Fintech',
    description: 'A scroll-stopping campaign with a clear job to do.',
    video: '/break-a-leg-intro.mp4',
    shape: 'md:col-span-5 md:mt-28',
  },
  {
    number: '03',
    name: 'Dashboard Pro',
    type: 'Product · Data',
    description: 'A lot of information. A much easier next move.',
    video: '/development.mp4',
    shape: 'md:col-span-5',
  },
  {
    number: '04',
    name: 'Conversion Engine',
    type: 'Growth · Digital product',
    description: 'A faster, more considered journey from browse to buy.',
    video: '/Web_design.mp4',
    shape: 'md:col-span-7 md:mt-28',
  },
];

const services = [
  {
    icon: Bot,
    number: '01',
    title: 'AI that earns its keep.',
    description: 'Custom copilots, agents, and intelligent workflows that solve real problems—not just look good in a demo.',
    capabilities: ['AI agents', 'LLM products', 'Workflow automation', 'Applied AI'],
    joke: '“Can it do the boring bit?”',
    video: '/development.mp4',
    color: 'bg-[#0000FF] text-white',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Technology with a pulse.',
    description: 'Digital products and platforms engineered to be fast, useful, and ready for what comes next.',
    capabilities: ['Product engineering', 'Web platforms', 'Data experiences', 'Integrations'],
    joke: '“It works on my laptop.”',
    video: '/Web_design.mp4',
    color: 'bg-white text-[#0000FF]',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Brands with main-character energy.',
    description: 'Clear positioning and distinctive identities that make the right people stop scrolling.',
    capabilities: ['Brand strategy', 'Visual identity', 'Campaigns', 'Creative direction'],
    joke: '“Make it pop.” — everyone',
    video: '/brand.mp4',
    color: 'bg-white text-[#0000FF]',
  },
  {
    icon: Workflow,
    number: '04',
    title: 'Growth that feels like you.',
    description: 'The content, community, and distribution system that turns attention into actual momentum.',
    capabilities: ['Social strategy', 'Content systems', 'Community', 'Growth experiments'],
    joke: '“We need to go viral.”',
    video: '/break-a-leg-intro.mp4',
    color: 'bg-[#0000FF] text-white',
  },
];

const steps = [
  ['01', 'Get the real brief', 'The goal, the people, the messy bits. We want the context behind the request.'],
  ['02', 'Make a smart plan', 'A clear direction, a practical scope, and no mysterious black boxes.'],
  ['03', 'Build in the open', 'Small milestones, real prototypes, useful feedback. You see the thing take shape.'],
  ['04', 'Ship & learn', 'Launch is a beginning. We measure what matters and improve what comes next.'],
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, copy, inverse = false }) {
  return (
    <Reveal className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.62fr] md:items-end">
      <div>
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${inverse ? 'text-white/70' : 'text-[#0000FF]/65'}`}>
          {eyebrow}
        </p>
        <h2 className={`max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl md:text-7xl ${inverse ? 'text-white' : 'text-[#0000FF]'}`}>
          {title}
        </h2>
      </div>
      <p className={`max-w-lg text-base leading-relaxed md:justify-self-end md:text-lg ${inverse ? 'text-white/80' : 'text-[#0000FF]/75'}`}>
        {copy}
      </p>
    </Reveal>
  );
}

function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal className={project.shape}>
      <a href="#contact" className="group block">
        <div className="relative aspect-[1.12] overflow-hidden rounded-[1.6rem] bg-[#0000FF] sm:aspect-[1.25]">
          <motion.video
            className="h-full w-full object-cover"
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            controls={reduceMotion}
            preload="metadata"
            src={project.video}
            whileHover={reduceMotion ? undefined : { scale: 1.035 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0000FF]/65 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-[#0000FF]">
            {project.number}
          </span>
          <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/65 text-white transition-colors group-hover:bg-white group-hover:text-[#0000FF]">
            <ArrowUpRight size={19} />
          </span>
        </div>
        <div className="flex flex-col gap-2 px-1 pt-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0000FF] sm:text-3xl">{project.name}</h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-[#0000FF]/70 sm:text-base">{project.description}</p>
          </div>
          <span className="shrink-0 pt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0000FF]/55">{project.type}</span>
        </div>
      </a>
    </Reveal>
  );
}

export default function HomeExperience() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const labels = capabilities.map((label) => ({
    node: (
      <span className="inline-flex items-center gap-5 text-sm font-semibold uppercase tracking-[0.12em] text-white sm:text-base">
        {label}<Asterisk aria-hidden="true" size={20} strokeWidth={1.5} />
      </span>
    ),
    ariaLabel: label,
  }));

  return (
    <main className="overflow-hidden bg-white text-[#0000FF]">
      <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-[#0000FF]" style={{ scaleX: scrollYProgress }} />

      <section className="relative px-5 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pt-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0000FF]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#0000FF]" />
              Your friendly neighborhood tech studio
            </div>
            <h1 className="max-w-4xl text-[clamp(3.55rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Big ideas.
              <br />
              <span className="relative inline-block">Serious tech<span aria-hidden="true" className="absolute -right-7 top-0 text-[0.3em] tracking-normal sm:-right-10">*</span></span>
              <br />
              Good chaos.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0000FF]/75 sm:mt-8 sm:text-xl">
              We build AI, digital products, standout brands, and growth communities for people who are ready to do something different.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <a href="#contact" className="group inline-flex min-h-14 items-center gap-6 rounded-full bg-[#0000FF] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
                Tell us the big idea <ArrowUpRight size={18} />
              </a>
              <a href="#work" className="inline-flex min-h-14 items-center gap-2 rounded-full border border-[#0000FF]/25 px-6 text-sm font-semibold transition-colors hover:bg-[#0000FF] hover:text-white">
                See what we make
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#0000FF]/60 sm:mt-9">
              <span className="inline-flex items-center gap-1.5"><Check size={14} /> Strategy through shipping</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#0000FF]/40 sm:block" />
              <span>Small team. Wildly useful ideas.</span>
            </div>
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-[620px] lg:max-w-none" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative aspect-[1.08] overflow-hidden rounded-[2rem] bg-[#0000FF] sm:aspect-[1.06] lg:aspect-[1.02]">
              <video className="absolute inset-0 h-full w-full object-cover" autoPlay={!reduceMotion} controls={reduceMotion} muted loop playsInline preload="metadata" src="/hero-video.mp4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0000FF]/75 via-transparent to-[#0000FF]/10" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">Somewhere between “what if?” and “it shipped.”</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">That&apos;s our zone.</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/60"><ArrowDown size={18} /></span>
              </div>
            </div>
            <motion.div className="absolute -left-2 top-7 max-w-[178px] rotate-[-4deg] rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,255,0.16)] sm:-left-8 sm:top-12 sm:max-w-[205px] sm:p-5" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0000FF]/60">The brief</p>
              <p className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] sm:text-xl">“Can we make it feel… inevitable?”</p>
              <p className="mt-2 text-[10px] font-medium text-[#0000FF]/60">Us: say less. (Actually, say more.)</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1440px] items-center justify-between border-t border-[#0000FF]/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0000FF]/55 sm:mt-16 sm:text-xs">
          <span>Scroll for the good stuff</span><span className="hidden sm:inline">Make it useful. Make it matter.</span><ArrowDown size={15} />
        </div>
      </section>

      <section aria-label="Studio capabilities" className="bg-[#0000FF] py-6 text-white sm:py-8">
        <LogoLoop logos={labels} speed={36} gap={28} logoHeight={24} fadeOut fadeOutColor="#0000ff" pauseOnHover ariaLabel="Studio capabilities" />
      </section>

      <section className="overflow-hidden bg-[#f4f2e9] px-5 py-16 text-[#0000FF] sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-9 flex items-center justify-between border-y border-[#0000FF]/20 py-3 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
            <span className="inline-flex items-center gap-2"><Asterisk size={15} /> The internet is our office</span>
            <span className="hidden sm:inline">Good work. Good weird.</span>
            <span>Est. whenever the group chat wakes up</span>
          </div>

          <div className="grid gap-8 pb-10 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-12">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0000FF]/60">A little less agency. A little more us.</p>
              <h2 className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-[6.5rem]">
                Serious about the work.
                <span className="block text-[#0000FF]/45"> unserious about the rest.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-[#0000FF]/75 md:justify-self-end md:text-lg">
                We speak fluent internet, ask better questions, and know when the best idea starts with “okay, hear me out…”
              </p>
            </Reveal>
          </div>

          <div className="grid auto-rows-fr gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white">
                <div className="relative min-h-[260px] flex-1 overflow-hidden sm:min-h-[360px]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src="/meme-called-cat.webp"
                    alt="A curious cat looking directly at the camera"
                    width={736}
                    height={981}
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f4f2e9] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] sm:left-6 sm:top-6">01 / The brainstorm</span>
                  <span aria-hidden="true" className="absolute bottom-4 right-5 rotate-[-8deg] rounded-full bg-[#c8ef5b] px-4 py-2 text-xs font-black text-[#0000FF] shadow-lg sm:bottom-6 sm:right-7 sm:text-sm">“You called?”</span>
                </div>
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0000FF]/50">When the brief says “let’s explore AI”</p>
                    <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-4xl">The AI joined the meeting before the calendar invite.</h3>
                  </div>
                  <span className="shrink-0 text-3xl" aria-hidden="true">↗</span>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.08}>
              <article className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-[#c8ef5b] p-6 sm:min-h-[440px] sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-[#0000FF]/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em]">02 / Human × machine</span>
                  <Bot size={24} strokeWidth={1.6} />
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute right-[-3rem] top-[20%] h-56 w-56 rounded-full border border-[#0000FF]/20 sm:right-[-2rem] sm:h-72 sm:w-72" />
                <div aria-hidden="true" className="pointer-events-none absolute right-8 top-[27%] grid h-40 w-40 rotate-6 place-items-center rounded-[2rem] bg-[#0000FF] text-[#c8ef5b] shadow-[12px_12px_0_rgba(0,0,255,0.12)] sm:right-12 sm:h-48 sm:w-48">
                  <Bot size={88} strokeWidth={1.1} />
                </div>
                <div className="relative z-10 mt-44 sm:mt-52">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0000FF]/55">A very modern office dynamic</p>
                  <h3 className="mt-3 max-w-sm text-3xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-5xl">“I did it myself.”<br /><span className="text-[#0000FF]/55">— with 14 tabs open</span></h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#0000FF]/75">The future is collaborative. Some collaborators just autocomplete.</p>
                </div>
                <span className="absolute right-7 top-[48%] rotate-[-9deg] rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[#0000FF]">totally human idea</span>
              </article>
            </Reveal>

            <Reveal className="md:col-span-12" delay={0.12}>
              <article className="group grid overflow-hidden rounded-[1.75rem] bg-[#0000FF] text-white md:min-h-[270px] md:grid-cols-[1fr_0.82fr]">
                <div className="flex flex-col justify-between p-6 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em]">03 / The plot twist</span>
                    <span className="text-2xl transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">✳</span>
                  </div>
                  <div className="mt-10">
                    <h3 className="max-w-2xl text-3xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-5xl">It started as a “quick little idea.”<br /><span className="text-white/55">Then it went live.</span></h3>
                    <p className="mt-4 text-sm text-white/65">The best kind of chaos has a launch date.</p>
                  </div>
                </div>
                <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay={!reduceMotion}
                    muted
                    loop
                    playsInline
                    controls={reduceMotion}
                    preload="metadata"
                    src="/footer-video.mp4"
                    aria-label="Celebrating a project launch"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0000FF]/40 via-transparent to-transparent md:bg-gradient-to-l" />
                </div>
              </article>
            </Reveal>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-[#0000FF]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-[#0000FF]/60">We promise the work is more polished than our group chat.</p>
            <a href="#contact" className="inline-flex min-h-11 items-center gap-3 self-start rounded-full bg-[#0000FF] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:self-auto">
              Bring us your “hear me out” <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#0000FF] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle eyebrow="What we actually do" title="Not another agency bingo card." copy="We bring the right mix of brains and builders around the outcome you need—then stay close until the work is out in the world." inverse />
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={index * 0.06}>
                  <article className={`group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[1.5rem] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${service.color}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.17em] opacity-65">{service.number} / CAPABILITY</span>
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="relative mt-4 aspect-[2.4] overflow-hidden rounded-xl bg-[#0000FF]">
                      <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay={!reduceMotion} controls={reduceMotion} muted loop playsInline preload="metadata" src={service.video} aria-label={`${service.title} studio reel`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0000FF]/50 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-[#0000FF]/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">In the lab ↗</span>
                    </div>
                    <h3 className="mt-5 max-w-md text-3xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-4xl">{service.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed opacity-75 sm:text-base">{service.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {service.capabilities.map((capability) => (
                        <span key={capability} className="rounded-full border border-current/25 px-3 py-1.5 text-[10px] font-medium sm:text-xs">{capability}</span>
                      ))}
                    </div>
                    <p className="pointer-events-none absolute bottom-6 right-7 hidden rotate-[-5deg] rounded-full border border-current/20 px-3 py-1.5 text-[10px] font-semibold opacity-0 transition-all duration-300 group-hover:opacity-70 sm:block">{service.joke}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/75">Already have an in-house team? We slot in. Need an idea taken from whiteboard to wow? We do that too.</p>
            <a href="#contact" className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white">Tell us what you need <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle eyebrow="Receipts, not promises" title="A few things we put into the world." copy="Every project starts with a different challenge. The throughline is turning a good idea into something real people can use, feel, or remember." />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-12 md:gap-y-20">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] bg-[#0000FF] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <SectionTitle eyebrow="How the magic gets made" title="Low drama. High momentum." copy="You get a real team, a clear plan, and a front-row seat. No black-box process. No vanishing after kickoff." inverse />
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 0.06} className="h-full">
                <div className="h-full border-t border-white/35 py-5 sm:mr-5 lg:mr-7">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50 text-[10px] font-bold">{number}</span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em]">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0000FF]/60">A little about us</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl">We like big swings. And getting the details right.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[clamp(1.6rem,3.8vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.055em]">
              A small, senior crew of strategists, designers, engineers, and internet people. We bring curiosity to the hard problems and good energy to the whole process.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Good questions first', 'Built together', 'No mystery handoffs', 'Here for the long game'].map((value) => (
                <span key={value} className="rounded-full border border-[#0000FF]/20 px-4 py-2 text-xs font-semibold">{value}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-16 pt-6 sm:px-8 sm:pb-24 lg:px-12">
        <Reveal className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0000FF] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/25 sm:-right-10 sm:-top-44 sm:h-[30rem] sm:w-[30rem]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-12 h-44 w-44 rounded-full border border-white/15 sm:right-16 sm:-top-20 sm:h-64 sm:w-64" />
            <div className="relative z-10 grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Your next tab should be this one</p>
                <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl">Tell us what you&apos;re dreaming up.</h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">The half-formed thought. The too-big roadmap. The “there has to be a better way” thing. We&apos;re all ears.</p>
                <a href={createWhatsAppUrl('Hi Theeditroom Labs, I would like to discuss a project.')} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">Message us on WhatsApp · +91 97551 60469 <ArrowUpRight size={16} /></a>
              </div>
              <WhatsAppEnquiryForm />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
