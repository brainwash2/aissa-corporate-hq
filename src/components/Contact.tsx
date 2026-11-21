"use client";

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { submitContactForm } from '@/app/ actions';  // Ensure this import exists for the backend

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t({ en: 'Get in Touch', fr: 'Contactez-moi' })}
          </h2>
          <p className="text-gray-400 text-xl">
            {t({
              en: 'Let\'s build something amazing together',
              fr: 'Construisons quelque chose d\'incroyable ensemble'
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE: THE FORM */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-blue-500/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  {t({ en: 'Name', fr: 'Nom' })}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t({ en: 'Your name', fr: 'Votre nom' })}
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder={t({
                    en: 'Tell me about your project...',
                    fr: 'Parlez-moi de votre projet...'
                  })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={20} />
                    {t({ en: 'Send Message', fr: 'Envoyer le Message' })}
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-mono text-sm">
                  {t({ en: 'Transmission Received. Standby.', fr: 'Transmission Reçue. En attente.' })}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE: DIRECT LINKS */}
          <div className="space-y-8">
            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-blue-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t({ en: 'Direct Contact', fr: 'Contact Direct' })}
              </h3>

              <div className="space-y-4">
                {/* EMAIL */}
                <a
                  href="mailto:contact@brainwash2.io" 
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/40 group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">contact@brainwash2.io</p>
                  </div>
                </a>

                {/* X (TWITTER) */}
                <a
                  href="https://x.com/MoonloungeBrain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/40 group-hover:bg-blue-500/30 transition-colors">
                    <Twitter className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">X / Twitter</p>
                    <p className="text-white font-semibold">@MoonloungeBrain</p>
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/brainwash2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/40 group-hover:bg-blue-500/30 transition-colors">
                    <Github className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-semibold">@brainwash2</p>
                  </div>
                </a>

                {/* LINKEDIN (Placeholder - UPDATE THIS URL) */}
                <a
                  href="https://linkedin.com/in/aissa-mohammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/40 group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold">Aissa Mohammed</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-blue-500/20 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/40">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    {t({ en: 'Location', fr: 'Localisation' })}
                  </h4>
                  <p className="text-gray-400">
                    {t({
                      en: 'Based in Algeria. Operating Globally.',
                      fr: 'Basé en Algérie. Opérant Mondialement.'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400">
            {t({
              en: '© 2025 Aissa Mohammed. All rights reserved.',
              fr: '© 2025 Aissa Mohammed. Tous droits réservés.'
            })}
          </p>
          <p className="text-gray-500 mt-2">
            {t({
              en: 'Built with Next.js 15, TypeScript & Tailwind CSS',
              fr: 'Construit avec Next.js 15, TypeScript & Tailwind CSS'
            })}
          </p>
        </footer>
      </div>
    </section>
  );
}