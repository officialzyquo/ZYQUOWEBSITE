import React, { useState } from 'react';
import { SERVICES } from '../../data/services';
import { ServiceId } from '../../types';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Terminal,
  Clock,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: ServiceId;
  onBackToServices: () => void;
  onStartProject: (serviceName?: string) => void;
  onOpenSolutionFinder: () => void;
  onOpenCostEstimator: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBackToServices,
  onStartProject,
  onOpenSolutionFinder,
  onOpenCostEstimator,
}) => {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToServices}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3A3] hover:text-[#D4AF62] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <span className="text-[11px] font-mono text-[#D4AF62] tracking-wider uppercase border border-[#D4AF62]/30 px-2.5 py-1 rounded-full">
            Service Line {SERVICES.findIndex((s) => s.id === service.id) + 1} of 07
          </span>
        </div>

        {/* 1. Premium Service Hero */}
        <div className="text-left space-y-6 max-w-4xl">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              {service.tagline}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              {service.title}
            </h1>
          </div>

          <p className="text-base sm:text-xl text-[#F5EBDD] font-normal leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://wa.me/919263666014?text=${encodeURIComponent(`Hello ZYQUO team! I want to start a ${service.title} project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_25px_rgba(212,175,98,0.25)]"
            >
              <span>Start {service.title} Project (WhatsApp: 9263666014)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenCostEstimator}
              className="px-6 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] hover:border-[#D4AF62]/40 text-xs font-medium tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF62]" />
              Quick Scope Inquiry
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A3A3A3] font-mono border-t border-[#242424]">
            <div>
              <span className="text-[#D4AF62] block font-semibold">{service.statsValue}</span>
              <span>{service.statsLabel}</span>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white block font-semibold">{service.timelineTypical}</span>
              <span>Standard Delivery Velocity</span>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white block font-semibold">100% Client Ownership</span>
              <span>Proprietary IP Transfer</span>
            </div>
          </div>
        </div>

        {/* 2. Deep Explanation */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 text-left space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF62]">
            Detailed Architectural Overview
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* 3 & 4. Business Problems Solved & Our Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Problems */}
          <div className="p-8 rounded-2xl bg-[#0B0B0B] border border-red-500/20 space-y-4">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Core Business Bottlenecks Solved</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3A3A3]">
              {service.businessProblems.map((prob, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-8 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 space-y-4">
            <div className="flex items-center gap-2 text-[#D4AF62] text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solutions Deployed</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F5EBDD]">
              {service.solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. Key Capabilities */}
        <div className="space-y-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              TECHNICAL SCOPE
            </span>
            <h3 className="font-display text-2xl font-bold text-white">Capabilities & Specifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-4 rounded-xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62] shrink-0 text-xs font-mono">
                  {i + 1}
                </div>
                <span className="text-xs sm:text-sm text-white font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Concrete Deliverables */}
        <div className="p-8 rounded-2xl glass-panel border border-white/10 text-left space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
            END-OF-SPRINT GUARANTEES
          </span>
          <h3 className="font-display text-2xl font-bold text-white">Tangible Deliverables Handed Over</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.deliverables.map((del, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5EBDD]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Technology Stack */}
        <div className="space-y-4 text-left">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
            INFRASTRUCTURE MATRIX
          </span>
          <h3 className="font-display text-2xl font-bold text-white">Technologies Deployed for {service.title}</h3>

          <div className="flex flex-wrap gap-2 pt-2">
            {service.techStack.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-white flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF62]" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Service FAQs */}
        <div className="space-y-4 text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              CLARIFICATIONS
            </span>
            <h3 className="font-display text-2xl font-bold text-white">Service Specific FAQ</h3>
          </div>

          <div className="space-y-3 pt-2">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl glass-panel border border-white/10 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF62] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed border-t border-white/5 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 9. Strong Service-Specific CTA */}
        <div className="p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/40 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF62]">
              DEPLOY YOUR {service.title.toUpperCase()}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Engineer Your Competitive Advantage?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-lg mx-auto">
              Our principal engineers will prepare a detailed architectural proposal and delivery schedule for your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919263666014?text=${encodeURIComponent(`Hello ZYQUO team! I want to start a ${service.title} project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_25px_rgba(212,175,98,0.3)]"
            >
              <span>Start {service.title} Project (WhatsApp: 9263666014)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onBackToServices}
              className="px-6 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] text-xs font-medium tracking-wider uppercase transition-all"
            >
              View Other Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
