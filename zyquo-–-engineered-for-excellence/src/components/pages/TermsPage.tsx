import React from 'react';
import { BRAND } from '../../data/brand';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen text-left">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 pb-8 border-b border-[#242424]">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            LEGAL PROTOCOLS & GOVERNANCE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono text-[#A3A3A3]">
            Last Updated: November 2026 · ZYQUO Global Technologies Inc.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">01. Acceptance of Master Terms</h2>
            <p>
              By accessing the website at zyquo.in, interacting with our diagnostic tools, or entering into a Master
              Services Agreement (MSA) with ZYQUO Global Technologies Inc. (&quot;ZYQUO&quot;), you acknowledge and agree to be bound
              by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">02. 100% Client Intellectual Property Rights</h2>
            <p>
              Unlike conventional development shops that enforce recurring code rent or restrict license transfers, ZYQUO
              operates under a full work-for-hire model. Upon settlement of contract milestones:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#F5EBDD]">
              <li>You own 100% of all custom source code, schemas, and design tokens created for your organization.</li>
              <li>Complete vector graphics, component design systems, and deployment configurations are transferred to your private repositories.</li>
              <li>ZYQUO retains no backdoors, proprietary lock-ins, or unapproved dependencies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">03. Preliminary Scoping & Technical Proposals</h2>
            <p>
              All specifications, architectural scopes, and timelines generated via the interactive Project Scope Inquiry, Solution Finder, or
              Requirements Builder on this website represent non-binding preliminary proposals. Formal commitments are
              exclusively established via executed Master Services Agreements and customized Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">04. Warranties & Post-Launch SLA Support</h2>
            <p>
              All production code delivered by ZYQUO is backed by a 30-day comprehensive post-launch warranty covering defect
              remediation, browser regressions, and API stability. Ongoing enterprise maintenance, uptime monitoring, and
              infrastructure scaling are governed by formal Service Level Agreements (SLAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-white">05. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and any commercial agreements shall be governed and construed in accordance with standard
              commercial arbitration protocols, with legal inquiries addressed to{' '}
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
