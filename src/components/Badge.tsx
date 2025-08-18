import React from 'react';

interface BadgeProps {
  variant?: 'pro' | 'free';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'pro', children, className = '' }: BadgeProps) {
  const variantClasses = {
    pro: "bg-green-100 text-green-800 border-green-200",
    free: "bg-gray-100 text-gray-800 border-gray-200"
  };

  const baseClasses = "text-sm font-medium px-3 py-1 rounded-full border";
  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
}
