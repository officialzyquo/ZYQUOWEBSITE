export type PageView =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'portfolio'
  | 'industries'
  | 'approach'
  | 'insights'
  | 'contact'
  | 'client-portal'
  | 'privacy'
  | 'terms';

export type ServiceId =
  | 'ai-automation'
  | 'website-development'
  | 'mobile-development'
  | 'saas-development'
  | 'custom-software'
  | 'digital-marketing'
  | 'branding-strategy';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  businessProblems: string[];
  solutions: string[];
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  timelineTypical: string;
  faqs: { question: string; answer: string }[];
  caseStudyHighlight?: string;
  statsLabel: string;
  statsValue: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Websites' | 'Mobile Applications' | 'SaaS' | 'AI & Automation' | 'Custom Software' | 'Branding' | 'Digital Growth';
  shortSummary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  techStack: string[];
  timeline: string;
  industry: string;
  demoType: 'Enterprise' | 'Commercial' | 'Proprietary' | 'Client Launch';
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  content: string[];
  tags: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  impactMetrics: string;
  capabilities: string[];
  sampleUseCases: string[];
}
