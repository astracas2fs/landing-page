import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  onClick,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white text-sm rounded-full px-4 py-2 font-medium transition-all duration-300 hover:bg-opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;