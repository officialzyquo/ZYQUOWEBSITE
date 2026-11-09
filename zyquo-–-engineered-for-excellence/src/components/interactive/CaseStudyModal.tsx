import React from 'react';
import { Modal } from '../common/Modal';
import { ProjectItem } from '../../types';
import { CheckCircle2, ArrowRight, Quote, Shield, Calendar, Layers, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onStartProject: (title?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  onStartProject,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`${project.client} · ${project.industry}`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 text-left">
        {/* Top Meta Bar */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3A3A3]">
          <div>
            <span className="text-white font-sans font-medium block">Category:</span>
            <span className="text-[#D4AF62]">{project.category}</span>
          </div>
          <div>
            <span className="text-white font-sans font-medium block">Execution Velocity:</span>
            <span className="text-white">{project.timeline}</span>
          </div>
          <div>
            <span className="text-white font-sans font-medium block">Engagement Type:</span>
            <span className="text-white">{project.demoType} Architecture</span>
          </div>
          <div>
            <span className="text-white font-sans font-medium block">IP Ownership:</span>
            <span className="text-emerald-400">100% Client Sovereign</span>
          </div>
        </div>

        {/* Quantified Business Results Grid */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF62]">
            Quantified Business Impact
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.results.map((res, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0B0B0B] border border-[#D4AF62]/20 text-center">
                <div className="text-2xl sm:text-3xl font-display font-extrabold gold-text-gradient">
                  {res.value}
                </div>
                <div className="text-xs text-[#A3A3A3] font-mono mt-1">
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Business Challenge */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            01 · The Business Challenge
          </h4>
          <p className="text-sm text-[#F5F5F5] leading-relaxed bg-white/5 p-5 rounded-xl border border-white/5">
            {project.challenge}
          </p>
        </div>

        {/* The Engineered Solution */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF62]">
            02 · The Engineered Solution
          </h4>
          <p className="text-sm text-[#F5EBDD] leading-relaxed bg-[#D4AF62]/5 p-5 rounded-xl border border-[#D4AF62]/20">
            {project.solution}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            03 · Core Technologies Deployed
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Testimonial if available */}
        {project.testimonial && (
          <div className="p-6 rounded-2xl glass-panel border border-[#D4AF62]/30 space-y-3">
            <Quote className="w-6 h-6 text-[#D4AF62]" />
            <p className="text-xs sm:text-sm text-[#F5EBDD] italic leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="text-xs text-[#A3A3A3] pt-1">
              <strong className="text-white">{project.testimonial.author}</strong> · {project.testimonial.role}
            </div>
          </div>
        )}

        {/* Action Bottom */}
        <div className="pt-4 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#A3A3A3]">
            Need a similar system engineered for your company?
          </span>
          <a
            href={`https://wa.me/919263666014?text=${encodeURIComponent(`Hello ZYQUO team! I am interested in building a solution similar to your case study: ${project.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_20px_rgba(212,175,98,0.25)]"
          >
            <span>Discuss on WhatsApp (9263666014)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
};
