"use client";

import React, { useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, suffix = '', duration = 1400, description }) => {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) { setDisplay(value); return; }
    let start: number | null = null;
    const animate = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, duration, value, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={prefersReducedMotion ? undefined : { duration: 0.6 }}
      className="relative p-6 rounded-2xl bg-white/70 backdrop-blur border border-indigo-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600">
        {display.toLocaleString()}
        {progressEmoji(label, value, display)}
        <span className="text-indigo-500 text-2xl align-top ml-1">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
      {description && <div className="mt-2 text-xs text-gray-500 leading-relaxed">{description}</div>}
    </motion.div>
  );
};

function progressEmoji(label: string, target: number, current: number) {
  if (current < target) return '';
  if (/bug/i.test(label)) return ' 🐞';
  if (/time/i.test(label)) return ' ⏱';
  if (/tests/i.test(label)) return ' ✅';
  return ''; 
}

const StatsSection = () => {
  const stats: StatCardProps[] = [
    { label: 'Restaurants Powered', value: 2400, suffix: '+', description: 'From fast casual to fine dining, thousands of locations trust Kwest AI.' },
    { label: 'Guest Profiles Analyzed', value: 18500000, suffix: '+', description: 'AI-powered insights across millions of unique restaurant guests.' },
    { label: 'Average Revenue Increase', value: 23, suffix: '%', description: 'Data-driven decisions unlock hidden revenue opportunities.' },
    { label: 'Marketing ROI Improvement', value: 3.2, suffix: 'X', description: 'Turn marketing spend into measurable, trackable returns.' },
  ];

  return (
  <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-white to-indigo-50/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-to-b from-indigo-100/40 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Powering growth for leading restaurants</h2>
          <p className="mt-4 text-gray-600 text-lg">From single locations to multi-unit chains — measurable results from day one.</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Enhanced QA Dashboard Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          
          {/* Test Execution Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Live Test Execution</h3>
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Active
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50/80 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">E-commerce Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Chrome, Firefox</span>
                  <span className="text-xs font-mono text-green-600">2.3s</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50/80 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-spin border-2 border-blue-200 border-t-blue-500"></div>
                  <span className="text-sm font-medium">User Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Safari, Edge</span>
                  <span className="text-xs font-mono text-blue-600">Running...</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50/80 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">API Integration Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Multi-env</span>
                  <span className="text-xs font-mono text-purple-600">1.8s</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Total: 47 tests completed today</span>
              <span className="text-green-600 font-medium">Success rate: 98.9%</span>
            </div>
          </motion.div>

          {/* Bug Detection Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl border border-red-100 p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Bug Detection Analytics</h3>
              <div className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                3 Critical Issues
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-red-50/80 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-red-800">Payment Gateway Timeout</span>
                  <span className="text-xs text-red-600">Critical</span>
                </div>
                <p className="text-xs text-red-700">Mobile Safari: 5s timeout on checkout submit</p>
                <div className="text-xs text-gray-500 mt-1">Detected: 12 mins ago</div>
              </div>

              <div className="p-3 bg-yellow-50/80 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-800">Form Validation Issue</span>
                  <span className="text-xs text-yellow-600">Medium</span>
                </div>
                <p className="text-xs text-yellow-700">Email field accepts invalid formats</p>
                <div className="text-xs text-gray-500 mt-1">Detected: 1 hour ago</div>
              </div>

              <div className="p-3 bg-blue-50/80 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-blue-800">Performance Regression</span>
                  <span className="text-xs text-blue-600">Low</span>
                </div>
                <p className="text-xs text-blue-700">Search page load time increased by 23%</p>
                <div className="text-xs text-gray-500 mt-1">Detected: 2 hours ago</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Total: 47 issues resolved this week</span>
              <span className="text-indigo-600 font-medium">🤖 AI Auto-healing: 89%</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
