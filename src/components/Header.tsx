"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/10 backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/">
            <div className={`font-bold text-2xl flex items-center gap-2 ${
              scrolled ? 'text-indigo-900' : 'text-gray-900'
            }`}>
              <span className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white">K</span>
              <span>KwestAI</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem title="Features" scrolled={scrolled} hasDropdown>
              <div className="py-2 grid grid-cols-2 gap-2 w-[400px]">
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">AI-Powered Testing</div>
                  <div className="text-xs text-gray-500">Advanced intelligent test automation</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Smart Assertions</div>
                  <div className="text-xs text-gray-500">Natural language test verification</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Visual Testing</div>
                  <div className="text-xs text-gray-500">Pixel-perfect UI validation</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Cross-Browser Testing</div>
                  <div className="text-xs text-gray-500">Test across all popular browsers</div>
                </Link>
              </div>
            </NavItem>
            <NavItem title="Solutions" scrolled={scrolled} hasDropdown>
              <div className="py-2">
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">For QA Teams</div>
                  <div className="text-xs text-gray-500">Streamline testing workflows</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">For Developers</div>
                  <div className="text-xs text-gray-500">Ship code with confidence</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">For Product Teams</div>
                  <div className="text-xs text-gray-500">Release better products faster</div>
                </Link>
              </div>
            </NavItem>
            <NavItem title="Resources" scrolled={scrolled} hasDropdown>
              <div className="py-2">
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Documentation</div>
                  <div className="text-xs text-gray-500">Comprehensive guides and tutorials</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Blog</div>
                  <div className="text-xs text-gray-500">Latest news and best practices</div>
                </Link>
                <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="font-medium mb-1">Case Studies</div>
                  <div className="text-xs text-gray-500">See how others use KwestAI</div>
                </Link>
              </div>
            </NavItem>
            <NavItem title="Pricing" scrolled={scrolled} href="/pricing" />
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className={`hidden sm:block text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-indigo-700' : 'text-white hover:text-indigo-200'
            }`}
          >
            Log In
          </Link>
          <Button 
            href="/demo"
            variant={scrolled ? "primary" : "ghost"}
            size="md"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  title: string;
  href?: string;
  hasDropdown?: boolean;
  scrolled?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, href, hasDropdown = false, scrolled = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link 
        href={href || '#'} 
        className={`flex items-center gap-1 font-medium ${
          scrolled ? 'text-gray-700 hover:text-indigo-700' : 'text-white hover:text-indigo-200'
        }`}
        onClick={(e) => hasDropdown && e.preventDefault()}
      >
        {title}
        {hasDropdown && <ChevronDown className="w-4 h-4" />}
      </Link>
      
      {hasDropdown && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg p-4 min-w-[200px] ${isOpen ? 'block' : 'hidden'}`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Header;
