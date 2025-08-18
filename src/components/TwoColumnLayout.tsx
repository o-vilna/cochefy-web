import React from 'react';
import { Button } from './Button';
import { LoginForm } from './LoginForm';

interface TwoColumnLayoutProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  showLoginForm?: boolean;
  reversed?: boolean;
  className?: string;
}

export function TwoColumnLayout({
  title = "Bienvenido a Cochefy",
  description = "Inicia sesión en tu cuenta para acceder a todas las funciones de nuestra plataforma. Creamos soluciones innovadoras para tu negocio.",
  imageUrl = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Автомобіль",
  showLoginForm = true,
  reversed = false,
  className = ""
}: TwoColumnLayoutProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden mb-8 ${className}`}>
      {/* 2-колонковий макет: md:grid-cols-2 для екранів ≥768px, grid-cols-1 для менших */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
        
        <div className={`p-8 md:p-12 flex flex-col justify-center ${reversed ? 'md:col-start-2' : ''}`}>
          {showLoginForm ? (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {description}
                </p>
              </div>
              <LoginForm className="shadow-none p-0 bg-transparent max-w-none" />
            </div>
          ) : (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large">
                  Дізнатися більше
                </Button>
                <Button variant="secondary" size="large">
                  Контакти
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className={`relative h-64 md:h-full min-h-[400px] ${reversed ? 'md:col-start-1' : ''}`}>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
         {/* Gradient overlay for better readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
        </div>
      </div>
    </div>
  );
}
