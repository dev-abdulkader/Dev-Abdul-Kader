import AboutMe from "@/components/home/about-me";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import ProjectsSection from "@/components/home/project-section";
import StickyContainer from "@/components/home/sticky-section";


export default function Home() {
  return (
    <main>
      <Hero />
      <StickyContainer />
      <ProjectsSection />
    </main>
  );
}
