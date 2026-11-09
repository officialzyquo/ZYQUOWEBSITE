import React from 'react';
import { ShieldCheck, GraduationCap, Award, MessageSquare, Mail, ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface FounderSectionProps {
  onStartProject?: () => void;
  className?: string;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onStartProject, className = '' }) => {
  const founderImage = '/assets/aistudio/WhatsApp_Image_2026-11-09_at_4.03.56_PM_eecb7bf1.jpeg';

  const highlights = [
    {
      icon: GraduationCap,
      label: "Master's Degree",
      detail: 'Artificial Intelligence',
    },
    {
      icon: Terminal,
      label: '5+ Years Hands-on',
      detail: 'Software & Web Engineering',
    },
    {
      icon: ShieldCheck,
      label: 'Architecture Leadership',
      detail: 'Custom SaaS & Cloud Systems',
    },
    {
      icon: Sparkles,
      label: 'Dual Advantage',
      detail: 'AI Precision & Growth Marketing',
    },
  ];

  return (
    <section className={`relative py-24 px-4 sm:px-8 bg-[#050505] overflow-hidden border-t border-[#242424] ${className}`}>
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF62]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-2xl">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            FOUNDER & ARCHITECTURAL LEADERSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            MEET THE <br />
            <span className="gold-text-gradient">FOUNDER & TECHNICAL LEAD.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed">
            Direct executive engineering oversight. Every client project is guided by foundational AI scholarship and real-world full-stack execution.
          </p>
        </div>

        {/* Founder Card Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#D4AF62]/30 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {/* Subtle Top-Right Ambient Badge */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF62]/10 rounded-bl-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group w-full max-w-sm">
                {/* Metallic Gold Glow Frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#D4AF62]/40 via-[#B58A3A]/20 to-transparent blur-md group-hover:blur-lg transition-all" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF62]/40 bg-[#0B0B0B] aspect-[4/5] shadow-2xl">
                  <img
                    src={founderImage}
                    alt="Pranav Kumar — Founder & Technical Lead at ZYQUO"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  
                  {/* On-image Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="font-display text-lg font-bold text-white leading-tight">Pranav Kumar</p>
                    <p className="text-xs font-mono text-[#D4AF62] uppercase tracking-wider">Founder & Technical Lead</p>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Guarantee */}
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#A3A3A3]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF62]" />
                <span>100% Direct Engineering Oversight</span>
              </div>
            </div>

            {/* Right: Bio & Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-1.5 border-b border-white/10 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF62]/10 border border-[#D4AF62]/30 text-xs font-mono text-[#D4AF62]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Leadership</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Pranav Kumar
                </h3>
                <p className="text-sm font-mono text-[#D4AF62] uppercase tracking-wider font-semibold">
                  Founder &amp; Technical Lead
                </p>
              </div>

              {/* Exact User Requested Bio Text */}
              <div className="space-y-4 text-sm sm:text-base text-[#F5EBDD] leading-relaxed">
                <p className="text-white/90 font-medium">
                  Backed by a Master’s degree in Artificial Intelligence and 5+ years of hands-on experience in software engineering and web development, Pranav Kumar builds at the intersection of complex technology and market growth.
                </p>
                <p className="text-[#A3A3A3] text-xs sm:text-sm leading-relaxed">
                  Having architected custom SaaS platforms, scalable web applications, and data-driven performance marketing campaigns, Pranav leads the company with a clear philosophy: technology should not just exist—it should scale businesses. By combining AI precision, engineering rigor, and ROI-focused digital marketing, he helps brands build smarter tools and acquire customers faster.
                </p>
              </div>

              {/* Founder Credential Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF62]/30 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#D4AF62] mb-1.5" />
                      <p className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs font-semibold text-white mt-0.5">{item.detail}</p>
                    </div>
                  );
                })}
              </div>

              {/* Connect / Inquire CTA Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/919263666014?text=Hello%20Pranav%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20ZYQUO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs sm:text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Pranav on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="mailto:officialzyquo@gmail.com?subject=Strategic%20Engineering%20Inquiry%20for%20Pranav%20Kumar"
                  className="px-5 py-3 rounded-xl glass-panel text-[#F5EBDD] hover:text-[#D4AF62] text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 border border-white/10"
                >
                  <Mail className="w-4 h-4 text-[#D4AF62]" />
                  <span>officialzyquo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
