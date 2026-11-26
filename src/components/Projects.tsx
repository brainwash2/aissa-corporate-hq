"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectKind = "client" | "independent";
type Filter = "all" | ProjectKind;

const projectRecords = [
  {
    id: "radia",
    name: "Radia Store",
    mark: "RADIA",
    kind: "client" as const,
    status: { en: "Client project · active build", fr: "Projet client · développement en cours" },
    description: {
      en: "A custom e-commerce experience being built for a retail client. The public preview is available; the source repository is private.",
      fr: "Une expérience e-commerce sur mesure développée pour un client du commerce. La prévisualisation est publique ; le dépôt source est privé.",
    },
    stack: ["Next.js", "Supabase", "E-commerce"],
    live: "https://radia-store.vercel.app/",
    accent: "rose",
  },
  {
    id: "abc",
    name: "ABC Store",
    mark: "ABC",
    kind: "client" as const,
    status: { en: "Client project · active build", fr: "Projet client · développement en cours" },
    description: {
      en: "An online retail storefront developed for a client. The public demo and repository are available for review.",
      fr: "Une boutique en ligne développée pour un client. La démonstration et le dépôt public sont accessibles.",
    },
    stack: ["Next.js", "React", "Supabase", "Tailwind"],
    live: "https://abc-store-seven.vercel.app/",
    source: "https://github.com/brainwash2/abc-store",
    accent: "lime",
  },
  {
    id: "dzwire",
    name: "DzWire",
    mark: "DZ / WIRE",
    kind: "independent" as const,
    status: { en: "Independent product", fr: "Produit indépendant" },
    description: {
      en: "A self-initiated digital publishing platform exploring editorial workflows, multilingual content, and data-rich news experiences.",
      fr: "Une plateforme éditoriale indépendante qui explore les workflows de publication, le contenu multilingue et les expériences d’actualité enrichies par les données.",
    },
    stack: ["Next.js", "Sanity", "Clerk", "deck.gl"],
    live: "https://dzwire-news.vercel.app/",
    source: "https://github.com/brainwash2/dzwire-clean",
    accent: "blue",
  },
  {
    id: "crypto",
    name: "CryptoBrainNews",
    mark: "CBN",
    kind: "independent" as const,
    status: { en: "Independent prototype", fr: "Prototype indépendant" },
    description: {
      en: "A self-initiated crypto publishing prototype exploring structured editorial content, market data, and AI-assisted research workflows.",
      fr: "Un prototype éditorial crypto indépendant qui explore le contenu structuré, les données de marché et les workflows de recherche assistés par l’IA.",
    },
    stack: ["Next.js", "Sanity", "AI SDK", "Market data"],
    live: "https://cryptobrainnews.vercel.app/",
    source: "https://github.com/brainwash2/cryptobrainnews",
    accent: "violet",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = projectRecords.filter((project) => filter === "all" || project.kind === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t({ en: "All work", fr: "Tous les projets" }) },
    { id: "client", label: t({ en: "Client projects", fr: "Projets clients" }) },
    { id: "independent", label: t({ en: "Independent products", fr: "Produits indépendants" }) },
  ];

  return (
    <section id="work" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="mb-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">{t({ en: "Selected work", fr: "Projets sélectionnés" })}</p>
          <h2 className="section-title">{t({ en: "Built for real workflows.", fr: "Conçus pour de vrais usages." })}</h2>
          <p className="muted-copy mt-5 max-w-xl">
            {t({
              en: "A mix of commissioned client builds and independent products. Each project is labelled clearly so you know what was built for a client and what was initiated independently.",
              fr: "Des réalisations pour des clients et des produits développés indépendamment. Chaque projet est clairement identifié.",
            })}
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={filter === item.id
                ? "rounded-full bg-[#d7f36b] px-4 py-2.5 text-xs font-bold text-[#10140b]"
                : "rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-[#a0aaa0] transition-colors hover:border-[#d7f36b]/40 hover:text-white"}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article key={project.id} className="panel group p-4 transition-transform duration-200 hover:-translate-y-1 sm:p-5">
            <div className="project-art">
              <span className="project-mark">{project.mark}</span>
              <span className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/80">
                {project.kind === "client"
                  ? t({ en: "Client build", fr: "Projet client" })
                  : t({ en: "Self-initiated", fr: "Projet personnel" })}
              </span>
            </div>

            <div className="px-2 pb-2 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-[#f3f5ef]">{project.name}</h3>
                <span className="text-xs text-[#9ba79b]">{t(project.status)}</span>
              </div>
              <p className="muted-copy mt-3 min-h-[5rem] text-sm">{t(project.description)}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.68rem] font-medium text-[#b5beb3]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
                <a href={project.live} target="_blank" rel="noreferrer" className="lime-button !px-4 !py-2.5 !text-xs">
                  {t({ en: "Live preview", fr: "Voir la démo" })}
                  <ExternalLink size={14} />
                </a>
                {project.source ? (
                  <a href={project.source} target="_blank" rel="noreferrer" className="ghost-button !px-4 !py-2.5 !text-xs">
                    <Github size={14} />
                    {t({ en: "Source code", fr: "Code source" })}
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="text-xs text-[#788478]">
                    {t({ en: "Private repository", fr: "Dépôt privé" })}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs leading-6 text-[#788478]">
        {t({
          en: "Client projects are commissioned work. Independent products are self-initiated demonstrations, not client testimonials or commissioned engagements.",
          fr: "Les projets clients sont des réalisations commandées. Les produits indépendants sont des démonstrations personnelles, pas des témoignages ou missions clients.",
        })}
      </p>
    </section>
  );
}
