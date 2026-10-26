import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CorePillars from "./components/CorePillars";
import AgentSimulator from "./components/AgentSimulator";
import SolutionsShowcase from "./components/SolutionsShowcase";
import RoiCalculator from "./components/RoiCalculator";
import TechArsenal from "./components/TechArsenal";
import AboutApproach from "./components/AboutApproach";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CorePillars />
        <AgentSimulator />
        <SolutionsShowcase />
        <RoiCalculator />
        <TechArsenal />
        <AboutApproach />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
