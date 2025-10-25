"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  className?: string;
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorTint?: 'none' | 'blue' | 'purple' | 'teal';
}

export const GlassPanel = ({
  className,
  children,
  intensity = 'medium',
  colorTint = 'none',
}: GlassPanelProps) => {
  const intensityMap = {
    low: 'bg-opacity-20 backdrop-blur-sm',
    medium: 'bg-opacity-25 backdrop-blur-md',
    high: 'bg-opacity-30 backdrop-blur-lg',
  };

  const colorMap = {
    none: 'bg-white',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    teal: 'bg-teal-50',
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-white/20 shadow-lg transition-all duration-300 will-change-transform relative',
        'hover:shadow-xl hover:border-white/30',
        'motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.995]',
        'before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:opacity-0 hover:before:opacity-100 before:transition-opacity before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]',
        intensityMap[intensity],
        colorMap[colorTint],
        className
      )}
    >
      {children}
    </div>
  );
};

export const GlassBrowser = ({
  className,
  children,
  intensity = 'medium',
  colorTint = 'none',
}: GlassPanelProps) => {
  const intensityMap = {
    low: 'bg-opacity-20 backdrop-blur-sm',
    medium: 'bg-opacity-25 backdrop-blur-md',
    high: 'bg-opacity-30 backdrop-blur-lg',
  };

  const colorMap = {
    none: 'bg-white',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    teal: 'bg-teal-50',
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-white/20 shadow-xl overflow-hidden transition-all duration-300 will-change-transform relative',
        'hover:shadow-2xl hover:border-white/30',
        'motion-safe:hover:scale-[1.015] motion-safe:active:scale-[0.995]',
        'before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:opacity-0 hover:before:opacity-100 before:transition-opacity before:bg-[linear-gradient(120deg,rgba(255,255,255,0.25),rgba(255,255,255,0)_40%)]',
        intensityMap[intensity],
        colorMap[colorTint],
        className
      )}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center px-4 py-2 bg-black/5 border-b border-white/10">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 px-4 py-1 bg-black/10 rounded-full text-xs text-center text-gray-500">
          https://www.example.com
        </div>
      </div>
      
      {/* Browser content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};
