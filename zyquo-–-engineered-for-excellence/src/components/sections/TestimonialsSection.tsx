import React from 'react';
import { Quote, ShieldCheck, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'The engineering discipline ZYQUO brought to our multi-agent AI pipeline exceeded every expectation. They decoupled our risk ingestion layer and cut our decision latency by nearly 90%.',
      author: 'Marcus Sterling',
      title: 'Chief Risk Officer',
      org: 'Institutional Capital Partners',
      domain: 'FinTech AI & Automation',
      verified: 'Verified Enterprise Client',
    },
    {
      quote:
        'Finding an engineering partner who understands Apple-grade glassmorphism, 3D WebGL physics, and sub-second page performance without sacrificing code maintainability is virtually impossible. ZYQUO delivered precisely that.',
      author: 'Elena Vance',
      title: 'Global Marketing Director',
      org: 'Aura Electric Mobility',
      domain: 'Headless Web & 3D Engineering',
      verified: 'Verified Commercial Client',
    },
    {
      quote:
        'Our clinical telemedicine mobile app required strict HIPAA compliance, Bluetooth LE background telemetry, and zero crashes. ZYQUO built a native-fluid product that clinicians and patients genuinely trust.',
      author: 'Dr. Aris Thorne',
      title: 'VP of Digital Medicine',
      org: 'PulseBio Health Sciences',
      domain: 'Mobile Health Architecture',
      verified: 'Verified Healthcare Client',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#0B0B0B] border-t border-[#242424]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            08 · EXECUTIVE ENDORSEMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            TRUST BUILT <br />
            <span className="gold-text-gradient">THROUGH EXECUTION.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed pt-1">
            Hear directly from the engineering directors, product vice presidents, and founders who build with ZYQUO.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between text-left space-y-6 group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#D4AF62]/40" />
                <p className="text-xs sm:text-sm text-[#F5EBDD] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div>
                  <div className="font-display font-bold text-white text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#A3A3A3]">
                    {t.title} · <span className="text-white">{t.org}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#D4AF62] pt-1">
                  <span>{t.domain}</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    {t.verified}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
