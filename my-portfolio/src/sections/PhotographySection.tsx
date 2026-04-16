import React from 'react';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PhotographySection: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        backgroundPosition: 'center 80%',
        ease: 'none',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      id="photography"
      className="py-20 bg-black text-white"
      ref={bgRef}
      style={{ backgroundImage: 'url(/path-to-placeholder.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 50%' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Photography / Visual Archive</h2>
        <p className="text-base">Immersive visual storytelling in dark mode.</p>
      </div>
    </section>
  );
};

export default PhotographySection;
