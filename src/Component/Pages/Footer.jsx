import React from "react";
import { IoIosRocket } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <footer className="px-[5vw] py-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
        <span>© 2026 Zannatun Nyem Naziat — Built with HTML, CSS & JS</span>
        <span className="inline-flex items-center ">
          Web Developer <IoIosRocket />
        </span>
      </footer>
    </div>
  );
}
