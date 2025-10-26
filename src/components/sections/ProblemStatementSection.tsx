"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ProblemStatementSection = () => {
  return (
    <section className="min-h-screen flex items-center relative py-24 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute -top-10 -left-10 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-indigo-100 via-sky-100 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-violet-100 via-indigo-50 to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-soft glass-border-gradient rounded-3xl p-10 md:p-14 shadow-[0_8px_28px_-6px_rgba(30,58,138,0.15),0_2px_8px_-2px_rgba(30,64,175,0.12)] relative overflow-hidden">
          <div className="noise-layer" />
          <div className="glass-grid-overlay" />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* "QA is broken" section with broken test mockup */}
          <motion.div 
            className="flex-1 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don&apos;t make your users QA your site for you
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Manual testing is slow, flaky tests break constantly, and bugs slip through to production where they cost real revenue.
            </p>

            {/* Broken Test Interface Mockup */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-red-200 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Legacy Test Suite</span>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  Failed
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-red-600">
                  ❌ Login button selector changed
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  ❌ Checkout form timeout
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  ⚠️  Payment test flaky (3rd retry)
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  ⏸️ Search test skipped
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500 border-t border-gray-200 pt-2">
                Last run: 2 hours ago • 67% tests failing
              </div>
            </div>
          </motion.div>
          
          {/* "Let's fix it" section with AI agent mockup */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-600">
              Let KwestAI be your QA team.
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Vision-first AI agents that understand your app like humans do. No brittle selectors, no maintenance overhead, no missed regressions.
            </p>
            
            {/* AI Agent Interface Mockup */}
            <div className="bg-white/70 backdrop-blur-md rounded-lg border border-green-200 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">KwestAI Agent Suite</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Running
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  ✅ User journey: Login → Purchase
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  ✅ Form validation checks
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  ✅ Payment flow verification
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  🤖 AI adapting to UI changes...
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500 border-t border-gray-200 pt-2">
                Last run: 5 mins ago • 100% success rate • Self-healing
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Zero maintenance
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                🧠 AI-powered
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
