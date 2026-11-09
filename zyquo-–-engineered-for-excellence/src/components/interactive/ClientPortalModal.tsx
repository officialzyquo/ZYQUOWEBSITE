import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import {
  FolderKanban,
  CheckCircle2,
  Clock,
  FileCode,
  ShieldCheck,
  Send,
  MessageSquare,
  LifeBuoy,
  Download,
  AlertCircle,
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'documents' | 'support'>('overview');
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');
  const [ticketLogged, setTicketLogged] = useState(false);

  const mockProject = {
    name: 'Kroma Wealth AI Core Pipeline',
    status: 'Sprint 04 of 06 · Active Validation',
    progress: 72,
    leadArchitect: 'Alexander Vance (VP AI Engineering)',
    nextReview: 'Thursday, 14:00 EST',
  };

  const milestones = [
    {
      title: 'Phase 01: Discover & Architectural Blueprint',
      status: 'Completed',
      date: 'Completed Oct 14',
      deliverables: 'Architecture RFC, Data Schema, Mutual NDA, Git Repo Setup',
    },
    {
      title: 'Phase 02: Multi-Agent Model Fine-Tuning & Vector DB',
      status: 'Completed',
      date: 'Completed Oct 28',
      deliverables: 'FastAPI Microservice, pgvector schema, LangGraph agent nodes',
    },
    {
      title: 'Phase 03: Glassmorphism Executive Cockpit & UI',
      status: 'Completed',
      date: 'Completed Nov 04',
      deliverables: 'React 19 Frontend, Tailwind v4 design system, SSO Login',
    },
    {
      title: 'Phase 04: End-to-End Stress Testing & SOC2 Audit',
      status: 'In Progress',
      date: 'Target: Nov 16',
      deliverables: 'Automated CI/CD security scanning, P99 latency benchmark <50ms',
    },
    {
      title: 'Phase 05: Production Deployment & Cloud Autoscaling',
      status: 'Upcoming',
      date: 'Target: Nov 24',
      deliverables: 'Terraform AWS ECS provisioning, Multi-AZ failover testing',
    },
  ];

  const documents = [
    { name: 'ZYQUO_Kroma_Technical_Architecture_v1.4.pdf', size: '4.8 MB', date: 'Nov 02, 2026' },
    { name: 'SOC2_Security_Compliance_Verification.pdf', size: '2.1 MB', date: 'Oct 29, 2026' },
    { name: 'API_OpenAPI_Swagger_Specification.json', size: '340 KB', date: 'Oct 25, 2026' },
    { name: 'Master_Services_Agreement_Signed.pdf', size: '1.2 MB', date: 'Oct 08, 2026' },
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportSubject || !supportMessage) return;
    setTicketLogged(true);
    setTimeout(() => {
      setTicketLogged(false);
      setSupportSubject('');
      setSupportMessage('');
    }, 4000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="ZYQUO Client Portal"
      subtitle="Interactive client management foundation prototype: real-time sprint telemetry, deliverables, and SLA monitoring."
      maxWidth="max-w-5xl"
    >
      <div className="space-y-6">
        {/* Prototype Notice Banner */}
        <div className="p-3.5 rounded-xl bg-[#D4AF62]/10 border border-[#D4AF62]/30 flex items-center justify-between text-xs text-[#F5EBDD]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF62]" />
            <span>
              <strong>Client Portal Foundation Prototype:</strong> Demonstrating active sprint tracking, SLA monitors, and secure asset vaults.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#D4AF62] uppercase tracking-wider hidden sm:inline">
            Prototype Demo Mode
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#242424] pb-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Sprint Overview', icon: FolderKanban },
            { id: 'milestones', label: 'Milestones & Deliverables', icon: CheckCircle2 },
            { id: 'documents', label: 'Secure Documents Vault', icon: FileCode },
            { id: 'support', label: 'Direct SLA Support', icon: LifeBuoy },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                  active
                    ? 'bg-[#D4AF62]/20 border border-[#D4AF62] text-white shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#D4AF62]' : 'text-[#A3A3A3]'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#A3A3A3] uppercase">Active Engagement</span>
                <p className="text-base font-bold text-white mt-1">{mockProject.name}</p>
                <span className="text-xs text-[#D4AF62] mt-1 block">{mockProject.status}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#A3A3A3] uppercase">Overall Sprint Progress</span>
                <p className="text-2xl font-bold text-white mt-1">{mockProject.progress}%</p>
                <div className="w-full h-1.5 rounded-full bg-white/10 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF62] to-[#B58A3A]"
                    style={{ width: `${mockProject.progress}%` }}
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#A3A3A3] uppercase">Dedicated Lead Architect</span>
                <p className="text-sm font-semibold text-white mt-1">{mockProject.leadArchitect}</p>
                <span className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  Next Review: {mockProject.nextReview}
                </span>
              </div>
            </div>

            {/* Live System Invariants */}
            <div className="p-5 rounded-xl bg-[#0B0B0B] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase text-[#A3A3A3] tracking-wider">
                  Live Infrastructure Telemetry
                </h4>
                <span className="text-[11px] text-[#D4AF62] font-mono">Real-Time Metrics</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div>
                  <span className="text-xs text-[#A3A3A3]">Production Uptime</span>
                  <p className="text-lg font-mono font-bold text-white">99.994%</p>
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3]">API P99 Latency</span>
                  <p className="text-lg font-mono font-bold text-white">38ms</p>
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3]">CI/CD Test Pass</span>
                  <p className="text-lg font-mono font-bold text-emerald-400">412 / 412</p>
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3]">Cloud Region</span>
                  <p className="text-lg font-mono font-bold text-white">us-east-1</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="space-y-3">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-[#D4AF62]/30 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        m.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : m.status === 'In Progress'
                          ? 'bg-[#D4AF62]/20 text-[#D4AF62] border border-[#D4AF62]/30'
                          : 'bg-white/10 text-[#A3A3A3]'
                      }`}
                    >
                      {m.status}
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-white">{m.title}</h5>
                  </div>
                  <p className="text-xs text-[#A3A3A3] pl-0.5">{m.deliverables}</p>
                </div>
                <span className="text-xs font-mono text-[#D4AF62] shrink-0">{m.date}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-3">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileCode className="w-5 h-5 text-[#D4AF62]" />
                  <div>
                    <p className="text-xs font-medium text-white">{doc.name}</p>
                    <p className="text-[11px] text-[#A3A3A3] font-mono">
                      {doc.size} · Uploaded {doc.date}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloading verified cryptographic asset: ${doc.name}`)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF62]/20 text-[#D4AF62] transition-colors border border-white/10"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'support' && (
          <div className="space-y-4">
            {ticketLogged ? (
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="text-sm font-bold text-white">SLA Support Ticket Dispatched</h5>
                <p className="text-xs text-[#A3A3A3]">
                  Ticket #ZYQ-8942 logged. Guaranteed response time for Tier-1 accounts: under 60 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs text-[#A3A3A3]">Subject / Component Affected</label>
                  <input
                    type="text"
                    required
                    value={supportSubject}
                    onChange={(e) => setSupportSubject(e.target.value)}
                    placeholder="e.g. Ingestion Pipeline Throughput Optimization"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-[#A3A3A3]">Issue Description / Log Trace</label>
                  <textarea
                    rows={4}
                    required
                    value={supportMessage}
                    onChange={(e) => setSupportMessage(e.target.value)}
                    placeholder="Provide relevant reproduction steps or questions for your lead engineer..."
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D4AF62] focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF62] to-[#B58A3A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Dispatch High-Priority SLA Ticket
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
