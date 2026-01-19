
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-black text-white pt-20 pb-10 border-t border-transparent dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={IMAGES.logo} alt="Logo COMM Soluções" className="h-8 w-auto" />
              <span className="text-2xl font-black tracking-tighter">{CONTACT_INFO.company.name}</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              {CONTACT_INFO.company.description}
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navegação</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contato</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  {CONTACT_INFO.whatsapp.formatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                {CONTACT_INFO.location}
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

        <div className="pt-10 border-t border-gray-900 dark:border-gray-800 text-center text-gray-500 text-sm font-light">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.company.name} - Todos os direitos reservados. Desenvolvido com foco em resultados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
