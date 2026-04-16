import React from 'react';
import HeroSection from './sections/HeroSection';
import LabSection from './sections/LabSection';
import ProjectsSection from './sections/ProjectsSection';
import TimelineSection from './sections/TimelineSection';
import CalendarSection from './sections/CalendarSection';
import DigestSection from './sections/DigestSection';
import PhotographySection from './sections/PhotographySection';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-black bg-white antialiased">
      <HeroSection />
      <LabSection />
      <ProjectsSection />
      <TimelineSection />
      <CalendarSection />
      <DigestSection />
      <PhotographySection />
      <Footer />
    </div>
  );
};

export default App;
