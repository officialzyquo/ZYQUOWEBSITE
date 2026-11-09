import React from 'react';
import { BRAND } from '../../data/brand';
import { ArrowRight, Cpu, Layers, TrendingUp } from 'lucide-react';
import { PageView } from '../../types';

interface IntroductionSectionProps {
  onDiscover: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onDiscover }) => {
  const differentiators = [
    {
      icon: Cpu,
      title: 'AI-Integrated Architecture',
      description:
        'We do not treat artificial intelligence as a cosmetic add-on. We embed autonomous multi-agent pipelines, private vector indices, and predictive logic directly into core operational systems.',
    },
    {
      icon: Layers,
      title: 'Precision Software Engineering',
      description:
        'Zero-compromise code discipline: TypeScript type safety, sub-50ms API response thresholds, resilient multi-cloud failover, and clean modular maintainability.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Capital Velocity',
      description:
        'Technology is an enterprise multiplier. Every architecture we design is engineered to accelerate operational throughput, reduce manual overhead, and expand margins.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#050505] overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF62]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              01 · INTRODUCING ZYQUO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              BEYOND DIGITAL. <br />
              <span className="gold-text-gradient">ENGINEERED FOR IMPACT.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#F5EBDD] font-normal leading-relaxed">
              ZYQUO brings together intelligent technology, software engineering and strategic execution to help
              businesses build, transform and scale their digital capabilities.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onDiscover}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF62] hover:text-[#F5EBDD] transition-colors group"
              >
                <span>DISCOVER ZYQUO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Differentiators in Apple Glassmorphism Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 text-left group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D4AF62]">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="tracking-widest uppercase">ENGINEERED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              Official Brand Philosophy
            </span>
            <p className="text-lg sm:text-xl font-display font-bold text-white">
              We do not compromise on technical integrity. We engineer platforms built for permanence.
            </p>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            <span className="text-xs font-mono text-[#A3A3A3] block uppercase tracking-wider">
              Company Tagline
            </span>
            <span className="font-display font-extrabold text-[#D4AF62] text-sm sm:text-base tracking-widest mt-0.5 block">
              {BRAND.tagline}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
