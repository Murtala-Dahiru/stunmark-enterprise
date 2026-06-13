import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const leaders = [
  {
    name: 'Adaeze Okonkwo',
    title: 'Chief Executive Officer',
    bio: 'Former VP at WPP Group with 18 years driving growth for Fortune 500 brands across Africa and Europe.',
    initials: 'AO',
    color: 'from-navy-700 to-navy-900',
  },
  {
    name: 'Marcus Wellington',
    title: 'Chief Operating Officer',
    bio: 'Previously COO at Publicis Groupe EMEA. Led transformation programs for over 120 enterprise clients.',
    initials: 'MW',
    color: 'from-electric-700 to-navy-900',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    bio: 'Ex-Google engineering director with deep expertise in AI-powered marketing and digital transformation.',
    initials: 'PS',
    color: 'from-navy-800 to-richblack-800',
  },
  {
    name: 'David Osei-Bonsu',
    title: 'Chief Strategy Officer',
    bio: 'Strategy veteran with McKinsey and Deloitte experience spanning 15 years in growth consulting.',
    initials: 'DO',
    color: 'from-navy-700 to-electric-900',
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <RevealOnScroll className="max-w-xl">
            <p className="overline-blue mb-4">Our Leadership</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              World-class executives.<br />Proven at scale.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <Link to="/leadership" className="btn-outline-dark inline-flex items-center gap-2 flex-shrink-0">
              Full Leadership Team
              <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <RevealOnScroll key={l.name} delay={i * 100}>
              <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-enterprise-lg hover:-translate-y-1.5 transition-all duration-500">
                {/* Photo area */}
                <div className={`relative h-52 bg-gradient-to-br ${l.color} flex items-end p-6`}>
                  <div className="absolute top-6 right-6">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                      <Linkedin size={15} className="text-white/70" />
                    </div>
                  </div>
                  <div className="absolute inset-0 hero-mesh opacity-30" />
                  <div className="relative flex items-end gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-black text-xl tracking-tighter">{l.initials}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-navy-900 text-lg mb-0.5">{l.name}</h3>
                  <p className="text-electric-500 text-[12px] font-bold tracking-wide uppercase mb-3">{l.title}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{l.bio}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
