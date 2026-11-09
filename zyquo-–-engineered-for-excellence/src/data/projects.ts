import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kroma-fintech-ai',
    title: 'Kroma AI Risk Engine & Wealth Suite',
    client: 'Kroma Technologies (Enterprise Concept)',
    category: 'AI & Automation',
    shortSummary:
      'Autonomous multi-agent risk assessment pipeline and real-time portfolio optimization platform for institutional capital.',
    challenge:
      'Institutional asset managers struggled with delayed credit risk analyses, manual spreadsheet reconciliations, and compliance bottlenecks across volatile cross-border markets.',
    solution:
      'Engineered an event-driven multi-agent microservice architecture utilizing specialized LLMs and vector search to ingest filings, parse multi-currency disclosures, and output real-time risk scores with audit trails.',
    results: [
      { label: 'Latency Reduction', value: '-88%' },
      { label: 'Analyst Time Saved', value: '42 hrs/wk' },
      { label: 'Daily Query Throughput', value: '1.2M docs' },
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL (pgvector)', 'Redis', 'React', 'TypeScript'],
    timeline: '10 Weeks',
    industry: 'Financial Technology',
    demoType: 'Enterprise',
    featured: true,
    testimonial: {
      quote:
        'The precision and engineering rigor demonstrated by ZYQUO fundamentally elevated how our analytical teams assess complex exposure.',
      author: 'Marcus Sterling',
      role: 'Chief Risk Officer',
    },
  },
  {
    id: 'aura-luxury-headless',
    title: 'Aura Electric Mobility Platform',
    client: 'Aura Mobility (Flagship Concept)',
    category: 'Websites',
    shortSummary:
      'Ultra-luxury 3D interactive vehicle configurator and sub-second headless e-commerce experience for next-gen electric hypercars.',
    challenge:
      'Traditional automotive websites were weighed down by clunky 3D plugins, causing high mobile bounce rates and disconnect between luxury brand perception and digital performance.',
    solution:
      'Architected a custom WebGL / Three.js real-time material shader engine with Apple-grade glassmorphism UI, achieving sub-second page transitions and zero layout shifts on mobile.',
    results: [
      { label: 'Mobile Bounce Rate', value: '-64%' },
      { label: 'Core Web Vitals', value: '99/100' },
      { label: 'Test Drive Inquiries', value: '+210%' },
    ],
    techStack: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'Shopify Plus API', 'Cloudflare Workers'],
    timeline: '8 Weeks',
    industry: 'Automotive & Luxury',
    demoType: 'Commercial',
    featured: true,
    testimonial: {
      quote:
        'ZYQUO delivered a digital presence that feels as refined and finely engineered as our vehicles themselves.',
      author: 'Elena Vance',
      role: 'Global Marketing Director',
    },
  },
  {
    id: 'pulsebio-mobile-telemetry',
    title: 'PulseBio Wearable Health & Telemetry',
    client: 'PulseBio Health Sciences (Client Concept)',
    category: 'Mobile Applications',
    shortSummary:
      'Biometric iOS & Android mobile ecosystem with offline-first synchronization and real-time medical sensor telemetry.',
    challenge:
      'Patients and clinicians lacked a unified, HIPAA-compliant mobile application capable of capturing continuous Bluetooth Low Energy biometric data without draining mobile battery life.',
    solution:
      'Engineered a native-fluid React Native application with custom Swift/Kotlin background BLE daemons and encrypted local SQLite storage that reconciles seamlessly with AWS HealthLake.',
    results: [
      { label: 'Crash-Free Sessions', value: '99.96%' },
      { label: 'Daily Active Sync Rate', value: '94%' },
      { label: 'Battery Overhead', value: '<3% daily' },
    ],
    techStack: ['React Native', 'SwiftUI', 'Kotlin', 'WatermelonDB', 'Bluetooth LE', 'AWS HealthLake'],
    timeline: '12 Weeks',
    industry: 'Healthcare & Life Sciences',
    demoType: 'Enterprise',
    featured: true,
    testimonial: {
      quote:
        'Patient compliance soared because the interface is intuitive, zero-lag, and completely trustworthy.',
      author: 'Dr. Aris Thorne',
      role: 'VP of Digital Medicine',
    },
  },
  {
    id: 'nexusops-cloud-saas',
    title: 'NexusOps Multi-Tenant Cloud Platform',
    client: 'Nexus Global (Proprietary Concept)',
    category: 'SaaS',
    shortSummary:
      'Cloud infrastructure resource-governance SaaS managing multi-cloud Kubernetes deployments with predictive autoscaling.',
    challenge:
      'Engineering teams at mid-market firms routinely suffered cloud sprawl due to unmonitored idle cloud instances and fragmented container clusters across AWS and GCP.',
    solution:
      'Developed a scalable multi-tenant SaaS with real-time telemetry, automated idle-pod pruning agents, and granular role-based access control with enterprise SAML integration.',
    results: [
      { label: 'Cloud Resource Efficiency', value: '+38%' },
      { label: 'Active Monitored Pods', value: '250,000+' },
      { label: 'API P99 Latency', value: '42ms' },
    ],
    techStack: ['Go', 'TypeScript', 'Kubernetes', 'PostgreSQL', 'Stripe Billing', 'React', 'Docker'],
    timeline: '14 Weeks',
    industry: 'Cloud Infrastructure',
    demoType: 'Proprietary',
    featured: false,
  },
  {
    id: 'omnilogistics-custom-erp',
    title: 'OmniLogistics Fleet & Dispatch Engine',
    client: 'OmniLogistics Freight (Client Concept)',
    category: 'Custom Software',
    shortSummary:
      'Custom dispatch cockpit and algorithmic routing engine processing over 15,000 daily intermodal freight shipments.',
    challenge:
      'Dispatchers were bottlenecked by three incompatible legacy TMS databases and manual phone calls, resulting in empty deadhead miles and delayed route re-optimizations.',
    solution:
      'Created a unified web-based command center with real-time map telematics, algorithmic dispatch suggestions, and automated driver SMS notifications.',
    results: [
      { label: 'Deadhead Miles Cut', value: '-28%' },
      { label: 'Daily Dispatch Velocity', value: '3.4x' },
      { label: 'Annual Fuel Optimization', value: '-34%' },
    ],
    techStack: ['React', 'TypeScript', 'Python', 'PostGIS', 'Redis', 'Kafka', 'Tailwind CSS'],
    timeline: '11 Weeks',
    industry: 'Supply Chain & Logistics',
    demoType: 'Enterprise',
    featured: false,
  },
  {
    id: 'verve-capital-brand',
    title: 'Verve Capital Visual Identity & Web Portal',
    client: 'Verve Capital Partners (Client Concept)',
    category: 'Branding',
    shortSummary:
      'Luxury black-and-gold visual identity system, bespoke typography, and high-security investor portal for an elite global private equity firm.',
    challenge:
      'An elite private equity firm needed a brand refresh and digital portal that reflected their institutional status and appealed to sovereign wealth investors globally.',
    solution:
      'Crafted a bespoke monogram, comprehensive tokenized design system in Figma, and an encrypted LP investor portal with granular document watermarking.',
    results: [
      { label: 'Investor LP Portal Engagement', value: '+340%' },
      { label: 'Fund Raising Velocity', value: '2x faster' },
      { label: 'Brand Recognition Index', value: 'Top 5%' },
    ],
    techStack: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'AWS S3 Vault', 'WebAuthn'],
    timeline: '6 Weeks',
    industry: 'Private Equity & Capital',
    demoType: 'Commercial',
    featured: false,
  },
  {
    id: 'apex-industrial-growth',
    title: 'Apex Industrial AEO & Lead Acquisition',
    client: 'Apex Advanced Materials (Client Concept)',
    category: 'Digital Growth',
    shortSummary:
      'Technical SEO overhaul and Answer Engine Optimization (AEO) campaign driving qualified enterprise procurement inquiries.',
    challenge:
      'A precision manufacturer of composite materials was invisible on generative AI search engines and faced diminishing returns on generic search ads.',
    solution:
      'Restructured technical site schema, deployed deep research whitepapers structured for LLM ingestion, and launched an Account-Based Marketing paid funnel on LinkedIn.',
    results: [
      { label: 'Qualified Enterprise Leads', value: '+184%' },
      { label: 'AEO Search Citations', value: 'No. 1 Rank' },
      { label: 'Customer Acquisition Efficiency', value: '+46%' },
    ],
    techStack: ['Schema.org JSON-LD', 'Google Ads API', 'LinkedIn ABM', 'Google Tag Manager', 'Looker Studio'],
    timeline: 'Ongoing Growth Sprint',
    industry: 'Industrial & Advanced Materials',
    demoType: 'Commercial',
    featured: false,
  },
];
