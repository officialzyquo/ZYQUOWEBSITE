import React from 'react';
import { INDUSTRIES } from '../../data/industries';
import {
  Activity,
  GraduationCap,
  ShoppingBag,
  Home,
  Utensils,
  Briefcase,
  Zap,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface IndustriesPageProps {
  onStartProject: (industry?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onStartProject }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return Activity;
      case 'education':
        return GraduationCap;
      case 'ecommerce':
        return ShoppingBag;
      case 'real-estate':
        return Home;
      case 'hospitality':
        return Utensils;
      case 'professional-services':
        return Briefcase;
      case 'startups':
        return Zap;
      case 'enterprise':
        return Building2;
      default:
        return Building2;
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            SECTOR-SPECIFIC ARCHITECTURES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            ENGINEERED FOR <br />
            <span className="gold-text-gradient">CRITICAL INDUSTRIES.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            Every sector has unique regulatory mandates, latency tolerances, and data topologies. We build specialized
            solutions tuned to the realities of your market.
          </p>
        </div>

        {/* Deep Dive Industry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = getIcon(ind.id);
            return (
              <div
                key={ind.id}
                className="p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF62] bg-[#D4AF62]/10 px-3 py-1 rounded-full border border-[#D4AF62]/20">
                      {ind.impactMetrics}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-2 space-y-2 border-t border-white/5">
                    <span className="text-xs font-mono uppercase text-white block font-medium">
                      Core Specialized Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#F5EBDD]">
                      {ind.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF62] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A3A3A3]">
                    <span>Use Cases:</span>
                    <span className="text-white">{ind.sampleUseCases.join(' · ')}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartProject(`Inquiry for ${ind.name} solution`)}
                    className="text-xs font-semibold text-[#D4AF62] hover:text-white flex items-center gap-1 transition-colors shrink-0"
                  >
                    <span>Consult on {ind.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
