import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.12)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.08)_0%,transparent_60%)]"></div>

      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-[80px]">
        <h1 className="hero-name leading-tight font-extrabold text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] text-white mb-4">
          Zannatun Nyem <br />
          <span className="line2 bg-gradient-to-r from-[#93C5FD] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent font-extrabold">
            Naziat.
          </span>
        </h1>

        <span className="block mx-auto mb-7  text-neutral font-mono font-normal text-[clamp(17px,2.8vw,24px)]">
          Junior Web Developer — HTML · CSS · JS · React
        </span>

        <p className="hero-sub text-neutral max-w-2xl mx-auto mb-8 text-base sm:text-lg">
          I build interactive websites from scratch. Clean code, thoughtful
          design, and a passion for building things that feel great to use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="btn btn-outline rounded-xl hover:bg-[#2563eb]/10 hover:border-[#2563eb] hover:text-[#60a5fa] w-full sm:w-auto text-center"
          >
            View My Work ↓
          </a>

          <a
            href="#contact"
            className="btn bg-[#3B82F6] rounded-xl shadow-[0_10px_50px_rgba(59,130,246,0.18)] w-full sm:w-auto text-center transition-transform duration-300 hover:shadow-[0_10px_50px_rgba(59,130,246,0.35)] hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <div className="section-divider h-[2px] bg-white/10 w-full "></div>
    </div>
  );
}
