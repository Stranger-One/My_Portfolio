import React, { Suspense, useEffect, useRef, useState } from "react";
import { Header, MouseFollower } from "./components";
import { HeroSection } from "./sections";
import Lenis from "lenis";
import { Toaster } from "react-hot-toast";
const AboutSection = React.lazy(() => import("./sections/AboutSection"));
const ContactSection = React.lazy(() => import("./sections/ContactSection"));
const ProjectsSection = React.lazy(() => import("./sections/ProjectsSection"));
const SkillsSection = React.lazy(() => import("./sections/SkillsSection"));
const ExperienceSection = React.lazy(() =>
  import("./sections/ExperienceSection")
);

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
        <Suspense fallback={<div>Loading ...</div>}>
          <AboutSection
            ref={(el) => (sectionRefs.current[1] = el)}
            sectionId="about"
            setMouseFollowerSize={setMouseFollowerSize}
          />
        </Suspense>

        {/* Skills section */}
        <Suspense fallback={<div>Loading ...</div>}>
          <SkillsSection
            ref={(el) => (sectionRefs.current[3] = el)}
            sectionId="skills"
          />
        </Suspense>

        {/* Projects section */}
        <Suspense fallback={<div>Loading ...</div>}>
          <ProjectsSection
            ref={(el) => (sectionRefs.current[2] = el)}
            sectionId="projects"
          />
        </Suspense>

        {/* Experience section */}
        <Suspense fallback={<div>Loading ...</div>}>
          <ExperienceSection
            ref={(el) => (sectionRefs.current[4] = el)}
            sectionId="experience"
          />
        </Suspense>

        {/* Contact section */}
        <Suspense fallback={<div>Loading ...</div>}>
          <ContactSection
            ref={(el) => (sectionRefs.current[5] = el)}
            sectionId="contact"
          />
        </Suspense>
      </main>

      <Toaster />
    </div>
  );
}

export default App;
