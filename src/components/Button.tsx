import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: ButtonProps) {
  
  const baseClasses = "font-medium rounded-lg transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg",
    secondary: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white shadow-md hover:shadow-lg",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
  };
  
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4",
    large: "py-3 px-6 text-lg"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || variant === 'disabled'}
    >
      {children}
    </button>
  );
}
