import React from "react";
import Hero from "../home/Hero";
import Skills from "../home/Skills";
import About from "../home/About";
import Contact from "../home/Contact";
import Projects from "../home/Projects";

const LandingPage = () => {
  return (
    <div className="relative ">
      <Hero />
      <About />
      <Projects />
      <Skills />

      <Contact />
    </div>
  );
};

export default LandingPage;
