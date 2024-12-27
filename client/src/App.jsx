import { useEffect, useRef, useState } from "react";
import {
  Header,
  MouseFollower,
} from "./components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "./sections";
import Lenis from "lenis";
import { Toaster } from 'react-hot-toast';

function App() {
  const [mouseFollowerSize, setMouseFollowerSize] = useState("small");
  const [isOnTop, setIsOnTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);
    

  const handleScroll = (e) => {
    // console.log((window.scrollY).toFixed(0))
    const scrollPosition = window.scrollY.toFixed(0);

    if (scrollPosition > 50) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="min-h-screen select-none md:select-auto w-full relative bg-background-light dark:bg-background-dark  text-secondary-dark dark:text-secondary-light">
      <MouseFollower mouseFollowerSize={mouseFollowerSize} />

      {/* Header */}
      <Header isOnTop={isOnTop} activeSection={activeSection} />

      {/* Main */}
      <main className="w-full">
        {/* Hero section */}
        <HeroSection
          ref={(el) => (sectionRefs.current[0] = el)}
          sectionId="hero"
        />

        {/* About section */}
        <AboutSection
          ref={(el) => (sectionRefs.current[1] = el)}
          sectionId="about"
          setMouseFollowerSize={setMouseFollowerSize}
        />

        {/* Skills section */}
        <SkillsSection
          ref={(el) => (sectionRefs.current[3] = el)}
          sectionId="skills"
        />

        {/* Projects section */}
        <ProjectsSection 
          ref={(el) => (sectionRefs.current[2] = el)}
          sectionId="projects"
        />

        {/* Experience section */}
        <ExperienceSection 
          ref={(el) => (sectionRefs.current[4] = el)}
          sectionId="experience"
        />

        {/* Contact section */}
        <ContactSection
          ref={(el) => (sectionRefs.current[5] = el)}
          sectionId="contact"
        />
      </main>

      <Toaster />
    </div>
  );
}

export default App;
