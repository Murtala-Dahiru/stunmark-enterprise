import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Building2, Globe, Heart, Sun } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const pillars = [
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    desc: 'We are committed to reducing our environmental footprint across all operations. Our net-zero roadmap targets 100% renewable energy across all offices by 2027 and carbon neutrality by 2030.',
    targets: ['Net zero by 2030', '100% renewable energy by 2027', 'Zero waste to landfill by 2026'],
    color: 'green',
  },
  {
    icon: Users,
    title: 'Social Impact',
    desc: 'Through our Stunmark Foundation and pro bono programs, we invest in the communities where we operate — supporting media education, digital literacy, and youth entrepreneurship programs.',
    targets: ['10,000 youth trained annually', '$2M in pro bono services', '50+ NGO partnerships'],
    color: 'blue',
  },
  {
    icon: Building2,
    title: 'Governance & Ethics',
    desc: 'We operate to the highest standards of corporate governance, transparency, and ethical conduct. Every engagement is governed by our comprehensive ESG framework and client ethics protocol.',
    targets: ['Zero tolerance corruption policy', 'Independent board oversight', 'Annual ESG audit'],
    color: 'gold',
  },
];

const initiatives = [
  { title: 'Media for Good Program', desc: 'Annual pro bono media support for 20+ NGOs and social enterprises across Africa.', impact: '20+ NGOs supported', icon: Heart },
  { title: 'Digital Skills Academy', desc: 'Free digital marketing and media training for underrepresented youth across Africa and the Middle East.', impact: '5,000+ trained annually', icon: Users },
  { title: 'Green Operations Initiative', desc: 'Company-wide sustainability program reducing energy consumption, travel emissions, and waste.', impact: '45% emissions reduction since 2021', icon: Sun },
  { title: 'Local Media Investment', desc: 'Commitment to investing a portion of every media plan in local and independent media outlets.', impact: '$5M+ invested in local media', icon: Globe },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Sustainability & ESG</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Growth that is good for the world.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              At Stunmark, we believe that long-term business success and positive societal impact are inseparable. Our ESG commitments are embedded in how we operate, who we partner with, and what we stand for.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="overline-blue mb-4">Our ESG Framework</p>
            <h2 className="font-bold text-navy-900 text-3xl tracking-tight">Three pillars of sustainable practice.</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="card-enterprise h-full">
                  <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center ${
                    p.color === 'green' ? 'bg-emerald-50 text-emerald-600' :
                    p.color === 'blue' ? 'bg-electric-50 text-electric-500' :
                    'bg-gold-50 text-gold-600'
                  }`}>
                    <p.icon size={22} />
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.targets.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-[13px] font-semibold text-navy-700">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          p.color === 'green' ? 'bg-emerald-400' :
                          p.color === 'blue' ? 'bg-electric-400' :
                          'bg-gold-400'
                        }`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 md:py-32 bg-soft">
        <div className="container-enterprise">
          <RevealOnScroll className="max-w-xl mb-12">
            <p className="overline-blue mb-4">Key Initiatives</p>
            <h2 className="font-bold text-navy-900 text-3xl tracking-tight">Programs making a difference.</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {initiatives.map((ini, i) => (
              <RevealOnScroll key={ini.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-enterprise-md transition-all duration-300 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center shrink-0">
                    <ini.icon size={20} className="text-electric-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-base mb-1.5">{ini.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2">{ini.desc}</p>
                    <span className="text-[12px] font-bold text-electric-500">{ini.impact}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="container-enterprise text-center">
          <RevealOnScroll>
            <Leaf size={32} className="text-emerald-400 mx-auto mb-4" />
            <h2 className="font-bold text-white text-3xl mb-4">Download our ESG Report</h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              Read our full Sustainability & ESG Report for comprehensive data on our performance and commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/investor-relations" className="btn-primary inline-flex items-center gap-2">
                Download ESG Report 2024 <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                ESG Enquiries
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
