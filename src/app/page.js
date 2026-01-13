"use client";
import React from 'react';
import Navbar from './components/Navbar'; // Assuming you saved the previous code there
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Terminal, Globe } from 'lucide-react';

export default function AstraGuideHome() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative flex flex-col items-center justify-center pt-32 px-6">
        
        {/* Hero Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-medium tracking-wider uppercase">Your Next.js Career Starts Here</span>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Navigate the <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Next.js</span> Universe
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop guessing your path. AstraGuide uses data-driven insights to map your journey from student to Senior Next.js Engineer.
          </p>
        </div>

        {/* THE CENTER BUTTON */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          {/* Glowing Aura behind button */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <button className="relative flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Click to know your career interest
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl w-full">
          <FeatureCard 
            icon={<Zap className="text-yellow-400" />} 
            title="Fast Track" 
            desc="Skip the fluff. Learn only what the industry actually demands in 2026."
          />
          <FeatureCard 
            icon={<Terminal className="text-blue-400" />} 
            title="Tech Roadmap" 
            desc="Detailed steps from fundamental React to advanced Server Components."
          />
          <FeatureCard 
            icon={<Globe className="text-purple-400" />} 
            title="Global Jobs" 
            desc="Connect with top-tier companies looking for Next.js specialists."
          />
        </div>

      </main>

      {/* Subtle Footer */}
      <footer className="mt-40 py-10 border-t border-white/5 text-center text-gray-500 text-sm">
        © 2026 AstraGuide — Built for the Next Generation of Developers
      </footer>
    </div>
  );
}

// Sub-component for Features
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
      <div className="mb-4 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}