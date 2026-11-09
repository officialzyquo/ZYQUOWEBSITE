import React, { useState } from 'react';
import { Layers, Server, Smartphone, Cloud, Bot, Database, Workflow, BarChart3 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: 'Frontend Development',
      icon: Layers,
      items: [
        { name: 'React 19', role: 'Component Core', highlight: 'Concurrent Mode' },
        { name: 'TypeScript', role: 'Type Safety', highlight: 'Strict Invariants' },
        { name: 'Next.js 15', role: 'Server Components', highlight: 'Edge Rendering' },
        { name: 'Tailwind CSS v4', role: 'Design Tokens', highlight: 'Zero-Runtime' },
        { name: 'Three.js / WebGL', role: '3D Experiences', highlight: 'GPU Shaders' },
        { name: 'Framer Motion', role: 'Physics & Motion', highlight: '60fps Transitions' },
      ],
    },
    {
      name: 'Backend & APIs',
      icon: Server,
      items: [
        { name: 'FastAPI / Python', role: 'AI Microservices', highlight: 'Asynchronous' },
        { name: 'Go (Golang)', role: 'High-Concurrency Services', highlight: 'Microsecond Latency' },
        { name: 'Node.js / Express', role: 'BFF & Edge Middleware', highlight: 'High Throughput' },
        { name: 'GraphQL / gRPC', role: 'Data Protocols', highlight: 'Strong Schemas' },
        { name: 'Kafka / RabbitMQ', role: 'Event Streaming', highlight: 'Zero Message Loss' },
      ],
    },
    {
      name: 'Mobile Engineering',
      icon: Smartphone,
      items: [
        { name: 'React Native', role: 'Cross-Platform App', highlight: 'Native 120Hz' },
        { name: 'SwiftUI', role: 'iOS Native Engine', highlight: 'Biometrics & NFC' },
        { name: 'Kotlin Compose', role: 'Android Native', highlight: 'Background Daemons' },
        { name: 'WatermelonDB', role: 'Offline-First DB', highlight: 'Instant Sync' },
      ],
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Amazon Web Services', role: 'ECS / Lambda / S3', highlight: 'SOC 2 Type II' },
        { name: 'Google Cloud Platform', role: 'Kubernetes (GKE)', highlight: 'Auto-Scaling' },
        { name: 'Cloudflare Workers', role: 'Edge Compute & CDN', highlight: 'Global 10ms TTFB' },
        { name: 'Terraform', role: 'Infrastructure-as-Code', highlight: 'Reproducible Stacks' },
        { name: 'Docker / K8s', role: 'Container Clusters', highlight: 'Self-Healing' },
      ],
    },
    {
      name: 'Artificial Intelligence',
      icon: Bot,
      items: [
        { name: 'PyTorch', role: 'Deep Learning Core', highlight: 'Model Training' },
        { name: 'LangGraph & LangChain', role: 'Agent Orchestration', highlight: 'State Machines' },
        { name: 'LlamaIndex', role: 'RAG Ingestion Pipelines', highlight: 'Document Parsing' },
        { name: 'vLLM / TensorRT', role: 'Inference Acceleration', highlight: 'Low Token Latency' },
        { name: 'HuggingFace', role: 'Model Weights & Embeddings', highlight: 'Private Hub' },
      ],
    },
    {
      name: 'Databases & Storage',
      icon: Database,
      items: [
        { name: 'PostgreSQL & pgvector', role: 'Relational & Embeddings', highlight: 'ACID Guarantee' },
        { name: 'Redis Sentinel', role: 'In-Memory Cache & Queues', highlight: 'Sub-millisecond' },
        { name: 'ClickHouse', role: 'Real-Time Analytics OLAP', highlight: 'Billions of Rows' },
        { name: 'Pinecone / Milvus', role: 'Dedicated Vector DB', highlight: 'High QPS Search' },
      ],
    },
    {
      name: 'Business Automation',
      icon: Workflow,
      items: [
        { name: 'Temporal.io', role: 'Durable Workflows', highlight: 'Fault-Tolerant Code' },
        { name: 'Custom ERP Connectors', role: 'SAP / Oracle / NetSuite', highlight: 'Two-Way Sync' },
        { name: 'Stripe Billing & API', role: 'Global Merchant Gateway', highlight: 'Automated Tax' },
        { name: 'DocuSign / WebAuthn', role: 'Cryptographic Signatures', highlight: 'Legal Compliance' },
      ],
    },
    {
      name: 'Analytics & Growth',
      icon: BarChart3,
      items: [
        { name: 'PostHog / Mixpanel', role: 'Product Telemetry', highlight: 'Funnel Optimization' },
        { name: 'Google BigQuery', role: 'Enterprise Data Warehouse', highlight: 'Server-Side CAPI' },
        { name: 'Schema.org JSON-LD', role: 'AEO / Semantic Graph', highlight: 'AI Search Visibility' },
        { name: 'Looker Studio', role: 'Executive BI Cockpits', highlight: 'Real-Time Pipeline' },
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF62]">
            07 · ENGINEERING ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            ENGINEERED WITH <br />
            <span className="gold-text-gradient">THE RIGHT TECHNOLOGY.</span>
          </h2>
          <p className="text-sm text-[#A3A3A3] leading-relaxed pt-1">
            We operate exclusively with modern, battle-tested programming languages, frameworks, and cloud primitives.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 border-b border-[#242424] pb-3 overflow-x-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const active = activeTab === idx;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                  active
                    ? 'bg-[#D4AF62]/20 border border-[#D4AF62] text-white shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#D4AF62]' : 'text-[#A3A3A3]'}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {categories[activeTab].items.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF62]/40 transition-all text-left flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#F5EBDD] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#D4AF62] bg-[#D4AF62]/10 px-2 py-0.5 rounded border border-[#D4AF62]/20">
                    {tech.highlight}
                  </span>
                </div>
                <p className="text-xs text-[#A3A3A3] mt-2">{tech.role}</p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                <span>Status: Production Verified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
