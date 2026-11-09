import React from 'react';
import { HeroSection } from '../hero/HeroSection';
import { CredibilitySection } from '../sections/CredibilitySection';
import { IntroductionSection } from '../sections/IntroductionSection';
import { ServicesGridSection } from '../sections/ServicesGridSection';
import { FeaturedWorkSection } from '../sections/FeaturedWorkSection';
import { WhyZyquoSection } from '../sections/WhyZyquoSection';
import { ApproachSection } from '../sections/ApproachSection';
import { IndustriesSection } from '../sections/IndustriesSection';
import { TechStackSection } from '../sections/TechStackSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { InsightsSection } from '../sections/InsightsSection';
import { FaqSection } from '../sections/FaqSection';
import { FounderSection } from '../sections/FounderSection';
import { CtaSection } from '../sections/CtaSection';
import { ServiceId, ProjectItem, ArticleItem } from '../../types';

interface HomePageProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onSelectService: (serviceId: ServiceId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onViewAllProjects: () => void;
  onViewIndustries: () => void;
  onViewInsights: () => void;
  onDiscoverAbout: () => void;
  onBookConsultation: () => void;
  onOpenSolutionFinder: () => void;
  onOpenCostEstimator: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartProject,
  onExploreWork,
  onSelectService,
  onSelectProject,
  onSelectArticle,
  onViewAllProjects,
  onViewIndustries,
  onViewInsights,
  onDiscoverAbout,
  onBookConsultation,
  onOpenSolutionFinder,
  onOpenCostEstimator,
}) => {
  return (
    <div className="relative">
      {/* 01. Cinematic Hero */}
      <HeroSection
        onStartProject={onStartProject}
        onExploreWork={onExploreWork}
        onOpenSolutionFinder={onOpenSolutionFinder}
      />

      {/* 02. Trust & Credibility Metrics */}
      <CredibilitySection />

      {/* 03. Introducing ZYQUO */}
      <IntroductionSection onDiscover={onDiscoverAbout} />

      {/* 04. What We Engineer (7 Services) */}
      <ServicesGridSection
        onSelectService={onSelectService}
        onOpenSolutionFinder={onOpenSolutionFinder}
      />

      {/* 05. Featured Work */}
      <FeaturedWorkSection
        onViewAllProjects={onViewAllProjects}
        onSelectProject={onSelectProject}
      />

      {/* 06. Why ZYQUO */}
      <WhyZyquoSection />

      {/* 07. The 7-Stage Approach */}
      <ApproachSection />

      {/* 08. Executive Leadership */}
      <FounderSection onStartProject={onStartProject} />

      {/* 09. Industries We Serve */}
      <IndustriesSection onViewIndustriesPage={onViewIndustries} />

      {/* 09. Technology & Infrastructure Matrix */}
      <TechStackSection />

      {/* 10. Client Testimonials */}
      <TestimonialsSection />

      {/* 11. Insights & Knowledge */}
      <InsightsSection
        onViewAllInsights={onViewInsights}
        onSelectArticle={onSelectArticle}
      />

      {/* 12. FAQ Accordion */}
      <FaqSection onOpenConsultation={onBookConsultation} />

      {/* 13. Final Call to Action */}
      <CtaSection
        onStartProject={onStartProject}
        onBookConsultation={onBookConsultation}
        onOpenCostEstimator={onOpenCostEstimator}
      />
    </div>
  );
};
