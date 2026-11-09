import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/brand';

interface CtaSectionProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
  onOpenCostEstimator: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onStartProject,
  onBookConsultation,
  onOpenCostEstimator,
}) => {
  return (
    <section className="relative py-28 px-4 sm:px-8 bg-[#050505] overflow-hidden">
      {/* Dramatic Warm Champagne Gold Atmospheric Flare */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D4AF62]/15 via-[#B58A3A]/10 to-transparent rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-10 sm:p-16 rounded-3xl glass-panel-gold border border-[#D4AF62]/40 text-center space-y-8 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,98,0.15)]">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF62] font-semibold">
              {BRAND.tagline}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              YOUR NEXT BIG IDEA <br />
              <span className="gold-text-gradient">DESERVES TO BE ENGINEERED.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-xl mx-auto leading-relaxed text-balance">
            Let&apos;s turn your vision into a digital solution built for what&apos;s next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] via-[#E2C37E] to-[#B58A3A] text-[#050505] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_30px_rgba(212,175,98,0.35)] flex items-center justify-center gap-2 group"
            >
              <span>START A PROJECT (9263666014)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] hover:border-[#D4AF62]/50 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D4AF62]" />
              <span>BOOK A CONSULTATION (9263666014)</span>
            </a>

            <button
              type="button"
              onClick={onOpenCostEstimator}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D4AF62] border border-[#D4AF62]/30 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Project Scope Inquiry
            </button>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A3A3A3] font-mono">
            <span>· NDA Protected</span>
            <span>· 100% IP Ownership</span>
            <span>· SOC 2 Standard Architecture</span>
            <span>· Direct Technical Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
};
