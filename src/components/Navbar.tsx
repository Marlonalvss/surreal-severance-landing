
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3",
      scrolled ? "bg-lumon-dark/90 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lumon-light font-mono text-xl tracking-widest animate-pulse-slow">
            LUMON
          </span>
          <Separator orientation="vertical" className="h-6 mx-3 bg-lumon-blue/40" />
          <span className="text-lumon-light font-mono text-xs tracking-wider opacity-70">
            INDUSTRIES
          </span>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['Sobre', 'Galeria', 'Personagens', 'Cronologia', 'Assistir'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-lumon-light/80 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="md:hidden text-lumon-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
