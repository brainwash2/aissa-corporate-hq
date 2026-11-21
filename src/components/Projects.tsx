"use client";

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'web2' | 'web3'>('all');

  const projects = [
    // --- WEB2 FLAGSHIP ---
    {
      title: 'DZD Currency Exchange AI',
      description: t({
        en: 'Real-time Algerian Dinar exchange rates with AI-powered predictions using public APIs.',
        fr: 'Taux de change du Dinar Algérien en temps réel avec prédictions IA via API publiques.'
      }),
      category: 'web2',
      tags: ['Next.js', 'Python', 'Public APIs', 'Recharts'],
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '#', // We will update this once we build it in the next phase
      codeLink: 'https://github.com/brainwash2/dzd-currency-exchange'
    },
    // --- WEB3 PROJECTS (LIVE ON VERCEL) ---
    {
      title: 'Gasless Stablecoin Wallet',
      description: t({
        en: 'ERC-4337 Smart Wallet allowing users to pay gas in USDC using Alchemy Account Abstraction.',
        fr: 'Portefeuille intelligent ERC-4337 permettant de payer les frais de gaz en USDC via Alchemy AA.'
      }),
      category: 'web3',
      tags: ['Next.js', 'Alchemy AA', 'Viem', 'Paymaster'],
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-gasless-wallet.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-gasless-wallet'
    },
    {
      title: 'DEX Health Monitor',
      description: t({
        en: 'Real-time analytics dashboard visualizing liquidity and volume of Uniswap pools via RPC.',
        fr: 'Tableau de bord analytique visualisant la liquidité et le volume des pools Uniswap via RPC.'
      }),
      category: 'web3',
      tags: ['React', 'Alchemy RPC', 'Analytics', 'DeFi'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-dex-monitor.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-dex-monitor'
    },
    {
      title: 'Flash Loan Arb Scanner',
      description: t({
        en: 'MEV bot interface identifying price discrepancies across multiple DEXs for arbitrage opportunities.',
        fr: 'Interface de bot MEV identifiant les écarts de prix entre DEX pour les opportunités d\'arbitrage.'
      }),
      category: 'web3',
      tags: ['Node.js', 'Flashbots', 'Ethers.js', 'MEV'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-arbitrage-scanner.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-arbitrage-scanner'
    },
    {
      title: 'NFT Commander',
      description: t({
        en: 'Advanced NFT portfolio manager with instant metadata retrieval using Alchemy NFT API.',
        fr: 'Gestionnaire de portefeuille NFT avancé avec récupération instantanée des métadonnées via Alchemy API.'
      }),
      category: 'web3',
      tags: ['Next.js', 'Alchemy NFT API', 'Wagmi', 'Tailwind'],
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-nft-commander.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-nft-commander'
    },
    {
      title: 'USDC Event Indexer',
      description: t({
        en: 'Custom backend service indexing high-value USDC transfers directly from the blockchain.',
        fr: 'Service backend personnalisé indexant les transferts USDC de haute valeur directement depuis la blockchain.'
      }),
      category: 'web3',
      tags: ['TypeScript', 'Alchemy Log API', 'Backend', 'Data'],
      image: 'https://images.pexels.com/photos/17483874/free-photo-of-visualising-data-processing.png?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-event-indexer.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-event-indexer'
    },
    {
      title: 'YieldVault Protocol',
      description: t({
        en: 'Staking smart contract with auto-compounding logic and reentrancy protection.',
        fr: 'Contrat intelligent de staking avec logique d\'auto-composition et protection contre la réentrance.'
      }),
      category: 'web3',
      tags: ['Solidity', 'Foundry', 'Security', 'ERC-4626'],
      image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-yield-aggregator-ivgd.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-yield-aggregator'
    },
    {
      title: 'Real-Time Whale Watcher',
      description: t({
        en: 'Security tool monitoring mempool transactions for large asset movements via WebSockets.',
        fr: 'Outil de sécurité surveillant les transactions mempool pour les grands mouvements d\'actifs via WebSockets.'
      }),
      category: 'web3',
      tags: ['WebSockets', 'Alchemy Notify', 'Security', 'Monitoring'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-whale-watcher.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-whale-watcher'
    },
    {
      title: 'Alchemy DAO Governance',
      description: t({
        en: 'On-chain voting system with checkpointing and proposal execution mechanisms.',
        fr: 'Système de vote on-chain avec mécanismes de checkpointing et d\'exécution de propositions.'
      }),
      category: 'web3',
      tags: ['Solidity', 'OpenZeppelin', 'Governance', 'DAO'],
      image: 'https://images.pexels.com/photos/4663950/pexels-photo-4663950.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-dao-voting.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-dao-voting'
    },
    {
      title: 'Bridge Monitor PRO',
      description: t({
        en: 'Multi-chain interoperability terminal tracking cross-chain transfers between L1 and L2s.',
        fr: 'Terminal d\'interopérabilité multi-chaînes suivant les transferts entre L1 et L2.'
      }),
      category: 'web3',
      tags: ['Viem', 'Multi-client', 'Bridges', 'L2'],
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://alchemy-bridge-monitor.vercel.app/',
      codeLink: 'https://github.com/brainwash2/alchemy-bridge-monitor'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t({ en: 'The \'20 Projects\' Protocol', fr: 'Le Protocole \'20 Projets\'' })}
          </h2>
          <p className="text-gray-400 text-xl">
            {t({
              en: 'Web2 Solutions & Web3 Innovation',
              fr: 'Solutions Web2 & Innovation Web3'
            })}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['all', 'web2', 'web3'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all uppercase ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-700 hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden hover:scale-105 transition-transform duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  project.category === 'web2'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-amber-500/80 text-white'
                }`}>
                  {project.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-gray-400 text-sm font-semibold transition-all group-hover:border-blue-500/50 group-hover:text-white"
                  >
                    <Github size={16} />
                    {t({ en: 'Code', fr: 'Code' })}
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-semibold transition-all"
                  >
                    <ExternalLink size={16} />
                    {t({ en: 'Demo', fr: 'Démo' })}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}