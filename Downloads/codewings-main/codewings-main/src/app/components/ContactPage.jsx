'use client';

import { motion } from 'framer-motion';
import WhatsAppEnquiryForm from './WhatsAppEnquiryForm';
import { site } from '../../lib/site';

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#0000FF] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full border border-white/15 sm:h-[36rem] sm:w-[36rem]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Start a conversation</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl">
            You bring the “what if.” We&apos;ll bring the next step.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Tell us what you&apos;re working on. We&apos;ll help you find a smart, practical way to make it real.
          </p>

          <div className="mt-10 space-y-6 text-white/85">
            <div>
              <p className="text-sm font-medium text-white/55">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 inline-block text-lg hover:underline">{site.email}</a>
            </div>
            <div>
              <p className="text-sm font-medium text-white/55">Call or WhatsApp</p>
              <a href={`tel:${site.phone}`} className="mt-1 inline-block text-lg hover:underline">{site.phoneDisplay}</a>
            </div>
            <p className="text-sm text-white/65">Based in Indore, Madhya Pradesh, India.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="rounded-[1.75rem] bg-white/10 p-5 ring-1 ring-white/25 backdrop-blur-sm sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">A few details, then straight to WhatsApp.</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">Your message will be prepared for you to review and send. Nothing is submitted without your action.</p>
          <div className="mt-7">
            <WhatsAppEnquiryForm compact />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
