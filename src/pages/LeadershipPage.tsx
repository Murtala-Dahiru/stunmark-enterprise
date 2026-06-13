import { Linkedin, Twitter } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const executives = [
  {
    name: 'Adaeze Okonkwo',
    title: 'Chief Executive Officer',
    bio: 'Adaeze founded Stunmark in 2015 with a vision to create Africa\'s first truly global media growth company. With 18 years of experience at WPP Group, Ogilvy, and JWT across Africa and Europe, she has personally led growth strategy for some of the continent\'s most iconic brands. Under her leadership, Stunmark has grown from a Lagos-based consultancy to a global operation with offices across five continents.',
    expertise: ['Media Strategy', 'Business Development', 'Organizational Leadership', 'Africa & Europe Markets'],
    initials: 'AO',
    gradient: 'from-navy-800 to-navy-950',
    tenureYears: 10,
  },
  {
    name: 'Marcus Wellington',
    title: 'Chief Operating Officer',
    bio: 'Marcus brings two decades of operational excellence from Publicis Groupe EMEA, where he served as COO for eight years. He has led transformation programs for over 120 enterprise clients across financial services, government, and consumer sectors. At Stunmark, Marcus oversees all operational divisions and client delivery.',
    expertise: ['Operations', 'Enterprise Client Management', 'Process Optimization', 'Team Development'],
    initials: 'MW',
    gradient: 'from-electric-800 to-navy-950',
    tenureYears: 6,
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    bio: 'A former engineering director at Google with deep expertise in AI-powered marketing and enterprise digital infrastructure. Priya leads Stunmark\'s Technology Division and oversees AI integration across all service lines. She holds advanced degrees from MIT and IIT Bombay.',
    expertise: ['AI & Machine Learning', 'Product Development', 'Digital Transformation', 'Data Engineering'],
    initials: 'PS',
    gradient: 'from-navy-700 to-richblack-800',
    tenureYears: 4,
  },
  {
    name: 'David Osei-Bonsu',
    title: 'Chief Strategy Officer',
    bio: 'David is a strategy veteran with 15 years at McKinsey & Company and Deloitte Consulting, where he specialized in growth strategy for multinational corporations expanding into emerging markets. He joined Stunmark to lead the development of our integrated growth frameworks.',
    expertise: ['Growth Strategy', 'Market Entry', 'Corporate Strategy', 'Organizational Design'],
    initials: 'DO',
    gradient: 'from-navy-600 to-navy-900',
    tenureYears: 5,
  },
  {
    name: 'Fatima Al-Rashid',
    title: 'Director, Middle East & North Africa',
    bio: 'Fatima oversees Stunmark\'s rapidly growing MEA operations, covering the GCC, Levant, and North Africa. She brings 14 years of experience across government communications, sovereign wealth fund PR, and consumer brand strategy in the region.',
    expertise: ['Government Communications', 'MENA Markets', 'Arabic Media', 'Islamic Finance Communications'],
    initials: 'FA',
    gradient: 'from-gold-700 to-navy-900',
    tenureYears: 3,
  },
  {
    name: 'James Okafor',
    title: 'Director, Creative Division',
    bio: 'James leads Stunmark\'s Creative Division with 20 years of brand-building experience. Previously Creative Director at Publicis and BBDO, he has guided the visual identity and creative strategy for brands across 30 countries.',
    expertise: ['Brand Architecture', 'Creative Strategy', 'Film Production', 'Design Systems'],
    initials: 'JO',
    gradient: 'from-navy-800 to-electric-950',
    tenureYears: 7,
  },
  {
    name: 'Elena Marchetti',
    title: 'Director, Research & Insights',
    bio: 'Elena established Stunmark\'s Research & Insights Division in 2020. A behavioral economist by training, she previously led consumer research at Nielsen and Kantar. Her division produces Stunmark\'s widely-cited annual research reports.',
    expertise: ['Consumer Research', 'Behavioral Economics', 'Data Analytics', 'Market Intelligence'],
    initials: 'EM',
    gradient: 'from-navy-700 to-richblack-900',
    tenureYears: 5,
  },
  {
    name: 'Kwame Asante',
    title: 'Director, Growth Division',
    bio: 'Kwame built his career at performance-first agencies including Wieden+Kennedy and Dentsu. He joined Stunmark to lead the Growth Division, where his team has delivered an average 340% growth rate across client portfolios.',
    expertise: ['Performance Marketing', 'Growth Strategy', 'Customer Acquisition', 'Analytics'],
    initials: 'KA',
    gradient: 'from-electric-700 to-navy-950',
    tenureYears: 4,
  },
];

export default function LeadershipPage() {
  const [ceo, coo, cto, cso, ...directors] = executives;
  const cSuite = [ceo, coo, cto, cso];

  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Our Leadership</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              World-class executives. Proven at enterprise scale.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Stunmark's leadership team combines deep expertise from the world's leading media, consulting, and technology organizations with an entrepreneurial drive to build something genuinely new.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* C-Suite */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <RevealOnScroll className="mb-12">
            <p className="overline-blue mb-3">Executive Leadership</p>
            <h2 className="font-bold text-navy-900 text-3xl tracking-tight">C-Suite</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cSuite.map((l, i) => (
              <RevealOnScroll key={l.name} delay={i * 80}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-enterprise-lg hover:-translate-y-1.5 transition-all duration-500">
                  <div className={`relative h-52 bg-gradient-to-br ${l.gradient} flex items-end p-6 overflow-hidden`}>
                    <div className="absolute inset-0 hero-mesh opacity-30" />
                    <div className="absolute top-5 right-5 flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Linkedin size={13} className="text-white/70" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Twitter size={13} className="text-white/70" />
                      </button>
                    </div>
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                        <span className="text-white font-black text-lg">{l.initials}</span>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{l.tenureYears} yrs at Stunmark</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-navy-900 text-lg mb-0.5">{l.name}</h3>
                    <p className="text-electric-500 text-[12px] font-bold tracking-wide uppercase mb-3">{l.title}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{l.bio.slice(0, 160)}...</p>
                    <div className="flex flex-wrap gap-1.5">
                      {l.expertise.slice(0, 2).map((e) => (
                        <span key={e} className="text-[10px] font-semibold text-navy-600 bg-electric-50 px-2.5 py-1 rounded-full">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 md:py-32 bg-soft">
        <div className="container-enterprise">
          <RevealOnScroll className="mb-12">
            <p className="overline-blue mb-3">Division Leadership</p>
            <h2 className="font-bold text-navy-900 text-3xl tracking-tight">Directors</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directors.map((l, i) => (
              <RevealOnScroll key={l.name} delay={i * 80}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300 flex gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${l.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-black text-lg">{l.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-navy-900 text-lg">{l.name}</h3>
                    <p className="text-electric-500 text-[12px] font-bold tracking-wide uppercase mb-2">{l.title}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{l.bio.slice(0, 180)}...</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {l.expertise.slice(0, 3).map((e) => (
                        <span key={e} className="text-[10px] font-semibold text-navy-600 bg-soft px-2.5 py-1 rounded-full border border-gray-100">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
