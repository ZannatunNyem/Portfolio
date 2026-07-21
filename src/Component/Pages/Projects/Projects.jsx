import React from "react";
import { FiExternalLink } from "react-icons/fi";

import elearning from "../../../assets/elarn.webp";
import onlineShop from "../../../assets/onlineShop.PNG";
import delivery from "../../../assets/delivery.PNG";

export default function Projects() {
  const projects = [
    {
      image: elearning,
      title: "Learning Management System",
      desc: "A full stack e-learning platform where students can enroll in courses, track learning progress, and access course content. Includes secure authentication, role-based dashboards, and course management features.",
      tags: ["Next.js", "React", "MongoDB", "NextAuth"],
      link: "https://learning-platform-nine-psi.vercel.app/",
      shadow: "hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]",
    },
    {
      image: onlineShop,
      title: "Online Retail App",
      desc: "An online retail platform where users can browse products, manage a shopping cart, and enjoy a seamless shopping experience with secure authentication.",
      tags: ["React", "Firebase", "MongoDB"],
      link: "https://coffee-store-app-273a8.web.app/",
      shadow: "hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]",
    },
    {
      image: delivery,
      title: "Parcel Delivery Platform",
      desc: "A responsive parcel delivery platform that allows users to create delivery requests, monitor parcel status, and manage shipments through an intuitive interface.",
      tags: ["React", "Firebase", "MongoDB"],
      link: "https://nd-project-40242.web.app/",
      shadow: "hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]",
    },
  ];

  return (
    <section
      id="projects"
      className="px-5 py-16 md:py-24 max-w-[1200px] mx-auto relative"
    >
      <p className="text-xs uppercase tracking-widest text-neutral mb-2">
        My Work
      </p>

      <h2 className="text-[clamp(36px,5vw,56px)] font-bold mb-10">
        Featured{" "}
        <span className="bg-gradient-to-r from-[#60a5fa] to-[#2563eb] bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`max-w-sm w-full relative flex flex-col bg-card border border-border  rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-white/10 ${project.shadow}`}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[0.68rem] font-semibold uppercase px-2 py-1 rounded-full bg-white/6 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-extrabold text-lg mb-2">{project.title}</h3>

              <p className="text-sm text-muted flex-1">{project.desc}</p>

              <div className="flex gap-2 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border border-border transition-all hover:bg-[#2563eb]/10 hover:border-[#2563eb] hover:text-[#60a5fa]"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
