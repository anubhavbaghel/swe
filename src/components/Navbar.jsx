import React, { useState, useEffect } from "react";
import {
  Cpu,
  Bot,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pillars", href: "#pillars" },
    { name: "Agent Demo", href: "#agent-demo" },
    { name: "Solutions", href: "#solutions" },
    { name: "Tech Stack", href: "#arsenal" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Bot className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5">
              Anubhav Baghel
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SWE • AI
              </span>
            </span>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline-block">
              Agentic Automation & Software Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Pill & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Projects
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:opacity-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
          >
            <span>Let's Build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slideout / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#030712]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Contract & Full-Time
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-200 hover:text-emerald-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
