"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, Users, Zap } from 'lucide-react';

const differentiators = [
  {
    icon: Eye,
    title: "Test actual user flows, not IDs in code.",
    description: "KwestAI Agents navigate the browser just like human users do. Our Agents are not tied to CSS and XPaths but the actual elements on your page.",
    metric: "10X",
    metricDesc: "the one-person QA team, to run thousands of regression tests every single day",
    accent: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Schedule your next release, with ease.",
    description: "Using KwestAI's scheduler, with a few clicks, setup all of your tests to run with your release schedules. We take it from there!",
    metric: "$300k+",
    metricDesc: "Saved from a broken pricing experiment – bug caught before it cost revenue.",
    accent: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Reporting made ridiculously simple.",
    description: "One-click bug reports and notifications so your team never misses a bug. View video replays of the test runs and an in-depth analysis of each step—making debugging a breeze.",
    features: ["Video Playback", "Console & Network Logs", "Sharable Links & One-Click Bug Reports"],
    accent: "from-violet-500 to-purple-500"
  }
];

const AdvantageSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center relative py-24 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-100 via-blue-50 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 -right-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-violet-100 via-purple-50 to-transparent blur-3xl opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover the agentic QA advantage
          </motion.h2>
        </div>

        <div className="space-y-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`glass-soft glass-border-gradient rounded-3xl p-8 md:p-12 relative overflow-hidden ${
                  isEven ? 'lg:grid-cols-[1.2fr,0.8fr]' : 'lg:grid-cols-[0.8fr,1.2fr]'
                } grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className="noise-layer opacity-30" />
                <div className="glass-grid-overlay opacity-20" />
                
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white items-center justify-center shadow-lg mb-6`}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {item.features && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Key Features</h4>
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className={`${!isEven ? 'lg:order-1' : ''} flex flex-col items-center text-center`}>
                  {/* Vision-based Testing Interface (First Card) */}
                  {index === 0 && (
                    <div className="glass-medium rounded-2xl p-6 border-2 border-white/60 shadow-xl w-full max-w-md">
                      <div className="text-sm font-semibold text-indigo-600 mb-3 text-left">Vision-First Agent View</div>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-green-400 text-xs font-mono">AI Agent detecting elements...</span>
                        </div>
                        <div className="space-y-1 text-xs font-mono text-gray-300">
                          <div className="text-blue-400">🔍 Found: &quot;Add to Cart&quot; button</div>
                          <div className="text-green-400">✓ Element stable & clickable</div>
                          <div className="text-purple-400">🎯 No selectors needed</div>
                        </div>
                      </div>
                      <div className={`text-3xl font-black bg-gradient-to-br ${item.accent} bg-clip-text text-transparent mb-2`}>
                        {item.metric}
                      </div>
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {item.metricDesc}
                      </div>
                    </div>
                  )}

                  {/* Scheduling Interface (Second Card) */}
                  {index === 1 && (
                    <div className="glass-medium rounded-2xl p-6 border-2 border-white/60 shadow-xl w-full max-w-md">
                      <div className="text-sm font-semibold text-blue-600 mb-3 text-left">Automated Test Schedule</div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between p-2 bg-blue-50/80 rounded text-xs">
                          <span className="font-medium">🚀 Pre-deployment</span>
                          <span className="text-blue-600">Daily 6PM</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-green-50/80 rounded text-xs">
                          <span className="font-medium">🔄 Regression Suite</span>
                          <span className="text-green-600">Every PR</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-purple-50/80 rounded text-xs">
                          <span className="font-medium">🎯 Critical Paths</span>
                          <span className="text-purple-600">Hourly</span>
                        </div>
                      </div>
                      <div className={`text-3xl font-black bg-gradient-to-br ${item.accent} bg-clip-text text-transparent mb-2`}>
                        {item.metric}
                      </div>
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {item.metricDesc}
                      </div>
                    </div>
                  )}

                  {/* Reporting Interface (Third Card) */}
                  {index === 2 && (
                    <div className="glass-medium rounded-2xl p-6 w-full max-w-md border-2 border-white/60 shadow-xl">
                      <div className="text-sm font-semibold text-purple-600 mb-3 text-left">Bug Report Dashboard</div>
                      <div className="bg-white/80 rounded-lg p-3 mb-4 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded bg-red-500"></div>
                          <span className="text-sm font-medium">Login Flow Failure</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">Chrome 119 • Mobile viewport</div>
                        <div className="flex gap-1 mb-2">
                          <div className="w-6 h-4 bg-gray-200 rounded text-[8px] flex items-center justify-center">🎥</div>
                          <div className="w-6 h-4 bg-gray-200 rounded text-[8px] flex items-center justify-center">📊</div>
                          <div className="w-6 h-4 bg-gray-200 rounded text-[8px] flex items-center justify-center">🔗</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-left">
                        {item.features?.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-purple-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        <span className="font-semibold text-purple-600">Debug Analysis:</span> 94% accuracy
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;