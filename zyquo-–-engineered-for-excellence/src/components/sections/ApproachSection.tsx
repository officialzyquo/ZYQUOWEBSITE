import React, { useState } from 'react';
import {
  Compass,
  Search,
  MapPin,
  Code,
  CheckCircle2,
  Rocket,
  LineChart,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      tagline: 'Understand the business, objectives and requirements',
      icon: Compass,
      description:
        'We immerse ourselves in your corporate mission, customer touchpoints, and commercial milestones. Through stakeholder interviews and competitive teardowns, we uncover the true core requirements before architecting code.',
      deliverables: [
        'Stakeholder Alignment Workshop',
        'Requirements Specification Document (RFC)',
        'Technical Feasibility Assessment',
        'Project Milestone & Timeline Charter',
      ],
      timeframe: 'Sprint 00 · Days 1–5',
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      tagline: 'Identify challenges, opportunities and technical needs',
      icon: Search,
      description:
        'We audit your existing tech stack, database schemas, API dependencies, and security compliance constraints (SOC 2, HIPAA, GDPR). We pinpoint architectural bottlenecks and data integration vectors.',
      deliverables: [
        'Legacy Stack & Data Audit Report',
        'Security & Compliance Review Matrix',
        'API Dependency Graph',
        'Risk Mitigation Register',
      ],
      timeframe: 'Sprint 01 · Week 1',
    },
    {
      num: '03',
      title: 'STRATEGISE',
      tagline: 'Develop a clear execution roadmap',
      icon: MapPin,
      description:
        'We draft the technical blueprints: data schemas, microservice boundaries, UI/UX design tokens in Figma, and infrastructure deployment models. Every sprint deliverable is specified in advance.',
      deliverables: [
        'Full-Fidelity Figma Component System',
        'System Architecture & Database ERD',
        'API Contracts (OpenAPI / Swagger)',
        'Sprint Milestones & Acceptance Criteria',
      ],
      timeframe: 'Sprint 01–02 · Week 2',
    },
    {
      num: '04',
      title: 'ENGINEER',
      tagline: 'Design and build the solution',
      icon: Code,
      description:
        'Our elite engineering team constructs the platform using modern TypeScript, React, Python, or Go. Code is committed directly to private repositories with automated linting, test suites, and continuous staging builds.',
      deliverables: [
        'Clean Modular TypeScript / Python Source Code',
        'High-Performance UI with Glassmorphic Styling',
        'Asynchronous Ingestion & AI Agent Pipelines',
        'Continuous Staging Deployment for Weekly Review',
      ],
      timeframe: 'Sprints 03–06 · Weeks 3–8',
    },
    {
      num: '05',
      title: 'VALIDATE',
      tagline: 'Test functionality, performance and quality',
      icon: CheckCircle2,
      description:
        'We subject the system to rigorous end-to-end integration tests, P99 latency benchmarking, automated security penetration scans, cross-device QA, and accessibility compliance checks.',
      deliverables: [
        'End-to-End Automated Test Suites',
        'Load & Concurrency Stress Test Reports',
        'Penetration Testing & Vulnerability Audit',
        'Client User Acceptance Testing (UAT) Sign-off',
      ],
      timeframe: 'Sprint 07 · Week 9',
    },
    {
      num: '06',
      title: 'DEPLOY',
      tagline: 'Launch the solution',
      icon: Rocket,
      description:
        'Zero-downtime production deployment across multi-region cloud infrastructure (AWS/GCP/Cloudflare). We orchestrate blue-green cutovers, DNS routing, and automated rollback triggers.',
      deliverables: [
        'Production Cloud Infrastructure-as-Code (Terraform)',
        'Zero-Downtime Blue/Green Release Cutover',
        'Global Edge CDN & SSL Configuration',
        'Production APM & Real-Time Alerting Setup',
      ],
      timeframe: 'Sprint 08 · Week 10',
    },
    {
      num: '07',
      title: 'OPTIMISE',
      tagline: 'Support, improve and scale',
      icon: LineChart,
      description:
        'Following launch, we provide ongoing 24/7 SLA infrastructure monitoring, performance tuning, generative search indexing, and continuous feature enhancements to compound your competitive lead.',
      deliverables: [
        '24/7 Production SLA Monitoring & Patching',
        'Performance & Cloud Infrastructure Optimization',
        'Quarterly Architectural Review & Scaling Plan',
        'Continuous Feature Sprint Bandwidth',
      ],
      timeframe: 'Ongoing Lifecycle Partnership',
    },
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            05 · THE SEVEN-STAGE LIFECYCLE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            FROM VISION <br />
            <span className="gold-text-gradient">TO EXECUTION.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed pt-1">
            Our systematic engineering methodology eliminates guesswork, guaranteeing on-time deployment and enterprise-grade reliability.
          </p>
        </div>

        {/* Interactive Timeline Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {stages.map((stage, idx) => {
            const active = activeStage === idx;
            return (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  active
                    ? 'bg-[#D4AF62]/20 border-[#D4AF62] text-white shadow-[0_4px_20px_rgba(212,175,98,0.2)]'
                    : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs ${active ? 'text-[#D4AF62]' : 'text-[#A3A3A3]'}`}>
                    {stage.num}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      active ? 'bg-[#D4AF62]' : 'bg-white/20'
                    }`}
                  />
                </div>
                <div className="font-display font-bold text-xs sm:text-sm mt-3 text-white">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Glassmorphic Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 text-left space-y-8 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#242424]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF62]/10 border border-[#D4AF62]/40 flex items-center justify-center text-[#D4AF62]">
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#D4AF62]">Stage {current.num}</span>
                  <span className="text-xs text-[#A3A3A3]">·</span>
                  <span className="font-mono text-xs text-[#F5EBDD]">{current.timeframe}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F5EBDD] font-medium max-w-md">
              {current.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                Operational Methodology
              </h4>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3 p-5 rounded-xl bg-black/40 border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF62]">
                Concrete Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-[#A3A3A3]">
                {current.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#F5EBDD]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF62] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
