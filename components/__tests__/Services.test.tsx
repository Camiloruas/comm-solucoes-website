import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../Services';
import { SERVICES } from '../../constants';

describe('Services Component', () => {
  it('renders the services section', () => {
    render(<Services />);
    expect(screen.getByText('SERVIÇOS DE ELITE')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<Services />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(SERVICES.length);
  });

  it('renders service titles correctly', () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    });
  });

  it('renders service descriptions', () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('has correct number of service cards', () => {
    render(<Services />);
    const serviceCards = screen.getAllByRole('heading', { level: 3 });
    expect(serviceCards).toHaveLength(4);
  });
});
