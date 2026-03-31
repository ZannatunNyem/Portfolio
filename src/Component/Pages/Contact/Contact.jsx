import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-[5vw] text-center">
      {/* Section Label */}
      <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-4">
        Get In Touch
      </p>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
        Let's build something <span className="text-cyan-400">great</span>{" "}
        together.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-10">
        I'm open to work, junior developer roles, and exciting collaborations.
        Drop me a message!
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a
          href="mailto:z.naziat@gmail.com"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border transition-all hover:bg-[#2563eb]/10 hover:border-[#2563eb] hover:text-[#60a5fa]"
        >
          <HiOutlineMail className="text-lg" />
          Email Me
        </a>

        <a
          href="https://github.com/ZannatunNyem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border transition-all hover:bg-[#2563eb]/10 hover:border-[#2563eb] hover:text-[#60a5fa]"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/zannatun-nyem-naziat-71720b274/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border transition-all hover:bg-[#2563eb]/10 hover:border-[#2563eb] hover:text-[#60a5fa]"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
