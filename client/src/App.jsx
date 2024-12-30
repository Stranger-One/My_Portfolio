import { useEffect, useRef, useState } from "react";
import { Header, MouseFollower } from "./components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "./sections";
import Lenis from "@studio-freight/lenis";
import { Toaster } from "react-hot-toast";
import { TbLoader3 } from "react-icons/tb";


function App() {
  const [mouseFollowerSize, setMouseFollowerSize] = useState("small");
  const [isOnTop, setIsOnTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);
  const lenisRef = useRef(null); // Use a ref to store the Lenis instance

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    lenisRef.current = lenis; // Store the instance in the ref

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollToSection = (target) => {
    const lenis = lenisRef.current; // Access the Lenis instance
    const targetElement = document.querySelector(target);

    if (lenis && targetElement) {
      lenis.scrollTo(targetElement, { lerp: 0.1 });
      // console.log("Scrolled to:", target);
    } else {
      console.error("Lenis instance or target element is undefined");
    }
  };

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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);



  return (
    <div className="min-h-screen select-none md:select-auto w-full relative bg-background-light dark:bg-background-dark  text-secondary-dark dark:text-secondary-light">
      <div id="preloader" className={`${isLoading ? "flex" : "hidden"} transition-opacity duration-150 bg-background-light dark:bg-background-dark text-secondary-dark dark:text-secondary-light absolute top-0 left-0 w-full h-screen justify-center items-center z-[60]`}>
        <TbLoader3 size={52} className="animate-spin" />
      </div>

      <MouseFollower mouseFollowerSize={mouseFollowerSize} />

      {/* Header */}
      <Header
        isOnTop={isOnTop}
        activeSection={activeSection}
        handleScrollToSection={handleScrollToSection}
      />

      {/* Main */}
      <main className="w-full">
        {/* Hero section */}
        <HeroSection
          ref={(el) => (sectionRefs.current[0] = el)}
          sectionId="hero"
          handleScrollToSection={handleScrollToSection}
        />

        {/* About section */}
        <AboutSection
          ref={(el) => (sectionRefs.current[1] = el)}
          sectionId="about"
          setMouseFollowerSize={setMouseFollowerSize}
          handleScrollToSection={handleScrollToSection}
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
