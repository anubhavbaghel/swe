import React from "react";
import {
  Bot,
  Cpu,
  Layers,
  Database,
  Terminal,
  Workflow,
  ShieldCheck,
  Server,
  Cloud,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Agentic AI & Orchestration",
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    badge: "AI CORE",
    description: "Architectures for autonomous reasoning, tool selection, RAG, and multi-agent coordination.",
    skills: [
      "LangGraph & Multi-Agent Workflows",
      "Model Context Protocol (MCP)",
      "OpenAI & Anthropic & Gemini APIs",
      "Dynamic Function / Tool Calling",
      "RAG & pgvector Semantic Search",
      "Pydantic & Zod Schema Validation",
      "Deterministic Prompt Engineering",
      "Agent State Management & Memory",
    ],
  },
  {
    title: "Backend & Systems Engineering",
    icon: <Server className="w-5 h-5 text-blue-400" />,
    badge: "BACKEND",
    description: "Scalable microservices, asynchronous message queues, and high-performance databases.",
    skills: [
      "Python (FastAPI, Asyncio, Pydantic)",
      "TypeScript & Node.js",
      "PostgreSQL & Supabase Architecture",
      "Redis & BullMQ Background Workers",
      "RESTful & GraphQL API Design",
      "Event-Driven Webhook Pipelines",
      "Authentication & Row-Level Security (RLS)",
      "Relational Data Modeling & Indexing",
    ],
  },
  {
    title: "Frontend Engineering & Interfaces",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    badge: "FRONTEND",
    description: "Responsive, ultra-fast interfaces and operational dashboards designed for real-time clarity.",
    skills: [
      "React 19 & Next.js App Router",
      "TanStack Start, Router & Query",
      "Tailwind CSS & Modern Utility UI",
      "TypeScript Type Safety",
      "Framer Motion Micro-Interactions",
      "Radix UI Accessible Primitives",
      "Real-time WebSocket & SSE Updates",
      "Vite & Modern Tooling",
    ],
  },
  {
    title: "Cloud, DevOps & Automation",
    icon: <Cloud className="w-5 h-5 text-amber-400" />,
    badge: "INFRASTRUCTURE",
    description: "Deploying resilient, containerized services with continuous delivery and zero downtime.",
    skills: [
      "Docker & Containerization",
      "Vercel & Cloudflare Edge Services",
      "GitHub Actions (CI/CD Pipelines)",
      "Linux & Bash Scripting",
      "Postman API Testing Suites",
      "WhatsApp Cloud & Messaging APIs",
      "Stripe & Payment Gateway Workflows",
      "System Telemetry & Error Logging",
    ],
  },
];

const TechArsenal = () => {
  return (
    <section id="arsenal" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
          Technical Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          The Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Arsenal
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
          Production technologies and patterns selected for determinism, speed, security, and enterprise maintainability.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {category.icon}
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-gray-300 bg-black/40">
                {category.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {category.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-gray-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechArsenal;
