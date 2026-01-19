import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BeforeAfterSlider from '../BeforeAfterSlider';

describe('BeforeAfterSlider Component', () => {
  const beforeImg = '/test-before.jpg';
  const afterImg = '/test-after.jpg';

  it('renders both before and after images', () => {
    render(<BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  it('renders default labels', () => {
    render(<BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} />);
    // Labels have opacity-0 by default (shown on hover), so check if they exist in the DOM
    expect(screen.getByText('Antes')).toBeInTheDocument();
    expect(screen.getByText('Depois')).toBeInTheDocument();
  });

  it('renders custom labels when provided', () => {
    render(
      <BeforeAfterSlider
        beforeImg={beforeImg}
        afterImg={afterImg}
        beforeLabel="Before"
        afterLabel="After"
      />
    );
    expect(screen.getByText('Before')).toBeInTheDocument();
    expect(screen.getByText('After')).toBeInTheDocument();
  });

  it('has correct image sources', () => {
    render(<BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} />);
    const images = screen.getAllByRole('img');
    // Check that both images have the correct sources (order may vary)
    const srcs = images.map((img) => img.getAttribute('src'));
    expect(srcs).toContain(beforeImg);
    expect(srcs).toContain(afterImg);
  });

  it('has accessible alt text', () => {
    render(<BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} />);
    expect(screen.getByAltText('Before')).toBeInTheDocument();
    expect(screen.getByAltText('After')).toBeInTheDocument();
  });
});
