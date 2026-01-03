
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    location: 'Ilheus, BA',
    text: 'A COMM Soluções superou minhas expectativas. O efeito cimento queimado na sala ficou simplesmente perfeito. Equipe extremamente limpa e pontual.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Juliana Rocha',
    location: 'Itabuna, BA',
    text: 'Pintura comercial executada com maestria em nossa nova galeria. Entenderam perfeitamente a paleta de cores e o prazo foi cumprido à risca.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ricardo Silva',
    location: 'Itabuna, BA',
    text: 'Fizemos toda a fachada da casa. O cuidado com os detalhes e o isolamento dos móveis foi impecável. Recomendo fortemente.',
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">O que dizem</h2>
            <p className="text-4xl md:text-5xl font-black text-black">DEPOIMENTOS</p>
          </div>
          <div className="flex gap-1 text-emerald-500 items-center">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <span className="text-black font-bold ml-2">4.9/5 no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="relative bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <Quote className="absolute top-8 right-8 text-gray-200" size={48} />
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-black">{t.name}</p>
                <p className="text-sm text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
