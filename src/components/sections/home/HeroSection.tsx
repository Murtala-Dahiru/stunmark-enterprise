import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const words = ['Media', 'Creativity', 'Innovation', 'Technology', 'Strategy'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-mesh opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-100 pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-electric-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/6 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center pt-28 pb-20">
        <div className="container-enterprise w-full">
          <div className="max-w-5xl">
            {/* Overline */}
            <div
              className="inline-flex items-center gap-3 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse-slow" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">
                  Global Media Growth Company
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/25">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold-400">
                  Est. 2015
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white tracking-tight leading-[1.03] mb-8 opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 5.25rem)',
                animationDelay: '350ms',
                animationFillMode: 'forwards',
              }}
            >
              Building Growth Through
              <br />
              <span className="relative inline-block">
                <span
                  className="text-gradient-blue transition-all duration-300"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
                >
                  {words[wordIndex]}
                </span>
              </span>
              {' '}& Strategy.
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/55 text-xl md:text-2xl leading-relaxed max-w-3xl mb-12 opacity-0 animate-fade-up font-light"
              style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            >
              We help ambitious brands, businesses and institutions unlock{' '}
              <span className="text-white/80 font-medium">sustainable growth</span>{' '}
              through strategy, media, technology, content and communications.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '650ms', animationFillMode: 'forwards' }}
            >
              <Link
                to="/divisions"
                className="btn-primary-lg group"
              >
                Explore Our Divisions
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline group"
              >
                <span>Talk To Our Team</span>
              </Link>
            </div>

            {/* Trust micro-indicators */}
            <div
              className="flex flex-wrap items-center gap-6 mt-16 pt-10 border-t border-white/8 opacity-0 animate-fade-up"
              style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
            >
              {[
                { value: '10+', label: 'Years of Excellence' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '40+', label: 'Countries Served' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div>
                    <p className="text-2xl font-black text-white leading-none">{stat.value}</p>
                    <p className="text-[11px] text-white/40 tracking-wide mt-0.5">{stat.label}</p>
                  </div>
                  <div className="w-px h-8 bg-white/10 last:hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-10 flex justify-center">
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 group"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}
