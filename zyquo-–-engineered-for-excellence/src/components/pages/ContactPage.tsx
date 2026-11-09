import React from 'react';
import { ContactForm } from '../interactive/ContactForm';
import { BRAND } from '../../data/brand';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Calendar,
  Sparkles,
  ShieldCheck,
  Instagram,
  Linkedin,
} from 'lucide-react';

interface ContactPageProps {
  initialNotes?: string;
  onOpenConsultation: () => void;
  onOpenCostEstimator: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialNotes = '',
  onOpenConsultation,
  onOpenCostEstimator,
}) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            START A PROJECT · DIRECT ENGAGEMENT
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            LET&apos;S ENGINEER <br />
            <span className="gold-text-gradient">YOUR ADVANTAGE.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            Initiate a conversation with our engineering leadership. Every inquiry is reviewed by a Principal Architect and
            treated under strict mutual confidentiality.
          </p>
        </div>

        {/* Main Grid: Form on Left, Direct Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Working Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel-gold border border-[#D4AF62]/30 text-left space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#D4AF62] uppercase tracking-wider">
                Project Specification Form
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Submit Your Project Brief
              </h3>
              <p className="text-xs text-[#A3A3A3]">
                Provide your requirements below for an initial technical architecture assessment.
              </p>
            </div>

            <ContactForm initialNotes={initialNotes} />
          </div>

          {/* Right Column: Direct Channels & Action Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Quick Consultation Card */}
            <div className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Request Executive Consultation
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Prefer a face-to-face video architectural discovery? Pick your preferred date and time on our calendar.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-[#D4AF62] border border-white/10 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                Open Consultation Calendar
              </button>
            </div>

            {/* Quick Scope Inquiry Card */}
            <div className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-center text-[#D4AF62]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Project Scope Inquiry
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Configure your engineering requirements, platform tiers, and timeline to initiate an instant WhatsApp consultation.
              </p>
              <button
                type="button"
                onClick={onOpenCostEstimator}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-[#D4AF62] border border-white/10 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                Launch Scope Inquiry
              </button>
            </div>

            {/* Verified Global Coordinates */}
            <div className="p-8 rounded-3xl bg-[#0B0B0B] border border-[#242424] space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF62]">
                Global Contact Directory
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Headquarters</span>
                    <span className="text-[#A3A3A3]">{BRAND.contact.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF62] shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">Executive Partnerships</span>
                    <a href={`mailto:${BRAND.contact.executiveEmail}`} className="text-[#A3A3A3] hover:text-white">
                      {BRAND.contact.executiveEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF62] shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">Toll-Free Direct</span>
                    <a href={`tel:${BRAND.contact.phone}`} className="text-[#A3A3A3] hover:text-white">
                      {BRAND.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">WhatsApp Direct Concierge</span>
                    <a
                      href={`https://wa.me/${BRAND.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      {BRAND.contact.whatsappDisplay} (Chat Now)
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-4 text-xs">
                <a
                  href={BRAND.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#D4AF62] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  @{BRAND.contact.instagram}
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={BRAND.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#D4AF62] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
