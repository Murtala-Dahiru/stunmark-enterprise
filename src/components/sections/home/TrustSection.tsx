import RevealOnScroll from '../../ui/RevealOnScroll';
import AnimatedCounter from '../../ui/AnimatedCounter';

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years of Excellence',
    desc: 'Over a decade building world-class brands',
    color: 'electric',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Countries Reached',
    desc: 'Driving growth across every major market',
    color: 'gold',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    desc: 'Transformative work across all industries',
    color: 'electric',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Industries Served',
    desc: 'From finance and tech to energy and education',
    color: 'gold',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    desc: 'Consistently exceeding client expectations',
    color: 'electric',
  },
  {
    value: 6,
    suffix: '',
    label: 'Specialized Divisions',
    desc: 'A complete media growth ecosystem',
    color: 'gold',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="bg-navy-900 py-20 md:py-28">
      <div className="container-enterprise">
        <RevealOnScroll className="text-center mb-16">
          <p className="overline-gold mb-3">Scale & Impact</p>
          <h2 className="font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Our numbers speak for themselves
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <RevealOnScroll
              key={s.label}
              delay={i * 80}
              className="bg-navy-900 hover:bg-navy-800 transition-colors duration-500 p-8 text-center group"
            >
              <div className={`text-4xl md:text-5xl font-black mb-2 leading-none ${
                s.color === 'electric' ? 'text-electric-400' : 'text-gold-400'
              }`}>
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white font-bold text-sm mb-1.5">{s.label}</p>
              <p className="text-white/35 text-[11px] leading-snug">{s.desc}</p>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust Badges */}
        <RevealOnScroll delay={300} className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            'ISO 9001 Certified',
            'Fortune 500 Partners',
            'Government Accredited',
            'WPP Network Alliance',
            'IAB Member',
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-white/30">
              <div className="w-1 h-1 rounded-full bg-electric-500/60" />
              <span className="text-[12px] font-semibold tracking-wide">{badge}</span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
