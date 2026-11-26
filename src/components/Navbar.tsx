"use client";

import { useState } from "react";
import { ArrowUpRight, BrainCircuit, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t({ en: "Work", fr: "Projets" }), href: "#work" },
    { label: t({ en: "Services", fr: "Services" }), href: "#services" },
    { label: t({ en: "About", fr: "À propos" }), href: "#about" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090b0a]/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-2.5" aria-label="Brain Studio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d7f36b] text-[#11150c]">
            <BrainCircuit size={21} strokeWidth={2.1} />
          </span>
          <span className="text-sm font-extrabold tracking-[0.12em] text-white">BRAIN<span className="text-[#d7f36b]">STUDIO</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#a0aaa0] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-[#d7f36b] transition-colors hover:border-[#d7f36b]/50"
            aria-label="Change language"
          >
            {language.toUpperCase()}
          </button>
          <a href="#contact" className="lime-button !px-4 !py-2.5 !text-xs">
            {t({ en: "Start a project", fr: "Démarrer un projet" })}
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-[#d7f36b]"
            aria-label="Change language"
          >
            {language.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-[#0d110e] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="py-1 text-sm text-[#c2cbbf]">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="lime-button mt-1 w-full">
              {t({ en: "Start a project", fr: "Démarrer un projet" })}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
