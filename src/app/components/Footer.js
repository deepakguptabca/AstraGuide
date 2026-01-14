import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Globe, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Career Quiz', href: '#' },
      { name: 'Roadmaps', href: '#' },
      { name: 'Mentors', href: '#' },
      { name: 'Scholarships', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Career Blog', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'API Reference', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  return (
    <footer className="mt-20 border-t border-white/5 bg-[#020202] pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Astra<span className="text-emerald-400">Guide</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Empowering the next generation of professionals with data-driven career roadmaps and RIASEC-based guidance.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<Mail size={18} />} href="#" />
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-emerald-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>© {currentYear} AstraGuide. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Sparkles size={10} className="text-yellow-500" /> by Team Epex
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
              <Globe size={14} />
              English (US)
            </button>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <span className="text-xs text-gray-600">Status: <span className="text-emerald-500 font-medium">All Systems Operational</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Wrapper
const SocialIcon = ({ icon, href }) => (
  <Link 
    href={href} 
    className="h-9 w-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
  >
    {icon}
  </Link>
);

export default Footer;