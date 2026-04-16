import React from 'react';
import Container from '../components/Container';

import { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsap';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 30, opacity: 0, duration: 0.8 });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <Container className="text-center">
        <span className="block text-xs font-mono uppercase mb-2">
          currently: building silently
        </span>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg">A builder, thinker, and collector of ideas.</p>
      </Container>
    </section>
  );
};

export default HeroSection;
