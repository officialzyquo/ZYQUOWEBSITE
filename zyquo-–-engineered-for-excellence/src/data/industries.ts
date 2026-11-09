import { IndustryItem } from '../types';

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant telemedicine platforms, medical sensor telemetry, and AI clinical document extraction engineered with bank-grade encryption.',
    impactMetrics: '100% HIPAA Compliance · 99.99% Telemetry Uptime',
    capabilities: [
      'Encrypted Patient Portals & EHR Integration (HL7 / FHIR)',
      'Wearable Sensor Telemetry & Bluetooth LE Daemons',
      'Intelligent Clinical Notes Extraction & Voice Scribing',
      'Medical Device Dashboard & Regulatory Audit Trails',
    ],
    sampleUseCases: ['Remote Patient Monitoring', 'Diagnostic Imaging AI', 'Clinical Trial Portals'],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    description:
      'Adaptive learning management systems, automated rubric grading, and interactive digital simulations for universities and modern online academies.',
    impactMetrics: '4x Student Engagement · Real-Time Progress Analytics',
    capabilities: [
      'Adaptive Learning Paths & Knowledge Assessment Engines',
      'Interactive 3D / WebGL Scientific Visualizers',
      'Scalable Video Streaming & Real-Time Proctored Exams',
      'Automated Assignment Grading & Teacher Workflow Automation',
    ],
    sampleUseCases: ['STEM Interactive Labs', 'Corporate Upskilling SaaS', 'University LMS Platforms'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description:
      'Sub-second headless storefronts, custom checkout pipelines, automated ERP inventory synchronization, and AI predictive demand forecasting.',
    impactMetrics: 'Sub-Second Page Loads · +42% Average Order Value',
    capabilities: [
      'Headless Shopify Plus / Custom Commerce Engines',
      'Dynamic Real-Time Inventory & Multi-Warehouse Sync',
      'High-Speed 3D Product Customization & AR Previews',
      'Automated Cart Abandonment & Lifetime Value Maximization',
    ],
    sampleUseCases: ['Luxury D2C Brands', 'Omni-Channel Retail ERP', 'Global B2B Wholesale Portals'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    description:
      'High-end architectural showcase platforms, automated lease underwriting, interactive floorplan visualizers, and investor deal rooms.',
    impactMetrics: '3x Faster Deal Inquiries · Virtual Tour Engagement',
    capabilities: [
      'Interactive 3D Building Floorplans & Unit Selectors',
      'Automated Commercial Tenant Credit Assessment',
      'Syndication & Investor Distribution Dashboards',
      'MLS / IDX High-Speed Data Sync & Geospatial Maps',
    ],
    sampleUseCases: ['Ultra-Luxury Developments', 'Commercial Brokerage Portals', 'PropTech Asset Management'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    description:
      'Bespoke reservation engines, VIP concierge guest apps, and integrated property management systems for boutique hotels and luxury resorts.',
    impactMetrics: 'Direct Booking Revenue +55% · Zero Commission Leakage',
    capabilities: [
      'Direct Zero-Commission Booking & Room Engine',
      'Mobile Room Key & Digital Guest Concierge Integration',
      'Dynamic Inventory & Occupancy Yield Optimization',
      'Multi-Property Central Management & Staff Operations Portal',
    ],
    sampleUseCases: ['Boutique Luxury Hotels', 'Private Island & Villa Portals', 'Yacht Charter Booking Platforms'],
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Legal',
    description:
      'Secure client vaults, automated engagement letter generation, document intelligence, and billable hour intelligence for elite advisory firms.',
    impactMetrics: '60% Faster Client Onboarding · Bank-Grade Vault Security',
    capabilities: [
      'Encrypted Client Document Portals with Watermarking',
      'AI Document Discovery & Contract Clause Comparison',
      'Automated Retainer Billing & Client Retainers',
      'Integrated Secure Video Consultation & Scheduling',
    ],
    sampleUseCases: ['Corporate Law Firms', 'Global Management Consultancies', 'Wealth Advisory Practices'],
  },
  {
    id: 'startups',
    name: 'High-Growth Startups & Scaleups',
    description:
      'Rapid zero-to-one MVP engineering, cloud-native scalability roadmaps, and investor-grade technical architecture designed to close venture funding.',
    impactMetrics: '6-Week Rapid MVP Delivery · Series A Technical Readiness',
    capabilities: [
      'Full-Stack Rapid MVP Architecture & Development',
      'Investor Technical Due Diligence Preparation',
      'Scalable Serverless & Microservice Foundations',
      'Product Analytics, Funnel Telemetry & Onboarding CRO',
    ],
    sampleUseCases: ['AI-Native SaaS MVPs', 'FinTech Mobile Apps', 'Marketplace Platforms'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Conglomerates',
    description:
      'Mission-critical software modernization, legacy mainframe bridging, automated enterprise compliance, and multi-region cloud resilience.',
    impactMetrics: '99.99% Uptime SLA · Zero-Data-Loss Architecture',
    capabilities: [
      'Legacy ERP / Mainframe API Decoupling & Cloud Migration',
      'SOC 2 Type II, ISO 27001 & GDPR Architectural Hardening',
      'Enterprise Single Sign-On (Okta, Azure AD, SAML 2.0)',
      'Multi-Region Active-Active Cloud Disaster Recovery',
    ],
    sampleUseCases: ['Global Supply Chain Modernization', 'Internal Developer Platforms', 'Enterprise BI Cockpits'],
  },
];
