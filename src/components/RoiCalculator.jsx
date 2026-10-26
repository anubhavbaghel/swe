import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const RoiCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [teamSize, setTeamSize] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculations
  const totalWeeklyHours = hoursPerWeek * teamSize;
  const annualHoursSpent = totalWeeklyHours * 50; // 50 working weeks
  const annualCost = annualHoursSpent * hourlyRate;

  // Assuming 80% automation efficiency with agentic AI & software
  const hoursSavedAnnual = Math.round(annualHoursSpent * 0.8);
  const dollarsSavedAnnual = Math.round(annualCost * 0.8);

  return (
    <section id="roi-calculator" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3 inline-block">
              Business Value Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Estimate Your Operational{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Automation ROI
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Adjust the sliders below based on your team's manual data entry, customer triage, or document workflows to calculate hours and capital saved with custom Agentic AI.
            </p>

            {/* Slider 1: Hours / Week */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-200">
                  Repetitive Hours Spent Per Person / Week:
                </label>
                <span className="text-sm font-mono font-bold text-emerald-400">
                  {hoursPerWeek} hrs
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                <span>5 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Slider 2: Team Members */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-200">
                  Team Members Handling This Workflow:
                </label>
                <span className="text-sm font-mono font-bold text-cyan-400">
                  {teamSize} {teamSize === 1 ? "person" : "people"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                <span>1 person</span>
                <span>10 people</span>
                <span>20 people</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-200">
                  Average Hourly Labor Cost:
                </label>
                <span className="text-sm font-mono font-bold text-amber-400">
                  ${hourlyRate} / hr
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                <span>$20/hr</span>
                <span>$70/hr</span>
                <span>$120/hr</span>
              </div>
            </div>
          </div>

          {/* Right Column: Output Metrics Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#020617] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  PROJECTED ANNUAL LEVERAGE
                </span>
                <span className="text-[10px] font-mono text-gray-500">
                  80% Efficiency Gain
                </span>
              </div>

              {/* Dollars Saved */}
              <div className="mb-6">
                <span className="text-xs text-gray-400 uppercase font-mono block">
                  Annual Capital Saved
                </span>
                <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-mono mt-1">
                  ${dollarsSavedAnnual.toLocaleString()}
                </p>
                <span className="text-xs text-emerald-400/80 font-mono mt-1 block">
                  Re-allocated towards core revenue growth
                </span>
              </div>

              {/* Hours Reclaimed */}
              <div className="mb-8 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-400 uppercase font-mono block">
                  Team Hours Reclaimed Per Year
                </span>
                <p className="text-3xl font-extrabold text-white font-mono mt-1">
                  {hoursSavedAnnual.toLocaleString()} hrs
                </p>
                <span className="text-xs text-gray-500 font-mono mt-0.5 block">
                  Eliminates {Math.round(hoursSavedAnnual / 40)} work-weeks of manual drag
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg transition-all hover:scale-105"
              >
                <span>Automate This Bottleneck</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
