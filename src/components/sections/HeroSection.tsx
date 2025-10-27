"use client"

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { GlassBrowser } from '@/components/ui/glass-browser';

const HeroSection = ({ onContactClick }: { onContactClick?: () => void }) => {
  const prefersReducedMotion = useReducedMotion();
  const containerAnimation: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } } };
  const itemAnimation: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
  const browserAnimation: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: 0.25 } } };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" role="presentation">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/40 via-transparent to-blue-100/40" />
        <motion.div
          className="absolute top-20 left-10 w-28 h-28 rounded-xl bg-gradient-to-br from-indigo-300 to-blue-200 shadow-lg"
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={prefersReducedMotion ? { opacity: 0.7 } : { opacity: 0.9, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-16 left-1/3 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 shadow-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={prefersReducedMotion ? { opacity: 0.7 } : { opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        />
        <motion.div
          className="absolute top-32 right-24 w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-200 to-purple-200 shadow-md"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={prefersReducedMotion ? { opacity: 0.7 } : { opacity: 0.75, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left max-w-xl lg:max-w-none"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemAnimation} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-5 py-1.5 bg-white/70 backdrop-blur-md text-indigo-700 rounded-full text-sm font-medium shadow-sm border border-indigo-100">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 animate-pulse" />
                AI-Powered QA Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mt-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-500"
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              Launch Agentic QA<br className="hidden sm:block" /> that actually works
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mt-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              KwestAI&apos;s vision-first agents simulate thousands of users in minutes — catching bugs before your customers encounter them.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start mt-10"
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              <button 
                onClick={onContactClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Talk to us
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            variants={browserAnimation}
            initial="hidden"
            animate="visible"
          >
            {/* Main QA Dashboard */}
            <div className="relative">
              <GlassBrowser intensity="high" colorTint="none" className="shadow-xl border border-indigo-100 bg-white/70 backdrop-blur-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-gray-800">E-Commerce Flow Test Suite</div>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      Running
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "Navigate to product page", time: "1.2s" },
                      { step: "Add item to cart", time: "0.8s" },
                      { step: "Proceed to checkout", time: "2.1s" },
                      { step: "Fill shipping details", time: "3.4s" },
                      { step: "Complete payment", time: "..." },
                      { step: "Verify order confirmation", time: "..." }
                    ].map((item, i) => {
                      const states = ['done','done','done','active','pending','pending'];
                      const state = states[i];
                      return (
                        <div key={item.step} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {state==='done' && <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>}
                            {state==='active' && <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] animate-spin">⟳</div>}
                            {state==='pending' && <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-[10px]">•</div>}
                            <div className={`text-sm ${state==='pending' ? 'text-gray-400' : 'text-gray-700'}`}>{item.step}</div>
                          </div>
                          <div className="text-xs text-gray-500 font-mono">{item.time}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-xs text-gray-500 pt-2 border-t border-gray-200 flex items-center justify-between">
                    <span>Chrome • Firefox • Safari • Edge</span>
                    <span className="text-indigo-600 font-medium">6/8 flows completed</span>
                  </div>
                </div>
              </GlassBrowser>
            </div>

            {/* Bug Detection Panel */}
            <motion.div
              className="absolute -right-6 top-8 w-48 bg-white/85 backdrop-blur-md rounded-xl p-3 shadow-lg border border-red-100"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-xs font-semibold text-red-600 mb-2 flex items-center gap-1">
                🐛 Bug Detected
              </div>
              <div className="text-xs text-gray-700 mb-2">Payment button unresponsive on mobile Safari</div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-gray-500">Severity: High</span>
                <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded">Critical</span>
              </div>
            </motion.div>

            {/* Performance Stats */}
            <motion.div
              className="absolute -left-6 top-1/3 w-44 bg-white/85 backdrop-blur-md rounded-xl p-3 shadow-lg border border-indigo-100"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-xs font-semibold text-gray-600 mb-2">Performance Metrics</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Load Time</span>
                  <span className="text-green-600 font-medium">1.2s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Accessibility</span>
                  <span className="text-green-600 font-medium">96/100</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">SEO Score</span>
                  <span className="text-yellow-600 font-medium">84/100</span>
                </div>
              </div>
            </motion.div>

            {/* AI Analysis Panel */}
            <motion.div
              className="absolute -right-8 bottom-6 w-52 bg-white/85 backdrop-blur-md rounded-xl p-3 shadow-lg border border-purple-100"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="text-xs font-semibold text-purple-600 mb-2 flex items-center gap-1">
                🤖 AI Insights
              </div>
              <div className="text-xs text-gray-700 mb-2">Detected 3 potential user experience issues in checkout flow</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1">
                  <div className="bg-purple-500 h-1 rounded-full w-3/4"></div>
                </div>
                <span className="text-[10px] text-gray-500">75% analyzed</span>
              </div>
            </motion.div>

            {/* Test Coverage Indicator */}
            <motion.div
              className="absolute -left-4 bottom-8 w-40 bg-white/85 backdrop-blur-md rounded-xl p-3 shadow-lg border border-blue-100"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-xs font-semibold text-blue-600 mb-1">Test Coverage</div>
              <div className="text-lg font-bold text-blue-600">94.2%</div>
              <div className="text-xs text-gray-500">Critical paths covered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
