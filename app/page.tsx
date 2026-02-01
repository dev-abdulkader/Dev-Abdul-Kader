

// import Lenis from "@studio-freight/lenis";
import VideoSection from "@/components/home/video-section";
import HeroSection from "@/components/home/hero-section";
import SocialProof from "@/components/home/social-proof";
import TimelineExperience from "@/components/home/timeline-experience";
import Projects from "@/components/home/projects";
import Experiences from "@/components/home/experiences";
import Footer from "@/components/shared/footer";
import TechStack from "@/components/home/tech-stack";

export default function Home() {

  return (
    <main className="">
      <HeroSection />
      <SocialProof />
      <Experiences />
      <Projects />
      <TechStack />
      <Footer />
      {/* <Contact /> */}
    </main>
  );
}
