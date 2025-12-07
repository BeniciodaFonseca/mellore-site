
import React, { useState } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: SectionId) => void;
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Lock Effect
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Conceito', id: SectionId.CONCEPT },
    { label: 'Quem Somos', id: SectionId.ABOUT },
    { label: 'Nosso Espaço', id: SectionId.ENVIRONMENT },
    { label: 'Protocolos', id: SectionId.SERVICES },
    { label: 'Depoimentos', id: SectionId.TESTIMONIALS },
    { label: 'Contato', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen
        ? 'bg-transparent' // Remove backdrop-filter/blur when menu is open to prevent fixed positioning issues
        : isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <img
              src="/images/logo.png"
              alt="Mellore Estética Avançada"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm ${isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-16 lg:h-20'
                }`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/200x50/005E5D/FFFFFF?text=Mellore';
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium text-xs xl:text-sm uppercase tracking-wide transition-colors relative py-2 overflow-hidden group whitespace-nowrap ${isScrolled ? 'text-gray-600 hover:text-brand-teal' : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
              </button>
            ))}

            <button
              onClick={onOpenBooking}
              className={`font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 whitespace-nowrap ${isScrolled
                ? 'bg-brand-teal hover:bg-[#004847] text-white'
                : 'bg-white hover:bg-gray-100 text-brand-teal'
                }`}
            >
              Agendar Avaliação
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors rounded-full ${isScrolled
                ? 'text-brand-teal hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
                } ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-brand-teal z-[10000] flex flex-col animate-fade-in">
          {/* Header inside Menu */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <img
              src="/images/logo.png"
              alt="Mellore"
              className="h-10 w-auto brightness-0 invert"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 p-8 overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-2xl font-logo-serif text-white hover:text-brand-gold transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-6">
              <button
                onClick={() => {
                  onOpenBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-brand-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#c0a062] transition-all transform hover:scale-105 text-sm uppercase tracking-widest"
              >
                Agendar Avaliação
              </button>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="p-6 text-center border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Mellore Estética Avançada</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
