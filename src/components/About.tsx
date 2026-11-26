"use client";

import { ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-anchor mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
      <div>
        <p className="eyebrow mb-4">{t({ en: "The person behind the studio", fr: "La personne derrière le studio" })}</p>
        <h2 className="section-title">{t({ en: "Small studio. Hands-on engineering.", fr: "Petit studio. Ingénierie concrète." })}</h2>
      </div>

      <div>
        <p className="text-xl leading-relaxed text-[#e4e9df] sm:text-2xl">
          {t({
            en: "I'm Aissa Mohammed, a full-stack developer based in Algeria. Through Brain Studio, I turn business requirements into working web software — from the first product flow to the database, integrations, and deployment.",
            fr: "Je suis Aissa Mohammed, développeur full-stack basé en Algérie. Avec Brain Studio, je transforme les besoins métier en logiciels web fonctionnels — du premier parcours produit à la base de données, aux intégrations et au déploiement.",
          })}
        </p>
        <p className="muted-copy mt-6">
          {t({
            en: "I work directly with founders and business owners, keep communication clear, and focus on software that can be maintained after launch. The studio is intentionally hands-on: you work with the developer building your product.",
            fr: "Je travaille directement avec les fondateurs et les dirigeants, avec une communication claire et un souci de maintenabilité après le lancement. Le studio est volontairement opérationnel : vous échangez directement avec le développeur de votre produit.",
          })}
        </p>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
            <MapPin className="mb-4 text-[#d7f36b]" size={20} />
            <p className="text-sm font-semibold text-white">{t({ en: "Algeria-based", fr: "Basé en Algérie" })}</p>
            <p className="mt-1 text-xs leading-5 text-[#89948a]">{t({ en: "Working with clients and teams across MENA and remotely.", fr: "Collaboration avec des clients et équipes en MENA et à distance." })}</p>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
            <Terminal className="mb-4 text-[#d7f36b]" size={20} />
            <p className="text-sm font-semibold text-white">{t({ en: "End-to-end delivery", fr: "Livraison de bout en bout" })}</p>
            <p className="mt-1 text-xs leading-5 text-[#89948a]">{t({ en: "Frontend, backend, data, integrations, and deployment.", fr: "Frontend, backend, données, intégrations et déploiement." })}</p>
          </div>
        </div>

        <a href="https://github.com/brainwash2" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d7f36b] transition-colors hover:text-white">
          {t({ en: "Explore my GitHub", fr: "Voir mon GitHub" })}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
