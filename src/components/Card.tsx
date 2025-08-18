import React from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'disabled';
  badge?: string;
  badgeVariant?: 'pro' | 'free';
  icon?: string;
  className?: string;
}

export function Card({ 
  title, 
  description, 
  buttonText, 
  buttonVariant = 'primary',
  badge,
  badgeVariant = 'pro',
  icon = '📱',
  className = ''
}: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${className}`}>
      <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <span className="text-white text-4xl">{icon}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
