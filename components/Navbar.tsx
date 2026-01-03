
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Antes & Depois', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-2 h-8 bg-red-500"></div>
            <div className="w-2 h-8 bg-emerald-500"></div>
            <div className="w-2 h-8 bg-blue-500"></div>
            <div className="w-2 h-8 bg-amber-500"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-black">COMM <span className="font-light text-gray-500">SOLUÇÕES</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all transform hover:scale-105">
            ORÇAMENTO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5500000000000" className="bg-red-500 text-white p-4 rounded-xl text-center font-bold">
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
