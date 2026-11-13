'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis'; // if using lenis; else remove

export default function ScrollOrchestrator() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll (optional)
    let lenis;
    try {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, smoothTouch: false });
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) { return arguments.length ? lenis.scrollTo(value) : lenis.scroll; },
        getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }; },
        pinType: document.body.style.transform ? 'transform' : 'fixed'
      });
    } catch (_) { /* if Lenis not installed, skip */ }

    // Reveal animations
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    // Parallax media
    gsap.utils.toArray('.gsap-parallax').forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    // Pinned storytelling section
    gsap.utils.toArray('.gsap-pin').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        pinSpacing: true,
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
      // lenis cleanup
      if (lenis && lenis.destroy) lenis.destroy();
    };
  }, []);

  return null;
}
