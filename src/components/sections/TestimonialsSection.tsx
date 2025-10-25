"use client";

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Nguyen',
    role: 'Head of QA',
    company: 'FleetSync',
    quote: 'KwestAI replaced three legacy tools and cut our regression cycle from 2 days to 3 hours. The autonomous healing is unreal.'
  },
  {
    name: 'Devon Carter',
    role: 'Engineering Manager',
    company: 'LoopPay',
    quote: 'We no longer argue about flaky tests in standup. Failure clustering + probable cause summaries changed our incident workflow.'
  },
  {
    name: 'Priya Menon',
    role: 'Platform Lead',
    company: 'NovaLearn',
    quote: 'Authoring speed is 10x what it was. Natural language to production-grade tests is now just how we work.'
  },
  {
    name: 'Marcus Lee',
    role: 'Director of Engineering',
    company: 'BrightChain',
    quote: 'Quality signals feed straight into our rollout gates. We deploy faster, with more confidence, and fewer rollbacks.'
  },
];

function useCardTilt() {
  const ref = useRef<HTMLDivElement | null>(null);
  const handle = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    el.style.setProperty('--tilt-x', `${rotateX}deg`);
    el.style.setProperty('--tilt-y', `${rotateY}deg`);
  };
  const reset = () => {
    const el = ref.current; 
    if (!el) return; 
    el.style.setProperty('--tilt-x','0deg'); 
    el.style.setProperty('--tilt-y','0deg');
  };
  return { ref, handle, reset };
}

const TestimonialsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="min-h-screen flex items-center py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-indigo-100 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[34rem] h-[34rem] bg-gradient-to-tr from-blue-100 to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Teams are redefining QA velocity</h2>
          <p className="mt-4 text-gray-600 text-lg">Real outcomes from real engineering orgs shipping faster with higher confidence.</p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t, i) => {
            const { ref, handle, reset } = useCardTilt();
            return (
              <motion.div
                key={t.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: i * 0.05 }}
                className="group relative"
              >
                <div
                  ref={ref}
                  onMouseMove={prefersReducedMotion ? undefined : handle}
                  onMouseLeave={prefersReducedMotion ? undefined : reset}
                  style={prefersReducedMotion ? undefined : { 
                    transform: 'perspective(900px) rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))', 
                    transition: 'transform 180ms ease' 
                  }}
                  className="h-full rounded-2xl p-6 bg-white/70 backdrop-blur border border-indigo-100 shadow-sm hover:shadow-lg flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 text-white flex items-center justify-center font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-[11px] text-indigo-600 font-medium uppercase tracking-wide">{t.role}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                  
                  {i === 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-green-700">Regression Cycle Time</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">2 days</div>
                          <div className="text-xs text-gray-500">Before</div>
                        </div>
                        <div className="text-green-500">→</div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">3 hrs</div>
                          <div className="text-xs text-gray-500">After</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-3 border border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-blue-700">Flaky Test Rate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">23%</div>
                          <div className="text-xs text-gray-500">Before</div>
                        </div>
                        <div className="text-blue-500">→</div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">2%</div>
                          <div className="text-xs text-gray-500">After</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 mb-3 border border-purple-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-purple-700">Test Authoring Speed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">2 hrs</div>
                          <div className="text-xs text-gray-500">Per test</div>
                        </div>
                        <div className="text-purple-500">→</div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">12 min</div>
                          <div className="text-xs text-gray-500">Per test</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 3 && (
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 mb-3 border border-cyan-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-cyan-700">Production Rollbacks</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">8/mo</div>
                          <div className="text-xs text-gray-500">Before</div>
                        </div>
                        <div className="text-cyan-500">→</div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-600">1/mo</div>
                          <div className="text-xs text-gray-500">After</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 text-[11px] font-medium text-gray-500 tracking-wide">{t.company}</div>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50 to-blue-50 pointer-events-none transition" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
