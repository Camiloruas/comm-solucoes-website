import React from 'react';
import { Home, Building2, Paintbrush, Layers } from 'lucide-react';
import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pintura Residencial',
    description:
      'Acabamento impecável para casas e apartamentos. Proteção e beleza para cada cômodo.',
    icon: React.createElement(Home, { size: 32 }),
    color: 'bg-red-500',
  },
  {
    id: '2',
    title: 'Pintura Comercial',
    description: 'Agilidade e qualidade técnica para lojas, escritórios e galpões comerciais.',
    icon: React.createElement(Building2, { size: 32 }),
    color: 'bg-blue-500',
  },
  {
    id: '3',
    title: 'Texturas Decorativas',
    description: 'Efeitos de cimento queimado, marmorato e texturas personalizadas exclusivas.',
    icon: React.createElement(Paintbrush, { size: 32 }),
    color: 'bg-emerald-500',
  },
  {
    id: '4',
    title: 'Acabamentos Especiais',
    description: 'Tratamento de superfícies, verniz, resinas e correções técnicas de alto padrão.',
    icon: React.createElement(Layers, { size: 32 }),
    color: 'bg-amber-500',
  },
];
