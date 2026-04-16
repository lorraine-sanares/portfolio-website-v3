import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, id }) => (
  <h2 id={id} className="text-3xl font-serif mb-8">
    {children}
  </h2>
);

export default SectionTitle;
