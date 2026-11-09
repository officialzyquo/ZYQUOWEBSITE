import React, { useState } from 'react';
import { BRAND } from '../../data/brand';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello ZYQUO Engineering Team, I would like to discuss an upcoming technology project with your team.'
  );

  const whatsappUrl = `https://wa.me/${BRAND.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col select-none">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="mb-3 p-3.5 rounded-2xl glass-panel-gold border border-[#D4AF62]/40 shadow-2xl max-w-xs text-left animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#242424]">
            <span className="text-xs font-semibold text-white">Direct WhatsApp Concierge</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#A3A3A3] hover:text-white"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-[#A3A3A3] mt-2 leading-relaxed">
            Connect directly with a ZYQUO technology director for immediate project consultation.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 block text-center py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
          >
            Chat on WhatsApp (9263666014)
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contact ZYQUO via WhatsApp"
        className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 group"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="sr-only">Chat on WhatsApp with ZYQUO</span>
      </a>
    </div>
  );
};
