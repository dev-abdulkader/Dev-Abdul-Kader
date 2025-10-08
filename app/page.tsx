"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/project-section";
import StickyContainer from "@/components/home/sticky-section";
import Lenis from "@studio-freight/lenis";
import VideoSection from "@/components/home/video-section";
import AboutMe from "@/components/home/about-me";
import Contact from "@/components/home/contact";

export default function Home() {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 2.0,           // higher = slower scroll
      easing: (t) => t ** 0.8, // smooth easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 0.8,    // slower mouse wheel
      touchMultiplier: 1.5,    // slower touch scroll
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="">
      <Hero />
      <AboutMe />
      <StickyContainer />
      <ProjectsSection />
      <VideoSection />
      <Contact />
    </main>
  );
}
