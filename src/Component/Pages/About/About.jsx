import React from "react";
import { FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { TbBrandJavascript, TbBrandReact } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import about from "../../../assets/about.webp";
export default function About() {
  return (
    <section
      id="about"
      className="grid md:grid-cols-2 gap-20 items-center py-24 max-w-[1200px] mx-auto relative"
    >
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-card border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden ">
          <img
            src={about}
            className="w-full h-full object-cover rounded-3xl"
            alt=""
            srcset=""
          />
        </div>

        <div className="absolute top-6 left-[-20px] bg-secondary border border-white/10 rounded-2xl px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center gap-2">
          <FaProjectDiagram className="text-[#60a5fa]" /> 3 Projects Shipped
        </div>

        <div className="absolute bottom-8 right-[-20px] bg-secondary border border-white/10 rounded-2xl px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center gap-2">
          <BsPersonWorkspace className="text-[#60a5fa]" /> Open to Work
        </div>
      </div>

      <div>
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-neutral mb-4 font-mono">
          <span className="block w-8 h-[1.5px] bg-neutral"></span>
          About Me
        </p>

        <h2 className="text-[clamp(36px,5vw,56px)] font-bold leading-tight mb-6">
          Passionate about building for the web
        </h2>

        <p className="text-neutral leading-7 mb-4">
          I'm a full stack web developer who loves creating clean, fast, and
          beautiful digital experiences. I focus on writing maintainable code
          and building projects that actually solve problems.
        </p>

        <p className="text-neutral leading-7 mb-8">
          I'm currently growing my skills in Next.Js, React and modern
          JavaScript, and I'm looking for opportunities to contribute to real
          world teams and products.
        </p>

        <div className="flex gap-10">
          <div className="flex flex-col items-start">
            <div className="text-3xl font-extrabold text-accent flex items-center gap-2">
              3+
            </div>
            <div className="text-sm text-neutral">Projects Built</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-3xl font-extrabold text-info flex items-center gap-2">
              4
            </div>
            <div className="text-sm text-neutral">Tech Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
}
