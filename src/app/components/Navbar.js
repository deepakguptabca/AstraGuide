"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, BookOpen, Rocket, Menu, X, Github } from 'lucide-react';
import Onboarding from '../onboarding/page';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation data
  const navLinks = [
    { name: 'Pathways', href: '/pathways', icon: <Compass size={18} /> },
    { name: 'Resources', href: '/resources', icon: <BookOpen size={18} /> },
    { name: 'Mentors', href: '/mentors', icon: <Rocket size={18} /> },
  ];

  return (
    <nav className="relative top-2 py-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 font-sans">
      <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl transition-all duration-300">
        <div className="flex h-16 items-center justify-between px-6">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-black text-xl">A</span>
            </div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
              Astra<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Guide</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-all hover:text-white"
              >
                <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href="/onboarding">
            <button  className="relative inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-all hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95">
              Get Started
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-white/10 bg-black/40 p-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-3 text-lg font-medium text-gray-300 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <button className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-600/20">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;