
import React from 'react';
import { Home, Building2, Paintbrush, Layers } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Pintura Residencial',
    description: 'Acabamento impecável para casas e apartamentos. Proteção e beleza para cada cômodo.',
    icon: <Home size={32} />,
    color: 'bg-red-500',
  },
  {
    id: '2',
    title: 'Pintura Comercial',
    description: 'Agilidade e qualidade técnica para lojas, escritórios e galpões comerciais.',
    icon: <Building2 size={32} />,
    color: 'bg-blue-500',
  },
  {
    id: '3',
    title: 'Texturas Decorativas',
    description: 'Efeitos de cimento queimado, marmorato e texturas personalizadas exclusivas.',
    icon: <Paintbrush size={32} />,
    color: 'bg-emerald-500',
  },
  {
    id: '4',
    title: 'Acabamentos Especiais',
    description: 'Tratamento de superfícies, verniz, resinas e correções técnicas de alto padrão.',
    icon: <Layers size={32} />,
    color: 'bg-amber-500',
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Nossas Soluções</h2>
          <p className="text-4xl md:text-5xl font-black text-black">SERVIÇOS DE ELITE</p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 text-center lg:text-left">
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-6 mx-auto lg:mx-0`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-justify lg:text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
