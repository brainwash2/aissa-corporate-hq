"use client";

import { Globe, Blocks, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Expertise() {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      icon: Globe,
      title: t({ en: 'Web2 Solutions', fr: 'Solutions Web2' }),
      description: t({
        en: 'SaaS Dashboards, E-commerce (Algeria/Stripe).',
        fr: 'Tableaux de bord SaaS, E-commerce (Algérie/Stripe).'
      }),
      tags: ['Next.js', 'TypeScript', 'Python', 'Tailwind'],
      color: 'blue'
    },
    {
      icon: Blocks,
      title: t({ en: 'Web3 Engineering', fr: 'Ingénierie Web3' }),
      description: t({
        en: 'DApp Development, Smart Contracts, Auditing.',
        fr: 'Développement DApp, Smart Contracts, Audit.'
      }),
      tags: ['Solidity', 'Alchemy', 'Web3.js', 'Hardhat'],
      color: 'amber'
    },
    {
      icon: Zap,
      title: t({ en: 'High Performance', fr: 'Haute Performance' }),
      description: t({
        en: 'Backend Systems & Solana.',
        fr: 'Systèmes Backend & Solana.'
      }),
      tags: ['Rust', 'System Design', 'Solana', 'Performance'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'text-blue-500' },
      amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', icon: 'text-amber-500' },
      green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: 'text-green-500' }
    };
    return colors[color];
  };

  return (
    <section id="expertise" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t({ en: 'Expertise', fr: 'Expertise' })}
          </h2>
          <p className="text-gray-400 text-xl">
            {t({
              en: 'Bridging Finance and Technology',
              fr: 'Pont entre Finance et Technologie'
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const colors = getColorClasses(area.color);
            const Icon = area.icon;

            return (
              <div
                key={index}
                className={`${colors.bg} backdrop-blur-md rounded-xl border ${colors.border} p-8 hover:scale-105 transition-transform duration-300`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 border ${colors.border}`}>
                  <Icon className={colors.icon} size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>

                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full text-sm ${colors.text} font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}