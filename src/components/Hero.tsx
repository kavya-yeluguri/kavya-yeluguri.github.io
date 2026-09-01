import { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/utils/pathUtils';

const roles = [
  "Data Engineer"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 bg-transparent">

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 text-slate-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to new opportunities
          </div>

          {/* Main Headline with Animated Role and Blue Text Accent */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Hi, I'm Kavya <br />
            <span className="text-[#3b82f6] min-h-[1.2em] inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
            Building robust cloud data pipelines, real-time architectures, and intelligent workflows on GCP and beyond.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            {/* Updated from 'projects' to 'about' */}
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-6 text-sm font-medium shadow-md transition-all hover:scale-105"
            >
              About Me <ArrowRight size={16} className="ml-2" />
            </Button>

            {/* Direct anchor tag wrapping standard button content to ensure reliable download/preview */}
            <a 
              href={getAssetPath("/portflio_resume.pdf")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-all hover:scale-105 shadow-sm"
            >
              <FileText size={16} className="mr-2" /> View Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;