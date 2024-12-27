import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDropdown, IoMdDownload } from "react-icons/io";
import { DownloadResume, MouseFollower, ScrollButton } from "../components";
import SplitType from "split-type";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ sectionId, ref, setMouseFollowerSize }) => {
  const aboutPageRef = useRef();

  useGSAP(() => {
    const text1 = new SplitType(".parah1", { types: "words, chars" });
    const text2 = new SplitType(".parah2", { types: "words, chars" });
    // Words to highlight
    const wordsToHighlight = [
      "Dolamani",
      "Rohidas",
      "React.js",
      "Node.js",
      "Socket.IO",
    ];
    // Words to bold
    const wordsToBold = ["MERN", "Stack", "Developer"];

    // Reapply highlight class
    const words = document.querySelectorAll(".parah1 .word");
    words.forEach((word) => {
      wordsToHighlight.forEach((wordToChange) => {
        if (word.textContent.includes(wordToChange)) {
          word.classList.add("highlight");
        }
      });
    });

    words.forEach((word) => {
      wordsToBold.forEach((wordToChange) => {
        if (word.textContent.includes(wordToChange)) {
          word.classList.add("textSemibold");
        }
      });
    });

    // const textTl = gsap.timeline();
    gsap.from(".aboutMeHead", {
      scrollTrigger: {
        trigger: ".aboutMeHead",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 2,
      },
      opacity: 0,
      duration: 1,
      y: 100,
    });

    gsap.from(text1.chars, {
      scrollTrigger: {
        trigger: ".aboutMeHead",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 2,
      },
      opacity: 0,
      stagger: 0.01,
    });

    gsap.from(text2.chars, {
      scrollTrigger: {
        trigger: ".parah2",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 2,
      },
      opacity: 0,
      stagger: 0.01,
    });

    gsap.from(".btns", {
      scrollTrigger: {
        trigger: ".parah2",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        scrub: 0.5,
      },
      y: 20,
      delay: 1,
      duration: 1,
      opacity: 0,
      // stagger: 0.5,
    });
    
    gsap.from(".skill-container", {
      scrollTrigger: {
        trigger: ".skill-container",
        start: "top 60%",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(".skillItem", {
      scrollTrigger: {
        trigger: ".skill-container",
        start: "top 60%",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
      x: 20,
      delay: 2,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.to(".aboutHeadingContainer", {
      height: 0,
      scrollTrigger: {
        trigger: ".aboutHeadingContainer",
        start: "100% 20%",
        end: "+=100",
        scrub: 0.4,
        // markers: true,
      },
    });
  }, {});

  return (
    <section
      ref={ref}
      className="section relative flex flex-col gap-20"
    >
      <div className="aboutMe sticky top-0 w-full h-screen flex flex-col gap-10 items-center justify-center ">
        <div className=" w-fit aboutHeadingContainer relative overflow-hidden">
          <h1
            ref={aboutPageRef}
            className="w-fit text-5xl md:text-9xl font-freeman tracking-wider font-semibold cursor-none "
            onMouseEnter={() => setMouseFollowerSize("big")}
            onMouseLeave={() => setMouseFollowerSize("small")}
          >
            About <span className="highlight">Me.</span>
          </h1>
        </div>
        <IoIosArrowDropdown
          size={40}
          className="animate-bounce absolute bottom-20 "
        />
      </div>

      
      <div id={sectionId} className="sticky top-24 w-full h-fit bg-background-light dark:bg-background-dark p-5 md:p-20 border-t-2 dark:border-secondary-light border-secondary-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] m-auto font-courgette">
          {/* Left: Introduction */}
          <div className="leftContainer relative text-center md:text-left ">
            <div className="w-fit overflow-hidden mb-5 ">
              <h2 className="aboutMeHead text-3xl md:text-5xl font-bold  text-primary font-freeman tracking-wider">
                About Me
              </h2>
            </div>
            <p className="parah1 text-xl md:text-2xl leading-6 md:leading-7 mb-5 cursor-none ">
              Hello! I'm Dolamani Rohidas, a passionate and results-driven MERN
              Stack Developer with experience in building highly interactive and
              scalable web applications. I specialize in React.js, Node.js, and
              Socket.IO, along with expertise in integrating services like
              WebRTC, Cloudinary, and MongoDB.
            </p>
            <p className="parah2 text-xl md:text-2xl font-normal leading-6 md:leading-7 mb-5 cursor-none ">
              I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions. My journey started with a deep interest in
              coding, and I have since mastered tools that bring ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row btns gap-4">
              <DownloadResume className="btn" />
              <ScrollButton className="btn" varient="outline" to="contact">
                Let's Connect
              </ScrollButton>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="skill-container text-center bg-secondary-light p-8 rounded-xl z-30 relative ">
            <h3 className="text-2xl mb-4 text-secondary-dark font-freeman tracking-wider cursor-none">
              My Tech Stack
            </h3>
            <ul className="skills-list">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO",
                "WebRTC",
                "Cloudinary",
                "Git & GitHub",
                "REST APIs",
              ].map((item, index) => (
                <li
                  key={index}
                  className="skillItem bg-background-light rounded-lg text-center p-2 md:hover:bg-primary text-text-light cursor-pointer "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
