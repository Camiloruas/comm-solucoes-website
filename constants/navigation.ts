export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Antes & Depois', href: '#portfolio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
];

export const FOOTER_LINKS: NavLink[] = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Sobre Nós', href: '#sobre' },
];
