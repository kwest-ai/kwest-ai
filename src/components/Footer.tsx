"use client"

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="font-bold text-2xl mb-6 inline-block">
              KwestAI
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered QA platform that transforms your testing process with autonomous agents.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://linkedin.com/company/kwestai" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="mailto:contact@kwestai.com" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Section */}
        <div className="border-t border-gray-800 pt-12 mb-8">
          <h3 className="font-bold mb-6 text-white text-center">Why Trust KwestAI?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-2">99.9%</div>
              <p className="text-gray-400 text-sm">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-2">SOC 2</div>
              <p className="text-gray-400 text-sm">Certified & Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 KwestAI. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Security
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
