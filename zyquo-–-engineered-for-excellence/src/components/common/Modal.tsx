import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'max-w-xl' | 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-3xl',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Surface */}
      <div
        className={`relative w-full ${maxWidth} my-8 glass-panel-gold rounded-2xl border border-[#D4AF62]/30 p-6 sm:p-8 text-left shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,98,0.12)] z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#242424]">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-[#A3A3A3] mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-[#A3A3A3] hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-6">{children}</div>
      </div>
    </div>
  );
};
