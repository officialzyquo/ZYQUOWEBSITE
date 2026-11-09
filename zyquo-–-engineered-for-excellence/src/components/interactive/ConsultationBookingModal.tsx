import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Calendar, Clock, CheckCircle2, User, Mail, Building, Phone, ArrowRight } from 'lucide-react';
import { BRAND } from '../../data/brand';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDate, setSelectedDate] = useState('2026-11-12');
  const [selectedTime, setSelectedTime] = useState('14:00 (EST / New York)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '10:00 (EST / New York)',
    '11:30 (EST / New York)',
    '14:00 (EST / New York)',
    '15:30 (EST / New York)',
    '17:00 (EST / New York)',
  ];

  const availableDates = [
    { date: '2026-11-12', label: 'Thu, Nov 12' },
    { date: '2026-11-13', label: 'Fri, Nov 13' },
    { date: '2026-11-16', label: 'Mon, Nov 16' },
    { date: '2026-11-17', label: 'Tue, Nov 17' },
    { date: '2026-11-18', label: 'Wed, Nov 18' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }
    setErrorMsg('');

    // Save request record to client storage
    const newRequest = {
      name,
      email,
      company,
      phone,
      topic,
      selectedDate,
      selectedTime,
      timestamp: new Date().toISOString(),
      status: 'Consultation Request Logged',
    };
    try {
      const existing = JSON.parse(localStorage.getItem('zyquo_consultation_requests') || '[]');
      localStorage.setItem('zyquo_consultation_requests', JSON.stringify([newRequest, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setTopic('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request Executive Technical Consultation"
      subtitle="Schedule a strategic 30-minute architectural discovery session with a ZYQUO Principal Engineer."
      maxWidth="max-w-3xl"
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#D4AF62]/10 border border-[#D4AF62] mx-auto flex items-center justify-center text-[#D4AF62]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-display font-bold text-white">Consultation Request Logged</h4>
            <p className="text-sm text-[#A3A3A3] max-w-md mx-auto">
              Thank you, <span className="text-[#F5EBDD] font-medium">{name}</span>. Your request for{' '}
              <span className="text-[#D4AF62] font-mono">{selectedDate} at {selectedTime}</span> has been received.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#A3A3A3] max-w-md mx-auto text-left space-y-1.5 font-mono">
            <div>
              <span className="text-white font-sans font-medium">Company:</span> {company}
            </div>
            <div>
              <span className="text-white font-sans font-medium">Email:</span> {email}
            </div>
            <div>
              <span className="text-white font-sans font-medium">Next Step:</span> A ZYQUO engineering director will
              review your objectives and dispatch a calendar invitation within 24 business hours.
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919263666014?text=${encodeURIComponent(`Hello ZYQUO team! I have requested a consultation for ${selectedDate} at ${selectedTime}. Company: ${company}. Name: ${name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium text-xs transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] flex items-center gap-2"
            >
              <span>Connect on WhatsApp (9263666014)</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all border border-white/10"
            >
              Return to Website
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          {/* Date Picker Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF62]" /> Select Target Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {availableDates.map((item) => (
                <button
                  key={item.date}
                  type="button"
                  onClick={() => setSelectedDate(item.date)}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    selectedDate === item.date
                      ? 'bg-[#D4AF62]/20 border-[#D4AF62] text-white'
                      : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF62]" /> Preferred Time Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`p-2 rounded-xl text-xs font-mono border text-center transition-all ${
                    selectedTime === slot
                      ? 'bg-[#D4AF62]/20 border-[#D4AF62] text-white'
                      : 'bg-white/5 border-white/10 text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* User Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="space-y-1">
              <label className="text-xs text-[#A3A3A3]">Full Name *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
                />
                <User className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#A3A3A3]">Work Email *</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="s.jenkins@company.com"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
                />
                <Mail className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#A3A3A3]">Company / Enterprise *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Technologies"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
                />
                <Building className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#A3A3A3]">Direct Phone / WhatsApp</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
                />
                <Phone className="w-3.5 h-3.5 text-[#A3A3A3] absolute left-3 top-3" />
              </div>
            </div>
          </div>

          {/* Project Topic */}
          <div className="space-y-1">
            <label className="text-xs text-[#A3A3A3]">Discussion Focus / Current Infrastructure</label>
            <textarea
              rows={2}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Briefly describe the business goals or technical challenges you wish to explore..."
              className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#242424]">
            <p className="text-[11px] text-[#A3A3A3]">
              Private discovery under standard mutual NDA.
            </p>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
            >
              Submit Consultation Request
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};
