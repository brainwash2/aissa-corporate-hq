"use client";

import { Briefcase, TrendingUp, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-blue-500/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                <img
                  src="https://github.com/brainwash2.png"
                  alt="Aissa Mohammed"
                  className="relative w-64 h-64 rounded-full border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t({ en: 'The Journey', fr: 'Le Parcours' })}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t({
                  en: '"My journey didn\'t start in a computer lab; it started on the trading floor. With a Master\'s in Finance (2017) and 3 years of trading experience, I understand risk and liquidity. In 2021, I pivoted to code. Today, I bridge the gap between Financial Theory and Rust/Solidity Architecture."',
                  fr: '"Mon parcours n\'a pas commencé dans un laboratoire informatique, mais sur le parquet boursier. Avec un Master en Finance (2017) et 3 ans d\'expérience en trading, je comprends le risque et la liquidité. En 2021, j\'ai pivoté vers le code. Aujourd\'hui, je fais le pont entre la Théorie Financière et l\'Architecture Rust/Solidity."'
                })}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/40">
                    <Briefcase className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {t({ en: 'Finance Background', fr: 'Formation Finance' })}
                    </h3>
                    <p className="text-gray-400">
                      {t({
                        en: 'Master\'s in Finance (2017) + 3 Years Trading',
                        fr: 'Master en Finance (2017) + 3 ans de Trading'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/40">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {t({ en: 'Tech Pivot (2021)', fr: 'Pivot Tech (2021)' })}
                    </h3>
                    <p className="text-gray-400">
                      {t({
                        en: 'Full Stack Architect specializing in Web3',
                        fr: 'Architecte Full Stack spécialisé en Web3'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/40">
                    <TrendingUp className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {t({ en: 'MENA & Global Markets', fr: 'Marchés MENA et Mondiaux' })}
                    </h3>
                    <p className="text-gray-400">
                      {t({
                        en: 'Based in Algeria, Operating Worldwide',
                        fr: 'Basé en Algérie, Opérant Mondialement'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}