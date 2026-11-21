"use client";

import { Code2, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Code2 className="text-blue-500" size={28} />
            <span className="text-white">AM</span>
            <span className="text-blue-500">|</span>
            <span className="text-white">Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t({ en: 'Expertise', fr: 'Expertise' })}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t({ en: 'The 20 Projects', fr: 'Les 20 Projets' })}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t({ en: 'Experience', fr: 'Expérience' })}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-all"
          >
            <Globe size={18} className="text-blue-500" />
            <span className="text-white font-semibold">
              {language === 'en' ? 'EN' : 'FR'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}