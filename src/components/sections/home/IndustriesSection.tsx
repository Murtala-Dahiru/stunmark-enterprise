import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Building2, GraduationCap, Heart, Cpu, Zap, ShoppingBag, Home, Factory, Leaf } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

const industries = [
  { icon: Landmark, label: 'Financial Services', desc: 'Banks, fintech, insurance & capital markets', count: '80+ clients' },
  { icon: Building2, label: 'Government & Public Sector', desc: 'Federal, state & municipal institutions', count: '30+ engagements' },
  { icon: GraduationCap, label: 'Education', desc: 'Universities, ed-tech & learning platforms', count: '50+ institutions' },
  { icon: Heart, label: 'Healthcare', desc: 'Hospitals, pharma & health systems', count: '40+ partners' },
  { icon: Cpu, label: 'Technology', desc: 'SaaS, enterprise tech & deep-tech startups', count: '100+ companies' },
  { icon: Zap, label: 'Energy & Utilities', desc: 'Oil & gas, renewables & utilities', count: '25+ organizations' },
  { icon: ShoppingBag, label: 'Retail & Consumer', desc: 'Brands, FMCG & e-commerce', count: '90+ brands' },
  { icon: Home, label: 'Real Estate', desc: 'Developers, REITs & property platforms', count: '35+ groups' },
  { icon: Factory, label: 'Manufacturing', desc: 'Industrial, production & supply chain', count: '20+ enterprises' },
  { icon: Leaf, label: 'Nonprofits & NGOs', desc: 'Foundations, charities & social enterprises', count: '45+ organizations' },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 md:py-36 bg-navy-900 overflow-hidden">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <RevealOnScroll className="max-w-xl">
            <p className="overline-gold mb-4">Industries We Serve</p>
            <h2 className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              Deep expertise across every major sector.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-white/45 text-[15px] leading-relaxed max-w-sm lg:text-right">
              We bring sector-specific intelligence and proven frameworks to every engagement.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {industries.map((ind, i) => (
            <RevealOnScroll key={ind.label} delay={i * 60}>
              <div className="group card-dark cursor-default p-6">
                <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mb-5 group-hover:bg-electric-500/20 transition-colors duration-300">
                  <ind.icon size={18} className="text-electric-300 group-hover:text-electric-200 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-white text-[14px] mb-1.5 leading-snug">{ind.label}</h3>
                <p className="text-white/40 text-[12px] leading-snug mb-3">{ind.desc}</p>
                <span className="text-[11px] font-bold text-gold-400/80 tracking-wide">{ind.count}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={500} className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors duration-200"
          >
            View all industry capabilities
            <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
