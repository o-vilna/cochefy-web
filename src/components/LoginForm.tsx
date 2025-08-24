import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from './FormField';

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
    <Card className={`bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto ${className}`}>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-6">
          <FormField
            label="Email"
            error={errors.email ? "Email field cannot be empty" : undefined}
          >
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="your@email.com"
            />
          </FormField>
          <FormField
            label="Password"
            error={errors.password ? "Password field cannot be empty" : undefined}
          >
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </FormField>
          <Button
            type="submit"
            variant={isLoading ? 'secondary' : 'default'}
            disabled={isLoading}
            className="w-full py-3"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
