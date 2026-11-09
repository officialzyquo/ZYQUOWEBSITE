import React from 'react';
import { ApproachSection } from '../sections/ApproachSection';
import { ShieldCheck, Award, Zap, GitPullRequest, Terminal, CheckCircle2 } from 'lucide-react';

interface ApproachPageProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onStartProject, onBookConsultation }) => {
  const qualityGates = [
    {
      gate: 'Gate 01: Architectural RFC & Threat Model',
      timing: 'Pre-Engineering',
      detail: 'Formal schema verification, failure-mode analysis, and OWASP / SOC 2 compliance checklist signed off.',
    },
    {
      gate: 'Gate 02: Continuous Automated CI/CD Testing',
      timing: 'During Every Sprint',
      detail: 'Unit, integration, and end-to-end regression tests run automatically on every git pull request before merge.',
    },
    {
      gate: 'Gate 03: Latency & Concurrency Stress Audits',
      timing: 'Pre-Deployment',
      detail: 'P99 API response benchmarks under simulated 10x traffic spikes; memory leak profiling on client runtimes.',
    },
    {
      gate: 'Gate 04: Zero-Downtime Blue/Green Release',
      timing: 'Production Launch',
      detail: 'Automated health check verification, DNS edge warm-up, and instant rollback capability in sub-5 seconds.',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            OUR ENGINEERING DISCIPLINE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            ENGINEERING WITHOUT <br />
            <span className="gold-text-gradient">COMPROMISE.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            How ZYQUO transforms visionary business requirements into bulletproof, high-concurrency production software
            with surgical predictability.
          </p>
        </div>

        {/* 7-Stage Interactive Component */}
        <ApproachSection />

        {/* Quality Gates Matrix */}
        <div className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              RIGOROUS QUALITY CONTROLS
            </span>
            <h2 className="font-display text-3xl font-bold text-white">The Four Verification Quality Gates</h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-2xl">
              No code is deployed to client production servers without clearing all four objective automated security and
              performance thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityGates.map((qg, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#D4AF62]">{qg.timing}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">{qg.gate}</h4>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">{qg.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 text-center space-y-6">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Schedule an Architectural Discovery Session
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-lg mx-auto">
            Discuss your system requirements directly with a ZYQUO Principal Engineer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(212,175,98,0.25)] text-center"
            >
              Start a Project (9263666014)
            </a>
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] font-medium text-xs tracking-wider uppercase transition-all text-center"
            >
              Book a Consultation (9263666014)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
