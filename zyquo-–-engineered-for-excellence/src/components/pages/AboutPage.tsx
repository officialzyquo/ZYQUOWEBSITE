import React from 'react';
import { BRAND } from '../../data/brand';
import { Logo } from '../common/Logo';
import { ShieldCheck, Target, Eye, Award, Globe, Cpu, ArrowRight } from 'lucide-react';
import { FounderSection } from '../sections/FounderSection';

interface AboutPageProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject, onBookConsultation }) => {
  const values = [
    {
      title: 'Architectural Precision',
      desc: 'We treat software engineering with the rigorous discipline of structural civil engineering: sub-second latency benchmarks, strict type checking, and zero tolerance for technical debt.',
    },
    {
      title: 'Autonomous Intelligence',
      desc: 'We do not view AI as a superficial novelty. We build autonomous agent pipelines, domain-specific RAG, and predictive models that fundamentally lower operational overhead.',
    },
    {
      title: 'Radical Transparency',
      desc: 'No black-box ambiguity. Our clients enjoy direct commit-level visibility, verifiable sprint milestones, and unfiltered access to lead technical architects.',
    },
    {
      title: 'Capital Velocity',
      desc: 'Every architecture we build is aligned with strategic enterprise valuation: optimizing operational throughput, scaling concurrent users, and multiplying operational margins.',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Page Hero */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#D4AF62]/30 text-xs font-mono text-[#D4AF62] uppercase tracking-widest">
            {BRAND.tagline} · SINCE 2022 · 4 YEARS OF EXPERIENCE
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            WE DON&apos;T JUST BUILD DIGITAL. <br />
            <span className="gold-text-gradient">WE ENGINEER WHAT&apos;S NEXT.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            Established since 2022 with 4 years of specialized engineering experience, ZYQUO was founded on a singular conviction: that modern businesses deserve technology engineered with the
            uncompromising precision, aesthetic mastery, and computational intelligence of world-class aerospace systems.
          </p>
        </div>

        {/* Brand Asset Showcase Box */}
        <div className="p-10 rounded-3xl glass-panel-gold border border-[#D4AF62]/40 text-center flex flex-col items-center justify-center space-y-6">
          <Logo size="lg" showTaglineText={true} />
          <p className="max-w-2xl text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
            The ZQ monogram embodies dual forces: Mathematical Rigor and Dynamic Velocity. Every arc and serif is
            rendered in champagne gold to symbolize timeless value and lasting enterprise craftsmanship.
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              To empower ambitious organizations with proprietary, intelligent digital infrastructure that transforms
              complex operational friction into enduring competitive leverage. We reject generic agency templates in
              favor of bespoke, mission-critical engineering.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              To be the premier global technology partner for forward-thinking enterprises, setting the undisputed
              benchmark where artificial intelligence, refined Apple-caliber aesthetics, and high-concurrency cloud
              engineering converge.
            </p>
          </div>
        </div>

        {/* Executive Principles & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              THE ORIGIN & PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Bridging the Chasm Between Strategy & Deep Engineering.
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              Most digital agencies fall into one of two traps: creative studios that design glossy mockups that crumble
              under real server load, or legacy IT consultancies that produce dated, clunky software that users dread
              using.
            </p>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              ZYQUO exists to eliminate that divide. We unite Silicon Valley-caliber system architects, seasoned AI
              researchers, and elite visual designers into a unified, high-velocity engineering force.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#0B0B0B] border border-[#242424] space-y-4">
            <h4 className="text-xs font-mono text-[#D4AF62] uppercase tracking-wider">
              Core Architectural Invariants
            </h4>
            <div className="space-y-3 text-xs text-[#F5EBDD]">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                <span>
                  <strong>100% Client Intellectual Property:</strong> You own every single commit, docker image, and design token. No recurring code licensing.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                <span>
                  <strong>Private Sovereign Cloud AI:</strong> Your corporate data is isolated in air-gapped private VPCs. Never leaked into public model training.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                <span>
                  <strong>Global Engineering Footprint:</strong> Headquartered in Deoghar Jharkhand, engineering solutions for global enterprises.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Leadership Spotlight */}
        <FounderSection onStartProject={onStartProject} className="!border-0 !p-0 !bg-transparent" />

        {/* Company Core Values */}
        <div className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D4AF62]">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-display text-3xl font-bold text-white">The Values That Govern Every Sprint</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all space-y-2"
              >
                <span className="font-mono text-xs text-[#D4AF62]">Principle 0{i + 1}</span>
                <h4 className="font-display text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 text-center space-y-6">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Ready to Partner With an Engineering Team Built for Excellence?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(212,175,98,0.25)] flex items-center gap-2"
            >
              <span>Start a Project (9263666014)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl glass-panel text-white hover:text-[#D4AF62] font-medium text-xs tracking-wider uppercase transition-all"
            >
              Book a Consultation (9263666014)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
