import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';
import { TESTIMONIALS, GOOGLE_RATING } from '../../constants';

describe('Testimonials Component', () => {
  it('renders the testimonials section', () => {
    render(<Testimonials />);
    expect(screen.getByText('DEPOIMENTOS')).toBeInTheDocument();
  });

  it('renders all testimonials', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    });
  });

  it('displays Google rating correctly', () => {
    render(<Testimonials />);
    const ratingText = `${GOOGLE_RATING.score}/${GOOGLE_RATING.total} no Google`;
    expect(screen.getByText(ratingText)).toBeInTheDocument();
  });

  it('has correct number of testimonial cards', () => {
    render(<Testimonials />);
    const testimonialCards = TESTIMONIALS.map((t) => screen.getByText(t.name));
    expect(testimonialCards).toHaveLength(3);
  });

  it('renders testimonial texts', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((testimonial) => {
      // Use flexible regex match to handle spacing and quotes
      const normalizedText = testimonial.text.replace(/\s+/g, '\\s+');
      const regex = new RegExp(normalizedText);
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });
});
