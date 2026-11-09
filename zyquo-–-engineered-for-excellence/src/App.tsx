import React, { useState, useEffect } from 'react';
import { PageView, ServiceId, ProjectItem, ArticleItem } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/interactive/WhatsAppButton';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { IndustriesPage } from './components/pages/IndustriesPage';
import { ApproachPage } from './components/pages/ApproachPage';
import { InsightsPage } from './components/pages/InsightsPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';

// Interactive Modals
import { SolutionFinderModal } from './components/interactive/SolutionFinderModal';
import { RequirementsBuilderModal } from './components/interactive/RequirementsBuilderModal';
import { CostEstimatorModal } from './components/interactive/CostEstimatorModal';
import { ConsultationBookingModal } from './components/interactive/ConsultationBookingModal';
import { ClientPortalModal } from './components/interactive/ClientPortalModal';
import { CaseStudyModal } from './components/interactive/CaseStudyModal';
import { PROJECTS } from './data/projects';
import { SERVICES } from './data/services';
import { ARTICLES } from './data/insights';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('ai-automation');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Modals state
  const [isSolutionFinderOpen, setIsSolutionFinderOpen] = useState(false);
  const [isRequirementsBuilderOpen, setIsRequirementsBuilderOpen] = useState(false);
  const [isCostEstimatorOpen, setIsCostEstimatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [contactPrefillNotes, setContactPrefillNotes] = useState('');

  // Handle URL Hash navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        return;
      }
      if (hash.startsWith('services/')) {
        const sId = hash.replace('services/', '') as ServiceId;
        const exists = SERVICES.some((s) => s.id === sId);
        if (exists) {
          setSelectedServiceId(sId);
          setCurrentPage('service-detail');
        } else {
          setCurrentPage('services');
        }
      } else if (
        [
          'home',
          'about',
          'services',
          'portfolio',
          'industries',
          'approach',
          'insights',
          'contact',
          'privacy',
          'terms',
        ].includes(hash)
      ) {
        setCurrentPage(hash as PageView);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageView, serviceId?: ServiceId) => {
    if (page === 'service-detail' && serviceId) {
      setSelectedServiceId(serviceId);
      window.location.hash = `services/${serviceId}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactWithNotes = (notes?: string) => {
    if (notes) {
      setContactPrefillNotes(notes);
    }
    navigateTo('contact');
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsCaseStudyModalOpen(true);
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    navigateTo('service-detail', serviceId);
  };

  const handleSelectArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans flex flex-col justify-between selection:bg-[#D4AF62]/30 selection:text-[#F5EBDD]">
      {/* Floating Glassmorphic Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenProjectBuilder={() => setIsRequirementsBuilderOpen(true)}
        onOpenSolutionFinder={() => setIsSolutionFinderOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onStartProject={() => setIsRequirementsBuilderOpen(true)}
            onExploreWork={() => navigateTo('portfolio')}
            onSelectService={handleSelectService}
            onSelectProject={handleSelectProject}
            onSelectArticle={handleSelectArticle}
            onViewAllProjects={() => navigateTo('portfolio')}
            onViewIndustries={() => navigateTo('industries')}
            onViewInsights={() => navigateTo('insights')}
            onDiscoverAbout={() => navigateTo('about')}
            onBookConsultation={() => setIsConsultationOpen(true)}
            onOpenSolutionFinder={() => setIsSolutionFinderOpen(true)}
            onOpenCostEstimator={() => setIsCostEstimatorOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onStartProject={() => setIsRequirementsBuilderOpen(true)}
            onBookConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onOpenSolutionFinder={() => setIsSolutionFinderOpen(true)}
            onOpenCostEstimator={() => setIsCostEstimatorOpen(true)}
            onStartProject={() => setIsRequirementsBuilderOpen(true)}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onBackToServices={() => navigateTo('services')}
            onStartProject={(serviceName) =>
              handleOpenContactWithNotes(
                `Initial Inquiry for: ${serviceName || selectedServiceId}\nTarget Timeline: Expedited\nPlease share architecture recommendations.`
              )
            }
            onOpenSolutionFinder={() => setIsSolutionFinderOpen(true)}
            onOpenCostEstimator={() => setIsCostEstimatorOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={handleSelectProject}
            onStartProject={() => setIsRequirementsBuilderOpen(true)}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onStartProject={(industryName) =>
              handleOpenContactWithNotes(
                `Enterprise Sector Inquiry for: ${industryName || 'Industry Solution'}`
              )
            }
          />
        )}

        {currentPage === 'approach' && (
          <ApproachPage
            onStartProject={() => setIsRequirementsBuilderOpen(true)}
            onBookConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            onSelectArticle={handleSelectArticle}
            selectedArticle={selectedArticle}
            onCloseArticle={() => setSelectedArticle(null)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialNotes={contactPrefillNotes}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenCostEstimator={() => setIsCostEstimatorOpen(true)}
          />
        )}

        {currentPage === 'privacy' && <PrivacyPage />}

        {currentPage === 'terms' && <TermsPage />}
      </main>

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Luxury Black & Gold Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Interactive Tool Modals */}
      <SolutionFinderModal
        isOpen={isSolutionFinderOpen}
        onClose={() => setIsSolutionFinderOpen(false)}
        onSelectService={handleSelectService}
        onOpenContact={handleOpenContactWithNotes}
      />

      <RequirementsBuilderModal
        isOpen={isRequirementsBuilderOpen}
        onClose={() => setIsRequirementsBuilderOpen(false)}
        onOpenContact={handleOpenContactWithNotes}
      />

      <CostEstimatorModal
        isOpen={isCostEstimatorOpen}
        onClose={() => setIsCostEstimatorOpen(false)}
        onOpenContact={handleOpenContactWithNotes}
      />

      <ConsultationBookingModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />

      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        onStartProject={handleOpenContactWithNotes}
      />
    </div>
  );
}
