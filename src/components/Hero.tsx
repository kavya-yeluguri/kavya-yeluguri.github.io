import React from 'react';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24 bg-dot-pattern relative">
      <div className="max-w-4xl w-full space-y-6">
        
        {/* Location / Title Sub-Header */}
        <p className="font-mono text-xs sm:text-sm tracking-widest text-slate-500 uppercase">
          DATA + SYSTEMS ENGINEER / HYDERABAD, IN
        </p>

        {/* Main Headline with Blue Text Accent */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Hi, I'm Kavya <br />
          <span className="text-[#3b82f6]">Data Engineer !</span>
        </h1>

        {/* Status Badge Sub-section Line */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-slate-200 bg-white/80 font-mono text-sm text-slate-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-emerald-600 font-semibold">currently</span> Data Engineer
        </div>

        {/* Main Bio Sub-Section Paragraph */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal pt-1">
          Building reliable data foundations for the AI era. Specializing in high-throughput GCP pipelines, distributed storage, and applied AI infrastructure.
        </p>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            About Me <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>

          
        </div>

      </div>
    </section>
  );
};

export default Hero;