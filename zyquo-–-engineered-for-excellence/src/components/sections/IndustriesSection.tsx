import React from 'react';
import { INDUSTRIES } from '../../data/industries';
import { ArrowRight, Activity, GraduationCap, ShoppingBag, Home, Utensils, Briefcase, Zap, Building2 } from 'lucide-react';
import { PageView } from '../../types';

interface IndustriesSectionProps {
  onViewIndustriesPage: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onViewIndustriesPage }) => {
  const getIndustryIcon = (id: string) => {
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
    <section className="relative py-24 px-4 sm:px-8 bg-[#0B0B0B] border-t border-[#242424]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              06 · SECTOR EXPERTISE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              INDUSTRIES <br />
              <span className="gold-text-gradient">WE SERVE.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewIndustriesPage}
            className="text-xs font-semibold text-[#D4AF62] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Explore All Sector Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = getIndustryIcon(ind.id);
            return (
              <div
                key={ind.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] group-hover:scale-110 group-hover:bg-[#D4AF62]/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[#A3A3A3] leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[10px] font-mono text-[#D4AF62] block">
                    {ind.impactMetrics}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ind.sampleUseCases.slice(0, 2).map((useCase, i) => (
                      <span key={i} className="text-[10px] text-[#A3A3A3] bg-white/5 px-2 py-0.5 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
