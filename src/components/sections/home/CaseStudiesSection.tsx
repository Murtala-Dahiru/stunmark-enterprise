import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const cases = [
  {
    tag: 'Media + Growth',
    client: 'Pan-African Financial Institution',
    title: 'Driving 340% growth in digital customer acquisition across 12 markets',
    challenge: 'A leading pan-African bank needed to acquire digitally-native customers at scale while maintaining brand trust across diverse cultural markets.',
    results: [
      { icon: TrendingUp, metric: '340%', label: 'Growth in digital acquisition' },
      { icon: Users, metric: '2.1M', label: 'New customers onboarded' },
      { icon: Globe, metric: '12', label: 'Markets activated' },
    ],
    industry: 'Financial Services',
    accent: 'blue',
  },
  {
    tag: 'Technology + Communications',
    client: 'Federal Government Agency',
    title: 'Digital transformation of public service communications reaching 50M citizens',
    challenge: 'A federal agency required end-to-end digital transformation of its citizen communication infrastructure with 99.9% uptime requirements.',
    results: [
      { icon: Users, metric: '50M+', label: 'Citizens reached daily' },
      { icon: TrendingUp, metric: '89%', label: 'Increase in citizen engagement' },
      { icon: Globe, metric: '99.9%', label: 'Platform uptime achieved' },
    ],
    industry: 'Government',
    accent: 'gold',
  },
  {
    tag: 'Creative + Research',
    client: 'Global Consumer Brand',
    title: 'Brand repositioning that doubled market share in 18 months',
    challenge: 'A legacy consumer brand needed complete repositioning to compete with digital-first challengers while retaining its established customer base.',
    results: [
      { icon: TrendingUp, metric: '2×', label: 'Market share increase' },
      { icon: Users, metric: '+67%', label: 'Brand consideration uplift' },
      { icon: Globe, metric: '18mo', label: 'Time to market leadership' },
    ],
    industry: 'Retail & Consumer',
    accent: 'blue',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <RevealOnScroll className="max-w-xl">
            <p className="overline-blue mb-4">Case Studies</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              Results that define industry benchmarks.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <Link to="/case-studies" className="btn-outline-dark inline-flex items-center gap-2 flex-shrink-0">
              All Case Studies
              <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <RevealOnScroll key={c.client} delay={i * 100}>
              <article className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-enterprise-lg hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
                {/* Header */}
                <div className={`p-8 flex-1 ${
                  c.accent === 'gold' ? 'bg-gradient-to-br from-navy-950 to-navy-800' : ''
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`section-badge ${
                      c.accent === 'blue' ? 'section-badge-blue' : 'section-badge-gold'
                    }`}>
                      {c.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 tracking-wide">{c.industry}</span>
                  </div>
                  <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-2 ${
                    c.accent === 'gold' ? 'text-gold-400/80' : 'text-gray-400'
                  }`}>
                    {c.client}
                  </p>
                  <h3 className={`font-bold leading-snug text-lg mb-4 ${
                    c.accent === 'gold' ? 'text-white' : 'text-navy-900'
                  }`}>
                    {c.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    c.accent === 'gold' ? 'text-white/50' : 'text-gray-400'
                  }`}>
                    {c.challenge}
                  </p>
                </div>

                {/* Results */}
                <div className={`border-t px-8 py-6 grid grid-cols-3 gap-4 ${
                  c.accent === 'gold'
                    ? 'border-white/10 bg-navy-950/80'
                    : 'border-gray-100 bg-soft'
                }`}>
                  {c.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className={`text-2xl font-black leading-none mb-0.5 ${
                        c.accent === 'gold' ? 'text-gold-400' : 'text-electric-600'
                      }`}>
                        {r.metric}
                      </div>
                      <div className={`text-[10px] leading-tight ${
                        c.accent === 'gold' ? 'text-white/40' : 'text-gray-400'
                      }`}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
