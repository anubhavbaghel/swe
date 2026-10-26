import React, { useState } from "react";
import {
  Bot,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Database,
  Send,
  FileText,
  Search,
  ShieldAlert,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

const scenarios = [
  {
    id: "lead-triage",
    title: "Inbound Lead Qualification & CRM Routing",
    description: "Evaluates inbound enterprise leads, verifies LinkedIn & company domains, calculates fit score, and dispatches tier-1 prospects into HubSpot with custom outreach drafts.",
    target: "Sales & RevOps Automation",
    metrics: { timeSaved: "92%", latency: "420ms", reliability: "99.9%" },
    steps: [
      {
        agent: "Planner Agent",
        action: "Inbound webhook payload parsed from website form.",
        tool: "Webhook Listener",
        output: "Extracted: { company: 'FinTech Corp', role: 'VP Operations', budget: '$50k+' }",
      },
      {
        agent: "Enrichment Agent",
        action: "Querying Clearbit/Apollo API & Google Search for funding & headcount.",
        tool: "Search & Enrichment API",
        output: "Result: Series B, 140 employees, ARR estimated $18M. Lead Score: 94/100 (HIGH TIER).",
      },
      {
        agent: "Executor Agent",
        action: "Mutating HubSpot CRM database record & generating custom executive pitch.",
        tool: "CRM API + Postgres",
        output: "Deal #8491 created, assigned to Enterprise AE, pitch draft appended to notes.",
      },
      {
        agent: "Sentinel Agent",
        action: "Running safety guardrail & dispatching immediate alert to Slack channel.",
        tool: "Slack Webhook + Zod",
        output: "Notification sent to #sales-enterprise. Zero human latency.",
      },
    ],
  },
  {
    id: "order-ops",
    title: "Multi-Channel Order & Enquiry Pipeline",
    description: "Ingests unstructured customer enquiries from WhatsApp & Web, checks inventory, calculates shipping estimates, and prepares invoices automatically.",
    target: "Customer Ops & E-Commerce",
    metrics: { timeSaved: "85%", latency: "380ms", reliability: "100%" },
    steps: [
      {
        agent: "Intake Agent",
        action: "Received customer WhatsApp voice note / text inquiry.",
        tool: "WhatsApp Cloud API",
        output: "Extracted intent: Custom keepsakes order (12 units, needed by Friday, Delhi NCR).",
      },
      {
        agent: "Inventory Agent",
        action: "Querying Supabase PostgreSQL product inventory & artisan capacity.",
        tool: "Postgres RPC Query",
        output: "Status: Raw materials available in warehouse A. Feasibility: Confirmed.",
      },
      {
        agent: "Quotation Agent",
        action: "Computing pricing tier, dynamic shipping SLA, and generating direct payment link.",
        tool: "Stripe / Razorpay API",
        output: "Quote generated: ₹14,400 with dynamic 10% volume discount applied.",
      },
      {
        agent: "Dispatch Agent",
        action: "Replying to customer on WhatsApp with pre-filled order approval and owner alert.",
        tool: "WhatsApp Messenger",
        output: "Customer received interactive WhatsApp card with instant pay link.",
      },
    ],
  },
  {
    id: "invoice-rag",
    title: "Cognitive Invoice & Document Reconciliation",
    description: "Extracts line items, vendor taxes, and bank details from messy multi-page PDF invoices, compares against purchase orders, and flags accounting discrepancies.",
    target: "Finance & Accounting Automation",
    metrics: { timeSaved: "95%", latency: "650ms", reliability: "99.8%" },
    steps: [
      {
        agent: "OCR & Vision Agent",
        action: "Multi-modal visual parsing of uploaded PDF supplier invoice.",
        tool: "Vision LLM + PyMuPDF",
        output: "Parsed 34 line items, detected vendor GSTIN & invoice total $14,280.00.",
      },
      {
        agent: "Cross-Reference Agent",
        action: "Semantic matching against ERP purchase orders in database.",
        tool: "Vector DB (pgvector)",
        output: "Matched with PO #9942. Discrepancy detected: Shipping charge +$45 higher than agreed contract.",
      },
      {
        agent: "Accounting Agent",
        action: "Auto-adjusting credit line and preparing QuickBooks draft entry.",
        tool: "Accounting API",
        output: "Draft journal entry #2041 created with variance tag flagged for 1-click CFO approval.",
      },
      {
        agent: "Audit Agent",
        action: "Archiving PDF with cryptographic hash and schema log in secure S3 bucket.",
        tool: "AWS S3 + Postgres Audit",
        output: "Audit log recorded with checksum 9f8a... Compliance passed.",
      },
    ],
  },
];

const AgentSimulator = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [runningStep, setRunningStep] = useState(3);
  const [isRunning, setIsRunning] = useState(false);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setRunningStep(0);

    const stepInterval = setInterval(() => {
      setRunningStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <section id="agent-demo" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
          Interactive Architecture Simulation
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Test Autonomous{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Agent Workflows
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
          Select a real-world business bottleneck below to watch how my multi-agent architectures break down problems, invoke tools, and execute verified outcomes without human delay.
        </p>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {scenarios.map((scenario) => {
          const isSelected = activeScenarioId === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => {
                setActiveScenarioId(scenario.id);
                setRunningStep(3);
                setIsRunning(false);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-[1.02]"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-emerald-500/40 hover:text-white"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>{scenario.title}</span>
            </button>
          );
        })}
      </div>

      {/* Simulator Card Display */}
      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Card Header & Controls */}
        <div className="p-6 sm:p-8 bg-[#020617]/90 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {activeScenario.target}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Model: Reasoning LLM + Tool Use
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeScenario.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              {activeScenario.description}
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`w-full md:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isRunning
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:opacity-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
              }`}
            >
              {isRunning ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                  <span>Agent Executing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Live Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Execution Grid */}
        <div className="p-6 sm:p-8 bg-[#030712]/95">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {activeScenario.steps.map((step, idx) => {
              const isFinished = runningStep >= idx;
              const isActive = runningStep === idx && isRunning;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02]"
                      : isFinished
                      ? "bg-white/[0.03] border-white/10"
                      : "bg-transparent border-white/5 opacity-40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase">
                        Step 0{idx + 1}
                      </span>
                      {isFinished && !isActive ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-gray-800" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-emerald-400" />
                      {step.agent}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      {step.action}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-cyan-400 border border-white/10 block truncate">
                      {step.tool}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal Log Console */}
          <div className="rounded-xl bg-[#020617] border border-white/10 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-gray-400 pb-2 mb-3 border-b border-white/5">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                EXECUTION LOG &bull; AUDIT TRAIL
              </span>
              <span className="text-gray-500 text-[11px]">
                Deterministic Validation: Active
              </span>
            </div>

            <div className="space-y-2 text-left">
              {activeScenario.steps.slice(0, runningStep + 1).map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold select-none">&rarr;</span>
                  <div>
                    <span className="text-gray-400 font-semibold">[{step.agent}]: </span>
                    <span className="text-gray-200">{step.output}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact Footer Metrics */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs text-gray-400 font-medium">Human Time Reclaimed</span>
              <p className="text-2xl font-black text-emerald-400 font-mono mt-0.5">
                {activeScenario.metrics.timeSaved}
              </p>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-medium">Average End-to-End Latency</span>
              <p className="text-2xl font-black text-cyan-400 font-mono mt-0.5">
                {activeScenario.metrics.latency}
              </p>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-medium">Deterministic Execution Rate</span>
              <p className="text-2xl font-black text-white font-mono mt-0.5">
                {activeScenario.metrics.reliability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSimulator;
