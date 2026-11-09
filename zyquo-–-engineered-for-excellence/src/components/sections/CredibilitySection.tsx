import React from 'react';
import { Globe2, ShieldCheck, Layers, Terminal, Sparkles } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  const credibilityStats = [
    {
      metric: '4 Years',
      label: 'Engineering Experience',
      sublabel: 'Delivering Systems Since 2022',
    },
    {
      metric: '180+',
      label: 'Production Systems Engineered',
      sublabel: 'Enterprise SaaS, Web & Mobile',
    },
    {
      metric: '99.99%',
      label: 'Production Architecture Uptime',
      sublabel: 'Multi-Region High Availability',
    },
    {
      metric: '8+',
      label: 'Global Industry Verticals',
      sublabel: 'FinTech, Healthcare, Logistics, Retail',
    },
    {
      metric: '100%',
      label: 'Proprietary IP Ownership Transfer',
      sublabel: 'Zero Vendor Lock-in or Code Rent',
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-8 bg-[#0B0B0B] border-y border-[#242424]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {credibilityStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-[#D4AF62]/30 transition-all text-left group"
            >
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold gold-text-gradient tracking-tight">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1 group-hover:text-[#F5EBDD] transition-colors">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A3A3A3] font-mono mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
