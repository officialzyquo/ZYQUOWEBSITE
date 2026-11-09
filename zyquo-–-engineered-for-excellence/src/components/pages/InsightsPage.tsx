import React, { useState } from 'react';
import { ARTICLES } from '../../data/insights';
import { ArticleItem } from '../../types';
import { Modal } from '../common/Modal';
import { ArrowRight, BookOpen, Clock, Calendar, Search, Tag, Share2, Check } from 'lucide-react';

interface InsightsPageProps {
  onSelectArticle: (article: ArticleItem) => void;
  selectedArticle: ArticleItem | null;
  onCloseArticle: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onSelectArticle,
  selectedArticle,
  onCloseArticle,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Artificial Intelligence', 'Frontend Engineering', 'Digital Strategy', 'Cloud & Infrastructure'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchCat = activeCategory === 'All' || art.category === activeCategory;
    const matchSearch =
      !searchQuery.trim() ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleShare = () => {
    if (selectedArticle) {
      navigator.clipboard.writeText(window.location.origin + '#insights/' + selectedArticle.slug);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 bg-[#050505] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            INTELLECTUAL CAPITAL & RESEARCH
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            THINKING BEYOND <br />
            <span className="gold-text-gradient">THE ORDINARY.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F5EBDD] max-w-2xl mx-auto leading-relaxed text-balance">
            Technical papers, architectural analyses, and forward-looking research on artificial intelligence, high-performance
            systems, and modern digital dominance.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-panel border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#D4AF62] text-[#050505] font-semibold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research papers..."
              className="w-full p-2.5 pl-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#A3A3A3]/50 focus:border-[#D4AF62] focus:outline-none"
            />
            <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-3" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-[#D4AF62]/40 text-left flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                  <span className="text-[#D4AF62] uppercase tracking-wider">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5EBDD] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-[#A3A3A3] bg-white/5 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-medium text-white block">{article.author}</span>
                  <span className="text-[10px] text-[#A3A3A3]">{article.publishedDate}</span>
                </div>

                <span className="text-xs font-semibold text-[#D4AF62] group-hover:text-[#F5EBDD] flex items-center gap-1 transition-colors">
                  Read Paper
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedArticle && (
          <Modal
            isOpen={!!selectedArticle}
            onClose={onCloseArticle}
            title={selectedArticle.title}
            subtitle={`${selectedArticle.category} · ${selectedArticle.publishedDate} · ${selectedArticle.readTime}`}
            maxWidth="max-w-4xl"
          >
            <div className="space-y-6 text-left">
              {/* Author & Share Bar */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-semibold block">{selectedArticle.author}</span>
                  <span className="text-[#A3A3A3]">{selectedArticle.authorRole}</span>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D4AF62] border border-[#D4AF62]/20 text-xs flex items-center gap-1.5 transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  {copiedLink ? 'Link Copied' : 'Share Paper'}
                </button>
              </div>

              {/* Summary Abstract */}
              <div className="p-5 rounded-xl bg-[#D4AF62]/5 border border-[#D4AF62]/20 text-sm text-[#F5EBDD] italic leading-relaxed">
                <strong>Executive Abstract:</strong> {selectedArticle.summary}
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#F5F5F5] leading-relaxed pt-2">
                {selectedArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-[#242424] flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[#D4AF62] bg-[#D4AF62]/10 px-3 py-1 rounded-full border border-[#D4AF62]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
