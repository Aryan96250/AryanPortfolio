import React, { useState, useEffect } from 'react';
import { Menu, X, Skull } from 'lucide-react';

const Navbar: React.FC = () => {
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
    { name: 'Lore', href: '#lore' },
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 border-b border-blood shadow-[0_0_20px_rgba(138,3,3,0.3)] py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group cursor-pointer">
          <Skull className="text-red-700 group-hover:animate-pulse" size={28} />
          <span className="text-2xl font-horror text-white tracking-widest group-hover:text-red-500 transition-colors">
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
              className="text-sm font-bold text-slate-400 hover:text-red-500 transition-all uppercase tracking-widest hover:scale-110 hover:shadow-[0_0_10px_#ff0000] relative"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-red-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-blood backdrop-blur-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
         <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-horror text-slate-300 hover:text-red-600 transition-colors"
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