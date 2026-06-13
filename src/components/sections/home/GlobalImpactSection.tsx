import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const regions = [
  {
    name: 'Africa',
    description: 'Our home and largest market. Deep expertise across Sub-Saharan and North Africa.',
    cities: ['Lagos', 'Nairobi', 'Johannesburg', 'Cairo', 'Accra'],
    highlight: 'Regional Headquarters',
    clients: '200+',
    x: '42%',
    y: '55%',
  },
  {
    name: 'Europe',
    description: 'Strategic presence in major financial and creative hubs.',
    cities: ['London', 'Paris', 'Amsterdam', 'Frankfurt'],
    highlight: 'European Hub',
    clients: '80+',
    x: '48%',
    y: '22%',
  },
  {
    name: 'Middle East',
    description: 'Serving sovereign wealth, government and private sector across GCC.',
    cities: ['Dubai', 'Riyadh', 'Abu Dhabi', 'Doha'],
    highlight: 'MEA Hub',
    clients: '60+',
    x: '58%',
    y: '38%',
  },
  {
    name: 'North America',
    description: 'Enterprise and Fortune 500 partnerships across US and Canada.',
    cities: ['New York', 'Toronto', 'Los Angeles'],
    highlight: 'Americas Hub',
    clients: '50+',
    x: '20%',
    y: '28%',
  },
  {
    name: 'Asia-Pacific',
    description: 'Emerging market growth strategies across South and Southeast Asia.',
    cities: ['Singapore', 'Mumbai', 'Sydney'],
    highlight: 'APAC Hub',
    clients: '40+',
    x: '76%',
    y: '42%',
  },
];

export default function GlobalImpactSection() {
  return (
    <section className="py-24 md:py-36 bg-soft">
      <div className="container-enterprise">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="overline-blue mb-4">Global Presence</p>
          <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
            Operating across 5 continents, 40+ countries.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our global network enables us to deliver local intelligence with international scale — wherever our clients need to grow.
          </p>
        </RevealOnScroll>

        {/* World Map Visual */}
        <RevealOnScroll className="relative mb-16">
          <div className="relative bg-navy-900 rounded-3xl overflow-hidden" style={{ paddingBottom: '45%' }}>
            <div className="absolute inset-0 hero-mesh opacity-40" />

            {/* Simplified world map SVG background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
                {/* Simplified continent outlines */}
                <path d="M 380 100 Q 420 80 450 100 L 470 140 Q 440 160 420 150 Z" fill="white" opacity="0.5"/>
                <path d="M 400 200 Q 450 180 490 200 L 510 280 Q 470 300 440 280 L 410 240 Z" fill="white" opacity="0.6"/>
                <path d="M 150 140 Q 200 120 250 140 L 280 180 Q 260 220 230 240 Q 190 250 160 220 Z" fill="white" opacity="0.5"/>
                <path d="M 550 160 Q 600 140 660 160 L 690 200 Q 670 240 640 250 Q 600 260 570 240 Z" fill="white" opacity="0.5"/>
                <path d="M 720 180 Q 780 160 840 180 L 860 220 Q 840 250 800 260 Q 760 270 740 250 Z" fill="white" opacity="0.4"/>
              </svg>
            </div>

            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '10% 20%',
              }}
            />

            {/* Region dots */}
            {regions.map((r, i) => (
              <div
                key={r.name}
                className="absolute group cursor-pointer"
                style={{ left: r.x, top: r.y, transform: 'translate(-50%, -50%)' }}
              >
                {/* Pulse rings */}
                <div className="absolute inset-0 -m-3 rounded-full bg-electric-500/20 animate-pulse-slow" style={{ animationDelay: `${i * 500}ms` }} />
                <div className="absolute inset-0 -m-6 rounded-full bg-electric-500/8" />
                {/* Dot */}
                <div className="relative w-3 h-3 rounded-full bg-electric-400 border-2 border-white/40 shadow-blue-glow" />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-enterprise-lg whitespace-nowrap">
                    <p className="font-bold text-navy-900 text-sm">{r.name}</p>
                    <p className="text-electric-600 text-xs font-semibold">{r.clients} clients</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Center label */}
            <div className="absolute bottom-6 left-8">
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-semibold">
                Stunmark Global Network · 40+ Countries
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((r, i) => (
            <RevealOnScroll key={r.name} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-navy-900 text-sm">{r.name}</h3>
                  <span className="text-electric-500 text-xs font-black">{r.clients}</span>
                </div>
                <p className="text-gray-400 text-[12px] leading-snug mb-3">{r.description}</p>
                <div className="flex flex-wrap gap-1">
                  {r.cities.slice(0, 3).map((c) => (
                    <span key={c} className="text-[10px] font-semibold text-navy-600 bg-electric-50 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400} className="mt-10 text-center">
          <Link to="/global-presence" className="btn-outline-dark inline-flex items-center gap-2">
            View Global Presence
            <ArrowRight size={15} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
