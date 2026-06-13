import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, Globe, Heart, Zap, Users, Award } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const openRoles = [
  { title: 'Senior Media Strategist', division: 'Media Division', location: 'Lagos, Nigeria', type: 'Full-time' },
  { title: 'Brand Strategy Director', division: 'Creative Division', location: 'London, UK', type: 'Full-time' },
  { title: 'Growth Marketing Manager', division: 'Growth Division', location: 'Dubai, UAE', type: 'Full-time' },
  { title: 'AI Product Engineer', division: 'Technology Division', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'PR Account Director', division: 'Communications Division', location: 'New York, USA', type: 'Full-time' },
  { title: 'Senior Research Analyst', division: 'Research & Insights', location: 'Lagos, Nigeria', type: 'Full-time' },
  { title: 'Performance Marketing Specialist', division: 'Growth Division', location: 'Nairobi, Kenya', type: 'Full-time' },
  { title: 'Data Analytics Lead', division: 'Research & Insights', location: 'Remote (Africa)', type: 'Full-time' },
];

const benefits = [
  { icon: Globe, title: 'Global Opportunities', desc: 'Work across our 5 continental hubs with relocation support and international project assignments.' },
  { icon: Award, title: 'Career Advancement', desc: 'Structured career pathways, mentorship from industry leaders, and continuous learning investment.' },
  { icon: Heart, title: 'Wellbeing First', desc: 'Comprehensive health coverage, mental wellbeing programs, flexible working, and generous leave.' },
  { icon: Zap, title: 'Innovation Culture', desc: 'Work on genuinely transformative projects with access to cutting-edge tools, research, and AI platforms.' },
  { icon: Users, title: 'World-Class Team', desc: 'Collaborate with professionals from McKinsey, WPP, Google, Publicis, and leading global organizations.' },
  { icon: Briefcase, title: 'Competitive Compensation', desc: 'Market-leading salaries, performance bonuses, equity participation, and comprehensive benefits packages.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Careers</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Build the future of media growth with us.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Join a team of exceptional professionals from the world's best organizations, working on transformative projects across 40 countries. We are always looking for the best talent in media, technology, strategy, and creativity.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <div>
                <p className="text-2xl font-black text-white">250+</p>
                <p className="text-white/40 text-xs tracking-wide">Team members globally</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">12</p>
                <p className="text-white/40 text-xs tracking-wide">Office locations</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">6</p>
                <p className="text-white/40 text-xs tracking-wide">Division paths</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="overline-blue mb-4">Why Stunmark</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              An exceptional place to build an exceptional career.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={i * 80}>
                <div className="card-enterprise">
                  <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center mb-5">
                    <b.icon size={22} className="text-electric-500" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 md:py-32 bg-soft">
        <div className="container-enterprise">
          <RevealOnScroll className="max-w-xl mb-12">
            <p className="overline-blue mb-4">Open Positions</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              Current opportunities.
            </h2>
          </RevealOnScroll>
          <div className="space-y-3">
            {openRoles.map((role, i) => (
              <RevealOnScroll key={role.title} delay={i * 50}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center">
                      <Briefcase size={16} className="text-electric-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-[15px] group-hover:text-electric-600 transition-colors duration-200">{role.title}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-[12px] font-semibold text-electric-500">{role.division}</span>
                        <span className="text-gray-300">·</span>
                        <div className="flex items-center gap-1 text-gray-400 text-[12px]">
                          <MapPin size={11} />
                          {role.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[11px] font-semibold text-gray-400 bg-soft px-3 py-1 rounded-full border border-gray-100">
                      {role.type}
                    </span>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-electric-500 transition-colors duration-200" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={400} className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Don't see the right role? We're always open to exceptional talent.</p>
            <Link to="/contact" className="btn-outline-dark inline-flex items-center gap-2">
              Send a Speculative Application
              <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
