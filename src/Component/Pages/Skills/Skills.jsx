import React from "react";
import { FaCss3Alt, FaFireAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-32 max-w-[1200px] mx-auto relative z-10"
    >
      {/* Section Label */}
      <div className="flex items-center gap-5 text-neutral text-xs uppercase tracking-widest mb-4 font-mono">
        <span className="block w-8 h-[1.5px] bg-neutral"></span>
        What I know
      </div>

      {/* Section Title */}
      <h2 className="text-[clamp(36px,5vw,56px)] font-bold mb-16 leading-tight">
        Skills &{" "}
        <span className="bg-gradient-to-r from-[#60a5fa] to-[#2563eb] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* HTML */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(255,107,53,0.12)]">
          <FaHtml5 className="text-5xl text-[#e34f26] mb-3" />
          <div className="text-xs text-neutral">HTML5</div>
        </div>

        {/* CSS */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(41,101,241,0.12)]">
          <FaCss3Alt className="text-5xl text-[#2965f1] mb-3" />
          <div className="text-xs text-neutral">CSS3</div>
        </div>

        {/* JavaScript */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(240,219,79,0.12)]">
          <FaJs className="text-5xl text-[#f0db4f] mb-3" />
          <div className="text-xs text-neutral">JavaScript</div>
        </div>

        {/* React */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(97,218,251,0.12)]">
          <FaReact className="text-5xl text-[#61dafb] mb-3" />
          <div className="text-xs text-neutral">React</div>
        </div>

        {/* MongoDB */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(76,175,80,0.12)]">
          <SiMongodb className="text-5xl text-[#47a248] mb-3" />
          <div className="text-xs text-neutral">MongoDB</div>
        </div>

        {/* Firebase */}
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(255,202,40,0.12)]">
          <FaFireAlt className="text-5xl text-[#ffca28] mb-3" />
          <div className="text-xs text-neutral">Firebase</div>
        </div>
      </div>
    </section>
  );
}
