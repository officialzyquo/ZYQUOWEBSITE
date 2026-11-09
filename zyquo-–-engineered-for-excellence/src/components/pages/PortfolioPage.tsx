import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectItem } from '../../types';
import { ArrowRight, CheckCircle2, Shield, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onStartProject: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onStartProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Automation',
    'Websites',
    'Mobile Applications',
    'SaaS',
    'Custom Software',
    'Branding',
    'Digital Growth',
  ];

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            OUR WORK & CASE STUDIES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            IDEAS, ENGINEERED <br />
            <span className="gold-text-gradient">INTO REALITY.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            Explore our portfolio of high-impact platforms, autonomous AI systems, and mission-critical cloud software.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#D4AF62] text-[#050505] font-semibold shadow-[0_2px_12px_rgba(212,175,98,0.3)]'
                    : 'text-[#A3A3A3] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
                  <span className="text-[#D4AF62] font-mono uppercase tracking-wider">{project.category}</span>
                  <span className="text-[11px] font-mono border border-white/10 px-2 py-0.5 rounded">
                    {project.demoType}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#A3A3A3] mt-1 block font-medium">
                    {project.client}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
                  {project.shortSummary}
                </p>

                {/* Measurable Results Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.results.map((res, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-sm font-display font-bold gold-text-gradient">
                        {res.value}
                      </div>
                      <div className="text-[9px] text-[#A3A3A3] font-mono mt-0.5 truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[#A3A3A3] bg-white/5 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#A3A3A3]">
                  Timeline: {project.timeline}
                </span>

                <span className="text-xs font-semibold text-[#D4AF62] group-hover:text-[#F5EBDD] flex items-center gap-1 transition-colors">
                  Case Study
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-2xl glass-panel-gold border border-[#D4AF62]/30 text-center space-y-4">
          <h3 className="font-display text-2xl font-bold text-white">Have a Challenging Engineering Project?</h3>
          <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-lg mx-auto">
            Discuss your requirements with our technical directors. We architect solutions built for scale and permanence.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919263666014?text=Hello%20ZYQUO%20team%2C%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(212,175,98,0.3)]"
            >
              Start a Project (WhatsApp: 9263666014)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
