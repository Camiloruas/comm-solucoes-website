
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Excelência em Acabamento</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-black">
            TRANSFORMAMOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-emerald-500 to-blue-500">AMBIENTES</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
            Especialistas em pintura residencial e comercial com texturas decorativas de alto padrão. Elevamos o valor do seu imóvel com precisão técnica e criatividade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/5500000000000" className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-200">
              <MessageCircle size={24} />
              Solicitar Orçamento
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-100 hover:border-black text-black px-8 py-5 rounded-2xl font-bold text-lg transition-all">
              Ver Projetos
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1200&auto=format&fit=crop" 
              alt="Pintura Moderna" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
