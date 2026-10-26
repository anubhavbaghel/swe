import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Bot,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Play,
  RotateCcw,
} from "lucide-react";

const Hero = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  const simulationSteps = [
    {
      role: "System Ingestion",
      status: "Triggered via Webhook / WhatsApp",
      detail: "Inbound high-value enterprise lead received from portal.",
      badge: "INTAKE 200 OK",
      color: "text-blue-400",
    },
    {
      role: "Agent Reasoning",
      status: "Decomposing & Synthesizing",
      detail: "Evaluating company size, technical fit, and qualification schema.",
      badge: "LLM REASONING",
      color: "text-amber-400",
    },
    {
      role: "Tool Execution",
      status: "CRM & Database Mutation",
      detail: "Enriched prospect via APIs, auto-assigned tier-1 SDR & created proposal draft.",
      badge: "TOOL_CALL: POSTGRES + CRM",
      color: "text-emerald-400",
    },
    {
      role: "Guardrail Check",
      status: "Validated & Finalized",
      detail: "Zero hallucination verification passed. Instant Slack / Email alert sent.",
      badge: "DETERMINISTIC VERIFIED",
      color: "text-teal-400",
    },
  ];

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % simulationSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial spotlights & subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Stack Engineer &bull; Agentic AI Architect</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Autonomous AI Systems
              </span>{" "}
              that Solve Critical Business Friction.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              I build production-grade web platforms and custom agentic workflows that replace manual bottlenecks with intelligent, multi-step automation. From multi-agent tool execution to enterprise full-stack architectures.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#agent-demo"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all hover:scale-105 cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>Test Live Agent Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solutions"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 hover:border-emerald-500/40 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Key trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-mono">
                  85%+
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Reduction in Manual Ops Latency
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  100%
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Deterministic & Guardrailed
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                  End-to-End
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Architecture to Cloud Deployment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Agent Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#020617]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    agent-runtime.orchestrator.ts
                  </span>
                </div>
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                  title="Pause/Play simulation"
                >
                  {isSimulating ? "PAUSE" : "RESUME"}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-left bg-[#030712]/95 min-h-[380px] flex flex-col justify-between">
                {/* Header info */}
                <div className="space-y-1.5 pb-4 border-b border-white/5 text-gray-400">
                  <div className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <Bot className="w-4 h-4" />
                    <span>Agent State: READY &bull; Model: Gemini 2.5 / Claude 3.5</span>
                  </div>
                  <div className="text-gray-500 text-[11px]">
                    Pipeline: Multi-Agent Ingestion &rarr; Context Synthesis &rarr; Action
                  </div>
                </div>

                {/* Stepper Visualization */}
                <div className="py-4 space-y-3">
                  {simulationSteps.map((step, idx) => {
                    const isCurrent = activeStep === idx;
                    const isPassed = activeStep > idx;

                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border transition-all duration-300 ${
                          isCurrent
                            ? "bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] translate-x-1"
                            : isPassed
                            ? "bg-white/[0.02] border-white/5 opacity-80"
                            : "bg-transparent border-transparent opacity-40"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-200 flex items-center gap-2">
                            {isPassed ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            ) : isCurrent ? (
                              <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin inline-block" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full bg-gray-700 inline-block" />
                            )}
                            {step.role}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded border border-white/10 ${step.color} bg-black/40`}>
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[11px] leading-relaxed pl-5">
                          {step.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Terminal Status Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Agent Active &bull; Zero Hallucination Mode
                  </span>
                  <span className="text-gray-500">Latency: 480ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
