import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Clock, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bottleneck: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:code.anubhavbaghel@gmail.com?subject=Automation Inquiry from ${encodeURIComponent(
      formData.name || "Prospect"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProcess Bottleneck: ${formData.bottleneck}\n\nProject Details:\n${formData.details}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's Automate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Next Breakthrough
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
          Whether you need an autonomous agent workflow, full-stack web application, or custom API integration, I'm available for both high-impact contract projects and full-time software engineering roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* Left Column: Direct Connect & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Direct Contact & Channels
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Reach out directly for rapid turnaround. Expect a thoughtful, technical response within 12 hours.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:code.anubhavbaghel@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono block">Direct Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    code.anubhavbaghel@gmail.com
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anubhavbaghel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono block">GitHub Repositories</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    github.com/anubhavbaghel
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anubhav-baghel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono block">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    linkedin.com/in/anubhav-baghel
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Clock className="w-4 h-4" />
              <span>Response SLA: Under 12 Hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Start a Conversation
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed">
              Describe the business process or software you want to build. I'll review and outline a concrete architectural blueprint.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Your inquiry message was formatted into your default email app. If it didn't open automatically, please reach out directly at <strong className="text-emerald-400">code.anubhavbaghel@gmail.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-mono hover:bg-white/20 transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-2">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-2">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-2">
                    Primary Operational Bottleneck:
                  </label>
                  <select
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                  >
                    <option value="" disabled>Select an area to automate...</option>
                    <option value="Lead Qualification & CRM Triage">Inbound Lead Qualification & CRM Triage</option>
                    <option value="Customer Operations & Commerce Bots">Customer Support & Multi-Channel Orders</option>
                    <option value="Document / Invoice Data Extraction">PDF Invoices & Document Processing</option>
                    <option value="Full-Stack Web / SaaS Platform Build">New Full-Stack Web / SaaS Platform Build</option>
                    <option value="Other Custom Software / Systems Integration">Other Custom Integration / API Project</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-2">
                    Project Details or Problem Context:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what your team currently does manually or the software you need built..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <span>Submit Inquiry & Request Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
