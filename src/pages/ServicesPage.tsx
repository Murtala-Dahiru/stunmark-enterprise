import { Link } from 'react-router-dom';
import { ArrowRight, Tv2, Lightbulb, TrendingUp, Cpu, MessageSquare, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const serviceCategories = [
  {
    divisionIcon: Tv2,
    division: 'Media Division',
    accentColor: 'blue',
    services: [
      { name: 'Integrated Media Planning', desc: 'End-to-end media strategy that aligns every channel with your business goals and audience behavior.' },
      { name: 'Media Buying & Negotiation', desc: 'Expert media buying across all channels with premium inventory access and competitive rate negotiation.' },
      { name: 'Programmatic Advertising', desc: 'AI-driven programmatic campaigns that reach the right audience at the right moment with precision targeting.' },
      { name: 'Campaign Management', desc: 'Full-service campaign management from briefing to delivery, optimization, and post-campaign analysis.' },
    ],
  },
  {
    divisionIcon: Lightbulb,
    division: 'Creative Division',
    accentColor: 'gold',
    services: [
      { name: 'Brand Identity & Architecture', desc: 'Complete brand systems that express your organization\'s unique positioning and build lasting recognition.' },
      { name: 'Creative Strategy', desc: 'Strategic creative frameworks that connect brand purpose to business outcomes and cultural relevance.' },
      { name: 'Content Production', desc: 'World-class video, photography, and digital content production across all formats and markets.' },
      { name: 'Design Systems', desc: 'Comprehensive design language systems that maintain brand consistency at enterprise scale.' },
    ],
  },
  {
    divisionIcon: TrendingUp,
    division: 'Growth Division',
    accentColor: 'blue',
    services: [
      { name: 'Growth Strategy', desc: 'Data-driven growth roadmaps that identify your highest-value opportunities and execution pathways.' },
      { name: 'Performance Marketing', desc: 'Measurable, accountable performance programs built around your cost-per-acquisition and ROAS targets.' },
      { name: 'Customer Acquisition', desc: 'Full-funnel acquisition programs designed to attract and convert your ideal customer profile at scale.' },
      { name: 'Revenue Optimization', desc: 'Systematic programs to maximize revenue from existing customers through retention and expansion.' },
    ],
  },
  {
    divisionIcon: Cpu,
    division: 'Technology Division',
    accentColor: 'gold',
    services: [
      { name: 'Digital Transformation', desc: 'Enterprise-wide digital transformation programs that modernize operations and unlock new growth vectors.' },
      { name: 'AI & Machine Learning', desc: 'Custom AI solutions that automate decisions, personalize experiences, and surface competitive intelligence.' },
      { name: 'Product Development', desc: 'Full-cycle digital product development from concept and architecture to launch and iteration.' },
      { name: 'Data & Analytics', desc: 'Data infrastructure, analytics platforms, and intelligence systems that power informed decision-making.' },
    ],
  },
  {
    divisionIcon: MessageSquare,
    division: 'Communications Division',
    accentColor: 'blue',
    services: [
      { name: 'Strategic PR', desc: 'Earned media programs that build credibility, drive coverage, and position your leadership in key conversations.' },
      { name: 'Corporate Communications', desc: 'Internal and external communications strategies that align stakeholders and advance organizational goals.' },
      { name: 'Reputation Management', desc: 'Proactive and reactive reputation programs that build trust and protect brand equity.' },
      { name: 'Crisis Communications', desc: 'Rapid-response crisis communications with clear protocols and expert spokespeople to navigate any situation.' },
    ],
  },
  {
    divisionIcon: BarChart3,
    division: 'Research & Insights',
    accentColor: 'gold',
    services: [
      { name: 'Market Research', desc: 'Quantitative and qualitative primary research that reveals market dynamics, competitive positioning, and growth opportunities.' },
      { name: 'Consumer Intelligence', desc: 'Deep consumer understanding programs that map attitudes, behaviors, and purchase decision journeys.' },
      { name: 'Competitive Analysis', desc: 'Systematic competitive intelligence that identifies threats, opportunities, and strategic white spaces.' },
      { name: 'Brand Health Tracking', desc: 'Longitudinal brand measurement programs that track equity, salience, and perception over time.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Our Services</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Every capability you need to grow. Under one roof.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Stunmark's six divisions offer over 30 distinct service lines — all designed to work together as an integrated growth system.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-enterprise space-y-20">
          {serviceCategories.map((cat, i) => (
            <RevealOnScroll key={cat.division} delay={i * 60}>
              <div>
                {/* Division header */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    cat.accentColor === 'blue' ? 'bg-electric-50 text-electric-500' : 'bg-gold-50 text-gold-600'
                  }`}>
                    <cat.divisionIcon size={20} />
                  </div>
                  <h2 className="font-bold text-navy-900 text-xl">{cat.division}</h2>
                  <Link
                    to="/divisions"
                    className={`ml-auto text-[12px] font-semibold flex items-center gap-1 ${
                      cat.accentColor === 'blue' ? 'text-electric-500 hover:text-electric-600' : 'text-gold-600 hover:text-gold-700'
                    }`}
                  >
                    View Division <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cat.services.map((s) => (
                    <div
                      key={s.name}
                      className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full mb-4 ${
                        cat.accentColor === 'blue' ? 'bg-electric-400' : 'bg-gold-400'
                      }`} />
                      <h3 className="font-bold text-navy-900 text-[15px] mb-2 group-hover:text-electric-600 transition-colors duration-200">
                        {s.name}
                      </h3>
                      <p className="text-gray-400 text-[13px] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
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
              Need a bespoke service combination?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Most of our engagements draw on multiple divisions. We'll design the right service architecture for your specific goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get a Custom Proposal <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
