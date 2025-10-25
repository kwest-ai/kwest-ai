"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'teal' | 'mixed' | 'light';
  noise?: boolean;
  subtle?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  children,
  variant = 'blue',
  noise = true,
  subtle = false,
}) => {
  const variantStyles: Record<string, string> = {
    purple: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white',
    blue: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white',
    teal: 'bg-gradient-to-br from-teal-800 via-teal-900 to-blue-900 text-white',
    mixed: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white',
    light: 'bg-gradient-to-br from-white via-indigo-50 to-blue-50 text-gray-900',
  };

  return (
    <div className={cn('relative overflow-hidden', variantStyles[variant], subtle && 'saturate-150', className)}>
      {/* Decorative gradient blobs (reduced intensity on light) */}
      {variant !== 'light' ? (
        <>
          <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-20" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply blur-3xl opacity-20" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -top-24 -left-10 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-indigo-200/60 via-sky-100 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-blue-200/50 via-indigo-100 to-transparent blur-3xl" />
        </>
      )}

      {/* CSS generated noise (no external asset) */}
      {noise && (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay',
            variant === 'light' && 'opacity-[0.12]'
          )}
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0 2px, transparent 2px 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.035) 0 3px, transparent 3px 6px)',
            maskImage:
              'radial-gradient(circle at 50% 40%, rgba(0,0,0,0.9), rgba(0,0,0,0.4) 60%, rgba(0,0,0,0))',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 40%, rgba(0,0,0,0.9), rgba(0,0,0,0.4) 60%, rgba(0,0,0,0))',
          }}
        />
      )}

      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
