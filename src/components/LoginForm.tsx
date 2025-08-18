import React, { useState } from 'react';
import { Button } from './Button';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
  className?: string;
}

export function LoginForm({ onLogin, className = '' }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      email: !email.trim(),
      password: !password.trim()
    };
    
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Симуляція API виклику
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onLogin) {
        onLogin(email, password);
      } else {
        console.log('Login attempt:', { email, password });
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email && e.target.value.trim()) {
      setErrors(prev => ({ ...prev, email: false }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password && e.target.value.trim()) {
      setErrors(prev => ({ ...prev, password: false }));
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Увійти</h2>
        <p className="text-gray-600">Введіть свої дані для входу в систему</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              Email поле не може бути пустим
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.password
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            }`}
            placeholder="Введіть пароль"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              Password поле не може бути пустим
            </p>
          )}
        </div>

        <Button
          variant={isLoading ? 'disabled' : 'primary'}
          disabled={isLoading}
          className="w-full py-3"
        >
          {isLoading ? 'Завантаження...' : 'Увійти'}
        </Button>
      </form>
    </div>
  );
}
