import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { WeatherType } from './BackgroundCanvas';

interface NavbarProps {
  weather?: WeatherType;
}

const Navbar: React.FC<NavbarProps> = ({ weather }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navClasses = scrolled 
    ? 'bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-lg py-4'
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navClasses}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group cursor-pointer">
          <Mountain className="text-white group-hover:text-accent transition-colors" size={28} />
          <span className="text-2xl font-display font-bold tracking-wider text-white">
            ARYAN
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium uppercase tracking-widest hover:text-accent text-white/80 transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full text-shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-6 border-b border-white/10' : 'max-h-0 opacity-0 py-0'} bg-black/80`}>
         <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-display text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
         </div>
      </div>
    </nav>
  );
};

export default Navbar;