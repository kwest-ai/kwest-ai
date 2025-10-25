"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassBrowserProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorTint?: 'blue' | 'purple' | 'indigo' | 'none';
  className?: string;
}

export function GlassBrowser({ 
  children, 
  intensity = 'medium', 
  colorTint = 'indigo', 
  className 
}: GlassBrowserProps) {
  const intensityClasses = {
    low: 'bg-white/50 backdrop-blur-sm',
    medium: 'bg-white/60 backdrop-blur-md', 
    high: 'bg-white/70 backdrop-blur-lg'
  };

  const tintClasses = {
    blue: 'border-blue-200/50',
    purple: 'border-purple-200/50', 
    indigo: 'border-indigo-200/50',
    none: 'border-gray-200/50'
  };

  return (
    <div className={cn(
      "rounded-lg border shadow-lg overflow-hidden",
      intensityClasses[intensity],
      tintClasses[colorTint],
      className
    )}>
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/30 border-b border-white/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/40 rounded px-3 py-1 text-xs text-gray-600 font-mono">
            https://app.kwestai.com/dashboard
          </div>
        </div>
        <div className="w-4 h-4 bg-gray-300/50 rounded"></div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}