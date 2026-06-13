import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Globe, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { to: '/about', label: 'About Stunmark' },
      { to: '/leadership', label: 'Leadership' },
      { to: '/global-presence', label: 'Global Presence' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/investor-relations', label: 'Investor Relations' },
      { to: '/careers', label: 'Careers' },
    ],
  },
  divisions: {
    title: 'Divisions',
    links: [
      { to: '/divisions#media', label: 'Media Division' },
      { to: '/divisions#creative', label: 'Creative Division' },
      { to: '/divisions#growth', label: 'Growth Division' },
      { to: '/divisions#technology', label: 'Technology Division' },
      { to: '/divisions#communications', label: 'Communications Division' },
      { to: '/divisions#research', label: 'Research & Insights' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { to: '/services', label: 'All Services' },
      { to: '/industries', label: 'Industries' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/insights', label: 'Insights & Research' },
      { to: '/contact', label: 'Get a Proposal' },
    ],
  },
};

const offices = [
  { city: 'Lagos', country: 'Nigeria', region: 'Africa HQ' },
  { city: 'London', country: 'United Kingdom', region: 'Europe' },
  { city: 'Dubai', country: 'UAE', region: 'Middle East' },
  { city: 'New York', country: 'United States', region: 'North America' },
];

export default function Footer() {
  return (
    <footer className="bg-richblack-900 text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/8">
        <div className="container-enterprise py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="overline-gold mb-3">Start a Conversation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Ready to accelerate<br />your growth?
              </h2>
              <p className="text-white/50 mt-3 text-[15px] leading-relaxed">
                Talk to our team about how Stunmark can drive transformative results for your organization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                Talk To Our Team
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/case-studies"
                className="btn-outline text-sm"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-enterprise py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-xl text-navy-900">
                S
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[16px] tracking-tight text-white">Stunmark</span>
                <span className="text-[9px] tracking-[0.22em] uppercase font-medium text-white/40">Media Growth Group</span>
              </div>
            </Link>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-sm mb-8">
              A global media growth company driving sustainable growth through media, technology, creativity, strategy, and innovation for brands, businesses, and institutions worldwide.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Globe, label: 'Global', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>

            {/* Contact Quick */}
            <div className="space-y-2.5">
              <a href="mailto:hello@stunmark.com" className="flex items-center gap-2.5 text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200">
                <Mail size={13} className="text-electric-400 shrink-0" />
                hello@stunmark.com
              </a>
              <a href="tel:+2340000000000" className="flex items-center gap-2.5 text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200">
                <Phone size={13} className="text-electric-400 shrink-0" />
                +234 000 000 0000
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.values(footerLinks).map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[13px] text-white/55 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Offices */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">
              Global Offices
            </h4>
            <div className="space-y-4">
              {offices.map((o) => (
                <div key={o.city} className="flex items-start gap-2.5">
                  <MapPin size={12} className="text-electric-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-white/70">{o.city}</p>
                    <p className="text-[11px] text-white/35">{o.country} · {o.region}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/global-presence"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-electric-400 hover:text-electric-300 transition-colors duration-200 mt-2"
              >
                All office locations
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-enterprise py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/30">
              © {new Date().getFullYear()} Stunmark Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
