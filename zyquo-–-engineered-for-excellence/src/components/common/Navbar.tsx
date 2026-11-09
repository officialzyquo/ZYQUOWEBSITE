import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageView, ServiceId } from '../../types';
import { SERVICES } from '../../data/services';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  onOpenProjectBuilder: () => void;
  onOpenSolutionFinder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenProjectBuilder,
  onOpenSolutionFinder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView, serviceId?: ServiceId) => {
    onNavigate(page, serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-8 ${
          isScrolled
            ? 'glass-panel-gold bg-[#0B0B0B]/85 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,98,0.08)] border-[#D4AF62]/25'
            : 'glass-panel bg-[#0B0B0B]/60 border-white/10'
        }`}
      >
        {/* Zone 1: Official Brand Logo Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <Logo
            size="sm"
            showTaglineText={true}
            onClick={() => handleNavClick('home')}
          />
        </div>

        {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F5F5F5]">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'home' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'about' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            About
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
                currentPage === 'services' || currentPage === 'service-detail'
                  ? 'text-[#D4AF62] font-semibold'
                  : 'text-[#F5F5F5]'
              }`}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#D4AF62]' : 'text-[#A3A3A3]'
                }`}
              />
            </button>

            {/* Mega Dropdown Glass Panel */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-20 w-80 pt-3 animate-in fade-in duration-200">
                <div className="glass-panel-gold rounded-2xl p-3 border border-[#D4AF62]/30 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9)] space-y-1">
                  <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF62]">
                      Engineering Capabilities
                    </span>
                    <button
                      onClick={onOpenSolutionFinder}
                      className="text-[10px] text-[#A3A3A3] hover:text-white flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-[#D4AF62]" />
                      Smart Finder
                    </button>
                  </div>
                  {SERVICES.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => handleNavClick('service-detail', svc.id)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 transition-colors group flex items-start justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#D4AF62] transition-colors">
                          {svc.title}
                        </div>
                        <div className="text-[10px] text-[#A3A3A3] line-clamp-1 mt-0.5">
                          {svc.tagline}
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#A3A3A3] opacity-0 group-hover:opacity-100 group-hover:text-[#D4AF62] transition-opacity shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'portfolio' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            Our Work
          </button>

          <button
            onClick={() => handleNavClick('industries')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'industries' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            Industries
          </button>

          <button
            onClick={() => handleNavClick('approach')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'approach' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            Our Approach
          </button>

          <button
            onClick={() => handleNavClick('insights')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D4AF62] ${
              currentPage === 'insights' ? 'text-[#D4AF62] font-semibold' : 'text-[#F5F5F5]'
            }`}
          >
            Insights
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] text-xs font-semibold tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(212,175,98,0.25)] whitespace-nowrap shrink-0"
          >
            START A PROJECT (9263666014)
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-[#F5F5F5] hover:bg-white/10 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 space-y-3 animate-in fade-in duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            <button
              onClick={() => handleNavClick('home')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              About ZYQUO
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              All Services
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Our Work
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Industries
            </button>
            <button
              onClick={() => handleNavClick('approach')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Our Approach
            </button>
            <button
              onClick={() => handleNavClick('insights')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Insights
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 rounded-xl text-left text-xs font-medium text-white hover:bg-white/5"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs text-center block"
            >
              START A PROJECT (9263666014)
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSolutionFinder();
              }}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D4AF62] border border-[#D4AF62]/30 font-medium text-xs text-center"
            >
              Interactive Solution Finder
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
