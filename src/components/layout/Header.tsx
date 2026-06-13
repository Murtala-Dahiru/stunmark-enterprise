import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ArrowRight,
  Tv2, Lightbulb, TrendingUp, Cpu, MessageSquare, BarChart3,
  Globe, Users, Briefcase, BookOpen, Building2
} from 'lucide-react';

const divisions = [
  { to: '/divisions#media', icon: Tv2, label: 'Media Division', desc: 'Media buying, advertising & campaign management' },
  { to: '/divisions#creative', icon: Lightbulb, label: 'Creative Division', desc: 'Branding, design & world-class production' },
  { to: '/divisions#growth', icon: TrendingUp, label: 'Growth Division', desc: 'Performance marketing & customer acquisition' },
  { to: '/divisions#technology', icon: Cpu, label: 'Technology Division', desc: 'AI solutions & digital transformation' },
  { to: '/divisions#communications', icon: MessageSquare, label: 'Communications Division', desc: 'PR, corporate comms & reputation management' },
  { to: '/divisions#research', icon: BarChart3, label: 'Research & Insights', desc: 'Market research & consumer intelligence' },
];

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/insights', label: 'Insights' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
    setDivisionsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDivisionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const onEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setDivisionsOpen(true);
  };
  const onLeave = () => {
    hoverTimer.current = setTimeout(() => setDivisionsOpen(false), 120);
  };

  const solidBg = scrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg
          ? 'bg-white/96 backdrop-blur-2xl shadow-nav py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-enterprise">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg transition-all duration-300 ${
              solidBg ? 'bg-navy-900 text-white' : 'bg-white text-navy-900'
            }`}>
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-[15px] tracking-tight transition-colors duration-300 ${
                solidBg ? 'text-navy-900' : 'text-white'
              }`}>
                Stunmark
              </span>
              <span className={`text-[9px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
                solidBg ? 'text-navy-400' : 'text-white/55'
              }`}>
                Media Growth Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {/* Divisions Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <button
                className={`nav-link flex items-center gap-1.5 py-2 px-3 rounded-md transition-colors duration-200 ${
                  location.pathname === '/divisions'
                    ? 'text-electric-500'
                    : solidBg
                      ? 'text-navy-700 hover:text-navy-900'
                      : 'text-white/85 hover:text-white'
                }`}
              >
                Divisions
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${divisionsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  divisionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="w-[520px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-enterprise-xl border border-gray-100 overflow-hidden">
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {divisions.map((d) => (
                      <Link
                        key={d.to}
                        to={d.to}
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-soft group/item transition-colors duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-electric-50 flex items-center justify-center text-electric-500 shrink-0 group-hover/item:bg-electric-500 group-hover/item:text-white transition-all duration-300">
                          <d.icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-navy-900 group-hover/item:text-electric-600 transition-colors duration-200 leading-snug">
                            {d.label}
                          </p>
                          <p className="text-[11px] text-gray-400 leading-snug mt-0.5">{d.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-soft/60">
                    <Link
                      to="/divisions"
                      className="flex items-center justify-between text-[12px] font-semibold text-electric-600 hover:text-electric-700 transition-colors duration-200"
                    >
                      <span>View all divisions & capabilities</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link py-2 px-3 rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-electric-500'
                      : solidBg
                        ? 'text-navy-700 hover:text-navy-900'
                        : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/about"
              className={`flex items-center gap-1.5 text-[12px] font-semibold tracking-wide transition-colors duration-200 ${
                solidBg ? 'text-navy-600 hover:text-navy-900' : 'text-white/70 hover:text-white'
              }`}
            >
              <Building2 size={13} />
              Investor Relations
            </Link>
            <div className={`w-px h-4 ${solidBg ? 'bg-gray-200' : 'bg-white/20'}`} />
            <Link
              to="/careers"
              className={`text-[12px] font-semibold tracking-wide transition-colors duration-200 ${
                solidBg ? 'text-navy-600 hover:text-navy-900' : 'text-white/70 hover:text-white'
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="ml-2 bg-electric-500 hover:bg-electric-600 text-white text-[12px] font-bold tracking-wide py-2.5 px-6 rounded-lg transition-all duration-300 shadow-blue-glow hover:shadow-lg hover:-translate-y-0.5"
            >
              Talk To Our Team
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button
            className={`xl:hidden p-2 rounded-lg transition-colors duration-200 ${
              solidBg ? 'text-navy-900 hover:bg-soft' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden bg-white border-t border-gray-100 transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-enterprise py-6 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
          {/* Divisions */}
          <div>
            <button
              onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
              className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold text-navy-800 hover:bg-soft transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <Globe size={15} className="text-electric-500" />
                Divisions
              </span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDivisionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileDivisionsOpen && (
              <div className="ml-4 mt-1 space-y-0.5">
                {divisions.map((d) => (
                  <Link
                    key={d.to}
                    to={d.to}
                    className="flex items-center gap-2.5 py-2.5 px-4 rounded-lg text-sm text-navy-600 hover:text-electric-600 hover:bg-electric-50 transition-colors duration-200"
                  >
                    <d.icon size={14} className="text-electric-400 shrink-0" />
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { to: '/about', label: 'About', icon: Users },
            { to: '/services', label: 'Services', icon: Briefcase },
            { to: '/industries', label: 'Industries', icon: Building2 },
            { to: '/case-studies', label: 'Case Studies', icon: BookOpen },
            { to: '/insights', label: 'Insights', icon: BarChart3 },
            { to: '/careers', label: 'Careers', icon: Users },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-electric-600 bg-electric-50'
                    : 'text-navy-800 hover:bg-soft hover:text-navy-900'
                }`
              }
            >
              <item.icon size={15} className="text-electric-400 shrink-0" />
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 mt-2 border-t border-gray-100">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-white font-bold text-sm py-4 px-6 rounded-xl transition-all duration-300"
            >
              Talk To Our Team
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
