import React from 'react';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  step?: number;
  icon?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  step, 
  icon,
  className = '' 
}) => {
  const getStepColor = (stepNumber: number) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-purple-100 text-purple-800', 
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-orange-100 text-orange-800',
      'bg-pink-100 text-pink-800',
      'bg-red-100 text-red-800',
      'bg-teal-100 text-teal-800',
      'bg-indigo-100 text-indigo-800'
    ];
    return colors[(stepNumber - 1) % colors.length];
  };

  return (
    <section className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        {step && (
          <span className={`${getStepColor(step)} rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3`}>
            {step}
          </span>
        )}
        {icon && !step && (
          <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
            {icon}
          </span>
        )}
        {title}
      </h2>
      {children}
    </section>
  );
};