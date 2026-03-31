import React from "react";
import Banner from "../Pages/Banner/Banner";
import Skills from "../Pages/Skills/Skills";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Banner id="banner" />
      <Skills id="skills" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  );
}
