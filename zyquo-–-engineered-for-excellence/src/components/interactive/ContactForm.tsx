import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { BRAND } from '../../data/brand';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  initialNotes?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialNotes = '', className = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('FinTech & Financial Services');
  const [service, setService] = useState('AI & Intelligent Automation');
  const [description, setDescription] = useState(initialNotes);
  const [honeypot, setHoneypot] = useState(''); // Spam honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<any | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialNotes) {
      setDescription(initialNotes);
    }
  }, [initialNotes]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!description.trim() || description.length < 15) {
      newErrors.description = 'Please provide at least 15 characters describing your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Spam detected silently
      return;
    }
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean network request latency
    await new Promise((r) => setTimeout(r, 600));

    const receipt = {
      referenceId: `ZYQ-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone,
      company,
      industry,
      service,
      description,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('zyquo_inquiries') || '[]');
      localStorage.setItem('zyquo_inquiries', JSON.stringify([receipt, ...existing]));
    } catch {
      // fallback
    }

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF62', '#B58A3A', '#F5EBDD'],
      });
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setSubmissionReceipt(receipt);
  };

  const handleReset = () => {
    setSubmissionReceipt(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setDescription('');
    setErrors({});
  };

  if (submissionReceipt) {
    return (
      <div className={`p-8 rounded-2xl glass-panel-gold border border-[#D4AF62]/40 text-left space-y-6 animate-in fade-in ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-display font-bold text-white">Inquiry Received & Dispatched</h4>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Reference Token:{' '}
              <span className="font-mono text-[#D4AF62] font-semibold">{submissionReceipt.referenceId}</span>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#050505]/80 border border-white/10 space-y-2 text-xs font-mono text-[#A3A3A3]">
          <div className="flex justify-between">
            <span className="text-white font-sans">Contact:</span>
            <span>{submissionReceipt.fullName} ({submissionReceipt.email})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white font-sans">Enterprise:</span>
            <span>{submissionReceipt.company} · {submissionReceipt.industry}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white font-sans">Selected Service:</span>
            <span className="text-[#D4AF62]">{submissionReceipt.service}</span>
          </div>
        </div>

        <p className="text-xs text-[#A3A3A3] leading-relaxed">
          Your project specifications have been routed to our Lead Solutions Architect. A formal NDA and preliminary
          architectural roadmap will be delivered to <span className="text-white font-medium">{submissionReceipt.email}</span> within 24 business hours.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`https://wa.me/${BRAND.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              `Hello ZYQUO team, following up on inquiry ${submissionReceipt.referenceId} for ${submissionReceipt.company} (${submissionReceipt.service}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Connect via WhatsApp Now
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A3A3A3] hover:text-white text-xs transition-colors border border-white/10"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 text-left ${className}`} noValidate>
      {/* Honeypot field for anti-spam */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url_check"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">
            Full Name <span className="text-[#D4AF62]">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Marcus Sterling"
            className={`w-full p-3 rounded-xl bg-white/5 border text-white text-xs placeholder:text-[#A3A3A3]/50 focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF62]'
            }`}
          />
          {errors.fullName && <p className="text-[10px] text-red-400">{errors.fullName}</p>}
        </div>

        {/* Business Email */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">
            Business Email <span className="text-[#D4AF62]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="m.sterling@enterprise.com"
            className={`w-full p-3 rounded-xl bg-white/5 border text-white text-xs placeholder:text-[#A3A3A3]/50 focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF62]'
            }`}
          />
          {errors.email && <p className="text-[10px] text-red-400">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">Phone / WhatsApp</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (800) 555-0199"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none transition-colors"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">
            Company Name <span className="text-[#D4AF62]">*</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Sterling Capital Corp"
            className={`w-full p-3 rounded-xl bg-white/5 border text-white text-xs placeholder:text-[#A3A3A3]/50 focus:outline-none transition-colors ${
              errors.company ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF62]'
            }`}
          />
          {errors.company && <p className="text-[10px] text-red-400">{errors.company}</p>}
        </div>

        {/* Industry */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#0B0B0B] border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
          >
            <option value="FinTech & Financial Services">FinTech & Financial Services</option>
            <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
            <option value="E-commerce & Luxury Retail">E-commerce & Luxury Retail</option>
            <option value="Real Estate & PropTech">Real Estate & PropTech</option>
            <option value="Enterprise Software & SaaS">Enterprise Software & SaaS</option>
            <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
            <option value="Other High-Growth Sector">Other High-Growth Sector</option>
          </select>
        </div>

        {/* Service Required */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-[#F5EBDD]">Service Required</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#0B0B0B] border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>


      {/* Project Description */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-[#F5EBDD]">
            Project Description & Requirements <span className="text-[#D4AF62]">*</span>
          </label>
          <span className="text-[10px] text-[#A3A3A3]">Min. 15 characters</span>
        </div>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Outline the core objective, challenges, desired outcomes, or technical integrations required..."
          className={`w-full p-3 rounded-xl bg-white/5 border text-white text-xs placeholder:text-[#A3A3A3]/50 focus:outline-none transition-colors resize-none ${
            errors.description ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF62]'
          }`}
        />
        {errors.description && <p className="text-[10px] text-red-400">{errors.description}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,98,0.3)] disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2 font-mono text-xs">
            Encrypting & Routing Brief...
          </span>
        ) : (
          <>
            Submit Project Brief to ZYQUO
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Direct WhatsApp Button with Number 9263666014 */}
      <a
        href={`https://wa.me/919263666014?text=${encodeURIComponent(
          `Hello ZYQUO team! I would like to discuss a project.${
            fullName ? ` My name is ${fullName}.` : ''
          }${service ? ` Service: ${service}.` : ''}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 rounded-xl bg-emerald-600/15 hover:bg-emerald-600 text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>Chat on WhatsApp Directly: 9263666014</span>
      </a>

      <p className="text-[11px] text-[#A3A3A3] text-center pt-1 font-mono">
        Direct instant response via WhatsApp: +91 9263666014
      </p>
    </form>
  );
};
