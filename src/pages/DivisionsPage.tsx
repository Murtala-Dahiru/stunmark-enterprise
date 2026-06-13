import { Link } from 'react-router-dom';
import { ArrowRight, Tv2, Lightbulb, TrendingUp, Cpu, MessageSquare, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const divisions = [
  {
    id: 'media',
    icon: Tv2,
    title: 'Media Division',
    tagline: 'Command every channel. Own every audience.',
    description: 'Our Media Division is a full-service media operation built for enterprise-scale campaigns. We plan, buy, and optimize media investments across traditional and digital channels — from television and radio to programmatic display, search, and social. Our approach combines deep market intelligence with cutting-edge technology to ensure every media dollar drives maximum return.',
    capabilities: [
      'Integrated Media Planning & Strategy',
      'Media Buying (Traditional & Digital)',
      'Programmatic Advertising',
      'Campaign Management & Optimization',
      'Performance Measurement & Attribution',
      'Audience Intelligence & Targeting',
      'Cross-Channel Media Activation',
      'Out-of-Home & Broadcast',
    ],
    accent: 'blue',
    stat: '$500M+',
    statLabel: 'Media spend managed annually',
  },
  {
    id: 'creative',
    icon: Lightbulb,
    title: 'Creative Division',
    tagline: 'Build icons, not just brands.',
    description: 'The Creative Division brings together world-class designers, strategists, filmmakers, and brand architects to create visual identities and content that endure. We work at the intersection of strategy and craft — ensuring every creative decision is rooted in business goals and cultural intelligence. Our production capabilities span global campaigns to hyper-local executions.',
    capabilities: [
      'Brand Architecture & Identity Systems',
      'Visual Design & Art Direction',
      'Campaign Creative Development',
      'Video & Film Production',
      'Motion Graphics & Animation',
      'Photography & Content Creation',
      'Packaging & Environmental Design',
      'Creative Technology',
    ],
    accent: 'gold',
    stat: '1,200+',
    statLabel: 'Brand identities created',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth Division',
    tagline: 'Engineer sustainable, measurable growth.',
    description: 'Our Growth Division is a performance-obsessed team of growth engineers, data scientists, and marketing strategists. We design and execute full-funnel growth systems that convert audiences into customers, customers into advocates, and advocates into brand assets. Every initiative is rigorously tracked and continuously optimized.',
    capabilities: [
      'Growth Strategy & Roadmapping',
      'Performance Marketing',
      'Customer Acquisition Programs',
      'Conversion Rate Optimization',
      'Marketing Automation',
      'Customer Lifetime Value Optimization',
      'Revenue Operations',
      'Growth Analytics & Intelligence',
    ],
    accent: 'blue',
    stat: '340%',
    statLabel: 'Average client growth rate',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology Division',
    tagline: 'Turn technology into competitive advantage.',
    description: 'The Technology Division builds the digital infrastructure that powers growth. From enterprise product development to AI implementation and full-scale digital transformation programs, we are the technology partner that organizations trust when the stakes are highest. Our engineers and consultants operate at the intersection of business strategy and technical excellence.',
    capabilities: [
      'Digital Product Development',
      'AI & Machine Learning Solutions',
      'Digital Transformation Programs',
      'Enterprise Software Architecture',
      'Data Platform Development',
      'Cloud Infrastructure & DevOps',
      'API & Integration Services',
      'Cybersecurity Consulting',
    ],
    accent: 'gold',
    stat: '150+',
    statLabel: 'Technology solutions deployed',
  },
  {
    id: 'communications',
    icon: MessageSquare,
    title: 'Communications Division',
    tagline: 'Shape narratives. Protect reputations. Build trust.',
    description: 'Our Communications Division provides strategic public relations, corporate communications, and reputation management for organizations that recognize communications as a core business function. We handle everything from routine media relations to complex stakeholder management, crisis response, and executive positioning at the highest levels.',
    capabilities: [
      'Strategic Public Relations',
      'Corporate Communications Strategy',
      'Reputation Management & Monitoring',
      'Crisis Communications & Response',
      'Executive & Leadership Communications',
      'Government & Regulatory Affairs',
      'Media Relations & Press Office',
      'Stakeholder Engagement Programs',
    ],
    accent: 'blue',
    stat: '200+',
    statLabel: 'Communications mandates delivered',
  },
  {
    id: 'research',
    icon: BarChart3,
    title: 'Research & Insights Division',
    tagline: 'Intelligence that drives decisions.',
    description: 'The Research & Insights Division is our intelligence engine — delivering the rigorous analysis and deep consumer understanding that informs strategy across all other divisions. We conduct primary and secondary research, build proprietary data models, and translate complexity into clarity. Our insights are designed to be immediately actionable.',
    capabilities: [
      'Primary Market Research',
      'Consumer Behavior Analysis',
      'Competitive Intelligence',
      'Brand Health Tracking',
      'Customer Journey Mapping',
      'Audience Segmentation',
      'Econometric Modelling',
      'Syndicated Research Reports',
    ],
    accent: 'gold',
    stat: '500+',
    statLabel: 'Research studies conducted',
  },
];

export default function DivisionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Our Divisions</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Six divisions. One unified<br />growth ecosystem.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Each Stunmark division is a best-in-class specialist. Together, they form an integrated platform capable of driving transformative growth for organizations of any size, in any industry, anywhere in the world.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Division Nav */}
      <div className="bg-navy-900 sticky top-16 z-40 border-b border-white/8">
        <div className="container-enterprise">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
            {divisions.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="flex-shrink-0 text-[12px] font-bold tracking-wide text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <d.icon size={13} />
                {d.title.replace(' Division', '').replace(' & Insights', '')}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divisions */}
      {divisions.map((div, i) => (
        <section
          key={div.id}
          id={div.id}
          className={`py-24 md:py-32 ${i % 2 === 0 ? 'bg-white' : 'bg-soft'}`}
        >
          <div className="container-enterprise">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
              i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <RevealOnScroll direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`inline-flex items-center gap-2 w-12 h-12 rounded-xl mb-6 justify-center ${
                  div.accent === 'blue' ? 'bg-electric-50' : 'bg-gold-50'
                }`}>
                  <div.icon size={22} className={div.accent === 'blue' ? 'text-electric-500' : 'text-gold-600'} />
                </div>
                <p className={`text-xs font-bold tracking-[0.18em] uppercase mb-2 ${
                  div.accent === 'blue' ? 'text-electric-500' : 'text-gold-600'
                }`}>
                  {div.tagline}
                </p>
                <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}>
                  {div.title}
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8">{div.description}</p>

                <div className="flex items-center gap-3 mb-8">
                  <div className={`text-3xl font-black ${
                    div.accent === 'blue' ? 'text-electric-500' : 'text-gold-500'
                  }`}>
                    {div.stat}
                  </div>
                  <div className="text-gray-400 text-sm">{div.statLabel}</div>
                </div>

                <Link
                  to="/contact"
                  className={`btn-enterprise inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold ${
                    div.accent === 'blue'
                      ? 'bg-electric-500 hover:bg-electric-600 text-white shadow-blue-glow'
                      : 'bg-gold-500 hover:bg-gold-600 text-navy-950 shadow-gold-glow'
                  } hover:-translate-y-0.5 transition-all duration-300`}
                >
                  Talk to {div.title} team
                  <ArrowRight size={15} />
                </Link>
              </RevealOnScroll>

              {/* Capabilities */}
              <RevealOnScroll direction={i % 2 === 0 ? 'right' : 'left'} delay={150}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-enterprise">
                  <h3 className="font-bold text-navy-900 text-lg mb-6">Core Capabilities</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {div.capabilities.map((cap, ci) => (
                      <div
                        key={cap}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-soft transition-colors duration-200"
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                          div.accent === 'blue' ? 'bg-electric-50 text-electric-500' : 'bg-gold-50 text-gold-600'
                        }`}>
                          {ci + 1}
                        </div>
                        <span className="text-[14px] font-medium text-navy-700">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="container-enterprise text-center">
          <RevealOnScroll>
            <h2 className="font-bold text-white text-3xl md:text-4xl mb-6 tracking-tight">
              Which division fits your needs?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Our team will assess your goals and recommend the right combination of divisions to drive your growth.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get a Bespoke Proposal <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
