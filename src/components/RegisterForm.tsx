import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from './FormField';

interface RegisterFormProps {
  onRegister?: (name: string, email: string, password: string) => void;
  className?: string;
}

export function RegisterForm({ onRegister, className = '' }: RegisterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    passwordMatch: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim() || !email.includes('@'),
      password: !password.trim() || password.length < 6,
      confirmPassword: !confirmPassword.trim(),
      passwordMatch: password !== confirmPassword
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // API виклик
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onRegister) {
        onRegister(name, email, password);
      } else {
        console.log('Registration attempt:', { name, email, password });
        alert('Registration successful!');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Sign Up
        </CardTitle>
        <CardDescription className="text-gray-600">
          Create a new account
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
          <FormField 
            label="Name" 
            error={errors.name ? "Name is required" : undefined}
          >
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormField>

          <FormField 
            label="Email" 
            error={errors.email ? "Please enter a valid email" : undefined}
          >
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormField>

          <FormField 
            label="Password" 
            error={errors.password ? "Password must be at least 6 characters" : undefined}
          >
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (min. 6 characters)"
            />
          </FormField>

          <FormField 
            label="Confirm Password" 
            error={
              errors.confirmPassword ? "Password confirmation cannot be empty" :
              errors.passwordMatch ? "Passwords do not match" : undefined
            }
          >
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat password"
            />
          </FormField>

          <Button
            type="submit"
            variant={isLoading ? 'secondary' : 'default'}
            disabled={isLoading}
            className="w-full py-3"
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-primary-500 hover:text-primary-600 font-medium">
              Sign In
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
