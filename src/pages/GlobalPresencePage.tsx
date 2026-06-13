import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe, Phone, Mail } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const regions = [
  {
    name: 'Africa',
    role: 'Regional Headquarters',
    accentColor: 'blue',
    description: 'Africa is our home market and largest region by revenue. We operate across Sub-Saharan and North Africa with local teams fluent in business across Anglophone, Francophone, and Lusophone Africa.',
    offices: [
      { city: 'Lagos', country: 'Nigeria', type: 'HQ', address: '14 Adeola Odeku Street, Victoria Island', phone: '+234 000 000 0000', email: 'africa@stunmark.com' },
      { city: 'Nairobi', country: 'Kenya', type: 'Office', address: 'Upperhill, Nairobi', phone: '+254 20 000 0000', email: 'eastafrica@stunmark.com' },
      { city: 'Johannesburg', country: 'South Africa', type: 'Office', address: 'Sandton City Office Park', phone: '+27 11 000 0000', email: 'southafrica@stunmark.com' },
      { city: 'Accra', country: 'Ghana', type: 'Office', address: 'Airport City, Accra', phone: '+233 30 000 0000', email: 'westaf2@stunmark.com' },
    ],
    stats: { clients: '200+', years: 10, team: '120+' },
  },
  {
    name: 'Europe',
    role: 'European Hub',
    accentColor: 'gold',
    description: 'Our European operations are headquartered in London, serving clients across the UK, continental Europe, and multinational organizations with European headquarters.',
    offices: [
      { city: 'London', country: 'United Kingdom', type: 'Hub', address: '20 Fenchurch Street, EC3M 3BY', phone: '+44 20 0000 0000', email: 'europe@stunmark.com' },
      { city: 'Paris', country: 'France', type: 'Office', address: 'La Défense, Paris', phone: '+33 1 0000 0000', email: 'france@stunmark.com' },
    ],
    stats: { clients: '80+', years: 7, team: '45+' },
  },
  {
    name: 'Middle East & Africa',
    role: 'MEA Hub',
    accentColor: 'blue',
    description: 'Our MEA Hub in Dubai serves the GCC, Levant, and North Africa. We have deep experience in government communications, sovereign wealth fund PR, and luxury brand strategy across the region.',
    offices: [
      { city: 'Dubai', country: 'UAE', type: 'Hub', address: 'DIFC Gate, Level 14', phone: '+971 4 000 0000', email: 'mea@stunmark.com' },
      { city: 'Riyadh', country: 'Saudi Arabia', type: 'Office', address: 'King Fahad Road, Riyadh', phone: '+966 11 000 0000', email: 'ksa@stunmark.com' },
    ],
    stats: { clients: '60+', years: 4, team: '30+' },
  },
  {
    name: 'North America',
    role: 'Americas Hub',
    accentColor: 'gold',
    description: 'Our New York office serves enterprise and Fortune 500 clients across North America, providing access to global media investments and serving the diaspora market.',
    offices: [
      { city: 'New York', country: 'United States', type: 'Hub', address: '30 Rockefeller Plaza, 10th Floor', phone: '+1 212 000 0000', email: 'americas@stunmark.com' },
    ],
    stats: { clients: '50+', years: 3, team: '20+' },
  },
  {
    name: 'Asia-Pacific',
    role: 'APAC Hub',
    accentColor: 'blue',
    description: 'Our APAC operations are based in Singapore, serving clients across South and Southeast Asia. We bring emerging-market growth expertise to high-velocity markets.',
    offices: [
      { city: 'Singapore', country: 'Singapore', type: 'Hub', address: 'Marina Bay Financial Centre', phone: '+65 6000 0000', email: 'apac@stunmark.com' },
    ],
    stats: { clients: '40+', years: 2, team: '15+' },
  },
];

export default function GlobalPresencePage() {
  return (
    <>
      <section className="bg-gradient-dark pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-enterprise relative z-10">
          <RevealOnScroll className="max-w-4xl">
            <p className="overline-gold mb-5">Global Presence</p>
            <h1 className="font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Five continents. One unified company.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl">
              Stunmark operates across 5 continents and 40+ countries, combining global scale with deep local intelligence. Our regional hubs are staffed by professionals who understand the nuances of their markets.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Global Stats */}
      <section className="bg-navy-900 py-16">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {[
              { value: '40+', label: 'Countries Active', sub: 'Active client engagements' },
              { value: '5', label: 'Regional Hubs', sub: 'Continental headquarters' },
              { value: '12', label: 'Office Locations', sub: 'Full-service offices' },
              { value: '250+', label: 'Team Members', sub: 'Professionals globally' },
            ].map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 80} className="bg-navy-900 p-8 text-center">
                <div className="text-4xl font-black text-electric-400 mb-1">{s.value}</div>
                <p className="text-white font-bold text-sm mb-0.5">{s.label}</p>
                <p className="text-white/35 text-[11px]">{s.sub}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Detail */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-enterprise space-y-20">
          {regions.map((region, i) => (
            <RevealOnScroll key={region.name} delay={i * 60}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Region info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe size={18} className={region.accentColor === 'blue' ? 'text-electric-500' : 'text-gold-500'} />
                    <span className={`text-[11px] font-bold tracking-[0.18em] uppercase ${
                      region.accentColor === 'blue' ? 'text-electric-500' : 'text-gold-600'
                    }`}>
                      {region.role}
                    </span>
                  </div>
                  <h2 className="font-bold text-navy-900 text-2xl mb-3">{region.name}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{region.description}</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xl font-black text-navy-900">{region.stats.clients}</p>
                      <p className="text-gray-400 text-xs">Clients</p>
                    </div>
                    <div>
                      <p className="text-xl font-black text-navy-900">{region.stats.years}</p>
                      <p className="text-gray-400 text-xs">Years active</p>
                    </div>
                    <div>
                      <p className="text-xl font-black text-navy-900">{region.stats.team}</p>
                      <p className="text-gray-400 text-xs">Team members</p>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {region.offices.map((o) => (
                    <div key={o.city} className="bg-soft rounded-2xl p-6 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-navy-900 text-base">{o.city}</h3>
                          <p className="text-gray-400 text-xs">{o.country}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          o.type === 'HQ' || o.type === 'Hub'
                            ? 'bg-electric-50 text-electric-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {o.type}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-2 text-[12px] text-gray-500">
                          <MapPin size={11} className="text-electric-400 mt-0.5 shrink-0" />
                          {o.address}
                        </div>
                        <div className="flex items-center gap-2 text-[12px] text-gray-500">
                          <Phone size={11} className="text-electric-400 shrink-0" />
                          {o.phone}
                        </div>
                        <div className="flex items-center gap-2 text-[12px] text-gray-500">
                          <Mail size={11} className="text-electric-400 shrink-0" />
                          {o.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {i < regions.length - 1 && <div className="divider mt-12" />}
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="container-enterprise text-center">
          <RevealOnScroll>
            <Globe size={32} className="text-electric-400 mx-auto mb-4" />
            <h2 className="font-bold text-white text-3xl mb-4">Need a global partner?</h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              Our global network means we can serve you wherever you operate — or wherever you want to grow.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
