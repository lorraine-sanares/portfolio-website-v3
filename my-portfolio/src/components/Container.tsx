import React from 'react';
import type { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, className = '' }) => {
  return <div className={`max-w-4xl mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
