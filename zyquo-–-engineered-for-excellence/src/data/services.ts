import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    tagline: 'Autonomous Workflows. Predictive Logic. Scalable Intelligence.',
    shortDescription:
      'Enterprise AI integrations, multi-agent automation pipelines, computer vision, and real-time process optimization engineered for business speed.',
    fullDescription:
      'We architect, fine-tune, and deploy bespoke artificial intelligence systems that replace manual bottlenecks with resilient automated intelligence. From specialized LLM agent clusters to real-time predictive analytics engines, we transform raw institutional knowledge into autonomous operational leverage.',
    businessProblems: [
      'Intensive manual labor consumed by repetitive document parsing, compliance review, and data entry',
      'Fragmented operational software lacking intelligent coordination or automated handoffs',
      'Unstructured enterprise knowledge locked in PDFs, legacy databases, and emails without queryable interfaces',
      'Lagging customer response times leading to churn and missed high-intent buyer windows',
    ],
    solutions: [
      'Autonomous Multi-Agent Orchestration: Purpose-built agent clusters handling multi-step analysis and decisions',
      'Domain-Specific Retrieval-Augmented Generation (RAG): Ultra-low latency knowledge engines with private vector databases',
      'Automated Data Transformation Pipelines: Intelligent OCR, anomaly detection, and schema reconciliation',
      'Real-Time Operational Automation: Continuous bidirectional synchronization between ERP, CRM, and cloud services',
    ],
    capabilities: [
      'Multi-Agent System Design & Orchestration',
      'Custom LLM Fine-Tuning & Quantization',
      'Enterprise Vector DB Infrastructure (Milvus, Pinecone, pgvector)',
      'Intelligent Document & Invoice Processing',
      'Predictive Demand & Inventory Modeling',
      'Autonomous Customer Concierge Systems',
    ],
    deliverables: [
      'Production AI API Gateway with Auth & Rate-Limiting',
      'Private Vector Knowledge Base & Embedding Pipelines',
      'Custom Agent Execution Engine & Audit Logging Dashboard',
      'CI/CD Pipeline for Continuous Model Evaluation & Guardrails',
      'Comprehensive Technical Architecture Documentation & Training',
    ],
    techStack: [
      'Python',
      'PyTorch',
      'LangChain / LangGraph',
      'LlamaIndex',
      'TensorRT',
      'PostgreSQL / pgvector',
      'Redis',
      'FastAPI',
      'Docker / Kubernetes',
    ],
    timelineTypical: '4 – 10 weeks depending on model customization and data pipeline complexity',
    statsLabel: 'Average Manual Task Reduction',
    statsValue: '73%',
    caseStudyHighlight: 'FinTech AI Risk Assessment Suite',
    faqs: [
      {
        question: 'How do you protect proprietary corporate data when building AI models?',
        answer:
          'We deploy zero-data-retention, air-gapped or VPC-contained models where your proprietary weights and documents never leave your sovereign cloud perimeter. No external public model training ever uses your enterprise data.',
      },
      {
        question: 'Can you integrate AI into our existing legacy ERP or CRM software?',
        answer:
          'Yes. We specialize in microservices and asynchronous API bridges that connect modern intelligence layers seamlessly with legacy SAP, Oracle, Salesforce, or custom internal databases.',
      },
      {
        question: 'What is the ongoing operational maintenance for autonomous AI workflows?',
        answer:
          'We engineer aggressive token-caching, model distillation, and edge quantization that reduce inference compute overhead by up to 60% compared to off-the-shelf commercial APIs.',
      },
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Cinematic Aesthetics. Sub-Second Performance. High-Conversion Architecture.',
    shortDescription:
      'Flagship corporate websites, high-conversion headless e-commerce platforms, and interactive digital experiences engineered for global market leaders.',
    fullDescription:
      'Your digital presence is the highest-leverage touchpoint of your enterprise. We engineer bespoke, lightning-fast web experiences combining Apple-standard visual polish, fluid motion physics, accessible semantic architecture, and world-class conversion engineering.',
    businessProblems: [
      'Sluggish page load speeds and bloated template code hurting organic search rankings and conversion',
      'Generic template appearances that fail to convey authority, luxury, or technological leadership',
      'Inflexible CMS architectures that require developer intervention for basic copy and marketing updates',
      'Broken responsiveness and jarring layout shifts across modern high-DPI displays and mobile devices',
    ],
    solutions: [
      'Custom Modern Frontend Architecture: Built on React, Next.js, and TypeScript with zero template bloat',
      'Fluid Micro-Interactions & Motion Design: 60fps GPU-accelerated motion that elevates perceived brand value',
      'Enterprise Headless CMS Integration: Effortless editorial control via Sanity, Strapi, or headless WordPress',
      'Global Edge CDN & Core Web Vitals Optimization: 99+ PageSpeed scores, instant TTFB, and zero cumulative layout shift',
    ],
    capabilities: [
      'High-Performance Web Architecture (Next.js / Vite / React)',
      'Cinematic WebGL & Three.js 3D Visualizers',
      'Headless E-Commerce (Shopify Plus / Medusa / Custom Checkout)',
      'Enterprise Headless CMS Implementation',
      'AEO, GEO & Technical SEO Optimization',
      'Global Multi-Language & Multi-Region Localization',
    ],
    deliverables: [
      'Production-Ready Source Code Repository with Clean Git History',
      'Custom Component Design System in Figma & Storybook',
      'Configured Headless CMS Schema with Role-Based Permissions',
      'Automated Edge Deployment Pipelines (Vercel / Cloudflare / AWS)',
      'Complete Web Vitals & Technical SEO Audit Report',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Three.js',
      'Framer Motion',
      'Cloudflare Workers',
      'Vercel Edge',
    ],
    timelineTypical: '3 – 8 weeks based on interactive complexity and CMS requirements',
    statsLabel: 'Average Lighthouse Performance Score',
    statsValue: '99/100',
    caseStudyHighlight: 'Aura Luxury Automotive Headless Platform',
    faqs: [
      {
        question: 'Do you build on standard templates or create custom code?',
        answer:
          'Every ZYQUO web platform is engineered from the ground up in custom TypeScript and React. We never use sluggish off-the-shelf bloated themes.',
      },
      {
        question: 'How do you ensure our marketing team can edit content independently?',
        answer:
          'We couple your custom frontend to modern visual Headless CMS backends where your team has full visual previewing, drag-and-drop section assembly, and revision history.',
      },
      {
        question: 'How do you handle global multi-currency and international localization?',
        answer:
          'We leverage edge geolocation routing, localized content schema, and dynamic currency conversions with zero layout jitter.',
      },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Application Development',
    tagline: 'Native Fluidity. Haptic Precision. Offline-First Architecture.',
    shortDescription:
      'Bespoke iOS, Android, and cross-platform mobile applications engineered with native performance, haptic responsiveness, and resilient offline capabilities.',
    fullDescription:
      'We build mobile applications that earn coveted real estate on executive and consumer home screens. Combining native platform physics, fluid gestures, biometric security, and offline-first data synchronization, our apps represent the pinnacle of mobile craftsmanship.',
    businessProblems: [
      'Clunky hybrid wrappers with sluggish scrolling and poor frame rates that damage user trust',
      'Frequent crashes, high battery consumption, and poor connectivity handling in mobile environments',
      'Complex App Store submission rejections and compliance delays',
      'High churn rates caused by confusing onboarding flows and uninspired UX',
    ],
    solutions: [
      'Native & Modern Cross-Platform Engineering: Built in Swift, Kotlin, or React Native / Flutter for 120Hz fluidity',
      'Resilient Offline-First Data Engine: Real-time conflict-free replicated data types (CRDTs) for offline sync',
      'Biometric Security & Hardware Integration: FaceID, NFC, Bluetooth LE, and secure enclave token storage',
      'Turnkey App Store Deployment: End-to-end guidance through Apple Developer and Google Play review requirements',
    ],
    capabilities: [
      'Native iOS (Swift & SwiftUI) & Android (Kotlin & Jetpack Compose)',
      'High-Performance Cross-Platform (React Native & Flutter)',
      'Offline-First Data Sync & Local Database Architecture',
      'BLE & Hardware Device Telemetry Integration',
      'Push Notification Orchestration & Smart Re-engagement',
      'In-App Purchases (StoreKit 2 & Google Play Billing)',
    ],
    deliverables: [
      'Native iOS and Android Binary Packages ready for App Store & Google Play',
      'Source Code Repository with CI/CD Fastlane automated build scripts',
      'Backend Mobile API Gateway with OpenAPI specifications',
      'Crashlytics, Mixpanel, and APM Monitoring Dashboard Setup',
      'Comprehensive App Store Release Management & Metadata Kit',
    ],
    techStack: [
      'React Native',
      'SwiftUI',
      'Kotlin',
      'TypeScript',
      'SQLite / WatermelonDB',
      'Fastlane',
      'Firebase Cloud Messaging',
      'GraphQL',
    ],
    timelineTypical: '6 – 14 weeks from interface prototypes to store approval',
    statsLabel: 'Average Crash-Free Session Rate',
    statsValue: '99.94%',
    caseStudyHighlight: 'PulseBio Health & Wearable Telemetry App',
    faqs: [
      {
        question: 'Should we build Native (Swift/Kotlin) or Cross-Platform (React Native)?',
        answer:
          'During discovery, we evaluate your hardware sensor requirements, 3D rendering needs, and time-to-market. For 90% of commercial applications, modern React Native delivers 120Hz native performance while saving 40% in dual-platform maintenance.',
      },
      {
        question: 'How do you handle offline operation in low-connectivity areas?',
        answer:
          'We implement an offline-first local database with an asynchronous sync queue that reconciles mutations with the server automatically when connectivity restores.',
      },
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    tagline: 'Multi-Tenant Scalability. Metered Billing. Enterprise Architecture.',
    shortDescription:
      'Cloud-native SaaS applications engineered with multi-tenant data isolation, self-serve onboarding, automated billing, and high-concurrency cloud infrastructure.',
    fullDescription:
      'Building a generational SaaS product requires more than UI code; it demands rock-solid tenant tenancy models, granular role-based access control, automated payment lifecycle handling, and elastic cloud autoscaling. We architect software platforms that scale from your first 10 beta users to 500,000+ active enterprise seats.',
    businessProblems: [
      'Architectural bottlenecks preventing scaling beyond initial users without server crashes',
      'Complex billing scenarios (usage tiers, seats, add-ons, enterprise invoicing) prone to revenue leakage',
      'Security and SOC 2 / HIPAA compliance hurdles when selling to Fortune 500 enterprise buyers',
      'Slow development velocity caused by monolithic legacy codebases without clean API separation',
    ],
    solutions: [
      'Clean Multi-Tenant Infrastructure: Isolated database schemas or secure tenant partitions with zero data bleed',
      'Universal Subscription & Usage Billing: Full Stripe Billing, Paddle, or custom metered consumption pipelines',
      'Enterprise Identity & RBAC: Single Sign-On (SAML/Okta/Azure AD), audit logs, and fine-grained permissions',
      'Elastic Serverless & Container Orchestration: Microservices deployed on Kubernetes or AWS ECS with instant autoscaling',
    ],
    capabilities: [
      'Multi-Tenant SaaS Architecture Design',
      'Enterprise SSO & SCIM User Provisioning',
      'Complex Metered & Tiered Billing Engines (Stripe)',
      'Real-Time Collaboration Engines (WebSockets / WebRTC)',
      'REST & GraphQL Developer API Platforms with Webhook Dispatchers',
      'Audit Logging, SOC 2 Type II & HIPAA Architectural Compliance',
    ],
    deliverables: [
      'Full-Stack SaaS Platform with Modular Admin & Customer Portals',
      'Terraform / CloudFormation Infrastructure-as-Code scripts',
      'Automated Billing, Invoicing, and Customer Self-Service Portal',
      'Public API Documentation & Developer Sandbox Environment',
      'Disaster Recovery, Automated Backup, and Multi-AZ Failover Config',
    ],
    techStack: [
      'TypeScript',
      'Node.js / Go',
      'PostgreSQL',
      'Redis',
      'AWS / GCP',
      'Docker / Kubernetes',
      'Stripe Billing',
      'Terraform',
    ],
    timelineTypical: '8 – 16 weeks to production enterprise release',
    statsLabel: 'Peak Query Concurrency Handled',
    statsValue: '45,000 req/s',
    caseStudyHighlight: 'NexusOps Cloud Infrastructure Monitor',
    faqs: [
      {
        question: 'How do you guarantee tenant data privacy for enterprise security audits?',
        answer:
          'We implement row-level security (RLS) or dedicated schema isolation paired with strict cryptographic tenant keys, passing rigorous enterprise pen-testing and SOC 2 compliance standards.',
      },
      {
        question: 'Can you handle complex B2B billing such as annual invoicing and seat add-ons?',
        answer:
          'Yes. We architect complete tiered seat models, metered API consumption counters, self-serve plan upgrades, and automated PDF invoice generation.',
      },
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    tagline: 'Tailored Logic. Frictionless Integrations. Proprietary Advantage.',
    shortDescription:
      'Bespoke enterprise dashboards, operations portals, ERP extensions, and high-performance internal tools engineered around your exact operational workflows.',
    fullDescription:
      'Off-the-shelf software forces high-growth businesses into rigid, generic operational templates. We engineer tailored software systems that mirror your exact competitive workflows, connect your fragmented tools into a unified source of truth, and unlock operational efficiencies unattainable with generic SaaS.',
    businessProblems: [
      'Employees juggling 8+ disjointed software tabs and spreadsheets, creating preventable operational bottlenecks',
      'Off-the-shelf software lacking crucial industry-specific logic, formulas, and reporting metrics',
      'Rigid per-seat third-party software constraints that hinder team scalability',
      'Loss of proprietary intellectual property when forced to run operations on third-party public platforms',
    ],
    solutions: [
      'Unified Operational Cockpit: Custom real-time executive and operations dashboards uniting all business data',
      'Bespoke Automation Engines: Custom business logic calculation and transaction processing engines',
      'Deep API Interoperability: Bi-directional synchronization across legacy mainframes, cloud databases, and modern APIs',
      'Zero Per-Seat Licensing: You own 100% of the intellectual property and code with zero recurring vendor rent',
    ],
    capabilities: [
      'Executive & Operational BI Dashboards',
      'Custom ERP, WMS, and Supply Chain Systems',
      'Automated Workflow & Approval Engines',
      'Legacy System Modernization & Cloud Migration',
      'High-Throughput ETL & Data Synchronization',
      'Granular Role-Based Operational Security',
    ],
    deliverables: [
      'Proprietary Software Platform with 100% IP Ownership Transfer',
      'Custom High-Resolution Component Library & Design System',
      'Automated Integration Connectors for Existing Software Tools',
      'Comprehensive Admin Control Center with Activity Auditing',
      'Deployment Playbook, Ops Manual, and Engineer Handover Session',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Go / Python',
      'PostgreSQL',
      'ClickHouse',
      'Kafka / RabbitMQ',
      'AWS Lambda',
      'Tailwind CSS',
    ],
    timelineTypical: '6 – 12 weeks for end-to-end custom system rollout',
    statsLabel: 'Internal Operational Time Saved',
    statsValue: '600+ hrs/mo',
    caseStudyHighlight: 'OmniLogistics Fleet & Dispatch Engine',
    faqs: [
      {
        question: 'Who owns the intellectual property and code upon completion?',
        answer:
          'You retain 100% full intellectual property, copyright, and code ownership. ZYQUO acts as your elite engineering partner; there are no hidden vendor locks or recurring code licenses.',
      },
      {
        question: 'What happens when our operational needs evolve after deployment?',
        answer:
          'Because our codebases are built with clean modular architecture and strict TypeScript typings, extending new features or onboarding internal developers is seamless.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    tagline: 'Scientific Acquisition. Algorithmic SEO. Compounding Pipeline.',
    shortDescription:
      'High-intent enterprise SEO, Answer Engine Optimization (AEO), generative search positioning, and data-driven paid acquisition systems.',
    fullDescription:
      'Modern digital growth requires engineering rigor, not vanity metrics. We construct mathematical growth engines combining algorithmic technical SEO, Generative Engine Optimization (GEO/AEO for ChatGPT, Perplexity, and Google Gemini), disciplined paid acquisition, and relentless conversion rate optimization.',
    businessProblems: [
      'Draining ad spend on low-intent clicks without measurable qualified pipeline or revenue attribution',
      'Plummeting organic traffic due to outdated SEO tactics and failure to optimize for AI answer engines',
      'Disjointed customer journeys with high bounce rates on landing pages',
      'Lack of clear multi-touch attribution connecting marketing dollars to signed client contracts',
    ],
    solutions: [
      'Answer Engine & Generative Optimization (AEO/GEO): Structuring content for citations in AI search engines',
      'Technical SEO & Core Vitals Dominance: Semantic schema graphs, crawl optimization, and zero-defect metadata',
      'High-Intent Paid Acquisition (Google / LinkedIn): Laser-targeted B2B campaigns focused strictly on qualified pipeline',
      'Conversion Rate Optimization (CRO): Multivariate split testing and behavioral heatmaps maximizing page yield',
    ],
    capabilities: [
      'Technical SEO & Algorithmic Search Optimization',
      'Answer Engine Optimization (Perplexity, ChatGPT, Gemini)',
      'B2B Account-Based Marketing (ABM) on LinkedIn & Google',
      'Full-Funnel CRO & High-Converting Landing Page Engineering',
      'Advanced Multi-Touch Attribution & Server-Side Analytics',
      'Local GEO & Google Business Profile Management',
    ],
    deliverables: [
      'Comprehensive Technical SEO & AI Search Visibility Roadmap',
      'Turnkey High-Converting Landing Page Variants with A/B Setup',
      'Campaign Architecture & Negative Keyword Safeguards',
      'Server-Side Event Tracking Setup (CAPI, GA4, BigQuery)',
      'Bi-Weekly Executive Pipeline & CAC Attribution Reports',
    ],
    techStack: [
      'Google Ads API',
      'LinkedIn Campaign Manager',
      'Google Tag Manager',
      'BigQuery',
      'Looker Studio',
      'Schema.org JSON-LD',
      'PostHog',
    ],
    timelineTypical: 'Ongoing monthly growth sprints with 30-day initial baseline deployment',
    statsLabel: 'Average Inbound Qualified Pipeline Increase',
    statsValue: '+184%',
    caseStudyHighlight: 'Apex B2B Industrial Lead Engine',
    faqs: [
      {
        question: 'What is AEO and why does our business need it now?',
        answer:
          'Answer Engine Optimization ensures your company is referenced as the authoritative answer when prospective clients query ChatGPT, Perplexity, or Google Gemini. As conversational AI replaces traditional search queries, AEO is the new frontier of organic acquisition.',
      },
      {
        question: 'How do you measure marketing success?',
        answer:
          'We measure qualified pipeline value, customer acquisition efficiency, and closed revenue. We reject vanity clicks, impressions, or irrelevant traffic.',
      },
    ],
  },
  {
    id: 'branding-strategy',
    title: 'Branding & Digital Strategy',
    tagline: 'Distinctive Identity. Premium Positioning. Undeniable Authority.',
    shortDescription:
      'Executive brand identity, design systems, luxury visual languages, and strategic digital roadmaps that position your brand at the undisputed peak of its category.',
    fullDescription:
      'In a world flooded with generic digital noise, perception dictates market leadership. We craft timeless brand identities, meticulous design tokens, luxury typography hierarchies, and strategic positioning frameworks that turn technology companies into generational market icons.',
    businessProblems: [
      'Looking indistinguishable from lower-tier competitors, creating friction during enterprise sales cycles',
      'Inconsistent visual presentation across pitch decks, web portals, mobile apps, and marketing materials',
      'Unclear value proposition that confuses enterprise buyers and slows down executive sign-offs',
      'Lack of a cohesive design system, forcing developers to reinvent UI elements on every sprint',
    ],
    solutions: [
      'Strategic Market Positioning: Defining your unique category point-of-view that renders rivals irrelevant',
      'Monolithic Visual Identity: Monograms, custom typography, metallic palettes, and art direction guidelines',
      'Unified Tokenized Design System: Complete Figma component library mapped 1:1 to React code tokens',
      'Executive Brand Collateral: High-impact investor decks, proposals, and luxury digital assets',
    ],
    capabilities: [
      'Brand Identity & Monogram Craftsmanship',
      'Comprehensive Design Systems in Figma & Code',
      'Typography Selection & Precision Art Direction',
      'Category Creation & Narrative Strategy',
      'Executive Pitch Decks & Sales Collateral',
      'Brand Governance & Digital Guideline Portals',
    ],
    deliverables: [
      'Master Brand Identity Guidelines (PDF & Interactive Web Portal)',
      'Vector Brand Asset Suite (SVG, EPS, PNG in all colorways)',
      'Complete Production-Ready Figma Design System with Variables',
      'Executive Keynote & Pitch Deck Master Templates',
      'Brand Messaging Matrix & Positioning Manifesto',
    ],
    techStack: [
      'Figma',
      'Adobe Creative Suite',
      'Storybook',
      'Tailwind Design Tokens',
      'Cinema 4D',
      'Spline',
    ],
    timelineTypical: '4 – 8 weeks from positioning discovery to master system delivery',
    statsLabel: 'Client Contract Value Lift Post-Rebrand',
    statsValue: '3.2x',
    caseStudyHighlight: 'Verve Capital Global Brand System',
    faqs: [
      {
        question: 'How does branding translate into measurable business ROI?',
        answer:
          'A premium brand identity commands enterprise authority, shortens enterprise procurement cycles, and attracts higher-caliber talent. When your brand looks world-class, buyers enter sales conversations with pre-established trust.',
      },
      {
        question: 'Do you provide ready-to-code design system tokens?',
        answer:
          'Yes. Every brand system we deliver includes tokenized color hexes, typography scales, spacing units, and radius math directly mapped to Tailwind CSS variables for instant developer adoption.',
      },
    ],
  },
];
