import React from 'react';

type CircleButtonProps = {
  children: React.ReactNode;
  position: 'top-left' | 'top-right' | 'bottom-left';
  onClick?: () => void;
  className?: string;
};

const CircleButton: React.FC<CircleButtonProps> = ({ 
  children, 
  position, 
  onClick,
  className = ''
}) => {
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  return (
    <button
      onClick={onClick}
      className={`absolute w-10 h-10 rounded-full flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 ${positionClasses[position]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CircleButton;