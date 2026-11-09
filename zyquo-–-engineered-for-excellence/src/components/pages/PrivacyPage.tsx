import React from 'react';
import { BRAND } from '../../data/brand';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen text-left">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 pb-8 border-b border-[#242424]">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            LEGAL PROTOCOLS & GOVERNANCE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#A3A3A3]">
            Last Updated: November 2026 · ZYQUO Global Technologies Inc.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">01. Commitment to Sovereign Data Privacy</h2>
            <p>
              ZYQUO (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to upholding the highest standards of data
              protection, confidentiality, and architectural isolation. This Privacy Policy details our operational
              practices regarding the collection, safeguarding, and strict usage boundaries of information provided
              through zyquo.in, client engagement portals, and our associated engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">02. Proprietary Client Data & AI Non-Retention</h2>
            <p>
              Under no circumstances do we ingest client enterprise data, source code, document embeddings, or proprietary
              business logic into public third-party AI foundation models. All custom AI integrations architected by ZYQUO
              are deployed within private, air-gapped Virtual Private Clouds (VPC) with explicit zero-data-retention (ZDR)
              policies enforced at the API gateway layer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">03. Information We Collect</h2>
            <p>We collect information exclusively when volunteered for commercial discovery:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#F5EBDD]">
              <li>Contact details (Full Name, Business Email Address, Phone/WhatsApp number, Organization).</li>
              <li>Project specifications, architectural requirements, and technical timelines submitted via our interactive builders.</li>
              <li>Technical diagnostics collected strictly for browser compatibility and performance monitoring.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">04. Mutual Non-Disclosure & Security Standards</h2>
            <p>
              All client inquiries and project specifications are treated as confidential commercial trade secrets. Our
              internal engineering infrastructure complies with SOC 2 Type II, ISO 27001, and GDPR security frameworks,
              enforcing multi-factor biometric authentication, end-to-end TLS 1.3 cryptographic transport, and encrypted
              at-rest database storage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">05. Data Inquiries & Contact</h2>
            <p>
              For formal data privacy requests, audit inquiries, or mutual NDA execution, contact our Chief Legal & Security
              Officer directly at{' '}
              <a href={`mailto:${BRAND.contact.executiveEmail}`} className="text-[#D4AF62] underline">
                {BRAND.contact.executiveEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
