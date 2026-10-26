import React from "react";
import { CheckCircle2, ShieldAlert, Cpu, Target, Award, Code2, Sparkles } from "lucide-react";
import profileImg from "../assets/profile.png";

const AboutApproach = () => {
  const principles = [
    {
      title: "Architecture Before Automation",
      detail: "Agents require deterministic state, hardened database schemas, and clear API boundaries. I build the rock-solid software infrastructure before unleashing autonomous reasoning.",
    },
    {
      title: "Zero Hallucination Tolerance",
      detail: "Business data cannot afford hallucinations. Every agent output is validated through strict Pydantic/Zod typing, sanity checks, and automated human-in-the-loop review thresholds.",
    },
    {
      title: "Pragmatic Business ROI",
      detail: "Technology must pay for itself. I focus exclusively on operational bottlenecks with measurable labor drag, high manual latency, or error-prone repetitive friction.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar & Bio */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <img
                  src={profileImg}
                  alt="Anubhav Baghel"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-bold uppercase shadow-md">
                Active
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Anubhav Baghel
            </h3>
            <p className="text-emerald-400 font-mono text-xs sm:text-sm mt-1 mb-4">
              Software Developer &bull; AI Automation Specialist
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
              Based in New Delhi, I specialize in full-stack architecture, API orchestration, and autonomous agent workflows. Having engineered and maintained production systems across dozens of client deployments, I understand how real businesses operate and where software leverage produces maximum returns.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                60+ Client Sites Contributed
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                Full-Stack & SSR
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                Multi-Agent Systems
              </span>
            </div>
          </div>

          {/* Right Column: The Philosophy */}
          <div className="lg:col-span-7 text-left lg:border-l lg:border-white/10 lg:pl-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3 inline-block">
              Philosophy & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Why Software Engineering Must Come First in AI
            </h2>

            <div className="space-y-6">
              {principles.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
