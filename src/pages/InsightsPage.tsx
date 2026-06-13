import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, BarChart3, Lightbulb, Globe } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const categories = ['All', 'Market Intelligence', 'Technology', 'Strategy', 'Research', 'Communications', 'Leadership'];

const articles = [
  {
    category: 'Market Intelligence',
    title: 'The Future of Media Buying in Emerging Markets: 2025–2030',
    excerpt: 'Programmatic penetration, mobile-first consumption, and the rapid formalization of digital advertising markets are reshaping how brands buy media across Africa, Southeast Asia, and Latin America.',
    readTime: '8 min',
    date: 'May 2025',
    type: 'Report',
    featured: true,
    icon: Globe,
  },
  {
    category: 'Technology',
    title: 'AI-Driven Personalization at Enterprise Scale',
    excerpt: 'How Fortune 500 brands are leveraging machine learning to deliver hyper-personalized customer experiences.',
    readTime: '6 min',
    date: 'April 2025',
    type: 'Article',
    featured: false,
    icon: Lightbulb,
  },
  {
    category: 'Strategy',
    title: 'Building Brand Equity in Fragmented Media Environments',
    excerpt: 'With audiences scattered across streaming, social, digital and traditional channels, brand-building requires a fundamentally new architecture.',
    readTime: '5 min',
    date: 'March 2025',
    type: 'Perspective',
    featured: false,
    icon: BookOpen,
  },
  {
    category: 'Research',
    title: 'Consumer Trust Index: Africa & Middle East 2025',
    excerpt: 'Our annual consumer trust research across 15 markets reveals shifting loyalties, emerging trust drivers, and what brands must do to stay relevant.',
    readTime: '12 min',
    date: 'February 2025',
    type: 'Annual Report',
    featured: false,
    icon: BarChart3,
  },
  {
    category: 'Communications',
    title: 'The New Rules of Corporate Communications in the Transparency Era',
    excerpt: 'Stakeholder expectations around corporate transparency, ESG disclosure, and authentic leadership communication have fundamentally changed.',
    readTime: '7 min',
    date: 'January 2025',
    type: 'Article',
    featured: false,
    icon: BookOpen,
  },
  {
    category: 'Strategy',
    title: 'Growth Architecture: How Enterprise Organizations Design for Scale',
    excerpt: 'The most successful growth programs share a common structural logic. Here is how leading enterprises architect their growth systems.',
    readTime: '9 min',
    date: 'December 2024',
    type: 'Perspective',
    featured: false,
    icon: Lightbulb,
  },
  {
    category: 'Market Intelligence',
    title: 'Digital Advertising in Africa: The 2024 Landscape Report',
    excerpt: 'A comprehensive view of the African digital advertising market — sizing, channel mix, top spenders, and growth trajectories through 2027.',
    readTime: '15 min',
    date: 'November 2024',
    type: 'Report',
    featured: false,
    icon: Globe,
  },
  {
    category: 'Leadership',
    title: 'CEO Perspectives: Building a Culture of Innovation at Scale',
    excerpt: 'Conversations with six global CEOs on how they maintain innovation velocity as their organizations grow beyond the startup phase.',
    readTime: '10 min',
    date: 'October 2024',
    type: 'Interview Series',
    featured: false,
    icon: BookOpen,
  },
];

export default function InsightsPage() {
  const [featured, ...grid] = articles;
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Insights & Research</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Intelligence that moves markets.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Original research, strategic perspectives, and market intelligence from Stunmark's global team of analysts, strategists, and practitioners.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          {/* Category filter */}
          <RevealOnScroll className="flex flex-wrap gap-2 mb-12">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200 ${
                  i === 0
                    ? 'bg-navy-900 text-white'
                    : 'bg-soft text-navy-600 hover:bg-electric-50 hover:text-electric-600 border border-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </RevealOnScroll>

          {/* Featured */}
          <RevealOnScroll className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gradient-dark rounded-3xl overflow-hidden">
              <div className="p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="section-badge-blue">{featured.type}</span>
                  <span className="text-[11px] font-bold text-gold-400 tracking-[0.15em] uppercase">{featured.category}</span>
                </div>
                <h2 className="font-bold text-white text-2xl md:text-3xl leading-snug tracking-tight mb-5">{featured.title}</h2>
                <p className="text-white/55 text-[15px] leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/35 text-[12px]">
                    <Clock size={11} />
                    {featured.readTime} read · {featured.date}
                  </div>
                  <Link to="#" className="flex items-center gap-1.5 text-electric-400 font-semibold text-sm hover:text-electric-300">
                    Read Report <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 border-l border-white/8 p-10 lg:p-14 flex items-center justify-center">
                <div className="text-center">
                  <Globe size={64} className="text-electric-500/30 mx-auto mb-4" />
                  <p className="text-white/30 text-sm">2025 Annual Research Report</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((a, i) => (
              <RevealOnScroll key={a.title} delay={i * 60}>
                <Link to="#" className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-electric-500 tracking-[0.15em] uppercase">{a.category}</span>
                    <span className="text-[10px] font-semibold text-gray-300 border border-gray-100 px-2.5 py-1 rounded-full">{a.type}</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-[16px] leading-snug mb-3 group-hover:text-electric-600 transition-colors duration-200 flex-1">
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5 line-clamp-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1.5 text-gray-400 text-[12px]">
                      <Clock size={11} />
                      {a.readTime} · {a.date}
                    </div>
                    <ArrowRight size={13} className="text-electric-500 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={400} className="text-center mt-12">
            <button className="btn-outline-dark inline-flex items-center gap-2">
              Load More Insights
              <ArrowRight size={15} />
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-soft">
        <div className="container-narrow text-center">
          <RevealOnScroll>
            <p className="overline-blue mb-4">Research Subscription</p>
            <h2 className="font-bold text-navy-900 text-3xl md:text-4xl mb-4 tracking-tight">
              Receive our research directly.
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
              Subscribe to receive Stunmark's monthly research reports, market intelligence, and strategic perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500"
              />
              <button className="btn-primary text-sm py-4 px-6">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-[11px] mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
