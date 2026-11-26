"use client";

import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const capabilities = [
    t({ en: "Full-stack web applications", fr: "Applications web full-stack" }),
    t({ en: "E-commerce and business tools", fr: "E-commerce et outils métier" }),
    t({ en: "Practical AI integrations", fr: "Intégrations IA utiles" }),
  ];

  return (
    <section id="top" className="relative mx-auto grid min-h-[calc(90vh-72px)] max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
      <div className="max-w-3xl">
        <div className="eyebrow mb-7 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d7f36b]" />
          {t({ en: "Independent software studio · Algeria", fr: "Studio logiciel indépendant · Algérie" })}
        </div>

        <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,6.7rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-[#f3f5ef]">
          {t({ en: "Software that moves", fr: "Des logiciels qui font avancer" })}
          <span className="block text-[#d7f36b]">{t({ en: "business forward.", fr: "votre activité." })}</span>
        </h1>

        <p className="muted-copy mt-8 max-w-2xl text-base sm:text-lg">
          {t({
            en: "Brain Studio designs and builds web applications, commerce experiences, internal tools, and practical AI-powered workflows for businesses and ambitious founders.",
            fr: "Brain Studio conçoit et développe des applications web, des expériences e-commerce, des outils internes et des workflows enrichis par l’IA pour les entreprises et les fondateurs ambitieux.",
          })}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="lime-button">
            {t({ en: "Explore selected work", fr: "Voir les projets" })}
            <ArrowDownRight size={17} />
          </a>
          <a href="#contact" className="ghost-button">
            {t({ en: "Discuss a project", fr: "Parler d’un projet" })}
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-xs font-medium text-[#89948a]">
          <span>{t({ en: "Based in Algeria", fr: "Basé en Algérie" })}</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#d7f36b] sm:block" />
          <span>{t({ en: "Working across MENA and beyond", fr: "Projets en MENA et ailleurs" })}</span>
        </div>
      </div>

      <aside className="panel relative mx-auto w-full max-w-md p-6 sm:p-8">
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d7f36b]/10 blur-3xl" />
        <div className="relative">
          <div className="mb-10 flex items-center justify-between">
            <span className="eyebrow">{t({ en: "What I build", fr: "Ce que je construis" })}</span>
            <span className="rounded-full border border-[#d7f36b]/25 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-[#d7f36b]">BS / 01</span>
          </div>
          <div className="space-y-5">
            {capabilities.map((capability, index) => (
              <div key={capability} className="flex items-start gap-4 border-b border-white/[0.07] pb-5 last:border-0 last:pb-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7f36b]/10 text-xs font-bold text-[#d7f36b]">
                  0{index + 1}
                </span>
                <div className="flex flex-1 items-center justify-between gap-3">
                  <span className="text-sm font-semibold leading-6 text-[#e7ebe2]">{capability}</span>
                  <Check size={16} className="shrink-0 text-[#d7f36b]" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-[#d7f36b] p-5 text-[#11150c]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] opacity-70">
              {t({ en: "The approach", fr: "L’approche" })}
            </p>
            <p className="mt-2 text-xl font-semibold leading-tight tracking-tight">
              {t({ en: "Understand the workflow. Build the right tool. Keep improving it.", fr: "Comprendre le besoin. Construire le bon outil. L’améliorer." })}
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
