import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const insights = [
  {
    category: 'Market Intelligence',
    title: 'The Future of Media Buying in Emerging Markets: 2025–2030',
    excerpt: 'Programmatic penetration, mobile-first consumption, and the rapid formalization of digital advertising markets are reshaping how brands buy media across Africa, Southeast Asia, and Latin America.',
    readTime: '8 min read',
    date: 'May 2025',
    featured: true,
    accent: 'blue',
  },
  {
    category: 'Technology',
    title: 'AI-Driven Personalization at Enterprise Scale',
    excerpt: 'How Fortune 500 brands are leveraging machine learning to deliver hyper-personalized customer experiences across millions of touchpoints.',
    readTime: '6 min read',
    date: 'April 2025',
    featured: false,
    accent: 'gold',
  },
  {
    category: 'Strategy',
    title: 'Building Brand Equity in Fragmented Media Environments',
    excerpt: 'With audiences scattered across streaming, social, digital and traditional channels, brand-building strategy requires a fundamentally new architecture.',
    readTime: '5 min read',
    date: 'March 2025',
    featured: false,
    accent: 'blue',
  },
  {
    category: 'Research',
    title: 'Consumer Trust Index: Africa & Middle East 2025',
    excerpt: 'Our annual consumer trust research across 15 markets reveals shifting loyalties, emerging trust drivers, and what brands must do to stay relevant.',
    readTime: '12 min read',
    date: 'February 2025',
    featured: false,
    accent: 'gold',
  },
];

export default function InsightsSection() {
  const [featured, ...rest] = insights;
  return (
    <section className="py-24 md:py-36 bg-soft">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <RevealOnScroll className="max-w-xl">
            <p className="overline-blue mb-4">Insights & Research</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              Intelligence that moves markets.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <Link to="/insights" className="btn-outline-dark inline-flex items-center gap-2 flex-shrink-0">
              All Insights
              <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <RevealOnScroll className="lg:col-span-3">
            <Link to="/insights" className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-enterprise-lg hover:-translate-y-1 transition-all duration-500 h-full">
              <div className="bg-gradient-dark aspect-[16/7] flex items-end p-8 relative overflow-hidden">
                <div className="absolute inset-0 hero-mesh opacity-60" />
                <div className="relative z-10">
                  <span className="section-badge-blue mb-4 inline-flex">Featured Research</span>
                  <h3 className="text-white font-bold text-2xl leading-snug tracking-tight">
                    {featured.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-electric-500 tracking-[0.15em] uppercase">{featured.category}</span>
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                    <Clock size={11} />
                    {featured.readTime}
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-400">{featured.date}</span>
                  <span className="text-electric-500 font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Read Report <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>

          {/* Secondary articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i + 1) * 100}>
                <Link to="/insights" className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold tracking-[0.15em] uppercase ${
                      item.accent === 'blue' ? 'text-electric-500' : 'text-gold-600'
                    }`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock size={10} />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-navy-900 text-[15px] leading-snug mb-2 group-hover:text-electric-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed line-clamp-2 mb-3">
                    {item.excerpt}
                  </p>
                  <span className="text-[11px] text-gray-400">{item.date}</span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
