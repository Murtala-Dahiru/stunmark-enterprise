import RevealOnScroll from '../../ui/RevealOnScroll';

const testimonials = [
  {
    quote: "Stunmark completely transformed how we think about media and growth. Their integrated approach across divisions gave us a level of strategic coherence we had never experienced with any other partner. The results speak for themselves.",
    author: "Chief Marketing Officer",
    org: "Pan-African Banking Group",
    industry: "Financial Services",
    accent: 'blue',
  },
  {
    quote: "Working with Stunmark's Technology Division on our digital transformation was a game-changer. They didn't just implement solutions — they fundamentally reimagined how our organization could operate at scale. Professional, rigorous, world-class.",
    author: "Director General",
    org: "Federal Communications Agency",
    industry: "Government",
    accent: 'gold',
  },
  {
    quote: "The Research & Insights team delivered analysis that shifted our entire strategy. The depth of their consumer intelligence and the quality of their recommendations put them in a completely different league from any research firm we had previously engaged.",
    author: "Chief Strategy Officer",
    org: "Global Consumer Brands Group",
    industry: "Retail",
    accent: 'blue',
  },
  {
    quote: "Stunmark's Communications Division managed one of our most complex corporate reputation situations with extraordinary skill. Their crisis communications playbook and stakeholder management approach were exceptional under pressure.",
    author: "CEO",
    org: "Energy Conglomerate",
    industry: "Energy",
    accent: 'gold',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-navy-950 overflow-hidden relative">
      <div className="absolute inset-0 hero-mesh opacity-40 pointer-events-none" />

      <div className="container-enterprise relative z-10">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="overline-gold mb-4">Client Voices</p>
          <h2 className="font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}>
            What our clients say.
          </h2>
          <p className="text-white/45 text-lg leading-relaxed mt-4">
            Trusted by leading organizations across 40 countries and every major industry.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.author} delay={i * 100}>
              <div className="card-glass group">
                {/* Quote mark */}
                <div className={`text-6xl font-black leading-none mb-6 -mt-2 ${
                  t.accent === 'blue' ? 'text-electric-500/30' : 'text-gold-500/30'
                }`}>
                  "
                </div>
                <blockquote className="text-white/75 text-[15px] leading-relaxed mb-8 font-light">
                  {t.quote}
                </blockquote>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{t.author}</p>
                    <p className="text-white/45 text-xs mt-0.5">{t.org}</p>
                  </div>
                  <span className={`section-badge ${
                    t.accent === 'blue' ? 'bg-electric-500/15 text-electric-300 border-electric-500/20' : 'bg-gold-500/15 text-gold-300 border-gold-500/20'
                  }`}>
                    {t.industry}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Logo strip */}
        <RevealOnScroll delay={400} className="mt-16 pt-12 border-t border-white/8">
          <p className="text-center text-white/25 text-xs tracking-[0.2em] uppercase font-semibold mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              'Central Bank of Nigeria',
              'Federal Ministry of Finance',
              'MTN Group',
              'Dangote Industries',
              'African Development Bank',
              'Unilever Africa',
            ].map((name) => (
              <span key={name} className="text-[12px] font-bold text-white/20 hover:text-white/40 transition-colors duration-200 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
