
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo COMM Soluções" className="h-8 w-auto" />
              <span className="text-2xl font-black tracking-tighter">COMM SOLUÇÕES</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Elevando o padrão de acabamento em pinturas e texturas residenciais e comerciais desde 2015. Transformamos espaços com paixão e técnica.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/commsolucoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/5527996955663" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navegação</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contato</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <a href="https://wa.me/5527996955663" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  (27) 99695-5663
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                contato@commsolucoes.com.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                Itabuna, BA.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">Receba dicas de decoração e novas tendências.</p>
            <div className="flex">
              <input type="email" placeholder="Seu e-mail" className="bg-gray-900 border-none rounded-l-xl px-4 py-3 flex-1 focus:ring-1 focus:ring-emerald-500" />
              <button className="bg-emerald-500 text-white px-4 py-3 rounded-r-xl font-bold">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 text-center text-gray-500 text-sm font-light">
          <p>© {new Date().getFullYear()} COMM SOLUÇÕES - Todos os direitos reservados. Desenvolvido com foco em resultados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
