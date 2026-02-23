import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-950/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-blue-950 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white hover:text-amber-400 transition-colors"
          >
            <h1 className="text-xl md:text-2xl">Intellectual Revolutions</h1>
            <div className="text-xs md:text-sm text-blue-300">
              Interactive Digital Timeline
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => scrollToSection('timeline')}>Timeline</NavLink>
            <NavLink onClick={() => scrollToSection('analysis')}>Analysis</NavLink>
            <NavLink onClick={() => scrollToSection('resume')}>Resume</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-blue-900 rounded-lg shadow-xl mb-4 p-4"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('timeline')}
                className="text-white hover:text-amber-400 text-left py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection('analysis')}
                className="text-white hover:text-amber-400 text-left py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Analysis
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="text-white hover:text-amber-400 text-left py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Resume
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

function NavLink({ onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-amber-400 transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
    </button>
  );
}
