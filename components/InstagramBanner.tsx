import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramBanner: React.FC = () => {
  return (
    <a
      href="https://www.instagram.com/commsolucoes/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-8 z-40 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:shadow-purple-500/50 bottom-24 md:bottom-8"
      aria-label="Siga-nos no Instagram"
    >
      <Instagram size={32} />
    </a>
  );
};

export default InstagramBanner;

