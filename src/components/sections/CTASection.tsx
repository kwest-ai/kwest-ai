"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { GlassBrowser } from '@/components/ui/glass-browser';

const CTASection = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
  <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transform your QA workflow today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Automate test creation, eliminate flaky tests, and ship with confidence—all powered by AI that understands your codebase.
            </p>
            <button 
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium px-8 py-3 rounded-full transition-colors inline-block"
            >
              Talk to us
            </button>
          </motion.div>
          
          {/* Right content - App screenshot */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassBrowser 
              intensity="medium"
              colorTint="indigo"
            >
              <div className="p-6 space-y-4">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Test Suite Overview</h3>
                    <p className="text-sm text-gray-600">E-commerce Platform • Last run: 2 mins ago</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      ✓ 847 Passed
                    </div>
                    <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      ✗ 3 Failed
                    </div>
                  </div>
                </div>

                {/* AI Insights Panel */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✦</span>
                    </div>
                    <h4 className="font-semibold text-blue-900">AI Insights</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-blue-800">• Auto-healed 12 flaky assertions in checkout flow</div>
                    <div className="text-sm text-blue-800">• Detected performance regression in product search</div>
                    <div className="text-sm text-blue-800">• Generated 5 new edge case tests for payment validation</div>
                  </div>
                </div>

                {/* Test Results Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">98.2%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">4.2s</div>
                    <div className="text-sm text-gray-600">Avg Runtime</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600">47</div>
                    <div className="text-sm text-gray-600">Tests Generated</div>
                  </div>
                </div>

                {/* Recent Test Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Login flow tests completed successfully</span>
                      <span className="text-xs text-gray-500 ml-auto">2m ago</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">AI generated new test for mobile checkout</span>
                      <span className="text-xs text-gray-500 ml-auto">5m ago</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Auto-healing applied to search filters</span>
                      <span className="text-xs text-gray-500 ml-auto">8m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassBrowser>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 7 17l-5-5"/>
            </svg>
            <span>24/7 support</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 7 17l-5-5"/>
            </svg>
            <span>Weekly updates</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 7 17l-5-5"/>
            </svg>
            <span>Secure and compliant</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 7 17l-5-5"/>
            </svg>
            <span>99.9% uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
