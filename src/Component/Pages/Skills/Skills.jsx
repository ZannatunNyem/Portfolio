import React from "react";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-32 max-w-[1200px] mx-auto relative z-10"
    >
      <div className="flex items-center gap-5 text-neutral text-xs uppercase tracking-widest mb-4 font-mono">
        <span className="block w-8 h-[1.5px] bg-neutral"></span>
        What I know
      </div>

      <h2 className="text-[clamp(36px,5vw,56px)] font-bold mb-16 leading-tight">
        Skills &{" "}
        <span className="bg-gradient-to-r from-[#60a5fa] to-[#2563eb] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(240,219,79,0.12)]">
          <FaJs className="text-5xl text-[#f7df1e] mb-3" />
          <div className="text-xs text-neutral">JavaScript</div>
        </div>

        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(97,218,251,0.12)]">
          <FaReact className="text-5xl text-[#61dafb] mb-3" />
          <div className="text-xs text-neutral">React.js</div>
        </div>

        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]">
          <SiNextdotjs className="text-5xl mb-3" />
          <div className="text-xs text-neutral">Next.js</div>
        </div>

        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(104,160,99,0.12)]">
          <FaNodeJs className="text-5xl text-[#68a063] mb-3" />
          <div className="text-xs text-neutral">Node.js</div>
        </div>

        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(76,175,80,0.12)]">
          <SiMongodb className="text-5xl text-[#47a248] mb-3" />
          <div className="text-xs text-neutral">MongoDB</div>
        </div>

        <div className="relative bg-card border border-border rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(56,189,248,0.12)]">
          <SiTailwindcss className="text-5xl text-[#38bdf8] mb-3" />
          <div className="text-xs text-neutral">Tailwind CSS</div>
        </div>
      </div>
    </section>
  );
}
