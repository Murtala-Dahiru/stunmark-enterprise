import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Award, Shield } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every strategy, every campaign, every decision is built on rigorous research and data-driven insight. We leave nothing to chance.' },
  { icon: Eye, title: 'Clarity', desc: 'We cut through complexity to deliver clear, actionable strategies that our clients can implement with confidence and purpose.' },
  { icon: Heart, title: 'Partnership', desc: 'Our clients are not accounts. They are long-term partners whose success is our success. We invest in relationships, not transactions.' },
  { icon: Zap, title: 'Innovation', desc: 'We challenge conventional thinking and pioneer new approaches. Our innovation practice keeps clients ahead of their industries.' },
  { icon: Globe, title: 'Global Perspective', desc: 'With offices across 5 continents, we bring genuine global intelligence — not just international reach — to every engagement.' },
  { icon: Shield, title: 'Integrity', desc: 'Our reputation is built on absolute transparency, accountability, and delivery on every commitment we make to our clients.' },
];

const milestones = [
  { year: '2015', event: 'Stunmark founded in Lagos with a vision to redefine media growth in Africa' },
  { year: '2017', event: 'Expanded to 5 African markets. Launch of the Technology Division.' },
  { year: '2019', event: 'Opened London office. First Fortune 500 client engagement secured.' },
  { year: '2020', event: 'Reached 100 clients milestone. Launched Research & Insights Division.' },
  { year: '2022', event: 'Opened offices in Dubai and New York. Expanded to Middle East market.' },
  { year: '2024', event: 'Achieved 500+ projects delivered globally. Named among top growth companies.' },
  { year: '2025', event: 'Launched AI Innovation Lab. Expanded to Asia-Pacific with Singapore hub.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">About Stunmark</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              We are the media growth company for the world's most ambitious organizations.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Founded in 2015 in Lagos, Nigeria, Stunmark has grown from a pioneering African media consultancy into a global media growth group with operations across 5 continents and a track record of transformative results for over 500 clients.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-16">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {[
              { value: 10, suffix: '+', label: 'Years Founded' },
              { value: 500, suffix: '+', label: 'Projects Delivered' },
              { value: 40, suffix: '+', label: 'Countries' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
            ].map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 80} className="bg-navy-900 p-8 text-center">
                <div className="text-4xl font-black text-electric-400 mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/50 text-sm">{s.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <p className="overline-blue mb-4">Our Purpose</p>
              <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-8"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
                Built to drive growth for the world's most ambitious organizations.
              </h2>
              <div className="space-y-6">
                <div className="bg-electric-50 rounded-2xl p-6 border border-electric-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={16} className="text-electric-500" />
                    <h3 className="font-bold text-navy-900 text-lg">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver sustainable, measurable growth for brands, businesses, governments, and institutions through the strategic integration of media, technology, creativity, communications, and insight.
                  </p>
                </div>
                <div className="bg-gold-50 rounded-2xl p-6 border border-gold-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={16} className="text-gold-600" />
                    <h3 className="font-bold text-navy-900 text-lg">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To become the world's most trusted and innovative media growth company — a permanent partner for every organization that is serious about long-term, sustainable growth.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={150}>
              <div className="relative bg-gradient-dark rounded-3xl p-10 overflow-hidden">
                <div className="absolute inset-0 hero-mesh opacity-60" />
                <div className="relative z-10">
                  <Award size={32} className="text-gold-400 mb-6" />
                  <h3 className="font-bold text-white text-2xl mb-4">Why Stunmark?</h3>
                  <ul className="space-y-4">
                    {[
                      'Six specialized divisions under one integrated strategy',
                      'Operations across Africa, Europe, Middle East, Americas & APAC',
                      'Sector-specific expertise in 20+ industries',
                      'Proprietary research and consumer intelligence platform',
                      'AI-augmented execution across all service lines',
                      'Direct accountability from C-suite to client delivery',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-soft">
        <div className="container-enterprise">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="overline-blue mb-4">Our Values</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              The principles that guide everything we do.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 80}>
                <div className="card-enterprise">
                  <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-electric-500" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <RevealOnScroll className="max-w-2xl mb-16">
            <p className="overline-blue mb-4">Our History</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
              A decade of milestones.
            </h2>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-100" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <RevealOnScroll key={m.year} delay={i * 80} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-sm font-black text-electric-500">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 w-3 h-3 rounded-full bg-electric-500 mt-1 ring-4 ring-white" />
                  <p className="text-gray-600 text-[15px] leading-relaxed pt-0">{m.event}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="container-enterprise text-center">
          <RevealOnScroll>
            <h2 className="font-bold text-white text-3xl md:text-4xl mb-6 tracking-tight">
              Ready to grow with us?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of organizations who have chosen Stunmark as their long-term growth partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a Conversation <ArrowRight size={15} />
              </Link>
              <Link to="/divisions" className="btn-outline inline-flex items-center gap-2">
                Explore Our Divisions
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
