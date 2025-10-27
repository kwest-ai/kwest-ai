"use client";

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'VP OF ENGINEERING',
    company: 'TechStack Solutions',
    quote: "We maintain 18,000+ test cases across 40+ microservices. Every deploy, 2-3% of tests fail for environmental reasons, not real issues. Our team spends 8-10 hours weekly triaging false positives instead of writing meaningful tests.",
    metric: 'The Problem: Test Triage Overhead',
    before: '40 hours/month',
    after: '< 4 hours/month',
    beforeLabel: 'Wasted on False Positives',
    afterLabel: 'What We Need',
    color: 'from-green-50 to-emerald-50 border-green-200'
  },
  {
    name: 'James Rodriguez',
    role: 'QA DIRECTOR',
    company: 'CloudFlow Systems',
    quote: "We run 45-minute test suites daily. Half our team time goes to maintaining brittle selectors and flaky waits. When the UI changes slightly, 200+ tests break even though functionality is fine. Automated test repair would be transformational.",
    metric: 'The Gap: Test Maintenance',
    before: '30-40%',
    after: '< 5%',
    beforeLabel: 'Of Sprint Cycle',
    afterLabel: 'If Automated',
    color: 'from-blue-50 to-indigo-50 border-blue-200'
  },
  {
    name: 'Maya Patel',
    role: 'ENGINEERING MANAGER',
    company: 'DataCore Analytics',
    quote: "Our biggest blocker? Devs can write features but struggle to author comprehensive test cases. It takes 2-3 weeks for test experts to build quality coverage for a 1-week feature. We need non-experts to generate reliable tests from requirements.",
    metric: 'The Bottleneck: Test Authoring',
    before: '3-4 weeks',
    after: '1-2 weeks',
    beforeLabel: 'Time to Deploy',
    afterLabel: 'With AI Generation',
    color: 'from-purple-50 to-violet-50 border-purple-200'
  },
  {
    name: 'David Kim',
    role: 'HEAD OF QA',
    company: 'FinServe Capital',
    quote: "In financial tech, a single production bug costs us immediately. Our QA team works overtime trying to achieve comprehensive test coverage for regulatory compliance, but knowledge gaps remain. AI-augmented testing could close those gaps systematically.",
    metric: 'The Risk: Coverage Gaps',
    before: '12-15 per quarter',
    after: '2-3 per quarter',
    beforeLabel: 'Production Incidents',
    afterLabel: 'Target with AI QA',
    color: 'from-cyan-50 to-blue-50 border-cyan-200'
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

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  prefersReducedMotion: boolean | null;
}

function TestimonialCard({ testimonial: t, index: i, prefersReducedMotion }: TestimonialCardProps) {
  const { ref, handle, reset } = useCardTilt();
  
  return (
    <motion.div
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
        
        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">&quot;{t.quote}&quot;</p>
        
        {/* Metrics Display */}
        <div className={`bg-gradient-to-r ${t.color} rounded-lg p-3 mb-3 border`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-700">{t.metric}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center flex-1">
              <div className="text-base font-bold text-red-600">{t.before}</div>
              <div className="text-xs text-gray-500">{t.beforeLabel}</div>
            </div>
            <div className="text-gray-400 text-sm">→</div>
            <div className="text-center flex-1">
              <div className="text-base font-bold text-green-600">{t.after}</div>
              <div className="text-xs text-gray-500">{t.afterLabel}</div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-[11px] font-medium text-gray-500 tracking-wide">{t.company}</div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50 to-blue-50 pointer-events-none transition" />
      </div>
    </motion.div>
  );
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
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What engineering teams need from AI QA</h2>
          <p className="mt-4 text-gray-600 text-lg">Real challenges from real engineering orgs. Here is what they&apos;re looking to solve with intelligent testing automation.</p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} prefersReducedMotion={prefersReducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
