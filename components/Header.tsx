import React, { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu on Escape key press and manage focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      // Focus trap logic
      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', trapFocus);
      firstElement.focus();

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', trapFocus);
        menuButtonRef.current?.focus(); // Return focus to the menu button when menu closes
      };
    } else {
        document.body.style.overflow = '';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }
  }, [isMenuOpen]);


  const navLinks = [
    { id: 'solution', label: 'Serviços' },
    { id: 'plans', label: 'Planos' },
    { id: 'event', label: 'Eventos' },
    { id: 'discounts', label: 'Cupons' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    onNavigate(sectionId);
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const isHeaderWhite = isScrolled || isMenuOpen;
  const textColor = isHeaderWhite ? 'text-brand-dark' : 'text-white';
  const hoverColor = 'hover:text-brand-orange';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderWhite ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <button onClick={handleLogoClick} className={`text-2xl font-bold ${textColor}`} aria-label="Voltar ao topo da página">
            FS <span className="text-brand-orange">Performance Club</span>
          </button>
          <nav className="hidden md:flex space-x-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-lg font-semibold transition-colors duration-200 ${textColor} ${hoverColor}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button 
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`z-50 ${textColor} ${hoverColor}`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Backdrop for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed top-0 bottom-0 right-0 bg-white z-40 w-full max-w-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
          <div className="p-4 flex justify-end">
             <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-brand-dark hover:text-brand-orange"
              aria-label="Fechar menu"
            >
                <CloseIcon className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-12 space-y-8" aria-label="Navegação móvel">
            <h2 id="mobile-menu-title" className="sr-only">Menu de Navegação</h2>
            {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-3xl font-bold text-brand-dark hover:text-brand-orange transition-colors duration-200"
                >
                {link.label}
                </button>
            ))}
          </nav>
      </div>
    </>
  );
};

export default Header;