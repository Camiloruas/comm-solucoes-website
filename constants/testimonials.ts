import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
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
    text: 'Fizemos toda a fachada  e interior da casa. O cuidado com os detalhes e o isolamento dos móveis foi impecável. Recomendo fortemente.',
    rating: 5,
  }
];

export const GOOGLE_RATING = {
  score: 4.9,
  total: 5,
} as const;
