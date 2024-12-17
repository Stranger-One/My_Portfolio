import { useEffect, useRef, useState } from "react";
import { BackToTopBtn, Header, MouseFollower, ScrollButton } from "./components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "./sections";
import Lenis from "lenis";

function App() {
  const [mouseFollowerSize, setMouseFollowerSize] = useState("small")




  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <MouseFollower mouseFollowerSize={mouseFollowerSize} />

      {/* Header */}
      <Header />

      {/* Main */}
      <main className="w-full px-10">
        {/* Hero section */}
        <HeroSection sectionId="hero" />

        {/* About section */}
        <AboutSection sectionId="about" setMouseFollowerSize={setMouseFollowerSize} />

        {/* Projects section */}
        <ProjectsSection sectionId="projects" />

        {/* Skills section */}
        <SkillsSection sectionId="skills" />

        {/* Experience section */}
        <ExperienceSection sectionId="experience" />

        {/* Contact section */}
        <ContactSection sectionId="contact" />
      </main>

      {/* back to top */}
      {/* <BackToTopBtn/> */}

      {/* Footer */}
      <footer>Footer</footer>
    </div>
    // </ReactLenis>
  );
}

export default App;
