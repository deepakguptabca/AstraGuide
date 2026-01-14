"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Sparkles, ArrowRight, Zap, Terminal, Globe, 
  MousePointer2, ClipboardCheck, Search, Map, 
  GraduationCap, Award, Coins, CheckCircle2, 
  ChevronRight, RotateCcw 
} from 'lucide-react';

// --- MOCK DATA ---
const CAREER_DATABASE = {
  Realistic: [
    { id: 'r1', title: 'Electronic Engineer', qual: 'B.Tech ECE', skills: 'Circuit Design, VLSI, Embedded Systems', pay: '₹6L - ₹18L', roadmap: 'Focus on Digital Signal Processing & Microcontrollers.' },
    { id: 'r2', title: 'Mechanical Engineer', qual: 'B.Tech Mech', skills: 'CAD, Thermodynamics, Robotics', pay: '₹5L - ₹15L', roadmap: 'Master SolidWorks and Finite Element Analysis.' }
  ],
  Investigative: [
    { id: 'i1', title: 'Fullstack Developer', qual: 'B.Tech/MCA', skills: 'Next.js, Node.js, PostgreSQL', pay: '₹10L - ₹30L', roadmap: 'Learn React first, then master Server Components and APIs.' },
    { id: 'i2', title: 'Data Scientist', qual: 'B.Tech/Stats', skills: 'Python, R, Machine Learning', pay: '₹12L - ₹40L', roadmap: 'Deep dive into Linear Algebra and Probability.' }
  ],
  Artistic: [
    { id: 'a1', title: 'UX/UI Designer', qual: 'Design Degree', skills: 'Figma, Adobe XD, Typography', pay: '₹5L - ₹15L', roadmap: 'Build a portfolio of case studies on Behance.' },
    { id: 'a2', title: 'Motion Animator', qual: 'Fine Arts', skills: 'After Effects, Blender, Maya', pay: '₹6L - ₹20L', roadmap: 'Master 12 principles of animation and 3D modeling.' }
  ],
  Social: [
    { id: 's1', title: 'Clinical Psychologist', qual: 'MA/PhD Psychology', skills: 'Counseling, Empathy, Research', pay: '₹4L - ₹12L', roadmap: 'Complete supervised internships and get licensed.' },
    { id: 's2', title: 'Product Manager', qual: 'MBA/B.Tech', skills: 'Strategy, Stakeholder Management', pay: '₹15L - ₹35L', roadmap: 'Start as an Associate PM and learn Agile methodologies.' }
  ],
  Enterprising: [
    { id: 'e1', title: 'Marketing Director', qual: 'MBA Marketing', skills: 'SEO, Growth Hacking, Leadership', pay: '₹18L - ₹50L', roadmap: 'Manage small budgets first and scale to global campaigns.' },
    { id: 'e2', title: 'Corporate Lawyer', qual: 'LLB/LLM', skills: 'Litigation, Contract Law', pay: '₹10L - ₹45L', roadmap: 'Specialize in M&A or Intellectual Property.' }
  ],
  Conventional: [
    { id: 'c1', title: 'Chartered Accountant', qual: 'CA Final', skills: 'Auditing, Taxation, Excel', pay: '₹8L - ₹25L', roadmap: 'Complete 3 years of articleship under a certified firm.' },
    { id: 'c2', title: 'Database Admin', qual: 'B.Tech/BCA', skills: 'SQL, Oracle, Cloud Security', pay: '₹6L - ₹18L', roadmap: 'Get AWS or Azure Database Associate certification.' }
  ]
};

export default function AstraGuide() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const flowRef = useRef(null);

  const scrollToFlow = () => {
    flowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative flex flex-col items-center pt-32 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 text-xs font-bold text-blue-400 tracking-widest uppercase">
          <Sparkles size={14} /> The Future of Career Guidance
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
          Find Your <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">True Path</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
          AstraGuide uses the scientific RIASEC model to analyze your interests and map a detailed roadmap for your dream career.
        </p>
        <Link href="/onboarding">
        <button 
          onClick={scrollToFlow}
          className="group relative flex items-center gap-3 rounded-full bg-white px-10 py-6 text-xl font-black text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          Click to Get Your Dream Career
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
        </Link>

        {/* 3-Step Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl w-full">
          <StepCard num="01" title="Interest Test" desc="Find your RIASEC type" icon={<ClipboardCheck />} />
          <StepCard num="02" title="Filter Careers" desc="Choose your perfect match" icon={<Search />} />
          <StepCard num="03" title="Get Roadmap" desc="Qualification, Income & Mentorship" icon={<Map />} />
        </div>
      </header>


     
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StepCard({ num, title, desc, icon }) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
      <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[10px] font-black text-gray-600 mb-1 uppercase tracking-widest">Step {num}</span>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function SectionTitle({ num, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-blue-500">{num}</div>
      <h2 className="text-3xl font-black uppercase tracking-tight">{title}</h2>
    </div>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 border border-white/5">{icon}</div>
      <div>
        <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-medium text-gray-200">{value}</p>
      </div>
    </div>
  );
}