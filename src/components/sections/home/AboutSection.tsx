import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const pillars = [
  'Vision-led strategic thinking',
  'Technology-powered execution',
  'Data-driven decision making',
  'Long-term sustainable growth',
  'Global reach, local intelligence',
  'Multi-division integrated capability',
];

export default function AboutSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <RevealOnScroll direction="left" className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-navy aspect-[4/3] flex items-end">
              <div className="absolute inset-0 hero-mesh opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract geometric illustration */}
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse-slow" />
                  <div className="absolute inset-8 rounded-full border border-electric-500/20" />
                  <div className="absolute inset-16 rounded-full bg-electric-500/10 border border-electric-500/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-black text-white/90">10+</div>
                      <div className="text-white/50 text-sm tracking-widest uppercase mt-1">Years</div>
                    </div>
                  </div>
                  {/* Orbit dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-2.5 h-2.5 rounded-full bg-electric-400/60"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${deg}deg) translateX(110px) translateY(-50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="relative z-10 p-8">
                <p className="text-white/50 text-xs tracking-[0.2em] uppercase font-semibold">Global Presence</p>
                <p className="text-white font-bold text-xl mt-1">Africa · Europe · Americas · Middle East · Asia</p>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -right-6 -top-6 bg-white rounded-2xl p-5 shadow-enterprise-xl border border-gray-100 w-44">
              <p className="text-3xl font-black text-navy-900">500+</p>
              <p className="text-gray-500 text-xs mt-1 leading-snug">Successful projects delivered globally</p>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-6 -bottom-6 bg-electric-500 rounded-2xl p-5 shadow-blue-glow w-48">
              <p className="text-white font-black text-xl">6</p>
              <p className="text-white/80 text-xs mt-1">Specialized media growth divisions</p>
            </div>
          </RevealOnScroll>

          {/* Right: Content */}
          <div>
            <RevealOnScroll>
              <p className="overline-blue mb-4">Who We Are</p>
              <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
                More than an agency.{' '}
                <span className="text-gradient-blue">A media growth ecosystem.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Stunmark is a global media growth company operating as a parent organization with six specialized divisions. We partner with ambitious brands, businesses, governments, and institutions to drive sustainable, measurable growth.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                Unlike traditional agencies, our integrated approach spans the full growth spectrum — from strategic insight and creative development to media execution, technology deployment, and performance optimization. We operate at enterprise scale with the precision and accountability our clients demand.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {pillars.map((p) => (
                  <div key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-electric-500 mt-0.5 shrink-0" />
                    <span className="text-[14px] text-gray-600 font-medium">{p}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-outline-dark group">
                  Our Story & Mission
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link to="/leadership" className="text-electric-600 font-semibold text-sm flex items-center gap-1.5 hover:text-electric-700 transition-colors duration-200 py-4">
                  Meet Our Leadership
                  <ArrowRight size={14} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
