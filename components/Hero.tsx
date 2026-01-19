
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-800/50 -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-300 uppercase">{CONTACT_INFO.company.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none tracking-tighter text-black dark:text-white">
            TRANSFORMAMOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-emerald-500 to-blue-500">AMBIENTES</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-light text-justify lg:text-left mx-auto lg:mx-0">
            Especialistas em pintura residencial e comercial com texturas decorativas de alto padrão. Elevamos o valor do seu imóvel com precisão técnica e criatividade.
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4 pt-4 w-full">
            <a href={CONTACT_INFO.whatsapp.url} className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-200 dark:shadow-lg dark:shadow-emerald-500/20">
              <MessageCircle size={24} />
              Solicitar Orçamento
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-black dark:hover:border-white text-black dark:text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all">
              Ver Projetos
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-right mt-8 lg:mt-0">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white dark:border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src={IMAGES.hero}
              alt="Pintura Moderna"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
