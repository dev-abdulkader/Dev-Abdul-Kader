
import Hero from "@/components/home/Hero";
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
