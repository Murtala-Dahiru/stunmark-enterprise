import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Building2, GraduationCap, Heart, Cpu, Zap, ShoppingBag, Home, Factory, Leaf } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const industries = [
  {
    icon: Landmark,
    name: 'Financial Services',
    desc: 'Banking, fintech, insurance, asset management, and capital markets. We help financial organizations grow customer bases, build trust, and navigate regulatory communications with precision.',
    capabilities: ['Brand repositioning', 'Digital customer acquisition', 'Regulatory communications', 'Product launch campaigns'],
    clients: '80+',
  },
  {
    icon: Building2,
    name: 'Government & Public Sector',
    desc: 'Federal, state, and municipal institutions across Africa, Europe, and the Middle East. We help governments communicate effectively with citizens and deliver digital public services.',
    capabilities: ['Public information campaigns', 'Digital transformation', 'Citizen communication platforms', 'Policy communications'],
    clients: '30+',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    desc: 'Universities, education technology platforms, professional training bodies, and learning institutions. We help education organizations attract students and build institutional reputations.',
    capabilities: ['Student recruitment campaigns', 'Brand positioning', 'Digital enrollment platforms', 'Alumni engagement'],
    clients: '50+',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'Hospitals, pharmaceutical companies, health technology, and healthcare systems. We help healthcare organizations build trust, communicate complex information, and reach patients.',
    capabilities: ['Health communications', 'Patient acquisition', 'Pharmaceutical marketing', 'Digital health platforms'],
    clients: '40+',
  },
  {
    icon: Cpu,
    name: 'Technology',
    desc: 'SaaS companies, enterprise technology, deep-tech startups, and digital platforms. We help tech organizations grow users, build category leadership, and expand into new markets.',
    capabilities: ['Product marketing', 'Developer communications', 'B2B demand generation', 'Category creation'],
    clients: '100+',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    desc: 'Oil and gas, renewable energy, utilities, and energy transition businesses. We help energy companies manage stakeholder communications, build ESG narratives, and drive brand equity.',
    capabilities: ['ESG communications', 'Stakeholder engagement', 'Corporate communications', 'Brand strategy'],
    clients: '25+',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Consumer',
    desc: 'Retail chains, consumer goods brands, FMCG companies, and e-commerce platforms. We help consumer brands grow market share, launch products, and build lasting consumer loyalty.',
    capabilities: ['Consumer campaigns', 'Brand repositioning', 'Retail media', 'E-commerce growth'],
    clients: '90+',
  },
  {
    icon: Home,
    name: 'Real Estate',
    desc: 'Property developers, real estate investment trusts, and property technology platforms. We help real estate organizations market developments, build brands, and attract investors.',
    capabilities: ['Development marketing', 'Investor communications', 'Digital lead generation', 'Brand positioning'],
    clients: '35+',
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industrial',
    desc: 'Manufacturers, industrial companies, and supply chain businesses. We help industrial organizations modernize their communications, attract talent, and engage B2B customers.',
    capabilities: ['B2B marketing', 'Corporate communications', 'Digital transformation', 'Employer branding'],
    clients: '20+',
  },
  {
    icon: Leaf,
    name: 'Nonprofits & NGOs',
    desc: 'Foundations, charities, international NGOs, and social enterprises. We help mission-driven organizations build awareness, engage donors, and maximize the impact of their communications.',
    capabilities: ['Fundraising communications', 'Advocacy campaigns', 'Impact reporting', 'Stakeholder engagement'],
    clients: '45+',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Industries</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Deep expertise across every major sector.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              We don't apply generic frameworks. Every Stunmark engagement is built on sector-specific intelligence, cultural understanding, and proven playbooks developed across hundreds of industry mandates.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <RevealOnScroll key={ind.name} delay={i * 60}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-enterprise-lg hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center group-hover:bg-electric-500 transition-colors duration-300">
                      <ind.icon size={22} className="text-electric-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-black text-electric-500 tracking-wide">{ind.clients} clients</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl mb-3">{ind.name}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-5">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.capabilities.map((c) => (
                      <span key={c} className="text-[11px] font-semibold text-navy-600 bg-soft px-3 py-1 rounded-full border border-gray-100">
                        {c}
                      </span>
                    ))}
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
            <h2 className="font-bold text-white text-3xl md:text-4xl mb-6">
              Don't see your industry?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Our capabilities extend across virtually every sector. Tell us about your organization and we'll show you what we can do.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Industry <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
