"use client";

import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t({
              en: 'Architecting the Digital Future of MENA',
              fr: 'Architecte de l\'Avenir Numérique en MENA'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t({
              en: 'Master in Finance turned Full Stack Engineer. Leveraging Public APIs for Web2 Solutions & Alchemy Dapps for Web3 Innovation.',
              fr: 'Master en Finance devenu Ingénieur Full Stack. Exploitant les API publiques pour des solutions Web2 et Alchemy Dapps pour l\'innovation Web3.'
            })}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg backdrop-blur-sm">
            <span className="text-blue-400 font-semibold">Next.js 15</span>
          </div>
          <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg backdrop-blur-sm">
            <span className="text-blue-400 font-semibold">Rust</span>
          </div>
          <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg backdrop-blur-sm">
            <span className="text-blue-400 font-semibold">Solidity</span>
          </div>
          <div className="px-6 py-3 bg-amber-500/20 border border-amber-500/40 rounded-lg backdrop-blur-sm">
            <span className="text-amber-400 font-semibold">Alchemy</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
          >
            {t({ en: 'View Projects', fr: 'Voir les Projets' })}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all"
          >
            {t({ en: 'Get in Touch', fr: 'Contactez-moi' })}
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-500" size={32} />
        </div>
      </div>
    </section>
  );
}