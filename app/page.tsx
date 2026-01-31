
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/project-section";
import StickyContainer from "@/components/home/sticky-section";
import VideoSection from "@/components/home/video-section";
import AboutMe from "@/components/home/about-me";
import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {

  return (
    <main className="">
      <Hero />
      <AboutMe />
      <StickyContainer />
      <ProjectsSection />
      <VideoSection />
      <Contact />
      <Footer />
    </main>
  );
}
