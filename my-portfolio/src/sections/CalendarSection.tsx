import React, { useRef, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { calendar } from '../data/calendar';
import { useGsapReveal } from '../hooks/useGsap';
import { gsap } from 'gsap';

const CalendarSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 20, opacity: 0 });

  const [index, setIndex] = useState(calendar.length - 1);
  const today = calendar[index];

  const next = () => {
    const newIndex = (index + 1) % calendar.length;
    setIndex(newIndex);
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  };

  return (
    <section id="calendar" className="py-20 bg-white" ref={containerRef}>
      <Container>
        <SectionTitle>Daily Insight / Rip-Off Calendar</SectionTitle>
        {today && (
          <div
            ref={cardRef}
            onClick={next}
            className="border p-6 max-w-sm mx-auto text-center cursor-pointer select-none"
          >
            <p className="text-xs font-mono uppercase text-gray-500">
              {today.date}
            </p>
            <p className="mt-2 text-lg">{today.insight}</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CalendarSection;
