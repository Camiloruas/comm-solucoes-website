import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_RATING } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">
              O que dizem
            </h2>
            <p className="text-4xl md:text-5xl font-black text-black dark:text-white">
              DEPOIMENTOS
            </p>
          </div>
          <div className="flex gap-1 text-emerald-500 items-center justify-center lg:justify-start">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <span className="text-black dark:text-white font-bold ml-2">
              {GOOGLE_RATING.score}/{GOOGLE_RATING.total} no Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center lg:items-start lg:text-left"
            >
              <Quote
                className="absolute top-8 right-8 text-gray-200 dark:text-gray-700"
                size={48}
              />
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-black dark:text-white">{t.name}</p>
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
