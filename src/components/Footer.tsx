"use client"

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-10">
          {/* Logo and company info */}
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <Link href="/" className="font-bold text-2xl mb-6 inline-block">
              KwestAI
            </Link>
            <p className="text-gray-400 mb-6">
              The everything app, for work.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Footer links columns */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/customers" className="text-gray-400 hover:text-white transition-colors">Customers</Link></li>
                <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Docs</Link></li>
                <li><Link href="/demo" className="text-gray-400 hover:text-white transition-colors">On-Demand Demo</Link></li>
                <li><Link href="/webinars" className="text-gray-400 hover:text-white transition-colors">Webinars</Link></li>
                <li><Link href="/templates" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><Link href="/features/chat" className="text-gray-400 hover:text-white transition-colors">Chat</Link></li>
                <li><Link href="/features/ai" className="text-gray-400 hover:text-white transition-colors">AI</Link></li>
                <li><Link href="/features/dashboards" className="text-gray-400 hover:text-white transition-colors">Dashboards</Link></li>
                <li><Link href="/features/calendar" className="text-gray-400 hover:text-white transition-colors">Calendar</Link></li>
                <li><Link href="/features/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-4">Compare</h3>
              <ul className="space-y-2">
                <li><Link href="/compare/monday" className="text-gray-400 hover:text-white transition-colors">vs Monday</Link></li>
                <li><Link href="/compare/notion" className="text-gray-400 hover:text-white transition-colors">vs Notion</Link></li>
                <li><Link href="/compare/asana" className="text-gray-400 hover:text-white transition-colors">vs Asana</Link></li>
                <li><Link href="/compare/jira" className="text-gray-400 hover:text-white transition-colors">vs Jira</Link></li>
                <li><Link href="/compare/trello" className="text-gray-400 hover:text-white transition-colors">vs Trello</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* App store links */}
        <div className="flex flex-wrap gap-4 mb-10 border-t border-gray-800 pt-10">
          <Link href="https://apps.apple.com" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19c-3.3 0-6-2.7-6-6V9c0-3.3 2.7-6 6-6s6 2.7 6 6v4c0 3.3-2.7 6-6 6z"/>
              <path d="M12 19v3"/>
              <path d="M8 22h8"/>
              <path d="M12 15a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2z"/>
            </svg>
            App Store
          </Link>
          <Link href="https://play.google.com" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21"/>
            </svg>
            Play Store
          </Link>
          <Link href="https://microsoft.com" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="10" height="10" x="3" y="3" rx="2"/>
              <rect width="10" height="10" x="11" y="3" rx="2"/>
              <rect width="10" height="10" x="3" y="11" rx="2"/>
              <rect width="10" height="10" x="11" y="11" rx="2"/>
            </svg>
            Microsoft
          </Link>
        </div>
        
        {/* Copyright and legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 KwestAI</p>
          <div className="flex gap-6">
            <Link href="/security" className="text-gray-400 hover:text-white transition-colors text-sm">Security</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
