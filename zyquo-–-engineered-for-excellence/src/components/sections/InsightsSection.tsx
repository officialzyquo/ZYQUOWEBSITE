import React from 'react';
import { ARTICLES } from '../../data/insights';
import { ArticleItem } from '../../types';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface InsightsSectionProps {
  onViewAllInsights: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onViewAllInsights,
  onSelectArticle,
}) => {
  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
              09 · INTELLECTUAL CAPITAL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              THINKING BEYOND <br />
              <span className="gold-text-gradient">THE ORDINARY.</span>
            </h2>
            <p className="text-sm text-[#A3A3A3] leading-relaxed pt-1">
              Rigorous technical research, architectural whitepapers, and strategic perspectives from our engineering leadership.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllInsights}
            className="text-xs font-semibold text-[#D4AF62] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>View All Insights & Research</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-[#A3A3A3] font-mono">
                  <span className="text-[#D4AF62] uppercase tracking-wider">{article.category}</span>
                  <div className="flex items-center gap-2">
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-medium text-white block">{article.author}</span>
                  <span className="text-[10px] text-[#A3A3A3]">{article.publishedDate}</span>
                </div>

                <span className="text-xs font-semibold text-[#D4AF62] group-hover:text-[#F5EBDD] flex items-center gap-1 transition-colors">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
