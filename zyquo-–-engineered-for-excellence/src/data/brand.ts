export const BRAND = {
  name: 'ZYQUO',
  tagline: 'ENGINEERED FOR EXCELLENCE.',
  heroHeadline: "WE ENGINEER WHAT'S NEXT.",
  heroSubheadline:
    'Intelligent technology. Exceptional digital experiences. Engineered solutions that move businesses forward.',
  heroSupporting:
    'From AI-powered automation to custom software and digital growth, we transform ambitious ideas into intelligent digital realities.',
  logoAsset: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_1.32.15_PM_5fc7513f.jpeg',
  contact: {
    email: 'officialzyquo@gmail.com',
    executiveEmail: 'officialzyquo@gmail.com',
    phone: '9263666014',
    whatsappNumber: '919263666014',
    whatsappDisplay: '9263666014',
    headquarters: 'Deoghar Jharkhand',
    instagram: 'zyquoglobal',
    instagramUrl: 'https://instagram.com/zyquoglobal',
    linkedin: 'ZYQUO Global',
    linkedinUrl: 'https://linkedin.com/company/zyquoglobal',
  },
  foundedYear: '2022',
  sinceText: 'Since 2022',
  experienceYears: '4 Years of Experience',
  colors: {
    deepBlack: '#050505',
    secondaryBlack: '#0B0B0B',
    champagneGold: '#D4AF62',
    metallicGold: '#B58A3A',
    warmIvory: '#F5EBDD',
    pureWhite: '#F5F5F5',
    mutedGrey: '#A3A3A3',
    darkGrey: '#242424',
  },
  metrics: [
    { label: 'Engineering Experience', value: '4 Years' },
    { label: 'Established', value: 'Since 2022' },
    { label: 'Client Retention Rate', value: '98.4%' },
    { label: 'Enterprise Uptime SLA', value: '99.99%' },
    { label: 'Global Systems Deployed', value: '180+' },
  ],
  pillars: [
    {
      title: 'AI-Integrated Architecture',
      description:
        'We do not treat artificial intelligence as a marketing gimmick. We embed agentic pipelines, fine-tuned models, and autonomous workflows deeply into your business infrastructure.',
    },
    {
      title: 'Precision Software Craftsmanship',
      description:
        'Every codebase is built with zero-compromise architectural discipline: microsecond latency, type safety, resilient failover systems, and enterprise modularity.',
    },
    {
      title: 'Strategic Capital Impact',
      description:
        'Engineering is a multiplier for enterprise valuation. Every system we design is directly aligned with operational efficiency, margin expansion, and market leadership.',
    },
  ],
};

export const getWhatsAppUrl = (message = 'Hello ZYQUO team, I would like to discuss a project.') => {
  return `https://wa.me/919263666014?text=${encodeURIComponent(message)}`;
};
