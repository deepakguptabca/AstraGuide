"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, BookOpen, Calendar, Send, CheckCircle } from 'lucide-react';

export default function Onboarding({ onComplete }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    currentStatus: '', // Class or Degree
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Prepare JSON Data
    const payload = JSON.stringify(formData);
    console.log("Sending Data:", payload);

    try {
      // 2. Send to Server (Replace URL with your backend endpoint)
      const response = await fetch('https://your-api-endpoint.com/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Delay moving to the next step so user sees success message
        setTimeout(() => onComplete(formData), 1500);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      // For demo purposes, we'll still show success if the fetch fails
      setIsSubmitted(true);
      setTimeout(() => onComplete(formData), 1500);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-emerald-500" size={40} />
        </div>
        <h2 className="text-3xl font-black mb-2">Profile Created!</h2>
        <p className="text-gray-400">Launching your AstraGuide journey...</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black mb-2 tracking-tight">Create Your Profile</h2>
        <p className="text-gray-500 text-sm">Tell us a bit about yourself to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <InputGroup 
          label="Full Name" 
          name="name" 
          type="text" 
          placeholder="Ritesh Gupta" 
          icon={<User size={18} />} 
          value={formData.name} 
          onChange={handleChange} 
        />
        
        <div className="grid grid-cols-2 gap-4">
          <InputGroup 
            label="Age" 
            name="age" 
            type="number" 
            placeholder="20" 
            icon={<Calendar size={18} />} 
            value={formData.age} 
            onChange={handleChange} 
          />
          <InputGroup 
            label="Mobile" 
            name="mobile" 
            type="tel" 
            placeholder="99715XXXXX" 
            icon={<Phone size={18} />} 
            value={formData.mobile} 
            onChange={handleChange} 
          />
        </div>

        <InputGroup 
          label="Current Degree / Class" 
          name="currentStatus" 
          type="text" 
          placeholder="e.g. B.Tech ECE 5th Sem" 
          icon={<BookOpen size={18} />} 
          value={formData.currentStatus} 
          onChange={handleChange} 
        />

        <InputGroup 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="ritesh@example.com" 
          icon={<Mail size={18} />} 
          value={formData.email} 
          onChange={handleChange} 
        />

        <button 
          type="submit" 
          className="w-full mt-8 py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-400 hover:text-white transition-all active:scale-95 group"
        >
          Confirm Details
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
}

// Reusable UI for Input Fields
function InputGroup({ label, name, type, placeholder, icon, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">{label}</label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-gray-500">{icon}</div>
        <input
          required
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700"
        />
      </div>
    </div>
  );
}