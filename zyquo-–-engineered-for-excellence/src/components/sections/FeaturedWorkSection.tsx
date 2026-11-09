import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectItem } from '../../types';
import { ArrowRight, Layers, ExternalLink, Sparkles } from 'lucide-react';

interface FeaturedWorkSectionProps {
  onViewAllProjects: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  onViewAllProjects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'AI & Automation', 'Websites', 'Mobile Applications', 'SaaS'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS.slice(0, 4)
      : PROJECTS.filter((p) => p.category === activeFilter).slice(0, 4);

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header with Interactive Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              03 · FEATURED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              IDEAS, <br />
              <span className="gold-text-gradient">ENGINEERED INTO REALITY.</span>
            </h2>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#D4AF62] text-[#050505] font-semibold shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                {/* Meta Row: Unboxed clean typography per anti-slop rules */}
                <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4AF62] font-mono uppercase tracking-wider">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.industry}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A3A3A3]/80 border border-white/10 px-2 py-0.5 rounded">
                    {project.demoType}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {project.shortSummary}
                </p>

                {/* Key Results Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {project.results.map((res, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-base sm:text-lg font-display font-bold gold-text-gradient">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-[#A3A3A3] font-mono mt-0.5 truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[#A3A3A3] bg-white/5 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#A3A3A3]">
                  Timeline: {project.timeline}
                </span>

                <span className="text-xs font-semibold text-[#D4AF62] group-hover:text-[#F5EBDD] flex items-center gap-1.5 transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={onViewAllProjects}
            className="px-8 py-3 rounded-xl glass-panel text-white hover:text-[#D4AF62] hover:border-[#D4AF62]/50 font-medium text-xs tracking-wider uppercase transition-all"
          >
            VIEW ALL WORK & CASE STUDIES
          </button>
        </div>
      </div>
    </section>
  );
};
