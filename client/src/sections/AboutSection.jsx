import React, { useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { DownloadResume, ScrollButton } from "../components";
import SplitType from "split-type";


const AboutSection = ({ sectionId, ref, setMouseFollowerSize, handleScrollToSection }) => {
  const aboutPageRef = useRef();


  return (
    <section
      ref={ref}
      className="section relative flex flex-col gap-20"
    >
      <div className="aboutMe sticky top-[200px] lg:top-0 w-full h-[40vh] lg:h-screen flex flex-col gap-10 items-center justify-center">
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
          className="animate-bounce absolute hidden lg:block lg:bottom-20 "
        />
      </div>
      
      <div id={sectionId} className="section-container sticky top-24 w-full h-fit bg-background-light dark:bg-background-dark border-t-2 dark:border-secondary-light border-secondary-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-courgette">
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
              <ScrollButton handleScrollToSection={handleScrollToSection} className="btn" varient="outline" to="#contact">
                Let's Connect
              </ScrollButton>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="skill-container text-center bg-secondary-light rounded-xl z-30 relative p-6">
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
