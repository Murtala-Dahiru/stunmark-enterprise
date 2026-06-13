import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import RevealOnScroll from '../../ui/RevealOnScroll';

export default function ContactCtaSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <RevealOnScroll direction="left">
            <p className="overline-blue mb-4">Get In Touch</p>
            <h2 className="font-bold text-navy-900 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Let's build something<br />
              <span className="text-gradient-blue">extraordinary together.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Whether you're looking to accelerate growth, transform your brand, or develop a comprehensive media strategy — our team is ready to help you achieve your most ambitious goals.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: '+234 000 000 0000', sub: 'Available Monday–Friday, 8am–6pm WAT' },
                { icon: Mail, label: 'hello@stunmark.com', sub: 'We respond within 24 hours' },
                { icon: MapPin, label: 'Lagos, Nigeria (Global HQ)', sub: 'Offices in 5 continents' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center shrink-0">
                    <c.icon size={16} className="text-electric-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-[15px]">{c.label}</p>
                    <p className="text-gray-400 text-[13px]">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                Talk To Our Team
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link to="/case-studies" className="btn-outline-dark">
                View Our Work
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right: Quick Form */}
          <RevealOnScroll direction="right" delay={150}>
            <div className="bg-soft rounded-3xl p-8 lg:p-10 border border-gray-100">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Request a Consultation</h3>
              <p className="text-gray-500 text-sm mb-8">Tell us about your organization and goals. Our team will be in touch within one business day.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-700 mb-1.5 tracking-wide">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-navy-700 mb-1.5 tracking-wide">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-navy-700 mb-1.5 tracking-wide">Business Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-navy-700 mb-1.5 tracking-wide">Organization</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-navy-700 mb-1.5 tracking-wide">How can we help?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500/30 focus:border-electric-500 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  Request Consultation
                  <ArrowRight size={15} />
                </button>
                <p className="text-center text-[11px] text-gray-400">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
