import React, { useState } from "react";
import {
  ExternalLink,
  ArrowRight,
  Bot,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import thaddeusImg from "../assets/thaddeus_ss.png";

const projects = [
  {
    id: "01",
    title: "Thaddeus Creates — SSR Studio & Commerce Pipeline",
    category: "Full-Stack Web & Automation",
    role: "Full-Stack Architecture & Systems Engineer",
    summary:
      "Handmade keepsakes studio engineered with React 19, TanStack Start SSR, and Supabase. Features WhatsApp dynamic ordering, automated multi-recipient email alerts, an authenticated admin dashboard, and full-coverage Schema.org rich snippet SEO.",
    problemSolved:
      "Eliminated chaotic manual DM order intake by structuring customer inquiries into validated PostgreSQL records, linking dynamic WhatsApp carts, and routing owner triage.",
    metrics: [
      "Sub-second initial SSR page load",
      "Dynamic WhatsApp cart generation",
      "100% Google Rich Snippet compliance",
    ],
    tech: ["React 19", "TypeScript", "TanStack Start SSR", "Supabase", "Tailwind CSS"],
    image: thaddeusImg,
    liveUrl: "https://thaddeuscreates.shop/",
    githubUrl: "https://github.com/anubhavbaghel/thaddeus-creates",
    featured: true,
  },
  {
    id: "02",
    title: "Autonomous Inbound Lead Qualification & CRM Engine",
    category: "Agentic AI & RevOps Automation",
    role: "AI Workflow Architect",
    summary:
      "Multi-agent sales pipeline that automatically captures inbound enterprise leads, performs web research via APIs, computes ICP qualification scores, and routes enriched opportunities into CRM with customized executive pitch notes.",
    problemSolved:
      "Cut inbound lead response time from 6+ hours to under 30 seconds, boosting meeting conversion rates by eliminating human response lag.",
    metrics: [
      "94% reduction in lead triage latency",
      "Zero-hallucination deterministic scoring",
      "Automated bi-directional CRM sync",
    ],
    tech: ["Python", "FastAPI", "OpenAI Function Calling", "LangGraph", "HubSpot API", "PostgreSQL"],
    featured: false,
  },
  {
    id: "03",
    title: "Cognitive Multi-Modal Invoice & Accounting Extraction",
    category: "Vision AI & Enterprise Automation",
    role: "Backend & Systems Developer",
    summary:
      "Automated document processing pipeline that parses unstructured multi-page supplier PDF invoices, extracts itemized tax tables into structured JSON schemas, and checks against purchase orders for pricing discrepancies.",
    problemSolved:
      "Replaced tedious manual invoice cross-checking and data entry, preventing billing errors and accelerating accounts payable cycles.",
    metrics: [
      "99.4% field extraction accuracy",
      "Instant discrepancy detection",
      "Automated accounting ledger draft",
    ],
    tech: ["Python", "Claude 3.5 Sonnet", "PyMuPDF", "pgvector", "PostgreSQL", "Docker"],
    featured: false,
  },
  {
    id: "04",
    title: "Self-Healing E-Commerce & ERP Sync Sentinel",
    category: "Distributed Systems & Webhooks",
    role: "Backend Systems Engineer",
    summary:
      "Resilient event-driven microservice that listens to multi-platform webhooks, validates payloads with strict Zod/Pydantic schemas, and guarantees idempotent data synchronization with automated exponential backoff retries.",
    problemSolved:
      "Eliminated silent order drop-offs and inventory drift between store frontends, warehouse ERPs, and customer notification channels.",
    metrics: [
      "Zero dropped webhook events",
      "Exponential backoff auto-recovery",
      "Sub-200ms processing throughput",
    ],
    tech: ["TypeScript", "Node.js", "Redis BullMQ", "PostgreSQL", "Webhooks", "Docker"],
    featured: false,
  },
];

const SolutionsShowcase = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
          Proven Engineering Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Software &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            AI Automation Builds
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
          Real production systems engineered to eliminate manual bottlenecks, integrate complex APIs, and deliver verifiable business leverage.
        </p>
      </div>

      {/* Featured Big Card (Thaddeus Creates) */}
      {projects.filter((p) => p.featured).map((project) => (
        <div
          key={project.id}
          className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl mb-12 hover:border-emerald-500/40 transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Preview */}
            <div className="lg:col-span-6 relative overflow-hidden bg-neutral-950 flex items-center justify-center min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#030712] z-10 pointer-events-none" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <span className="absolute top-4 left-4 z-20 text-xs font-mono px-3 py-1 rounded-full bg-black/70 border border-white/10 text-emerald-400 backdrop-blur-md">
                FEATURED PRODUCTION SYSTEM
              </span>
            </div>

            {/* Details Content */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-600">&bull;</span>
                  <span className="text-xs text-gray-400">{project.role}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Business Impact Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">
                    The Business Problem Solved:
                  </span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2 mb-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges & Actions */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Grid for Other Systems */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {projects.filter((p) => !p.featured).map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-500">
                  #{project.id}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                {project.summary}
              </p>

              {/* Business Problem */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-5">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                  Friction Addressed:
                </span>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* Metrics */}
              <div className="space-y-1.5 mb-6">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsShowcase;
