import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { MessageSquare, ArrowRight, CheckCircle2, User, Phone, Mail } from 'lucide-react';
import { SERVICES } from '../../data/services';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: (notes: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectService, setProjectService] = useState('Website Development');
  const [timeline, setTimeline] = useState('2 – 4 Weeks');
  const [projectDetails, setProjectDetails] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your contact / WhatsApp number.');
      return;
    }
    if (!projectDetails.trim()) {
      setErrorMsg('Please enter a brief description of your project requirements.');
      return;
    }
    setErrorMsg('');

    const message = `Hello ZYQUO! I would like to discuss my project requirements.

*Client & Project Details:*
• Name: ${fullName.trim()}
• Phone / WhatsApp: ${phone.trim()}
• Email: ${email.trim() || 'Not provided'}
• Service Required: ${projectService}
• Target Timeline: ${timeline}
• Requirements Details:
${projectDetails.trim()}

Please share technical recommendations and scope.`;

    const whatsappUrl = `https://wa.me/919263666014?text=${encodeURIComponent(message)}`;
    setGeneratedUrl(whatsappUrl);
    setIsRedirecting(true);

    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // Fallback in UI
    }
  };

  const handleReset = () => {
    setIsRedirecting(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setProjectDetails('');
    setErrorMsg('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Project Scope & Inquiry"
      subtitle="Enter your project details below to connect directly with our engineering team via WhatsApp (9263666014)."
      maxWidth="max-w-2xl"
    >
      {isRedirecting ? (
        <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-display font-bold text-white">Details Logged & Redirecting to WhatsApp</h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-md mx-auto">
              Your inquiry for <span className="text-white font-medium">{projectService}</span> has been prepared.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-left max-w-md mx-auto font-mono text-[#A3A3A3] space-y-1">
            <div><span className="text-white font-sans">Name:</span> {fullName}</div>
            <div><span className="text-white font-sans">Contact:</span> {phone}</div>
            <div><span className="text-white font-sans">Service:</span> {projectService}</div>
            <div><span className="text-white font-sans">Timeline:</span> {timeline}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(37,211,102,0.3)]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Open WhatsApp Chat (9263666014)
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#A3A3A3] hover:text-white text-xs transition-colors border border-white/10"
            >
              Enter New Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#F5EBDD]">
                Your Name <span className="text-[#D4AF62]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none transition-colors"
                />
                <User className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            {/* Customer Contact / WhatsApp Number */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#F5EBDD]">
                Phone / WhatsApp Number <span className="text-[#D4AF62]">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9263666014"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none transition-colors"
                />
                <Phone className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            {/* Customer Email */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#F5EBDD]">Email Address (Optional)</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none transition-colors"
                />
                <Mail className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            {/* Project Service Required */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#F5EBDD]">Service Needed</label>
              <select
                value={projectService}
                onChange={(e) => setProjectService(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#0B0B0B] border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Complete Full-Stack Ecosystem">Complete Full-Stack Ecosystem</option>
                <option value="Custom Architecture Consultation">Custom Architecture Consultation</option>
              </select>
            </div>
          </div>

          {/* Target Timeline */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-medium text-[#F5EBDD]">Expected Delivery Timeline</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['1 – 2 Weeks (Expedited)', '2 – 4 Weeks (Standard)', '1 – 2 Months', 'Flexible'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                    timeline === t
                      ? 'bg-[#D4AF62]/20 border-[#D4AF62] text-white'
                      : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-1 pt-1">
            <label className="text-xs font-medium text-[#F5EBDD]">
              Project Details & Requirements <span className="text-[#D4AF62]">*</span>
            </label>
            <textarea
              rows={3}
              required
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Describe your project, features required, reference websites, or goals..."
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] text-white font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(37,211,102,0.35)]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Submit Details on WhatsApp (9263666014)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#A3A3A3] text-center font-mono">
            Direct instant response via WhatsApp: +91 9263666014
          </p>
        </form>
      )}
    </Modal>
  );
};
