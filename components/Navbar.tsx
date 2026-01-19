
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS, CONTACT_INFO, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={IMAGES.logo} alt="Logo COMM Soluções" className="h-10 w-auto" />
          <span className="text-2xl font-black tracking-tighter text-black dark:text-white">COMM <span className="font-light text-gray-500 dark:text-gray-400">SOLUÇÕES</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:scale-105">
            ORÇAMENTO
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 dark:text-gray-200">
              {link.name}
            </a>
          ))}
          <a href={CONTACT_INFO.whatsapp.url} className="bg-red-500 text-white p-4 rounded-xl text-center font-bold">
            SOLICITAR ORÇAMENTO
          </a>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
