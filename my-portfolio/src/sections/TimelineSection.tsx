import React from 'react';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { timeline } from '../data/timeline';

import { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsap';

const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 20, opacity: 0, stagger: 0.1 });

  return (
    <section id="timeline" className="py-20 bg-gray-50" ref={containerRef}>
      <Container>
        <SectionTitle>Career / Timeline</SectionTitle>
        <ul className="space-y-4">
          {timeline.map((item) => (
            <li key={item.year} className="flex">
              <span className="w-16 font-mono text-sm">{item.year}</span>
              <div>
                <p className="font-semibold">{item.title}</p>
                {item.subtitle && <p className="text-sm text-gray-600">{item.subtitle}</p>}
                {item.description && <p className="text-sm text-gray-700">{item.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TimelineSection;
