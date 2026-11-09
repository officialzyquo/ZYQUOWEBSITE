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
  Calculator,
  ShieldCheck,
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (serviceId: ServiceId) => void;
  onOpenSolutionFinder: () => void;
  onOpenCostEstimator: () => void;
  onStartProject: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenSolutionFinder,
  onOpenCostEstimator,
  onStartProject,
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
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            ENGINEERING CAPABILITIES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            SPECIALIZED ENGINEERING. <br />
            <span className="gold-text-gradient">MEASURABLE IMPACT.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            We provide full-lifecycle technical craftsmanship across 7 specialized domains. Explore our dedicated service
            blueprints below or test our interactive diagnostic tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={onOpenSolutionFinder}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
            >
              <Sparkles className="w-4 h-4" />
              Launch Smart Solution Finder
            </button>
            <button
              type="button"
              onClick={onOpenCostEstimator}
              className="px-6 py-3 rounded-xl glass-panel text-white hover:text-[#D4AF62] font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#D4AF62]" />
              Project Scope Inquiry
            </button>
          </div>
        </div>

        {/* Services Cards List */}
        <div className="space-y-8">
          {SERVICES.map((svc, idx) => {
            const Icon = getIcon(svc.id);
            return (
              <div
                key={svc.id}
                className="p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left transition-all group flex flex-col lg:flex-row justify-between gap-8"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#D4AF62]">Service 0{idx + 1}</span>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F5EBDD] font-mono">
                    {svc.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  {/* Capabilities tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {svc.capabilities.slice(0, 4).map((cap, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-[#A3A3A3] bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Stats Column */}
                <div className="lg:w-72 shrink-0 flex flex-col justify-between pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 space-y-6">
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] font-mono uppercase text-[#A3A3A3] block">
                        {svc.statsLabel}
                      </span>
                      <span className="text-xl sm:text-2xl font-display font-bold gold-text-gradient mt-1 block">
                        {svc.statsValue}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#A3A3A3] text-center">
                      Typical: <strong className="text-white">{svc.timelineTypical}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(svc.id)}
                    className="w-full py-3 rounded-xl bg-[#D4AF62]/10 hover:bg-[#D4AF62]/20 border border-[#D4AF62]/40 text-[#D4AF62] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 group-hover:bg-[#D4AF62] group-hover:text-[#050505]"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 text-center space-y-4">
          <ShieldCheck className="w-8 h-8 text-[#D4AF62] mx-auto" />
          <h3 className="font-display text-2xl font-bold text-white">Have a Multi-Disciplinary System in Mind?</h3>
          <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-xl mx-auto">
            Most of our premier enterprise builds combine custom web architecture, autonomous AI agents, and mobile
            telemetry into a unified, secure ecosystem.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(212,175,98,0.3)]"
            >
              Start an Engagement (WhatsApp: 9263666014)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
