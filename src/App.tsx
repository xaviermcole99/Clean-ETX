import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { ResidentialServicePage } from './pages/ResidentialServicePage';
import { DeepCleanServicePage } from './pages/DeepCleanServicePage';
import { MoveCleanServicePage } from './pages/MoveCleanServicePage';
import Logo from './components/Logo';

function AppContent() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Slight timeout to let DOM updates finish
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <div className="font-sans text-slate-800 antialiased overflow-x-hidden min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/services/residential" element={<ResidentialServicePage />} />
          <Route path="/services/deep-clean" element={<DeepCleanServicePage />} />
          <Route path="/services/move-in-out" element={<MoveCleanServicePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t-[3px] border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size="md" className="hover:scale-105 transition-transform" />
              <span className="text-xl font-black text-white tracking-tight font-display">
                Clean <span className="text-brand-500 pop-text-stroke">ETX</span>
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-black uppercase tracking-wider font-display">
              <Link to="/#how-it-works" className="hover:text-brand-500 transition-colors">
                Our Process
              </Link>
              <Link to="/#checklist" className="hover:text-brand-500 transition-colors">
                Checklists
              </Link>
              <Link to="/about" className="hover:text-brand-500 transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <hr className="border-slate-800" />

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-bold">
            <p>&copy; 2026 Clean ETX Inc. All rights reserved. Locally owned and operated.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:9035198273" className="hover:text-slate-300 flex items-center gap-1.5 font-mono">
                <span>📞</span> (903) 519-8273
              </a>
              <a href="mailto:cleanetx.info@gmail.com" className="hover:text-slate-300 flex items-center gap-1.5">
                <span>✉️</span> cleanetx.info@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
