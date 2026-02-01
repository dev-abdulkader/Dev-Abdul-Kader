

// import Lenis from "@studio-freight/lenis";
import HeroSection from "@/components/home/hero-section";
import SocialProof from "@/components/home/social-proof";
import TimelineExperience from "@/components/home/timeline-experience";
import Projects from "@/components/home/projects";
import Experiences from "@/components/home/experiences";
import Footer from "@/components/shared/footer";
import TechStack from "@/components/home/tech-stack";
import Contact from "@/components/home/contact";
import { VideoSection } from "@/components/home/video-section";

export default function Home() {

  return (
    <main className="">
      <HeroSection />
      <SocialProof />
      <Experiences />
      <Projects />
      <VideoSection />
      <TechStack />
      <Contact />
    </main>
  );
}
