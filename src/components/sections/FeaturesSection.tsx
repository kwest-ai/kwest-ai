"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuresData = [
  {
    id: 'campaign',
    title: 'Launch any campaign',
    description: 'From idea to execution, effortlessly plan, organize, and track campaigns that deliver results.',
    imagePlaceholder: 'campaign-image'
  },
  {
    id: 'issues',
    title: 'Triage product issues',
    description: 'Identify, prioritize, and resolve product issues efficiently with powerful tracking tools.',
    imagePlaceholder: 'issues-image'
  },
  {
    id: 'operations',
    title: 'Maintain flawless operations',
    description: 'Keep your business running smoothly with comprehensive operational management tools.',
    imagePlaceholder: 'operations-image'
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0].id);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Do your most important work, faster
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From campaigns to operations and more, this is just the tip of the iceberg.
          </motion.p>
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/use-cases" className="text-blue-600 font-medium flex items-center justify-center gap-1">
              See all use cases
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Feature selector */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {featuresData.map((feature) => (
                <div 
                  key={feature.id}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === feature.id ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Feature preview */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Feature image placeholder - replace with actual images */}
              <div className="aspect-video w-full bg-gray-100 relative">
                {featuresData.map((feature) => (
                  <div 
                    key={feature.id}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeFeature === feature.id ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <p className="text-gray-400">{feature.imagePlaceholder}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
