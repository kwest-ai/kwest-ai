"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle, Globe, FileText, Sparkles, Bot } from 'lucide-react';

const useCases = [
  {
    icon: CheckCircle,
    title: "Smart Assertions",
    description: "Describe Assertions just like you would to a human tester.",
    accent: "from-emerald-500 to-green-500"
  },
  {
    icon: Bot,
    title: "Testing End-to-End Workflows",
    description: "Emulate real end-to-end multi-step and multi-tab workflows.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    icon: FileText,
    title: "Form Filling",
    description: "Test Dynamic Forms with the KwestAI Agent.",
    accent: "from-purple-500 to-violet-500"
  },
  {
    icon: Globe,
    title: "Cross Language & Localization Testing",
    description: "Test KwestAI across 36 different languages!",
    accent: "from-cyan-500 to-blue-500"
  },
  {
    icon: Sparkles,
    title: "Testing AI Features",
    description: "KwestAI Agent tests dynamic UIs, and can be deployed to test some of your own AI features/Agents.",
    accent: "from-pink-500 to-rose-500"
  }
];

const UseCasesSection: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-100 to-green-50 blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-100 to-pink-50 blur-3xl opacity-70" />
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
            Use Cases
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From smart assertions to AI feature testing — KwestAI handles any workflow your users encounter.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <motion.div
                key={useCase.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-soft glass-border-gradient glass-hover-rise rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
              >
                <div className="noise-layer opacity-20" />
                <div className="glass-grid-overlay opacity-15" />
                
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.accent} text-white items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* QA Interface Mockups for each use case */}
                {index === 0 && ( /* Smart Assertions */
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-emerald-200">
                    <div className="text-xs font-semibold text-emerald-600 mb-2">AI Assertion Example</div>
                    <div className="font-mono text-xs text-gray-700 space-y-1">
                      <div className="text-emerald-600">✓ &quot;User should see confirmation message&quot;</div>
                      <div className="text-emerald-600">✓ &quot;Cart total should be greater than $0&quot;</div>
                      <div className="text-emerald-600">✓ &quot;Email format should be valid&quot;</div>
                    </div>
                  </div>
                )}

                {index === 1 && ( /* End-to-End Workflows */
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-blue-200">
                    <div className="text-xs font-semibold text-blue-600 mb-2">Multi-Tab Flow</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-gray-700">Tab 1: Product selection</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-gray-700">Tab 2: Payment gateway</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-gray-700">Tab 3: Order confirmation</span>
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && ( /* Form Filling */
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-purple-200">
                    <div className="text-xs font-semibold text-purple-600 mb-2">Dynamic Form Test</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name field:</span>
                        <span className="text-purple-600">✓ Filled</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email field:</span>
                        <span className="text-purple-600">✓ Validated</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dynamic fields:</span>
                        <span className="text-purple-600">✓ Adapted</span>
                      </div>
                    </div>
                  </div>
                )}

                {index === 3 && ( /* Cross Language Testing */
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-cyan-200">
                    <div className="text-xs font-semibold text-cyan-600 mb-2">Multi-Language Testing</div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-center p-1 bg-cyan-50 rounded">🇺🇸 EN</div>
                      <div className="text-center p-1 bg-cyan-50 rounded">🇪🇸 ES</div>
                      <div className="text-center p-1 bg-cyan-50 rounded">🇫🇷 FR</div>
                      <div className="text-center p-1 bg-cyan-50 rounded">🇩🇪 DE</div>
                      <div className="text-center p-1 bg-cyan-50 rounded">🇯🇵 JP</div>
                      <div className="text-center p-1 bg-cyan-50 rounded">+31</div>
                    </div>
                  </div>
                )}

                {index === 4 && ( /* AI Features Testing */
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-pink-200">
                    <div className="text-xs font-semibold text-pink-600 mb-2">AI Feature Validation</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <span className="text-gray-700">Chatbot responses</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <span className="text-gray-700">Dynamic content generation</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <span className="text-gray-700">Recommendation accuracy</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <div className="flex items-center text-sm text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-medium rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see KwestAI in action?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of teams who&apos;ve transformed their QA process with autonomous testing.
            </p>
            <button 
              onClick={onContactClick}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Talk to us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;