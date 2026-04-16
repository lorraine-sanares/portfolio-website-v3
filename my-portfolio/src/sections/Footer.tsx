import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} [Your Name].</p>
      <p className="mt-2">
        <a href="mailto:you@example.com" className="underline">you@example.com</a>
      </p>
    </footer>
  );
};

export default Footer;
