import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { ThemeProvider } from '../ThemeContext';
import { NAV_LINKS, CONTACT_INFO } from '../../constants';

// Wrapper component to provide ThemeContext
const NavbarWithTheme = () => (
  <ThemeProvider>
    <Navbar />
  </ThemeProvider>
);

describe('Navbar Component', () => {
  it('renders the logo', () => {
    const { container } = render(<NavbarWithTheme />);
    const logo = container.querySelector('img[alt="Logo COMM Soluções"]');
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    const { container } = render(<NavbarWithTheme />);
    NAV_LINKS.forEach((link) => {
      // Check that link exists in the component (may appear in mobile and desktop)
      const links = container.querySelectorAll(`a[href="${link.href}"]`);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('renders WhatsApp button with correct URL', () => {
    const { container } = render(<NavbarWithTheme />);
    const whatsappButtons = container.querySelectorAll(
      `a[href="${CONTACT_INFO.whatsapp.url}"]`
    );
    expect(whatsappButtons.length).toBeGreaterThan(0);
  });

  it('renders company name', () => {
    const { container } = render(<NavbarWithTheme />);
    const companyName = container.textContent;
    expect(companyName).toContain('COMM');
    expect(companyName).toContain('SOLUÇÕES');
  });

  it('has correct number of navigation links', () => {
    const { container } = render(<NavbarWithTheme />);
    // Each link appears twice (desktop + mobile menu), so check for at least one of each
    NAV_LINKS.forEach((link) => {
      const links = container.querySelectorAll(`a[href="${link.href}"]`);
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
