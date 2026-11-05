import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element in display face) */}
            <a
              href="#topo"
              onClick={(e) => handleNavClick(e, '#topo')}
              className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors"
            >
              Dra. Camila Siqueira
            </a>

            {/* Zone 2: 4-5 Clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-stone-950/40 backdrop-blur-xs transition-opacity">
          <div className="fixed inset-x-0 top-16 bg-stone-50 border-b border-stone-200 px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-stone-800 hover:text-emerald-800 py-2 border-b border-stone-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
