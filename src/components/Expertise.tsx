"use client";

import { ArrowUpRight, Bot, Code2, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Expertise() {
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      icon: Code2,
      title: t({ en: "Web products & platforms", fr: "Produits et plateformes web" }),
      description: t({
        en: "Web applications, portals, dashboards, and SaaS foundations built around the way your team actually works.",
        fr: "Applications web, portails, tableaux de bord et bases SaaS conçus autour de la façon dont votre équipe travaille réellement.",
      }),
      examples: ["Next.js", "TypeScript", "Supabase", "APIs"],
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: t({ en: "Commerce & operations", fr: "Commerce et opérations" }),
      description: t({
        en: "E-commerce storefronts, catalogues, order workflows, booking experiences, and internal tools that make daily operations clearer.",
        fr: "Boutiques e-commerce, catalogues, gestion des commandes, réservations et outils internes pour simplifier les opérations quotidiennes.",
      }),
      examples: ["E-commerce", "Order flows", "Admin tools", "Analytics"],
    },
    {
      number: "03",
      icon: Bot,
      title: t({ en: "Practical AI integration", fr: "Intégration pratique de l’IA" }),
      description: t({
        en: "AI features connected to real business data and controlled workflows: document extraction, knowledge search, and human-reviewed assistance.",
        fr: "Fonctionnalités IA connectées aux données et workflows métier : extraction de documents, recherche de connaissances et assistance avec validation humaine.",
      }),
      examples: ["AI APIs", "RAG", "Document workflows", "Automation"],
    },
  ];

  return (
    <section id="services" className="section-anchor border-y border-white/[0.07] bg-[#0d110e]/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{t({ en: "What Brain Studio does", fr: "Les services de Brain Studio" })}</p>
          <h2 className="section-title">{t({ en: "The right tool for the problem.", fr: "Le bon outil pour le bon problème." })}</h2>
          <p className="muted-copy mt-5">
            {t({
              en: "Start with the business workflow, not the technology trend. Build only what creates a useful improvement.",
              fr: "Partir du workflow métier, pas de la tendance technologique. Construire ce qui apporte une amélioration utile.",
            })}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number} className="panel p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{service.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d7f36b]/10 text-[#d7f36b]">
                    <Icon size={21} />
                  </span>
                </div>
                <h3 className="mt-9 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="muted-copy mt-4 min-h-[8rem] text-sm">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <span key={example} className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[0.68rem] text-[#aeb9ad]">
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#d7f36b]/20 bg-[#d7f36b]/[0.055] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white">{t({ en: "Have a workflow that needs fixing?", fr: "Un workflow à améliorer ?" })}</p>
            <p className="mt-1 text-sm text-[#a0aaa0]">{t({ en: "Let's map the problem before choosing the technology.", fr: "Commençons par comprendre le problème avant de choisir la technologie." })}</p>
          </div>
          <a href="#contact" className="ghost-button shrink-0">
            {t({ en: "Talk through the problem", fr: "Discuter du besoin" })}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
