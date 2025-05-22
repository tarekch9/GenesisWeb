import { useEffect, useState } from 'react';
import Link from "next/link";

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-[#0d062e]/90 shadow-lg py-3' : 'bg-[#0d062e] py-4'
    }`}>
      {/* Hauptcontainer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-md flex items-center justify-center mr-2">
              {/* Optional: Logo-Inhalt */}
            </div>
          </div>

          {/* Desktop Navigation (ab md-Breakpoint sichtbar) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6 lg:space-x-10">
              <li>
                <Link href="#home" className="text-white hover:text-[#e2e5e6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-[#e2e5e6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-white hover:text-[#e2e5e6] transition-colors">
                  Unser Prozess
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-white hover:text-[#e2e5e6] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sprachumschalter (immer sichtbar) */}
          <div className="hidden md:flex space-x-4">
            <button className="text-white hover:text-[#e2e5e6] transition-colors">DE</button>
            <button className="text-white hover:text-[#e2e5e6] transition-colors">EN</button>
          </div>

          {/* Mobile Menu Button (nur auf Mobile sichtbar) */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="text-white hover:text-[#e2e5e6] transition-colors">DE</button>
            <button 
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Dropdown) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="#home" 
                  className="block text-white hover:text-[#e2e5e6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="block text-white hover:text-[#e2e5e6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#process" 
                  className="block text-white hover:text-[#e2e5e6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Unser Prozess
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className="block text-white hover:text-[#e2e5e6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;