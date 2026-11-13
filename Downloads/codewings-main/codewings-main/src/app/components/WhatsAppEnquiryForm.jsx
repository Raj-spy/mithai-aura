'use client';

import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { site } from '../../lib/site';

export default function WhatsAppEnquiryForm({ compact = false }) {
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const projectDetails = formData.get('challenge');
    const message = [
      `Hello ${site.name},`,
      '',
      "I'd like to discuss a project. Here are my details:",
      '',
      'CONTACT DETAILS',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      '',
      'SERVICE OF INTEREST',
      service || 'Not sure yet — I would appreciate your recommendation.',
      '',
      'PROJECT BRIEF',
      projectDetails,
      '',
      'Looking forward to hearing from you!',
    ].filter((line) => line !== null).join('\n');
    const url = createWhatsAppUrl(message);

    setWhatsAppUrl(url);
    setStatus('Your enquiry is ready in WhatsApp. Review it there and press Send to reach us.');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <label className="grid gap-2 text-sm font-semibold">
        Your name
        <input required name="name" autoComplete="name" placeholder="What should we call you?" className="min-h-12 rounded-xl border border-white/35 bg-white/10 px-4 font-normal text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/20" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email address
        <input required type="email" name="email" autoComplete="email" placeholder="you@yourthing.com" className="min-h-12 rounded-xl border border-white/35 bg-white/10 px-4 font-normal text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/20" />
      </label>
      <label className={`grid gap-2 text-sm font-semibold ${compact ? '' : 'sm:col-span-2'}`}>
        Phone number <span className="font-normal text-white/65">(optional)</span>
        <input type="tel" name="phone" autoComplete="tel" placeholder="+91 98765 43210" className="min-h-12 rounded-xl border border-white/35 bg-white/10 px-4 font-normal text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/20" />
      </label>
      <label className={`grid gap-2 text-sm font-semibold ${compact ? '' : 'sm:col-span-2'}`}>
        What are you working on?
        <textarea required name="challenge" rows={compact ? 4 : 3} placeholder="The big idea, the stuck bit, or the thing keeping you up at night..." className="resize-y rounded-xl border border-white/35 bg-white/10 px-4 py-3 font-normal text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/20" />
      </label>
      <label className={`grid gap-2 text-sm font-semibold ${compact ? '' : 'sm:col-span-2'}`}>
        What kind of help sounds right?
        <select name="service" defaultValue="" className="min-h-12 rounded-xl border border-white/35 bg-[#0000FF] px-4 font-normal text-white outline-none focus:border-white focus:ring-2 focus:ring-white/20">
          <option value="">Not sure yet — help me figure it out</option>
          <option>AI, agents &amp; automation</option>
          <option>Product &amp; technology</option>
          <option>Brand &amp; creative</option>
          <option>Growth, social &amp; community</option>
          <option>A mix of everything</option>
        </select>
      </label>
      <div className={`flex flex-col gap-3 pt-2 ${compact ? '' : 'sm:col-span-2 sm:flex-row sm:items-center'}`}>
        <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-5 self-start rounded-full bg-white px-6 text-sm font-bold text-[#0000FF] transition-transform hover:-translate-y-0.5">
          Continue to WhatsApp <Send size={17} />
        </button>
        <p className="text-xs leading-relaxed text-white/65">Your message opens in WhatsApp, where you can review it and tap Send.</p>
      </div>
      {status && (
        <div className={compact ? '' : 'sm:col-span-2'} role="status" aria-live="polite">
          <p className="text-sm text-white">{status}</p>
          <a href={whatsAppUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Open WhatsApp chat with {site.phoneDisplay} <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </form>
  );
}
