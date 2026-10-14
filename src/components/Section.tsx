import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 lg:py-32 ${
        dark ? 'bg-[#1C2529] text-[#FFFFFF]' : 'bg-[#F8F7F4]'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
