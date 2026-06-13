import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DivisionsPage from './pages/DivisionsPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import InsightsPage from './pages/InsightsPage';
import CareersPage from './pages/CareersPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import GlobalPresencePage from './pages/GlobalPresencePage';

const pageTitles: Record<string, string> = {
  '/': 'Stunmark | Global Media Growth Company',
  '/about': 'About Us | Stunmark',
  '/divisions': 'Our Divisions | Stunmark',
  '/services': 'Services | Stunmark',
  '/industries': 'Industries | Stunmark',
  '/case-studies': 'Case Studies | Stunmark',
  '/insights': 'Insights & Research | Stunmark',
  '/careers': 'Careers | Stunmark',
  '/leadership': 'Leadership | Stunmark',
  '/contact': 'Contact | Stunmark',
  '/investor-relations': 'Investor Relations | Stunmark',
  '/sustainability': 'Sustainability | Stunmark',
  '/global-presence': 'Global Presence | Stunmark',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? 'Stunmark | Global Media Growth Company';
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/divisions" element={<DivisionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investor-relations" element={<InvestorRelationsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/global-presence" element={<GlobalPresencePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
