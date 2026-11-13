 'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaRocket, FaBolt, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "Let's Create Together",
  'Waiting for you',
  'Dream. Design. Deploy.',
  'We craft with passion',
];

const icons = [<FaCode />, <FaRocket />, <FaBolt />, <FaStar />];

export default function CreateWithUsSection() {
  const marqueeTop = useRef(null);
  const marqueeBottom = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Marquee infinite scroll (GSAP timeline)
    const createMarquee = (element, direction = 1) => {
      const boxes = element.querySelectorAll('.marquee-item');
      const totalWidth = Array.from(boxes).reduce(
        (acc, box) => acc + box.offsetWidth,
        0
      );

      gsap.to(element, {
        x: direction > 0 ? -totalWidth / 2 : totalWidth / 2,
        duration: 60,
        ease: 'none',
        repeat: -1,
      });
    };

    createMarquee(marqueeTop.current, 1);
    createMarquee(marqueeBottom.current, -1);

    // Scroll reveal animations
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.fade-up'),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0000FF] overflow-hidden text-center px-6"
    >
      {/* soft blend edges */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-[#0000FF]/0 to-[#0000FF]/40" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-[#0000FF]/0 to-[#0000FF]/40" />
      <div className="pointer-events-none absolute inset-0 bg-[#0000FF]/10" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl fade-up">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Ready to Create With Us?
        </h2>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
          We’re a team of builders and dreamers who craft ideas into digital experiences.
          Every pixel and every line of code carries our passion for precision and creativity.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 text-lg font-semibold text-[#0000FF] bg-white border border-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.25)] transition duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]"
        >
          Let's Create Together →
        </a>
      </div>

      {/* Top Marquee */}
      <div className="absolute top-10 w-full overflow-hidden">
        <div ref={marqueeTop} className="flex whitespace-nowrap text-white/80 text-2xl font-medium space-x-10">
          {Array.from({ length: 4 }).map((_, outer) =>
            marqueeItems.map((text, inner) => (
              <div key={`top-${outer}-${inner}`} className="marquee-item flex items-center space-x-4 px-4">
                <span>{text}</span>
                <span className="text-white">{icons[inner % icons.length]}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div ref={marqueeBottom} className="flex whitespace-nowrap text-white/80 text-2xl font-medium space-x-10">
          {Array.from({ length: 4 }).map((_, outer) =>
            marqueeItems.map((text, inner) => (
              <div key={`bottom-${outer}-${inner}`} className="marquee-item flex items-center space-x-4 px-4">
                <span>{text}</span>
                <span className="text-white">{icons[inner % icons.length]}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
