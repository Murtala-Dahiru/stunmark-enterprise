import { ArrowRight, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const offices = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    region: 'Africa HQ',
    address: '14 Adeola Odeku Street, Victoria Island',
    phone: '+234 000 000 0000',
    email: 'africa@stunmark.com',
    hours: 'Mon–Fri 8am–6pm WAT',
    accent: 'blue',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe Hub',
    address: '20 Fenchurch Street, EC3M 3BY',
    phone: '+44 20 0000 0000',
    email: 'europe@stunmark.com',
    hours: 'Mon–Fri 9am–6pm GMT',
    accent: 'gold',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    region: 'Middle East Hub',
    address: 'DIFC Gate, Level 14, Dubai',
    phone: '+971 4 000 0000',
    email: 'mea@stunmark.com',
    hours: 'Sun–Thu 8am–5pm GST',
    accent: 'blue',
  },
  {
    city: 'New York',
    country: 'United States',
    region: 'Americas Hub',
    address: '30 Rockefeller Plaza, 10th Floor',
    phone: '+1 212 000 0000',
    email: 'americas@stunmark.com',
    hours: 'Mon–Fri 9am–6pm EST',
    accent: 'gold',
  },
];

const serviceInterests = [
  'Media Planning & Buying',
  'Brand & Creative',
  'Growth & Performance',
  'Technology & AI',
  'Communications & PR',
  'Research & Insights',
  'Integrated Engagement',
  'Other / Not Sure Yet',
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Contact Us</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Let's build something extraordinary together.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Whether you're a startup or a sovereign institution, we want to hear about your growth ambitions. Our team typically responds within one business day.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <RevealOnScroll direction="left" className="lg:col-span-3">
              <h2 className="font-bold text-navy-900 text-2xl mb-2">Request a Consultation</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and a senior member of our team will be in touch.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">First Name *</label>
                    <input type="text" placeholder="John" className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Last Name *</label>
                    <input type="text" placeholder="Doe" className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Business Email *</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Organization *</label>
                    <input type="text" placeholder="Company name" className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Your Role</label>
                    <input type="text" placeholder="CMO, CEO, Director..." className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200" />
                  </div>
                </div>

                {/* Service interest */}
                <div>
                  <label className="block text-[12px] font-bold text-navy-700 mb-2 tracking-wide uppercase">Area of Interest</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceInterests.map((s) => (
                      <label key={s} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <span className="text-[12px] font-semibold text-navy-600 bg-soft border border-gray-200 px-3 py-1.5 rounded-full peer-checked:bg-electric-500 peer-checked:text-white peer-checked:border-electric-500 transition-all duration-200 cursor-pointer">
                          {s}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Tell Us About Your Goals *</label>
                  <textarea rows={5} placeholder="Describe your organization, your key growth challenges, and what you're hoping to achieve..." className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200 resize-none" />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-navy-700 mb-1.5 tracking-wide uppercase">Approximate Budget Range</label>
                  <select className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200 appearance-none">
                    <option value="">Please select...</option>
                    <option>Under $50,000</option>
                    <option>$50,000 – $200,000</option>
                    <option>$200,000 – $500,000</option>
                    <option>$500,000 – $1,000,000</option>
                    <option>Over $1,000,000</option>
                  </select>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-5 text-base">
                  Request Consultation
                  <ArrowRight size={16} />
                </button>
                <p className="text-center text-[11px] text-gray-400">
                  By submitting, you agree to our Privacy Policy. We typically respond within 1 business day.
                </p>
              </form>
            </RevealOnScroll>

            {/* Details */}
            <RevealOnScroll direction="right" delay={150} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-5">Get in touch directly</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@stunmark.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center">
                      <Mail size={16} className="text-electric-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm group-hover:text-electric-600 transition-colors">hello@stunmark.com</p>
                      <p className="text-gray-400 text-xs">General enquiries</p>
                    </div>
                  </a>
                  <a href="tel:+2340000000000" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center">
                      <Phone size={16} className="text-electric-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm group-hover:text-electric-600 transition-colors">+234 000 000 0000</p>
                      <p className="text-gray-400 text-xs">Lagos HQ main line</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center">
                      <Clock size={16} className="text-electric-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">Mon–Fri, 8am–6pm WAT</p>
                      <p className="text-gray-400 text-xs">After-hours urgent line available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div>
                <h3 className="font-bold text-navy-900 text-lg mb-5 flex items-center gap-2">
                  <Globe size={18} className="text-electric-500" />
                  Global Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.city} className="bg-soft rounded-2xl p-5 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-navy-900 text-sm">{o.city}, {o.country}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          o.accent === 'blue' ? 'bg-electric-50 text-electric-600' : 'bg-gold-50 text-gold-600'
                        }`}>
                          {o.region}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 text-[12px] text-gray-400">
                          <MapPin size={11} className="mt-0.5 shrink-0 text-electric-400" />
                          {o.address}
                        </div>
                        <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                          <Phone size={11} className="text-electric-400" />
                          {o.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
