import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { BRAND } from '../../data/brand';
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck, Cpu } from 'lucide-react';
import { PageView } from '../../types';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenSolutionFinder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
  onOpenSolutionFinder,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden bg-[#050505]">
      {/* 3D WebGL Canvas Layer */}
      <Hero3DCanvas />

      {/* Atmospheric Radial Gold Lighting Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF62]/7 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#B58A3A]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#D4AF62]/30 shadow-[0_4px_20px_rgba(212,175,98,0.12)] animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Cpu className="w-3.5 h-3.5 text-[#D4AF62]" />
          <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#F5EBDD] font-medium">
            {BRAND.tagline} · SINCE 2022 · 4 YEARS OF EXPERIENCE
          </span>
        </div>

        {/* Main Cinematic Headline */}
        <div className="space-y-3">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            WE ENGINEER <br />
            <span className="gold-text-gradient">WHAT&apos;S NEXT.</span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-base sm:text-xl text-[#F5EBDD] font-medium leading-relaxed text-balance">
            {BRAND.heroSubheadline}
          </p>
          <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-xl mx-auto text-balance">
            {BRAND.heroSupporting}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <a
            href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] via-[#E2C37E] to-[#B58A3A] text-[#050505] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_30px_rgba(212,175,98,0.35)] flex items-center justify-center gap-2 group"
          >
            <span>START A PROJECT (9263666014)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] hover:border-[#D4AF62]/40 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
          >
            EXPLORE OUR WORK
          </button>

          <button
            type="button"
            onClick={onOpenSolutionFinder}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D4AF62] border border-[#D4AF62]/30 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Solution Diagnostic
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 flex flex-col items-center gap-2 text-xs text-[#A3A3A3]/60 animate-bounce">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 text-[#D4AF62]" />
        </div>
      </div>
    </section>
  );
};
