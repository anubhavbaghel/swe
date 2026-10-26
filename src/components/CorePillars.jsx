import React from "react";
import {
  Cpu,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
  GitBranch,
  Database,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const CorePillars = () => {
  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      badge: "AGENTIC AI & ORCHESTRATION",
      title: "Autonomous Multi-Agent Workflows",
      description:
        "Building goal-driven agents that decompose business requests into autonomous subtasks, select dynamic tools, query APIs, and self-correct with zero manual prompting.",
      features: [
        "Planner-Executor & Critic multi-agent architectures",
        "Dynamic tool use & Model Context Protocol (MCP)",
        "Stateful memory & multi-turn conversational persistence",
      ],
      glow: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      badge: "ENTERPRISE AUTOMATION",
      title: "Business Process & Systems Integration",
      description:
        "Connecting fragmented tools, internal databases, CRMs, and messaging channels to eliminate costly human data-entry bottlenecks and sync delays.",
      features: [
        "WhatsApp, Email & Webhook autonomous event listeners",
        "Automated CRM dispatch, lead triage & enrichment",
        "Bi-directional database reconciliation & ERP entry",
      ],
      glow: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      badge: "SOFTWARE ARCHITECTURE",
      title: "Production Full-Stack Engineering",
      description:
        "Engineering high-speed, secure web applications and microservice backends designed for enterprise reliability, high concurrent throughput, and low latency.",
      features: [
        "React 19, TypeScript & Next.js/SSR responsive interfaces",
        "Python FastAPI, Node.js microservices & REST/GraphQL APIs",
        "PostgreSQL, Supabase & Redis caching architectures",
      ],
      glow: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      badge: "SAFETY & RELIABILITY",
      title: "Deterministic Guardrails & Zero Hallucination",
      description:
        "Wrapping stochastic LLMs with hardened engineering constraints: rigorous schema validation, automated sanity tests, and human-in-the-loop review triggers.",
      features: [
        "Strict Pydantic & Zod input/output schema enforcement",
        "Human-in-the-loop escalation on low confidence scores",
        "Cost-effective token economics & caching strategies",
      ],
      glow: "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
          Methodology & Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          How I Solve Complex{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Business Problems
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
          AI is only as good as the software architecture around it. I combine rigorous full-stack software development with autonomous agentic intelligence to deliver reliable, measurable business impact.
        </p>
      </div>

      {/* Grid of Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${pillar.glow} group relative`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2.5">
              {pillar.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorePillars;
