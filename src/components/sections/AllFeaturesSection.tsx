"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuresList = [
  'Dependencies', 'Connected Search', 'Tasks', 'Mind Maps', 
  'Wikis', 'AI Notetaker', 'Calendar', 'Proofing', 
  'Portfolios', 'Templates', 'Reminders', 'Reporting', 
  'Goals', 'Projects', 'Chat', 'Dashboards'
];

const AllFeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Every feature your team needs to complete work faster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            100+ features to take productivity to the next level.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mb-12">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * (index % 8) }}
              className="group"
            >
              <Link 
                href={`/features/${feature.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="text-sm">{feature.charAt(0)}</span>
                </div>
                <span className="font-medium">{feature}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all features button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/features" 
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors"
          >
            Discover all features
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AllFeaturesSection;
