import React from "react";
import { Bot, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#020617] py-12 px-4 sm:px-6 lg:px-8 text-xs text-gray-400 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="font-bold text-white text-sm block">
              Anubhav Baghel
            </span>
            <span className="text-gray-500 font-mono text-[11px]">
              Autonomous Software & Systems Architect
            </span>
          </div>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:code.anubhavbaghel@gmail.com"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaEnvelope className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/anubhavbaghel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anubhav-baghel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Scroll Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all cursor-pointer font-mono text-[11px]"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-[11px]">
        <span>&copy; {new Date().getFullYear()} Anubhav Baghel. All rights reserved.</span>
        <span className="font-mono">Engineered for deterministic performance and business ROI.</span>
      </div>
    </footer>
  );
};

export default Footer;
