import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, FileText, Calendar, Download } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const financialHighlights = [
  { metric: 'Revenue Growth', value: 47, suffix: '%', desc: 'YoY revenue growth for FY2024', accent: 'blue' },
  { metric: 'Client Retention', value: 94, suffix: '%', desc: 'Annual client retention rate', accent: 'gold' },
  { metric: 'Markets', value: 40, suffix: '+', desc: 'Active markets globally', accent: 'blue' },
  { metric: 'Team Growth', value: 38, suffix: '%', desc: 'Headcount growth FY2024', accent: 'gold' },
];

const reports = [
  { title: 'Annual Report 2024', type: 'Annual Report', date: 'March 2025', size: '4.2 MB' },
  { title: 'H1 2024 Performance Review', type: 'Interim Report', date: 'September 2024', size: '2.1 MB' },
  { title: 'FY2023 Annual Report', type: 'Annual Report', date: 'March 2024', size: '3.8 MB' },
  { title: 'ESG & Sustainability Report 2024', type: 'ESG Report', date: 'April 2025', size: '2.7 MB' },
  { title: 'Investor Presentation Q1 2025', type: 'Presentation', date: 'May 2025', size: '1.5 MB' },
];

const events = [
  { title: 'Q2 2025 Investor Briefing', date: 'August 15, 2025', type: 'Webinar', status: 'upcoming' },
  { title: 'Annual General Meeting 2025', date: 'September 22, 2025', type: 'In-Person', status: 'upcoming' },
  { title: 'Africa Growth Summit — Stunmark Keynote', date: 'October 8, 2025', type: 'Conference', status: 'upcoming' },
  { title: 'Q1 2025 Investor Briefing', date: 'May 14, 2025', type: 'Webinar', status: 'past' },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Investor Relations</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Building long-term value for stakeholders worldwide.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Stunmark is committed to transparency, strong governance, and delivering sustainable value to all our stakeholders — clients, partners, employees, and investors.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="bg-navy-900 py-16">
        <div className="container-enterprise">
          <RevealOnScroll className="mb-10">
            <p className="overline-gold mb-2">FY2024 Performance Highlights</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {financialHighlights.map((h, i) => (
              <RevealOnScroll key={h.metric} delay={i * 80} className="bg-navy-900 p-8 text-center">
                <div className={`text-4xl font-black mb-1 ${h.accent === 'blue' ? 'text-electric-400' : 'text-gold-400'}`}>
                  <AnimatedCounter end={h.value} suffix={h.suffix} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{h.metric}</p>
                <p className="text-white/35 text-[11px]">{h.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <RevealOnScroll className="mb-10">
                <p className="overline-blue mb-3">Financial Reports</p>
                <h2 className="font-bold text-navy-900 text-3xl tracking-tight">Documents & Reports</h2>
              </RevealOnScroll>
              <div className="space-y-3">
                {reports.map((r, i) => (
                  <RevealOnScroll key={r.title} delay={i * 60}>
                    <div className="group bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-enterprise-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center shrink-0">
                        <FileText size={16} className="text-electric-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-navy-900 text-sm group-hover:text-electric-600 transition-colors">{r.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[11px] text-electric-500 font-semibold">{r.type}</span>
                          <span className="text-gray-300 text-[11px]">·</span>
                          <span className="text-[11px] text-gray-400">{r.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 shrink-0">
                        <Download size={13} className="text-electric-400" />
                        {r.size}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <div>
              <RevealOnScroll className="mb-10">
                <p className="overline-gold mb-3">Events & Calendar</p>
                <h2 className="font-bold text-navy-900 text-3xl tracking-tight">Investor Events</h2>
              </RevealOnScroll>
              <div className="space-y-3">
                {events.map((e, i) => (
                  <RevealOnScroll key={e.title} delay={i * 60}>
                    <div className={`rounded-2xl p-5 border ${
                      e.status === 'upcoming'
                        ? 'bg-electric-50 border-electric-100'
                        : 'bg-soft border-gray-100 opacity-60'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-navy-900 text-sm">{e.title}</h3>
                        {e.status === 'upcoming' && (
                          <span className="text-[10px] font-bold bg-electric-500 text-white px-2.5 py-1 rounded-full ml-3 shrink-0">Upcoming</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
                          <Calendar size={11} className="text-electric-400" />
                          {e.date}
                        </div>
                        <span className="text-[11px] font-semibold text-electric-500 bg-white px-2.5 py-0.5 rounded-full">
                          {e.type}
                        </span>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="py-20 bg-soft">
        <div className="container-narrow">
          <RevealOnScroll className="bg-white rounded-3xl p-10 border border-gray-100 text-center">
            <TrendingUp size={32} className="text-electric-500 mx-auto mb-4" />
            <h2 className="font-bold text-navy-900 text-2xl mb-3">Investor Enquiries</h2>
            <p className="text-gray-500 text-[15px] mb-6 max-w-md mx-auto">
              For investor relations enquiries, please contact our IR team directly. We aim to respond within 2 business days.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact IR Team <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
