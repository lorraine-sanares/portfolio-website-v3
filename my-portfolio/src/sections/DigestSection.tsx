import React from 'react';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { digestItems } from '../data/digest';

import { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsap';

const DigestSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 20, opacity: 0, stagger: 0.2 });

  return (
    <section id="digest" className="py-20 bg-gray-50" ref={containerRef}>
      <Container>
        <SectionTitle>Monthly Digest / Recommendations</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {digestItems.map((item, idx) => (
            <div key={idx} className="border p-4">
              <span className="font-mono text-xs uppercase text-gray-500">{item.category}</span>
              <p className="mt-1 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DigestSection;
