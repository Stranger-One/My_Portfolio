import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDropdown, IoMdDownload } from "react-icons/io";
import Typical from "react-typical";
import { Link } from "react-scroll";
import { DownloadResume, MouseFollower, ScrollButton } from "../components";
import SplitType from "split-type";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ sectionId, setMouseFollowerSize }) => {
  const aboutPageRef = useRef();

  useGSAP(() => {
    const text = new SplitType(".parah", { types: "words, chars" });
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
    const words = document.querySelectorAll(".parah .word");
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

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: text.chars,
        // pin: true, // pin the trigger element while active
        start: "top 60%", // when the top of the trigger hits the top of the viewport
        end: "+=150", // end after scrolling 500px beyond the start
        // markers: true,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: 10,
      x: -10,
      opacity: 0,
      stagger: 0.01,
    });

    gsap.from(".btns", {
      opacity: 0,
      y: 10,
      duration: 1,
      scrollTrigger: {
        trigger: ".btns",
        start: "top 90%", // Animation starts when the element is 80% in view
        end: "+=50", // Ends at 20% in view
        scrub: true, // Smooth scroll-based animation
        // markers: true, // Set true to debug with visual markers
      },
    });

    gsap.from(".skill-container", {
      x: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".skill-container",
        start: "90% 90%",
        end: "+=50",
        scrub: 0.4,
        // markers: true,
      },
    });
  }, {});

  return (
    <section className="relative flex flex-col gap-20">
      <div className="aboutMe sticky top-0 w-full h-screen flex flex-col gap-10 items-center justify-center">
        <h1
          ref={aboutPageRef}
          className="w-fit text-9xl font-freeman tracking-wider font-semibold cursor-none"
          onMouseEnter={()=>setMouseFollowerSize("big")}
          onMouseLeave={()=>setMouseFollowerSize("small")}
        >
          About Me.
        </h1>
        <IoIosArrowDropdown
          size={40}
          className="animate-bounce absolute bottom-20 left-1/2 -translate-x-1/2"
        />
      </div>

      <div
        id={sectionId}
        className=" sticky top-24 w-full h-screen bg-background-light dark:bg-background-dark py-20"
      >
        {/* <h2 className="mt-16 mx-auto text-3xl w-fit">About Me.</h2> */}
        <div className="grid grid-cols-2 gap-8 max-w-[1200px] m-auto font-courgette">
          {/* Left: Introduction */}
          <div className="relative">
            <h2 className="parah text-5xl font-bold mb-5 text-primary font-freeman tracking-wider">
              About Me
            </h2>
            <p className="parah text-2xl leading-7 mb-5 cursor-none">
              Hello! I'm Dolamani Rohidas, a passionate and results-driven MERN
              Stack Developer with experience in building highly interactive and
              scalable web applications. I specialize in React.js, Node.js, and
              Socket.IO, along with expertise in integrating services like
              WebRTC, Cloudinary, and MongoDB.
            </p>
            <p className="parah text-2xl font-normal leading-7 mb-5 cursor-none">
              I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions. My journey started with a deep interest in
              coding, and I have since mastered tools that bring ideas to life.
            </p>
            {/* CTA Buttons */}
            <div className="flex btns gap-4">
              <DownloadResume />
              <ScrollButton varient="outline" to="contact">
                Let's Connect
              </ScrollButton>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="skill-container text-center bg-secondary-light p-8 rounded-xl ">
            <h3 className="text-2xl mb-4 text-secondary-dark font-freeman tracking-wider">
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
                  className="skillItem bg-background-light rounded-lg text-center p-2 hover:bg-primary duration-150 text-text-light cursor-pointer "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="bg-green-700/40 sticky top-10 w-full h-screen"></div>
      <div className="bg-green-900/40 sticky top-10 w-full h-screen"></div> */}
    </section>
  );
};

export default AboutSection;
