import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { labItems } from '../data/lab';

import { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsap';

const LabSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 20, opacity: 0, stagger: 0.1 });

  return (
    <section id="lab" className="py-20 bg-gray-50" ref={containerRef}>
      <Container>
        <SectionTitle>The Lab / Fridge Magnet</SectionTitle>
        <div className="flex flex-wrap gap-4">
          {labItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow p-4 w-40 h-40 overflow-hidden text-sm"
            >
              {item.content}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LabSection;
