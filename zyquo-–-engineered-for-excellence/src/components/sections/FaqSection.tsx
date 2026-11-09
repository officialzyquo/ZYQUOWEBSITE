import React, { useState } from 'react';
import { FAQS } from '../../data/faq';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openIds, setOpenIds] = useState<string[]>(['services', 'cost']);

  const toggle = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#0B0B0B] border-t border-[#242424]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            10 · CLARITY & PROTOCOLS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            FREQUENTLY ASKED <br />
            <span className="gold-text-gradient">QUESTIONS.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed">
            Everything you need to know about engaging ZYQUO, technical agreements, timelines, and deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF62]/30 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white hover:text-[#F5EBDD] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#D4AF62]/20 border-[#D4AF62]' : ''
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${isOpen ? 'text-[#D4AF62]' : 'text-[#A3A3A3]'}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="p-6 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a specialized architectural inquiry?</h4>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Our engineering leadership is available for custom technical consultations.
            </p>
          </div>
          <a
            href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20have%20a%20technical%20question%20regarding%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] text-xs font-semibold hover:brightness-110 transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Consult on WhatsApp (9263666014)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
