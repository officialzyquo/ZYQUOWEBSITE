import React from 'react';
import { Logo } from './Logo';
import { BRAND } from '../../data/brand';
import { SERVICES } from '../../data/services';
import { PageView, ServiceId } from '../../types';
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPortal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-[#A3A3A3] border-t border-[#242424] pt-16 pb-12 overflow-hidden">
      {/* Subtle Ambient Gold Glow in Top Center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#D4AF62]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#242424]">
          {/* Column 1: Brand & Official Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTaglineText={true} onClick={() => onNavigate('home')} />
            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-sm pt-2">
              ZYQUO brings together intelligent technology, advanced software engineering, and strategic execution to
              help ambitious businesses build, transform, and scale their digital capabilities. Established since 2022 with 4 years of specialized engineering experience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#D4AF62]">
              <span className="px-2.5 py-1 rounded-md bg-[#D4AF62]/10 border border-[#D4AF62]/20 font-semibold">
                Since 2022 · 4 Years of Experience
              </span>
              <span className="flex items-center gap-1.5 text-[#A3A3A3]">
                <Shield className="w-3.5 h-3.5 text-[#D4AF62]" />
                SOC 2 & ISO 27001
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF62]/20 text-white hover:text-[#D4AF62] transition-colors border border-white/10"
                aria-label="Follow ZYQUO on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF62]/20 text-white hover:text-[#D4AF62] transition-colors border border-white/10"
                aria-label="Connect with ZYQUO on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenPortal}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F5EBDD] border border-white/10 transition-colors"
              >
                Client Portal Access
              </button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About ZYQUO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Our Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-white transition-colors"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach')}
                  className="hover:text-white transition-colors"
                >
                  Our 7-Stage Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors"
                >
                  Insights & Research
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('service-detail', s.id)}
                    className="hover:text-[#D4AF62] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Global Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Global Coordination
            </h4>
            <div className="space-y-2.5 text-xs text-[#A3A3A3]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF62] shrink-0 mt-0.5" />
                <span>{BRAND.contact.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF62] shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-white transition-colors">
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF62] shrink-0" />
                <a href={`tel:${BRAND.contact.phone}`} className="hover:text-white transition-colors">
                  {BRAND.contact.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={BRAND.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#D4AF62] font-mono block hover:text-white transition-colors"
                >
                  Instagram: @{BRAND.contact.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left flex-wrap">
            <span>© 2022–{currentYear} ZYQUO Global Technologies Inc.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-[#F5EBDD] font-mono">Since 2022 · 4 Years of Experience</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-[#D4AF62] font-mono font-medium">{BRAND.tagline}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
