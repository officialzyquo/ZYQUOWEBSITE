import React from 'react';
import { SERVICES } from '../../data/services';
import { ServiceId } from '../../types';
import {
  Bot,
  Globe,
  Smartphone,
  Cloud,
  Code2,
  TrendingUp,
  Palette,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServicesGridSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
  onOpenSolutionFinder: () => void;
}

export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({
  onSelectService,
  onOpenSolutionFinder,
}) => {
  const getIcon = (id: ServiceId) => {
    switch (id) {
      case 'ai-automation':
        return Bot;
      case 'website-development':
        return Globe;
      case 'mobile-development':
        return Smartphone;
      case 'saas-development':
        return Cloud;
      case 'custom-software':
        return Code2;
      case 'digital-marketing':
        return TrendingUp;
      case 'branding-strategy':
        return Palette;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#0B0B0B] border-t border-[#242424]">
      {/* Background Accent */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF62]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              02 · WHAT WE ENGINEER
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              TECHNOLOGY THAT <br />
              <span className="gold-text-gradient">MOVES BUSINESS FORWARD.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSolutionFinder}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-[#D4AF62] border border-[#D4AF62]/30 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Not sure which you need? Try Solution Finder
            </button>
          </div>
        </div>

        {/* Bento Grid Layout of 7 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, index) => {
            const Icon = getIcon(svc.id);
            const isFeatured = svc.id === 'ai-automation' || svc.id === 'saas-development';

            return (
              <div
                key={svc.id}
                className={`p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between text-left group relative overflow-hidden ${
                  isFeatured ? 'lg:col-span-1 border-[#D4AF62]/20' : ''
                }`}
              >
                {/* Subtle Card Header */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] group-hover:scale-110 group-hover:bg-[#D4AF62]/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#A3A3A3] tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#D4AF62] font-mono mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
                    {svc.shortDescription}
                  </p>

                  {/* Key Capabilities Preview */}
                  <div className="pt-2 space-y-1.5 border-t border-white/5">
                    {svc.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="text-[11px] text-[#A3A3A3] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF62]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#A3A3A3]">
                    {svc.statsLabel}: <strong className="text-white">{svc.statsValue}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectService(svc.id)}
                    className="text-xs font-semibold text-[#D4AF62] group-hover:text-[#F5EBDD] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
