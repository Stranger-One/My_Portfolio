import { useEffect, useRef } from "react";
import { Header } from "./components";
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
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="w-full px-10">
        {/* Hero section */}
        <HeroSection sectionId="hero" />

        {/* About section */}
        <AboutSection sectionId="about" />

        {/* Projects section */}
        <ProjectsSection sectionId="projects" />

        {/* Skills section */}
        <SkillsSection sectionId="skills" />

        {/* Experience section */}
        <ExperienceSection sectionId="experience" />

        {/* Contact section */}
        <ContactSection sectionId="contact" />
      </main>

      {/* Footer */}
      <footer>Footer</footer>
    </div>
    // </ReactLenis>
  );
}

export default App;
