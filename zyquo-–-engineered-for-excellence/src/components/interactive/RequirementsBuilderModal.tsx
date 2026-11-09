import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Check, Copy, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/services';

interface RequirementsBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (summary: string) => void;
}

export const RequirementsBuilderModal: React.FC<RequirementsBuilderModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [projectType, setProjectType] = useState('New Green-Field System from Scratch');
  const [complexity, setComplexity] = useState('Enterprise Tier (High availability, multi-tenant, SOC2)');
  const [targetPlatform, setTargetPlatform] = useState('Web & Cloud Platform');
  const [timeline, setTimeline] = useState('6 – 10 Weeks');
  const [technicalRequirements, setTechnicalRequirements] = useState<string[]>([
    'Custom REST / GraphQL APIs',
    'AI / LLM Integration',
    'Role-Based Access Control (RBAC)',
  ]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const techOptions = [
    'Custom REST / GraphQL APIs',
    'AI / LLM Integration',
    'Role-Based Access Control (RBAC)',
    'Real-Time WebSockets / Push Notifications',
    'Stripe / Multi-Tenant Billing Gateway',
    'Cloud-Native Autoscaling (AWS / GCP / K8s)',
    'Offline-First Mobile Sync',
    'Enterprise SSO / SAML Authentication',
  ];

  const toggleTech = (opt: string) => {
    if (technicalRequirements.includes(opt)) {
      setTechnicalRequirements(technicalRequirements.filter((t) => t !== opt));
    } else {
      setTechnicalRequirements([...technicalRequirements, opt]);
    }
  };

  const generateSummaryText = () => {
    return `=== ZYQUO PROJECT REQUIREMENTS SPECIFICATION ===
Service Focus: ${selectedService}
Project Scope: ${projectType}
Architectural Complexity: ${complexity}
Target Platform: ${targetPlatform}
Expected Delivery Timeline: ${timeline}
Core Technical Requirements:
${technicalRequirements.map((r) => `  • ${r}`).join('\n')}
Additional Specification Notes:
${additionalNotes.trim() ? additionalNotes.trim() : 'None provided'}
Generated via ZYQUO Requirements Builder`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Project Requirements Builder"
      subtitle="Configure your project scope, technical specifications, and timeline parameters into a structured architectural brief."
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              01. Service Domain
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#D4AF62] focus:outline-none"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#0B0B0B] text-white">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              02. Project Scope & State
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#D4AF62] focus:outline-none"
            >
              <option value="New Green-Field System from Scratch" className="bg-[#0B0B0B]">
                New Green-Field System from Scratch
              </option>
              <option value="Complete Modernization / Legacy Refactor" className="bg-[#0B0B0B]">
                Complete Modernization / Legacy Refactor
              </option>
              <option value="Advanced Feature Sprint & Scalability Audit" className="bg-[#0B0B0B]">
                Advanced Feature Sprint & Scalability Audit
              </option>
              <option value="Dedicated Retainer / Long-Term Engineering Partner" className="bg-[#0B0B0B]">
                Dedicated Retainer / Long-Term Engineering Partner
              </option>
            </select>
          </div>

          {/* Complexity */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              03. Architectural Complexity
            </label>
            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#D4AF62] focus:outline-none"
            >
              <option value="Essential Tier (Rapid MVP, clean monolithic API)" className="bg-[#0B0B0B]">
                Essential Tier (Rapid MVP, clean monolithic API)
              </option>
              <option value="Professional Tier (High throughput, custom 3D/AI, microservices)" className="bg-[#0B0B0B]">
                Professional Tier (High throughput, custom 3D/AI, microservices)
              </option>
              <option value="Enterprise Tier (High availability, multi-tenant, SOC2)" className="bg-[#0B0B0B]">
                Enterprise Tier (High availability, multi-tenant, SOC2)
              </option>
            </select>
          </div>

          {/* Target Deployment Platform */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              04. Target Deployment Platform
            </label>
            <select
              value={targetPlatform}
              onChange={(e) => setTargetPlatform(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#D4AF62] focus:outline-none"
            >
              <option value="Web & Cloud Platform" className="bg-[#0B0B0B]">Web & Cloud Platform</option>
              <option value="Cross-Platform Mobile (iOS & Android)" className="bg-[#0B0B0B]">Cross-Platform Mobile (iOS & Android)</option>
              <option value="Microservices & Backend Infrastructure" className="bg-[#0B0B0B]">Microservices & Backend Infrastructure</option>
              <option value="Full-Stack Multi-Platform Suite" className="bg-[#0B0B0B]">Full-Stack Multi-Platform Suite</option>
            </select>
          </div>
        </div>

        {/* Expected Timeline */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            05. Expected Launch Velocity
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {['3 – 5 Weeks (Accelerated)', '6 – 10 Weeks (Standard)', '10 – 16 Weeks (Phased)', 'Ongoing Engineering Sprint'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeline(t)}
                className={`p-2.5 text-xs font-medium rounded-xl border text-center transition-all ${
                  timeline === t
                    ? 'bg-[#D4AF62]/20 border-[#D4AF62] text-white shadow-sm'
                    : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Requirements Checkboxes */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            06. Technical Specifications & Integrations
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {techOptions.map((opt) => {
              const active = technicalRequirements.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleTech(opt)}
                  className={`p-2.5 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${
                    active
                      ? 'bg-[#D4AF62]/10 border-[#D4AF62]/50 text-white'
                      : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  <span>{opt}</span>
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      active ? 'bg-[#D4AF62] border-[#D4AF62] text-[#050505]' : 'border-white/30'
                    }`}
                  >
                    {active && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            07. Additional Technical Notes / Objective
          </label>
          <textarea
            rows={3}
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Describe any existing legacy systems, integration dependencies, or compliance requirements (e.g. HIPAA, SOC2, PCI-DSS)..."
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none resize-none"
          />
        </div>

        {/* Action Panel */}
        <div className="p-4 rounded-xl bg-[#0B0B0B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#D4AF62]" />
            <div>
              <p className="text-xs font-semibold text-white">Structured Specification Ready</p>
              <p className="text-[11px] text-[#A3A3A3]">
                {technicalRequirements.length} technical modules tagged · {targetPlatform}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5EBDD] border border-white/10 text-xs font-medium transition-all flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Copied Brief!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Brief
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact(generateSummaryText());
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
            >
              Submit Requirements
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
