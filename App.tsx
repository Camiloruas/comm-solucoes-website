
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CheckCircle, ShieldCheck, Trophy, Clock, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />

      <Hero />

      {/* Services Section */}
      <Services />

      {/* Before and After Section */}
      <section id="portfolio" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Transformação Real</h2>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black leading-tight">MUDANÇA RADICAL <br />EM CADA DETALHE</h2>
                <div className="w-24 h-1 bg-emerald-500 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed text-justify lg:text-left">
                Utilizamos as melhores marcas do mercado (Suvinil, Coral, Sherwin-Williams) e técnicas exclusivas de aplicação para garantir resultados duradouros e visualmente impactantes.
              </p>
              <ul className="space-y-4">
                {[
                  'Nivelamento perfeito de superfícies',
                  'Isolamento total de móveis e pisos',
                  'Efeitos de textura sob medida',

                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-emerald-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <BeforeAfterSlider
                beforeImg="/sala.png"
                afterImg="/sala1.png"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-black">100%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <img
                src="/pintura-parede.png"
                alt="Nossa Equipe"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-white border-8 border-gray-50">
                <Trophy size={32} />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Nossa História</h2>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black leading-tight">PROFISSIONALISMO <br />QUE INSPIRA CONFIANÇA</h2>
                <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed text-justify lg:text-left">
                Fundada com o propósito de redefinir o setor de pintura, a COMM SOLUÇÕES une tradição técnica com as tendências mais modernas de decoração. Não somos apenas pintores; somos consultores de estética para o seu ambiente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left">
                  <ShieldCheck className="text-blue-500 mb-4 mx-auto lg:mx-0" size={32} />
                  <p className="font-bold text-black uppercase text-xs tracking-widest mb-2">Segurança</p>
                  <p className="text-sm text-gray-500">Equipe segurada e uniformizada.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left">
                  <Clock className="text-emerald-500 mb-4 mx-auto lg:mx-0" size={32} />
                  <p className="font-bold text-black uppercase text-xs tracking-widest mb-2">Pontualidade</p>
                  <p className="text-sm text-gray-500">Cumprimento rigoroso de cronograma.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left">
                  <CheckCircle className="text-red-500 mb-4 mx-auto lg:mx-0" size={32} />
                  <p className="font-bold text-black uppercase text-xs tracking-widest mb-2">Qualidade</p>
                  <p className="text-sm text-gray-500">Acabamento premium impecável.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] bg-gradient-to-br from-gray-900 via-black to-gray-800 p-12 md:p-24 overflow-hidden text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">PRONTO PARA <br />RENOVAR SEU ESPAÇO?</h2>
              <p className="text-xl text-gray-400 font-light">
                Solicite um orçamento personalizado hoje mesmo. Atendimento rápido via WhatsApp com consultoria técnica gratuita.
              </p>
              <div className="pt-6">
                <a href="https://wa.me/5527996955663" className="inline-flex items-center gap-4 bg-white text-black hover:bg-gray-100 px-10 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl shadow-wide/10 group">
                  Falar com Especialista (27) 99695-5663
                  <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp for Mobile Persistence */}
      <a href="https://wa.me/5527996955663" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden">
        <MessageSquare size={32} />
      </a>
    </div>
  );
};

export default App;
