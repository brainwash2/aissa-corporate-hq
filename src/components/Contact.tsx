"use client";

import { ArrowUpRight, Github, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-anchor border-t border-white/[0.07] bg-[#0d110e] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="panel relative overflow-hidden p-7 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#d7f36b]/10 blur-[90px]" />
          <div className="relative max-w-3xl">
            <p className="eyebrow mb-5">{t({ en: "Have a project in mind?", fr: "Vous avez un projet en tête ?" })}</p>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-white">
              {t({ en: "Let's build something useful.", fr: "Construisons quelque chose d’utile." })}
            </h2>
            <p className="muted-copy mt-6 max-w-2xl text-base">
              {t({
                en: "Tell me what your business is trying to improve. We can start with a short conversation and decide whether software is the right solution.",
                fr: "Expliquez-moi ce que votre activité cherche à améliorer. Nous pouvons commencer par une courte discussion et voir si un outil logiciel est la bonne solution.",
              })}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/brainworm2020/" target="_blank" rel="noreferrer" className="lime-button">
                <MessageCircle size={17} />
                {t({ en: "Send a message", fr: "Envoyer un message" })}
                <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/brainwash2" target="_blank" rel="noreferrer" className="ghost-button">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://www.instagram.com/brainworm2020/" target="_blank" rel="noreferrer" className="ghost-button">
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-8 text-xs text-[#788478] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Brain Studio · Aissa Mohammed</span>
          <span>{t({ en: "Independent software studio · Algeria", fr: "Studio logiciel indépendant · Algérie" })}</span>
        </footer>
      </div>
    </section>
  );
}
