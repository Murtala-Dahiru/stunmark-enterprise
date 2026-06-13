import { Link } from 'react-router-dom';
import { ArrowRight, Tv2, Lightbulb, TrendingUp, Cpu, MessageSquare, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const divisions = [
  {
    id: 'media',
    icon: Tv2,
    title: 'Media Division',
    tagline: 'Command every channel.',
    description: 'Strategic media planning, buying, and campaign management across traditional and digital channels. We architect media solutions that deliver reach, resonance, and measurable ROI.',
    services: ['Media Buying & Planning', 'Programmatic Advertising', 'Campaign Management', 'Performance Optimization'],
    accent: 'blue',
  },
  {
    id: 'creative',
    icon: Lightbulb,
    title: 'Creative Division',
    tagline: 'Build icons, not just brands.',
    description: 'World-class brand identity, design systems, and production capabilities that elevate organizations from good to great. We create visual languages that endure.',
    services: ['Brand Architecture', 'Visual Identity Systems', 'Content Production', 'Creative Strategy'],
    accent: 'gold',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth Division',
    tagline: 'Engineer sustainable growth.',
    description: 'Full-funnel growth marketing, performance media, and customer acquisition strategies engineered for scale. From awareness to conversion, we own every metric.',
    services: ['Growth Marketing', 'Performance Media', 'Customer Acquisition', 'Revenue Optimization'],
    accent: 'blue',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology Division',
    tagline: 'Innovate with purpose.',
    description: 'Product development, AI-powered solutions, and digital transformation programs that future-proof organizations. We turn technology into competitive advantage.',
    services: ['Product Development', 'AI & Machine Learning', 'Digital Transformation', 'Tech Infrastructure'],
    accent: 'gold',
  },
  {
    id: 'communications',
    icon: MessageSquare,
    title: 'Communications Division',
    tagline: 'Shape narratives that matter.',
    description: 'Strategic public relations, corporate communications, and reputation management for organizations that cannot afford to leave their story to chance.',
    services: ['Public Relations', 'Corporate Communications', 'Reputation Management', 'Crisis Communications'],
    accent: 'blue',
  },
  {
    id: 'research',
    icon: BarChart3,
    title: 'Research & Insights',
    tagline: 'Intelligence that drives decisions.',
    description: 'Deep market research, consumer intelligence, and data analytics that transform information into strategy. Every insight is actionable, every analysis is decision-ready.',
    services: ['Market Research', 'Consumer Intelligence', 'Competitive Analysis', 'Data Analytics'],
    accent: 'gold',
  },
];

export default function DivisionsSection() {
  return (
    <section className="py-24 md:py-36 bg-soft">
      <div className="container-enterprise">
        <RevealOnScroll className="max-w-2xl mb-16">
          <p className="overline-blue mb-4">Our Divisions</p>
          <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Six divisions. One unified growth engine.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Each division operates as a best-in-class specialist while sharing intelligence, talent, and infrastructure across the Stunmark ecosystem.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, i) => (
            <RevealOnScroll key={div.id} delay={i * 80}>
              <Link
                to={`/divisions#${div.id}`}
                className="group block bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-enterprise-lg hover:-translate-y-1.5 transition-all duration-500 h-full"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  div.accent === 'blue'
                    ? 'bg-electric-50 text-electric-500 group-hover:bg-electric-500 group-hover:text-white'
                    : 'bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white'
                }`}>
                  <div.icon size={22} />
                </div>

                {/* Header */}
                <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-1 ${
                  div.accent === 'blue' ? 'text-electric-500' : 'text-gold-600'
                }`}>
                  {div.tagline}
                </p>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors duration-300">
                  {div.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {div.description}
                </p>

                {/* Services list */}
                <ul className="space-y-1.5 mb-6">
                  {div.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-[13px] text-gray-400">
                      <div className={`w-1 h-1 rounded-full shrink-0 ${
                        div.accent === 'blue' ? 'bg-electric-400' : 'bg-gold-400'
                      }`} />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-200 ${
                  div.accent === 'blue'
                    ? 'text-electric-500 group-hover:text-electric-600'
                    : 'text-gold-600 group-hover:text-gold-700'
                }`}>
                  Explore Division
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400} className="mt-12 text-center">
          <Link
            to="/divisions"
            className="btn-outline-dark inline-flex items-center gap-2"
          >
            View All Divisions & Capabilities
            <ArrowRight size={15} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
