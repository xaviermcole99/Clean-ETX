import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleAnchorClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-[3px] border-slate-900 shadow-pop-sm py-2.5'
          : 'bg-transparent border-b-[3px] border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
            <Logo size="md" className="hover:scale-105 transition-transform" />
            <span className="text-2xl font-black text-slate-900 tracking-tight font-display">
              Clean <span className="text-brand-500 pop-text-stroke">ETX</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className="text-sm font-bold text-slate-700 hover:text-brand-500 hover:scale-105 transition-all cursor-pointer"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-sm font-bold text-slate-700 hover:text-brand-500 transition-all cursor-pointer inline-flex items-center gap-1 py-2">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-100">
                  <div className="rounded-2xl border-[2.5px] border-slate-900 bg-white shadow-pop py-1.5 overflow-hidden">
                    <Link
                      to="/services/residential"
                      className="block px-4 py-2.5 text-xs font-black text-slate-800 hover:bg-teal-50 hover:text-brand-500 transition-colors"
                    >
                      Residential Cleaning
                    </Link>
                    <Link
                      to="/services/deep-clean"
                      className="block px-4 py-2.5 text-xs font-black text-slate-800 hover:bg-teal-50 hover:text-brand-500 transition-colors border-t border-slate-100"
                    >
                      Deluxe Deep Clean
                    </Link>
                    <Link
                      to="/services/move-in-out"
                      className="block px-4 py-2.5 text-xs font-black text-slate-800 hover:bg-teal-50 hover:text-brand-500 transition-colors border-t border-slate-100"
                    >
                      Move-In / Move-Out
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/#how-it-works"
              onClick={() => pathname === '/' && handleAnchorClick('how-it-works')}
              className="text-sm font-bold text-slate-700 hover:text-brand-500 hover:scale-105 transition-all cursor-pointer"
            >
              How It Works
            </Link>

            <Link
              to="/#checklist"
              onClick={() => pathname === '/' && handleAnchorClick('checklist')}
              className="text-sm font-bold text-slate-700 hover:text-brand-500 hover:scale-105 transition-all cursor-pointer"
            >
              Checklists
            </Link>

            <Link
              to="/about"
              className="text-sm font-bold text-slate-700 hover:text-brand-500 hover:scale-105 transition-all cursor-pointer"
            >
              About Us
            </Link>
            
            <span className="h-5 w-[2px] bg-slate-900"></span>
            
            <a href="tel:9035198273" className="flex items-center gap-2 text-slate-800 hover:text-brand-500 transition-colors">
              <Phone className="w-4 h-4 text-brand-500 fill-brand-100" />
              <span className="text-sm font-extrabold font-mono">(903) 519-8273</span>
            </a>
            
            <Link
              to="/quote"
              className="bg-brand-500 hover:bg-yellow-pop text-slate-900 border-[2.5px] border-slate-900 font-extrabold py-2 px-4 rounded-xl shadow-pop-sm hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all text-sm cursor-pointer"
            >
              Book Online
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:9035198273" className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-100 border-2 border-slate-900 text-slate-900 shadow-pop-sm">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:outline-none shadow-pop-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-slate-900 shadow-pop py-5 px-4 space-y-3.5 animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            to="/"
            className="block w-full text-left font-extrabold text-slate-800 hover:text-brand-500 py-1.5 border-b border-slate-100 font-display text-sm"
          >
            Home
          </Link>
          
          <div className="border-b border-slate-100 py-1.5 space-y-2">
            <span className="block text-xs font-black text-slate-400 uppercase tracking-wider font-display">Services</span>
            <div className="pl-3 space-y-2.5">
              <Link to="/services/residential" className="block text-xs font-black text-slate-700 hover:text-brand-500">
                Residential Cleaning
              </Link>
              <Link to="/services/deep-clean" className="block text-xs font-black text-slate-700 hover:text-brand-500">
                Deluxe Deep Clean
              </Link>
              <Link to="/services/move-in-out" className="block text-xs font-black text-slate-700 hover:text-brand-500">
                Move-In / Move-Out
              </Link>
            </div>
          </div>

          <Link
            to="/#how-it-works"
            onClick={() => pathname === '/' && handleAnchorClick('how-it-works')}
            className="block w-full text-left font-extrabold text-slate-800 hover:text-brand-500 py-1.5 border-b border-slate-100 font-display text-sm"
          >
            How It Works
          </Link>
          
          <Link
            to="/#checklist"
            onClick={() => pathname === '/' && handleAnchorClick('checklist')}
            className="block w-full text-left font-extrabold text-slate-800 hover:text-brand-500 py-1.5 border-b border-slate-100 font-display text-sm"
          >
            Service Checklists
          </Link>

          <Link
            to="/about"
            className="block w-full text-left font-extrabold text-slate-800 hover:text-brand-500 py-1.5 border-b border-slate-100 font-display text-sm"
          >
            About Us
          </Link>

          <div className="flex items-center gap-2 py-1 text-slate-800">
            <Phone className="w-4 h-4 text-brand-500" />
            <span className="font-extrabold text-sm font-mono">(903) 519-8273</span>
          </div>
          <Link
            to="/quote"
            className="w-full bg-brand-500 hover:bg-yellow-pop text-slate-900 border-[2.5px] border-slate-900 font-extrabold py-2.5 px-4 rounded-xl shadow-pop-sm text-center block text-sm"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
