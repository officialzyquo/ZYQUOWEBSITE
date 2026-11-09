export interface FaqItem {
  id: string;
  category: 'General' | 'Engineering & AI' | 'Engagement & Scope';
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'services',
    category: 'General',
    question: 'What services does ZYQUO provide?',
    answer:
      'ZYQUO provides full-cycle technology engineering and business transformation services across seven core pillars: (1) AI & Intelligent Automation, (2) Website Development, (3) Mobile Application Development, (4) SaaS Development, (5) Custom Software Solutions, (6) Digital Marketing & Growth (including AEO & Technical SEO), and (7) Branding & Digital Strategy.',
  },
  {
    id: 'international',
    category: 'General',
    question: 'Does ZYQUO work with international clients?',
    answer:
      'Yes. ZYQUO operates as a global engineering partner serving clients across North America, the United Kingdom, Europe, the Middle East, and Asia-Pacific. We structure engineering sprints across overlapping timezones with dedicated technical leads and transparent real-time asynchronous communication.',
  },
  {
    id: 'process',
    category: 'Engineering & AI',
    question: 'How does the project development process work?',
    answer:
      'We follow our signature 7-Stage Engineering Lifecycle: 01. Discover, 02. Understand, 03. Strategise, 04. Engineer, 05. Validate, 06. Deploy, and 07. Optimise. Every sprint delivers working, tested software with continuous client demonstration and strict adherence to architectural milestones.',
  },
  {
    id: 'cost',
    category: 'Engagement & Scope',
    question: 'How do you scope and structure project engagements?',
    answer:
      'Because every ZYQUO platform is engineered bespoke in custom React and TypeScript code without off-the-shelf templates, project scope is structured around architectural complexity, interactive WebGL/3D requirements, integrations, and deployment SLAs. You can submit your requirements through our Project Scope Inquiry form on this site for an instant consultation over WhatsApp.',
  },
  {
    id: 'custom-software',
    category: 'Engineering & AI',
    question: 'Can ZYQUO build custom software?',
    answer:
      'Absolutely. Custom software engineering is at the heart of our technical DNA. We build operational dashboards, internal workflow engines, enterprise ERP extensions, high-throughput data processing pipelines, and proprietary business applications with 100% intellectual property transfer to your firm.',
  },
  {
    id: 'ai-integrations',
    category: 'Engineering & AI',
    question: 'Does ZYQUO provide AI integrations?',
    answer:
      'Yes. We build production-grade AI systems, including multi-agent autonomous workflows, domain-specific Retrieval-Augmented Generation (RAG) pipelines, proprietary vector databases, automated document intelligence, and predictive modeling. We prioritize zero-data-retention and private VPC isolation to guarantee corporate confidentiality.',
  },
  {
    id: 'timeline',
    category: 'Engagement & Scope',
    question: 'What is the typical project timeline?',
    answer:
      'Typical timelines range from 3 to 6 weeks for high-performance websites and brand systems, 6 to 10 weeks for production AI integrations and mobile applications, and 8 to 16 weeks for comprehensive enterprise SaaS platforms and custom operational software. We establish immutable sprint milestones during the initial Discover & Strategise stages.',
  },
  {
    id: 'maintenance-support',
    category: 'Engagement & Scope',
    question: 'Does ZYQUO offer maintenance and support?',
    answer:
      'Yes. Following deployment, we offer tier-one SLA support agreements covering 24/7 uptime monitoring, security patching, cloud infrastructure autoscaling, periodic dependency audits, and continuous iterative feature enhancement sprints.',
  },
  {
    id: 'consultation',
    category: 'General',
    question: 'Can I request a consultation?',
    answer:
      'Yes. You can request an executive technical consultation via our interactive booking modal on this website, selecting your preferred date and time. An engineering director will review your initial requirements and lead an in-depth strategic architectural discovery call.',
  },
  {
    id: 'start-project',
    category: 'Engagement & Scope',
    question: 'How can I start a project?',
    answer:
      'You can start immediately by using our interactive Project Requirements Builder or Contact Form on this site, or reach out directly to our team via WhatsApp at 9263666014 or officialzyquo@gmail.com. We typically respond with a preliminary architectural scope within 24 business hours.',
  },
];
