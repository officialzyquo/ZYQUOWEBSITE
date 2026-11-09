import React from 'react';
import {
  Sparkles,
  Cpu,
  Shield,
  MessageSquareCode,
  CheckCircle,
  Users2,
  Server,
} from 'lucide-react';

export const WhyZyquoSection: React.FC = () => {
  const differentiators = [
    {
      num: '01',
      icon: Cpu,
      title: 'AI-Integrated Approach',
      desc: 'We do not paste superficial AI chat wrappers onto legacy code. We integrate server-authoritative agents, fine-tuned models, and private vector infrastructure directly into your operational stack.',
    },
    {
      num: '02',
      icon: MessageSquareCode,
      title: 'Custom-Engineered Solutions',
      desc: 'Every system is engineered in bespoke TypeScript, Python, or Go code tailored to your exact business logic. Zero bloat, zero cookie-cutter templates.',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Business-First Thinking',
      desc: 'Engineering is a capital multiplier. We calculate concrete unit economics, customer acquisition velocity, and margin expansion before writing a single line of architecture.',
    },
    {
      num: '04',
      icon: Users2,
      title: 'Transparent Communication',
      desc: 'No middleman account managers playing telephone. You collaborate directly with principal architects through live sprint builds, GitHub visibility, and dedicated asynchronous channels.',
    },
    {
      num: '05',
      icon: CheckCircle,
      title: 'Quality-Focused Execution',
      desc: 'Rigorous automated CI/CD pipelines, sub-50ms latency thresholds, strict type checking, and comprehensive SOC 2-grade security compliance audits built in by default.',
    },
    {
      num: '06',
      icon: Shield,
      title: 'Long-Term Partnership',
      desc: 'We act as an elite technology extension of your leadership team. Beyond initial launch, we provide ongoing architectural support, scaling sprints, and feature innovation.',
    },
    {
      num: '07',
      icon: Server,
      title: 'Scalable Digital Infrastructure',
      desc: 'Cloud-native architecture designed to absorb sudden traffic surges without degradation: multi-region failover, container orchestration, and elastic autoscaling.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#0B0B0B] border-t border-[#242424]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            04 · THE ZYQUO ADVANTAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            BUILT DIFFERENT. <br />
            <span className="gold-text-gradient">ENGINEERED BETTER.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed pt-1">
            Established since 2022 with 4 years of specialized engineering experience — why visionary founders, enterprise directors, and institutional leaders trust ZYQUO with their most ambitious digital initiatives.
          </p>
        </div>

        {/* Alternating Black and Frosted Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            // Alternating surface style: frosted glass vs deep luxury black
            const isGlass = idx % 2 === 0;

            return (
              <div
                key={item.num}
                className={`p-8 rounded-2xl text-left transition-all group flex flex-col justify-between space-y-5 border ${
                  isGlass
                    ? 'glass-panel border-white/10 hover:border-[#D4AF62]/40'
                    : 'bg-[#050505] border-[#242424] hover:border-[#D4AF62]/40 shadow-inner'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#A3A3A3]">{item.num}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-[#D4AF62] uppercase tracking-wider">
                  Verified Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
