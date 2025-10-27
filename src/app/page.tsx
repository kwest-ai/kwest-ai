"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
import StatsSection from "@/components/sections/StatsSection";
import LifecycleSimulationSection from "@/components/sections/LifecycleSimulationSection";
import AdvantageSection from "@/components/sections/AdvantageSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import { ContactModal } from "@/components/ui/contact-modal";
// Legacy sections kept (commented) in case we want to reintroduce / merge specific content:
// import FeaturesSection from "@/components/sections/FeaturesSection";
// import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
// import AllFeaturesSection from "@/components/sections/AllFeaturesSection";

// Simple navigation dots for slide sections
const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'problem', label: 'Problem' },
  { id: 'stats', label: 'Stats' },
  { id: 'advantage', label: 'Advantage' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'cta', label: 'Get Started' },
];

function SlideNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.55 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Section navigation" className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
      {sections.map((s) => {
        const isActive = s.id === active;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group relative w-3.5 h-3.5 rounded-full transition-colors ring-offset-2 ring-offset-white focus:ring-2 ring-indigo-400 focus:outline-none ${isActive ? 'bg-indigo-600' : 'bg-indigo-200/50 hover:bg-indigo-400 focus:bg-indigo-500'}`}
            aria-label={s.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="pointer-events-none absolute left-full ml-2 -translate-y-1/2 top-1/2 whitespace-nowrap text-[11px] bg-white/90 text-indigo-700 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 shadow border border-indigo-100">{s.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="font-sans" id="top">
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <SlideNav />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <main id="main-content">
        <section id="hero" className="min-h-screen"><HeroSection onContactClick={() => setIsContactModalOpen(true)} /></section>
        <section id="problem" className="min-h-screen"><ProblemStatementSection /></section>
        <section id="stats" className="min-h-screen"><StatsSection /></section>
        <section id="advantage" className="min-h-screen"><AdvantageSection /></section>
        <section id="lifecycle" className="min-h-screen"><LifecycleSimulationSection /></section>
        <section id="usecases" className="min-h-screen"><UseCasesSection onContactClick={() => setIsContactModalOpen(true)} /></section>
        <section id="testimonials" className="min-h-screen"><TestimonialsSection /></section>
        {/* Legacy sections temporarily removed from flow to avoid repetition with new narrative-driven components */}
        {/* <FeaturesSection /> */}
        {/* <AIFeaturesSection /> */}
        {/* <AllFeaturesSection /> */}
        <section id="cta" className="min-h-screen"><CTASection onContactClick={() => setIsContactModalOpen(true)} /></section>
      </main>
      <Footer />
    </div>
  );
}
