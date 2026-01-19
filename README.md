# COMM SOLUÇÕES - Website Institucional

Site institucional moderno para empresa especializada em pintura e texturas decorativas de alto padrão.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](CHANGELOG.md)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Tests](https://img.shields.io/badge/tests-32%20passing-brightgreen.svg)]()

## Tecnologias

- **React 19.2** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 6.2** - Build tool & dev server
- **Tailwind CSS 4.1** - Utility-first styling
- **Lucide React** - Icon library
- **Vitest 4.0** - Testing framework
- **ESLint & Prettier** - Code quality

## Funcionalidades

- ✅ Dark mode com persistência de tema
- ✅ Design responsivo (mobile-first)
- ✅ Slider interativo antes/depois
- ✅ Error boundaries para tratamento de erros
- ✅ Lazy loading de imagens
- ✅ Performance otimizada (useCallback, useMemo)
- ✅ WhatsApp integration
- ✅ Instagram banner
- ✅ Sistema de constants centralizado
- ✅ Testes automatizados (32 testes)

## Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalação

```bash
# Clone o repositório
git clone https://github.com/camiloruas/comm-solucoes-website.git

# Entre no diretório
cd comm-solucoes-website

# Instale as dependências
npm install
```

## Uso

### Desenvolvimento

```bash
npm run dev
```

Abre em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

### Testes

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Linting & Formatting

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix

# Format all code
npm run format

# Type check
npm run type-check

# Run all validations
npm run validate
```

## Estrutura do Projeto

```
.
├── components/           # Componentes React
│   ├── __tests__/       # Testes de componentes
│   ├── BeforeAfterSlider.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InstagramBanner.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── ThemeContext.tsx
│   └── ThemeToggle.tsx
├── constants/           # Configurações centralizadas
│   ├── __tests__/      # Testes de constants
│   ├── contact.ts      # Info de contato & empresa
│   ├── images.ts       # Caminhos de imagens
│   ├── index.ts        # Export central
│   ├── navigation.ts   # Links de navegação
│   ├── services.ts     # Definições de serviços
│   ├── social.ts       # Links sociais
│   └── testimonials.ts # Depoimentos
├── App.tsx             # Componente principal
├── index.tsx           # Entry point
├── types.ts            # TypeScript types
├── vite.config.ts      # Vite configuration
├── vitest.config.ts    # Vitest configuration
├── tailwind.config.js  # Tailwind configuration
├── .eslintrc.json      # ESLint configuration
└── .prettierrc.json    # Prettier configuration
```

## Configuração

### Atualizando Informações de Contato

Edite `constants/contact.ts`:

```typescript
export const CONTACT_INFO = {
  whatsapp: {
    number: '5527996955663',
    formatted: '(27) 99695-5663',
    url: 'https://wa.me/5527996955663',
  },
  email: 'contato@commsolucoes.com.br',
  location: 'Itabuna, BA.',
  // ...
};
```

### Atualizando Serviços

Edite `constants/services.ts`:

```typescript
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pintura Residencial',
    description: 'Descrição do serviço...',
    icon: React.createElement(Home, { size: 32 }),
    color: 'bg-red-500',
  },
  // ...
];
```

### Atualizando Depoimentos

Edite `constants/testimonials.ts`:

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Nome do Cliente',
    location: 'Cidade, Estado',
    text: 'Depoimento do cliente...',
    rating: 5,
  },
  // ...
];
```

## Testes

O projeto possui 32 testes cobrindo:

- **Services**: Renderização de serviços
- **Testimonials**: Depoimentos e rating do Google
- **Navbar**: Links de navegação e botões
- **BeforeAfterSlider**: Funcionalidade do slider
- **ErrorBoundary**: Tratamento de erros
- **Constants**: Validação de dados

Cobertura de teste nos componentes críticos > 60%.

## Otimizações de Performance

- **useCallback**: Funções memoizadas no BeforeAfterSlider
- **useMemo**: Classes memoizadas no Navbar
- **Lazy Loading**: Todas as imagens carregam sob demanda
- **Code Splitting**: Componentes otimizados
- **Tailwind JIT**: CSS otimizado para produção

## Error Handling

ErrorBoundary captura erros e exibe:

- UI de fallback amigável
- Botão de recarregar página
- Detalhes do erro (somente em dev)

## Responsividade

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Menu mobile com toggle
- Imagens adaptativas

## SEO

- Meta tags otimizadas
- Títulos descritivos
- Alt text em todas as imagens
- Estrutura semântica HTML5

## Scripts Disponíveis

| Script               | Descrição                          |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Inicia servidor de desenvolvimento |
| `npm run build`      | Build para produção                |
| `npm run preview`    | Preview da build                   |
| `npm test`           | Roda testes em watch mode          |
| `npm run test:run`   | Roda testes uma vez                |
| `npm run test:ui`    | Roda testes com UI                 |
| `npm run lint`       | Verifica erros de linting          |
| `npm run lint:fix`   | Corrige erros de linting           |
| `npm run format`     | Formata código                     |
| `npm run type-check` | Verifica tipos TypeScript          |
| `npm run validate`   | Roda todas as validações           |

## Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico de versões.

## Contribuindo

1. Fork o projeto
2. Crie uma feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é proprietário da COMM SOLUÇÕES.

## Autores

- **COMM SOLUÇÕES** - Empresa de pintura e texturas

---

**Status do Projeto**: ✅ Production Ready

**Última Atualização**: 2026-01-18

**Versão**: 2.0.0
