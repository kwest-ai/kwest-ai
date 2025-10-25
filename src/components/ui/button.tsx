"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg',
    secondary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
    ghost: 'bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 border border-white/30 text-white',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3',
  };

  const Element = href ? 'a' : 'button';
  
  return (
    <Element
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Button;
