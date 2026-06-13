import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Globe, Award } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const caseStudies = [
  {
    tag: 'Media + Growth + Research',
    client: 'Pan-African Banking Group',
    industry: 'Financial Services',
    title: '340% growth in digital customer acquisition across 12 African markets',
    challenge: 'A leading pan-African bank with operations in 12 countries needed to accelerate digital customer acquisition while maintaining brand trust and consistency across diverse cultural and regulatory environments. Previous campaigns had been fragmented and failed to leverage cross-market intelligence.',
    solution: 'Stunmark deployed an integrated team spanning the Media, Growth, and Research divisions. We built a unified consumer intelligence platform, developed culturally-adapted creative frameworks, and implemented programmatic media buying across all 12 markets. A central analytics layer enabled real-time optimization and cross-market learnings.',
    results: [
      { icon: TrendingUp, metric: '340%', label: 'Growth in digital acquisition' },
      { icon: Users, metric: '2.1M', label: 'New customers onboarded' },
      { icon: Globe, metric: '12', label: 'Markets activated' },
      { icon: Award, metric: '67%', label: 'Reduction in cost per account' },
    ],
    duration: '18 months',
    featured: true,
  },
  {
    tag: 'Technology + Communications',
    client: 'Federal Ministry of Communications',
    industry: 'Government',
    title: 'Digital transformation of national citizen communications infrastructure',
    challenge: 'A federal government ministry needed to modernize how it communicated with 200M citizens across multiple languages, literacy levels, and digital access tiers. Legacy systems were fragmented, slow, and incapable of meeting modern citizen expectations.',
    solution: 'Our Technology Division built a unified multi-channel communications platform while the Communications Division developed the content strategy and stakeholder engagement framework. The platform supports SMS, mobile web, native app, and broadcast with unified analytics.',
    results: [
      { icon: Users, metric: '200M+', label: 'Citizens reached' },
      { icon: TrendingUp, metric: '89%', label: 'Engagement increase' },
      { icon: Globe, metric: '99.9%', label: 'Uptime achieved' },
      { icon: Award, metric: '4.8/5', label: 'Citizen satisfaction' },
    ],
    duration: '24 months',
    featured: false,
  },
  {
    tag: 'Creative + Research',
    client: 'Global Consumer Goods Group',
    industry: 'Retail & Consumer',
    title: 'Complete brand repositioning that doubled market share in 18 months',
    challenge: 'A 40-year-old consumer brand was losing ground to digital-first challengers. Brand consideration had declined 22 percentage points in 5 years, and the brand was perceived as outdated by the emerging consumer majority.',
    solution: 'The Research Division conducted a comprehensive brand equity audit and consumer segmentation study. This informed a complete brand repositioning by the Creative Division — new visual identity, brand voice, campaign architecture, and product packaging — executed simultaneously across 8 markets.',
    results: [
      { icon: TrendingUp, metric: '2×', label: 'Market share growth' },
      { icon: Users, metric: '+67%', label: 'Brand consideration' },
      { icon: Globe, metric: '8', label: 'Markets relaunched' },
      { icon: Award, metric: '#1', label: 'Category position' },
    ],
    duration: '18 months',
    featured: false,
  },
  {
    tag: 'Communications + Media',
    client: 'Energy Conglomerate',
    industry: 'Energy',
    title: 'ESG communications program that repositioned a legacy energy company for the transition era',
    challenge: 'A major energy conglomerate faced increasing ESG scrutiny from investors, regulators, and the media. Negative coverage was impacting stock price and creating recruitment challenges. The company needed a credible, evidence-based ESG narrative.',
    solution: 'Stunmark\'s Communications Division led a 12-month stakeholder intelligence and communications strategy process, resulting in a comprehensive ESG framework, investor communications playbook, media relations program, and employee engagement strategy. The Media Division amplified the narrative through targeted paid and earned channels.',
    results: [
      { icon: TrendingUp, metric: '+28%', label: 'Investor sentiment' },
      { icon: Users, metric: '95%', label: 'Positive media coverage' },
      { icon: Globe, metric: '15+', label: 'ESG awards received' },
      { icon: Award, metric: 'AAA', label: 'ESG rating achieved' },
    ],
    duration: '12 months',
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const [featured, ...rest] = caseStudies;
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Case Studies</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Results that define industry benchmarks.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              A selection of our most transformative client engagements. Every case study below represents measurable, documented outcomes achieved through Stunmark's integrated division approach.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise space-y-12">
          {/* Featured case */}
          <RevealOnScroll>
            <div className="bg-gradient-dark rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 hero-mesh opacity-50" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-10 lg:p-14">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="section-badge-blue">{featured.tag}</span>
                    <span className="text-white/30 text-[11px] font-semibold">{featured.industry}</span>
                  </div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">{featured.client}</p>
                  <h2 className="font-bold text-white text-2xl md:text-3xl leading-snug mb-6 tracking-tight">{featured.title}</h2>
                  <p className="text-white/55 text-[15px] leading-relaxed mb-4"><span className="font-semibold text-white/80">Challenge: </span>{featured.challenge}</p>
                  <p className="text-white/55 text-[15px] leading-relaxed"><span className="font-semibold text-white/80">Solution: </span>{featured.solution}</p>
                </div>
                <div className="lg:col-span-2 bg-white/5 border-l border-white/8 p-10 lg:p-14 flex flex-col justify-center">
                  <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-6">Key Results</p>
                  <div className="grid grid-cols-2 gap-6">
                    {featured.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-3xl font-black text-electric-400 mb-0.5">{r.metric}</div>
                        <div className="text-white/45 text-[12px] leading-snug">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-white/30 text-xs font-semibold">Engagement duration: </span>
                    <span className="text-white/60 text-xs font-bold">{featured.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Rest */}
          {rest.map((cs, i) => (
            <RevealOnScroll key={cs.client} delay={i * 80}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-enterprise-lg transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="section-badge-blue text-xs">{cs.tag}</span>
                      <span className="text-gray-400 text-[11px] font-semibold">{cs.industry}</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">{cs.client}</p>
                    <h2 className="font-bold text-navy-900 text-xl md:text-2xl leading-snug mb-5 tracking-tight">{cs.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-navy-700">Challenge: </span>{cs.challenge}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <span className="font-semibold text-navy-700">Solution: </span>{cs.solution}
                    </p>
                  </div>
                  <div className="lg:col-span-2 bg-soft border-l border-gray-100 p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-5">Results</p>
                    <div className="grid grid-cols-2 gap-5">
                      {cs.results.map((r) => (
                        <div key={r.label}>
                          <div className="text-2xl font-black text-electric-600 mb-0.5">{r.metric}</div>
                          <div className="text-gray-400 text-[11px] leading-snug">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="container-enterprise text-center">
          <RevealOnScroll>
            <h2 className="font-bold text-white text-3xl md:text-4xl mb-6">
              Ready to write your own success story?
            </h2>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
