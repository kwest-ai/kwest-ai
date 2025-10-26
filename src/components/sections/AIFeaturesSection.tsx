"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AIFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Smart tools for smarter workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Work smarter in every way.
          </p>
        </motion.div>
        
        {/* AI Brain Feature */}
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left content */}
            <motion.div 
              className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-block">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium text-sm">
                  KwestAI Brain
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                One AI for all your work
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Instantly power up company-wide AI that connects every aspect of your work, across all your apps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium px-6 py-2 rounded-full transition-colors"
                >
                  Try for free
                </Link>
                <Link 
                  href="/brain" 
                  className="text-blue-600 font-medium flex items-center justify-center sm:justify-start gap-1"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Right content - AI image */}
            <motion.div 
              className="lg:w-1/2 bg-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] w-full h-full relative flex items-center justify-center">
                {/* Placeholder for AI brain image - replace with actual image */}
                <p className="text-gray-400">AI Brain Image</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Connected Brain Feature */}
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Left content */}
            <motion.div 
              className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-block">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full font-medium text-sm">
                  Connected Brain
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Search every app, from one place
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Enterprise search plus with the power of Ask AI on all your apps. Instantly pull answers from Google Drive, GitHub, Salesforce, Figma, Dropbox, Confluence, Box, and more!
              </p>
              <Link 
                href="/connected-brain" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-center font-medium px-6 py-2 rounded-full transition-colors inline-block"
              >
                Try Connected Brain
              </Link>
            </motion.div>
            
            {/* Right content - Connected Brain image */}
            <motion.div 
              className="lg:w-1/2 bg-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] w-full h-full relative flex items-center justify-center">
                {/* Placeholder for Connected Brain image - replace with actual image */}
                <p className="text-gray-400">Connected Brain Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
