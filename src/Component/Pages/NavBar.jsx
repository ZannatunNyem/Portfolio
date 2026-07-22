import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="fixed z-[100] flex items-center justify-between w-full px-6 py-5 border-b border-white/10 backdrop-blur-[16px] ">
        <span className="font-bold text-[1.2rem] bg-gradient-to-r from-[#4167c4] to-[#85a3ed] bg-clip-text text-transparent ">
          Full Stack Web Developer
        </span>

        <ul className="flex gap-10 text-base-content">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
