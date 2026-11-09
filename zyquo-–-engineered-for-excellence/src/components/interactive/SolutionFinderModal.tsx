import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { SERVICES } from '../../data/services';
import { Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { ServiceId } from '../../types';

interface SolutionFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: ServiceId) => void;
  onOpenContact: (prefillNote?: string) => void;
}

export const SolutionFinderModal: React.FC<SolutionFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onOpenContact,
}) => {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('FinTech / Financial Services');
  const [companySize, setCompanySize] = useState('Mid-Market (50–250 employees)');
  const [primaryChallenge, setPrimaryChallenge] = useState('Manual workflows & operational inefficiency');
  const [desiredOutcome, setDesiredOutcome] = useState('Deploy intelligent AI automation & lower overhead');
  const [techPreference, setTechPreference] = useState('Cloud-Native & Custom API Architecture');

  const handleReset = () => {
    setStep(1);
  };

  // Determine top 2 recommendations based on selected responses
  const getRecommendations = () => {
    if (primaryChallenge.includes('Manual workflows') || desiredOutcome.includes('AI automation')) {
      return [SERVICES[0], SERVICES[4]]; // AI & Automation, Custom Software
    }
    if (desiredOutcome.includes('SaaS platform') || primaryChallenge.includes('scaling software')) {
      return [SERVICES[3], SERVICES[4]]; // SaaS Development, Custom Software
    }
    if (desiredOutcome.includes('mobile application')) {
      return [SERVICES[2], SERVICES[1]]; // Mobile, Website
    }
    if (desiredOutcome.includes('brand authority') || primaryChallenge.includes('visibility')) {
      return [SERVICES[6], SERVICES[5]]; // Branding, Digital Growth
    }
    return [SERVICES[1], SERVICES[0]]; // Website, AI
  };

  const recommendations = getRecommendations();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Smart Solution Finder"
      subtitle="Answer 5 brief diagnostic questions to discover the optimal ZYQUO engineering architecture."
      maxWidth="max-w-3xl"
    >
      {step <= 5 ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs text-[#A3A3A3] pb-2 border-b border-[#242424]">
            <span className="font-mono text-[#D4AF62]">Diagnostic Stage 0{step} of 05</span>
            <span>{Math.round((step / 5) * 100)}% Complete</span>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What industry does your enterprise operate in?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'FinTech / Financial Services',
                  'Healthcare & Life Sciences',
                  'E-commerce & Luxury Retail',
                  'Enterprise Software & B2B SaaS',
                  'Real Estate & PropTech',
                  'Supply Chain & Industrial Logistics',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setIndustry(item)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                      industry === item
                        ? 'bg-[#D4AF62]/15 border-[#D4AF62] text-white shadow-[0_0_15px_rgba(212,175,98,0.2)]'
                        : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What is your current company or division scale?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'High-Growth Seed / Series A Startup',
                  'Mid-Market (50–250 employees)',
                  'Enterprise (250–1,000 employees)',
                  'Global Conglomerate (1,000+ employees)',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCompanySize(item)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                      companySize === item
                        ? 'bg-[#D4AF62]/15 border-[#D4AF62] text-white shadow-[0_0_15px_rgba(212,175,98,0.2)]'
                        : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What is your primary operational or technical challenge?</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  'Manual workflows & operational inefficiency across fragmented legacy software',
                  'Sluggish, outdated web or mobile platform hurting user conversion & brand authority',
                  'Need to architect a high-concurrency SaaS product with multi-tenant billing',
                  'Inability to capture organic enterprise pipeline via modern AEO & search engines',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPrimaryChallenge(item)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                      primaryChallenge === item
                        ? 'bg-[#D4AF62]/15 border-[#D4AF62] text-white shadow-[0_0_15px_rgba(212,175,98,0.2)]'
                        : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What is your highest-priority strategic outcome?</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  'Deploy intelligent AI automation & lower operational overhead by 40%+',
                  'Launch a flagship digital presence that redefines market leadership and doubles inbound pipeline',
                  'Build and deploy a scalable mobile application with native fluidity and offline support',
                  'Launch an enterprise B2B SaaS platform with metered billing and SOC 2 security compliance',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDesiredOutcome(item)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                      desiredOutcome === item
                        ? 'bg-[#D4AF62]/15 border-[#D4AF62] text-white shadow-[0_0_15px_rgba(212,175,98,0.2)]'
                        : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">What technical architecture preference applies?</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  'Cloud-Native & Custom API Architecture (TypeScript / React / Python / AWS / GCP)',
                  'Multi-Agent LLM Autonomous Orchestration & Private Vector Storage',
                  'Headless Web Experience with Sub-Second Edge Global Delivery',
                  'Full Custom End-to-End Build with 100% IP Transfer & On-Premise Support',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTechPreference(item)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                      techPreference === item
                        ? 'bg-[#D4AF62]/15 border-[#D4AF62] text-white shadow-[0_0_15px_rgba(212,175,98,0.2)]'
                        : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stepper Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#242424]">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm text-[#A3A3A3] hover:text-white transition-colors"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
            >
              {step === 5 ? 'Generate Solution' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-4 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#D4AF62] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Diagnostic Synthesis Complete</h4>
              <p className="text-xs text-[#A3A3A3] mt-0.5">
                Tailored for {industry} · {companySize}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs uppercase font-mono tracking-wider text-[#A3A3A3]">
              Recommended Architectural Engagements
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendations.map((svc) => (
                <div
                  key={svc.id}
                  className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-white/10 hover:border-[#D4AF62]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#D4AF62] tracking-wider uppercase">
                      Primary Fit
                    </span>
                    <h6 className="font-display text-lg font-bold text-white mt-1">
                      {svc.title}
                    </h6>
                    <p className="text-xs text-[#A3A3A3] mt-2 line-clamp-3">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#F5EBDD] font-mono">
                      Typical: {svc.timelineTypical.split(' ')[0]}–{svc.timelineTypical.split(' ')[2]} wks
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectService(svc.id);
                      }}
                      className="text-xs font-semibold text-[#D4AF62] hover:underline flex items-center gap-1"
                    >
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Summary Box */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#A3A3A3]">
            <div className="flex justify-between">
              <span className="text-white font-medium">Core Challenge:</span>
              <span className="text-right text-[#F5EBDD] max-w-xs">{primaryChallenge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Targeted Outcome:</span>
              <span className="text-right text-[#F5EBDD] max-w-xs">{desiredOutcome}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Architecture:</span>
              <span className="text-right text-[#F5EBDD] max-w-xs">{techPreference}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#242424]">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#A3A3A3] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Diagnostic
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact(
                  `Smart Solution Finder Diagnostic:\n- Industry: ${industry}\n- Scale: ${companySize}\n- Primary Challenge: ${primaryChallenge}\n- Outcome: ${desiredOutcome}\n- Recommended Services: ${recommendations.map((r) => r.title).join(', ')}`
                );
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(212,175,98,0.3)] flex items-center justify-center gap-2"
            >
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
