import React from 'react';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

import { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsap';

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 20, opacity: 0, stagger: 0.2 });

  return (
    <section id="projects" className="py-20 bg-white" ref={containerRef}>
      <Container>
        <SectionTitle>Featured Work</SectionTitle>
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.title} className="border-b pb-6">
              <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-700">{project.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                {project.techStack.join(', ')}
              </p>
              {project.link && (
                <a href={project.link} className="mt-2 inline-block text-blue-600 underline">
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
