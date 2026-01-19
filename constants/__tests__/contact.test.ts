import { describe, it, expect } from 'vitest';
import { CONTACT_INFO } from '../contact';

describe('CONTACT_INFO Constants', () => {
  it('has valid WhatsApp number format', () => {
    expect(CONTACT_INFO.whatsapp.number).toMatch(/^\d{13}$/);
    expect(CONTACT_INFO.whatsapp.number).toBe('5527996955663');
  });

  it('has formatted WhatsApp number', () => {
    expect(CONTACT_INFO.whatsapp.formatted).toBe('(27) 99695-5663');
  });

  it('has valid WhatsApp URL', () => {
    expect(CONTACT_INFO.whatsapp.url).toBe('https://wa.me/5527996955663');
    expect(CONTACT_INFO.whatsapp.url).toContain(CONTACT_INFO.whatsapp.number);
  });

  it('has valid email address', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(CONTACT_INFO.email).toMatch(emailRegex);
    expect(CONTACT_INFO.email).toBe('contato@commsolucoes.com.br');
  });

  it('has location information', () => {
    expect(CONTACT_INFO.location).toBe('Itabuna, BA.');
    expect(CONTACT_INFO.location).toBeTruthy();
  });

  it('has company information', () => {
    expect(CONTACT_INFO.company.name).toBe('COMM SOLUÇÕES');
    expect(CONTACT_INFO.company.foundedYear).toBe(2015);
    expect(CONTACT_INFO.company.tagline).toBe('Excelência em Acabamento');
    expect(CONTACT_INFO.company.description).toBeTruthy();
    expect(CONTACT_INFO.company.description.length).toBeGreaterThan(50);
  });

  it('has consistent contact information', () => {
    // Ensure WhatsApp number in URL matches the number field
    expect(CONTACT_INFO.whatsapp.url).toContain(CONTACT_INFO.whatsapp.number);
  });
});
