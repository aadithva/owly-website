import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover-lift hover:shadow-2xl' : '';
  const backgroundStyles = gradient
    ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-200'
    : 'bg-white border border-neutral-200 shadow-lg';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${backgroundStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
